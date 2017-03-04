webpackJsonp([17,18],{968:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=(a(18),a(0)),i=r(o),d=a(205),u=a(370),c=r(u),m=a(368),p=(r(m),a(203),a(367)),f=a(204),b=i.default.createElement("strong",null,"Oops!"),h=i.default.createElement("div",{className:"panel-heading"},i.default.createElement("h3",{className:"panel-title"},"Add User")),w=i.default.createElement("div",{className:"col-lg-6 "},i.default.createElement(d.Field,{name:"picture",component:f.renderDropzoneInput,label:"Add a picture"}),i.default.createElement(d.Field,{name:"username",component:f.renderField,type:"text",label:"User Name"})),E=i.default.createElement(d.Field,{name:"email",component:f.renderField,type:"email",label:"E-Mail",require:!0}),g=i.default.createElement(d.Field,{name:"password",component:f.renderField,type:"password",label:"Password",require:!0}),v=i.default.createElement(d.Field,{name:"passwordConfirm",component:f.renderField,type:"password",label:"Confirm Password",require:!0}),y=i.default.createElement("hr",null),F=function(e){function t(a){n(this,t);var r=s(this,e.call(this,a));return r.state={upload:0,errorMessage:"",success:!1},r.handleFormSubmit=r.handleFormSubmit.bind(r),r.renderAlert=r.renderAlert.bind(r),r.fileProgress=r.fileProgress.bind(r),r}return l(t,e),t.prototype.handleFormSubmit=function(e){var t=this,a=function(e){return t.fileProgress(e)},r=new FormData;r.append("password",e.password),r.append("email",e.email),r.append("username",e.username),r.append("accessRight",e.accessRight),e.picture&&r.append("upload_picture",e.picture[0]),this.setState({upload:1}),c.default.addUser(r,a).then(function(e){t.setState({upload:0,errorMessage:"",success:!0})}).catch(function(e){t.setState({upload:0,errorMessage:"Process Fail, Error Message: "+e.err,success:!1})})},t.prototype.fileProgress=function(e){var t=Math.round(100*e.loaded/e.total);this.setState({upload:t})},t.prototype.renderAlert=function(){if(this.state.errorMessage||this.state.success)return i.default.createElement("div",{className:"alert "+(this.state.success?"alert-success":"alert-danger")},this.state.success?"Success !!":i.default.createElement("div",null,b," ",this.state.errorMessage," !!"))},t.prototype.render=function(){var e=this.props,t=e.handleSubmit,a=e.pristine,r=e.submitting;return i.default.createElement("div",{className:"col-lg-12 "},i.default.createElement(p.Breadcrumb,{linkPair:[{link:"Home",desc:"Home"},{link:"/admin/productChange/0",desc:"Administration"},{link:"/admin/addUser",desc:"Add User"}]}),i.default.createElement("div",{className:"well"},i.default.createElement("div",{className:"panel panel-danger add-user-panel"},h,i.default.createElement("div",{className:"panel-body sign-up"},i.default.createElement("form",{onSubmit:t(this.handleFormSubmit)},w,i.default.createElement("div",{className:"col-lg-6 "},E,g,v,i.default.createElement(d.Field,{name:"accessRight",component:f.renderSelectField,label:"User Type",options:[{value:"0",text:"Normal User"},{value:"8",text:"Administrator"}]})),i.default.createElement("div",{className:"col-lg-12"},this.renderAlert(),y,i.default.createElement("div",null,i.default.createElement("button",{type:"submit",disabled:a||r,className:"btn btn-warning submit-btn"},"Submit"))))))))},t}(i.default.Component),S=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Please enter a password"),e.passwordConfirm||(t.passwordConfirm="Please enter a password confirmation"),e.password!==e.passwordConfirm&&(t.password="Passwords must match"),t};t.default=(0,d.reduxForm)({form:"adduser",validate:S})(F)}});