(this["webpackJsonpcool-spaces"]=this["webpackJsonpcool-spaces"]||[]).push([[0],{157:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={"Cool spaces":{value:"boroughdesignatedcoolspaces",showing:!0,about:"These locations have been designated as cool spaces where refuge can be sought during heatwaves"},"Water courses":{value:"watercourses",showing:!0,about:"Water cools the air, so these places can be less hot"},"Tree canopy cover":{value:"treecanopy",showing:!0,about:"Indicative location of areas with shading from trees"},"Cooler areas":{value:"avgLST_London_UrbanAtlas",showing:!0,about:"Modelled average land surface temperature - the more visible this layer's information is, the cooler the area is likely to be"}}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(159),o=a.n(n),r=a(2),c=Object(r.jsx)(o.a,{children:"\n# About London\u2019s  Cool Spaces\n\nCool spaces are indoor or outdoor areas where Londoners can take respite on hot days. Cool space sites have been put forward by boroughs, community groups, faith based and other organisations following an  invitation to register process. The cool spaces are categorised by three tiers that can apply to indoor and outdoor spaces:\n\n* Tier 1 has the greatest number of minimum amenities that Londoners can expect from a cool space.\n* Tier 2 has the second greatest number of minimum amenities.\n* Tier 3 includes outdoor green and blue spaces which, although not providing the minimum amenities for tiers 1 and 2, provide suitable shading conditions.\n\nThe tiered approach to classifying cool spaces is meant to provide Londoners with a better understanding of what can be expected from spaces and how certain spaces can better fit their needs. More information about cool spaces and the criteria for the different tiers can be found here.\n\nWhen using London\u2019s parks and green spaces, please remember to follow guidelines on social distancing. Read PHE guidance on Coping with heat and COVID-19 and the Mayor\u2019s guidance on keeping cool on hot days.\n\nData information and credits:\n\nThe cool spaces map uses data from the following sources:\n\n* Tree canopy cover: Data from [London Tree Canopy Cover](https://data.london.gov.uk/dataset/curio-canopy)\n* Surface temperature map: Data from [ARTi Analytics](https://data.london.gov.uk/dataset/major-summer-heatspots-using-landsat-8-thermal-satellite-data)\n* Basemap: Data from [Openstreetmap](https://osm.org), Cartography by [Maptiler](https://maptiler.com/)\n"})},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(15),o=a(31),r=a(94),c=window.innerWidth<600?document.querySelector("#root").offsetWidth:.378*document.querySelector("#root").offsetWidth,i=Object(r.a)((function(e){var t,a;return{root:{display:"flex"},appBar:(t={},Object(o.a)(t,e.breakpoints.up("sm"),{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),Object(o.a)(t,e.breakpoints.down("sm"),{right:"calc(100% - 4em) !important",bottom:"0 !important",top:"unset !important"}),t),appBarShift:{width:"calc(100% - ".concat(c,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:c},title:{flexGrow:1},hide:{display:"none !important"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:c,flexShrink:0}),drawerPaper:(a={},Object(o.a)(a,e.breakpoints.up("sm"),{width:c}),Object(o.a)(a,e.breakpoints.down("sm"),{width:"100%"}),a),drawerHeader:Object(n.a)(Object(n.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{maxWidth:"100%",flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-c},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},formControl:{margin:e.spacing(1),width:"100%"},noLabel:{marginTop:e.spacing(3)}}}))},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(13),o=a(31),r=a(15),c=a(0),i=a.n(c),s=a(74),l=a(95),u=a(339),d=a(185),b=a(340),j=a(341),p=a(89),h=a.n(p),f=a(57),O=a(337),g=a(94),m=a(2),x=Object(g.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function v(e){var t=e.layers,a=e.setLayers,c=e.legend,p=x(),g=function(e){t[e.target.name].showing=e.target.checked,a(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e.target.name,t[e.target.name])))},v=function(e,t,a){switch(e){case"Cool spaces":return"#9886CF";case"Cooler areas":return"rgba(0,255,255,0.9)";case"Water fountains":return"#43B7EF";default:return t?t.filter((function(t){return Object.keys(t)[0]===a[e].value}))[0][a[e].value]:""}},y=i.a.useState(null),w=Object(n.a)(y,2),k=w[0],C=w[1],S=i.a.useState(null),T=Object(n.a)(S,2),N=T[0],_=T[1],L=function(e,t){C(e.currentTarget),_(e.currentTarget.getAttribute("about"))},E=Boolean(k),P=E?"simple-popover":void 0;return c?Object(m.jsxs)(l.a,{component:"fieldset",children:[Object(m.jsx)(s.a,{component:"legend",children:"Choose map overlays to show"}),Object(m.jsx)(u.a,{children:Object.keys(t).map((function(e,a){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(d.a,{control:Object(m.jsx)(b.a,{color:"primary",style:{color:v(e,c,t),":checked":{color:"red"}},checked:t[e].showing,onChange:g,name:e},a),label:e},a),Object(m.jsx)(h.a,{style:{height:"unset"},onClick:L,about:t[e].about})]},a)}))}),Object(m.jsx)(O.a,{id:P,open:E,anchorEl:k,onClose:function(){C(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(m.jsx)(f.a,{className:p.typography,children:N})})]}):Object(m.jsx)("div",{style:{textAlign:"center",margin:"0 auto"},children:Object(m.jsx)(j.a,{})})}},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(15),o=a(13),r=a(0),c=a(42),i=a(94),s=a(95),l=a(116),u=a(351),d=a(2),b=Object(i.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:260},selectEmpty:{marginTop:e.spacing(2)}}})),j=[{title:"Drinking water",value:"free_water",filter:["==",["get","free_water"],"true"]},{title:"Seating",value:"seating_available",filter:["==",["get","seating_available"],"true"]},{title:"Water feature",value:"water_feature",filter:[">",["length",["get","shade_seating"]],0]},{title:"Access for people with disabilities",value:"people with disabilities",filter:["in","people with disabilities",["get","accessible"]]},{title:"Toilets",value:"toilets",filter:["in",["get","toilets"],"Toilets are available on site"]}];function p(e){var t=e.map,a=b(),i=Object(c.a)("facilities",[]),p=Object(o.a)(i,2),h=p[0],f=p[1];return Object(r.useEffect)((function(){!function(e,t){if(t.length>0){var a=t.map((function(e){return e.filter}));a.unshift("all"),e&&e.setFilter("boroughdesignatedcoolspaces",a)}else e&&e.setFilter("boroughdesignatedcoolspaces",null)}(t,h)}),[t,h]),Object(d.jsx)(s.a,{className:a.formControl,children:Object(d.jsx)(u.a,{multiple:!0,value:h,id:"facilities",onChange:function(e,t){f(t)},options:j,getOptionLabel:function(e){return e?e.title:""},renderInput:function(e){return Object(d.jsx)(l.a,Object(n.a)(Object(n.a)({},e),{},{label:"Choose facilities"}))}})})}},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(110),o=a.n(n),r=a(172),c=a(13),i=a(15),s=a(0),l=a.n(s),u=a(94),d=a(116),b=a(342),j=a(95),p=a(74),h=a(354),f=a(185),O=a(355),g=a(352),m=a(2),x=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),display:"flex"}},snack:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function v(e){return Object(m.jsx)(g.a,Object(i.a)({elevation:6,variant:"filled"},e))}function y(){var e=x(),t=l.a.useState(""),a=Object(c.a)(t,2),n=a[0],i=a[1],s=l.a.useState(""),u=Object(c.a)(s,2),g=u[0],y=u[1],w=l.a.useState(!1),k=Object(c.a)(w,2),C=k[0],S=k[1],T=l.a.useState(!1),N=Object(c.a)(T,2),_=N[0],L=N[1],E=function(){L(!0),i(""),y(""),S(!1)},P=function(e,t){"clickaway"!==t&&L(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{open:_,autoHideDuration:6e3,onClose:P,children:Object(m.jsx)(v,{onClose:P,severity:"success",children:"Thanks, your message has been sent to the team and a receipt emailed to the email contact provided."})}),Object(m.jsxs)(j.a,{component:"fieldset",fullWidth:!0,children:[Object(m.jsx)(p.a,{component:"legend",children:"Email the team"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={correspondent:e.target.email.value?e.target.email.value:"noreply@london.gov.uk",app:"cool-spaces-feedback",title:"cool-spaces feedback",message:e.target.feedback.value+". Permission to contact: "+e.target.permission.checked};function a(){return(a=Object(r.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apps.london.gov.uk/node-mailer/mail/send",t);case 2:return a=e.sent,e.next=5,a.text();case 5:e.sent.includes("Message accepted for delivery")?E():console.err("not sent");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){a.apply(this,arguments)}({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},className:e.root,noValidate:!0,autoComplete:"on",children:[Object(m.jsx)(d.a,{required:!0,id:"email",label:"Your email",value:n,onChange:function(e){i(e.target.value)}}),Object(m.jsx)(d.a,{multiline:!0,rowsMax:20,required:!0,id:"feedback",label:"Your feedback",value:g,onChange:function(e){y(e.target.value)}}),Object(m.jsx)(f.a,{control:Object(m.jsx)(h.a,{checked:C,onChange:function(e){S(e.target.checked)},name:"permission",color:"secondary",id:"permission"}),label:"Tick here if you give us permission to email this contact"}),Object(m.jsx)(b.a,{variant:"contained",type:"submit",children:"Send"})]})]})]})}},181:function(e,t,a){"use strict";var n=a(13),o=a(0),r=a.n(o),c=a(94),i=a(160),s=a.n(i),l=a(161),u=a.n(l),d=a(162),b=a.n(d),j=a(163),p=a.n(j),h=a(164),f=a.n(h),O=a(165),g=a.n(O),m=a(166),x=a.n(m),v=a(405),y=a(406),w=a(407),k=a(408),C=a(404),S=a(57),T=a(15),N=a(183),_=a(2);function L(e){return Object(_.jsxs)(N.a,Object(T.a)(Object(T.a)({},e),{},{children:[Object(_.jsx)("path",{d:"m22 15.743c-1.11 0-1.73-0.37-2.18-0.64-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.45 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.45 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36s-0.78 0.13-1.15 0.36c-0.47 0.27-1.09 0.64-2.2 0.64v-2c0.56 0 0.78-0.13 1.15-0.36 0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36 0.56 0 0.78-0.13 1.15-0.36 0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36v2z"}),Object(_.jsx)("path",{d:"m22 20.243c-1.11 0-1.73-0.37-2.18-0.64-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.46 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.46 0.27-1.08 0.64-2.19 0.64s-1.73-0.37-2.18-0.64c-0.37-0.23-0.6-0.36-1.15-0.36s-0.78 0.13-1.15 0.36c-0.46 0.27-1.08 0.64-2.19 0.64v-2c0.56 0 0.78-0.13 1.15-0.36 0.46-0.27 1.08-0.64 2.19-0.64s1.73 0.37 2.18 0.64c0.37 0.23 0.59 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.46-0.27 1.08-0.64 2.19-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.23 0.59 0.36 1.15 0.36z"}),Object(_.jsx)("path",{d:"m21.97 6.7342c-1.11 0-1.73-0.37-2.18-0.64-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.45 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.45 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36s-0.78 0.13-1.15 0.36c-0.47 0.27-1.09 0.64-2.2 0.64v-2c0.56 0 0.78-0.13 1.15-0.36 0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36 0.56 0 0.78-0.13 1.15-0.36 0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36v2z"}),Object(_.jsx)("path",{d:"m21.97 11.234c-1.11 0-1.73-0.37-2.18-0.64-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.46 0.27-1.07 0.64-2.18 0.64s-1.73-0.37-2.18-0.64c-0.37-0.22-0.6-0.36-1.15-0.36-0.56 0-0.78 0.13-1.15 0.36-0.46 0.27-1.08 0.64-2.19 0.64s-1.73-0.37-2.18-0.64c-0.37-0.23-0.6-0.36-1.15-0.36s-0.78 0.13-1.15 0.36c-0.46 0.27-1.08 0.64-2.19 0.64v-2c0.56 0 0.78-0.13 1.15-0.36 0.46-0.27 1.08-0.64 2.19-0.64s1.73 0.37 2.18 0.64c0.37 0.23 0.59 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.46-0.27 1.08-0.64 2.19-0.64s1.73 0.37 2.18 0.64c0.37 0.22 0.6 0.36 1.15 0.36s0.78-0.13 1.15-0.36c0.45-0.27 1.07-0.64 2.18-0.64s1.73 0.37 2.18 0.64c0.37 0.23 0.59 0.36 1.15 0.36z"})]}))}var E=a(89),P=a.n(E),W=a(337),B=Object(c.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},scrollGrid:{maxHeight:"20rem",overflowY:"scroll","*::-webkit-scrollbar":{"-webkit-appearance":"none",width:"7px"},"*::-webkit-scrollbar-thumb":{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, .5)","-webkit-box-shadow":"0 0 1px rgba(255, 255, 255, .5)"}},typography:{padding:e.spacing(2)}}}));t.a=function(e){var t=e.feature,a=B(),o=t.properties,c=o.cool_space_name,i=o.cs_address1,l=o.cs_address2,d=o.cs_postcode,j=o.opening_hour,h=o.accessible,O=o.toilets,m=o.free_water,T=o.shaded_well,N=o.about_shade,E=o.shade_seating,D=o.water_feature,R=o.seating_available,z=o.tier,A=r.a.useState(null),I=Object(n.a)(A,2),F=I[0],G=I[1],M=r.a.useState(null),J=Object(n.a)(M,2),q=J[0],H=J[1],Z=Boolean(F),V=Z?"simple-popover":void 0;return t.hasOwnProperty("properties")&&Object(_.jsxs)("div",{className:a.root,children:[Object(_.jsx)(S.a,{variant:"h4",gutterBottom:!0,children:c}),Object(_.jsxs)(S.a,{variant:"h5",gutterBottom:!0,children:["Outdoor - ",z,Object(_.jsx)(P.a,{style:{height:"unset",float:"right"},onClick:function(e,t){switch(G(e.currentTarget),z){case"Tier 1":H("Tier 1: free public access, open 10-5 weekdays and weekends where possible, free drinking water, fully accessible, toilets, shaded seating, water features");break;case"Tier 2":H("Tier 2: free public access, open at specified times, specified accessibility, drinking water available on site or within walking distance, shaded seating");break;default:H("Tier 3: free public access to outdoor open space, some shade available")}},about:q}),Object(_.jsx)(W.a,{id:V,open:Z,anchorEl:F,onClose:function(){G(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(_.jsx)(S.a,{className:a.typography,children:q})})]}),Object(_.jsx)(C.a,{container:!0,spacing:3,className:a.scrollGrid,children:Object(_.jsxs)(v.a,{dense:!0,children:[i&&d?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(s.a,{})}),Object(_.jsx)(k.a,{primary:i,secondary:(l&&d?l:"")+(l?d?" "+d:"":d||"")})]})}):null,j?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(u.a,{})}),Object(_.jsx)(k.a,{primary:j})]})}):null,h?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(b.a,{})}),Object(_.jsx)(k.a,{primary:"Accessible for "+typeof h==="object"?JSON.parse(h).reduce((function(e,t){return e+", "+t})):"People with disabilities; children; older people; pregnant women; people with underlying health issues"})]})}):null,O?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(p.a,{})}),Object(_.jsx)(k.a,{primary:O})]})}):null,m?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(f.a,{})}),Object(_.jsx)(k.a,{primary:"Free drinking water"})]})}):null,T&&N?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(g.a,{})}),Object(_.jsx)(k.a,{primary:N+(E?". There is also shaded seating":null)})]})}):null,D&&!["other","No","N/A"].includes(D)?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(L,{})}),Object(_.jsx)(k.a,{primary:D})]})}):null,R?Object(_.jsx)(C.a,{item:!0,xs:!0,children:Object(_.jsxs)(y.a,{children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(x.a,{})}),Object(_.jsx)(k.a,{primary:"Seating is available"})]})}):null]})})]})}},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(15),o=a(13),r=a(0),c=a(42),i=a(94),s=a(95),l=a(116),u=a(351),d=a(409);var b=a(85),j=a(2),p=Object(i.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:260},selectEmpty:{marginTop:e.spacing(2)}}}));function h(e){var t=e.map,a=Object(r.useState)(""),i=Object(o.a)(a,2),h=i[0],f=i[1],O=Object(c.a)("searchvalue",""),g=Object(o.a)(O,2),m=g[0],x=g[1],v=Object(r.useState)([]),y=Object(o.a)(v,2),w=y[0],k=y[1],C=Object(r.useState)(!1),S=Object(o.a)(C,2),T=S[0],N=S[1],_=Object(r.useState)(!1),L=Object(o.a)(_,2),E=L[0],P=L[1],W=p(),B=function(e,t){var a=Object(r.useState)(e),n=Object(o.a)(a,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}}),[e]),c}(h,500);Object(r.useEffect)((function(){var e,t={id:"search",place_name:"Go to my location"};B?(N(!0),(e=B,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json?bbox=-0.489,51.28,0.236,51.686&access_token=").concat(b.b)).then((function(e){return e.json()})).then((function(e){return e.features})).catch((function(e){return console.error(e),[]}))).then((function(e){N(!1),e.unshift(t),k(e)}))):k([t])}),[B]);return Object(j.jsxs)(s.a,{className:W.formControl,children:[Object(j.jsx)(u.a,{id:"geocoder",options:w,value:m,onInputChange:function(e){return e&&f(e.target.value)},onChange:function(e,a,n){return"clear"===n?(x(""),void t.getSource("single-point").setData({type:"Feature",geometry:{type:"Point",coordinates:[0,0]}})):function(e){if(e){var a,n,o;x(e);var r=function(e,a,n){t&&(t.flyTo({center:[e,a],zoom:n,speed:2,curve:1,easing:function(e){return e}}),t.getSource("single-point").setData({type:"Feature",geometry:{type:"Point",coordinates:[e,a]}}))};e&&"Go to my location"===e.place_name?(P(!0),navigator.geolocation.getCurrentPosition((function(e){a=e.coords.longitude,n=e.coords.latitude,o=13,P(!1),r(a,n,o)}))):(a=e.geometry.coordinates[0],n=e.geometry.coordinates[1],r(a,n,o=13)),t.getSource("single-point").setData({type:"Feature",geometry:{type:"Point",coordinates:[a,n]}})}}(a)},getOptionLabel:function(e){return e?e.place_name:""},getOptionSelected:function(e,t){return e.place_name===t.place_name},renderInput:function(e){return Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({},e),{},{label:"Search a location or postcode"}))}}),E||T?Object(j.jsx)(d.a,{}):""]})}},218:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var n=a(155),o=a(156),r=a(179),c=a(178),i=a(0),s=a.n(i),l=a(12),u=a.n(l),d=a(176),b=a(17),j=a(177),p=(a(218),a(85));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(2);s.a.Component;u.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(j.a,{ReactRouterRoute:b.a,children:Object(h.jsx)(p.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(13),o=a(0),r=a.n(o);function c(e,t){var a=r.a.useState((function(){var a=localStorage.getItem(e);return a?JSON.parse(a):t})),o=Object(n.a)(a,2),c=o[0],i=o[1];return r.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c,e]),[c,i]}},85:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return Z})),a.d(t,"a",(function(){return V}));var n=a(15),o=a(180),r=a(31),c=a(13),i=a(0),s=a(93),l=a.n(s),u=(a(220),a(12)),d=a.n(u),b=a(157),j=a(158),p=a(181),h=a(167),f=a(42),O=a(4),g=a(115),m=a(350),x=a(344),v=a(345),y=a(346),w=a(57),k=a(186),C=a(173),S=a.n(C),T=a(175),N=a.n(T),_=a(174),L=a.n(_),E=a(349),P=a(75),W=a(348),B=a(114),D=a(95),R=a(74),z=a(343),A=a(168),I=a(182),F=a(170),G=a(171),M=a(20),J=a(111),q=a(2),H=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),Z="pk.eyJ1IjoiZ2xhLWdpcyIsImEiOiJjanBvNGh1bncwOTkzNDNueWt5MGU1ZGtiIn0.XFxLdq2dXttcXSXTiREPTA";function V(e){e.showBorder,e.onTilesLoad;var t=Object(M.a)(),a=Object(z.a)(t.breakpoints.down("sm")),s=Object(h.a)(t),u=Object(i.useRef)(null);J.StylesManager.applyTheme("bootstrap");var C=Object(i.useState)(b.a),T=Object(c.a)(C,2),_=T[0],Z=T[1],V=Object(i.useState)(null),X=Object(c.a)(V,2),Y=X[0],U=X[1],$=Object(f.a)("drawer",!0),K=Object(c.a)($,2),Q=K[0],ee=K[1],te=function(){ee(!0),setTimeout((function(){he&&he.resize(),a?he.easeTo({padding:{bottom:150,top:0},duration:1e3}):he.easeTo({padding:{right:150,left:0},duration:1e3})}),10)},ae=function(e){console.log(e,"opened")},ne=function(e){var t=e.bottom;return Object(q.jsx)(x.a,{position:a?"absolute":"fixed",style:{backgroundColor:"unset",visibility:"hidden",bottom:t},className:Object(O.a)(s.appBar,Object(r.a)({},s.appBarShift,Q)),children:Object(q.jsxs)(v.a,{children:[Object(q.jsx)(w.a,{variant:"h6",noWrap:!0,className:s.title}),Object(q.jsx)(g.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:te,className:Object(O.a)(Q&&s.hide),style:{visibility:"visible"},children:Object(q.jsx)(S.a,{})})]})})},oe=function(e){var t=e.children,a=e.value,r=e.index,c=Object(o.a)(e,["children","value","index"]);return Object(q.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"scrollable-force-tab-".concat(r)},c),{},{children:a===r&&Object(q.jsx)(W.a,{p:3,children:t})}))},re=function(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}},ce=Object(f.a)("tab",0),ie=Object(c.a)(ce,2),se=ie[0],le=ie[1],ue=function(e,t){le(Number(t))},de=function(){return Object(q.jsx)(B.a,{square:!0,children:Object(q.jsxs)(E.a,{value:se,onChange:ue,variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable force tabs",children:[Object(q.jsx)(P.a,Object(n.a)({label:"Layers"},re(0))),Object(q.jsx)(P.a,Object(n.a)({label:"Find a cool space"},re(1))),Object(q.jsx)(P.a,Object(n.a)({label:"Feedback"},re(2))),Object(q.jsx)(P.a,Object(n.a)({label:"Register a cool space"},re(3))),Object(q.jsx)(P.a,Object(n.a)({label:"About"},re(4)))]})})},be=Object(i.useRef)(null),je=Object(i.useState)(null),pe=Object(c.a)(je,2),he=pe[0],fe=pe[1],Oe=Object(i.useRef)(new l.a.Popup({offset:5,closeButton:!1})),ge=Object(f.a)("lng",-.1),me=Object(c.a)(ge,2),xe=me[0],ve=me[1],ye=Object(f.a)("lat",51.49),we=Object(c.a)(ye,2),ke=we[0],Ce=we[1],Se=Object(f.a)("zoom",9),Te=Object(c.a)(Se,2),Ne=Te[0],_e=Te[1];Object(i.useEffect)((function(){_&&he&&Object.keys(_).map((function(e){return he.getStyle().layers.map((function(e){return e.id})).filter((function(t){return t.startsWith(_[e].value)})).map((function(t){return he.setLayoutProperty(t,"visibility",_[e].showing?"visible":"none")}))}))}),[_,he]),Object(i.useEffect)((function(){var e=new l.a.Map({container:be.current,style:"cool_spaces.json",center:[xe,ke],zoom:Ne,pitch:10});return e.touchZoomRotate.disableRotation(),e.addControl(new l.a.NavigationControl({showCompass:!1,showZoom:!!a}),"top-left"),e.on("load",(function(){U(e.getStyle().layers.filter((function(e){return Object.values(_).map((function(e){return e.value})).includes(e.id)})).map((function(e){return[e.id,e.paint]})).map((function(e){var t={};return t[e[0]]=e[1][Object.keys(e[1]).filter((function(e){return e.includes("color")}))[0]],t}))),e.on("mouseenter","boroughdesignatedcoolspaces",(function(t){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","boroughdesignatedcoolspaces",(function(t){e.getCanvas().style.cursor=""})),e.on("click","boroughdesignatedcoolspaces",(function(t){var a=e.queryRenderedFeatures(t.point);if(a.length&&Object.values(_).map((function(e){return e.value})).includes(a.filter((function(e){return"boroughdesignatedcoolspaces"===e.layer.id}))[0].sourceLayer)){var n=a.filter((function(e){return"boroughdesignatedcoolspaces"===e.layer.id}))[0],o=document.createElement("div");d.a.render(Object(q.jsx)(p.a,{feature:n}),o),Oe.current.setLngLat(t.lngLat).setDOMContent(o).addTo(e)}else Oe.current.remove()})),e.keyboard.disable(),e.on("moveend",(function(){var t=e.getCenter(),a=t.lng,n=t.lat,o=e.getZoom();ve(a),Ce(n),_e(o)})),e.addSource("single-point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({visible:!0,id:"point",source:"single-point",type:"circle",paint:{"circle-radius":10,"circle-color":"#448ee4"}}),fe(e)})),function(){return e.remove()}}),[]);return Object(i.useEffect)((function(){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:17;he&&he.flyTo({center:[e,t],zoom:a,speed:2,curve:1,easing:function(e){return e}})}(xe,ke,Ne)}),[xe,ke,Ne]),Object(q.jsxs)("div",{ref:u,className:s.root,children:[Object(q.jsx)(y.a,{}),!a&&Object(q.jsx)(ne,{left:a?0:"auto"}),Object(q.jsxs)("main",{className:Object(O.a)(s.content,Object(r.a)({},s.contentShift,Q)),children:[Object(q.jsx)("div",{className:s.drawerHeader}),Object(q.jsx)("div",{children:Object(q.jsx)("div",{ref:be,style:{position:"absolute",top:0,left:0,height:"100%",width:"100%"}})})]}),Object(q.jsxs)(m.a,{disableBackdropTransition:!H,disableDiscovery:H,className:s.drawer,variant:"persistent",anchor:a?"bottom":"right",open:Q,onOpen:ae,onClose:ae,classes:{paper:s.drawerPaper},children:[Object(q.jsxs)("div",{className:s.drawerHeader,children:[Object(q.jsx)(g.a,{onClick:function(){ee(!1),setTimeout((function(){he&&he.resize(),a?he.easeTo({padding:{top:150,bottom:0},duration:1e3}):he.easeTo({padding:{left:150,right:0},duration:1e3})}),10)},children:a?Object(q.jsx)(L.a,{}):Object(q.jsx)(N.a,{})}),Object(q.jsx)("h3",{style:{textAlign:"center",margin:"0 auto"},children:"LONDON COOL SPACES"})," "]}),Object(q.jsx)(k.a,{}),!a&&Object(q.jsx)(de,{}),Object(q.jsx)(oe,{value:se,index:0,children:Object(q.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(q.jsx)(A.a,{layers:_,setLayers:Z,legend:Y}),Object(q.jsxs)(R.a,{component:"legend",children:["To search for cool spaces in a specific location or near you, please go to the"," ",Object(q.jsx)("span",{style:{fontVariant:"small-caps"},children:"find a cool space"})," ","tab"]})]})}),Object(q.jsx)(oe,{value:se,index:1,children:Object(q.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(q.jsxs)(D.a,{component:"fieldset",fullWidth:!0,children:[Object(q.jsx)(R.a,{component:"legend",children:"Choose facilities and location by search or your device position."}),Object(q.jsx)(F.a,{map:he}),Object(q.jsx)(I.a,{map:he})]}),Object(q.jsxs)(R.a,{component:"legend",children:["To choose what map features to view, please select from the"," ",Object(q.jsx)("span",{style:{fontVariant:"small-caps"},children:"layers"})," tab"]})]})}),Object(q.jsx)(oe,{value:se,index:2,children:Object(q.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(q.jsx)(G.a,{})})}),Object(q.jsx)(oe,{value:se,index:3,children:Object(q.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(q.jsx)(J.Survey,{json:{surveyId:"e5d72f1d-01a7-4894-9d8e-44ee9c52af4e",surveyPostId:"82a2ba1b-e580-4034-88f5-f2b3975b1c87"}})})}),Object(q.jsx)(oe,{value:se,index:4,children:Object(q.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(q.jsx)(w.a,{variant:"body2",className:s.typography,children:j.a})})}),a&&Object(q.jsx)(k.a,{}),a&&Object(q.jsx)(de,{})]}),a&&Object(q.jsx)("div",{style:{bottom:0},children:Object(q.jsx)(ne,{})})]})}}).call(this,a(219))}},[[334,1,2]]]);
//# sourceMappingURL=main.4b31ccb3.chunk.js.map