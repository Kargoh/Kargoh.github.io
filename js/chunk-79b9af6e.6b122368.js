(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79b9af6e"],{"0ac4":function(t,e,c){},"243f":function(t,e,c){"use strict";c("0ac4")},"2b50":function(t,e,c){"use strict";c("81c0")},"4ec6":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=c("ed09"),r=(c("b0c0"),c("a4d3"),c("e01a"),c("56d7")),o={class:"products card mt-4"},i={class:"table m-0"},l=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"Image"),Object(n["f"])("th",{scope:"col"},"Name"),Object(n["f"])("th",{scope:"col"},"Price"),Object(n["f"])("th",{scope:"col"},"Description"),Object(n["f"])("th",{scope:"col"},"Action")])],-1),s=["src"],u=Object(n["f"])("button",{class:"btn btn-primary btn-sm me-2"},"Edit",-1),b=["onClick"],f={setup:function(t){var e=Object(r["useLoadProducts"])();return function(t,c){var a=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["e"])("div",o,[Object(n["f"])("table",i,[l,Object(n["f"])("tbody",null,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(Object(n["D"])(e),(function(t){var e=t.id,c=t.name,o=t.price,i=t.image,l=t.description;return Object(n["t"])(),Object(n["e"])("tr",{key:e},[Object(n["f"])("td",null,[Object(n["f"])("img",{src:i},null,8,s)]),Object(n["f"])("td",null,Object(n["C"])(c),1),Object(n["f"])("td",null,Object(n["C"])(o),1),Object(n["f"])("td",null,Object(n["C"])(l),1),Object(n["f"])("td",null,[Object(n["i"])(a,{to:"/admin/products/".concat(e)},{default:Object(n["G"])((function(){return[u]})),_:2},1032,["to"]),Object(n["f"])("button",{class:"btn btn-danger btn-sm",onClick:function(t){return Object(n["D"])(r["deleteProduct"])(e)}},"Delete",8,b)])])})),128))])])])}}};c("2b50");const d=f;var O=d,j=c("5530"),p=c("1da1"),m=(c("96cf"),c("2591")),v={class:"card card-body mt-4"},g=["onSubmit"],h={class:"form-group"},y=Object(n["f"])("label",null,"Name",-1),w={class:"form-group mt-3"},S=Object(n["f"])("label",null,"Price",-1),D={class:"form-group"},k=Object(n["f"])("label",{for:"product_image"},"Image",-1),x={class:"form-group d-flex"},C={class:"p-1"},P=["src"],E={class:"form-group mt-3"},H=Object(n["f"])("label",null,"Description",-1),I=["disabled"],R={setup:function(t){var e=Object(n["x"])({name:"",price:"",image:"",description:""}),c=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["createProduct"])(Object(j["a"])({},e));case 2:e.name="",e.price="",e.image="",e.description="";case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(c){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=c.target.files[0],a=m["a"].storage().ref("products/"+n.name),r=a.put(n),r.on("state_changed",(function(t){}),(function(t){}),(function(){r.snapshot.ref.getDownloadURL().then((function(t){e.image=t}))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(t,r){return Object(n["t"])(),Object(n["e"])("div",v,[Object(n["f"])("form",{onSubmit:Object(n["I"])(c,["prevent"])},[Object(n["f"])("div",h,[y,Object(n["H"])(Object(n["f"])("input",{"onUpdate:modelValue":r[0]||(r[0]=function(t){return Object(n["D"])(e).name=t}),class:"form-control",required:""},null,512),[[n["E"],Object(n["D"])(e).name]])]),Object(n["f"])("div",w,[S,Object(n["H"])(Object(n["f"])("input",{"onUpdate:modelValue":r[1]||(r[1]=function(t){return Object(n["D"])(e).price=t}),class:"form-control",required:""},null,512),[[n["E"],Object(n["D"])(e).price]])]),Object(n["f"])("div",D,[k,Object(n["f"])("input",{type:"file",onChange:a,class:"form-control"},null,32),Object(n["H"])(Object(n["f"])("input",{"onUpdate:modelValue":r[2]||(r[2]=function(t){return Object(n["D"])(e).image=t}),class:"form-control",type:"hidden"},null,512),[[n["E"],Object(n["D"])(e).image]])]),Object(n["f"])("div",x,[Object(n["f"])("div",C,[Object(n["f"])("img",{src:Object(n["D"])(e).image,alt:"",width:"80"},null,8,P)])]),Object(n["f"])("div",E,[H,Object(n["H"])(Object(n["f"])("textarea",{"onUpdate:modelValue":r[3]||(r[3]=function(t){return Object(n["D"])(e).description=t}),class:"form-control",placeholder:"Enter description here..."},null,512),[[n["E"],Object(n["D"])(e).description]])]),Object(n["f"])("button",{disabled:!Object(n["D"])(e).image,type:"submit",class:"btn btn-success mt-3"},"Create Product",8,I)],40,g)])}}};const U=R;var _=U,V={class:"products-page container"},L={class:"row"},q={class:"col-12"},A=Object(n["f"])("h1",null,"Products Page",-1),J={setup:function(t){return function(t,e){return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(a["a"]),Object(n["f"])("div",V,[Object(n["f"])("div",L,[Object(n["f"])("div",q,[A,Object(n["i"])(_),Object(n["i"])(O)])])])],64)}}};c("243f");const N=J;e["default"]=N},"7f5e":function(t,e,c){},"81c0":function(t,e,c){},"9c3f":function(t,e,c){t.exports=c.p+"img/logo-cooldown-gaming.1a438692.svg"},b0c0:function(t,e,c){var n=c("83ab"),a=c("5e77").EXISTS,r=c("e330"),o=c("9bf2").f,i=Function.prototype,l=r(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=r(s.exec),b="name";n&&!a&&o(i,b,{configurable:!0,get:function(){try{return u(s,l(this))[1]}catch(t){return""}}})},b4c5:function(t,e,c){"use strict";c("7f5e")},e01a:function(t,e,c){"use strict";var n=c("23e7"),a=c("83ab"),r=c("da84"),o=c("e330"),i=c("1a2d"),l=c("1626"),s=c("3a9b"),u=c("577e"),b=c("9bf2").f,f=c("e893"),d=r.Symbol,O=d&&d.prototype;if(a&&l(d)&&(!("description"in O)||void 0!==d().description)){var j={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=s(O,this)?new d(t):void 0===t?d():d(t);return""===t&&(j[e]=!0),e};f(p,d),p.prototype=O,O.constructor=p;var m="Symbol(test)"==String(d("test")),v=o(O.toString),g=o(O.valueOf),h=/^Symbol\((.*)\)[^)]+$/,y=o("".replace),w=o("".slice);b(O,"description",{configurable:!0,get:function(){var t=g(this),e=v(t);if(i(j,t))return"";var c=m?w(e,7,-1):y(e,h,"$1");return""===c?void 0:c}}),n({global:!0,forced:!0},{Symbol:p})}},ed09:function(t,e,c){"use strict";var n=c("7a23"),a=c("9c3f"),r=c.n(a),o=c("2591"),i=c("6c02"),l=function(t){return Object(n["w"])("data-v-1402e0a0"),t=t(),Object(n["u"])(),t},s={class:"navbar navbar-expand-lg navbar-light bg-light"},u=l((function(){return Object(n["f"])("a",{class:"navbar-brand",href:"/"},[Object(n["f"])("img",{src:r.a,height:"32px",width:"auto"})],-1)})),b=l((function(){return Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1)})),f=Object(n["g"])('<li class="nav-item active" data-v-1402e0a0><a class="nav-link" href="/" data-v-1402e0a0>Home</a></li><li class="nav-item" data-v-1402e0a0><a class="nav-link" href="/admin/products" data-v-1402e0a0>Products</a></li><li class="nav-item" data-v-1402e0a0><a class="nav-link" href="/admin/orders" data-v-1402e0a0>Orders</a></li>',3),d=l((function(){return Object(n["f"])("form",{class:"form-inline my-2 my-lg-0"},[Object(n["f"])("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(n["f"])("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")],-1)})),O={setup:function(t){var e=Object(i["d"])(),c=function(){o["a"].auth().signOut().then((function(){console.log("Successfully logged out!"),e.push("/")})).catch((function(t){console.log(t)}))};return function(t,e){return Object(n["t"])(),Object(n["e"])("nav",s,[u,b,Object(n["f"])("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[Object(n["f"])("ul",{class:"navbar-nav mr-auto"},[f,Object(n["f"])("li",{class:"nav-item"},[Object(n["f"])("a",{class:"nav-link",href:"#",onClick:c},"Logout")])]),d])])}}},j=(c("b4c5"),c("6b0d")),p=c.n(j);const m=p()(O,[["__scopeId","data-v-1402e0a0"]]);e["a"]=m}}]);
//# sourceMappingURL=chunk-79b9af6e.6b122368.js.map