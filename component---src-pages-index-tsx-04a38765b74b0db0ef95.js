(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),l=0;l<u.length;l++){var c=u[l];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=r(8936),c=r(7091),s=r(4734),p=r(8616),f=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?l(t):encodeURIComponent(t):t}function g(t,e){return e.decode?c(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&g(r,t).includes(t.arrayFormatSeparator);r=a?g(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)})):null===r?r:g(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?g(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var l=a.value;if(""!==l){var c=s(e.decode?l.replace(/\+/g," "):l,"="),p=o(c,2),f=p[0],m=p[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:g(m,e),r(g(f,e),m,n)}}}catch(O){u.e(O)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var b=v[x],w=n[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=h(w[Z],e)}else n[b]=h(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=b,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[",o,"]"].join("")]:[[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[]"].join("")]:[[m(e,t),"[]=",m(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),":list="].join("")]:[[m(e,t),":list=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(e,t)]:[[m(e,t),"=",m(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var l=u[i];r(l)||(o[l]=t[l])}var c=Object.keys(o);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var o=t[r];return void 0===o?"":null===o?m(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?m(r,e)+"[]":o.reduce(n(r),[]).join("&"):m(r,e)+"="+m(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=s(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var o=x(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),l=e.stringify(u,r);l&&(l="?".concat(l));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[f]?m(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(l).concat(c)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,l=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:p(u,r),fragmentIdentifier:l},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},1046:function(t,e,r){"use strict";r.d(e,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function l(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return n.createElement(s,i({attr:i({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var r,o=t.attr,a=t.size,l=t.title,c=u(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,c,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},421:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return $}});var n=r(7294);var o=r(1008),a=r(1597),i=r(3431),u=["active"];var l=(0,o.Z)("div",{target:"e1kn8q5k1"})({name:"1swdmny",styles:"display:flex;flex-wrap:wrap;width:1080px;margin:0 auto;padding:40px 20px 0;background-color:white;border-radius:10px 10px 0 0;border-bottom:1px solid rgba(0, 0, 0, 0.3);@media (max-width: 1096px){width:100%;}@media (max-width: 768px){padding:20px 20px 0;}"}),c=(0,o.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,u);return(0,i.tZ)(a.Link,e)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),s=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(l,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(c,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},p=r(6296);var f=(0,o.Z)(p.G,{target:"e1n1u3tj0"})({name:"1wvezx9",styles:"width:120px;height:120px;border-radius:50%;margin-right:20px;@media (max-width: 768px){width:80px;height:80px;margin-right:10px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(f,{image:e,alt:"Profile Image"})},m=r(1046);function g(t){return(0,m.w_)({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(t)}var y=r(9295);var x=(0,o.Z)("div",{target:"e160b014"})({name:"15wqemn",styles:"width:100%;color:#ffffff"}),v=(0,o.Z)("div",{target:"e160b013"})({name:"14nfel5",styles:"position:relative;display:flex;align-items:center;width:1080px;height:300px;margin:50px auto 0;padding:0 20px;@media (max-width: 1096px){width:100%;}@media (max-width: 768px){height:200px;}"}),h=(0,o.Z)("div",{target:"e160b012"})({name:"feyd3m",styles:"font-size:22px;font-weight:400;@media (max-width: 768px){font-size:16px;}"}),b=(0,o.Z)("div",{target:"e160b011"})({name:"1my3akl",styles:"font-size:35px;font-weight:500;@media (max-width: 768px){font-size:25px;}"}),w=(0,o.Z)("div",{target:"e160b010"})({name:"1pjulwk",styles:"position:absolute;right:20px;font-size:50px;width:120px;display:flex;justify-content:space-between;align-items:center;@media (max-width: 768px){font-size:40px;width:90px;}"}),k=function(t){var e=t.profileImage;return(0,i.tZ)(x,null,(0,i.tZ)(v,null,(0,i.tZ)(d,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(h,null,"개발하는 개발자"),(0,i.tZ)(b,null,"김사람")),(0,i.tZ)(w,null,(0,i.tZ)(a.Link,{to:"https://github.com/saramkim"},(0,i.tZ)(y.w4O,null)),(0,i.tZ)(a.Link,{to:"https://github.com/saramkim"},(0,i.tZ)(g,null)))))},j=r(7462);var Z=(0,o.Z)(a.Link,{target:"e1eg5kak7"})({name:"11xyx0k",styles:"display:flex;flex-direction:column;border-radius:10px;transition:0.3s box-shadow;cursor:pointer;background-color:rgba(0, 0, 0, 0.1);box-shadow:0 0 10px rgba(0, 0, 0, 0.15);&:hover{box-shadow:0 0 12px rgba(0, 0, 0, 0.3);}"}),O=(0,o.Z)(p.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),I=(0,o.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),S=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"im9rui",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:24px;font-weight:700"}),A=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),E=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),_=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"193lpyr",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:500;color:white"}),C=(0,o.Z)("div",{target:"e1eg5kak0"})({name:"13y9v9k",styles:"display:-webkit-box;overflow:hidden;margin:auto 0;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),F=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,u=t.link;return(0,i.tZ)(Z,{to:u},(0,i.tZ)(O,{image:a,alt:"Post Item Image"}),(0,i.tZ)(I,null,(0,i.tZ)(S,null,e),(0,i.tZ)(A,null,r),(0,i.tZ)(E,null,n.map((function(t){return(0,i.tZ)(_,{key:t},t)}))),(0,i.tZ)(C,null,o)))},N=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useState)(1),i=a[0],u=a[1],l=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){10*i>=l.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:l.slice(0,10*i)}};var z=(0,o.Z)("div",{target:"es8e92y0"})({name:"11neg50",styles:"display:grid;grid-template-columns:repeat(3, calc(1000px / 3));grid-gap:20px;width:1080px;margin:0 auto;padding:72px 20px;background-color:white;border-radius:0 0 10px 10px;@media (max-width: 1096px){grid-template-columns:1fr 1fr;width:100%;}@media (max-width: 768px){grid-template-columns:1fr;padding:48px 20px;}"}),M=function(t){var e=t.selectedCategory,r=t.posts,n=N(e,r),o=n.containerRef,a=n.postList;return(0,i.tZ)(z,{ref:o},a.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,o=e.frontmatter;return(0,i.tZ)(F,(0,j.Z)({},o,{link:n,key:r}))})))},R=r(2203),U=r(7196),L=r(271),$=function(t){var e=t.location.search,r=t.data,o=r.site.siteMetadata,a=o.title,u=o.description,l=o.siteUrl,c=r.allMarkdownRemark.edges,p=r.file,f=p.childImageSharp.gatsbyImageData,d=p.publicURL,m=R.parse(e),g="string"==typeof m.category&&m.category?m.category:"All",y=(0,n.useMemo)((function(){return c.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(U.Z,{title:a,description:u,url:l,image:d},(0,i.tZ)(L.Z,null),(0,i.tZ)(k,{profileImage:f}),(0,i.tZ)(s,{selectedCategory:g,categoryList:y}),(0,i.tZ)(M,{selectedCategory:g,posts:c}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-04a38765b74b0db0ef95.js.map