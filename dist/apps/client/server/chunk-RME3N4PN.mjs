import './polyfills.server.mjs';
import{a as Dt,b as Ft,c as At}from"./chunk-IRPK6TS4.mjs";import{a as Vt,b as Rt}from"./chunk-EMRUI5SG.mjs";import{a as at,d as st}from"./chunk-WM7XVZ3C.mjs";import{e as nt,f as ot,g as rt,h as lt,i as pt,j as re,l as w,m as ae,n as ct,o as mt,p as D}from"./chunk-665N2ZQQ.mjs";import{a as Lt,b as Pt}from"./chunk-RFEREZI4.mjs";import{A as vt,B as Ct,D as yt,E as xt,F as It,G as Tt,H as kt,I as wt,O as Mt,P as De,U as St,V as Ot,W as Et,Y as ce,Z as me,b as dt,c as se,i as le,j as ut,k as ft,n as Le,o as $,q as h,r as _t,t as gt,u as ht,v as pe,x as bt,y as Pe}from"./chunk-ZBY3JBZB.mjs";import{Aa as $e,Ab as Ge,Ac as Me,Bb as g,Bc as Se,Cb as q,Cc as Ye,Db as xe,Dc as k,E as Ne,Ea as he,Ga as be,Gc as Y,Ha as Ue,I as je,Ia as ve,Jb as N,K as Be,Kb as j,L as F,La as l,Ma as b,Nb as O,Nc as Xe,Oa as Ce,Ob as G,Pb as ne,Pc as et,Q as _,Qa as V,Qb as E,Qc as tt,Rb as J,Rc as it,S as x,T as A,Ua as te,Uc as Oe,V as ze,Va as v,Vc as B,Wa as a,X as C,Xc as z,Y as y,Zc as oe,_a as L,_c as Ee,ab as m,bb as ye,cb as Ze,db as Qe,eb as p,f as fe,fb as c,fc as Ie,gb as u,gc as Te,hb as Q,ib as K,jb as S,jc as Je,ka as _e,kb as P,m as Z,mb as I,nb as s,nc as ke,rb as R,sb as T,t as Re,tb as ie,u as ee,ub as Ke,wb as qe,wc as W,x as He,yc as We,za as ge,zb as H,zc as we}from"./chunk-4KNUNF7F.mjs";import{a as Ve}from"./chunk-KRLCULJA.mjs";var dn=Ee([z({transform:"{{transform}}",opacity:0}),B("{{transition}}")]),un=Ee([B("{{transition}}",z({transform:"{{transform}}",opacity:0}))]);var Ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[k,pe,$,gt,$]})}return t})();var X=(()=>{let o=class o{constructor(){this.baseUrl=St.api,this.httpClient=_(Xe),this.loggedInUser$=new fe(null),this.loggedIn$=new fe(!1)}login(i){return this.httpClient.post(`${this.baseUrl}/auth/login`,Ve({},i)).pipe(Z(n=>(n.status&&sessionStorage.setItem("user",JSON.stringify(n.result)),n)))}logout(){localStorage.clear()}getUser(){return this.httpClient.get(`${this.baseUrl}/auth/profile`)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=Be({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var ti=["pMenuItemContent",""];function ii(t,o){t&1&&S(0)}var jt=t=>({"p-disabled":t}),de=t=>({$implicit:t});function ni(t,o){if(t&1&&(p(0,"a",5),m(1,ii,1,0,"ng-container",6),c()),t&2){let e=s(2),i=R(4);a("target",e.item.target)("ngClass",g(10,jt,e.item.disabled)),v("title",e.item.title)("href",e.item.url||null,$e)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("aria-hidden",!0),l(),a("ngTemplateOutlet",i)("ngTemplateOutletContext",g(12,de,e.item))}}function oi(t,o){t&1&&S(0)}var ri=()=>({exact:!1});function ai(t,o){if(t&1&&(p(0,"a",7),m(1,oi,1,0,"ng-container",6),c()),t&2){let e=s(2),i=R(4);a("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Ge(18,ri))("target",e.item.target)("ngClass",g(19,jt,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),v("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("aria-hidden",!0)("title",e.item.title),l(),a("ngTemplateOutlet",i)("ngTemplateOutletContext",g(21,de,e.item))}}function si(t,o){if(t&1&&(Q(0),m(1,ni,2,14,"a",3)(2,ai,2,23,"a",4),K()),t&2){let e=s();l(),a("ngIf",!(e.item!=null&&e.item.routerLink)),l(),a("ngIf",e.item==null?null:e.item.routerLink)}}function li(t,o){}function pi(t,o){t&1&&m(0,li,0,0,"ng-template")}function ci(t,o){if(t&1&&(Q(0),m(1,pi,1,0,null,6),K()),t&2){let e=s();l(),a("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",g(2,de,e.item))}}function mi(t,o){if(t&1&&u(0,"span",12),t&2){let e=s(2);L(e.item.iconClass),a("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function di(t,o){if(t&1&&(p(0,"span",13),T(1),c()),t&2){let e=s(2);l(),ie(e.item.label)}}function ui(t,o){if(t&1&&(u(0,"span",14),N(1,"safeHtml")),t&2){let e=s(2);a("innerHTML",j(1,1,e.item.label),ge)}}function fi(t,o){if(t&1&&(p(0,"span",15),T(1),c()),t&2){let e=s(2);a("ngClass",e.item.badgeStyleClass),l(),ie(e.item.badge)}}function _i(t,o){if(t&1&&m(0,mi,1,4,"span",8)(1,di,2,1,"span",9)(2,ui,2,3,"ng-template",null,10,J)(4,fi,2,2,"span",11),t&2){let e=R(3),i=s();a("ngIf",i.item.icon),l(),a("ngIf",i.item.escape!==!1)("ngIfElse",e),l(3),a("ngIf",i.item.badge)}}var gi=["list"],hi=["container"];function bi(t,o){t&1&&S(0)}function vi(t,o){if(t&1&&(p(0,"div",8),m(1,bi,1,0,"ng-container",9),c()),t&2){let e=s(2);v("data-pc-section","start"),l(),a("ngTemplateOutlet",e.startTemplate)}}var Fe=t=>({"p-hidden":t});function Ci(t,o){if(t&1&&u(0,"li",13),t&2){let e=s().$implicit;a("ngClass",g(1,Fe,e.visible===!1))}}function yi(t,o){if(t&1&&(p(0,"span"),T(1),c()),t&2){let e=s(3).$implicit;l(),ie(e.label)}}function xi(t,o){if(t&1&&(u(0,"span",18),N(1,"safeHtml")),t&2){let e=s(3).$implicit;a("innerHTML",j(1,1,e.label),ge)}}function Ii(t,o){if(t&1&&(Q(0),m(1,yi,2,1,"span",16)(2,xi,2,3,"ng-template",null,17,J),K()),t&2){let e=R(3),i=s(2).$implicit;l(),a("ngIf",i.escape!==!1)("ngIfElse",e)}}function Ti(t,o){t&1&&S(0)}var ki=(t,o)=>({"p-hidden":t,flex:o});function wi(t,o){if(t&1&&(p(0,"li",14),m(1,Ii,4,2,"ng-container",6)(2,Ti,1,0,"ng-container",15),c()),t&2){let e=s(),i=e.$implicit,n=e.index,r=s(3);a("ngClass",q(7,ki,i.visible===!1,i.visible))("tooltipOptions",i.tooltipOptions),v("data-automationid",i.automationId)("id",r.menuitemId(i,r.id,n)),l(),a("ngIf",!r.submenuHeaderTemplate),l(),a("ngTemplateOutlet",r.submenuHeaderTemplate)("ngTemplateOutletContext",g(10,de,i))}}function Mi(t,o){if(t&1&&u(0,"li",13),t&2){let e=s().$implicit,i=s().$implicit;a("ngClass",g(1,Fe,e.visible===!1||i.visible===!1))}}var Bt=(t,o,e)=>({"p-hidden":t,"p-focus":o,"p-disabled":e});function Si(t,o){if(t&1){let e=P();p(0,"li",20),I("onMenuItemClick",function(n){C(e);let r=s(),f=r.$implicit,M=r.index,d=s().index,ue=s(3);return y(ue.itemClick(n,ue.menuitemId(f,ue.id,d,M)))}),c()}if(t&2){let e=s(),i=e.$implicit,n=e.index,r=s(),f=r.$implicit,M=r.index,d=s(3);L(i.styleClass),a("pMenuItemContent",i)("itemTemplate",d.itemTemplate)("ngClass",xe(13,Bt,i.visible===!1||f.visible===!1,d.focusedOptionId()&&d.menuitemId(i,d.id,M,n)===d.focusedOptionId(),d.disabled(i.disabled)))("ngStyle",i.style)("tooltipOptions",i.tooltipOptions),v("data-pc-section","menuitem")("aria-label",d.label(i.label))("data-p-focused",d.isItemFocused(d.menuitemId(i,d.id,M,n)))("data-p-disabled",d.disabled(i.disabled))("aria-disabled",d.disabled(i.disabled))("id",d.menuitemId(i,d.id,M,n))}}function Oi(t,o){if(t&1&&m(0,Mi,1,3,"li",11)(1,Si,1,17,"li",19),t&2){let e=o.$implicit;a("ngIf",e.separator),l(),a("ngIf",!e.separator)}}function Ei(t,o){if(t&1&&m(0,Ci,1,3,"li",11)(1,wi,3,12,"li",12)(2,Oi,2,2,"ng-template",10),t&2){let e=o.$implicit;a("ngIf",e.separator),l(),a("ngIf",!e.separator),l(),a("ngForOf",e.items)}}function Li(t,o){if(t&1&&m(0,Ei,3,3,"ng-template",10),t&2){let e=s(2);a("ngForOf",e.model)}}function Pi(t,o){if(t&1&&u(0,"li",13),t&2){let e=s().$implicit;a("ngClass",g(1,Fe,e.visible===!1))}}function Di(t,o){if(t&1){let e=P();p(0,"li",20),I("onMenuItemClick",function(n){C(e);let r=s(),f=r.$implicit,M=r.index,d=s(3);return y(d.itemClick(n,d.menuitemId(f,d.id,M)))}),c()}if(t&2){let e=s(),i=e.$implicit,n=e.index,r=s(3);L(i.styleClass),a("pMenuItemContent",i)("itemTemplate",r.itemTemplate)("ngClass",xe(13,Bt,i.visible===!1,r.focusedOptionId()&&r.menuitemId(i,r.id,n,r.j)===r.focusedOptionId(),r.disabled(i.disabled)))("ngStyle",i.style)("tooltipOptions",i.tooltipOptions),v("data-pc-section","menuitem")("aria-label",r.label(i.label))("data-p-focused",r.isItemFocused(r.menuitemId(i,r.id,n)))("data-p-disabled",r.disabled(i.disabled))("aria-disabled",r.disabled(i.disabled))("id",r.menuitemId(i,r.id,n))}}function Fi(t,o){if(t&1&&m(0,Pi,1,3,"li",11)(1,Di,1,17,"li",19),t&2){let e=o.$implicit;a("ngIf",e.separator),l(),a("ngIf",!e.separator)}}function Ai(t,o){if(t&1&&m(0,Fi,2,2,"ng-template",10),t&2){let e=s(2);a("ngForOf",e.model)}}function Vi(t,o){t&1&&S(0)}function Ri(t,o){if(t&1&&(p(0,"div",21),m(1,Vi,1,0,"ng-container",9),c()),t&2){let e=s(2);v("data-pc-section","end"),l(),a("ngTemplateOutlet",e.endTemplate)}}var Hi=t=>({"p-menu p-component":!0,"p-menu-overlay":t}),Ni=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),ji=t=>({value:"visible",params:t});function Bi(t,o){if(t&1){let e=P();p(0,"div",1,2),I("click",function(n){C(e);let r=s();return y(r.onOverlayClick(n))})("@overlayAnimation.start",function(n){C(e);let r=s();return y(r.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){C(e);let r=s();return y(r.onOverlayAnimationEnd(n))}),m(2,vi,2,2,"div",3),p(3,"ul",4,5),I("focus",function(n){C(e);let r=s();return y(r.onListFocus(n))})("blur",function(n){C(e);let r=s();return y(r.onListBlur(n))})("keydown",function(n){C(e);let r=s();return y(r.onListKeyDown(n))}),m(5,Li,1,1,null,6)(6,Ai,1,1,null,6),c(),m(7,Ri,2,2,"div",7),c()}if(t&2){let e=s();L(e.styleClass),a("ngClass",g(18,Hi,e.popup))("ngStyle",e.style)("@overlayAnimation",g(23,ji,q(20,Ni,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),v("data-pc-name","menu")("id",e.id),l(2),a("ngIf",e.startTemplate),l(),v("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),l(2),a("ngIf",e.hasSubMenu()),l(),a("ngIf",!e.hasSubMenu()),l(),a("ngIf",e.endTemplate)}}var zt=(()=>{class t{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!Y(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||t)(b(_e,16),b(ot,16))};static \u0275pipe=ze({name:"safeHtml",type:t,pure:!0})}return t})(),zi=(()=>{class t{item;itemTemplate;onMenuItemClick=new V;menu;constructor(e){this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}static \u0275fac=function(i){return new(i||t)(b(je(()=>Ae)))};static \u0275cmp=x({type:t,selectors:[["","pMenuItemContent",""]],hostAttrs:[1,"p-element"],inputs:{item:["pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:ti,decls:5,vars:3,consts:[[1,"p-menuitem-content",3,"click"],[4,"ngIf"],["itemContent",""],["class","p-menuitem-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menuitem-link-active","class","p-menuitem-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menuitem-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menuitem-link-active","pRipple","",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menuitem-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"]],template:function(i,n){i&1&&(p(0,"div",0),I("click",function(f){return n.onItemClick(f,n.item)}),m(1,si,3,2,"ng-container",1)(2,ci,2,4,"ng-container",1)(3,_i,5,4,"ng-template",null,2,J),c()),i&2&&(v("data-pc-section","content"),l(),a("ngIf",!n.itemTemplate),l(),a("ngIf",n.itemTemplate))},dependencies:[W,we,Se,Me,ae,ct,ht,zt],encapsulation:2})}return t})(),Ae=(()=>{class t{document;platformId;el;renderer;cd;config;overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new V;onHide=new V;onBlur=new V;onFocus=new V;listViewChild;containerViewChild;templates;startTemplate;endTemplate;itemTemplate;submenuHeaderTemplate;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=Ue(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=ve(-1);selectedOptionIndex=ve(-1);focused=!1;overlayVisible=!1;relativeAlign;constructor(e,i,n,r,f,M,d){this.document=e,this.platformId=i,this.el=n,this.renderer=r,this.cd=f,this.config=M,this.overlayService=d,this.id=this.id||dt()}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){this.popup||this.bindDocumentClickListener()}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this.startTemplate=e.template;break;case"end":this.endTemplate=e.template;break;case"itemTemplate":this.itemTemplate=e.template;break;case"submenuheader":this.submenuHeaderTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),h.focus(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&se.clear(e.element);break}}alignOverlay(){this.relativeAlign?h.relativePosition(this.container,this.target):h.absolutePosition(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):h.appendChild(this.container,this.appendTo))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&se.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!h.isTouchDevice()&&this.hide()}menuitemId(e,i,n,r){return e?.id??`${i}_${n}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(h.focus(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)h.focus(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(h.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=h.findSingle(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=i&&h.findSingle(i,"a");this.popup&&h.focus(this.target),n?n.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[...h.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...h.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let i=h.find(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(i.length>0){let n=e>=i.length?i.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(i[n].getAttribute("id"))}}itemClick(e,i){let{originalEvent:n,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){n.preventDefault();return}!r.url&&!r.routerLink&&n.preventDefault(),r.command&&r.command({originalEvent:n,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&Y(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let n=this.containerViewChild.nativeElement&&!this.containerViewChild.nativeElement.contains(i.target),r=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&n&&r&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&n&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&Y(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&Y(this.platformId)&&(this.scrollHandler=new _t(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&se.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}static \u0275fac=function(i){return new(i||t)(b(ke),b(_e),b(he),b(be),b(Ce),b(ft),b(ut))};static \u0275cmp=x({type:t,selectors:[["p-menu"]],contentQueries:function(i,n,r){if(i&1&&ne(r,Le,4),i&2){let f;O(f=E())&&(n.templates=f)}},viewQuery:function(i,n){if(i&1&&(G(gi,5),G(hi,5)),i&2){let r;O(r=E())&&(n.listViewChild=r.first),O(r=E())&&(n.containerViewChild=r.first)}},hostAttrs:[1,"p-element"],inputs:{model:"model",popup:["popup","popup",Ie],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:["autoZIndex","autoZIndex",Ie],baseZIndex:["baseZIndex","baseZIndex",Te],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:["tabindex","tabindex",Te]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[te],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],["container",""],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],["list",""],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",3,"ngClass",4,"ngIf"],["class","p-submenu-header","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator",3,"ngClass"],["pTooltip","","role","none",1,"p-submenu-header",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],["htmlSubmenuLabel",""],[3,"innerHTML"],["class","p-menuitem","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions","onMenuItemClick"],[1,"p-menu-end"]],template:function(i,n){i&1&&m(0,Bi,8,25,"div",0),i&2&&a("ngIf",!n.popup||n.visible)},dependencies:[W,We,we,Se,Me,Mt,zi,zt],styles:[`@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}
`],encapsulation:2,data:{animation:[Oe("overlayAnimation",[oe(":enter",[z({opacity:0,transform:"scaleY(0.8)"}),B("{{showTransitionParams}}")]),oe(":leave",[B("{{hideTransitionParams}}",z({opacity:0}))])])]},changeDetection:0})}return t})(),$t=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[k,D,pe,De,$,D,De,$]})}return t})();var Ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[k]})}return t})();var Zi=["menu"],Qi=(t,o)=>o.id,Ki=t=>({"active-link":t});function qi(t,o){if(t&1&&(p(0,"div",9),u(1,"p-button",10),c()),t&2){let e=o.$implicit,i=s();l(),a("text",!0)("label",e.label)("icon",e.icon)("routerLink",e.link)("ngClass",g(5,Ki,i.isRouteActive(e.link)))}}function Gi(t,o){if(t&1){let e=P();p(0,"p-avatar",11),I("click",function(n){C(e);let r=s();return y(r.openMenu(n))}),c(),p(1,"span"),T(2),c()}t&2&&(a("image",o.photo),l(2),Ke(" ",o.name," "))}function Ji(t,o){t&1&&u(0,"p-progressSpinner",12)}function Wi(t,o){t&1&&(p(0,"event-trackr-top-bar",6),u(1,"router-outlet"),c()),t&2&&a("title",o)}function Yi(t,o){t&1&&u(0,"router-outlet")}var Zt=(()=>{let o=class o{constructor(){this.router=_(w),this.activatedRoute=_(pt),this.authService=_(X),this.sidebarItems=[{id:1,label:"Inicio",icon:"pi pi-fw pi-home",link:"/layout/home"},{id:2,label:"Eventos",icon:"pi pi-fw pi-calendar",link:"/layout/event_summary"},{id:3,label:"Categorias",icon:"pi pi-fw pi-tag",link:"/layout/categories"},{id:4,label:"Usuarios",icon:"pi pi-fw pi-users",link:"/layout/users"},{id:4,label:"B\xF3veda",icon:"pi pi-fw pi-lock",link:"/layout/vault"}],this.menuItems=[{label:"Perfil",icon:"pi pi-fw pi-user",command:()=>{this.user$.pipe(He(1)).subscribe(i=>{this.router.navigate([`/layout/user-profile/${i.id}`])})}},{label:"Configuracion",icon:"pi pi-fw pi-cog",command:()=>{this.router.navigate(["/settings"])}},{label:"Cerrar Sesion",icon:"pi pi-fw pi-sign-out",command:()=>{this.authService.logout(),this.router.navigate(["/login"])}}]}ngOnInit(){this.pageTitle$=this.getCurrentTitle(),this.user$=this.authService.getUser().pipe(Z(i=>i.result))}isRouteActive(i){let n={paths:"exact",queryParams:"exact",fragment:"ignored",matrixParams:"ignored"};return this.router.isActive(i,n)}getCurrentTitle(){return this.router.events.pipe(Re(i=>i instanceof lt),Ne(this.router),Z(()=>{let i=this.activatedRoute;for(;i.firstChild;)i=i.firstChild;return i.snapshot.data.title??"None"}))}openMenu(i){this.menu&&this.menu.toggle(i)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=x({type:o,selectors:[["event-trackr-layout"]],viewQuery:function(n,r){if(n&1&&G(Zi,5),n&2){let f;O(f=E())&&(r.menu=f.first)}},standalone:!0,features:[H],decls:17,vars:8,consts:[[1,"layout-container","flex","overflow-x-auto"],["rel","preconnect","href","https://avatar.iran.liara.run"],[1,"sidebar"],[1,"sidebar-items"],[1,"sidebar-footer"],[1,"layout-content","w-full"],[3,"title"],[3,"model","popup"],["menu",""],[1,"sidebar-item"],[3,"text","label","icon","routerLink","ngClass"],["size","large",3,"image","click"],["ariaLabel","loading"],["class","sidebar-item"]],template:function(n,r){if(n&1&&(p(0,"div",0)(1,"head"),u(2,"link",1),c(),p(3,"div",2)(4,"div",3),Ze(5,qi,2,7,"div",13,Qi),c(),p(7,"div",4),m(8,Gi,3,2),N(9,"async"),m(10,Ji,1,0),c()(),p(11,"div",5),m(12,Wi,2,1,"event-trackr-top-bar",6),N(13,"async"),m(14,Yi,1,0),c(),u(15,"p-menu",7,8),c()),n&2){let f;l(5),Qe(r.sidebarItems),l(3),ye(8,(f=j(9,4,r.user$))?8:10,f),l(4),ye(12,(f=j(13,6,r.pageTitle$))?12:14,f),l(3),a("model",r.menuItems)("popup",!0)}},dependencies:[k,W,Ye,Ht,ae,me,ce,Ft,Dt,$t,Ae,re,At,Rt,Vt,Ut],styles:["[_nghost-%COMP%]     .p-menu{margin-bottom:32px}.layout-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{display:flex}.layout-container[_ngcontent-%COMP%]   .layout-content[_ngcontent-%COMP%]{box-shadow:#63636333 0 2px 8px;max-height:calc(100vh - 60px);padding:16px;box-sizing:border-box;margin:16px;border-radius:15px;background:white}.layout-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{margin:16px;padding:16px;border-radius:15px;max-width:240px;width:100%;display:flex;flex-direction:column;justify-content:space-between;box-shadow:#63636333 0 2px 8px;color:#fff;background:white}.layout-container[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{padding:8px;display:flex;align-items:center;gap:8px}.layout-container[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-weight:600}.layout-container[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]     .p-avatar:hover{cursor:pointer}.layout-container[_ngcontent-%COMP%]   .sidebar-items[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]{color:#000}.layout-container[_ngcontent-%COMP%]   .sidebar-items[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]     p-button.active-link .p-button{background-color:#3d5a80;color:#fff}.layout-container[_ngcontent-%COMP%]   .sidebar-items[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]     p-button .p-button{width:100%;display:flex;color:#000}"]});let t=o;return t})();var Qt=(()=>{let o=class o{constructor(){this.title="Event Trackr"}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=x({type:o,selectors:[["event-trackr-root"]],standalone:!0,features:[H],decls:2,vars:0,template:function(n,r){n&1&&u(0,"router-outlet")(1,"p-toast")},dependencies:[D,re,Pt,Lt]});let t=o;return t})();var Kt=()=>{let t=_(w);return Xi()?!0:(t.navigate(["/login"]),!1)};function Xi(){return JSON.parse(sessionStorage.getItem("user")??"{}").token}var qt=(()=>{let o=class o{constructor(i){this.formBuilder=i,this.authenticationService=_(X),this.router=_(w)}ngOnInit(){this.initForm()}initForm(){this.loginForm=this.formBuilder.group({username:["sysadmin",Pe.required],password:["admin123",Pe.required]})}login(){this.authenticationService.login(this.loginForm.value).subscribe(({status:i,result:n})=>{i&&(sessionStorage.setItem("user",JSON.stringify(n)),this.router.navigate(["layout/home"]))})}};o.\u0275fac=function(n){return new(n||o)(b(Tt))},o.\u0275cmp=x({type:o,selectors:[["event-trackr-login"]],standalone:!0,features:[qe([X]),H],decls:19,vars:2,consts:[[1,"login-container"],[1,"login"],[1,"logo"],[1,"icon"],[1,"fa","fa-calendar"],[1,"text"],[1,"login-form",3,"formGroup"],[1,"p-float-label"],["pInputText","","id","username","formControlName","username"],["for","username"],["pInputText","","type","password","formControlName","password","id","password"],["for","password"],[1,"button"],["label","Iniciar Sesion",3,"disabled","click"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),u(4,"i",4),c(),p(5,"div",5)(6,"span"),T(7,"Andonie's ERP"),c()()(),p(8,"form",6)(9,"span",7),u(10,"input",8),p(11,"label",9),T(12,"Username"),c()(),p(13,"span",7),u(14,"input",10),p(15,"label",11),T(16,"Contrase\xF1a"),c()(),p(17,"div",12)(18,"p-button",13),I("click",function(){return r.login()}),c()()()()()),n&2&&(l(8),a("formGroup",r.loginForm),l(10),a("disabled",r.loginForm.invalid))},dependencies:[k,wt,yt,bt,vt,Ct,xt,It,Et,Ot,kt,me,ce,D],styles:[".login-container[_ngcontent-%COMP%]{background:rgb(2,0,36);background:linear-gradient(90deg,rgb(2,0,36) 0%,rgb(9,9,121) 0%,rgb(0,212,255) 100%);display:flex;justify-content:center;align-items:center;height:100vh}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{padding:48px;background:white;border-radius:12px}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:8px;align-items:center;margin-bottom:32px}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#224870}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border:4px solid #224870;padding:16px;border-radius:50%;font-size:32px;color:#224870}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:32px}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;justify-content:center}"]});let t=o;return t})();var Gt=[{path:"login",component:qt},{path:"layout",component:Zt,canActivate:[Kt],children:[{path:"home",data:{title:"Dashboard"},loadComponent:()=>import("./chunk-MFW7NBNJ.mjs").then(t=>t.HomeComponent)},{path:"event_summary",data:{title:"Resumen de Eventos"},loadComponent:()=>import("./chunk-JT3XM6AM.mjs").then(t=>t.EventSummaryComponent)},{path:"categories",data:{title:"Categorias"},loadComponent:()=>import("./chunk-5SLAVIK6.mjs").then(t=>t.CategoriesComponent)},{path:"events",data:{title:"Eventos"},loadComponent:()=>import("./chunk-W35EO2QE.mjs").then(t=>t.EventsComponent)},{path:"user-profile",loadComponent:()=>import("./chunk-H7XEJQNM.mjs").then(t=>t.UserProfileComponent)},{path:"user-profile/new",data:{title:"Usuario / Agregar Nuevo Usuario"},loadComponent:()=>import("./chunk-H7XEJQNM.mjs").then(t=>t.UserProfileComponent)},{path:"user-profile/edit/:id",data:{title:"Usuario / Editar"},loadComponent:()=>import("./chunk-H7XEJQNM.mjs").then(t=>t.UserProfileComponent)},{path:"user-profile/:id",data:{title:"Usuario / Perfil"},loadComponent:()=>import("./chunk-H7XEJQNM.mjs").then(t=>t.UserProfileComponent)},{path:"users",data:{title:"Usuarios"},loadComponent:()=>import("./chunk-NYJWRVN6.mjs").then(t=>t.UsersComponent)},{path:"vault",data:{title:"B\xF3veda"},loadComponent:()=>import("./chunk-4XBI33SS.mjs").then(t=>t.VaultComponent)}]},{path:"**",redirectTo:"login"}];var Jt=(t,o)=>{let e=_(w),i=JSON.parse(sessionStorage.getItem("user")??"{}"),{token:n}=i;return n&&(t=t.clone({setHeaders:{Authorization:`Bearer ${n}`}})),o(t).pipe(ee(({error:r})=>{throw r.statusCode===401&&(sessionStorage.removeItem("user"),e.navigate(["/login"])),r}))};var Wt=(t,o)=>{let e=_(le),i=_(w);return o(t).pipe(ee(({error:n})=>{throw e.add({severity:"error",summary:"Error",detail:n.message??"An error occurred"}),n.statusCode===401&&i.navigate(["/login"]),n}))};var Yt={providers:[le,rt(),mt(Gt),et(it(),tt([Jt,Wt])),at()]};var en={providers:[st()]},Xt=Je(Yt,en);var tn=()=>nt(Qt,Xt),_r=tn;export{_r as a};
