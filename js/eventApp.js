"use strict";$(document).on("keydown",function(e){8===e.which&&"INPUT"!==e.target.nodeName&&"SELECT"!==e.target.nodeName&&e.preventDefault()}),angular.module("eventApp",["ngRoute","ngMessages","firebase","ui.timepicker","720kb.datepicker"]).controller("AppController",["$scope","$document","$rootScope","$location","$routeParams","$firebaseObject","$firebaseArray","$timeout","EventService",function(e,t,n,i,r,a,o,d,s){function v(t,n){t?d(function(){e.signInFailure=!0},0):(d(function(){e.isLoggedIn=!0,e.signInFailure=!1},0),e.authUser=n.uid,d(c,500))}function c(){e.topMenuSelect("edit"),s.addUser({email:e.email}),i.path("/event/")}e.isLoggedIn=!1,e.signInFailure=!1,e.isRegistered=!1,e.signinWindow=function(){d(function(){document.getElementById("signinemail").focus()},500)},e.registerWindow=function(){d(function(){document.getElementById("registername").focus()},500),e.regForm.$setUntouched(),e.regForm.$setPristine()},e.resetUser=function(){e.user={}};var l="https://scurve.firebaseio.com",u=new Firebase(l);e.logOut=function(){e.isLoggedIn=!1,e.isRegistered=!1,e.registerError=!1,e.resetUser(),s.ClearUser(),e.events={},e.topMenuSelect("contact"),i.path("#/home"),u.unauth(),e.authUser=null,d(function(){document.getElementById("signinButton").focus()},1e3)},e.signIn=function(t){t.preventDefault();var n=e.user.email,i=e.user.password;u.authWithPassword({email:n,password:i},v)},e.log=function(t){e.isRegistered=!0,console.log("Hi! You're registered")},e.log2=function(e){n.isLoggedIn=!0,console.log("Hi! You're logged in")},e.registerUser=function(t){t.preventDefault();var n=e.user.email,i=e.user.name,r=e.user.password,a={name:i,email:n};u.createUser({email:n,password:r},function(t,n){t?(console.log("Error creating user: "+t),d(function(){e.registerError=!0},1e3)):(e.isRegistered=!0,e.registerError=!1,e.users.$add(a))})},e.contactMenuIsSelected=!0,e.topMenuSelect=function(t){switch(t){case"contact":e.contactMenuIsSelected=!0,e.editMenuIsSelected=!1,e.allMenuIsSelected=!1;break;case"edit":e.isLoggedIn?(e.contactMenuIsSelected=!1,e.editMenuIsSelected=!0,e.allMenuIsSelected=!1):e.contactMenuIsSelected=!0;break;case"all":e.isLoggedIn?(e.contactMenuIsSelected=!1,e.editMenuIsSelected=!1,e.allMenuIsSelected=!0):e.contactMenuIsSelected=!0}}}]).service("EventService",function(){var e=this,t=[];e.getUser=function(e){return 1===t.length?t[0]:null},e.addUser=function(e){t.push(e)},e.ClearUser=function(){t=[]}}).config(["$routeProvider",function(e){e.when("/",{controller:"AppController",controllerAs:"app"}).when("/contact",{templateUrl:"contact/templates/contactus.html",controller:"AppController",controllerAs:"app"}).when("/signin",{templateUrl:"signIn/templates/signIn.html",controller:"SignInCtrl"}).when("/signin/:email",{templateUrl:"signIn/templates/signIn.html",controller:"SignInCtrl"}).when("/register",{templateUrl:"register/templates/register.html",controller:"RegisterCtrl"}).when("/event",{templateUrl:"events/templates/event.html",controller:"EventController"}).when("/allevents",{templateUrl:"events/templates/allEventsDetails.html",controller:"EventController"}).otherwise({redirectTo:"/contact"})}]).directive("notLoggedin",function(){return{restrict:"E",templateUrl:"welcome/templates/welcome.html",controller:"AppController"}}).directive("eventSummary",function(){return{restrict:"E",templateUrl:"events/templates/eventSummary.html",controller:"EventController",link:function(e,t,n,i,r){}}}).directive("emailIsvalid",["$timeout",function(e){return{restrict:"A",require:"ngModel",link:function(t,n,i,r){function a(t){var i,a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n.on("focus",e(function(){i=!0;var e=n.val().replace(/ /g,"");return e=e.split(","),angular.forEach(e,function(e,t){i=i&&a.test(e)}),console.log("guestlist is valid? "+i),r.$setViewValue(n.val()),r.$render(),r.$setValidity("guestAddressList",i),t},0)),t}r.$parsers.push(a)}}}]).directive("eventDetails",function(){return{restrict:"EA",templateUrl:"events/templates/eventDetails.html",controller:"EventController"}}).directive("geteventLocation",["$timeout",function(e){return{restrict:"A",require:"ngModel",link:function(t,n,i,r){function a(t){function i(){return r.$setViewValue(n.val()),r.$render(),t}return n.on("blur",function(){e(i,0)}),t}r.$parsers.push(a)}}}]).directive("strongPassword",function(){return{restrict:"A",require:"ngModel",link:function(e,t,n,i){function r(e){return/[a-z]/.test(e)?i.$setValidity("lowercaseValidator",!0):i.$setValidity("lowercaseValidator",!1),/[A-Z]/.test(e)?i.$setValidity("uppercaseValidator",!0):i.$setValidity("uppercaseValidator",!1),/[0-9]/.test(e)?i.$setValidity("numberValidator",!0):i.$setValidity("numberValidator",!1),/\W+/.test(e)?i.$setValidity("specialCharValidator",!0):i.$setValidity("specialCharValidator",!1),e.length>=8?i.$setValidity("lengthValidator",!0):i.$setValidity("lengthValidator",!1),e}i.$parsers.push(r)}}}).directive("titleBar",function(){return{restrict:"AE",scope:"=",controller:"AppController",templateUrl:"signIn/templates/titlebar.html"}}).controller("EventController",["$scope","$document","$location","$routeParams","$filter","$firebaseArray","$timeout",function(e,t,n,i,r,a,o){function d(){var t=new Date;e.event.eventStartDate=r("date")(new Date(t),"M/d/yyyy"),e.event.eventEndDate=r("date")(new Date(t),"M/d/yyyy"),e.event.eventStartTime=t,e.event.eventEndTime=s(t,l)}function s(e,t){var n=new Date(e);return n.setHours(e.getHours()+t),n}function v(e,t){var n=e.keyCode||e.which;9==n&&(e.preventDefault(),$(t).focus())}window.onkeydown=function(e){8==e.keyCode&&e.target==document.body&&e.preventDefault()},e.event={},e.user={},e.events={},e.readOnly=!1,e.isEditing=!1,e.validateSelection=!1,e.endDateIsSet=!1,e.eventCreatedSuccess=!1,e.eventEditedSuccess=!1;var c,l=2;e.selectedEvent=null,e.isEditing||d(),e.timePickerOptions={step:30,timeFormat:"g:ia",appendTo:"body"},e.dateIsValid=function(e){var t=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;return null==e||""==e||void 0==e?!1:!!t.test(e)},e.timeIsValid=function(e){var t=/^(\d{1,2}):(\d{1,2})\s(am|AM|pm|PM)$/;if(null==e||""==e||void 0==e)return!1;if(e instanceof Date){var n=r("date")(new Date(e),"shortTime");return t.test(n)}return!1},$("#eventStartDate").on("change",function(){if(!e.readOnly&&!e.isEditing){var t=new Date($("#eventStartTime").timepicker("getTime")),n=new Date(e.event.eventStartDate);n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),e.event.eventStartTime=n}new Date(e.event.eventStartDate)>new Date(e.event.eventEndDate)&&(e.event.eventEndDate=e.event.eventStartDate,e.event.eventStartTime>e.event.eventEndTime&&(e.event.eventEndTime=s(new Date(e.event.eventStartTime),l)))}),$("#editedEventStartDate").on("change",function(){if(!e.readOnly&&e.isEditing){var t=new Date($("#editedEventStartTime").timepicker("getTime")),n=new Date(e.editedEvent.eventStartDate);n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),e.editedEvent.eventStartTime=n}new Date(e.editedEvent.eventStartDate)>new Date(e.editedEvent.eventEndDate)&&(e.editedEvent.eventEndDate=e.editedEvent.eventStartDate,e.editedEvent.eventStartTime>e.editedEvent.eventEndTime&&(e.event.editedEventEndTime=s(new Date(e.editedEvent.eventStartTime),l)))}),$("#eventEndDate").on("change",function(){if(!e.readOnly&&!e.isEditing){var t=new Date($("#eventEndTime").timepicker("getTime")),n=new Date(e.event.eventEndDate);n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),e.event.eventEndTime=n}new Date(e.event.eventEndDate)<new Date(e.event.eventStartDate)&&(e.event.eventStartDate=e.event.eventEndDate,e.event.eventStartTime>e.event.eventEndTime&&(e.event.eventEndTime=s(new Date(e.event.eventStartTime),l)))}),$("#editedEventEndDate").on("change",function(){if(!e.readOnly&&!e.isEditing){var t=new Date($("#editedEventEndTime").timepicker("getTime")),n=new Date(e.editedEvent.eventEndDate);n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),e.editedEvent.eventEndTime=n}new Date(e.editedEvent.eventEndDate)<new Date(e.editedEvent.eventStartDate)&&(e.editedEvent.eventStartDate=e.editedEvent.eventEndDate,e.editedEvent.eventStartTime>e.editedEvent.eventEndTime&&(e.editedEvent.eventEndTime=s(new Date(e.editedEvent.eventStartTime),l)))}),$("#eventStartDate").on("keydown",function(e){v(e,"#eventStartTime")}),$("#eventEndDate").on("keydown",function(e){v(e,"#eventEndTime")}),$("#editedEventStartDate").on("keydown",function(e){v(e,"#editedEventStartTime")}),$("#editedEventEndDate").on("keydown",function(e){v(e,"#editedEventEndTime")}),$("#eventStartTime").on("change",function(){e.event.eventEndDate==e.event.eventStartDate&&e.event.eventStartTime>=e.event.eventEndTime&&o(function(){e.event.eventEndTime=s(e.event.eventStartTime,2)},0)}),$("#editedEventStartTime").on("change",function(){e.editedEvent.eventEndDate==e.editedEvent.eventStartDate&&e.editedEvent.eventStartTime>=e.editedEvent.eventEndTime&&o(function(){e.editedEvent.eventEndTime=s(e.editedEvent.eventStartTime,2)},0)}),$("#eventEndTime").on("change",function(){e.event.eventEndDate==e.event.eventStartDate&&e.event.eventStartTime>e.event.eventEndTime&&o(function(){e.event.eventEndTime=s(e.event.eventStartTime,2)},0)}),$("#editedEventEndTime").on("change",function(){e.editedEvent.eventEndDate==e.editedEvent.eventStartDate&&e.editedEvent.eventStartTime>e.editedEvent.eventEndTime&&o(function(){e.editedEvent.eventEndTime=s(e.editedEvent.eventStartTime,2)},0)}),e.dateRangeIsValid=function(){},e.guestList=function(e){if(e){var t="";return e.forEach(function(e){t+=e+", "}),t}return null};var u="https://scurve.firebaseio.com/";if(e.$parent.authUser){var m=new Firebase(u+"xevents/user/"+e.authUser);e.events=a(m),e.events.$loaded().then(function(t){t===e.events})["catch"](function(e){})}e.isRequired=function(){return!0},e.clearEventForm=function(){e.event={},d(),document.getElementById("eventName").focus(),e.validateSelection=!1,e.readOnly=!1,e.isEditing=!1,e.eventForm.$setUntouched(),e.eventForm.$setPristine()},e.numberOfEvents=function(){return e.events.length},e.setMenuActive=function(t){e.$parent.topMenuSelect(t)},e.eventListIsEmpty=function(){return 0===e.numberOfEvents()},e.convertDate=function(e){return new Date(e)},e.selectEvent=function(t,n,i){e.eventCreatedSuccess=n||!1,e.eventEditedSuccess=i||!1,t.eventStartTime=new Date(t.eventStartTime),t.eventEndTime=new Date(t.eventEndTime),e.validateSelection=!0,e.selectedEvent=angular.copy(t),e.eventSelected=!0,e.readOnly=!0,e.isEditing=!1,e.event=t,e.eventSelectedId=t.$id,c=e.events.$indexFor(t.$id),o(function(){document.getElementById("editButton").focus()},0)},e.editEvent=function(t,n){n.preventDefault(),e.eventEditedSuccess=!1,e.eventCreatedSuccess=!1,e.readOnly=!1,e.isEditing=!0,e.editedEvent=e.selectedEvent,o(function(){document.getElementById("editedEventName").focus(),t.$setPristine()},0)},e.cancelEditing=function(t){t.preventDefault(),e.selectEvent(e.event)},e.saveEditedEvent=function(t){e.events[c].eventLocation=t.eventLocation,e.events[c].eventGuestList=t.eventGuestList,t.eventNotesCheck&&(e.events[c].eventNotesCheck=t.eventNotesCheck,e.events[c].eventNotes=t.eventNotes),e.events[c].eventName=t.eventName,e.events[c].eventType=t.eventType,e.events[c].eventHost=t.eventHost,e.events[c].eventStartDate=t.eventStartDate,e.events[c].eventStartTime=t.eventStartTime.getTime(),e.events[c].eventEndDate=t.eventEndDate,e.events[c].eventEndTime=t.eventEndTime.getTime(),e.events.$save(e.events.$indexFor(t.$id)).then(function(t){t.key===e.editedEvent.$id}),e.selectEvent(t,!1,!0),o(function(){document.getElementById("eventName").focus()},0)},e.deleteEvent=function(t){e.events.$remove(c).then(function(e){}),e.clearEventForm()},e.createNewEvent=function(t,i,r){r.preventDefault();var a={};a=t,a.eventStartTime=t.eventStartTime.getTime(),a.eventEndTime=t.eventEndTime.getTime(),e.events.$add(a),n.path("/allevents/"),e.setMenuActive("all")}}]);