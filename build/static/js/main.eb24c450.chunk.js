(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i(1),c=i.n(r),n=i(3),d=i.n(n),s=(i(14),i(6)),o=i(4),l=i(5),m=i(8),p=i(7),h=(i(15),i(16),function(e){return Object(a.jsxs)("div",{className:"WinMessage",children:[Object(a.jsx)("p",{children:"Congrats you win!"}),Object(a.jsxs)("p",{children:["Final Score: ",e.score," moves"]}),Object(a.jsx)("button",{onClick:e.click,children:"Play Again"})]})}),v=i.p+"static/media/banana.6e62b191.png",f=i.p+"static/media/coconut.7b1dec98.png",u=i.p+"static/media/palmtree.87a2fc16.png",b=i.p+"static/media/rum.35a0516c.png",g=i.p+"static/media/shell.7a7cb354.png",j=i.p+"static/media/wave.f78e2243.png",y=i.p+"static/media/pineapple.9f607fec.png",k=i.p+"static/media/anchor.15a8b8da.png",C=function(e){Object(m.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(o.a)(this,i);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cardsArr:[{name:"card1",id:1,isClicked:!1,type:"a",removed:!1,icon:v},{name:"card2",id:2,isClicked:!1,type:"b",removed:!1,icon:f},{name:"card3",id:3,isClicked:!1,type:"c",removed:!1,icon:u},{name:"card4",id:4,isClicked:!1,type:"d",removed:!1,icon:b},{name:"card5",id:5,isClicked:!1,type:"e",removed:!1,icon:g},{name:"card6",id:6,isClicked:!1,type:"f",removed:!1,icon:j},{name:"card7",id:7,isClicked:!1,type:"g",removed:!1,icon:y},{name:"card8",id:8,isClicked:!1,type:"h",removed:!1,icon:k},{name:"card9",id:9,isClicked:!1,type:"a",removed:!1,icon:v},{name:"card10",id:10,isClicked:!1,type:"b",removed:!1,icon:f},{name:"card11",id:11,isClicked:!1,type:"c",removed:!1,icon:u},{name:"card12",id:12,isClicked:!1,type:"d",removed:!1,icon:b},{name:"card13",id:13,isClicked:!1,type:"e",removed:!1,icon:g},{name:"card14",id:14,isClicked:!1,type:"f",removed:!1,icon:j},{name:"card15",id:15,isClicked:!1,type:"g",removed:!1,icon:y},{name:"card16",id:16,isClicked:!1,type:"h",removed:!1,icon:k}],didWin:!1,moves:0},e.flipCardHandler=function(t){console.log(e.state.baseState);var i,a=Object(s.a)(e.state.cardsArr);a.forEach((function(e){e.id===t&&(i=e)}));var r=[];a.forEach((function(e,t){return!0===a[t].isClicked&&r.push(a[t]),r})),r.length<2&&(i.isClicked=!i.isClicked);var c=e.state.moves;c+=1,e.setState({cardsArr:a,moves:c});var n=e.state.cardsArr,d=[];n.forEach((function(e,t){return!0===n[t].isClicked&&d.push(n[t]),d})),console.log(d),2===d.length&&setTimeout((function(){d[0].type===d[1].type?(e.removeHandler(d[0].id,d[1].id),e.checkWinHandler()):e.setFalseHandler()}),1500)},e.removeHandler=function(t,i){var a=e.state.cardsArr;a.forEach((function(e,r){a[r].id===t&&(a[r].removed=!0,a[r].isClicked=!1),a[r].id===i&&(a[r].removed=!0,a[r].isClicked=!1)})),e.setState({cardsArr:a})},e.setFalseHandler=function(){var t=e.state.cardsArr;t.map((function(e,i){return t[i].isClicked=!1})),e.setState({cardsArr:t})},e.checkWinHandler=function(){for(var t=e.state.cardsArr,i=0,a=0;a<e.state.cardsArr.length;a++)t[a].removed&&i++;16===i&&e.setState({didWin:!0})},e.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[i],e[i]=a}return e.forEach((function(e,t){e.id=t+1})),e},e.restartGame=function(){window.location.reload()},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){document.title="Matching Game";var e=this.state.cardsArr;e=this.shuffleArray(e),this.setState({cardsArr:e})}},{key:"render",value:function(){var e=this,t={position:"relative",width:"100%",height:"100%",textAlign:"center",transition:"transform 1s",transformStyle:"preserve-3d",borderRadius:"20px",opacity:"1 !important"},i={position:"relative",width:"100%",height:"100%",textAlign:"center",transition:"opacity 1s ease-out",transformStyle:"preserve-3d",boxShadow:"0px 0px 10px 10px #79d279",borderRadius:"20px",opacity:"0"},r={position:"relative",width:"100%",height:"100%",textAlign:"center",transition:"transform 1s",transformStyle:"preserve-3d",transform:"rotateY(180deg)",borderRadius:"20px",opacity:"1"},c="";this.state.didWin&&(c=Object(a.jsx)(h,{score:this.state.moves,click:this.restartGame}));var n=this.state.cardsArr.map((function(c,n){return Object(a.jsx)("div",{className:"Ccard",name:c.name,id:c.id,children:Object(a.jsxs)("div",{onClick:function(){return e.flipCardHandler(c.id)},style:e.state.cardsArr[c.id-1].removed?i:e.state.cardsArr[c.id-1].isClicked?r:t,children:[Object(a.jsx)("div",{className:"card__face card__face--front"}),Object(a.jsx)("div",{className:"card__face card__face--back",children:Object(a.jsx)("img",{src:c.icon,alt:""})})]})},n)}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Matching Game"}),Object(a.jsx)("div",{className:"Cards",children:n}),Object(a.jsxs)("h2",{children:["Moves: ",this.state.moves]}),c]})}}]),i}(r.Component),x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),r(e),c(e),n(e)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.eb24c450.chunk.js.map