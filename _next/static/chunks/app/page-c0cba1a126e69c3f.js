(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2708:(e,t,n)=>{Promise.resolve().then(n.bind(n,3809)),Promise.resolve().then(n.bind(n,501)),Promise.resolve().then(n.t.bind(n,3063,23))},3809:(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var r=n(5155),s=n(2115),l=n(922);let i=e=>{let{timeoutDone:t}=e,[n,i]=(0,l.l)(),[o,a]=(0,s.useState)(""),u=(0,s.useRef)(null),c=()=>{console.log("start function: animateText"),setTimeout(()=>{if(t&&u.current){let e=u.current.getBoundingClientRect().top,t=window.innerHeight-e;i(u.current,{y:t,opacity:0},{duration:1.2,ease:[.6,.04,.98,.34]}),i(n.current,{opacity:0},{duration:.8,ease:"linear",delay:.8})}},1e3)};(0,s.useEffect)(()=>{let e=setInterval(()=>{a(e=>e.length<3?e+".":"")},o.length<3?150:600);return()=>clearInterval(e)}),(0,s.useEffect)(()=>{t&&c()},[t,c]);let d="loading"+o;return(0,r.jsx)("div",{className:"h-screen w-screen bg-black text-white text-[24px] overflow-hidden",ref:n,children:(0,r.jsx)("div",{ref:u,className:"fixed top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2",children:t?"done":d})})},o=()=>(0,r.jsx)(i,{}),a=e=>{let{setTimeoutDone:t,timeoutDone:n}=e;return(0,s.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},1e3);return()=>clearTimeout(e)}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none",children:(0,r.jsx)(i,{timeoutDone:n})})},u=e=>{let{children:t}=e,[n,l]=(0,s.useState)(!1);return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(o,{}),children:(0,r.jsxs)("section",{className:"h-screen w-screen relative overflow-hidden",children:[(0,r.jsx)(a,{setTimeoutDone:l,timeoutDone:n}),t]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[631,824,441,684,358],()=>t(2708)),_N_E=e.O()}]);