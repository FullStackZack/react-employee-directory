(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),s=c.n(r),a=c(13),l=c.n(a),i=(c(24),c(3));c(25);var j=function(e){return Object(n.jsx)("main",Object(i.a)({className:"wrapper"},e))},o=(c(26),c(14)),h=c(15),d=c(18),b=c(17),u=(c(27),c(16)),O=c.n(u),x=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},m=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[]},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"handleFilter",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return-1!==t.name.first.toLowerCase().indexOf(e.state.search.toLowerCase())}));return console.log(t),Object(n.jsx)("div",{children:Object(n.jsx)("table",{className:"table table-dark",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("h5",{children:"Employee Directory"})}),Object(n.jsx)("td",{}),Object(n.jsxs)("td",{children:[Object(n.jsx)("h5",{children:"Find your Employees"}),Object(n.jsx)("input",{type:"text",className:"text-center",placeholder:"Search by Name",value:this.state.search,onChange:this.handleFilter.bind(this)})]})]}),t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{alt:e.name.first,src:e.picture.large})}),Object(n.jsxs)("td",{children:[Object(n.jsxs)("h5",{children:[e.name.first," ",e.name.last]}),"Employee ID: ",e.id.value]}),Object(n.jsxs)("td",{class:"bio",children:[Object(n.jsx)("h5",{children:"Contact"}),Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-envelope",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})}),Object(n.jsx)("a",{href:"#",className:"link",children:e.email}),Object(n.jsx)("br",{}),Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-telephone",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})}),e.cell]})]},t)}))]})})})}}]),c}(s.a.Component);var v=function(e){return Object(n.jsx)("div",Object(i.a)({className:"row".concat(e.fluid?"-fluid":"")},e))};var f=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(n.jsx)("div",Object(i.a)({className:t},e))};var p=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(v,{children:[Object(n.jsx)(f,{size:"md-2"}),Object(n.jsx)(f,{size:"md-8",children:Object(n.jsx)(m,{})}),Object(n.jsx)(f,{size:"md-2"})]})})};var y=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(j,{children:Object(n.jsx)(p,{})})})};c(45);l.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6d2d21bd.chunk.js.map