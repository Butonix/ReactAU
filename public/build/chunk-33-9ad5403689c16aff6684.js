webpackJsonp([33],{288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"CustomDel",function(){return u}),n.d(t,"CustomNumberInputTd",function(){return c}),n.d(t,"CustomTextInputTd",function(){return d});var r=n(0),o=n.n(r),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var u in a)void 0===n[u]&&(n[u]=a[u]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(e){return i("td",{className:"td-delete-item"},void 0,i("i",{className:"fa fa-close icon-item delete-item delete-item-rigth","data-id":e.rowData.id,onClick:e.delItem}))},l=function(e){return i("input",{className:"form-control",type:e.type,value:e.tdData,"data-id":e.rowData.id,name:e.field,onChange:e.setInput})},d=function(e){return i("td",{},void 0,o.a.createElement(l,a({type:"text"},e)))},c=function(e){return i("td",{},void 0,o.a.createElement(l,a({type:"number"},e)))}}});