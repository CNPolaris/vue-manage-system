import{s as e}from"./request.2d0c7259.js";import{G as l,o as a,b as t,e as s,f as u,w as d,r as o,F as r,l as m,c as i,h as n}from"./vendor.6679d492.js";import{_ as p}from"./index.d28fca02.js";const c={name:"index",data:()=>({query:{page:1,limit:10,name:"",code:"",status:1},list:[],total:0,status:[{key:1,value:"正常"},{key:0,value:"无效"}]}),created(){this.getList()},methods:{getList(){var a;(a=this.query,e({url:"/api/role/list",methods:"get",params:{query:a}})).then((e=>{2e3===e.code&&(l.success("获取角色列表成功"),this.list=e.data.list,this.total=e.data.total)}))}}},f={class:"content"},y={class:"searchModule"},b=n("查询"),_=n("重置"),V={class:"buttonModule"},v=n("添加"),q=n("导出"),h={class:"tableModule"},g=n("详情"),k=n("编辑");var w=p(c,[["render",function(e,l,n,p,c,w){const x=o("el-input"),U=o("el-form-item"),z=o("el-option"),j=o("el-select"),M=o("el-button"),L=o("el-form"),F=o("el-table-column"),G=o("el-switch"),I=o("el-table");return a(),t("div",f,[s("div",y,[u(L,{model:c.query,inline:!0},{default:d((()=>[u(U,{label:"角色名称"},{default:d((()=>[u(x,{modelValue:c.query.name,"onUpdate:modelValue":l[0]||(l[0]=e=>c.query.name=e)},null,8,["modelValue"])])),_:1}),u(U,{label:"权限字符"},{default:d((()=>[u(x,{modelValue:c.query.code,"onUpdate:modelValue":l[1]||(l[1]=e=>c.query.code=e)},null,8,["modelValue"])])),_:1}),u(U,{label:"状态"},{default:d((()=>[u(j,{modelValue:c.query.status,"onUpdate:modelValue":l[2]||(l[2]=e=>c.query.status=e)},{default:d((()=>[(a(!0),t(r,null,m(c.status,(e=>(a(),i(z,{key:e.key,value:e.key,label:e.value},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(U,null,{default:d((()=>[u(M,{type:"primary",size:"small"},{default:d((()=>[b])),_:1}),u(M,{size:"small"},{default:d((()=>[_])),_:1})])),_:1})])),_:1},8,["model"])]),s("div",V,[u(M,{type:"primary",size:"small"},{default:d((()=>[v])),_:1}),u(M,{type:"warning",size:"small"},{default:d((()=>[q])),_:1})]),s("div",h,[u(I,{data:c.list},{default:d((()=>[u(F,{prop:"id",label:"Id"}),u(F,{prop:"name",label:"角色名称"}),u(F,{prop:"code",label:"权限字符"}),u(F,{prop:"order",label:"显示顺序"}),u(F,{label:"状态"},{default:d((e=>[u(G,{modelValue:e.row.status,"onUpdate:modelValue":l=>e.row.status=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),u(F,{prop:"createTime",label:"创建时间"}),u(F,{label:"操作"},{default:d((e=>[u(M,{type:"text"},{default:d((()=>[g])),_:1}),u(M,{type:"text"},{default:d((()=>[k])),_:1})])),_:1})])),_:1},8,["data"])])])}]]);export{w as default};
