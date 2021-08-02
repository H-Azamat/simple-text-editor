(this["webpackJsonpreact-text-editor"]=this["webpackJsonpreact-text-editor"]||[]).push([[0],{27:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),i=r(11),a=r.n(i),l=(r(27),r(7)),s=r(1),o=r(0),u=r(13),d=r(4),b=function(e){return console.log(e.leaf),Object(d.jsx)("span",Object(l.a)(Object(l.a)({},e.attributes),{},{style:{fontWeight:e.leaf.bold?"bold":"normal",fontStyle:e.leaf.italic?"italic":"normal",textDecoration:e.leaf.underline?"underline":e.leaf.strikethrough?"line-through":"none"},children:e.children}))},j=function(e){return Object(d.jsx)("pre",Object(l.a)(Object(l.a)({},e.attributes),{},{children:Object(d.jsx)("code",{children:e.children})}))},g=function(e){return Object(d.jsx)("p",Object(l.a)(Object(l.a)({},e.attributes),{},{children:e.children}))},f={isBoldMarkActive:function(e){var t=o.a.nodes(e,{match:function(e){return!0===e.bold},universal:!0});return!!Object(s.a)(t,1)[0]},isItalicMarkActive:function(e){var t=o.a.nodes(e,{match:function(e){return!0===e.italic},universal:!0});return!!Object(s.a)(t,1)[0]},isUnderlineMarkActive:function(e){var t=o.a.nodes(e,{match:function(e){return!0===e.underline},universal:!0});return!!Object(s.a)(t,1)[0]},isStrikethroughMarkActive:function(e){var t=o.a.nodes(e,{match:function(e){return!0===e.strikethrough},universal:!0});return!!Object(s.a)(t,1)[0]},isCodeBlockActive:function(e){var t=o.a.nodes(e,{match:function(e){return"code"===e.type}});return!!Object(s.a)(t,1)[0]},toggleBoldMark:function(e){var t=f.isBoldMarkActive(e);o.g.setNodes(e,{bold:!t||null},{match:function(e){return o.f.isText(e)},split:!0})},toggleCodeBlock:function(e){var t=f.isCodeBlockActive(e);o.g.setNodes(e,{type:t?null:"code"},{match:function(t){return o.a.isBlock(e,t)}})},toggleItalicMark:function(e){var t=f.isItalicMarkActive(e);o.g.setNodes(e,{italic:!t||null},{match:function(e){return o.f.isText(e)},split:!0})},toggleUnderlineMark:function(e){var t=f.isUnderlineMarkActive(e);o.g.setNodes(e,{underline:!t||null},{match:function(e){return o.f.isText(e)},split:!0})},toggleStrikethroughMark:function(e){var t=f.isStrikethroughMarkActive(e);o.g.setNodes(e,{strikethrough:!t||null},{match:function(e){return o.f.isText(e)},split:!0})}},h=function(){var e=JSON.parse(localStorage.getItem("content")),t=Object(n.useMemo)((function(){return Object(u.c)(Object(o.h)())}),[]),r=Object(n.useState)(e||[{type:"paragraph",children:[{text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"}]}]),c=Object(s.a)(r,2),i=c[0],a=c[1],h=Object(n.useCallback)((function(e){switch(e.element.type){case"code":return Object(d.jsx)(j,Object(l.a)({},e));default:return Object(d.jsx)(g,Object(l.a)({},e))}}),[]),O=Object(n.useCallback)((function(e){return Object(d.jsx)(b,Object(l.a)({},e))}),[]);return Object(d.jsx)(u.b,{editor:t,value:i,onChange:function(e){var t=JSON.stringify(e);localStorage.setItem("content",t),a(e)},children:Object(d.jsx)(u.a,{renderElement:h,renderLeaf:O,onKeyDown:function(e){if(e.ctrlKey)switch(e.key){case"`":e.preventDefault(),f.toggleCodeBlock(t);break;case"b":e.preventDefault(),f.toggleBoldMark(t);break;case"i":e.preventDefault(),f.toggleItalicMark(t);break;case"u":e.preventDefault(),f.toggleUnderlineMark(t);break;case"k":e.preventDefault(),f.toggleStrikethroughMark(t)}}})})},O=r.p+"static/media/bold.d2bc3533.svg",v=r.p+"static/media/italic.4f288d37.svg",k=r.p+"static/media/code.60b542e5.svg",m=r.p+"static/media/strikethrough.ec1de9a8.svg",p=r.p+"static/media/underline.b204b55b.svg";var x=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"styleText",children:[Object(d.jsx)("img",{src:O,alt:"bold",title:"Ctrl + B"}),Object(d.jsx)("img",{src:v,alt:"italic",title:"Ctrl + I"}),Object(d.jsx)("img",{src:p,alt:"underline",title:"Ctrl + U"}),Object(d.jsx)("img",{src:m,alt:"strikeThrough",title:"Ctrl + K"}),Object(d.jsx)("img",{src:k,alt:"code",title:"Ctrl + `"})]}),Object(d.jsx)("div",{className:"text",children:Object(d.jsx)(h,{})})]})})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.34a337b5.chunk.js.map