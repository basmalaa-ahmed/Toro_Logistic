import{c as Ie,d as X,f as Z,g as ee,h as te,p as Fe,q as we}from"./chunk-D2QAVNXI.js";import{b as se,c as fe,d as q,f as ue,g as _e,i as ge,j as xe,k as ve,l as he,m as Ce,n as ye,o as be,p as Se,q as ke,r as Ge}from"./chunk-W6K6ZW7Q.js";import{b as Ee,i as O,j as T,v as Te}from"./chunk-LBITAMP6.js";import{C as de,c as pe,d as H,e as F,g as w,i as j,u as ce,v as me}from"./chunk-SYLTFIY3.js";import{Ab as V,Cb as L,Db as G,Eb as B,Fb as l,Gb as K,Hb as oe,Jb as W,Kb as Y,Lb as $,Nb as ae,Ob as I,Pb as E,Qb as J,Ra as a,Sa as re,Sb as U,U as N,Ub as le,Zb as z,ca as y,da as A,e as Le,fb as u,gb as D,hb as c,jb as Q,lb as P,ma as g,mb as r,na as x,nb as o,ob as p,pb as h,qb as C,rb as k,sb as b,va as S,vb as v,wb as f,xb as M,yb as R,zb as m}from"./chunk-OCE2AVGC.js";var Be=(t,s,e,n)=>({index:t,active:s,highlighted:e,class:"p-stepper-action",headerClass:"p-stepper-action",numberClass:"p-stepper-number",titleClass:"p-stepper-title",onClick:n});function ze(t,s){t&1&&k(0)}function He(t,s){if(t&1&&(h(0),u(1,ze,1,0,"ng-container",2),C()),t&2){let e=f();a(),c("ngTemplateOutlet",e.template)("ngTemplateOutletContext",U(2,Be,e.index,e.active,e.highlighted,e.onClick))}}function je(t,s){if(t&1){let e=b();r(0,"p-button",3),v("click",function(i){g(e);let d=f();return x(d.onClick.emit(i,d.index))}),r(1,"span",4),l(2),o(),r(3,"span",5),l(4),o()()}if(t&2){let e=f();c("id",e.id)("tabindex",e.disabled?-1:void 0)("aria-controls",e.ariaControls),a(2),K(e.index+1),a(2),K(e.getStepProp)}}var qe=(t,s,e,n)=>({index:t,active:s,highlighted:e,class:n});function Qe(t,s){t&1&&k(0)}function Ke(t,s){if(t&1&&(h(0),u(1,Qe,1,0,"ng-container",2),C()),t&2){let e=f();a(),c("ngTemplateOutlet",e.template)("ngTemplateOutletContext",U(2,qe,e.index,e.active,e.highlighted,e.separatorClass))}}function We(t,s){if(t&1&&p(0,"span",3),t&2){let e=f();P(e.separatorClass)}}var Ye=(t,s,e,n,i,d)=>({index:t,active:s,highlighted:e,onClick:n,prevCallback:i,nextCallback:d});function $e(t,s){t&1&&k(0)}function Je(t,s){if(t&1&&(h(0),u(1,$e,1,0,"ng-container",2),C()),t&2){let e=f();a(),c("ngTemplateOutlet",e.template)("ngTemplateOutletContext",le(2,Ye,e.index,e.active,e.highlighted,e.onClick,e.prevCallback,e.nextCallback))}}function Ue(t,s){t&1&&k(0)}function Xe(t,s){if(t&1&&(h(0),u(1,Ue,1,0,"ng-container",3),C()),t&2){let e=f(3);a(),c("ngTemplateOutlet",e.stepperPanel)}}function Ze(t,s){if(t&1&&u(0,Xe,2,1,"ng-container",1),t&2){let e=f(2);c("ngIf",e.stepperPanel)}}function et(t,s){t&1&&u(0,Ze,1,1,"ng-template")}var tt=["*"],Ae=(t,s)=>({"p-highlight":t,"p-disabled":s}),nt=t=>({"p-stepper-panel-active":t}),Oe=t=>({transitionParams:t}),it=t=>({value:"visible",params:t}),rt=t=>({value:"hidden",params:t});function ot(t,s){t&1&&k(0)}function at(t,s){if(t&1&&(h(0),u(1,ot,1,0,"ng-container",4),C()),t&2){let e=f();a(),c("ngTemplateOutlet",e.startTemplate)}}function lt(t,s){if(t&1&&(h(0),p(1,"p-stepperSeparator",10),C()),t&2){let e=f(),n=e.$implicit,i=e.index,d=f(2);a(),c("template",n.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",n)("index",i)("active",d.isStepActive(i))("highlighted",i<d.activeStep)}}function pt(t,s){if(t&1){let e=b();r(0,"li",8)(1,"p-stepperHeader",9),v("onClick",function(i){let d=g(e).index,_=f(2);return x(_.onItemClick(i,d))}),o(),u(2,lt,2,6,"ng-container",2),o()}if(t&2){let e=s.$implicit,n=s.index,i=f(2);c("key",i.getStepKey(e,n))("ngClass",J(20,Ae,i.isStepActive(n),i.isItemDisabled(n)))("data-pc-name",i.stepperPanel)("data-p-highlight",i.isStepActive(n))("data-p-disabled",i.isItemDisabled(n))("data-pc-index",n)("data-p-active",i.isStepActive(n)),D("aria-current",i.isStepActive(n)?"step":void 0),a(),P("p-stepper-action"),c("id",i.getStepHeaderActionId(n))("template",e.headerTemplate)("stepperPanel",e)("getStepProp",i.getStepProp(e,"header"))("index",n)("disabled",i.isItemDisabled(n))("active",i.isStepActive(n))("highlighted",n<i.activeStep)("aria-controls",i.getStepContentId(n)),a(),c("ngIf",n!==i.stepperPanels.length-1)}}function ct(t,s){if(t&1){let e=b();h(0),r(1,"p-stepperContent",11),v("onClick",function(i){g(e);let d=f().index,_=f(2);return x(_.onItemClick(i,d))})("nextCallback",function(i){g(e);let d=f().index,_=f(2);return x(_.nextCallback(i,d))})("prevCallback",function(i){g(e);let d=f().index,_=f(2);return x(_.prevCallback(i,d))}),o(),C()}if(t&2){let e=f(),n=e.$implicit,i=e.index,d=f(2);a(),c("id",d.getStepContentId(i))("template",n.contentTemplate)("orientation",d.orientation)("stepperPanel",n)("index",i)("active",d.isStepActive(i))("highlighted",i<d.activeStep)("ariaLabelledby",d.getStepHeaderActionId(i))}}function mt(t,s){if(t&1&&u(0,ct,2,8,"ng-container",2),t&2){let e=s.index,n=f(2);c("ngIf",n.isStepActive(e))}}function dt(t,s){if(t&1&&(h(0),r(1,"ul",5),u(2,pt,3,23,"ng-template",6),o(),r(3,"div",7),u(4,mt,1,1,"ng-template",6),o(),C()),t&2){let e=f();a(2),c("ngForOf",e.panels)("ngForTrackBy",e.trackByFn),a(2),c("ngForOf",e.panels)("ngForTrackBy",e.trackByFn)}}function st(t,s){if(t&1&&(h(0),p(1,"p-stepperSeparator",10),C()),t&2){let e=f(),n=e.$implicit,i=e.index,d=f(2);a(),c("template",n.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",n)("index",i)("active",d.isStepActive(i))("highlighted",i<d.activeStep)}}function ft(t,s){if(t&1){let e=b();r(0,"div",12)(1,"div",13)(2,"p-stepperHeader",9),v("onClick",function(i){let d=g(e).index,_=f(2);return x(_.onItemClick(i,d))}),o()(),r(3,"div",14),u(4,st,2,6,"ng-container",2),r(5,"p-stepperContent",11),v("onClick",function(i){let d=g(e).index,_=f(2);return x(_.onItemClick(i,d))})("nextCallback",function(i){let d=g(e).index,_=f(2);return x(_.nextCallback(i,d))})("prevCallback",function(i){let d=g(e).index,_=f(2);return x(_.prevCallback(i,d))}),o()()()}if(t&2){let e=s.$implicit,n=s.index,i=f(2);c("key",i.getStepKey(e,n))("ngClass",E(30,nt,i.orientation==="vertical"&&i.isStepActive(n)))("data-pc-name","stepperpanel")("data-p-highlight",i.isStepActive(n))("data-p-disabled",i.isItemDisabled(n))("data-pc-index",n)("data-p-active",i.isStepActive(n)),D("aria-current",i.isStepActive(n)?"step":void 0),a(),c("ngClass",J(32,Ae,i.isStepActive(n),i.isItemDisabled(n))),a(),P("p-stepper-action"),c("id",i.getStepHeaderActionId(n))("template",e.headerTemplate)("stepperPanel",e)("getStepProp",i.getStepProp(e,"header"))("index",n)("disabled",i.isItemDisabled(n))("active",i.isStepActive(n))("highlighted",n<i.activeStep)("aria-controls",i.getStepContentId(n)),a(),c("@tabContent",i.isStepActive(n)?E(37,it,E(35,Oe,i.transitionOptions)):E(41,rt,E(39,Oe,i.transitionOptions))),a(),c("ngIf",n!==i.stepperPanels.length-1),a(),c("id",i.getStepContentId(n))("template",e.contentTemplate)("orientation",i.orientation)("stepperPanel",e)("index",n)("active",i.isStepActive(n))("highlighted",n<i.activeStep)("ariaLabelledby",i.getStepHeaderActionId(n))}}function ut(t,s){if(t&1&&u(0,ft,6,43,"ng-template",6),t&2){let e=f();c("ngForOf",e.panels)("ngForTrackBy",e.trackByFn)}}function _t(t,s){t&1&&k(0)}function gt(t,s){if(t&1&&(h(0),u(1,_t,1,0,"ng-container",4),C()),t&2){let e=f();a(),c("ngTemplateOutlet",e.endTemplate)}}var xt=(()=>{class t{id;template;stepperPanel;index;disabled;active;highlighted;getStepProp;ariaControls;onClick=new S;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-stepperHeader"]],hostAttrs:[1,"p-element"],inputs:{id:"id",template:"template",stepperPanel:"stepperPanel",index:"index",disabled:"disabled",active:"active",highlighted:"highlighted",getStepProp:"getStepProp",ariaControls:"ariaControls"},outputs:{onClick:"onClick"},decls:3,vars:2,consts:[["buttonRef",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","tab",1,"p-stepper-action",3,"click","id","tabindex","aria-controls"],[1,"p-stepper-number"],[1,"p-stepper-title"]],template:function(n,i){if(n&1&&u(0,He,2,7,"ng-container",1)(1,je,5,5,"ng-template",null,0,z),n&2){let d=B(2);c("ngIf",i.template)("ngIfElse",d)}},dependencies:[F,w],encapsulation:2})}return t})(),vt=(()=>{class t{template;separatorClass;stepperPanel;index;active;highlighted;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-stepperSeparator"]],hostAttrs:[1,"p-stepper-separator"],inputs:{template:"template",separatorClass:"separatorClass",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},decls:3,vars:2,consts:[["span",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"]],template:function(n,i){if(n&1&&u(0,Ke,2,7,"ng-container",1)(1,We,1,2,"ng-template",null,0,z),n&2){let d=B(2);c("ngIf",i.template)("ngIfElse",d)}},dependencies:[F,w],encapsulation:2})}return t})(),ht=(()=>{class t{id;orientation;template;ariaLabelledby;stepperPanel;index;active;highlighted;onClick=new S;prevCallback=new S;nextCallback=new S;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-stepperContent"]],hostVars:6,hostBindings:function(n,i){n&2&&Q("p-stepper-content",!0)("p-element",!0)("p-toggleable-content",i.orientation==="vertical")},inputs:{id:"id",orientation:"orientation",template:"template",ariaLabelledby:"ariaLabelledby",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},outputs:{onClick:"onClick",prevCallback:"prevCallback",nextCallback:"nextCallback"},decls:3,vars:6,consts:[["role","tabpanel","data-pc-name","stepperpanel",3,"id"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(r(0,"div",0),u(1,Je,2,9,"ng-container",1)(2,et,1,0,null,1),o()),n&2&&(c("id",i.id),D("data-pc-index",i.index)("data-p-active",i.active)("aria-labelledby",i.ariaLabelledby),a(),c("ngIf",i.template),a(),c("ngIf",!i.template))},dependencies:[F,w],encapsulation:2})}return t})(),ne=(()=>{class t{header;templates;headerTemplate;startTemplate;contentTemplate;separatorTemplate;endTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"separator":this.separatorTemplate=e.template;break}})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-stepperPanel"]],contentQueries:function(n,i,d){if(n&1&&V(d,O,4),n&2){let _;L(_=G())&&(i.templates=_)}},hostAttrs:[1,"p-element"],inputs:{header:"header"},ngContentSelectors:tt,decls:1,vars:0,template:function(n,i){n&1&&(M(),R(0))},encapsulation:2})}return t})(),De=(()=>{class t{activeStep=0;orientation="horizontal";linear=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";stepperPanels;templates;onClick=new S;activeStepChange=new S;headerTemplate;startTemplate;separatorTemplate;endTemplate;id=Ee();panels;isStepActive(e){return this.activeStep===e}getStepProp(e){if(e?.header)return e.header;if(e?.content)return e.content}getStepKey(e,n){return this.getStepProp(e)||n}getStepHeaderActionId(e){return`${this.id}_${e}_header_action`}getStepContentId(e){return`${this.id}_${e}_content`}updateActiveStep(e,n){this.activeStep=n,this.activeStepChange.emit(this.activeStep)}onItemClick(e,n){if(this.linear){e.preventDefault();return}n!==this.activeStep&&this.updateActiveStep(e,n)}isItemDisabled(e){return this.linear&&!this.isStepActive(e)}prevCallback(e,n){n!==0&&this.updateActiveStep(e,n-1)}nextCallback(e,n){n!==this.stepperPanels.length-1&&this.updateActiveStep(e,n+1)}trackByFn(e){return e}ngAfterContentInit(){this.panels=this.stepperPanels.toArray(),this.templates.forEach(e=>{switch(e.getType()){case"start":this.startTemplate=e.template;break;case"end":this.endTemplate=e.template;break;default:break}})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-stepper"]],contentQueries:function(n,i,d){if(n&1&&(V(d,ne,4),V(d,O,4)),n&2){let _;L(_=G())&&(i.stepperPanels=_),L(_=G())&&(i.templates=_)}},hostVars:6,hostBindings:function(n,i){n&2&&Q("p-stepper",!0)("p-component",!0)("p-stepper-vertical",i.orientation==="vertical")},inputs:{activeStep:"activeStep",orientation:"orientation",linear:"linear",transitionOptions:"transitionOptions"},outputs:{onClick:"onClick",activeStepChange:"activeStepChange"},decls:6,vars:4,consts:[["vertical",""],["role","tablist"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-stepper-nav"],["ngFor","",3,"ngForOf","ngForTrackBy"],[1,"p-stepper-panels"],["role","presentation",1,"p-stepper-header",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[3,"onClick","id","template","stepperPanel","getStepProp","index","disabled","active","highlighted","aria-controls"],[3,"template","separatorClass","stepperPanel","index","active","highlighted"],[3,"onClick","nextCallback","prevCallback","id","template","orientation","stepperPanel","index","active","highlighted","ariaLabelledby"],[1,"p-stepper-panel",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[1,"p-stepper-header",3,"ngClass"],[1,"p-stepper-toggleable-content"]],template:function(n,i){if(n&1&&(r(0,"div",1),u(1,at,2,1,"ng-container",2)(2,dt,5,4,"ng-container",3)(3,ut,1,2,"ng-template",null,0,z)(5,gt,2,1,"ng-container",2),o()),n&2){let d=B(4);a(),c("ngIf",i.startTemplate),a(),c("ngIf",i.orientation==="horizontal")("ngIfElse",d),a(3),c("ngIf",i.endTemplate)}},dependencies:[pe,H,F,w,ht,xt,vt],styles:[`@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}
`],encapsulation:2,data:{animation:[Ie("tabContent",[ee("hidden",Z({height:"0",visibility:"hidden"})),ee("visible",Z({height:"*",visibility:"visible"})),te("visible <=> hidden",[X("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),te("void => *",X(0))])]},changeDetection:0})}return t})(),Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=A({type:t});static \u0275inj=N({imports:[j,T,T]})}return t})();var yt=["*"],Me=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["p-floatLabel"]],ngContentSelectors:yt,decls:2,vars:0,consts:[[1,"p-float-label"]],template:function(n,i){n&1&&(M(),r(0,"span",0),R(1),o())},encapsulation:2,changeDetection:0})}return t})(),Re=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=A({type:t});static \u0275inj=N({imports:[j,T,de,T]})}return t})();var ie=Le(Ge());var Ve=()=>["/home"],St=()=>["/driver"],kt=()=>["/driverApplication"];function Et(t,s){if(t&1){let e=b();r(0,"div",15)(1,"form",16)(2,"div",17)(3,"div",18),p(4,"input",19),r(5,"label",20),l(6,"Application form"),o()(),r(7,"div",18),p(8,"input",21),r(9,"label",22),l(10,"CVOR Abstract"),o()(),r(11,"div",18),p(12,"input",23),r(13,"label",24),l(14,"Driver\u2019s Abstract"),o()(),r(15,"div",18),p(16,"input",25),r(17,"label",26),l(18,"Copy of Driver\u2019s Licence"),o()(),r(19,"div",18),p(20,"input",27),r(21,"label",28),l(22,"Copy of Visa/Citizen Card"),o()(),r(23,"div",18),p(24,"input",29),r(25,"label",30),l(26,"Previous Employment Information Request Form"),o()(),r(27,"div",18),p(28,"input",31),r(29,"label",32),l(30,"Release and Authorization to Contact Previous Employer"),o()(),r(31,"div",18),p(32,"input",33),r(33,"label",34),l(34,"Record of Road Test"),o()(),r(35,"div",18),p(36,"input",35),r(37,"label",36),l(38,"Certificate of Driver\u2019s Road Test"),o()(),r(39,"div",18),p(40,"input",37),r(41,"label",38),l(42,"Certification of Compliance with Driver Licence Requirement"),o()(),r(43,"div",18),p(44,"input",39),r(45,"label",40),l(46,"Certification of Violations/Annual Review of Driver Record"),o()(),r(47,"div",18),p(48,"input",41),r(49,"label",42),l(50,"Request for Check of Driving Record"),o()()()()(),r(51,"div",43)(52,"button",44),v("click",function(){let i=g(e).nextCallback;return x(i.emit())}),l(53," Next "),p(54,"i",45)(55,"i",45),o()()}if(t&2){let e=f();a(),c("formGroup",e.myForm)}}function Tt(t,s){if(t&1&&(r(0,"div",79)(1,"div",80)(2,"h5"),l(3),o(),r(4,"div",81)(5,"div",82)(6,"label",83),l(7,"Type of Equipment"),o(),p(8,"input",84),o(),r(9,"div",82)(10,"label",83),l(11,"Date From"),o(),r(12,"p-floatLabel"),p(13,"p-calendar",85),o()(),r(14,"div",82)(15,"label",83),l(16,"Date To"),o(),r(17,"p-floatLabel"),p(18,"p-calendar",86),o()(),r(19,"div",82)(20,"label",83),l(21,"Approx (KMS/MILES)"),o(),p(22,"input",87),o()()()()),t&2){let e=s.index;c("formGroupName",e),a(3),oe("Experience ",e+1,""),a(3),m("for","equipment",e,""),a(2),m("id","equipment",e,""),a(2),m("for","fromTruck",e,""),a(3),m("inputId","fromTruck",e,""),a(2),m("for","toTruck",e,""),a(3),m("inputId","toTruck",e,""),a(2),m("for","approx",e,""),a(2),m("id","approx",e,"")}}function It(t,s){if(t&1&&(r(0,"div",88)(1,"div",89)(2,"div",90)(3,"label",83),l(4,"Date"),o(),r(5,"p-floatLabel"),p(6,"p-calendar",91),r(7,"label",83),l(8,"LIST IN REVERSE"),o()()(),r(9,"div",90)(10,"label",83),l(11,"Nature of Accident"),o(),p(12,"input",92),o(),r(13,"div",90)(14,"label",83),l(15,"Number of Fatalities"),o(),p(16,"input",93),o(),r(17,"div",90)(18,"label",83),l(19,"Number of Injuries"),o(),p(20,"input",94),o(),r(21,"div",90)(22,"label",83),l(23,"Chemical Spills"),o(),r(24,"div",95)(25,"div",96),p(26,"input",97),r(27,"label",98),l(28," Yes "),o()()()()()()),t&2){let e=s.index;c("formGroupName",e),a(3),m("for","date-",e,""),a(3),m("inputId","date-",e,""),a(),m("for","date-",e,""),a(3),m("for","accidentType-",e,""),a(2),m("id","accidentType-",e,""),a(2),m("for","fatalities-",e,""),a(2),m("id","fatalities-",e,""),a(2),m("for","injuries-",e,""),a(2),m("id","injuries-",e,""),a(2),m("for","chemicalsSpills-",e,""),a(4),m("id","chemicalsSpills-",e,""),a(),m("for","chemicalsSpills-",e,"")}}function Ft(t,s){if(t&1){let e=b();r(0,"div",15)(1,"form",16)(2,"div",46)(3,"div",47),p(4,"input",48),o(),r(5,"div",47),p(6,"input",49),o(),r(7,"div",50)(8,"p-floatLabel")(9,"p-calendar",51),$("ngModelChange",function(i){g(e);let d=f();return Y(d.date,i)||(d.date=i),x(i)}),o(),r(10,"label",52),l(11,"Birth Date"),o()()(),r(12,"div",50)(13,"p-floatLabel")(14,"p-calendar",53),$("ngModelChange",function(i){g(e);let d=f();return Y(d.date1,i)||(d.date1=i),x(i)}),o(),r(15,"label",54),l(16,"Date of Application"),o()()(),r(17,"div",50),p(18,"input",55),o(),r(19,"div",50),p(20,"input",56),o(),r(21,"div",47),p(22,"input",57),o()()(),r(23,"h3"),l(24,"Previous Three Years Residency"),o(),r(25,"form",16)(26,"div",58)(27,"div",50),p(28,"input",59),o(),r(29,"div",50),p(30,"input",60),o(),r(31,"div",50),p(32,"input",59),o(),r(33,"div",50),p(34,"input",60),o(),r(35,"div",50),p(36,"input",59),o(),r(37,"div",50),p(38,"input",60),o()()(),r(39,"h3"),l(40,"emergency contact information"),o(),r(41,"form",16)(42,"div",61)(43,"div",50),p(44,"input",62),o(),r(45,"div",50),p(46,"input",63),o(),r(47,"div",50),p(48,"input",59),o(),r(49,"div",50),p(50,"input",64),o()()(),r(51,"h3"),l(52,"driving licence information"),o(),r(53,"form",16)(54,"div",65)(55,"div",47),p(56,"input",66),o(),r(57,"div",47),p(58,"input",67),o(),r(59,"div",47),p(60,"input",68),o(),r(61,"div",47)(62,"p-floatLabel"),p(63,"p-calendar",69),r(64,"label",70),l(65,"Expiration Date"),o()()()()(),r(66,"h3"),l(67,"Driving Experience"),o(),r(68,"div",71)(69,"form",16)(70,"div",72),u(71,Tt,23,18,"div",73),o(),r(72,"button",74),v("click",function(){g(e);let i=f();return x(i.addDrivingExperience())}),l(73," Add New Experience "),o()()(),r(74,"h3"),l(75,"Accidents Records"),o(),r(76,"div",71)(77,"form",16)(78,"div",75),u(79,It,29,25,"div",76),o(),r(80,"button",74),v("click",function(){g(e);let i=f();return x(i.addAccidentRecord())}),l(81," Add Accident Record "),o()()()(),r(82,"div",77)(83,"button",44),v("click",function(){let i=g(e).prevCallback;return x(i.emit())}),p(84,"i",78)(85,"i",78),l(86," Back "),o(),r(87,"button",44),v("click",function(){let i=g(e).nextCallback;return x(i.emit())}),l(88," Next "),p(89,"i",45)(90,"i",45),o()()}if(t&2){let e=f();a(),c("formGroup",e.myForm),a(8),W("ngModel",e.date),a(5),W("ngModel",e.date1),a(11),c("formGroup",e.myForm),a(16),c("formGroup",e.myForm),a(12),c("formGroup",e.myForm),a(16),c("formGroup",e.myForm),a(2),c("ngForOf",e.drivingExperienceForm.controls),a(6),c("formGroup",e.myForm),a(2),c("ngForOf",e.accidentRecords.controls)}}function wt(t,s){if(t&1&&(r(0,"div",79)(1,"div",81)(2,"div",47)(3,"label",83),l(4,"Employee Carrier Name"),o(),p(5,"input",101),o(),r(6,"div",102)(7,"label",83),l(8,"Address"),o(),p(9,"input",103),o(),r(10,"div",102)(11,"label",83),l(12,"From"),o(),p(13,"input",104),o(),r(14,"div",102)(15,"label",83),l(16,"To"),o(),p(17,"input",105),o(),r(18,"div",106)(19,"label",83),l(20,"City"),o(),p(21,"input",107),o(),r(22,"div",106)(23,"label",83),l(24,"State"),o(),p(25,"input",108),o(),r(26,"div",106)(27,"label",83),l(28,"Postal Code"),o(),p(29,"input",109),o(),r(30,"div",106)(31,"label",83),l(32,"Year"),o(),p(33,"input",110),o(),r(34,"div",102)(35,"label",83),l(36,"Contact Person"),o(),p(37,"input",111),o(),r(38,"div",102)(39,"label",83),l(40,"Phone"),o(),p(41,"input",112),o(),r(42,"div",102)(43,"label",83),l(44,"Fax"),o(),p(45,"input",113),o(),r(46,"div",47)(47,"label",83),l(48,"Reason For Leaving"),o(),p(49,"input",114),o(),r(50,"div",47)(51,"label",83),l(52,"Employment Gaps (if any)"),o(),p(53,"input",115),o(),r(54,"div",47)(55,"label",83),l(56,"Subject to Federal Motor Carrier Safety Regulations?"),o(),r(57,"div",96),p(58,"input",116),r(59,"label",98),l(60," Yes "),o()()(),r(61,"div",47)(62,"label",83),l(63,"Safety Sensitive Function?"),o(),r(64,"div",96),p(65,"input",117),r(66,"label",98),l(67," Yes "),o()()()()()),t&2){let e=s.index;c("formGroupName",e),a(3),m("for","carrierName-",e,""),a(2),m("id","carrierName-",e,""),a(2),m("for","address-",e,""),a(2),m("id","address-",e,""),a(2),m("for","fromDate-",e,""),a(2),m("id","fromDate-",e,""),a(2),m("for","toDate-",e,""),a(2),m("id","toDate-",e,""),a(2),m("for","city-",e,""),a(2),m("id","city-",e,""),a(2),m("for","state-",e,""),a(2),m("id","state-",e,""),a(2),m("for","postalCode-",e,""),a(2),m("id","postalCode-",e,""),a(2),m("for","year-",e,""),a(2),m("id","year-",e,""),a(2),m("for","contactPerson-",e,""),a(2),m("id","contactPerson-",e,""),a(2),m("for","phone-",e,""),a(2),m("id","phone-",e,""),a(2),m("for","fax-",e,""),a(2),m("id","fax-",e,""),a(2),m("for","reasonForLeaving-",e,""),a(2),m("id","reasonForLeaving-",e,""),a(2),m("for","employmentGaps-",e,""),a(2),m("id","employmentGaps-",e,""),a(2),m("for","federalRegulations-",e,""),a(3),m("id","federalRegulations-",e,""),a(),m("for","federalRegulations-",e,""),a(3),m("for","safetySensitive-",e,""),a(3),m("id","safetySensitive-",e,""),a(),m("for","safetySensitive-",e,"")}}function Ot(t,s){if(t&1){let e=b();r(0,"div",15)(1,"form",16)(2,"div",99),u(3,wt,68,65,"div",73),o(),r(4,"button",74),v("click",function(){g(e);let i=f();return x(i.addEmployer())}),l(5," Add Employer "),o()()(),r(6,"div",77)(7,"button",44),v("click",function(){let i=g(e).prevCallback;return x(i.emit())}),p(8,"i",78)(9,"i",78),l(10," Back "),o(),r(11,"button",100),v("click",function(){g(e);let i=f();return x(i.onSubmit())}),l(12," Submit "),o()()}if(t&2){let e=f();a(),c("formGroup",e.myForm),a(2),c("ngForOf",e.employersReverseOrder.controls)}}var rn=(()=>{class t{constructor(e){this.fb=e}ngOnInit(){this.myForm=this.fb.group({driverQualificationCheckList:this.fb.group({applicationForm:[!1],coverAbstract:[!1],driversAbstract:[!1],copyOfDriversLicence:[!1],copyOfVisaOrCitizenCard:[!1],previousEmploymentInformationRequestForm:[!1],releaseAndAuthorizationToContactPreviosEmployer:[!1],recordOfRoadTest:[!1],certificateOfDriversRoadTest:[!1],certificationOfComplianceWithDriverLicenceRequirement:[!1],certificationOfViolationsOrAnnualReviewOfDirverRecord:[!1],requestForCheckOfDrivingRecord:[!1]}),applicationForm:this.fb.group({name:["",q.required],email:["",[q.required,q.email]],dateOfBirth:[""],dateOfApplication:[""],howLong:[""],phone:[""],address:[""]}),residenceForm:this.fb.group({address:[""],year:[""]}),emergencyContactForm:this.fb.group({name:[""],relationship:[""],address:[""],ph:[""]}),drivingLicenseInformation:this.fb.group({licenseNO:[""],type:[""],state:[""],expirationDate:[""]}),drivingExperienceForm:this.fb.array([]),accidentRecords:this.fb.array([]),employersReverseOrder:this.fb.array([])}),this.addDrivingExperience(),this.addAccidentRecord(),this.addEmployer()}get drivingExperienceForm(){return this.myForm.get("drivingExperienceForm")}get accidentRecords(){return this.myForm.get("accidentRecords")}get employersReverseOrder(){return this.myForm.get("employersReverseOrder")}addDrivingExperience(){let e=this.fb.group({equipmentType:[""],fromDate:[""],toDate:[""],approximateKmsMiles:[""]});this.myForm.get("drivingExperienceForm").push(e)}addAccidentRecord(){let e=this.fb.group({date:[""],natureOfAccident:[""],numberOfFatalities:[""],numberOfInjuries:[""],chemicalSpills:[!1]});this.accidentRecords.push(e)}addEmployer(){let e=this.fb.group({employerName:[""],address:[""],from:[""],to:[""],city:[""],state:[""],postalCode:[""],year:[""],contactPerson:[""],phone:[""],fax:[""],reasonForLeaving:[""],gaps:[""],firstQuestion:[!1],lastQuestion:[!1]});this.employersReverseOrder.push(e)}onSubmit(){this.myForm.valid?(console.log("Form Values:",this.myForm.value),ie.default.fire({title:"Success!",text:"Your form has been submitted successfully.",icon:"success",confirmButtonText:"OK"}),this.myForm.reset()):(console.log("Form is invalid"),ie.default.fire({title:"Error!",text:"Please fill out the form correctly.",icon:"error",confirmButtonText:"OK"}))}static{this.\u0275fac=function(n){return new(n||t)(re(be))}}static{this.\u0275cmp=y({type:t,selectors:[["app-application-driver"]],standalone:!0,features:[ae],decls:28,vars:10,consts:[[1,"mt-5","mb-5"],[1,"container"],[1,"main"],[1,"nav","nav-underline"],[1,"nav-item"],["routerLinkActive","active-link",1,"nav-link",3,"routerLink"],[1,"hash"],[1,"back",3,"routerLink"],["src","assets/Arrow - Right-red.png","alt","",1,"ms-2"],[1,"mt-4",3,"formGroup"],[3,"linear"],["header","Driver Qualifications"],["pTemplate","content"],["header","Basic information"],["header","Additional Information"],[1,"border"],[3,"formGroup"],["formGroupName","driverQualificationCheckList"],[1,"form-check","py-1"],["type","checkbox","formControlName","applicationForm","id","flexCheckApplication",1,"form-check-input"],["for","flexCheckApplication",1,"form-check-label"],["type","checkbox","formControlName","coverAbstract","id","flexCheckCVOR",1,"form-check-input"],["for","flexCheckCVOR",1,"form-check-label"],["type","checkbox","formControlName","driversAbstract","id","flexCheckDriversAbstract",1,"form-check-input"],["for","flexCheckDriversAbstract",1,"form-check-label"],["type","checkbox","formControlName","copyOfDriversLicence","id","flexCheckLicense",1,"form-check-input"],["for","flexCheckLicense",1,"form-check-label"],["type","checkbox","formControlName","copyOfVisaOrCitizenCard","id","flexCheckVisaCard",1,"form-check-input"],["for","flexCheckVisaCard",1,"form-check-label"],["type","checkbox","formControlName","previousEmploymentInformationRequestForm","id","flexCheckEmploymentForm",1,"form-check-input"],["for","flexCheckEmploymentForm",1,"form-check-label"],["type","checkbox","formControlName","releaseAndAuthorizationToContactPreviosEmployer","id","flexCheckAuthorization",1,"form-check-input"],["for","flexCheckAuthorization",1,"form-check-label"],["type","checkbox","formControlName","recordOfRoadTest","id","flexCheckRoadTest",1,"form-check-input"],["for","flexCheckRoadTest",1,"form-check-label"],["type","checkbox","formControlName","certificateOfDriversRoadTest","id","flexCheckDriverTestCertificate",1,"form-check-input"],["for","flexCheckDriverTestCertificate",1,"form-check-label"],["type","checkbox","formControlName","certificationOfComplianceWithDriverLicenceRequirement","id","flexCheckCompliance",1,"form-check-input"],["for","flexCheckCompliance",1,"form-check-label"],["type","checkbox","formControlName","certificationOfViolationsOrAnnualReviewOfDirverRecord","id","flexCheckViolations",1,"form-check-input"],["for","flexCheckViolations",1,"form-check-label"],["type","checkbox","formControlName","requestForCheckOfDrivingRecord","id","flexCheckDrivingRecord",1,"form-check-input"],["for","flexCheckDrivingRecord",1,"form-check-label"],[1,"flex","pt-4","justify-content-end"],[1,"p-button","next","btn",3,"click"],[1,"fa-solid","fa-angle-right"],["formGroupName","applicationForm",1,"row"],[1,"col-sm-12","mb-3"],["type","text","placeholder","Name","formControlName","name",1,"form-control"],["type","email","placeholder","Email Address","formControlName","email",1,"form-control"],[1,"col-sm-12","col-md-6","mb-3"],["inputId","birth_date","name","birth_date","formControlName","dateOfBirth",3,"ngModelChange","ngModel"],["for","birth_date"],["inputId","app_date","name","app_date","formControlName","dateOfApplication",3,"ngModelChange","ngModel"],["for","app_date"],["type","number","name","experience","placeholder","Years of Experience","formControlName","howLong",1,"form-control"],["type","number","name","phone","placeholder","Phone","formControlName","phone",1,"form-control"],["type","text","name","address","placeholder","Address","formControlName","address",1,"form-control"],["formGroupName","residenceForm",1,"row"],["type","text","formControlName","address","placeholder","Address",1,"form-control"],["type","number","formControlName","year","placeholder","Years",1,"form-control"],["formGroupName","emergencyContactForm",1,"row"],["type","text","formControlName","name","placeholder","Name",1,"form-control"],["type","text","formControlName","relationship","placeholder","Relationship",1,"form-control"],["type","text","formControlName","ph","placeholder","PH#",1,"form-control"],["formGroupName","drivingLicenseInformation",1,"row"],["type","number","formControlName","licenseNO","placeholder","License NO",1,"form-control"],["type","text","formControlName","type","placeholder","Type/Class",1,"form-control"],["type","text","formControlName","state","placeholder","State/Province",1,"form-control"],["formControlName","expirationDate","inputId","expiration_date","name","expiration_date"],["for","expiration_date"],[1,"form-container"],["formArrayName","drivingExperienceForm"],[3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","add",3,"click"],["formArrayName","accidentRecords"],["class","accident-entry",3,"formGroupName",4,"ngFor","ngForOf"],[1,"flex","pt-4","justify-content-between"],[1,"fa-solid","fa-angle-left"],[3,"formGroupName"],[1,"section"],[1,"row"],[1,"col-md-3"],[3,"for"],["type","text","formControlName","equipmentType","placeholder","(VAN, TANK, FLAT, ET)",1,"form-control",3,"id"],["formControlName","fromDate",3,"inputId"],["formControlName","toDate",3,"inputId"],["type","text","formControlName","approximateKmsMiles","placeholder","KMS/MILES",1,"form-control",3,"id"],[1,"accident-entry",3,"formGroupName"],[1,"row","gap-5"],[1,"col-md-2"],["formControlName","date",3,"inputId"],["type","text","formControlName","natureOfAccident","placeholder","(HEAD-ON, REAR-END, etc.)",1,"form-control",3,"id"],["type","number","formControlName","numberOfFatalities",1,"form-control",3,"id"],["type","number","formControlName","numberOfInjuries",1,"form-control",3,"id"],[1,"flex","gap-2"],[1,"form-check"],["type","checkbox","formControlName","chemicalSpills",1,"form-check-input",3,"id"],[1,"form-check-label",3,"for"],["formArrayName","employersReverseOrder"],["type","submit",1,"p-button","next","btn",3,"click"],["type","text","formControlName","employerName",1,"form-control",3,"id"],[1,"col-sm-12","col-md-4","mb-3"],["type","text","formControlName","address",1,"form-control",3,"id"],["type","date","formControlName","from",1,"form-control",3,"id"],["type","date","formControlName","to",1,"form-control",3,"id"],[1,"col-sm-12","col-md-3","mb-3"],["type","text","formControlName","city",1,"form-control",3,"id"],["type","text","formControlName","state",1,"form-control",3,"id"],["type","text","formControlName","postalCode",1,"form-control",3,"id"],["type","date","formControlName","year",1,"form-control",3,"id"],["type","text","formControlName","contactPerson",1,"form-control",3,"id"],["type","number","formControlName","phone",1,"form-control",3,"id"],["type","number","formControlName","fax",1,"form-control",3,"id"],["type","text","formControlName","reasonForLeaving",1,"form-control",3,"id"],["type","text","formControlName","gaps",1,"form-control",3,"id"],["type","checkbox","formControlName","firstQuestion",1,"form-check-input",3,"id"],["type","checkbox","formControlName","lastQuestion",1,"form-check-input",3,"id"]],template:function(n,i){n&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),l(6,"Home"),o()(),r(7,"li",6),l(8,"/"),o(),r(9,"li",4)(10,"a",5),l(11,"Become a driver"),o()(),r(12,"li",6),l(13,"/"),o(),r(14,"li",4)(15,"a",5),l(16,"Driver Application"),o()()(),r(17,"a",7),l(18,"Back Home "),p(19,"img",8),o()(),r(20,"form",9)(21,"p-stepper",10)(22,"p-stepperPanel",11),u(23,Et,56,1,"ng-template",12),o(),r(24,"p-stepperPanel",13),u(25,Ft,91,10,"ng-template",12),o(),r(26,"p-stepperPanel",14),u(27,Ot,13,2,"ng-template",12),o()()()()()),n&2&&(a(5),c("routerLink",I(6,Ve)),a(5),c("routerLink",I(7,St)),a(5),c("routerLink",I(8,kt)),a(2),c("routerLink",I(9,Ve)),a(3),c("formGroup",i.myForm),a(),c("linear",!0))},dependencies:[ce,me,Pe,De,ne,O,Te,we,Fe,ke,ge,fe,xe,se,ue,_e,ve,ye,he,Ce,Se,Re,Me,H],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:#8f8f92;font-family:Raleway;font-size:16px;font-style:normal;font-weight:500;line-height:normal;transition:all .5s}a[_ngcontent-%COMP%]:hover{border:none!important;text-decoration:none;color:#8f8f92;font-family:Raleway;font-size:16px;font-style:normal;font-weight:500;line-height:normal}.active-link[_ngcontent-%COMP%]{color:#dc1f28}.active-link[_ngcontent-%COMP%]:hover{color:#dc1f28!important}.back[_ngcontent-%COMP%]{color:var(--Reds-100, #DC1F28);text-align:center;font-family:Raleway;font-size:16px;font-style:normal;font-weight:500;line-height:normal}.hash[_ngcontent-%COMP%]{color:#b1b3b5;font-family:Josefin Sans;font-size:24px;font-style:normal;font-weight:400;line-height:normal}.form-check-label[_ngcontent-%COMP%]{color:var(--Greys-700, #4D4D4D);font-family:Raleway;font-size:18px;font-style:normal;font-weight:500;line-height:normal}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#dc1f28;border-color:#dc1f28}.next[_ngcontent-%COMP%]{display:flex;width:74px;height:72px;padding:16px 20px;justify-content:center;align-items:center;gap:2px;border-radius:50px;background:var(--Reds-100, #DC1F28);box-shadow:0 3px 4px #f56b0e2e;color:var(--Stroke, #F1F3F9);text-align:center;font-family:Roboto;font-size:16px;font-style:normal;font-weight:500;line-height:normal}.btns[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}h3[_ngcontent-%COMP%]{font-family:Raleway;font-size:28px;font-weight:700;line-height:32.87px;text-align:left;color:#dc1f28;text-transform:capitalize;padding-bottom:5px}label[_ngcontent-%COMP%]{font-family:Raleway;font-size:13px;font-weight:700;text-align:left;color:#4d4d4d;text-transform:uppercase;padding-bottom:7px}.form-control[_ngcontent-%COMP%]{height:42px}  .calendar .p-inputtext{height:42px!important;line-height:42px}.border[_ngcontent-%COMP%]{box-shadow:0 4px 32px #3d467014;background-color:#fff;padding:46px 49px;border-radius:14px 0 0;opacity:0px}.add[_ngcontent-%COMP%]{background-color:#dc1f28;color:#f1f3f9}@media screen and (min-width: 992px){.main[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.back[_ngcontent-%COMP%]{display:flex;width:165px;padding:16px 20px;justify-content:center;align-items:center;gap:2px;border-radius:5px;border:1px solid var(--Reds-100, #DC1F28);box-shadow:0 4px 4px #007cff26}.back[_ngcontent-%COMP%]:hover{transform:scale(1.1);border:1px solid rgb(220,31,40)!important;color:#dc1f28}}@media screen and (max-width: 750px){.form-check-label[_ngcontent-%COMP%]{font-size:16px}label[_ngcontent-%COMP%]{font-weight:500}h3[_ngcontent-%COMP%]{padding-top:10px;font-size:18px}}.form-container[_ngcontent-%COMP%]{padding:20px}h5[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin-bottom:15px}.row[_ngcontent-%COMP%]{margin-bottom:15px}.form-control[_ngcontent-%COMP%]{padding:10px;border-radius:5px;border:1px solid #ccc;width:100%;font-size:14px}@media (max-width: 768px){.col-md-3[_ngcontent-%COMP%]{margin-bottom:15px}}.accident-entry[_ngcontent-%COMP%]{margin-bottom:20px}.col-md-2[_ngcontent-%COMP%]{margin-bottom:10px}.flex[_ngcontent-%COMP%]{display:flex;gap:10px}p-floatLabel[_ngcontent-%COMP%]{display:block}"]})}}return t})();export{rn as ApplicationDriverComponent};
