(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),c=(n(103),n(60)),s=n.n(c),i=n(82),u=n(83),m=n(84),p=n(94),E=n(85),h=n(95),d=n(172),f=n(171),b=n(168),g=n(31),v=n(14),w=n(169),y=n(170),k=n(10),C=(n(105),d.a.Header),_=d.a.Footer,j=d.a.Content,B=f.a.Step,O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},n._getBusLoc=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,console.log(t),n.setState({buses:t});case 5:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("/getBusLoc").then(function(e){return e.json()}).then(function(e){return e.bus_array}).catch(function(e){return console.log(e)})},n._renderBusData=function(){return console.log(n.state),n.state.buses.map(function(e){return console.log(e),l.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},l.a.createElement(b.a,{title:e.bus_number,bordered:!1,style:{width:700}},l.a.createElement(g.a,null,l.a.createElement(v.a,{span:6,push:1},l.a.createElement("p",null,e.name," "),l.a.createElement("p",null,e.is_operating),l.a.createElement("p",null,e.lat),l.a.createElement("p",null,e.lng)),l.a.createElement(v.a,{span:4,push:4},l.a.createElement(f.a,{progressDot:!0,direction:"vertical",current:1},l.a.createElement(B,{title:"\uc678\ub300\uc0ac\uac70\ub9ac"}),l.a.createElement(B,{title:"\ubaa8\ud604\uc9c0\uc11d\ubb18"}),l.a.createElement(B,{title:"\uc678\ub300\uae30\uc219\uc0ac"}),l.a.createElement(B,{title:"\uc678\ub300\ub3c4\uc11c\uad00"}),l.a.createElement(B,{title:"\ud559\uc0dd\ud68c\uad00"}))))))})},n.showMenu=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("DId Mount"),this._getBusLoc()}},{key:"render",value:function(){var e=this.state.buses;return l.a.createElement(d.a,null,l.a.createElement(C,null,l.a.createElement(w.a,{type:"primary",onClick:this.showMenu},"\ub354\ubcf4\uae30")),l.a.createElement(y.a,{title:"\ub354\ubcf4\uae30",placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible},l.a.createElement("p",null,"\uc154\ud2c01"),l.a.createElement("p",null,"\uc154\ud2c02"),l.a.createElement("p",null,"\uc154\ud2c03")),l.a.createElement(j,null,e?this._renderBusData():l.a.createElement(k.a,{type:"sync",spin:!0})),l.a.createElement(_,null,"Footer"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(166)}},[[98,1,2]]]);
//# sourceMappingURL=main.7693bd60.chunk.js.map