webpackJsonp([54],{isLb:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])},pyEg:function(e,t,r){var o=r("isLb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("370d6205",o,!0)},t8eB:function(e,t,r){"use strict";function o(e){r("pyEg")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("BO1k"),n=r.n(a),l=r("lLHC"),s=r("nSkA"),i=r("QmSG"),u=r("0xDb"),c=r("vMJZ"),m={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",content1:"",content2:"",content3:"",create_user:localStorage.getItem("username"),action_user:[],pid:"",time:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],time:[{required:!0,type:"array",message:"请输入正确的内容",trigger:"blur"}],content1:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content2:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content3:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},users:[],toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},uploadurl:i.uploadurl,img_file:{},fileList:[],count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""}}},created:function(){this.getUsers()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.pid="ppt"+Object(u.a)(),t.ruleForm.start_time=t.ruleForm.time[0],t.ruleForm.end_time=t.ruleForm.time[1],Object(l.k)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,o=!1,a=void 0;try{for(var i,c=n()(t.fileList);!(r=(i=c.next()).done);r=!0){var m=i.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",m),p.append("create_time",Object(u.a)(m.uid)),p.append("type",m.type),p.append("archive",t.route_path[1]),Object(s.i)(p).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.project=e.data.id,Object(l.j)(t.enclosureForm)})}}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}t.$router.push("/opstasks/opsdemands")})})},resetForm:function(e){this.$refs[e].resetFields()},imgAdd:function(e,t){var r=this.$refs.md,o=new FormData;o.append("username",this.ruleForm.create_user),o.append("file",t),o.append("create_time",Object(u.a)(t.lastModified)),o.append("type",t.type),o.append("archive",this.route_path[1]),Object(s.i)(o).then(function(t){r.$imglst2Url([[e,t.data.file]])})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1},getUsers:function(){var e=this,t={groups__name:"ITDept"};Object(c.f)(t).then(function(t){e.users=t.data})}}},p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"目标",prop:"content1"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content1,callback:function(t){e.$set(e.ruleForm,"content1",t)},expression:"ruleForm.content1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"范围",prop:"content2"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content2,callback:function(t){e.$set(e.ruleForm,"content2",t)},expression:"ruleForm.content2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预算",prop:"content3"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content3,callback:function(t){e.$set(e.ruleForm,"content3",t)},expression:"ruleForm.content3"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"时间",prop:"time"}},[r("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"参与者",prop:"action_user"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择参与者"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},d=[],f={render:p,staticRenderFns:d},F=f,h=r("VU/8"),v=o,b=h(m,F,!1,v,null,null);t.default=b.exports}});