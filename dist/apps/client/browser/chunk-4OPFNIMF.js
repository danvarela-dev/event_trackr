import{L as s,R as i,sd as u,xc as n}from"./chunk-ZWOARNYT.js";var m=(()=>{let e=class e{constructor(){this.httpClient=i(n),this.base_url=u.api}getAllUsers(){return this.httpClient.get(`${this.base_url}/users`)}getUserById(t){return this.httpClient.get(`${this.base_url}/users/${t}`)}createUser(t){return this.httpClient.post(`${this.base_url}/users`,t)}updateUser(t){return this.httpClient.put(`${this.base_url}/users/${t.id}`,t)}deleteUser(t){return this.httpClient.delete(`${this.base_url}/users/${t}`)}getCurrentUser(){return JSON.parse(sessionStorage.getItem("user")??"{}")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{m as a};
