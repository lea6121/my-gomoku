(this["webpackJsonpmy-gomoku"]=this["webpackJsonpmy-gomoku"]||[]).push([[0],{10:function(n,e,r){},12:function(n,e,r){"use strict";r.r(e),r.d(e,"calculateWinner",(function(){return j}));var t=r(1),o=r(4),c=r.n(o),a=(r(9),r(2)),l=(r(10),r(0));function s(n){return Object(l.jsx)("button",{className:"square",onClick:n.onClick,children:n.value})}function u(){var n=Object(t.useState)(Array(19).fill(Array(19).fill(null))),e=Object(a.a)(n,2),r=e[0],o=e[1],c=Object(t.useState)(!0),u=Object(a.a)(c,2),i=u[0],b=u[1],f=Object(t.useState)({x:0,y:0}),d=Object(a.a)(f,2),v=d[0],x=d[1];function O(n,e){return Object(l.jsx)(s,{value:r[n][e],onClick:function(){return function(n,e){var t=JSON.parse(JSON.stringify(r));console.log("board:",r),console.log("y:",n,"x:",e),console.log("newBoard:",t),console.log("\u9019\u662f\u5916\u9762:",t[n][e]),j(v.y,v.x,t,t[v.y][v.x])||null!==t[n][e]?console.log("\u9019\u662f if:",t[n][e]):(t[n][e]=i?"\u26ab":"\u26aa",x({x:e,y:n}),o(t),b(!i))}(n,e)}})}var y,m=j(v.y,v.x,r,r[v.y][v.x]);return y=m?"Winner: ".concat(m):"Next player: "+(i?"\u26ab":"\u26aa"),Object(l.jsxs)("div",{children:[r.map((function(n,e){return Object(l.jsx)("div",{className:"board-row",children:r.map((function(n,r){return O(e,r)}))},e)})),Object(l.jsxs)("div",{className:"status",children:[Object(l.jsx)("div",{children:y}),Object(l.jsx)("button",{type:"button",class:"btn btn-dark",value:"\u91cd\u65b0\u6574\u7406",onClick:function(){return window.location.reload()},children:"restart"})]})]})}var i=function(){return Object(l.jsxs)("div",{className:"gameBoard",children:[Object(l.jsx)("h1",{children:"Gomoku"}),Object(l.jsx)(u,{})]})};function j(n,e,r,t){for(var o=0,c=0,a=0,l=0,s=e-1;s>=0&&r[n][s]===t;s--)o++;for(var u=e+1;u<19&&r[n][u]===t;u++)o++;for(var i=n-1;i>=0&&r[i][e]===t;i--)c++;for(var j=n+1;j<19&&r[j][e]===t;j++)c++;for(var b=e-1,f=n-1;b&&f>=0&&!(b<0||f<0||r[f][b]!==t);b--,f--)a++;for(var d=e+1,v=n+1;d&&v<19&&!(d>=19||v>=19||r[v][d]!==t);d++,v++)a++;for(var x=e,O=n;x>=0&&O<19&&!(x<0||O>=19||r[O][x]!==t);x--,O++)l++;for(var y=e,m=n;y<19&&m>=0&&!(y>=19||m<0||r[m][y]!==t);y++,m--)l++;return o>=4||c>=4||a>=4||l>=6?t:null}c.a.render(Object(l.jsx)(i,{}),document.getElementById("root"))},9:function(n,e,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.2ab3e1bd.chunk.js.map