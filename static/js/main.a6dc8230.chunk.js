(this["webpackJsonpmy-gomoku"]=this["webpackJsonpmy-gomoku"]||[]).push([[0],{10:function(t,n,r){},12:function(t,n,r){"use strict";r.r(n),r.d(n,"calculateWinner",(function(){return j}));var e=r(1),c=r(4),a=r.n(c),o=(r(9),r(2)),u=(r(10),r(0));function i(t){return Object(u.jsx)("button",{className:"square",onClick:t.onClick,children:t.value})}function s(){var t=Object(e.useState)(Array(19).fill(Array(19).fill(null))),n=Object(o.a)(t,2),r=n[0],c=n[1],a=Object(e.useState)(!0),s=Object(o.a)(a,2),l=s[0],b=s[1],f=Object(e.useState)({x:0,y:0}),d=Object(o.a)(f,2),v=d[0],O=d[1];function x(t,n){return Object(u.jsx)(i,{value:r[t][n],onClick:function(){return function(t,n){var e=JSON.parse(JSON.stringify(r));j(v.y,v.x,e,e[v.y][v.x])||null!==e[t][n]||(e[t][n]=l?"\u26ab":"\u26aa",O({x:n,y:t}),c(e),b(!l))}(t,n)}})}var m,y=j(v.y,v.x,r,r[v.y][v.x]);return m=y?"Winner: ".concat(y):"Next player: "+(l?"\u26ab":"\u26aa"),Object(u.jsxs)("div",{children:[r.map((function(t,n){return Object(u.jsx)("div",{className:"board-row",children:r.map((function(t,r){return x(n,r)}))},n)})),Object(u.jsxs)("div",{className:"status",children:[Object(u.jsx)("div",{children:m}),Object(u.jsx)("button",{type:"button",class:"btn btn-dark",value:"reload",onClick:function(){return window.location.reload()},children:"Restart"})]})]})}var l=function(){return Object(u.jsxs)("div",{className:"gameBoard",children:[Object(u.jsx)("h1",{children:"Gomoku"}),Object(u.jsx)(s,{})]})};function j(t,n,r,e){for(var c=0,a=0,o=0,u=0,i=n-1;i>=0&&r[t][i]===e;i--)c++;for(var s=n+1;s<19&&r[t][s]===e;s++)c++;for(var l=t-1;l>=0&&r[l][n]===e;l--)a++;for(var j=t+1;j<19&&r[j][n]===e;j++)a++;for(var b=n-1,f=t-1;b&&f>=0&&!(b<0||f<0||r[f][b]!==e);b--,f--)o++;for(var d=n+1,v=t+1;d&&v<19&&!(d>=19||v>=19||r[v][d]!==e);d++,v++)o++;for(var O=n,x=t;O>=0&&x<19&&!(O<0||x>=19||r[x][O]!==e);O--,x++)u++;for(var m=n,y=t;m<19&&y>=0&&!(m>=19||y<0||r[y][m]!==e);m++,y--)u++;return c>=4||a>=4||o>=4||u>=6?e:null}a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))},9:function(t,n,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.a6dc8230.chunk.js.map