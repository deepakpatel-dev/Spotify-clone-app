(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(26),i=c.n(a),r=(c(60),c(9)),o=(c(61),c(62),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("0e0e961d4acc46d19e43afa106bacfc3","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=c(1);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)("a",{href:o,children:"Login with Spotify"})]})},d=c(37),b=c.n(d),u=(c(64),c(29)),O=c.n(u),x=c(38),h=c.n(x),f=c(41),p=c.n(f),m=(c(65),c(66),function(e){var t=e.title,c=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[c&&Object(l.jsx)(c,{className:"sidebarOption__icon"}),c?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})}),_=Object(s.createContext)(),v=function(e){var t=e.intialState,c=e.reducer,n=e.children;return Object(l.jsx)(_.Provider,{value:Object(s.useReducer)(c,t),children:n})},y=function(){return Object(s.useContext)(_)},g=function(){var e,t=y(),c=Object(r.a)(t,2),s=c[0];c[1];return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)(m,{Icon:h.a,title:"Search"}),Object(l.jsx)(m,{Icon:O.a,title:"Home"}),Object(l.jsx)(m,{Icon:p.a,title:"Your Library"}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{className:"sidebar__title",children:"Playlist"}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(m,{title:e.name})}))]})},N=(c(72),c(94)),S=function(){var e,t=y(),c=Object(r.a)(t,2),s=c[0].user;c[1];return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("input",{placeholder:"Search for Artist,Songs",type:"text"})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsx)(N.a,{alt:null===s||void 0===s?void 0:s.display_name,src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url}),Object(l.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},E=(c(73),c(42)),w=c.n(E),k=c(43),T=c.n(k),I=c(44),L=c.n(I),P=(c(74),function(e){var t=e.track;return Object(l.jsxs)("div",{className:"songsRow",children:[Object(l.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow__info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})}),R=function(e){var t=e.spotify,c=y(),s=Object(r.a)(c,2),n=s[0].discover_weekly;s[1];return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(S,{spotify:t}),Object(l.jsxs)("div",{className:"body__info",children:[Object(l.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"body__infoText",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(l.jsxs)("div",{className:"body__songs",children:[Object(l.jsxs)("div",{className:"body__icons",children:[Object(l.jsx)(w.a,{className:"body__shuffle"}),Object(l.jsx)(T.a,{fontSize:"large"}),Object(l.jsx)(L.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(l.jsx)(P,{track:e.track})}))]})]})},C=(c(75),c(47)),A=c.n(C),Y=c(46),z=c.n(Y),D=c(48),F=c.n(D),K=c(45),U=c.n(K),V=c(49),J=c.n(V),M=c(51),W=c.n(M),B=c(50),H=c.n(B),Q=c(92),X=c(93),Z=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__left",children:[Object(l.jsx)("img",{className:"footer__albumLogo",src:"maxresdefault.jpeg",alt:""}),Object(l.jsxs)("div",{className:"footer__songInfo",children:[Object(l.jsx)("h4",{children:"Saawre!"}),Object(l.jsx)("p",{children:"Arijit Singh"})]})]}),Object(l.jsxs)("div",{className:"footer__center",children:[Object(l.jsx)(U.a,{className:"footer__green"}),Object(l.jsx)(z.a,{className:"footer__icon"}),Object(l.jsx)(A.a,{fontSize:"large",className:"footer__green"}),Object(l.jsx)(F.a,{className:"footer__icon"}),Object(l.jsx)(J.a,{className:"footer__green"})]}),Object(l.jsx)("div",{className:"footer__right",children:Object(l.jsxs)(Q.a,{container:!0,spacing:2,children:[Object(l.jsx)(Q.a,{item:!0,children:Object(l.jsx)(H.a,{})}),Object(l.jsx)(Q.a,{item:!0,children:Object(l.jsx)(W.a,{})}),Object(l.jsx)(Q.a,{item:!0,xs:!0,children:Object(l.jsx)(X.a,{"aria-labelledby":"continuous-slider"})})]})})]})},q=function(e){var t=e.spotify;return Object(l.jsx)("div",{className:"player",children:Object(l.jsxs)("div",{className:"player_body",children:[Object(l.jsx)(g,{}),Object(l.jsx)(R,{soptify:t}),Object(l.jsx)(Z,{})]})})},G=new b.a,$=function(){var e=y(),t=Object(r.a)(e,2),c=t[0],n=t[1],a=y(),i=Object(r.a)(a,1)[0];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(n({type:"SET_TOKEN",token:t}),G.setAccessToken(t),G.getMe().then((function(e){n({type:"SET_USER",user:e})})),console.log(c),console.log(i),G.getUserPlaylists().then((function(e){n({type:"SET_PLAYLISTS",Playlists:e})})),G.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((function(e){n({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(l.jsx)("div",{children:i?Object(l.jsx)(q,{spotify:G}):Object(l.jsx)(j,{})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},te=c(14),ce=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.user});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{initialState:ce,reducer:ce,children:Object(l.jsx)($,{})})}),document.getElementById("root")),ee()}},[[76,1,2]]]);
//# sourceMappingURL=main.36910a9a.chunk.js.map