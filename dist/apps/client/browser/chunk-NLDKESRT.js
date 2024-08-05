import{a as B}from"./chunk-4YX5MK5G.js";import{a as xe,c as ke,d as Me,e as Se,f as Ve,g as Te,h as Ee}from"./chunk-IULNXVTX.js";import"./chunk-TKX2KWFY.js";import{Cc as le,Da as Y,Dc as ae,Fa as $,Gc as ce,Ic as ue,Ja as p,Jb as y,K as G,Ka as f,Kb as w,Ma as q,Mb as x,N as U,Na as H,Nc as de,Ra as K,Rc as P,Sa as v,Ta as g,U as E,Ua as W,V as Z,Wb as V,Xa as J,Xb as ie,Yc as pe,Z as l,Za as k,Zc as he,_ as a,ad as me,bb as c,bc as oe,cb as u,cd as F,db as S,dd as ge,ed as _e,fd as T,gd as fe,hb as C,hd as ve,ic as ne,id as Ce,jb as _,kb as r,lc as L,ma as N,mc as re,nd as be,pb as M,pc as R,pd as ye,qb as O,rc as se,sd as we,tb as D,td as X,vd as j,wb as ee,xb as te,xd as z,yb as A,zb as I}from"./chunk-3EK5NAFT.js";var Pe=["container"],Be=["input"],Oe=["colorSelector"],Ae=["colorHandle"],Fe=["hue"],Xe=["hueHandle"],je=n=>({"p-disabled":n});function ze(n,s){if(n&1){let e=C();c(0,"input",4,5),_("click",function(){l(e);let i=r();return a(i.onInputClick())})("keydown",function(i){l(e);let o=r();return a(o.onInputKeydown(i))})("focus",function(){l(e);let i=r();return a(i.onInputFocus())}),u()}if(n&2){let e=r();W("background-color",e.inputBgColor),g("ngClass",A(9,je,e.disabled))("disabled",e.disabled)("autofocus",e.autofocus),v("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}var Qe=(n,s)=>({"p-colorpicker-panel":!0,"p-colorpicker-overlay-panel":n,"p-disabled":s}),Ge=(n,s)=>({showTransitionParams:n,hideTransitionParams:s}),Ue=n=>({value:"visible",params:n});function Ze(n,s){if(n&1){let e=C();c(0,"div",6),_("click",function(i){l(e);let o=r();return a(o.onOverlayClick(i))})("@overlayAnimation.start",function(i){l(e);let o=r();return a(o.onOverlayAnimationStart(i))})("@overlayAnimation.done",function(i){l(e);let o=r();return a(o.onOverlayAnimationEnd(i))}),c(1,"div",7)(2,"div",8,9),_("touchstart",function(i){l(e);let o=r();return a(o.onColorDragStart(i))})("touchmove",function(i){l(e);let o=r();return a(o.onDrag(i))})("touchend",function(){l(e);let i=r();return a(i.onDragEnd())})("mousedown",function(i){l(e);let o=r();return a(o.onColorMousedown(i))}),c(4,"div",10),S(5,"div",11,12),u()(),c(7,"div",13,14),_("mousedown",function(i){l(e);let o=r();return a(o.onHueMousedown(i))})("touchstart",function(i){l(e);let o=r();return a(o.onHueDragStart(i))})("touchmove",function(i){l(e);let o=r();return a(o.onDrag(i))})("touchend",function(){l(e);let i=r();return a(i.onDragEnd())}),S(9,"div",15,16),u()()()}if(n&2){let e=r();g("ngClass",I(10,Qe,!e.inline,e.disabled))("@overlayAnimation",A(16,Ue,I(13,Ge,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),v("data-pc-section","panel"),p(),v("data-pc-section","content"),p(),v("data-pc-section","selector"),p(2),v("data-pc-section","color"),p(),v("data-pc-section","colorHandle"),p(2),v("data-pc-section","hue"),p(2),v("data-pc-section","hueHandle")}}var Ne=(n,s)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":n,"p-colorpicker-dragging":s}),Ye={provide:le,useExisting:G(()=>Q),multi:!0},Q=(()=>{class n{document;platformId;el;renderer;cd;config;overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new H;onShow=new H;onHide=new H;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;window;constructor(e,t,i,o,d,h,m){this.document=e,this.platformId=t,this.el=i,this.renderer=o,this.cd=d,this.config=h,this.overlayService=m,this.window=this.document.defaultView}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(F.ARIA)[F.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,t){let i=t?t.pageY:e.pageY,o=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,i-o)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let i=t?t.pageX:e.pageX,o=t?t.pageY:e.pageY,d=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),h=d.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),m=d.left+this.document.body.scrollLeft,b=Math.floor(100*Math.max(0,Math.min(150,i-m))/150),De=Math.floor(100*(150-Math.max(0,Math.min(150,o-h)))/150);this.value=this.validateHSB({h:this.value.h,s:b,b:De}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&P.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&P.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):T.appendChild(this.overlay,this.appendTo))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?T.absolutePosition(this.overlay,this.inputViewChild?.nativeElement):T.relativePosition(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){se(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!T.isTouchDevice()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new fe(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var t=6-e.length;if(t>0){for(var i=[],o=0;o<t;o++)i.push("0");i.push(e),e=i.join("")}return e}HEXtoRGB(e){let t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var t={h:0,s:0,b:0},i=Math.min(e.r,e.g,e.b),o=Math.max(e.r,e.g,e.b),d=o-i;return t.b=o,t.s=o!=0?255*d/o:0,t.s!=0?e.r==o?t.h=(e.g-e.b)/d:e.g==o?t.h=2+(e.b-e.r)/d:t.h=4+(e.r-e.g)/d:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){var t={r:0,g:0,b:0};let i=e.h,o=e.s*255/100,d=e.b*255/100;if(o==0)t={r:d,g:d,b:d};else{let h=d,m=(255-o)*d/255,b=(h-m)*(i%60)/60;i==360&&(i=0),i<60?(t.r=h,t.b=m,t.g=m+b):i<120?(t.g=h,t.b=m,t.r=h-b):i<180?(t.g=h,t.r=m,t.b=m+b):i<240?(t.b=h,t.r=m,t.g=h-b):i<300?(t.b=h,t.g=m,t.r=m+b):i<360?(t.r=h,t.g=m,t.b=h-b):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var i in t)t[i].length==1&&(t[i]="0"+t[i]);return t.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&P.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(t){return new(t||n)(f(oe),f(N),f(Y),f($),f(q),f(he),f(pe))};static \u0275cmp=E({type:n,selectors:[["p-colorPicker"]],viewQuery:function(t,i){if(t&1&&(w(Pe,5),w(Be,5),w(Oe,5),w(Ae,5),w(Fe,5),w(Xe,5)),t&2){let o;y(o=x())&&(i.containerViewChild=o.first),y(o=x())&&(i.inputViewChild=o.first),y(o=x())&&(i.colorSelector=o.first),y(o=x())&&(i.colorHandle=o.first),y(o=x())&&(i.hue=o.first),y(o=x())&&(i.hueHandle=o.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",inline:["inline","inline",V],format:"format",appendTo:"appendTo",disabled:["disabled","disabled",V],tabindex:"tabindex",inputId:"inputId",autoZIndex:["autoZIndex","autoZIndex",V],baseZIndex:["baseZIndex","baseZIndex",ie],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:["autofocus","autofocus",V]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[D([Ye]),K],decls:4,vars:11,consts:[[3,"ngStyle","ngClass"],["container",""],["type","text","class","p-colorpicker-preview p-inputtext","readonly","readonly","pAutoFocus","",3,"ngClass","disabled","backgroundColor","autofocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly","pAutoFocus","",1,"p-colorpicker-preview","p-inputtext",3,"ngClass","disabled","autofocus","click","keydown","focus"],["input",""],[3,"ngClass","click"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],["colorSelector",""],[1,"p-colorpicker-color"],[1,"p-colorpicker-color-handle"],["colorHandle",""],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],["hue",""],[1,"p-colorpicker-hue-handle"],["hueHandle",""]],template:function(t,i){t&1&&(c(0,"div",0,1),k(2,ze,2,11,"input",2)(3,Ze,11,18,"div",3),u()),t&2&&(J(i.styleClass),g("ngStyle",i.style)("ngClass",I(8,Ne,!i.inline,i.colorDragging||i.hueDragging)),v("data-pc-name","colorpicker")("data-pc-section","root"),p(2),g("ngIf",!i.inline),p(),g("ngIf",i.inline||i.overlayVisible))},dependencies:[ne,L,re,ve],styles:[`@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}
`],encapsulation:2,data:{animation:[we("overlayAnimation",[z(":enter",[j({opacity:0,transform:"scaleY(0.8)"}),X("{{showTransitionParams}}")]),z(":leave",[X("{{hideTransitionParams}}",j({opacity:0}))])])]},changeDetection:0})}return n})(),He=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Z({type:n});static \u0275inj=U({imports:[R,Ce]})}return n})();function qe(n,s){n&1&&(c(0,"tr")(1,"th"),M(2,"Codigo"),u(),c(3,"th"),M(4,"Categoria"),u(),c(5,"th"),M(6,"Color"),u(),S(7,"th"),u())}function Ke(n,s){if(n&1){let e=C();c(0,"input",12),_("ngModelChange",function(i){l(e);let o=r().$implicit;return a(o.name=i)}),u()}if(n&2){let e=r().$implicit;g("ngModel",e.name)}}function We(n,s){if(n&1&&(c(0,"td"),M(1),u()),n&2){let e=r().$implicit;p(),O(e.name)}}function Je(n,s){if(n&1){let e=C();c(0,"button",13),_("click",function(){l(e);let i=r().$implicit,o=r();return a(o.editCategory(i))}),u()}}function et(n,s){if(n&1){let e=C();c(0,"button",14),_("click",function(){l(e);let i=r().$implicit,o=r();return a(o.saveCategory(i))}),u()}}function tt(n,s){if(n&1){let e=C();c(0,"button",15),_("click",function(){l(e);let i=r(2);return a(i.editCancel())}),u()}}function it(n,s){if(n&1){let e=C();c(0,"tr",4)(1,"td"),M(2),u(),c(3,"td")(4,"p-cellEditor"),k(5,Ke,1,1,"ng-template",5)(6,We,2,1,"ng-template",6),u()(),c(7,"td")(8,"p-colorPicker",7),_("ngModelChange",function(i){let d=l(e).$implicit;return a(d.color=i)}),u()(),c(9,"td")(10,"div",8),k(11,Je,1,0,"button",9)(12,et,1,0,"button",10)(13,tt,1,0,"button",11),u()()()}if(n&2){let e=s.$implicit,t=s.editing,i=r();g("pEditableRow",e),p(2),O(e.id),p(6),g("ngModel",e.color)("disabled",i.disabled),p(3),g("ngIf",!t),p(),g("ngIf",t),p(),g("ngIf",t)}}var ot=()=>({"min-width":"50rem"}),Lt=(()=>{let s=class s{constructor(t){this.categoriesService=t,this.disabled=!0}ngOnInit(){this.getCategories()}getCategories(){this.categoriesService.getCategories().subscribe(t=>{this.categories=t.result})}editCategory(t){this.disabled=!1}saveCategory(t){this.categoriesService.postCategory(t).subscribe(i=>{this.disabled=!0})}editCancel(){this.disabled=!0}};s.\u0275fac=function(i){return new(i||s)(f(B))},s.\u0275cmp=E({type:s,selectors:[["event-trackr-categories"]],standalone:!0,features:[D([B]),ee],decls:4,vars:3,consts:[[1,"categories"],["editMode","row","dataKey","id",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],[3,"pEditableRow"],["pTemplate","input"],["pTemplate","output"],[3,"ngModel","disabled","ngModelChange"],[1,"flex","align-items-center","justify-content-center","gap-2"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","class","p-button-rounded p-button-text",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","class","p-button-rounded p-button-text p-button-success mr-2",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","class","p-button-rounded p-button-text p-button-danger",3,"click",4,"ngIf"],["pInputText","","type","text",3,"ngModel","ngModelChange"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check",1,"p-button-rounded","p-button-text","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(i,o){i&1&&(c(0,"div",0)(1,"p-table",1),k(2,qe,8,0,"ng-template",2)(3,it,14,7,"ng-template",3),u()()),i&2&&(p(),g("value",o.categories)("tableStyle",te(2,ot)))},dependencies:[R,L,Ee,xe,me,Te,ke,Me,Se,Ve,He,Q,de,ae,ce,ue,ye,be,_e,ge]});let n=s;return n})();export{Lt as CategoriesComponent};
