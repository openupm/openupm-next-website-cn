import{m as v,I as m,l,h as _,J as y,K as i,g as P,o as O,G as b,L as I,E as h,_ as w}from"./app-D_mlLpjO.js";var B=Object.defineProperty,E=Object.defineProperties,L=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,A=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&A(e,t,r[t]);if(d)for(var t of d(r))z.call(r,t)&&A(e,t,r[t]);return e},D=(e,r)=>E(e,L(r)),R={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:r,slots:t,emit:o}){const a=v(null),s=m({observer:null,intersected:!1,loaded:!1}),f=l(()=>s.intersected&&e.src?e.src:e.srcPlaceholder),g=l(()=>s.intersected&&e.srcset?e.srcset:!1),c=()=>{a.value&&a.value.getAttribute("src")!==e.srcPlaceholder&&(s.loaded=!0,o("load",a.value))},p=()=>o("error",a.value);return _(()=>{"IntersectionObserver"in window&&(s.observer=new IntersectionObserver(n=>{n[0].isIntersecting&&(s.intersected=!0,s.observer.disconnect(),o("intersect"))},e.intersectionOptions),s.observer.observe(a.value))}),y(()=>{"IntersectionObserver"in window&&s.observer&&s.observer.disconnect()}),()=>{const n=i("img",D(j({ref:a,src:f.value,srcset:g.value||null},r),{class:[r.class,"v-lazy-image",{"v-lazy-image-loaded":s.loaded}],onLoad:c,onError:p}));return e.usePicture?i("picture",{ref:a,onLoad:c},s.intersected?[t.default,n]:[n]):n}}};const u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=P({__name:"LazyImage",props:{placeholder:{type:String,default:u},errorMessage:{type:String,default:"Image not found: "}},setup(e){const r=e,t=o=>{const a=o.attributes.src.value;console.log(r.errorMessage+a),o.src=u,o.classList.add("v-lazy-image-loaded")};return(o,a)=>(O(),b(h(R),I(o.$attrs,{"src-placeholder":e.placeholder,onError:t}),null,16,["src-placeholder"]))}}),H=w(x,[["__scopeId","data-v-3fd3da67"],["__file","LazyImage.vue"]]);export{H as default};
