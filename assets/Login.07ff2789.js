import{u as e,E as a,o as s,b as r,e as o,f as t,w as l,G as d,r as m,a8 as n,p as u,i as p,h as i}from"./vendor.6679d492.js";import{_ as c,u as f}from"./index.d28fca02.js";import{s as g}from"./request.2d0c7259.js";const b={setup(){const s=e(),r=a({username:"admin",password:"123456"});return f().clearTags(),{form:r,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},submitForm:()=>{var e;(e=r,g({url:"/api/user/login",method:"post",data:e})).then((e=>{var a;2e3===e.code?(d.success("登录成功"),localStorage.setItem("ms_username",r.username),localStorage.setItem("token",e.data.token),(a=e.data.token,g({url:"/api/user/info",method:"get",params:{token:a}})).then((e=>{localStorage.setItem("ms_avatar",e.data.avatar)})),s.push("/")):d.error("登录失败")}))}}}},v=e=>(u("data-v-6c9b9bde"),e=e(),p(),e),_={class:"login-wrap"},w={class:"ms-login"},h=v((()=>o("div",{class:"ms-title"},"后台管理系统",-1))),k={class:"login-btn"},V=i("登录"),y=v((()=>o("p",{class:"login-tips"},"Tips : 用户名和密码随便填。",-1)));var I=c(b,[["render",function(e,a,d,u,p,i){const c=m("el-button"),f=m("el-input"),g=m("el-form-item"),b=m("el-form");return s(),r("div",_,[o("div",w,[h,t(b,{model:u.form,rules:u.rules,ref:"login","label-width":"0px",class:"ms-content"},{default:l((()=>[t(g,{prop:"username"},{default:l((()=>[t(f,{modelValue:u.form.username,"onUpdate:modelValue":a[0]||(a[0]=e=>u.form.username=e),placeholder:"username"},{prepend:l((()=>[t(c,{icon:"el-icon-user"})])),_:1},8,["modelValue"])])),_:1}),t(g,{prop:"password"},{default:l((()=>[t(f,{type:"password",placeholder:"password",modelValue:u.form.password,"onUpdate:modelValue":a[1]||(a[1]=e=>u.form.password=e),onKeyup:a[2]||(a[2]=n((e=>u.submitForm()),["enter"]))},{prepend:l((()=>[t(c,{icon:"el-icon-lock"})])),_:1},8,["modelValue"])])),_:1}),o("div",k,[t(c,{type:"primary",onClick:a[3]||(a[3]=e=>u.submitForm())},{default:l((()=>[V])),_:1})]),y])),_:1},8,["model","rules"])])])}],["__scopeId","data-v-6c9b9bde"]]);export{I as default};
