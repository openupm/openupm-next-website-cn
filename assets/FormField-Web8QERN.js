import{g as q,l as r,i as p,o as l,c as o,b as n,t as d,q as y,n as v,y as u,z as S,A as F,F as h,x as k,B as V,e as C,C as T,v as c,_ as U}from"./app-D_mlLpjO.js";const B=["id"],M={key:0,class:"input-group"},$={class:"input-group-addon"},z=["type","placeholder","name","required"],D={key:1},G=["placeholder","name","required"],N={key:1,class:"columns"},L={class:"form-checkbox"},j=["onUpdate:modelValue"],w=n("i",{class:"form-icon"},null,-1),A={key:0,disabled:"",selected:"",value:""},E=["value"],I={key:2,class:"form-input-hint"},O={key:3,class:"form-input-hint"},H=q({__name:"FormField",props:{form:{type:Object,required:!0},field:{type:String,required:!0},label:{type:String,default:""},inputGroupText:{type:String,default:"",required:!1},type:{type:String,default:"text",validator:e=>["text","checkboxes","select"].includes(e)},placeholder:{type:String,default:""},hint:{type:String,default:""}},setup(e){const a=e,f=r(()=>a.form.required[a.field]),g=r(()=>"id_"+a.field),x=r(()=>a.label||p(a.field)),m=r(()=>a.form.options[a.field]);return(s,i)=>(l(),o("div",{id:g.value,class:y(["form-group",{"has-error":e.form.errors[e.field]}])},[n("label",{class:y(["form-label",{required:f.value}])},d(x.value),3),e.inputGroupText?(l(),o("div",M,[v(s.$slots,"input-group-before"),n("span",$,d(e.inputGroupText),1),u(n("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>e.form.values[e.field]=t),class:"form-input",type:e.type,placeholder:e.placeholder,name:e.field,required:f.value},null,8,z),[[S,e.form.values[e.field]]]),v(s.$slots,"inputgroupafter")])):(l(),o("div",D,[e.type=="text"?u((l(),o("input",{key:0,"onUpdate:modelValue":i[1]||(i[1]=t=>e.form.values[e.field]=t),class:"form-input",type:"text",placeholder:e.placeholder,name:e.field,required:f.value},null,8,G)),[[F,e.form.values[e.field],void 0,{trim:!0}]]):e.type=="checkboxes"?(l(),o("div",N,[(l(!0),o(h,null,k(m.value,t=>(l(),o("div",{key:t.key,class:"column col-6"},[n("label",L,[u(n("input",{"onUpdate:modelValue":b=>t.selected=b,type:"checkbox"},null,8,j),[[V,t.selected]]),w,C(" "+d(t.text),1)])]))),128))])):e.type=="select"?u((l(),o("select",{key:2,"onUpdate:modelValue":i[2]||(i[2]=t=>e.form.values[e.field]=t),class:"form-select"},[m.value.length?c("",!0):(l(),o("option",A,d(s.$t("loading...")),1)),(l(!0),o(h,null,k(m.value,t=>(l(),o("option",{key:t.key,value:t.key},d(t.text),9,E))),128))],512)),[[T,e.form.values[e.field]]]):c("",!0)])),e.hint?(l(),o("div",I,d(e.hint),1)):c("",!0),v(s.$slots,"hintafter"),e.form.errors[e.field]?(l(),o("div",O,d(e.form.errors[e.field]),1)):c("",!0)],10,B))}}),K=U(H,[["__file","FormField.vue"]]);export{K as default};
