System.register(["jimu-core","jimu-ui","jimu-core/react"],(function(e,t){var o={},n={},a={};return{setters:[function(e){o.css=e.css,o.jsx=e.jsx},function(e){n.Button=e.Button},function(e){a.useState=e.useState}],execute:function(){e((()=>{var e={9244:e=>{"use strict";e.exports=o},8972:e=>{"use strict";e.exports=a},4321:e=>{"use strict";e.exports=n}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,i),a.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{__set_webpack_public_path__:()=>a,default:()=>n});var e=i(9244),t=i(4321),o=i(8972);const n=n=>{const[a,i]=(0,o.useState)("whitesmoke"),r=e.css`
    background-color: ${a};
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 6px;
    padding: 10px;

    /* Selecciona los hijos con clase header */
    & .header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 4px;
      align-items: center;
    }

    & .ayto-img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
      padding: 6px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      background: #fff;
    }

    & .ayto-title {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      padding: 6px;
      margin: 0;
    }

    & .ayto-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 6px;
      padding: 6px;
    }

    & .ayto-info a {
      color: #0078d4;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    & .ayto-info a:hover {
      color: #005a9e;
      text-decoration: underline;
    }
  `;return(0,e.jsx)("div",{css:r},(0,e.jsx)("div",{className:"header"},(0,e.jsx)("img",{className:"ayto-img",src:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Plaza_de_la_Constitucion_Fuento_de_Cantos_Spain_22_09_2012.JPG",alt:"Ayuntamiento Fuente de Cantos"}),(0,e.jsx)("h1",{className:"ayto-title"},"Ayuntamiento de Fuente de Cantos")),(0,e.jsx)("div",{className:"ayto-info"},(0,e.jsx)("p",null,(0,e.jsx)("strong",null,"Tel\xe9fono: 924 50 02 11")),(0,e.jsx)("p",null,(0,e.jsx)("strong",null,"Direcci\xf3n: Pl. Constituci\xf3n, 1, 06240 Fuente de Cantos, Badajoz")),(0,e.jsx)("a",{href:"https://www.fuentedecantos.eu/",target:"_blank"},"P\xe1gina Web del Ayuntamiento")),(0,e.jsx)(t.Button,{onClick:()=>{i(n.theme.colors.danger)}},"Cambiar color de fondo"))};function a(e){i.p=e}})(),r})())}}}));