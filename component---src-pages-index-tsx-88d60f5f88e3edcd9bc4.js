(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],u=e[i];(a?-1!==t.indexOf(i):t(i,u,e))&&(r[i]=u)}return r}},2203:function(e,t,r){"use strict";var n=r(8416),a=r(7424),o=r(861);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(8936),s=r(7091),l=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,e).includes(e.arrayFormatSeparator);r=o?m(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,u=i(e.split("&"));try{for(u.s();!(o=u.n()).done;){var c=o.value;if(""!==c){var s=l(t.decode?c.replace(/\+/g," "):c,"="),f=a(s,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:m(g,t),r(m(p,t),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[",a,"]"].join("")]:[[g(t,e),"[",g(a,e),"]=",g(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[]"].join("")]:[[g(t,e),"[]=",g(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),":list="].join("")]:[[g(t,e),":list=",g(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,e),t,g(a,e)].join("")]:[[n,g(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(t,e)]:[[g(t,e),"=",g(n,e)].join("")])}}}}(t),a={},i=0,u=Object.keys(e);i<u.length;i++){var c=u[i];r(c)||(a[c]=e[c])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?g(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":a.reduce(n(r),[]).join("&"):g(r,t)+"="+g(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),u=Object.assign(i,e.query),c=t.stringify(u,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[p]?g(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(c).concat(s)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=t.parseUrl(e,a),i=o.url,u=o.query,c=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:c},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},5442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(7294);var a=r(6771),o=r(1597),i=r(3431),u=["active"];var c=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"w49h2q",styles:"display:flex;flex-wrap:wrap;width:1080px;margin:0 auto;padding:40px 20px 0;background-color:white;border-radius:10px 10px 0 0;border-bottom:1px solid black;@media (max-width: 1096px){width:100%;}@media (max-width: 768px){padding:20px 20px 0;}"}),s=(0,a.Z)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,u);return(0,i.tZ)(o.rU,t)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),l=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,i.tZ)(c,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,i.tZ)(s,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},f=r(7059);var p=(0,a.Z)(f.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),d=function(e){var t=e.profileImage;return(0,i.tZ)(p,{image:t,alt:"Profile Image"})};var g=(0,a.Z)("div",{target:"e160b013"})({name:"15wqemn",styles:"width:100%;color:#ffffff"}),m=(0,a.Z)("div",{target:"e160b012"})({name:"s50k2d",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:1080px;height:400px;margin:50px auto 0;padding:0 20px;@media (max-width: 1096px){width:100%;}@media (max-width: 768px){height:300px;}"}),y=(0,a.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),x=(0,a.Z)("div",{target:"e160b010"})({name:"1hli1vb",styles:"margin-top:10px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),v=function(e){var t=e.profileImage;return(0,i.tZ)(g,null,(0,i.tZ)(m,null,(0,i.tZ)(d,{profileImage:t}),(0,i.tZ)("div",null,(0,i.tZ)(y,null,"개발하는 개발자"),(0,i.tZ)(x,null,"김사람"))))},b=r(7462);var h=(0,a.Z)(o.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),w=(0,a.Z)(f.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),k=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),j=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),Z=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),O=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),S=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),F=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail.childImageSharp.gatsbyImageData,u=e.link;return(0,i.tZ)(h,{to:u},(0,i.tZ)(w,{image:o,alt:"Post Item Image"}),(0,i.tZ)(k,null,(0,i.tZ)(j,null,t),(0,i.tZ)(Z,null,r),(0,i.tZ)(I,null,n.map((function(e){return(0,i.tZ)(O,{key:e},e)}))),(0,i.tZ)(S,null,a)))},A=function(e,t){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],u=o[1],c=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(u((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[e]),(0,n.useEffect)((function(){10*i>=c.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:c.slice(0,10*i)}};var E=(0,a.Z)("div",{target:"es8e92y0"})({name:"lhs5wx",styles:"display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;width:1080px;margin:0 auto;padding:72px 20px;background-color:white;border-radius:0 0 10px 10px;@media (max-width: 1096px){grid-template-columns:1fr 1fr;width:100%;}@media (max-width: 768px){grid-template-columns:1fr;padding:48px 20px;}"}),C=function(e){var t=e.selectedCategory,r=e.posts,n=A(t,r),a=n.containerRef,o=n.postList;return(0,i.tZ)(E,{ref:a},o.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return(0,i.tZ)(F,(0,b.Z)({},a,{link:n,key:r}))})))},U=r(2203),R=r(9821),N=r(7614),_=function(e){var t=e.location.search,r=e.data,a=r.site.siteMetadata,o=a.title,u=a.description,c=a.siteUrl,s=r.allMarkdownRemark.edges,f=r.file,p=f.childImageSharp.gatsbyImageData,d=f.publicURL,g=U.parse(t),m="string"==typeof g.category&&g.category?g.category:"All",y=(0,n.useMemo)((function(){return s.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,i.tZ)(R.Z,{title:o,description:u,url:c,image:d},(0,i.tZ)(N.Z,null),(0,i.tZ)(v,{profileImage:p}),(0,i.tZ)(l,{selectedCategory:m,categoryList:y}),(0,i.tZ)(C,{selectedCategory:m,posts:s}))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),a=r(9498),o=r(6116),i=r(2281);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-88d60f5f88e3edcd9bc4.js.map