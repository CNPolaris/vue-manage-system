import{s as e}from"./request.2d0c7259.js";import{g as l}from"./department.7e79b1a4.js";import{_ as a}from"./index.d28fca02.js";import{o as t,c as o,w as d,r as i,f as r,e as s,b as u,l as m,F as n,h as p,t as f}from"./vendor.6679d492.js";const c={data:()=>({list:[],total:0,param:{page:1,limit:10,username:"",role:""},form:null,struct:[],editDialogVisible:!1,detailVisible:!1,grade:[{key:1,value:"男"},{key:0,value:"女"}],defaultProps:{children:"children",label:"label"}}),created(){this.getList(),l().then((e=>{console.log(e.data),this.struct=e.data}))},methods:{getList(){var l;(l=this.param,e({url:"/api/admin/user/list",method:"post",headers:{Authorization:"Bearer"},data:l})).then((e=>{this.list=e.data.list}))},handleDetail(l){(function(l){return e({url:"/api/admin/user/detail",method:"get",params:{id:l}})})(l).then((e=>{this.form=e.data,this.detailVisible=!0}))},handleDelete(e){const l=[];for(const a of this.list)a.id!==e&&l.push(a);this.list=l},handleUpdate(e){this.editDialogVisible=!0,this.form=e},submitForm(){console.log(this.form),this.editDialogVisible=!1},handleClear(){this.param.username="",this.param.role=""},handlePrev(){this.param.page--,this.getList()},handleNext(){this.param.page++,this.getList()}}},h=p("查询"),b=p("重置"),V=p("详情"),_=p("编辑"),g=p("删除"),k={class:"pageModule"},x={class:"dialog-footer"},C=p("取消"),v=p("确认");var y=a(c,[["render",function(e,l,a,c,y,w){const D=i("el-tree"),U=i("el-col"),N=i("el-input"),z=i("el-form-item"),P=i("el-button"),L=i("el-form"),j=i("el-table-column"),F=i("el-avatar"),q=i("el-table"),A=i("el-pagination"),B=i("el-input-number"),I=i("el-option"),M=i("el-select"),E=i("el-dialog"),G=i("el-descriptions-item"),H=i("el-descriptions"),J=i("el-row");return t(),o(J,{gutter:20},{default:d((()=>[r(U,{xs:0,sm:4,lg:4,xl:4},{default:d((()=>[r(D,{data:y.struct,props:y.defaultProps,"default-expand-all":!0},null,8,["data","props"])])),_:1}),r(U,{xs:24,sm:20,lg:20,xl:20},{default:d((()=>[r(L,{model:y.param,inline:!0,ref:"param"},{default:d((()=>[r(z,{label:"用户名"},{default:d((()=>[r(N,{modelValue:y.param.username,"onUpdate:modelValue":l[0]||(l[0]=e=>y.param.username=e)},null,8,["modelValue"])])),_:1}),r(z,{label:"角色类别"},{default:d((()=>[r(N,{modelValue:y.param.role,"onUpdate:modelValue":l[1]||(l[1]=e=>y.param.role=e)},null,8,["modelValue"])])),_:1}),r(z,null,{default:d((()=>[r(P,{onClick:w.getList,type:"primary"},{default:d((()=>[h])),_:1},8,["onClick"])])),_:1}),r(z,null,{default:d((()=>[r(P,{onClick:w.handleClear,type:"success"},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),r(q,{data:y.list},{default:d((()=>[r(j,{prop:"id",label:"Id",width:"70px"}),r(j,{prop:"username",label:"用户名",width:"150px"}),r(j,{prop:"nickName",label:"昵称",width:"150px"}),r(j,{label:"头像"},{default:d((e=>[r(F,{shape:"square",size:"small",src:e.row.avatar},null,8,["src"])])),_:1}),r(j,{prop:"age",label:"年龄",width:"70px"}),r(j,{prop:"company",label:"公司"}),r(j,{prop:"department",label:"部门"}),r(j,{label:"操作",width:"250px"},{default:d((e=>[r(P,{onClick:l=>w.handleDetail(e.row.id),size:"small"},{default:d((()=>[V])),_:2},1032,["onClick"]),r(P,{onClick:l=>w.handleUpdate(e.row),size:"small"},{default:d((()=>[_])),_:2},1032,["onClick"]),r(P,{onClick:l=>w.handleDelete(e.row.id),size:"small"},{default:d((()=>[g])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),s("div",k,[r(A,{small:"",background:"",layout:"prev, pager, next",total:y.total,class:"mt-4",onPrevClick:w.handlePrev,onNextClick:w.handleNext},null,8,["total","onPrevClick","onNextClick"])]),r(E,{modelValue:y.editDialogVisible,"onUpdate:modelValue":l[7]||(l[7]=e=>y.editDialogVisible=e)},{footer:d((()=>[s("span",x,[r(P,{onClick:l[6]||(l[6]=e=>y.editDialogVisible=!1)},{default:d((()=>[C])),_:1}),r(P,{type:"primary",onClick:w.submitForm},{default:d((()=>[v])),_:1},8,["onClick"])])])),default:d((()=>[r(L,{model:y.form},{default:d((()=>[r(z,{label:"头像"},{default:d((()=>[r(F,{size:50,src:y.form.avatar},null,8,["src"])])),_:1}),r(z,{label:"用户名"},{default:d((()=>[r(N,{modelValue:y.form.username,"onUpdate:modelValue":l[2]||(l[2]=e=>y.form.username=e)},null,8,["modelValue"])])),_:1}),r(z,{label:"昵称"},{default:d((()=>[r(N,{modelValue:y.form.nickName,"onUpdate:modelValue":l[3]||(l[3]=e=>y.form.nickName=e)},null,8,["modelValue"])])),_:1}),r(z,{label:"年龄"},{default:d((()=>[r(B,{modelValue:y.form.age,"onUpdate:modelValue":l[4]||(l[4]=e=>y.form.age=e),min:0,max:200},null,8,["modelValue"])])),_:1}),r(z,{label:"性别"},{default:d((()=>[r(M,{modelValue:y.form.sex,"onUpdate:modelValue":l[5]||(l[5]=e=>y.form.sex=e)},{default:d((()=>[(t(!0),u(n,null,m(y.grade,(e=>(t(),o(I,{key:e.key,value:e.key,label:e.value},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),r(E,{modelValue:y.detailVisible,"onUpdate:modelValue":l[8]||(l[8]=e=>y.detailVisible=e)},{default:d((()=>[r(H,{title:"用户详情"},{default:d((()=>[r(G,{label:"用户名"},{default:d((()=>[p(f(y.form.username),1)])),_:1}),r(G,{label:"昵称"},{default:d((()=>[p(f(y.form.nickName),1)])),_:1}),r(G,{label:"公司"},{default:d((()=>[p(f(y.form.company),1)])),_:1}),r(G,{label:"部门"},{default:d((()=>[p(f(y.form.department),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}]]);export{y as default};
