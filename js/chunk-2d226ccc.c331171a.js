(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226ccc"],{e9ce:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function n(e,t,r,n,o,i){var s=Object(a["resolveComponent"])("report-template");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!0,canExportPDf:!0,reportReady:e.reportReady,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","reportReady","onReportConfiguration"])}r("99af"),r("4de4"),r("4160"),r("d81d"),r("b0c0"),r("159b");var o=r("2909"),i=(r("96cf"),r("1da1")),s=r("1497"),d=r("44e3"),u=r("4ba2"),l=r("ad8d"),c=r("d95e"),p=r("9ceb"),h=Object(a["defineComponent"])({mixins:[d["a"]],components:{ReportTemplate:u["a"]},data:function(){return{title:"Lab test result(s)",rows:[],cohort:[],reportType:"",reportReady:!1,columns:[],patientLevelColumns:[[p["a"].thTxt("ARV#"),p["a"].thTxt("Gender"),p["a"].thTxt("Birthdate"),p["a"].thTxt("Ordered"),p["a"].thTxt("Specimen"),p["a"].thTxt("Test"),p["a"].thTxt("Result"),p["a"].thTxt("Released")]],disaggregatedColumns:[p["a"].thTxt("Age group"),p["a"].thTxt("Gender")]}},created:function(){this.report=new s["a"],this.fields=this.getFormFields()},methods:{onPeriod:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.type,n=e.tests,t.reportReady=!0,t.rows=[],t.period=t.report.getDateIntervalPeriod(),t.reportType=a.value,"disaggregated"===t.reportType?t.setDisaggregatedRows(n):"patient_level"===t.reportType&&t.setPatientLevelRows(n);case 6:case"end":return r.stop()}}),r)})))()},getFormFields:function(){var e=this;return[].concat(Object(o["a"])(this.getDateDurationFields()),[{id:"tests",helpText:"Available test(s) results",type:c["b"].TT_MULTIPLE_SELECT,options:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r,a,n){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.report.setStartDate(n.start_date),e.report.setEndDate(n.end_date),t.next=4,e.report.getLabResultsReport();case 4:return o=t.sent,i=e.buildAvailableTests(o),t.abrupt("return",e.buildAvailableTestOptions(i));case 7:case"end":return t.stop()}}),t)})));function r(e,r,a){return t.apply(this,arguments)}return r}()},{id:"type",helpText:"Select report type",type:c["b"].TT_SELECT,options:function(){return[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}}])},buildAvailableTests:function(e){var t=this,r={};return e.forEach((function(e){e.measures.forEach((function(a){a.name in r||(r[a.name]=[]),r[a.name].push({id:e.patient_id,arv:e.arv_number,gender:e.gender,ageGroup:e.age_group,birthdate:t.toDate(e.birthdate),ordered:t.toDate(e.order_date),specimen:e.test,test:a.name,result:"".concat(a.modifier," ").concat(a.value),released:t.toDate(e.result_date)})}))})),r},buildAvailableTestOptions:function(e){var t=[];for(var r in e){var a=e[r];t.push({label:r,value:a.length,other:a})}return t},setDisaggregatedRows:function(e){var t=this,r=[],a=[];this.columns=[this.disaggregatedColumns.concat(e.map((function(e){return p["a"].thTxt(e.label)})))];var n=function(n){var o=l["a"][n],i=[p["a"].td(o),p["a"].td("M")],s=[p["a"].td(o),p["a"].td("F")];e.forEach((function(e){var r=e.other,a=function(e){return r.filter((function(t){return t.gender===e&&t.ageGroup===o})).map((function(e){return e.id}))};i.push(t.drill(a("M"))),s.push(t.drill(a("F")))})),r.push(i),a.push(s),t.rows=[].concat(a,r)};for(var o in l["a"])n(o)},setPatientLevelRows:function(e){var t=this;this.columns=[this.patientLevelColumns],e.forEach((function(e){var r=e.other;r.forEach((function(e){t.rows.push([p["a"].td(e.arv),p["a"].td(e.gender),p["a"].tdDate(e.birthdate),p["a"].tdDate(e.ordered),p["a"].td(e.specimen),p["a"].td(e.test),p["a"].td(e.result),p["a"].tdDate(e.released)])}))}))}}}),f=r("d959"),v=r.n(f);const g=v()(h,[["render",n]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-2d226ccc.c331171a.js.map