"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[397],{7397:(O,m,c)=>{c.r(m),c.d(m,{DashboardModule:()=>w});var l=c(6895),g=c(4006),t=c(3037),h=c(1334),v=c(301),b=c(6806),r=c(4650);const u=(a,o=document.body)=>{let e;return e=(a=>a.match(/^--.*/i))(a)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const a={},o=document.styleSheets;let e="";for(let s=o.length-1;s>-1;s--){const n=o[s].cssRules;for(let i=n.length-1;i>-1;i--)if(".ie-custom-properties"===n[i].selectorText){e=n[i].cssText;break}if(e)break}return e=e.substring(e.lastIndexOf("{")+1,e.lastIndexOf("}")),e.split(";").forEach(s=>{if(s){const n=s.split(": ")[0],i=s.split(": ")[1];n&&i&&(a[`--${n.trim()}`]=i.trim())}}),a})()[a]:window.getComputedStyle(o,null).getPropertyValue(a).replace(/^\s/,""),e};let q=(()=>{class a{constructor(){this.mainChart={},this.initMainChart()}random(e,s){return Math.floor(Math.random()*(s-e+1)+e)}initMainChart(e="Month"){const s=u("--cui-success")??"#4dbd74",n=u("--cui-info")??"#20a8d8",i=((a,o=100)=>{if(typeof a>"u")throw new TypeError("Hex color is not defined");if(!a.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error(`${a} is not a valid hex color`);let s,n,i;return 7===a.length?(s=parseInt(a.slice(1,3),16),n=parseInt(a.slice(3,5),16),i=parseInt(a.slice(5,7),16)):(s=parseInt(a.slice(1,2),16),n=parseInt(a.slice(2,3),16),i=parseInt(a.slice(3,5),16)),`rgba(${s}, ${n}, ${i}, ${o/100})`})(u("--cui-info"),10)??"#20a8d8",U=u("--cui-danger")||"#f86c6b";this.mainChart.elements="Month"===e?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let d=0;d<=this.mainChart.elements;d++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let Z=[];if("Month"===e)Z=["January","February","March","April","May","June","July","August","September","October","November","December"];else{const d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];Z=d.concat(d,d,d)}const p=[{backgroundColor:i,borderColor:n,pointHoverBackgroundColor:n,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:s||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:U||"#f86c6b",pointHoverBackgroundColor:U,borderWidth:1,borderDash:[8,5]}],M=[{data:this.mainChart.Data1,label:"Current",...p[0]},{data:this.mainChart.Data2,label:"Previous",...p[1]},{data:this.mainChart.Data3,label:"BEP",...p[2]}],I={maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(d){return{backgroundColor:d.dataset.borderColor}}}}},scales:{x:{grid:{drawOnChartArea:!1}},y:{beginAtZero:!0,max:250,ticks:{maxTicksLimit:5,stepSize:Math.ceil(50)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=I,this.mainChart.data={datasets:M,labels:Z}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"any"}),a})();var C=c(3947);function x(a,o){if(1&a&&(r.TgZ(0,"tr")(1,"td",75),r._UZ(2,"c-avatar",78),r.qZA(),r.TgZ(3,"td")(4,"div"),r._uU(5),r.qZA(),r.TgZ(6,"div",3)(7,"span"),r._uU(8),r.qZA(),r._uU(9),r.qZA()(),r.TgZ(10,"td",75),r.O4$(),r._UZ(11,"svg",79),r.qZA(),r.kcU(),r.TgZ(12,"td")(13,"div",80)(14,"div",81)(15,"strong"),r._uU(16),r.qZA()(),r.TgZ(17,"div",82)(18,"small",16),r._uU(19),r.qZA()()(),r.TgZ(20,"c-progress",34),r._UZ(21,"c-progress-bar",83),r.qZA()(),r.TgZ(22,"td",75),r.O4$(),r._UZ(23,"svg",84),r.qZA(),r.kcU(),r.TgZ(24,"td")(25,"div",3),r._uU(26,"Last login"),r.qZA(),r.TgZ(27,"strong"),r._uU(28),r.qZA()()()),2&a){const e=o.$implicit;r.xp6(2),r.s9C("src",e.avatar),r.s9C("status",e.status),r.xp6(3),r.Oqu(e.name),r.xp6(3),r.Oqu(e.state),r.xp6(1),r.hij(" | Registered: ",e.registered," "),r.xp6(2),r.s9C("id",e.country+e.name),r.MGl("name","cif",e.country,""),r.s9C("title",e.country),r.xp6(5),r.hij("",e.usage,"%"),r.xp6(3),r.hij(" ",e.period," "),r.xp6(2),r.s9C("color",e.color),r.Q6J("value",e.usage),r.xp6(2),r.MGl("name","cibCc",e.payment,""),r.xp6(5),r.Oqu(e.activity)}}const k=function(){return{"marginTop.px":40}},D=[{path:"",component:(()=>{class a{constructor(e,s){this.chartsData=e,this.notify=s,this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/img/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/img/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/img/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xe9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/img/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xe1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/img/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xe1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/img/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={},this.chart=[],this.trafficRadioGroup=new g.nJ({trafficRadio:new g.p4("Month")})}ngOnInit(){this.notify.showLoading(),this.initCharts(),this.notify.hideLoading()}initCharts(){this.mainChart=this.chartsData.mainChart}setTrafficPeriod(e){this.trafficRadioGroup.setValue({trafficRadio:e}),this.chartsData.initMainChart(e),this.initCharts()}}return a.\u0275fac=function(e){return new(e||a)(r.Y36(q),r.Y36(C.c))},a.\u0275cmp=r.Xpm({type:a,selectors:[["ng-component"]],decls:274,vars:14,consts:[[1,"mb-4"],["sm","5"],["id","traffic",1,"card-title","mb-0"],[1,"small","text-medium-emphasis"],["sm","7",1,"d-none","d-md-block"],["cButton","","color","primary",1,"float-end"],["cIcon","","name","cilCloudDownload"],[3,"formGroup"],["role","group",1,"float-end","me-3"],["formControlName","trafficRadio","type","radio","value","Day",1,"btn-check"],["cButton","","cFormCheckLabel","","color","secondary","variant","outline",3,"click"],["formControlName","trafficRadio","type","radio","value","Month",1,"btn-check"],["formControlName","trafficRadio","type","radio","value","Year",1,"btn-check"],[3,"data","height","ngStyle","options","type"],[1,"text-center",3,"md","xs"],[1,"mb-sm-2","mb-0"],[1,"text-medium-emphasis"],["thin","",1,"mt-2"],["color","success","value","40"],["color","info","value","20"],["color","warning","value","60"],["color","danger","value","80"],["value","40"],["xs",""],["md","6","xl","6","xs","12"],["sm","6"],[1,"border-start","border-start-4","border-start-info","py-1","px-3"],[1,"text-medium-emphasis","small"],[1,"fs-5","fw-semibold"],[1,"border-start","border-start-4","border-start-danger","py-1","px-3","mb-3"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"progress-group-bars"],["thin",""],["color","info","value","34"],["color","danger","value","78"],["color","info","value","56"],["color","danger","value","94"],["color","info","value","12"],["color","danger","value","67"],["color","info","value","43"],["color","danger","value","91"],["color","info","value","22"],["color","danger","value","73"],["color","info","value","53"],["color","danger","value","82"],["color","info","value","9"],["color","danger","value","69"],[1,"legend","text-center"],[1,"badge","badge-pill","badge-sm","bg-info"],[1,"badge","badge-pill","badge-sm","bg-danger"],[1,"border-start","border-start-4","border-start-warning","py-1","px-3","mb-3"],[1,"border-start","border-start-4","border-start-success","py-1","px-3","mb-3"],[1,"progress-group-header"],["cIcon","","name","cilUser",1,"icon","icon-lg","me-2"],[1,"ms-auto","font-semibold"],["color","warning","value","43"],[1,"progress-group","mb-5"],["cIcon","","name","cilUserFemale",1,"icon","icon-lg","me-2"],["color","warning","value","37"],[1,"progress-group"],["cIcon","","name","cibGoogle",1,"icon","icon-lg","me-2"],["color","success","value","56"],["cIcon","","name","cibFacebook",1,"icon","icon-lg","me-2"],["color","success","value","15"],["cIcon","","name","cibTwitter",1,"icon","icon-lg","me-2"],["color","success","value","11"],["cIcon","","name","cibLinkedin",1,"icon","icon-lg","me-2"],["color","success","value","8"],[1,"divider","d-flex","justify-content-center"],["cButton","","color","transparent","size","sm","type","button",1,"text-muted","btn-link"],["cIcon","","name","cil-options"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],["cTableColor","light"],[1,"text-center"],["cIcon","","name","cilPeople"],[4,"ngFor","ngForOf"],["size","md",3,"src","status"],["cIcon","","size","xl",3,"id","name","title"],[1,"clearfix"],[1,"float-start"],[1,"float-end"],[3,"value","color"],["cIcon","","size","xl",3,"name"]],template:function(e,s){1&e&&(r.TgZ(0,"c-card",0)(1,"c-card-body")(2,"c-row")(3,"c-col",1)(4,"h4",2),r._uU(5," Traffic "),r.qZA(),r.TgZ(6,"div",3),r._uU(7,"January - December 2021"),r.qZA()(),r.TgZ(8,"c-col",4)(9,"button",5),r.O4$(),r._UZ(10,"svg",6),r.qZA(),r.kcU(),r.TgZ(11,"form",7)(12,"c-button-group",8),r._UZ(13,"input",9),r.TgZ(14,"label",10),r.NdJ("click",function(){return s.setTrafficPeriod("Day")}),r._uU(15,"Day"),r.qZA(),r._UZ(16,"input",11),r.TgZ(17,"label",10),r.NdJ("click",function(){return s.setTrafficPeriod("Month")}),r._uU(18,"Month"),r.qZA(),r._UZ(19,"input",12),r.TgZ(20,"label",10),r.NdJ("click",function(){return s.setTrafficPeriod("Year")}),r._uU(21,"Year"),r.qZA()()()()(),r.TgZ(22,"c-chart",13),r._uU(23," Main chart "),r.qZA()(),r.TgZ(24,"c-card-footer")(25,"c-row",14)(26,"c-col",15)(27,"div",16),r._uU(28,"Visits"),r.qZA(),r.TgZ(29,"strong"),r._uU(30,"29.703 Users (40%)"),r.qZA(),r.TgZ(31,"c-progress",17),r._UZ(32,"c-progress-bar",18),r.qZA()(),r.TgZ(33,"c-col",15)(34,"div",16),r._uU(35,"Unique"),r.qZA(),r.TgZ(36,"strong"),r._uU(37,"24.093 Users (20%)"),r.qZA(),r.TgZ(38,"c-progress",17),r._UZ(39,"c-progress-bar",19),r.qZA()(),r.TgZ(40,"c-col",15)(41,"div",16),r._uU(42,"Page views"),r.qZA(),r.TgZ(43,"strong"),r._uU(44,"78.706 Views (60%)"),r.qZA(),r.TgZ(45,"c-progress",17),r._UZ(46,"c-progress-bar",20),r.qZA()(),r.TgZ(47,"c-col",15)(48,"div",16),r._uU(49,"New Users"),r.qZA(),r.TgZ(50,"strong"),r._uU(51,"22.123 Users (80%)"),r.qZA(),r.TgZ(52,"c-progress",17),r._UZ(53,"c-progress-bar",21),r.qZA()(),r.TgZ(54,"c-col",15)(55,"div",16),r._uU(56,"Bounce Rate"),r.qZA(),r.TgZ(57,"strong"),r._uU(58,"Average Rate (40.15%)"),r.qZA(),r.TgZ(59,"c-progress",17),r._UZ(60,"c-progress-bar",22),r.qZA()()()()(),r.TgZ(61,"c-row")(62,"c-col",23)(63,"c-card",0)(64,"c-card-header"),r._uU(65),r.qZA(),r.TgZ(66,"c-card-body")(67,"c-row")(68,"c-col",24)(69,"c-row")(70,"c-col",25)(71,"div",26)(72,"div",27),r._uU(73,"New Clients"),r.qZA(),r.TgZ(74,"div",28),r._uU(75,"9,123"),r.qZA()()(),r.TgZ(76,"c-col",25)(77,"div",29)(78,"div",27),r._uU(79," Recurring Clients "),r.qZA(),r.TgZ(80,"div",28),r._uU(81,"22,643"),r.qZA()()()(),r._UZ(82,"hr",30),r.TgZ(83,"div",31)(84,"div",32)(85,"span",27),r._uU(86,"Monday"),r.qZA()(),r.TgZ(87,"div",33)(88,"c-progress",34),r._UZ(89,"c-progress-bar",35),r.qZA(),r.TgZ(90,"c-progress",34),r._UZ(91,"c-progress-bar",36),r.qZA()()(),r.TgZ(92,"div",31)(93,"div",32)(94,"span",27),r._uU(95,"Tuesday"),r.qZA()(),r.TgZ(96,"div",33)(97,"c-progress",34),r._UZ(98,"c-progress-bar",37),r.qZA(),r.TgZ(99,"c-progress",34),r._UZ(100,"c-progress-bar",38),r.qZA()()(),r.TgZ(101,"div",31)(102,"div",32)(103,"span",27),r._uU(104,"Wednesday"),r.qZA()(),r.TgZ(105,"div",33)(106,"c-progress",34),r._UZ(107,"c-progress-bar",39),r.qZA(),r.TgZ(108,"c-progress",34),r._UZ(109,"c-progress-bar",40),r.qZA()()(),r.TgZ(110,"div",31)(111,"div",32)(112,"span",27),r._uU(113,"Thursday"),r.qZA()(),r.TgZ(114,"div",33)(115,"c-progress",34),r._UZ(116,"c-progress-bar",41),r.qZA(),r.TgZ(117,"c-progress",34),r._UZ(118,"c-progress-bar",42),r.qZA()()(),r.TgZ(119,"div",31)(120,"div",32)(121,"span",27),r._uU(122,"Friday"),r.qZA()(),r.TgZ(123,"div",33)(124,"c-progress",34),r._UZ(125,"c-progress-bar",43),r.qZA(),r.TgZ(126,"c-progress",34),r._UZ(127,"c-progress-bar",44),r.qZA()()(),r.TgZ(128,"div",31)(129,"div",32)(130,"span",27),r._uU(131,"Saturday"),r.qZA()(),r.TgZ(132,"div",33)(133,"c-progress",34),r._UZ(134,"c-progress-bar",45),r.qZA(),r.TgZ(135,"c-progress",34),r._UZ(136,"c-progress-bar",46),r.qZA()()(),r.TgZ(137,"div",31)(138,"div",32)(139,"span",27),r._uU(140,"Sunday"),r.qZA()(),r.TgZ(141,"div",33)(142,"c-progress",34),r._UZ(143,"c-progress-bar",47),r.qZA(),r.TgZ(144,"c-progress",34),r._UZ(145,"c-progress-bar",48),r.qZA()()(),r.TgZ(146,"div",49),r._uU(147,"\n              "),r.TgZ(148,"small"),r._uU(149,"\n                "),r.TgZ(150,"sup")(151,"span",50),r._uU(152,"\xa0"),r.qZA()(),r._uU(153,"\n                "),r.TgZ(154,"span"),r._uU(155,"New clients"),r.qZA(),r._uU(156,"\n                \xa0\xa0\n                "),r.TgZ(157,"sup")(158,"span",51),r._uU(159,"\xa0"),r.qZA()(),r._uU(160,"\n                "),r.TgZ(161,"span"),r._uU(162,"Recurring clients"),r.qZA(),r._uU(163,"\n              "),r.qZA(),r._uU(164,"\n            "),r.qZA()(),r.TgZ(165,"c-col",24)(166,"c-row")(167,"c-col",25)(168,"div",52)(169,"div",27),r._uU(170,"Page views"),r.qZA(),r.TgZ(171,"div",28),r._uU(172,"78,623"),r.qZA()()(),r.TgZ(173,"c-col",25)(174,"div",53)(175,"div",27),r._uU(176,"Organic"),r.qZA(),r.TgZ(177,"div",28),r._uU(178,"49,123"),r.qZA()()()(),r._UZ(179,"hr",30),r.TgZ(180,"div",31)(181,"div",54),r.O4$(),r._UZ(182,"svg",55),r.kcU(),r.TgZ(183,"span"),r._uU(184,"Male"),r.qZA(),r.TgZ(185,"span",56),r._uU(186,"43%"),r.qZA()(),r.TgZ(187,"div",33)(188,"c-progress",34),r._UZ(189,"c-progress-bar",57),r.qZA()()(),r.TgZ(190,"div",58)(191,"div",54),r.O4$(),r._UZ(192,"svg",59),r.kcU(),r.TgZ(193,"span"),r._uU(194,"Female"),r.qZA(),r.TgZ(195,"span",56),r._uU(196,"37%"),r.qZA()(),r.TgZ(197,"div",33)(198,"c-progress",34),r._UZ(199,"c-progress-bar",60),r.qZA()()(),r.TgZ(200,"div",61)(201,"div",54),r.O4$(),r._UZ(202,"svg",62),r.kcU(),r.TgZ(203,"span"),r._uU(204,"Organic Search"),r.qZA(),r.TgZ(205,"span",56),r._uU(206," 191,235 "),r.TgZ(207,"span",27),r._uU(208,"(56%)"),r.qZA()()(),r.TgZ(209,"div",33)(210,"c-progress",34),r._UZ(211,"c-progress-bar",63),r.qZA()()(),r.TgZ(212,"div",61)(213,"div",54),r.O4$(),r._UZ(214,"svg",64),r.kcU(),r.TgZ(215,"span"),r._uU(216,"Facebook"),r.qZA(),r.TgZ(217,"span",56),r._uU(218," 51,223 "),r.TgZ(219,"span",27),r._uU(220,"(15%)"),r.qZA()()(),r.TgZ(221,"div",33)(222,"c-progress",34),r._UZ(223,"c-progress-bar",65),r.qZA()()(),r.TgZ(224,"div",61)(225,"div",54),r.O4$(),r._UZ(226,"svg",66),r.kcU(),r.TgZ(227,"span"),r._uU(228,"Twitter"),r.qZA(),r.TgZ(229,"span",56),r._uU(230," 37,564 "),r.TgZ(231,"span",27),r._uU(232,"(11%)"),r.qZA()()(),r.TgZ(233,"div",33)(234,"c-progress",34),r._UZ(235,"c-progress-bar",67),r.qZA()()(),r.TgZ(236,"div",61)(237,"div",54),r.O4$(),r._UZ(238,"svg",68),r.kcU(),r.TgZ(239,"span"),r._uU(240,"LinkedIn"),r.qZA(),r.TgZ(241,"span",56),r._uU(242," 27,319 "),r.TgZ(243,"span",27),r._uU(244,"(8%)"),r.qZA()()(),r.TgZ(245,"div",33)(246,"c-progress",34),r._UZ(247,"c-progress-bar",69),r.qZA()()(),r.TgZ(248,"div",70)(249,"button",71),r.O4$(),r._UZ(250,"svg",72),r.qZA()()()()()()()(),r.kcU(),r.TgZ(251,"c-row")(252,"c-col",23)(253,"c-card",0)(254,"c-card-header"),r._uU(255,"Users"),r.qZA(),r.TgZ(256,"c-card-body")(257,"table",73)(258,"thead",74)(259,"tr")(260,"th",75),r.O4$(),r._UZ(261,"svg",76),r.qZA(),r.kcU(),r.TgZ(262,"th"),r._uU(263,"User"),r.qZA(),r.TgZ(264,"th",75),r._uU(265,"Country"),r.qZA(),r.TgZ(266,"th"),r._uU(267,"Usage"),r.qZA(),r.TgZ(268,"th",75),r._uU(269,"Payment Method"),r.qZA(),r.TgZ(270,"th"),r._uU(271,"Activity"),r.qZA()()(),r.TgZ(272,"tbody"),r.YNc(273,x,29,14,"tr",77),r.qZA()()()()()()),2&e&&(r.xp6(11),r.Q6J("formGroup",s.trafficRadioGroup),r.xp6(11),r.Q6J("data",s.mainChart.data)("height",300)("ngStyle",r.DdM(13,k))("options",s.mainChart.options)("type",s.mainChart.type),r.xp6(3),r.Q6J("md",5)("xs",1),r.xp6(40),r.hij("Traffic ","&"," Sales"),r.xp6(192),r.Q6J("hover",!0)("responsive",!0)("striped",!0),r.xp6(16),r.Q6J("ngForOf",s.users))},dependencies:[t.AkF,t.yue,t.xUh,t.nkx,h.ar,l.sg,l.PC,t.iok,t.Yp0,t.t15,t.RIQ,g._Y,g.Fj,g._,g.JJ,g.JL,g.sg,g.u,t.Hq3,t.NWu,t.KbJ,v.d,t.Ao0,t.auY,t.io7],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]}),a})(),data:{title:$localize`Dashboard`}}];let J=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[b.Bz.forChild(D),b.Bz]}),a})(),w=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[J,t.dTQ,t.dGk,h.QX,t.P4_,l.ez,t.zE6,t.qek,g.UX,t.hJ1,t.ejP,t.hJ1,t.ga2,v.N,t.FxY,t.U$I]}),a})()}}]);