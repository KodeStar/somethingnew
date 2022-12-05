(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{8538:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addapp",function(){return s(1905)}])},1905:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return c}});var a=s(5893),t=s(9008),n=s.n(t),i=s(7294),r=s(3162),o=s(5848);function c(){function e(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let l=()=>{var l=s(5733);let a=new l,n=a.folder(p.friendly_name);n.file("app.json",JSON.stringify(p,null,2)),t&&n.file(p.image_src,t.file),a.generateAsync({type:"blob"}).then(function(l){(0,r.saveAs)(l,e(p.friendly_name)+".zip")})},[t,c]=(0,i.useState)(null),[m,u]=(0,i.useState)("png"),[p,x]=(0,i.useState)({friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",volume_mappings:"{}",run_config:"{}",exec_config:"{}",categories:[],require_gpu:!1,enabled:!0,restrict_to_network:!1,restrict_network_names:"[]",allow_network_selection:!1,notes:null,image_type:"Container"});(0,i.useEffect)(()=>{if(p&&p.friendly_name){let l={...p};l.image_src=e(l.friendly_name)+"."+m,x(l)}},[m]);let f=e=>{let l={...p};l.categories=e.map(e=>e.value),x(l)},h=l=>{let s={...p};s[l.target.name]=l.target.value,"icon"===l.target.name&&(delete s.icon,c({value:l.target.value,file:l.target.files[0]}),u(l.target.value.substr(l.target.value.lastIndexOf(".")+1))),s.friendly_name&&(s.image_src=e(s.friendly_name)+"."+m),x(s)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Kasm Apps"}),(0,a.jsx)("meta",{name:"description",content:"List of apps for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,a.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Application"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mb-8 opacity-70",children:"This will help you generate the JSON file you need to upload to the App directory."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,a.jsx)("input",{type:"file",name:"icon",onChange:h,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,a.jsx)("input",{name:"friendly_name",onChange:h,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,a.jsx)(o.Z,{name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:f,styles:{control:(e,l)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,l){let{data:s}=l;return{...e,backgroundColor:"#dde6f1"}}}}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,a.jsx)("input",{name:"description",onChange:h,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the application"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,a.jsx)("input",{name:"name",onChange:h,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,a.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]})]})]}),(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,a.jsx)(d,{app:p,icon:t}),(0,a.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...p,categories:JSON.stringify(p.categories)},null,2)}),(0,a.jsx)("button",{onClick:l,className:"p-4 relative z-10 px-5 bg-emerald-600 m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function d(e){let{app:l,icon:s}=e,[t,n]=(0,i.useState)(!1),r=null;if(s){let o=new Blob([s.file]);r=URL.createObjectURL(o)}return(0,a.jsx)("div",{className:"rounded-xl w-full shadow max-w-xs relative overflow-hidden h-[160px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,a.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[320px] transition-all"+(t?" -translate-y-1/2":""),children:[(0,a.jsxs)("div",{className:"h-[160px] p-4",children:[(0,a.jsx)("img",{className:"h-[105px] absolute -left-6 -top-4",src:r,alt:l.friendly_name}),(0,a.jsxs)("div",{className:"flex-col pl-20",children:[(0,a.jsx)("div",{className:"font-bold",children:l.friendly_name||"Friendly Name"}),(0,a.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Kasm Technologies"," "]}),(0,a.jsx)("div",{className:"text-[10px] h-8 leading-normal",children:l.categories.length>0?l.categories.map(e=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-black/5",children:e})):(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-black/5",children:"categories"})})]}),(0,a.jsxs)("div",{className:"flex mt-1 gap-2 items-center",children:[(0,a.jsx)("button",{className:"text-xs w-full p-4 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"flex w-8 h-8 bg-slate-100 justify-center rounded-full items-center",onClick:()=>n(!0),children:(0,a.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512",children:(0,a.jsx)("path",{d:"M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"})})})})]})]}),(0,a.jsxs)("div",{className:"h-[160px] text-xs relative p-8",children:[(0,a.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,a.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,a.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),l.description]})]})})}}},function(e){e.O(0,[628,774,888,179],function(){return e(e.s=8538)}),_N_E=e.O()}]);