!function(e,a){"use strict";var t=864e5,i=function(){return a.userAgent&&(a.userAgent.match(/Android/i)||a.userAgent.match(/webOS/i)||a.userAgent.match(/iPhone/i)||a.userAgent.match(/iPad/i)||a.userAgent.match(/iPod/i)||a.userAgent.match(/BlackBerry/i)||a.userAgent.match(/Windows Phone/i))?!0:void 0}(),n=function(e,a){return i?['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="month" title="{{ dateMonthTitle }}" ng-change="selectedMonthHandle(month)">','<option ng-repeat="item in months" ng-selected="item === month" ng-disabled=\'!isSelectableMaxDate(item + " " + day + ", " + year) || !isSelectableMinDate(item + " " + day + ", " + year)\' ng-value="$index + 1" value="$index + 1">',"{{ item }}","</option>","</select>","</div>","</div>",'<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">','<select ng-model="mobileYear" title="{{ dateYearTitle }}" ng-change="setNewYear(mobileYear)">','<option ng-repeat="item in paginationYears track by $index" ng-selected="year === item" ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)" ng-value="item" value="item">',"{{ item }}","</option>","</select>","</div>","</div>"]:['<div class="_720kb-datepicker-calendar-header">','<div class="_720kb-datepicker-calendar-header-left">','<a class="_720kb-datepicker-calendar-month-button" href="javascript:void(0)" ng-class="{\'_720kb-datepicker-item-hidden\': !willPrevMonthBeSelectable()}" ng-click="prevMonth()" title="{{ buttonPrevTitle }}">',e,"</a>","</div>",'<div class="_720kb-datepicker-calendar-header-middle _720kb-datepicker-calendar-month">',"{{month}}&nbsp;",'<a href="javascript:void(0)" ng-click="paginateYears(year); showYearsPagination = !showYearsPagination;">',"<span>","{{year}}","<i ng-class=\"{'_720kb-datepicker-calendar-header-closed-pagination': !showYearsPagination, '_720kb-datepicker-calendar-header-opened-pagination': showYearsPagination}\"></i>","</span>","</a>","</div>",'<div class="_720kb-datepicker-calendar-header-right">','<a class="_720kb-datepicker-calendar-month-button" ng-class="{\'_720kb-datepicker-item-hidden\': !willNextMonthBeSelectable()}" href="javascript:void(0)" ng-click="nextMonth()" title="{{ buttonNextTitle }}">',a,"</a>","</div>","</div>"]},r=function(e,a){return['<div class="_720kb-datepicker-calendar-header" ng-show="showYearsPagination">','<div class="_720kb-datepicker-calendar-years-pagination">','<a ng-class="{\'_720kb-datepicker-active\': y === year, \'_720kb-datepicker-disabled\': !isSelectableMaxYear(y) || !isSelectableMinYear(y)}" href="javascript:void(0)" ng-click="setNewYear(y)" ng-repeat="y in paginationYears track by $index">',"{{y}}","</a>","</div>",'<div class="_720kb-datepicker-calendar-years-pagination-pages">','<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[0])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsPrevDisabled}">',e,"</a>",'<a href="javascript:void(0)" ng-click="paginateYears(paginationYears[paginationYears.length -1 ])" ng-class="{\'_720kb-datepicker-item-hidden\': paginationYearsNextDisabled}">',a,"</a>","</div>","</div>"]},d=function(){return['<div class="_720kb-datepicker-calendar-days-header">','<div ng-repeat="d in daysInString">',"{{d}}","</div>","</div>"]},c=function(){return['<div class="_720kb-datepicker-calendar-body">','<a href="javascript:void(0)" ng-repeat="px in prevMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{px}}","</a>","<a href=\"javascript:void(0)\" ng-repeat=\"item in days\" ng-click=\"setDatepickerDay(item)\" ng-class=\"{'_720kb-datepicker-active': day === item, '_720kb-datepicker-disabled': !isSelectableMinDate(year + '/' + monthNumber + '/' + item ) || !isSelectableMaxDate(year + '/' + monthNumber + '/' + item) || !isSelectableDate(monthNumber, year, item)}\" class=\"_720kb-datepicker-calendar-day\">","{{item}}","</a>",'<a href="javascript:void(0)" ng-repeat="nx in nextMonthDays" class="_720kb-datepicker-calendar-day _720kb-datepicker-disabled">',"{{nx}}","</a>","</div>"]},l=function(e,a){var t=['<div class="_720kb-datepicker-calendar {{datepickerClass}} {{datepickerID}}" ng-class="{\'_720kb-datepicker-forced-to-open\': checkVisibility()}" ng-blur="hideCalendar()">',"</div>"],i=n(e,a),l=r(e,a),o=d(),s=c(),m=function(e){t.splice(t.length-1,0,e)};return i.forEach(m),l.forEach(m),o.forEach(m),s.forEach(m),t.join("")},o=function(a,n,r,d,c){var o=function(o,s,m){var u,b,p=m.selector,h=e.element(p?s[0].querySelector("."+p):s[0].children[0]),k='<b class="_720kb-datepicker-default-button">&lang;</b>',y='<b class="_720kb-datepicker-default-button">&rang;</b>',M=m.buttonPrev||k,g=m.buttonNext||y,f=m.dateFormat,v=o.$eval(o.dateDisabledDates),D=new Date,N=!1,w=!1,x=r.DATETIME_FORMATS,S=864e5,Y=l(M,g),_=function(){N||w||!u||o.hideCalendar()},T=function(){o.month=d("date")(new Date(o.dateMinLimit),"MMMM"),o.monthNumber=Number(d("date")(new Date(o.dateMinLimit),"MM")),o.day=Number(d("date")(new Date(o.dateMinLimit),"dd")),o.year=Number(d("date")(new Date(o.dateMinLimit),"yyyy"))},L=function(){o.month=d("date")(new Date(o.dateMaxLimit),"MMMM"),o.monthNumber=Number(d("date")(new Date(o.dateMaxLimit),"MM")),o.day=Number(d("date")(new Date(o.dateMaxLimit),"dd")),o.year=Number(d("date")(new Date(o.dateMaxLimit),"yyyy"))},P=function(){o.year=Number(o.year)-1},A=function(){o.year=Number(o.year)+1},$=function(){if(!o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.day)||!o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.day))return!1;var e=new Date(o.year+"/"+o.monthNumber+"/"+o.day);m.dateFormat?h.val(d("date")(e,f)):h.val(e),h.triggerHandler("input"),h.triggerHandler("change")},E={add:function(e,a){var t;e.className.indexOf(a)>-1||(t=e.className.split(" "),t.push(a),e.className=t.join(" "))},remove:function(e,a){var t,i;if(-1!==e.className.indexOf(a)){for(i=e.className.split(" "),t=0;t<i.length;t+=1)if(i[t]===a){i=i.slice(0,t).concat(i.slice(t+1));break}e.className=i.join(" ")}}},j=function(){b=a.document.getElementsByClassName("_720kb-datepicker-calendar"),e.forEach(b,function(e,a){b[a].classList?b[a].classList.remove("_720kb-datepicker-open"):E.remove(b[a],"_720kb-datepicker-open")}),u.classList?u.classList.add("_720kb-datepicker-open"):E.add(u,"_720kb-datepicker-open")},C=function(){return o.datepickerToggle?o.$eval(o.datepickerToggle):!0},B=function(){return o.datepickerShow?o.$eval(o.datepickerShow):!1},F=function(e,a){var t,i,n,r,d=new Date(a,e,0).getDate(),c=new Date(a+"/"+e+"/1").getDay(),l=new Date(a+"/"+e+"/"+d).getDay(),s=[],m=[];for(o.days=[],t=1;d>=t;t+=1)o.days.push(t);if(0===c)o.prevMonthDays=[];else{for(n=c,r=1===Number(e)?12:e-1,t=1;t<=new Date(a,r,0).getDate();t+=1)s.push(t);o.prevMonthDays=s.slice(-n)}if(6>l){for(i=6-l,t=1;i>=t;t+=1)m.push(t);o.nextMonthDays=m}else o.nextMonthDays=[]},O=o.$watch("dateSet",function(e){e&&(D=new Date(e),o.month=d("date")(D,"MMMM"),o.monthNumber=Number(d("date")(D,"MM")),o.day=Number(d("date")(D,"dd")),o.year=Number(d("date")(D,"yyyy")),F(o.monthNumber,o.year),"true"!==o.dateSetHidden&&$())});o.nextMonth=function(){12===o.monthNumber?(o.monthNumber=1,A()):o.monthNumber+=1,o.dateMaxLimit&&(o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.days[0])||L()),o.month=d("date")(new Date(o.year,o.monthNumber-1),"MMMM"),F(o.monthNumber,o.year),o.day=void 0},o.willPrevMonthBeSelectable=function(){var e=o.monthNumber,a=o.year,t=d("date")(new Date(new Date(a+"/"+e+"/01").getTime()-S),"dd");return 1===e?(e=12,a-=1):e-=1,!o.dateMinLimit||o.isSelectableMinDate(a+"/"+e+"/"+t)},o.willNextMonthBeSelectable=function(){var e=o.monthNumber,a=o.year;return 12===e?(e=1,a+=1):e+=1,!o.dateMaxLimit||o.isSelectableMaxDate(a+"/"+e+"/01")},o.prevMonth=function(){1===o.monthNumber?(o.monthNumber=12,P()):o.monthNumber-=1,o.dateMinLimit&&(o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.days[o.days.length-1])||T()),o.month=d("date")(new Date(o.year,o.monthNumber-1),"MMMM"),F(o.monthNumber,o.year),o.day=void 0},o.selectedMonthHandle=function(e){o.monthNumber=Number(d("date")(new Date(e+"/01/2000"),"MM")),F(o.monthNumber,o.year),$()},o.setNewYear=function(e){if(i||(o.day=void 0),o.dateMaxLimit&&o.year<Number(e)){if(!o.isSelectableMaxYear(e))return}else if(o.dateMinLimit&&o.year>Number(e)&&!o.isSelectableMinYear(e))return;o.year=Number(e),F(o.monthNumber,o.year),o.paginateYears(e),o.showYearsPagination=!1},o.hideCalendar=function(){u.classList?u.classList.remove("_720kb-datepicker-open"):E.remove(u,"_720kb-datepicker-open")},o.setDatepickerDay=function(e){o.isSelectableDate(o.monthNumber,o.year,e)&&o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+e)&&o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+e)&&(o.day=Number(e),$(),m.hasOwnProperty("dateRefocus")&&h[0].focus(),o.hideCalendar())},o.paginateYears=function(e){var a,t=[],n=10,r=10;for(o.paginationYears=[],i&&(n=50,r=50,o.dateMinLimit&&o.dateMaxLimit&&(e=new Date(o.dateMaxLimit).getFullYear(),n=e-new Date(o.dateMinLimit).getFullYear(),r=1)),a=n;a>0;a-=1)t.push(Number(e)-a);for(a=0;r>a;a+=1)t.push(Number(e)+a);"true"===o.dateTyper&&h.on("keyup blur",function(){if(h[0].value&&h[0].value.length&&h[0].value.length>0)try{D=new Date(h[0].value.toString()),D.getFullYear()&&!isNaN(D.getDay())&&!isNaN(D.getMonth())&&o.isSelectableDate(D)&&o.isSelectableMaxDate(D)&&o.isSelectableMinDate(D)&&o.$apply(function(){o.month=d("date")(D,"MMMM"),o.monthNumber=Number(d("date")(D,"MM")),o.day=Number(d("date")(D,"dd")),4===D.getFullYear().toString().length&&(o.year=Number(d("date")(D,"yyyy"))),F(o.monthNumber,o.year)})}catch(e){return e}}),o.dateMaxLimit&&t&&t.length&&!o.isSelectableMaxYear(Number(t[t.length-1])+1)?o.paginationYearsNextDisabled=!0:o.paginationYearsNextDisabled=!1,o.dateMinLimit&&t&&t.length&&!o.isSelectableMinYear(Number(t[0])-1)?o.paginationYearsPrevDisabled=!0:o.paginationYearsPrevDisabled=!1,o.paginationYears=t},o.isSelectableDate=function(e,a,t){var i=0;if(v&&v.length>0)for(i;i<=v.length;i+=1)if(new Date(v[i]).getTime()===new Date(e+"/"+t+"/"+a).getTime())return!1;return!0},o.isSelectableMinDate=function(e){return!(o.dateMinLimit&&new Date(o.dateMinLimit)&&new Date(e).getTime()<new Date(o.dateMinLimit).getTime())},o.isSelectableMaxDate=function(e){return!(o.dateMaxLimit&&new Date(o.dateMaxLimit)&&new Date(e).getTime()>new Date(o.dateMaxLimit).getTime())},o.isSelectableMaxYear=function(e){return!(o.dateMaxLimit&&e>new Date(o.dateMaxLimit).getFullYear())},o.isSelectableMinYear=function(e){return!(o.dateMinLimit&&e<new Date(o.dateMinLimit).getFullYear())},Y=Y.replace(/{{/g,c.startSymbol()).replace(/}}/g,c.endSymbol()),o.dateMonthTitle=o.dateMonthTitle||"Select month",o.dateYearTitle=o.dateYearTitle||"Select year",o.buttonNextTitle=o.buttonNextTitle||"Next",o.buttonPrevTitle=o.buttonPrevTitle||"Prev",o.month=d("date")(D,"MMMM"),o.monthNumber=Number(d("date")(D,"MM")),o.day=Number(d("date")(D,"dd")),o.dateMaxLimit?o.year=Number(d("date")(new Date(o.dateMaxLimit),"yyyy")):o.year=Number(d("date")(D,"yyyy")),o.months=x.MONTH,o.daysInString=["0","1","2","3","4","5","6"].map(function(e){return d("date")(new Date(new Date("06/08/2014").valueOf()+t*e),"EEE")}),o.datepickerAppendTo&&-1!==o.datepickerAppendTo.indexOf(".")?(o.datepickerID="datepicker-id-"+(new Date).getTime()+(Math.floor(6*Math.random())+8),e.element(document.getElementsByClassName(o.datepickerAppendTo.replace(".",""))[0]).append(n(e.element(Y))(o,function(a){u=e.element(a)[0]}))):o.datepickerAppendTo&&-1!==o.datepickerAppendTo.indexOf("#")?(o.datepickerID="datepicker-id-"+(new Date).getTime()+(Math.floor(6*Math.random())+8),e.element(document.getElementById(o.datepickerAppendTo.replace("#",""))).append(n(e.element(Y))(o,function(a){u=e.element(a)[0]}))):o.datepickerAppendTo&&"body"===o.datepickerAppendTo?(o.datepickerID="datepicker-id-"+((new Date).getTime()+(Math.floor(6*Math.random())+8)),e.element(document).find("body").append(n(e.element(Y))(o,function(a){u=e.element(a)[0]}))):(h.after(n(e.element(Y))(o)),u=s[0].querySelector("._720kb-datepicker-calendar")),C()&&h.on("focus click focusin",function(){w=!0,N||w||!u?j():o.hideCalendar()}),h.on("focusout blur",function(){w=!1}),e.element(u).on("mouseenter",function(){N=!0}),e.element(u).on("mouseleave",function(){N=!1}),e.element(u).on("focusin",function(){N=!0}),e.element(a).on("click focus focusin",_),(o.dateMinLimit&&!o.isSelectableMinYear(o.year)||!o.isSelectableMinDate(o.year+"/"+o.monthNumber+"/"+o.day))&&T(),(o.dateMaxLimit&&!o.isSelectableMaxYear(o.year)||!o.isSelectableMaxDate(o.year+"/"+o.monthNumber+"/"+o.day))&&L(),o.paginateYears(o.year),F(o.monthNumber,o.year),o.checkVisibility=B,o.$on("$destroy",function(){O(),h.off("focus click focusout blur"),e.element(u).off("mouseenter mouseleave focusin"),e.element(a).off("click focus focusin",_)})};return{restrict:"AEC",scope:{dateSet:"@",dateMinLimit:"@",dateMaxLimit:"@",dateMonthTitle:"@",dateYearTitle:"@",buttonNextTitle:"@",buttonPrevTitle:"@",dateDisabledDates:"@",dateSetHidden:"@",dateTyper:"@",datepickerAppendTo:"@",datepickerToggle:"@",datepickerClass:"@",datepickerShow:"@"},link:o}};e.module("720kb.datepicker",[]).directive("datepicker",["$window","$compile","$locale","$filter","$interpolate",o])}(angular,navigator);