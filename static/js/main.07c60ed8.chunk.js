(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__1JQeB",image:"recipe_image__1Lu7Q"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(1)),l=a(2),s=a.n(l),u=a(6),p=a(3),m=a.n(p),h=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:m.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,c.a.createElement("b",null,"Calories: ",a.toFixed(1))),c.a.createElement("img",{className:m.a.image,src:n,alt:t}))},f=(a(14),function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("bc02c037","&app_key=").concat("3ae9b419772da4c48a92bf013b68aae1"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c.hits||[]);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],u=l[1],p=Object(n.useState)("Veg Paneer"),m=Object(o.a)(p,2),d=m[0],b=m[1];Object(n.useEffect)((function(){f(d,r)}),[d]);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{style:{paddingTop:"20px"}},c.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to Saloni Patel's Recipe House!")),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(s),u("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:s,placeholder:"Which dish do you want to prepare?",onChange:function(e){u(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.length>0?a.map((function(e){return c.a.createElement(h,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})):c.a.createElement("p",null,"No recipes found.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.07c60ed8.chunk.js.map