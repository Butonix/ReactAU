webpackJsonp([12],{1286:function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{errorMessage:e.auth.error}}t.__esModule=!0;var d=r(43),u=r(1),c=n(u),m=r(290),p=r(170),f=a(p),b=r(481),w=(n(b),r(287),r(480)),h=r(289);r(484);var E=c.default.createElement("strong",null,"Oops!"),v=c.default.createElement("div",{className:"panel-heading"},c.default.createElement("h3",{className:"panel-title"},"Sign Up")),y=c.default.createElement("div",{className:"col-lg-12"},c.default.createElement(m.Field,{name:"email",component:h.renderField,type:"email",label:"E-Mail"}),c.default.createElement(m.Field,{name:"password",component:h.renderField,type:"password",label:"Password"}),c.default.createElement(m.Field,{name:"passwordConfirm",component:h.renderField,type:"password",label:"Confirm Password"})),g=c.default.createElement("hr",null),N=function(e){function t(r){l(this,t);var a=s(this,e.call(this,r));return a.handleFormSubmit=a.handleFormSubmit.bind(a),a.renderAlert=a.renderAlert.bind(a),a}return o(t,e),t.prototype.handleFormSubmit=function(e){var t=e.email,r=e.password;this.props.userSignup({email:t,password:r})},t.prototype.renderAlert=function(){if(this.props.errorMessage)return c.default.createElement("div",{className:"alert alert-danger"},E," ",this.props.errorMessage," !!")},t.prototype.render=function(){var e=this.props,t=e.handleSubmit,r=e.pristine,a=e.submitting;return c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-lg-12 "},c.default.createElement(w.Breadcrumb,{linkPair:[{link:"user",desc:"User"},{link:"signup",desc:"Sign Up"}]}),c.default.createElement("div",{className:"well"},c.default.createElement("div",{className:"panel sign-up-panel"},v,c.default.createElement("div",{className:"panel-body sign-up"},c.default.createElement("form",{onSubmit:t(this.handleFormSubmit)},y,c.default.createElement("div",{className:"col-lg-12"},this.renderAlert(),g,c.default.createElement("div",null,c.default.createElement("button",{type:"submit",disabled:r||a,className:"btn btn-warning submit-btn"},"Submit"))))))))))},t}(c.default.Component),F=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Please enter a password"),e.passwordConfirm||(t.passwordConfirm="Please enter a password confirmation"),e.password!==e.passwordConfirm&&(t.password="Passwords must match"),t};t.default=d.connect.apply(void 0,[i].concat(f))((0,m.reduxForm)({form:"signup",validate:F})(N))}});