(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2297b9"],{de46:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function a(e,t,r,a,o,i){var s=Object(n["resolveComponent"])("report-template");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!0,canExportPDf:!0,reportReady:e.reportReady,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","reportReady","onReportConfiguration"])}r("99af"),r("4de4"),r("4160"),r("a15b"),r("d81d"),r("159b");var o=r("2909"),i=(r("96cf"),r("1da1")),s=r("1497"),u=r("44e3"),d=r("4ba2"),l=r("ad8d"),p=r("d95e"),c=r("9ceb"),h=Object(n["defineComponent"])({mixins:[u["a"]],components:{ReportTemplate:d["a"]},data:function(){return{title:"Tests requested",rows:[],cohort:[],reportType:"",reportReady:!1,columns:[],patientLevelColumns:[[c["a"].thTxt("ARV#"),c["a"].thTxt("Gender"),c["a"].thTxt("Birthdate"),c["a"].thTxt("Ordered Date"),c["a"].thTxt("Test"),c["a"].thTxt("Reason")]],disaggregatedColumns:[c["a"].thTxt("Age group"),c["a"].thTxt("Gender")]}},created:function(){this.report=new s["a"],this.fields=this.getFormFields()},methods:{onPeriod:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.type,a=e.tests,t.reportReady=!0,t.rows=[],t.period=t.report.getDateIntervalPeriod(),t.reportType=n.value,"disaggregated"===t.reportType?t.setDisaggregatedRows(a):"patient_level"===t.reportType&&t.setPatientLevelRows(a);case 6:case"end":return r.stop()}}),r)})))()},getFormFields:function(){var e=this;return[].concat(Object(o["a"])(this.getDateDurationFields()),[{id:"tests",helpText:"Test(s) Requested",type:p["b"].TT_MULTIPLE_SELECT,options:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r,n,a){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.report.setStartDate(a.start_date),e.report.setEndDate(a.end_date),t.next=4,e.report.getSamplesDrawnReport();case 4:return o=t.sent,i=e.buildAvailableTests(o),t.abrupt("return",e.buildAvailableTestOptions(i));case 7:case"end":return t.stop()}}),t)})));function r(e,r,n){return t.apply(this,arguments)}return r}()},{id:"type",helpText:"Select report type",type:p["b"].TT_SELECT,options:function(){return[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}}])},buildAvailableTests:function(e){var t={};return e.forEach((function(e){e.tests.forEach((function(r){r in t||(t[r]=[]),t[r].push(e)}))})),t},buildAvailableTestOptions:function(e){var t=[];for(var r in e){var n=e[r];t.push({label:r,value:n.length,other:n})}return t},setDisaggregatedRows:function(e){var t=this,r=[],n=[];this.columns=[this.disaggregatedColumns.concat(e.map((function(e){return c["a"].thTxt(e.label)})))];var a=function(a){var o=l["a"][a],i=[c["a"].td(o),c["a"].td("M")],s=[c["a"].td(o),c["a"].td("F")];e.forEach((function(e){var r=e.other,n=function(e){return r.filter((function(t){return t.gender===e&&t.age_group===o})).map((function(e){return e.id}))};i.push(t.drill(n("M"))),s.push(t.drill(n("F")))})),r.push(i),n.push(s),t.rows=[].concat(n,r)};for(var o in l["a"])a(o)},setPatientLevelRows:function(e){var t=this;this.columns=this.patientLevelColumns,e.forEach((function(e){var r=e.other;r.forEach((function(e){t.rows.push([c["a"].td(e.arv_number),c["a"].td(e.gender),c["a"].tdDate(e.birthdate),c["a"].tdDate(e.order_date),c["a"].td(e.tests.join(",")),c["a"].td(e.reason_for_test)])}))}))}}}),f=r("d959"),v=r.n(f);const g=v()(h,[["render",a]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-2d2297b9.c7c1740f.js.map