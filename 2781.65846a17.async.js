(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2781],{438746:function(ve,U,e){"use strict";e.d(U,{Z:function(){return G}});var k=e(97857),C=e.n(k),a=e(952677),h=e.n(a),w=e(805574),R=e.n(w),L=e(454769),S=e(667294),$=e(302559);function y(j){return j.replace("-cn","").replace(/\/$/,"")}function G(){var j=(0,L.TH)(),P=j.search,z=(0,$.Z)(),H=R()(z,2),d=H[1],f=S.useCallback(function(u,i){var l=y(u);if(d==="cn"&&(l="".concat(l,"-cn")),P&&(l="".concat(l).concat(P)),i){var c;h()(i)==="object"?c=i[d]:c=i,l="".concat(l,"#").concat(c)}return l},[d,P]);return C()(C()({},j),{},{pathname:y(j.pathname),getLink:f})}},123286:function(ve,U,e){"use strict";e.r(U),e.d(U,{default:function(){return $n}});var k=e(97857),C=e.n(k),a=e(667294),h=e(454769),w=e(9783),R=e.n(w),L=e(168400),S=e.n(L),$=e(805574),y=e.n($),G=e(229158),j=e(873711),P=e(363606),z=e(856334),H=e(748115),d=e(179979),f=e(11739),u=e(879587),i=e(209269),l=e(707898),c=e(65630),T=e(294184),V=e.n(T),o=e(826961),s=e.n(o),O=e(774855),Z=e.n(O),b=e(438746),n=e(785893),ne=function(t){var r=t.children;return(0,n.jsx)("div",{className:"browser-mockup with-url",children:r})},pe=ne,Ee=function(t){var r=t.children,x=(0,a.useState)(!1),p=y()(x,2),M=p[0],E=p[1];return(0,a.useLayoutEffect)(function(){E(!0)},[]),M?r:null},fe=Ee,te=e(316165),he=function(){return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,n.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},Oe=function(t){return(0,n.jsx)(te.Z,C()({component:he},t))},xe=Oe,Pe=e(468990),Re=e(224292),De=e.n(Re),X=e(626826),ae=e(915660),Y=e.n(ae),ge={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function ie(v){return De()(v,[[function(t){return X.isElement(t)&&X.getTagName(t)==="pre"},function(t,r){var x=X.getAttributes(t);return(0,n.jsx)("pre",{className:"language-".concat(x.lang),children:(0,n.jsx)("code",{dangerouslySetInnerHTML:{__html:x.highlighted}})},r)}]])}var Te=function(t){var r=t.sourceCode,x=r===void 0?"":r,p=t.jsxCode,M=p===void 0?"":p,E=t.styleCode,F=E===void 0?"":E,N=t.onCodeTypeChange,J={};x&&(J.tsx=""),M&&(J.jsx=""),F&&(J.style="");var se=a.useState(J),Q=y()(se,2),I=Q[0],K=Q[1];(0,a.useEffect)(function(){var A={tsx:Y().highlight(x,Y().languages.javascript,"jsx"),jsx:Y().highlight(M,Y().languages.javascript,"jsx"),style:Y().highlight(F,Y().languages.css,"css")};Object.keys(A).forEach(function(_){A[_]||delete A[_]}),K(A)},[M,x,F]);var W=Object.keys(I),ce=(0,a.useMemo)(function(){return W.map(function(A){return{label:ge[A],key:A,children:ie(["pre",{lang:A,highlighted:I[A]}])}})},[JSON.stringify(I)]);return W.length?W.length===1?ie(["pre",{lang:W[0],highlighted:I[W[0]],className:"highlight"}]):(0,n.jsx)(Pe.Z,{centered:!0,className:"highlight",onChange:N,items:ce}):null},Me=Te,Ce=function(){return(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},ye=function(t){return(0,n.jsx)(te.Z,C()({component:Ce},t))},Ne=ye,Ie=e(148050),je=function(t){var r=t.color,x=r===void 0?"currentColor":r;return(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:x,children:[(0,n.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,n.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Le=function(t){return(0,n.jsx)(te.Z,C()({component:je},t))},Ae=Le,Ze=function(){return(0,n.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,n.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},jn=function(t){return(0,n.jsx)(te.Z,C()({component:Ze},t))},Ln=jn,Sn=e(438199),bn=e(373638),Ke,En=f.Z.ErrorBoundary;function On(v){return s().compressToBase64(v).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var oe=function(t){var r=t.type,x=t.demo;window.gtag&&window.gtag("event","demo",{event_category:r,event_label:x})},Be;function Pn(){var v=(0,a.useState)(!1),t=y()(v,2),r=t[0],x=t[1];return(0,a.useEffect)(function(){var p;(p=Be)!==null&&p!==void 0||(Be=new Promise(function(M){(0,bn.qE)(function(E){return M(E!=="timeout"&&E!=="error")})})),Be.then(x)},[]),r}var Rn=(0,c.kc)(function(v){var t=v.token,r=t.borderRadius;return{codeHideBtn:(0,c.iv)(Ke||(Ke=S()([`
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all 0.2s ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-right: `,`px;
      }
    `])),r,r,t.colorSplit,t.colorTextSecondary,t.colorBgElevated,t.colorPrimary,t.marginXXS)}}),Dn=function(t){var r,x,p=t.asset,M=t.expand,E=t.iframe,F=t.demoUrl,N=t.children,J=t.title,se=t.description,Q=t.originDebug,I=t.jsx,K=t.style,W=t.compact,ce=t.background,A=t.filename,_=t.version,Se=t.clientOnly,be=t.pkgDependencyList,Qe=(0,h.WF)(),D=Qe.pkg,ze=(0,b.Z)(),Gn=Rn(),Vn=Gn.styles,_e=p.dependencies["index.tsx"].value,Jn=Pn(),He=(0,a.useRef)(null),qe=(0,a.useRef)(null),en=(0,a.useRef)(null),nn=(0,a.useRef)(null),tn=(0,a.useRef)(null),kn=(0,a.useState)(!1),on=y()(kn,2),re=on[0],Ue=on[1],wn=(0,a.useState)(!1),rn=y()(wn,2),an=rn[0],Xn=rn[1],Yn=(0,a.useState)(!1),sn=y()(Yn,2),cn=sn[0],dn=sn[1],Qn=(0,a.useState)("tsx"),ln=y()(Qn,2),_n=ln[0],qn=ln[1],et=(0,a.useContext)(Sn.Z),ee=et.theme,nt=ze.hash,tt=ze.pathname,ot=ze.search,rt="https://ant.design".concat(tt).concat(ot,"#").concat(p.id),at=(0,a.useState)(!1),un=y()(at,2),it=un[0],st=un[1];(0,a.useEffect)(function(){var m=/preview-(\d+)-ant-design/;st(m.test(window.location.hostname))},[]);var mn=function(g){Ue(function(ue){return!ue}),oe({type:"expand",demo:g})},ct=function(g){dn(!0),oe({type:"copy",demo:g})},dt=function(g){Xn(g),g&&dn(!1)};(0,a.useEffect)(function(){if(p.id===nt.slice(1)){var m;(m=qe.current)===null||m===void 0||m.click()}},[]),(0,a.useEffect)(function(){Ue(M)},[M]);var lt=!E&&Se?(0,n.jsx)(fe,{children:N}):N;He.current||(He.current=E?(0,n.jsx)(pe,{children:(0,n.jsx)("iframe",{src:F,height:E===!0?void 0:E,title:"demo",className:"iframe-demo"})}):lt);var ut=V()("code-box",{expand:re,"code-box-debug":Q}),de=J,mt=(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:se}}),vt=V()("highlight-wrapper",{"highlight-wrapper-expand":re}),Fe=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,pt={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},q=_n==="tsx"?"tsx":"js",B=I.split(`
`).reduce(function(m,g){var ue=g.match(/import .+? from '(.+)';$/);if(ue&&ue[1]&&!g.includes("antd")){var me=ue[1].split("/");if(me.length){var Lt=me[0].startsWith("@")?"".concat(me[0],"/").concat(me[1]):me[0];m[Lt]="latest"}}return m},{antd:D.version});B["@ant-design/icons"]="latest",q==="tsx"&&(B["@types/react"]="^18.0.0",B["@types/react-dom"]="^18.0.0"),B.react="^18.0.0",B["react-dom"]="^18.0.0";var ft={title:"".concat(de," - antd@").concat(B.antd),html:Fe,js:`const { createRoot } = ReactDOM;
`.concat(I.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(D.version,"/dist/antd-with-locales.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(m){return"https://unpkg.com/".concat(m)}).join(";"),js_pre_processor:"typescript"},ht={title:"".concat(de," - antd@").concat(B.antd),js:"".concat(/import React(\D*)from 'react';/.test(I)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(I.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:B},null,2)},le=q==="tsx"?_e:I,vn="import React from 'react';",pn=/import React(\D*)from 'react';/,fn=le.match(pn);if(fn){var xt=y()(fn,1);vn=xt[0],le=le.replace(pn,"").trim()}var hn=`
`.concat(vn,`
import './index.css';
`).concat(le,`
    `).trim(),xn=(K||"").trim().replace(new RegExp("#".concat(p.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),gn=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,gt={title:"".concat(de," - antd@").concat(B.antd),main:"index.js",dependencies:C()(C()({},B),{},{"rc-util":be["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Ct={files:(r={"package.json":{content:gt},"index.css":{content:xn}},R()(r,"index.".concat(q),{content:gn}),R()(r,"demo.".concat(q),{content:hn}),R()(r,"index.html",{content:Fe}),r)},Cn={title:"".concat(de," - antd@").concat(B.antd),template:"create-react-app",dependencies:B,description:"",files:(x={"index.css":xn},R()(x,"index.".concat(q),gn),R()(x,"demo.".concat(q),hn),R()(x,"index.html",Fe),x)};q==="tsx"&&(Cn.files["tsconfig.json"]=JSON.stringify(pt,null,2));var yt=ee.includes("dark")?"#303030":"#f0f2f5",jt={padding:E||W?0:void 0,overflow:E||W?"hidden":void 0,backgroundColor:ce==="grey"?yt:void 0},yn=(0,n.jsxs)("section",{className:ut,id:p.id,children:[(0,n.jsx)("section",{className:"code-box-demo",style:jt,children:(0,n.jsx)(En,{children:(0,n.jsx)(a.StrictMode,{children:He.current})})}),(0,n.jsxs)("section",{className:"code-box-meta markdown",children:[(0,n.jsxs)("div",{className:"code-box-title",children:[(0,n.jsx)(u.Z,{title:Q?(0,n.jsx)(h._H,{id:"app.demo.debug"}):"",children:(0,n.jsx)("a",{href:"#".concat(p.id),ref:qe,children:de})}),(0,n.jsx)(Ie.Z,{title:(0,n.jsx)(h._H,{id:"app.content.edit-demo"}),filename:A})]}),(0,n.jsx)("div",{className:"code-box-description",children:mt}),(0,n.jsxs)(i.Z,{wrap:!0,size:"middle",className:"code-box-actions",children:[it&&(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.online"}),children:(0,n.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:rt,children:(0,n.jsx)(G.Z,{"aria-label":"open in new tab",className:"code-box-online"})})}),Jn?(0,n.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:nn,onClick:function(){var g;oe({type:"riddle",demo:p.id}),(g=nn.current)===null||g===void 0||g.submit()},children:[(0,n.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(ht)}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.riddle"}),children:(0,n.jsx)(Ln,{className:"code-box-riddle"})})]}):null,(0,n.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:en,onClick:function(){var g;oe({type:"codesandbox",demo:p.id}),(g=en.current)===null||g===void 0||g.submit()},children:[(0,n.jsx)("input",{type:"hidden",name:"parameters",value:On(JSON.stringify(Ct))}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.codesandbox"}),children:(0,n.jsx)(Ne,{className:"code-box-codesandbox"})})]}),(0,n.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:tn,onClick:function(){var g;oe({type:"codepen",demo:p.id}),(g=tn.current)===null||g===void 0||g.submit()},children:[(0,n.jsx)(fe,{children:(0,n.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(ft)})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.codepen"}),children:(0,n.jsx)(xe,{className:"code-box-codepen"})})]}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.stackblitz"}),children:(0,n.jsx)("span",{className:"code-box-code-action",onClick:function(){oe({type:"stackblitz",demo:p.id}),d.Z.openProject(Cn,{openFile:["demo.".concat(q)]})},children:(0,n.jsx)(j.Z,{className:"code-box-stackblitz"})})}),(0,n.jsx)(Z(),{text:le,onCopy:function(){return ct(p.id)},children:(0,n.jsx)(u.Z,{open:an,onOpenChange:dt,title:(0,n.jsx)(h._H,{id:"app.demo.".concat(cn?"copied":"copy")}),children:a.createElement(cn&&an?P.Z:z.Z,{className:"code-box-code-copy code-box-code-action"})})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.separate"}),children:(0,n.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:F,children:(0,n.jsx)(Ae,{className:"code-box-separate"})})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)(h._H,{id:"app.demo.code.".concat(re?"hide":"show")}),children:(0,n.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,n.jsx)("img",{alt:"expand code",src:ee!=null&&ee.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:re?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return mn(p.id)}}),(0,n.jsx)("img",{alt:"expand code",src:ee!=null&&ee.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:re?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return mn(p.id)}})]})})]})]}),re&&(0,n.jsxs)("section",{className:vt,children:[(0,n.jsx)(Me,{sourceCode:_e,jsxCode:I,styleCode:K,onCodeTypeChange:qn}),(0,n.jsxs)("div",{tabIndex:0,role:"button",className:Vn.codeHideBtn,onClick:function(){return Ue(!1)},children:[(0,n.jsx)(H.Z,{}),(0,n.jsx)(h._H,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,a.useEffect)(function(){if(K){var m=document.createElement("style");return m.type="text/css",m.innerHTML=K,m["data-demo-url"]=F,document.head.appendChild(m),function(){document.head.removeChild(m)}}},[K,F]),_?(0,n.jsx)(l.Z.Ribbon,{text:_,color:_.includes("<")?"red":null,children:yn}):yn},Tn=Dn,Mn=e(15009),We=e.n(Mn),Nn=e(899289),In=e.n(Nn),An=e(704664),Zn=e(124220),Bn=e(820640),zn=e.n(Bn),Hn=e(682582),$e,Ge,Ve,Je,ke,we,Xe,Ye,Un=(0,c.kc)(function(v){var t=v.token,r=v.css;return{wrapper:r($e||($e=S()([`
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: 20px 24px 40px;
    position: relative;
    margin-bottom: `,`px;
  `])),t.colorBorderSecondary,t.borderRadius,t.marginLG),title:r(Ge||(Ge=S()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),t.fontSizeLG,t.fontWeightStrong,t.colorTextHeading,t.colorTextHeading),description:r(Ve||(Ve=S()([`
    margin-top: `,`px;
  `])),t.margin),demo:r(Je||(Je=S()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),t.marginLG),copy:r(ke||(ke=S()([`
    position: absolute;
    inset-inline-end: 20px;
    inset-block-start: 20px;
    cursor: pointer;
  `]))),copyTip:r(we||(we=S()([`
    color: `,`;
  `])),t.colorTextTertiary),copiedTip:r(Xe||(Xe=S()([`
    .anticon {
      color: `,`;
    }
  `])),t.colorSuccess),tip:r(Ye||(Ye=S()([`
    color: `,`;
    margin-top: 40px;
  `])),t.colorTextTertiary)}}),Fn=function(t){var r=t.children,x=t.title,p=t.description,M=t.tip,E=t.asset,F=Un(),N=F.styles,J=(0,a.useRef)(null),se=a.useState(!1),Q=y()(se,2),I=Q[0],K=Q[1],W=Hn.Z.useApp(),ce=W.message,A=function(){var _=In()(We()().mark(function Se(){var be;return We()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,(0,Zn.Sg)(J.current);case 3:be=D.sent,zn()(JSON.stringify(be.toSketchJSON())),K(!0),setTimeout(function(){K(!1)},5e3),D.next=13;break;case 9:D.prev=9,D.t0=D.catch(0),console.error(D.t0),ce.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return D.stop()}},Se,null,[[0,9]])}));return function(){return _.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:N.wrapper,id:E.id,children:[(0,n.jsx)("a",{className:N.title,href:"#".concat(E.id),children:x}),(0,n.jsx)("div",{className:N.description,dangerouslySetInnerHTML:{__html:p}}),(0,n.jsx)("div",{className:N.copy,children:I?(0,n.jsxs)("div",{className:N.copiedTip,children:[(0,n.jsx)(P.Z,{}),(0,n.jsx)("span",{style:{marginLeft:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,n.jsxs)("div",{onClick:A,className:N.copyTip,children:[(0,n.jsx)(An.Z,{}),(0,n.jsx)("span",{style:{marginLeft:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,n.jsx)("div",{className:N.demo,ref:J,children:r}),(0,n.jsx)("div",{className:N.tip,children:M})]})},Kn=Fn,Wn=function(t){var r=(0,h.zh)();return(r==null?void 0:r.frontmatter.title)==="Design"?(0,n.jsx)(Kn,C()({},t)):(0,n.jsx)(Tn,C()({},t))},$n=Wn},148050:function(ve,U,e){"use strict";e.d(U,{Z:function(){return G}});var k=e(168400),C=e.n(k),a=e(667294),h=e(186548),w=e(65630),R=e(879587),L=e(785893),S,$="https://github.com/ant-design/ant-design/edit/master/",y=(0,w.kc)(function(j){var P=j.token,z=j.css,H=P.colorIcon,d=P.colorText,f=P.iconCls;return{editButton:z(S||(S=C()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),f,H,d)}});function G(j){var P=j.title,z=j.filename,H=y(),d=H.styles;return(0,L.jsx)(R.Z,{title:P,children:(0,L.jsx)("a",{className:d.editButton,href:"".concat($).concat(z),target:"_blank",rel:"noopener noreferrer",children:(0,L.jsx)(h.Z,{})})})}},373638:function(ve,U,e){"use strict";e.d(U,{J1:function(){return y},Is:function(){return H},Fy:function(){return j},KE:function(){return $},qE:function(){return G}});var k=e(661227),C=e(805574),a=e(97857),h=e(385564),w=e(842348),R=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),L={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":R?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function S(d,f,u,i){var l=d.map(function(o){return o.meta}).filter(function(o){return!o.skip}),c=[],T=function(s,O){return(s.order||0)-(O.order||0)};l.sort(T).forEach(function(o){if(o.category&&(o.category=o.category[f]||o.category),o.type&&(o.type=o.type[f]||o.type),o!=null&&o.title&&(o.title=o.title[f]||o.title),!o.category){c.push(o);return}if(o.category==="Components"&&o.type){var s=c.find(function(b){return(b==null?void 0:b.title)===o.type});s||(s={type:"type",title:o.type,children:[],order:i[o.type]},c.push(s)),s.children=s.children||[],s.children.push(o);return}var O=c.find(function(b){return(b==null?void 0:b.title)===o.category});if(O||(O={type:"category",title:o.category,children:[],order:u[o.category]},c.push(O)),O.children=O.children||[],o.type){var Z=O.children.filter(function(b){return(b==null?void 0:b.title)===o.type})[0];Z||(Z={type:"type",title:o.type,children:[],order:i[o.type]},O.children.push(Z)),Z.children=Z.children||[],Z.children.push(o)}else O.children.push(o)});function V(o){return o.sort(T).map(function(s){return s.children?_objectSpread(_objectSpread({},s),{},{children:V(s.children)}):s})}return V(c)}function $(d){return/-cn\/?$/.test(d)}function y(d,f,u,i){var l=d.startsWith("/")?d:"/".concat(d),c;if(f?l==="/"?c="/index-cn":l.endsWith("/")?c=l.replace(/\/$/,"-cn/"):(c="".concat(l,"-cn"),c=c.replace(/(-cn)+/,"-cn")):c=/\/?index-cn/.test(l)?"/":l.replace("-cn",""),i){var T=i[f?"zhCN":"enUS"];c+="#".concat(T)}return{pathname:c,search:u}}function G(d){var f="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",u=new Image,i,l=function(T){i||(i=!0,u.src="",d(T))};return u.onload=function(){return l("responded")},u.onerror=function(){return l("error")},u.src=f,setTimeout(function(){return l("timeout")},1500)}function j(){var d="test",f=window.localStorage;try{return f.setItem(d,"1"),f.removeItem(d),!0}catch(u){return!1}}function P(d){return new Promise(function(f,u){var i=document.createElement("script");i.type="text/javascript",i.src=d,i.onload=f,i.onerror=u,document.head.appendChild(i)})}function z(d){var f=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(d))return"";var u=flattenDeep(d.filter(function(i){if(Array.isArray(i)){var l=_slicedToArray(i,1),c=l[0];return c==="p"}return!1}).map(function(i){var l=flatten(i),c=_toArray(l),T=c[0],V=c.slice(1),o=V.filter(function(s){return typeof s=="string"&&!f.includes(s)}).join("");return[T,o]})).find(function(i){return i&&typeof i=="string"&&!f.includes(i)});return u}var H=function(){return L}},682582:function(ve,U,e){"use strict";e.d(U,{Z:function(){return V}});var k=e(97857),C=e.n(k),a=e(805574),h=e.n(a),w=e(294184),R=e.n(w),L=e(667294),S=e(73287),$=e(215570),y=e(578898),G=e(890887),j=L.createContext({}),P=L.createContext({message:{},notification:{},modal:{}}),z=P,H=e(9783),d=e.n(H),f=e(141035),u=function(s){var O=s.componentCls,Z=s.colorText,b=s.fontSize,n=s.lineHeight,ne=s.fontFamily;return d()({},O,{color:Z,fontSize:b,lineHeight:n,fontFamily:ne})},i=(0,f.Z)("App",function(o){return[u(o)]}),l=e(785893),c=function(){return L.useContext(z)},T=function(s){var O=s.prefixCls,Z=s.children,b=s.className,n=s.rootClassName,ne=s.message,pe=s.notification,Ee=s.style,fe=(0,L.useContext)(S.E_),te=fe.getPrefixCls,he=te("app",O),Oe=i(he),xe=h()(Oe,2),Pe=xe[0],Re=xe[1],De=R()(Re,he,b,n),X=(0,L.useContext)(j),ae=L.useMemo(function(){return{message:C()(C()({},X.message),ne),notification:C()(C()({},X.notification),pe)}},[ne,pe,X.message,X.notification]),Y=(0,$.Z)(ae.message),ge=h()(Y,2),ie=ge[0],Te=ge[1],Me=(0,G.Z)(ae.notification),Ce=h()(Me,2),ye=Ce[0],Ne=Ce[1],Ie=(0,y.Z)(),je=h()(Ie,2),Le=je[0],Ae=je[1],Ze=L.useMemo(function(){return{message:ie,notification:ye,modal:Le}},[ie,ye,Le]);return Pe((0,l.jsx)(z.Provider,{value:Ze,children:(0,l.jsx)(j.Provider,{value:ae,children:(0,l.jsxs)("div",{className:De,style:Ee,children:[Ae,Te,Ne,Z]})})}))};T.useApp=c;var V=T},991343:function(){},824654:function(){},752361:function(){},394616:function(){}}]);
