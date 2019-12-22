(this.webpackJsonpstatemachine=this.webpackJsonpstatemachine||[]).push([[0],{14:function(n,e,t){n.exports=t(25)},19:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),o=t(7),r=t.n(o),i=(t(19),t(1)),l=i.b.footer((function(n){var e=n.theme;return"\n        background-color: ".concat(e.palette.iron,";\n        color: ").concat(e.palette.moss,";\n        padding: ").concat(e.spacing,";\n    ")})),s=i.b.footer((function(n){var e=n.theme;return"\n        background-color: ".concat(e.palette.iron,";\n        color: ").concat(e.palette.moss,";\n        padding: ").concat(e.spacing,";\n    ")})),u=i.b.main((function(n){var e=n.theme;return"\n        background-color: ".concat(e.palette.snow,";\n        color: ").concat(e.palette.iron,";\n        padding: ").concat(e.spacing,";\n        flex: 1;\n    ")})),p=t(10);function d(){var n=Object(p.a)(["\n    // & * { border: 1px solid #f99; }\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return d=function(){return n},n}var m=i.b.div(d()),f={palette:{iron:"#48494b",moss:"#8a9a5b",snow:"#fffafa",silver:"#d0d0d9",cardinal:"#a31f34",carmine:"#960018"},spacing:"2rem",borderRadius:"5px"},g=t(2),b=i.b.div((function(n){var e=n.theme,t=n.percentage;n.width;return"\n        border-bottom: 1px solid ".concat(e.palette.moss,";\n        position: relative;\n        height: ").concat(e.spacing,';\n        &::before {\n            content: "').concat(t,'%";\n            position: absolute;\n            top: calc(100% + 10px);\n            left: 50%;\n            transform: translateX(-50%);\n            color: ').concat(e.palette.silver,';\n        }\n        &::after {\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 0;\n            height: 100%;\n            width: ').concat(t,"%;\n            background-color: ").concat(e.palette.moss,";\n        }\n    ")})),h=function(n){var e=n.percentage;return c.a.createElement(b,{percentage:e})};h.defaultProps={percentage:0};var v=i.b.div((function(n){n.theme;return"\n        width: 100%;\n        margin: auto;\n    "})),x=i.b.div((function(n){var e=n.theme;return"\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        color: ".concat(e.palette.moss,";\n        font-size: 80%;\n        background-color: ").concat(e.palette.snow,";\n        padding: calc(").concat(e.spacing," / 4);\n        border-top: 1px solid ").concat(e.palette.moss,";\n        border-bottom: 1px solid ").concat(e.palette.moss,";\n    ")})),E=i.b.div((function(n){var e=n.theme;return"\n        display: flex;\n        flex-direction: column;\n        min-height: ".concat(e.spacing,";\n        @media (min-width: 768px) {\n            flex-direction: row;\n        }\n        justify-content: center;\n    ")})),w=i.b.span((function(n){var e=n.theme,t=n.active;return"\n        text-align: center;\n        padding: calc(".concat(e.spacing," / 4);\n        color: ").concat(e.palette.moss,";\n        font-size: 80%;\n        letter-spacing: 2px;\n        flex: 1;\n        transition: background-color 250ms;\n        background-color: ").concat(e.palette.silver,"22;\n        ").concat(t?"\n            background-color: ".concat(e.palette.moss,";\n            color: ").concat(e.palette.snow,";\n            transition: opacity 200ms;\n            opacity: ").concat(t?1:0,';\n            content: " *";\n        '):void 0,"\n    ")})),k=function(n){var e=n.children;return c.a.createElement(v,null,c.a.createElement(x,null,"STATE"),c.a.createElement(E,null,e))},y=i.b.div((function(n){var e=n.theme;return"\n        display: flex;\n        min-height: 200px;\n        flex-direction: column;\n        justify-content: center;\n        margin: calc(".concat(e.spacing," * 2) calc(").concat(e.spacing,") calc(").concat(e.spacing,") calc(").concat(e.spacing,");\n        align-items: stretch;\n        @media (min-width: 768px) {\n            margin: calc(").concat(e.spacing," / 4);\n            flex-direction: row;\n            align-items: center;\n        }\n    ")})),T=i.b.button((function(n){n.theme;return"\n        margin: 0.5rem 0.5rem;\n        padding: 0.25rem 0.5rem;\n        cursor: pointer;\n        &:disabled {\n            cursor: default;\n        }\n    "})),j=t(11),z=i.b.div((function(n){var e=n.theme;return"\n        // & * {border: 1px solid ".concat(e.palette.moss,";}\n        border: 1px solid ").concat(e.palette.moss,";\n        border-radius: ").concat(e.borderRadius,";\n        text-align: center;\n        width: 90%;\n        max-width: 768px;\n        margin: auto;\n        // padding: ").concat(e.spacing,";\n    ")})),S=function(n){var e=Object(j.a)("zero",{zero:{on:{START:"running"}},running:{on:{PAUSE:"paused",RESET:"zero",END:"complete"}},paused:{on:{START:"running",RESET:"zero"}},complete:{on:{RESET:"zero"}}}),t=Object(a.useState)(0),o=Object(g.a)(t,2),r=o[0],i=o[1];Object(a.useEffect)((function(){switch(e.state){case"zero":i(0);break;case"running":if(100===r)return void e.transition("END");var n=setInterval((function(){i(r+1)}),25);return function(){return clearInterval(n)};case"complete":i(100);break;default:return}}),[e,r]);var l=function(n){return function(t){return e.transition(n)}};return c.a.createElement(z,null,c.a.createElement(h,{percentage:r}),c.a.createElement(y,null,e.actions.all.map((function(n){return c.a.createElement(T,{key:n,onClick:l(n),disabled:!e.actions.available.includes(n)},n)}))),c.a.createElement(k,null,Object.keys(e.flow).map((function(n){return c.a.createElement(w,{key:n,active:e.state===n},n)}))))};var R=function(){return c.a.createElement(i.a,{theme:f},c.a.createElement(m,null,c.a.createElement(s,null,"..."),c.a.createElement(u,null,c.a.createElement(S,null)),c.a.createElement(l,null,"...")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c972dd83.chunk.js.map