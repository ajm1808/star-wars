(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(12),n(3)),l=n(4),i=n(6),u=n(5),h=(n(13),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={quote:""},e.handleFetchRequest=function(){fetch("https://www.programmableweb.com/api/star-wars-quotes-rest-api-v1").then((function(e){return e.json()})).then((function(t){return e.setState({quote:t.starWarsQuote})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handleFetchRequest()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("img",{className:"img",alt:"Maul",src:"https://cdn.collider.com/wp-content/uploads/2020/04/clone-wars-season-7-episode-10-images-maul-scaled.jpeg"}),o.a.createElement("h3",null,"a random star wars quote"),o.a.createElement("hr",null),o.a.createElement("h1",null,this.state.quote&&this.state.quote.toLowerCase()),o.a.createElement("button",{onClick:this.handleFetchRequest},"new quote"))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0bfbfa80.chunk.js.map