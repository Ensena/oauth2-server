!function(t){var e={};function a(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=321)}({321:function(t,e,a){t.exports=a(322)},322:function(t,e,a){"use strict";a.r(e);a(323)},323:function(t,e){const a=(t,e)=>{for(var r in e)"object"!=typeof e[r]?t[r]=e[r]:a(t[r],e[r])},r=t=>{var e=t.data("add"),a=$(t.data("target")).data("chart");if(t.is(":checked")){!function t(e,a){for(var r in a)Array.isArray(a[r])?a[r].forEach(function(t){e[r].push(t)}):t(e[r],a[r])}(a,e)}else{!function t(e,a){for(var r in a)Array.isArray(a[r])?a[r].forEach(function(t){e[r].pop()}):t(e[r],a[r])}(a,e)}a.update()},o=t=>{var e=t.data("update"),r=$(t.data("target")).data("chart");if(a(r,e),void 0!==t.data("prefix")||void 0!==t.data("suffix")){let e=t.data("prefix")?t.data("prefix"):"",a=t.data("suffix")?t.data("suffix"):"";void 0!==r.options.scales&&(r.options.scales.yAxes[0].ticks.callback=function(t){if(!(t%10))return e+t+a}),r.options.tooltips.callbacks.label=function(t,r){var o=r.datasets[t.datasetIndex].label||"",n=t.yLabel||r.datasets[0].data[t.index],s="";return 1<r.datasets.length&&(s+='<span class="popover-body-label mr-auto">'+o+"</span>"),s+'<span class="popover-body-value">'+e+n+a+"</span>"}}r.update()},n={responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"==settings.charts.colorScheme?settings.colors.gray[700]:settings.colors.gray[600],defaultFontColor:"dark"==settings.charts.colorScheme?settings.colors.gray[700]:settings.colors.gray[600],defaultFontFamily:settings.fonts.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:settings.colors.primary[500]},line:{tension:.4,borderWidth:3,borderColor:settings.colors.primary[500],backgroundColor:settings.colors.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:settings.colors.primary[500]},arc:{backgroundColor:settings.colors.primary[500],borderColor:"dark"==settings.charts.colorScheme?settings.colors.gray[800]:settings.colors.white,borderWidth:4}},tooltips:{enabled:!1,mode:"index",intersect:!1,custom:function(t){var e=$("#chart-tooltip");if(e.length||(e=$('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'),$("body").append(e)),0!==t.opacity){if(t.body){var a=t.title||[],r=t.body.map(function(t){return t.lines}),o="";o+='<div class="arrow"></div>',a.forEach(function(t){o+='<h3 class="popover-header text-center">'+t+"</h3>"}),r.forEach(function(e,a){var n='<span class="popover-body-indicator" style="background-color: '+t.labelColors[a].backgroundColor+'"></span>',s=1<r.length?"justify-content-left":"justify-content-center";o+='<div class="popover-body d-flex align-items-center '+s+'">'+n+e+"</div>"}),e.html(o)}var n=$(this._chart.canvas),s=(n.outerWidth(),n.outerHeight(),n.offset().top),i=n.offset().left,l=e.outerWidth(),c=e.outerHeight(),d=s+t.caretY-c-16,u=i+t.caretX-l/2;e.css({top:d+"px",left:u+"px",display:"block"})}else e.css("display","none")},callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex].label||"",r=t.yLabel,o="";return 1<e.datasets.length&&(o+='<span class="popover-body-label mr-auto">'+a+"</span>"),o+'<span class="popover-body-value">'+r+"</span>"}}}},s={cutoutPercentage:83,tooltips:{callbacks:{title:function(t,e){return e.labels[t[0].index]},label:function(t,e){return""+'<span class="popover-body-value">'+e.datasets[0].data[t.index]+"</span>"}}},legendCallback:function(t){var e=t.data,a="";return e.labels.forEach(function(t,r){var o=e.datasets[0].backgroundColor[r];a+='<span class="chart-legend-item">',a+='<i class="chart-legend-indicator" style="background-color: '+o+'"></i>',a+=t,a+="</span>"}),a}},i={settings:settings,init:()=>{a(Chart,{defaults:{global:n,doughnut:s}}),Chart.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"==settings.charts.colorScheme?settings.colors.gray[900]:settings.colors.gray[100],drawBorder:!1,drawTicks:!1,lineWidth:0,zeroLineWidth:0,zeroLineColor:"dark"==settings.charts.colorScheme?settings.colors.gray[900]:settings.colors.gray[100],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),Chart.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{padding:20},maxBarThickness:10}),$('[data-toggle="chart"]').on({change:function(){var t=$(this);t.is("[data-add]")&&r(t)},click:function(){var t=$(this);t.is("[data-update]")&&o(t)}})},add:r,update:o,create:(t,e="line",a={},r={})=>{var o=$(t),n=new Chart(o,{type:e,options:a,data:r});o.data("chart",n),o.data("chart-legend")&&(document.querySelector(o.data("chart-legend")).innerHTML=n.generateLegend())}};void 0!==window&&(window.Charts=i)}});