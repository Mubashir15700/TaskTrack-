import{q as E,e as j,r as c,j as r,a8 as w,a9 as S,aa as b,_ as d}from"./index-9d72eabb.js";const L=()=>{var l;const u=E(),m=j(),s=(l=u.state)==null?void 0:l.laborerProfileData,[a,n]=c.useState({userId:s==null?void 0:s.userId,languages:s==null?void 0:s.languages,education:s==null?void 0:s.education,avlDays:s==null?void 0:s.avlDays,avlTimes:s==null?void 0:s.avlTimes,fields:s==null?void 0:s.fields}),[p,i]=c.useState(!1),[h,g]=c.useState({}),f=(e,t)=>{i(!0);const o=[...a.fields];o[e]={...o[e],...t},n({...a,fields:o})},v=()=>{n({...a,fields:[...a.fields,{name:"",worksDone:"",wagePerHour:""}]})},y=e=>{const t=[...a.fields];t.splice(e,1),n({...a,fields:t})},x=async()=>{try{await S.validate(a,{abortEarly:!1});const e=await b(a);e&&e.status===200?(d.success("Updated laborer profile successfully"),m("/account")):d.error("An error occured while updating profile")}catch(e){if(e.name==="ValidationError"){const t={};e.inner.forEach(o=>{t[o.path]=o.message}),g(t)}else d.error("An error occured"),console.log("Update laborer profile error: ",e)}},F={formData:a,setFormData:n,handleFieldChange:f,handleRemoveField:y,handleAddField:v,errors:h,setChanged:i};return r.jsx("div",{className:"col-10 mx-auto my-3",children:r.jsxs("div",{className:"my-3  p-3 p-lg-5 border mt-5",children:[r.jsx(w,{...F}),p&&r.jsx("button",{className:"d-block btn btn-primary",onClick:x,children:"Update"})]})})};export{L as default};
