import './polyfills.server.mjs';
import{a as n}from"./chunk-CLW6SS2F.mjs";import{K as i,Nc as s,Q as o}from"./chunk-4KNUNF7F.mjs";var m=(()=>{let t=class t{constructor(){this.baseUrl=n.api,this.httpClient=o(s)}getCategories(){return this.httpClient.get(`${this.baseUrl}/categories`)}postCategory(r){return this.httpClient.post(`${this.baseUrl}/categories`,{category:r})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=i({token:t,factory:t.\u0275fac});let e=t;return e})();export{m as a};