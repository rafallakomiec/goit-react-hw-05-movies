import{r as e,j as s,P as p}from"./index-a1982b94.js";import{c as l}from"./APIHandlers-2589b0fc.js";const d=({id:a})=>{const[i,n]=e.useState([]),[r,o]=e.useState(!0);return e.useEffect(()=>{(async()=>{const c=(await l(a)).cast.map(t=>s.jsxs("li",{children:[s.jsx("img",{src:"https://image.tmdb.org/t/p/original"+t.profile_path,alt:"Actor picture",width:"200"}),s.jsx("h3",{children:t.original_name}),s.jsx("h4",{children:t.character})]},t.id));n(c),o(!1)})()},[a]),s.jsxs(s.Fragment,{children:[r&&s.jsx("div",{children:"Loading... Please wait..."}),!r&&s.jsx("section",{children:s.jsx("ul",{children:i})})]})};d.propTypes={id:p.string.isRequired};export{d as default};