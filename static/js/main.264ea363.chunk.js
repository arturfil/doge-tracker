(this.webpackJsonpdogecoin=this.webpackJsonpdogecoin||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},71:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(12),r=n.n(c),s=(n(41),n.p,n(42),n(33)),d=n(5),j=n(35),l=n(82),o=n(32),u=n.n(o),h=n(77),O=n(78),b=n(83),x=n(79),p=n(80),y=n(81),g=n(2),m=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(h.a,{style:{backgroundColor:"rgb(15, 11, 34)",color:"lightgrey"},dark:!0,expand:"md",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(O.a,{href:"/",children:Object(g.jsx)("img",{style:{width:"80px",height:"auto"},src:"./img/test.png"})}),Object(g.jsx)(b.a,{navbar:!0,children:Object(g.jsx)(x.a,{className:"mr-auto",navbar:!0,children:Object(g.jsx)(p.a,{children:Object(g.jsx)(y.a,{style:{color:"white"},href:"/components/",children:Object(g.jsx)("h4",{children:"DogeCoin Tracker"})})})})})]})})})},q=(n(71),function(){var t=Object(i.useState)(0),e=Object(j.a)(t,2),n=e[0],a=e[1];Object(i.useEffect)((function(){u.a.get("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd").then((function(t){try{a(t.data.dogecoin.usd)}catch(e){console.log(e)}}))}),[]);var c={color:"green"},r={color:"red"};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m,{}),Object(g.jsxs)("div",{className:"container mt-5",style:{textAlign:"left"},children:[Object(g.jsx)("h2",{children:"DOGE COIN Tracker"}),Object(g.jsxs)("h2",{children:["Price is $",n," "]}),Object(g.jsxs)(l.a,{className:"mt-5 resp-table",style:{color:"white"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Entity"}),Object(g.jsx)("th",{children:"Asset"}),Object(g.jsx)("th",{children:"Price p/u"}),Object(g.jsx)("th",{children:"Qty"}),Object(g.jsx)("th",{children:"Initial Invst."}),Object(g.jsx)("th",{children:"Current Capital"}),Object(g.jsx)("th",{children:"Capital Gain"}),Object(g.jsx)("th",{children:"Cap Gain %"}),Object(g.jsx)("th",{children:"Total Gain %"}),Object(g.jsx)("th",{children:"Agent"})]})}),Object(g.jsx)("tbody",{children:[{id:11,name:"Mario",asset:"DOGE",price:.05267,quantity:1893,agent:"Arturo"},{id:12,name:"Kevin",asset:"DOGE",price:.050588,quantity:1980,agent:"Arturo"},{id:32,name:"Kevin",asset:"DOGE",price:.174706,quantity:572,agent:"Kevin"},{id:13,name:"Tapia",asset:"DOGE",price:.04423,quantity:1131,agent:"Arturo"},{id:14,name:"Arturo",asset:"DOGE",price:.05132,quantity:1948,agent:"Arturo"},{id:15,name:"Arturo",asset:"DOGE",price:.052224,quantity:1901,agent:"Arturo"},{id:16,name:"Andres",asset:"DOGE",price:.072,quantity:2083,agent:"Arturo"},{id:19,name:"Cachi",asset:"DOGE",price:.047809,quantity:1045,agent:"Kevin"},{id:20,name:"Cachi",asset:"DOGE",price:.052935,quantity:944,agent:"Kevin"},{id:21,name:"Pelos",asset:"DOGE",price:.070492,quantity:1419,agent:"Kevin"},{id:31,name:"Pelos",asset:"DOGE",price:.173736,quantity:575,agent:"Kevin"},{id:22,name:"Nano",asset:"DOGE",price:.132702,quantity:753,agent:"Kevin"},{id:24,name:"Vladimir",asset:"DOGE",price:.170859,quantity:585,agent:"Kevin"},{id:23,name:"Jake",asset:"DOGE",price:.197966,quantity:761,agent:"Kevin"},{id:25,name:"Paulette",asset:"DOGE",price:.177449,quantity:281,agent:"Arturo"}].map((function(t,e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{className:"box",children:[Object(g.jsx)("td",{"data-col":"User",children:Object(g.jsx)("strong",{children:t.name})}),Object(g.jsx)("td",{"data-col":"Asset",children:t.asset}),Object(g.jsx)("td",{"data-col":"Price p/u",children:t.price}),Object(g.jsx)("td",{"data-col":"Qty",children:t.quantity}),Object(g.jsxs)("td",{"data-col":"Initial Invst.",children:["$",(t.price*t.quantity).toFixed(2)]}),Object(g.jsxs)("td",{"data-col":"Current Cap.",children:["$",(n*t.quantity).toFixed(2)]}),Object(g.jsxs)("td",{"data-col":"Cap. Gain",style:n*t.quantity>t.price*t.quantity?c:r,children:["$",((n*t.quantity).toFixed(2)-t.price*t.quantity).toFixed(2)]}),Object(g.jsxs)("td",{"data-col":"Cap Gain %",style:(n*t.quantity-t.price*t.quantity)/(n*t.quantity)>0?c:r,children:["% ",((n*t.quantity-t.price*t.quantity)/(n*t.quantity)*100).toFixed(2)]}),Object(g.jsxs)("td",{"data-col":"Total Gain %",style:(n*t.quantity-t.price*t.quantity)/(n*t.quantity)>0?c:r,children:["% ",((n*t.quantity-t.price*t.quantity)/(t.price*t.quantity)*100).toFixed(2)]}),Object(g.jsx)("td",{"data-col":"Agent",children:t.agent})]},e)})}))})]})]})]})});var v=function(){return Object(g.jsx)(s.a,{children:Object(g.jsx)(d.a,{to:"/",exact:!0,component:q})})};n(75);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.264ea363.chunk.js.map