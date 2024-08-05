import{b as oe}from"./chunk-OY2HRPSV.js";import{a as te,b as ie}from"./chunk-5V6OMVKL.js";import{a as me}from"./chunk-G6IPV4D3.js";import{a as se,b as le}from"./chunk-I6T37VOC.js";import{a as re,b as ae}from"./chunk-CACMP4GB.js";import{a as ne}from"./chunk-UEJ6JU3M.js";import{f as q}from"./chunk-35J2SEUS.js";import{Dc as A,Ec as d,Fd as K,Gb as O,Gc as G,Hb as L,Hc as D,J as I,Ja as l,Jc as $,Kc as B,Kd as X,Lc as R,Mc as V,Md as Z,N as w,Nd as ee,Oc as j,S as g,Ta as f,U as h,V as P,Wa as x,Xc as H,Z as C,Za as m,_ as v,_a as c,a as S,bb as i,cb as t,db as u,dd as z,ed as Q,hb as b,jb as y,kb as _,md as W,nd as Y,oc as k,p as M,pb as a,pc as U,pd as J,vc as N,wb as F,xb as E}from"./chunk-3EK5NAFT.js";var ce=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=w({imports:[U,W,X,ie,ne,te,K]})}return e})();var pe=e=>e.value.password===e.value.confirmPassword?null:{PasswordNoMatch:!0};function fe(e,r){e&1&&(i(0,"div",4)(1,"div",5),u(2,"img",6),t()()),e&2&&(l(2),f("ngSrc",r.photo))}function _e(e,r){e&1&&(i(0,"span",27),a(1,"El nombre es requerido"),t())}function ge(e,r){e&1&&(i(0,"span",27),a(1,"El nombre debe tener al menos 3 caracteres"),t())}function he(e,r){e&1&&(i(0,"span",27),a(1,"El nombre de usuario es requerido"),t())}function Ce(e,r){e&1&&(i(0,"span",27),a(1,"El nombre de usuario debe tener al menos 8 caracteres"),t())}function ve(e,r){e&1&&(i(0,"span",27),a(1,"El correo electronico es requerido"),t())}function xe(e,r){e&1&&(i(0,"span",27),a(1,"El email no es v\xE1lido"),t())}function be(e,r){e&1&&(i(0,"span",27),a(1,"La contrase\xF1a es requerida."),t())}function ye(e,r){e&1&&(i(0,"span",27),a(1,"La contrase\xF1a debe tener al menos 8 caracteres"),t())}function Ee(e,r){e&1&&(i(0,"span",27),a(1," Las contrase\xF1as no coinciden. "),t())}function Te(e,r){if(e&1&&(i(0,"div",9)(1,"p-floatLabel"),u(2,"input",28),i(3,"label",29),a(4,"Contrase\xF1a"),t()(),m(5,be,2,0,"span",12)(6,ye,2,0)(7,Ee,2,0),t()),e&2){let o=_(2);l(5),c(5,o.getFieldError("password","required")?5:o.getFieldError("password","minlength")?6:o.getFieldError("password","compareFields")?7:-1)}}function Se(e,r){e&1&&(i(0,"span",27),a(1,"El telefono es requerido"),t())}function Me(e,r){e&1&&(i(0,"span",27),a(1,"El genero es requerido"),t())}function Ie(e,r){e&1&&(i(0,"span",27),a(1,"El nombre es requerido"),t())}function we(e,r){e&1&&(i(0,"span",27),a(1,"Las contrase\xF1as no coinciden."),t())}function Pe(e,r){if(e&1&&(i(0,"div",9)(1,"p-floatLabel"),u(2,"input",30),i(3,"label",29),a(4,"Confirmar Contrase\xF1a"),t()(),m(5,we,2,0,"span",12),t()),e&2){let o=_(2);l(5),c(5,o.formGroup.errors!=null&&o.formGroup.errors.PasswordNoMatch?5:-1)}}function Fe(e,r){if(e&1){let o=b();i(0,"button",31),y("click",function(){C(o);let s=_(2);return v(s.saveUser())}),t()}if(e&2){let o=_(2);f("label",o.getLabel())("disabled",o.formGroup.invalid)}}var de=()=>({width:"221px"});function Oe(e,r){if(e&1&&(i(0,"form",7)(1,"div",8)(2,"div",9)(3,"p-floatLabel"),u(4,"input",10),i(5,"label",11),a(6,"Nombre Completo"),t()(),m(7,_e,2,0,"span",12)(8,ge,2,0),t(),i(9,"div",9)(10,"p-floatLabel"),u(11,"input",13),i(12,"label",14),a(13,"Nombre de Usuario"),t()(),m(14,he,2,0,"span",12)(15,Ce,2,0),t(),i(16,"div",9)(17,"p-floatLabel"),u(18,"input",15),i(19,"label",16),a(20,"Email"),t()(),m(21,ve,2,0,"span",12)(22,xe,2,0),t(),m(23,Te,8,1,"div",17),t(),i(24,"div",18)(25,"div",9)(26,"p-floatLabel"),u(27,"input",19),i(28,"label",20),a(29,"Tel\xE9fono"),t()(),m(30,Se,2,0,"span",12),t(),i(31,"div",9)(32,"p-floatLabel")(33,"p-dropdown",21),a(34," >"),t(),i(35,"label",22),a(36,"Sexo"),t()(),m(37,Me,2,0,"span",12),t(),i(38,"div",9)(39,"p-floatLabel")(40,"p-dropdown",23),a(41," >"),t(),i(42,"label",24),a(43,"Rol"),t()(),m(44,Ie,2,0,"span",12),t(),m(45,Pe,6,1,"div",17),t()(),i(46,"div",25),m(47,Fe,1,2,"button",26),t()),e&2){let o=_();f("formGroup",o.formGroup),l(7),c(7,o.getFieldError("name","required")?7:o.getFieldError("name","minlength")?8:-1),l(7),c(14,o.getFieldError("username","required")?14:o.getFieldError("name","minlength")?15:-1),l(7),c(21,o.getFieldError("email","required")?21:o.getFieldError("email","email")?22:-1),l(2),c(23,o.mode==="add"?23:-1),l(7),c(30,o.getFieldError("telephone","required")?30:-1),l(3),x(E(16,de)),f("options",o.genders),l(4),c(37,o.getFieldError("gender","required")?37:-1),l(3),x(E(17,de)),f("options",o.roles),l(4),c(44,o.getFieldError("role","required")?44:-1),l(),c(45,o.mode==="add"?45:-1),l(2),c(47,o.mode==="edit"||o.mode==="add"?47:-1)}}function Le(e,r){e&1&&u(0,"p-progressSpinner",32)}var Lt=(()=>{let r=class r{constructor(){this.title="Perfil de Usuario",this.mode="view",this.messageService=g(H),this.roles=[{id:1,name:"SysAdmin"},{id:2,name:"Admin"},{id:3,name:"Empleado"}],this.genders=[{id:1,name:"Masculino"},{id:2,name:"Femenino"}],this.formBuilder=g(V),this.userService=g(me),this.route=g(q)}ngOnInit(){switch(this.mode=this.getActionType(),this.mode){case"add":this.buildForm();break;case"edit":this.loadUser(this.mode);break;case"view":this.loadUser(this.mode),this.formGroup.disable();break}}ngOnDestroy(){this.formGroup.reset()}loadUser(n="view"){let s=this.route.snapshot.paramMap.get("id");["view","edit"].includes(n)&&s&&(this.user$=this.userService.getUserById(+s).pipe(M(p=>p.result),I(p=>(this.buildForm(p),p))))}getActionType(){let n=this.route.snapshot.url;return n.some(s=>s.path==="new")?"add":n.some(s=>s.path==="edit"||s.path==="user-profile")?"edit":"view"}getIndexedArray(n){return n.reduce((s,p)=>(s[p.id]=p,s),[])}buildForm(n){this.formGroup=this.formBuilder.group({username:[n?n.username:"",[d.required,d.min(8)]],email:[n?n.email:"",[d.required,d.email]],gender:[n?this.getIndexedArray(this.genders)[n.gender.id]:"",[d.required]],name:[n?n.name:"",[d.required,d.minLength(3)]],role:[n?this.getIndexedArray(this.roles)[n.role.id]:"",[d.required]],telephone:[n?n.telephone:"",[d.required]]}),this.mode==="add"&&(this.formGroup.addControl("password",this.formBuilder.control("",[d.required,d.minLength(8)])),this.formGroup.addControl("confirmPassword",this.formBuilder.control("",[d.required])),this.formGroup.setValidators(pe))}saveUser(){let n=this.formGroup.value;this.mode==="add"&&this.userService.createUser(n).subscribe(s=>{this.messageService.add({severity:"success",summary:"Exito",detail:`El usuario ${s.result.username} ha sido creado.`}),this.formGroup.reset()}),this.mode==="edit"&&(n=S({id:Number(this.route.snapshot.paramMap.get("id"))},n),this.userService.updateUser(n).subscribe(s=>{this.messageService.add({severity:"success",summary:"Exito",detail:`El usuario ${s.result.username} ha sido actualizado.`})}))}getLabel(){return this.mode==="add"?"Crear":"Actualizar"}getFieldError(n,s){let p=this.formGroup.get(n);return(p?.touched&&p?.hasError(s))??!1}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=h({type:r,selectors:[["event-trackr-user-profile"]],inputs:{user$:"user$"},standalone:!0,features:[F],decls:8,vars:4,consts:[[1,"user-profile"],["rel","preconnect","href","https://avatar.iran.liara.run"],["class","user-profile__header"],[1,"user-profile__body"],[1,"user-profile__header"],[1,"user-profile__header__avatar"],["priority","","width","200","height","200","placeholder","",3,"ngSrc"],[3,"formGroup"],[1,"user-profile__body__left"],[1,"field-wrap"],["id","name","pInputText","","formControlName","name"],["for","name"],["class","error"],["id","username","pInputText","","formControlName","username"],["for","username"],["id","email","pInputText","","formControlName","email"],["for","email"],["class","field-wrap"],[1,"user-profile__body__right"],["id","phone","pInputText","","formControlName","telephone"],["for","phone"],["inputId","gender","optionLabel","name","formControlName","gender","autoWidth","true",3,"options"],["for","gender"],["inputId","role","optionLabel","name","formControlName","role","autoWidth","true",3,"options"],["for","role"],[1,"user-profile__footer"],["pButton","","type","button",3,"label","disabled"],[1,"error"],["id","password","type","password","pInputText","","formControlName","password"],["for","password"],["id","confirmPassword","pInputText","","formControlName","confirmPassword","type","password"],["pButton","","type","button",3,"label","disabled","click"],["mode","indeterminate"]],template:function(s,p){if(s&1&&(i(0,"div",0)(1,"head"),u(2,"link",1),t(),m(3,fe,3,1,"div",2),O(4,"async"),i(5,"div",3),m(6,Oe,48,18)(7,Le,1,0),t()()),s&2){let T;l(3),c(3,(T=L(4,2,p.user$))?3:-1,T),l(3),c(6,p.formGroup?6:7)}},dependencies:[oe,j,$,A,G,D,B,R,Q,z,ee,Z,le,se,N,k,ae,re,J,Y,ce],styles:[".user-profile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.user-profile__header__avatar[_ngcontent-%COMP%]{margin-top:32px;display:flex;justify-content:center;align-items:center;gap:16px}.user-profile[_ngcontent-%COMP%]   .field-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-width:250px;height:55px}.user-profile[_ngcontent-%COMP%]   .field-wrap[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff4c4c;font-size:.8rem}.user-profile__body[_ngcontent-%COMP%]{margin-top:64px}.user-profile__body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;gap:32px}.user-profile__body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .p-dropdown{width:100%;min-width:150px}.user-profile__body__left[_ngcontent-%COMP%], .user-profile__body__right[_ngcontent-%COMP%]{display:flex;gap:32px;flex-direction:column;align-items:center;justify-content:center;width:100%}.user-profile__footer[_ngcontent-%COMP%]{margin-top:64px;display:flex;justify-content:center;gap:32px}"]});let e=r;return e})();export{Lt as UserProfileComponent};