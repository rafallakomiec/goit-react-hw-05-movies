import{r as t,j as s,P as d}from"./index-477d1a19.js";import{d as l}from"./APIHandlers-dc7c23ef.js";const p=({id:r})=>{const[n,a]=t.useState([]),[i,o]=t.useState(!0);return t.useEffect(()=>{(async()=>{const c=(await l(r)).results.map(e=>s.jsxs("li",{children:[s.jsx("h3",{children:e.author}),s.jsx("p",{children:e.content})]},e.id));a(c),o(!1)})()},[r]),s.jsxs(s.Fragment,{children:[i&&s.jsx("div",{children:"Loading... Please wait..."}),!i&&s.jsx("section",{children:s.jsx("ul",{children:n})})]})};p.propTypes={id:d.string.isRequired};export{p as default};
