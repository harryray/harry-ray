(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(142),o=a(149),s=a(147);a(161);setTimeout(function(){var e,t,a;e=document.querySelectorAll(".loopVisibility"),t=e.length,a=0,setInterval(function(){a===t&&(a=0,e[t-1].classList.remove("visible")),e[a-1]&&e[a-1].classList.remove("visible"),e[a]&&e[a].classList.add("visible"),a++},1e3)},500),t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"home-splash"},r.a.createElement("div",null,r.a.createElement("h1",null,"Harry Ray"),r.a.createElement("h2",null,"Digital")),r.a.createElement("div",null,r.a.createElement("h2",{className:"loopVisibility visible"},"Doing"),r.a.createElement("h2",{className:"loopVisibility"},"Daring"),r.a.createElement("h2",{className:"loopVisibility"},"Development"))),r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(141),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(143),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},145:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(150),c=a.n(l),u=a(142);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(e,t,a){"use strict";var n=a(144),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(142),c=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",position:"fixed",width:"100%",zIndex:"100%"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(146),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(r.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("body",null,t),i.a.createElement("footer",null,i.a.createElement("a",{className:"margin-top-bottom",href:"https://www.gatsbyjs.org"},"Built with Gatsby")))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d},161:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-f3a9bc77147a04b107c5.js.map