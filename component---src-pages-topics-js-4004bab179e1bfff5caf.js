(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qswN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));t("OG14");var a=t("Qyje"),i=t.n(a);function r(e,n){var t=i.a.parse(e.search,{ignoreQueryPrefix:!0}).lang||"en";return{title:{en:"Where is the patient?",es:"¿Dónde está el paciente?",zh:"病人在哪裡",ar:"أين المريض؟"},preparing:{en:"At home, preparing",es:"En casa, preparando",zh:"在家裡，準備中",ar:"يستعد في المنزل"},inHospital:{en:"In the hospital",es:"En el hospital",zh:"在醫院",ar:"في المستشفى"},recovering:{en:"At home, recovering",es:"En casa, recuperandose",zh:"在家裡，恢復中",ar:"يتعافى في المنزل"},justBrowsing:{en:"I don’t know, I’m just browsing…",es:"No se, solo estoy navegando…",zh:"不知道，只是瀏覽一下",ar:"…لا أعرف ، أنا فقط أتصفح"},"tags.adult":{en:"Adult",es:"Adulto",zh:"成人",ar:"البالغين"},"tags.pediatric":{en:"Pediatric",es:"Pediátrico",zh:"兒科",ar:"الأطفال"},"tags.pregnancy":{en:"Pregnancy",es:"Embarazo",zh:"懷孕",ar:"الحوامل"}}[n][t]}},zboI:function(e,n,t){"use strict";t.r(n),t.d(n,"q",(function(){return k}));t("91GP"),t("dRSK"),t("Vd3H"),t("Z2Ku"),t("L9s1"),t("OG14");var a=t("8OQS"),i=t.n(a),r=(t("f3/d"),t("PJYZ")),o=t.n(r),l=t("VbXa"),c=t.n(l),s=t("17x9"),d=t.n(s),p=t("Qyje"),u=t.n(p),g=t("q1tI"),h=t.n(g),m=t("vOnD"),y=t("HKey"),f=t("Wbzz"),b=t("Bl7J"),v=t("qswN"),w=m.a.ul.withConfig({displayName:"topics__Ul",componentId:"ua5ob2-0"})(["list-style-type:none;margin:0;padding:0;li{display:flex;justify-content:space-between;align-items:center;margin:0 0 1rem;}li a{text-decoration:none;}li .isvg{min-width:2.5rem;text-align:center;}li svg{height:2rem;width:auto;opacity:0.5;path{fill:#333;}}.subtitle{opacity:0.5;}"]),E=m.a.div.withConfig({displayName:"topics__Filters",componentId:"ua5ob2-1"})(["display:flex;margin-bottom:1rem;label{margin-right:0.25rem;}"]),x=m.a.label.withConfig({displayName:"topics__Label",componentId:"ua5ob2-2"})(["border:1px solid #ccc;padding:0.25rem;border-radius:4px;display:flex;align-items:baseline;input{margin-right:0.5rem;}"]),z=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={adult:!0,pediatric:!0,pregnancy:!0},t.onToggle=t.onToggle.bind(o()(t)),t}c()(n,e);var t=n.prototype;return t.onToggle=function(e){var n;this.setState(((n={})[e.target.name]=e.target.checked,n))},t.render=function(){var e=this.props,n=e.data,t=e.location,a=i()(e,["data","location"]),r=this.state,o=r.adult,l=r.pregnancy,c=r.pediatric;var s={en:"en-US",es:"es-419",zh:"zh-Hant-TW",ar:"ar-SA"};return h.a.createElement(b.a,Object.assign({location:t},a),h.a.createElement(E,null,h.a.createElement(x,{htmlFor:"adult"},h.a.createElement("input",{checked:o,type:"checkbox",name:"adult",id:"adult",value:"adult",onChange:this.onToggle}),Object(v.a)(t,"tags.adult")),h.a.createElement(x,{htmlFor:"pediatric"},h.a.createElement("input",{checked:c,type:"checkbox",name:"pediatric",id:"pediatric",value:"pediatric",onChange:this.onToggle}),Object(v.a)(t,"tags.pediatric")),h.a.createElement(x,{htmlFor:"pregnancy"},h.a.createElement("input",{checked:l,type:"checkbox",name:"pregnancy",id:"pregnancy",value:"pregnancy",onChange:this.onToggle}),Object(v.a)(t,"tags.pregnancy"))),h.a.createElement(w,null,n.allContentfulTopic.edges.filter((function(e){var n=new URLSearchParams(t.search);return"all"===n.get("category")||e.node.categories.includes(n.get("category"))})).filter((function(e){var n=new URLSearchParams(t.search);return n.has("lang")?e.node.node_locale===s[n.get("lang")]:"en-US"===e.node.node_locale})).filter((function(e){return!!e.node.tags.includes(o?"adult":void 0)||(!!e.node.tags.includes(c?"pediatric":void 0)||!!e.node.tags.includes(l?"pregnancy":void 0))})).sort((function(e,n){var t=e.node.title.toLowerCase(),a=n.node.title.toLowerCase();return t<a?-1:t>a?1:0})).map((function(e,a){return h.a.createElement("li",{key:e.node.id},h.a.createElement("span",null,h.a.createElement(f.Link,{to:"/topic/"+e.node.id+u.a.stringify({lang:u.a.parse(t.search,{ignoreQueryPrefix:!0}).lang},{addQueryPrefix:!0})},e.node.title),h.a.createElement("br",null),h.a.createElement("span",{className:"subtitle"},e.node.subtitle)),e.node.icon?h.a.createElement(y.a,{src:n.allFile.edges.find((function(n){return n.node.name===e.node.icon})).node.publicURL}):null)}),this)))},n}(h.a.Component),k="130306319";z.propTypes={data:d.a.object.isRequired,location:d.a.object.isRequired},n.default=z}}]);
//# sourceMappingURL=component---src-pages-topics-js-4004bab179e1bfff5caf.js.map