import './polyfills.server.mjs';
import{a as B}from"./chunk-VN2OXVDN.mjs";import{a as F,b as N}from"./chunk-3CRV4T3W.mjs";import"./chunk-R2GVGLSG.mjs";import{l as I}from"./chunk-665N2ZQQ.mjs";import{a as V,h as z}from"./chunk-64NJVOHV.mjs";import"./chunk-7XBRTCRF.mjs";import{X as j,Y as A,e as h,i as O,n as $}from"./chunk-5ODIOBJY.mjs";import{Ab as T,Cc as w,Dc as D,H as C,Jb as k,Kb as P,La as c,Q as p,S,Wa as u,X as x,Y as v,ab as y,eb as t,fb as i,gb as b,kb as U,m as g,mb as f,nb as _,sb as n,tb as d,wb as E,zb as M}from"./chunk-4KNUNF7F.mjs";import"./chunk-KRLCULJA.mjs";function q(o,r){o&1&&(t(0,"tr")(1,"th"),n(2,"ID"),i(),t(3,"th"),n(4,"Nombre de Usuario"),i(),t(5,"th"),n(6,"Nombre"),i(),t(7,"th"),n(8,"Email"),i(),t(9,"th"),n(10,"Acciones"),i()())}function G(o,r){if(o&1){let a=U();t(0,"tr")(1,"td"),n(2),i(),t(3,"td"),n(4),i(),t(5,"td"),n(6),i(),t(7,"td"),n(8),i(),t(9,"td",5)(10,"p-button",6),f("click",function(){let m=x(a).$implicit,l=_();return v(l.editUser(m))}),i(),t(11,"p-button",7),f("click",function(s){let l=x(a).$implicit,R=_();return v(R.deleteUser(l,s))}),i()()()}if(o&2){let a=r.$implicit,e=_();c(2),d(a.id),c(2),d(a.username),c(2),d(a.name),c(2),d(a.email),c(2),u("rounded",!0)("size","small"),c(),u("rounded",!0)("size","small")("disabled",!e.canDelete(a.id))}}var H=()=>[],le=(()=>{let r=class r{constructor(){this.usersService=p(B),this.messageService=p(O),this.confirmationService=p(h),this.router=p(I)}ngOnInit(){this.users$=this.usersService.getAllUsers().pipe(g(e=>e.result??[]))}deleteUser({id:e},s){this.canDelete(e)&&this.confirmationService.confirm({target:s.target,message:"\xBFEstas seguro de eliminar este usuario?",header:"Confirmaci\xF3n",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.usersService.deleteUser(e).subscribe(()=>{this.users$=this.usersService.getAllUsers().pipe(g(m=>m.result??[],C(()=>{this.messageService.add({severity:"success",summary:"Exito",detail:"Usuario eliminado correctamente"})})))})}})}editUser(e){this.router.navigate(["/layout/user-profile/edit",e.id])}addUser(){this.router.navigate(["/layout/user-profile/new"])}canDelete(e){return e!==this.usersService.getCurrentUser().id}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=S({type:r,selectors:[["event-trackr-users"]],standalone:!0,features:[E([h]),M],decls:8,vars:4,consts:[[1,"users"],["label","Agregar Usuario","icon","pi pi-user-plus","iconPos","right","severity","success",3,"click"],[3,"value"],["pTemplate","header"],["pTemplate","body"],[1,"actions"],["type","button","icon","pi pi-pencil","severity","warning",3,"rounded","size","click"],["type","button","icon","pi pi-trash","severity","danger",3,"rounded","size","disabled","click"]],template:function(s,m){if(s&1&&(t(0,"div",0)(1,"header")(2,"p-button",1),f("click",function(){return m.addUser()}),i()(),t(3,"p-table",2),k(4,"async"),y(5,q,11,0,"ng-template",3)(6,G,12,9,"ng-template",4),i()(),b(7,"p-confirmDialog")),s&2){let l;c(3),u("value",(l=P(4,1,m.users$))!==null&&l!==void 0?l:T(3,H))}},dependencies:[D,w,z,V,$,A,j,N,F],styles:[".users[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{margin-bottom:16px;display:flex;justify-content:flex-end;width:100%}.users[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.6rem 1rem}.users[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:8px}"]});let o=r;return o})();export{le as UsersComponent};
