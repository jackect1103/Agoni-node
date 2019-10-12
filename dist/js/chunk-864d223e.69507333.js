(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-864d223e"],{5209:function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[t("el-input",{model:{value:e.ruleForm.title,callback:function(r){e.$set(e.ruleForm,"title",r)},expression:"ruleForm.title"}})],1),t("el-form-item",{attrs:{label:"文章图片",prop:"imageUrl"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.ruleForm.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t("el-form-item",{attrs:{label:"文章类别",prop:"chapter"}},[t("el-select",{attrs:{placeholder:"请选择文章类别"},model:{value:e.ruleForm.chapter,callback:function(r){e.$set(e.ruleForm,"chapter",r)},expression:"ruleForm.chapter"}},[t("el-option",{attrs:{label:"书讯",value:"BookNews"}}),t("el-option",{attrs:{label:"童书",value:"ChildrensBooks"}}),t("el-option",{attrs:{label:"活动",value:"activity"}})],1)],1),t("el-form-item",{attrs:{label:"文章发表时间",prop:"date"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date,callback:function(r){e.$set(e.ruleForm,"date",r)},expression:"ruleForm.date"}})],1),t("el-form-item",{attrs:{label:"文章作者",prop:"author"}},[t("el-input",{model:{value:e.ruleForm.author,callback:function(r){e.$set(e.ruleForm,"author",r)},expression:"ruleForm.author"}})],1),t("el-form-item",{attrs:{label:"文章简介",prop:"intro"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.intro,callback:function(r){e.$set(e.ruleForm,"intro",r)},expression:"ruleForm.intro"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},a=[],o={name:"addArticle",data:function(){return{ruleForm:{title:"",imageUrl:"",chapter:"",date:"",author:"",intro:""},rules:{title:[{required:!0,message:"请输入文章名称",trigger:"blur"},{min:1,max:35,message:"长度在 1 到 35 个字符",trigger:"blur"}],chapter:[{required:!0,message:"请选择文章文章类别",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],author:[{required:!0,message:"请输入文章作者",trigger:"blur"},{min:1,max:8,message:"长度在 1 到 8 个字符",trigger:"blur"}],intro:[{required:!0,message:"请填写文章简介",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm)}))},resetForm:function(e){this.$refs[e].resetFields()},handleAvatarSuccess:function(e,r){this.ruleForm.imageUrl=URL.createObjectURL(r.raw)},beforeAvatarUpload:function(e){var r="image/jpeg"===e.type,t=e.size/1024/1024<2;return r||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),r&&t}}},s=o,i=(t("eef3"),t("2877")),u=Object(i["a"])(s,l,a,!1,null,"2fbc3cbb",null);r["default"]=u.exports},eef3:function(e,r,t){"use strict";var l=t("fdd1"),a=t.n(l);a.a},fdd1:function(e,r,t){}}]);
//# sourceMappingURL=chunk-864d223e.69507333.js.map