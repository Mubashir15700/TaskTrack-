import{r as s,u as A,_ as x,j as o,g as p,L as S,S as L,p as C}from"./index-9d72eabb.js";import{T as w}from"./TableDataDisplay-a6000d9c.js";import"./Pagination-9cfb42e3.js";const U=()=>{const[d,l]=s.useState([]),[i,a]=s.useState(),[c,m]=s.useState(0),[f,g]=s.useState(0),[r,h]=s.useState(2),u=A(e=>e.admin.searchResults);s.useEffect(()=>{const e=async()=>{try{const t=await p(r,c);t&&t.status===200&&t.plans?(l(t.plans),g(t.totalPages)):a("Failed to fetch plans data.")}catch(t){a("An error occurred while fetching plans data."),console.error("Error fetching plans data:",t)}};u.searchOn==="plans"?l(u.results):e()},[c,u,r]);const b=async(e,t)=>{(await L.confirmAction(`${t?"Unlist":"List"} plan`,`Are you sure you want to ${t?"Unlist":"List"} this plan?`,t?"Unlist":"List","#d9534f")).isConfirmed&&P(e)},P=async e=>{try{const t=await C(e);if(t)if(t.status===200){const n=await p(r,c);n&&n.status===200&&n.plans?l(n.plans):a("Failed to fetch updated plans data.")}else a("Something went wrong")}catch(t){a("Failed to update plan"),console.error("user action error: ",t)}};s.useEffect(()=>{i&&x.error(i)},[i]);const y={heading:"Plans",itemsPerPage:r,onItemsPerPageChange:e=>h(e),addLink:"/admin/subscription-plans/add-plan",dataTableColumns:[{name:"Name",selector:e=>e.name,sortable:!0},{name:"Description",selector:e=>e.description,sortable:!0},{name:"Type",selector:e=>e.type,sortable:!0},{name:"Amount",selector:e=>e.amount,sortable:!0},{name:"Is Active",selector:e=>e.isActive,sortable:!0,cell:e=>e.isActive?"Yes":"No"},{name:"Actions",width:"220px",cell:e=>o.jsxs("div",{className:"d-flex gap-2",children:[o.jsx(S,{to:`/admin/subscription-plans/edit-plan/${e._id}`,className:"btn btn-primary",children:"Edit"}),o.jsx("button",{className:`btn ${e.isActive?"btn-danger":"btn-warning"}`,onClick:()=>b(e._id,e.isActive),children:e.isActive?"Unlist":"List"})]})}],dataTableData:d,pageCount:f,onPageChange:({selected:e})=>m(e)};return o.jsx(w,{...y})};export{U as default};
