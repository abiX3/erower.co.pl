(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[84983],{14214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdChatBottomContactBar:()=>ie,highlightedContactBarSeen:()=>le});var a,l,i,r,o,c,s,d,u=n(4601),h=n.n(u),m=n(63862),f=n(36293),g=n(86795),p=n(87291),v=n(18813),E=n(30364),x=n(72107),b=n(2596),C=n(86728),O=n(7545),w=n(357),B=n(36843);function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j,k,P=m.default.div(a||(a=_(["\n    display: flex;\n    align-items: center;\n    flex: 0 0 auto;\n"]))),y=(0,m.default)(f.default)(l||(l=_(["\n    padding: ",";\n    background-color: ",";\n    border-radius: 50%;\n    margin-right: ",";\n"])),(e=>e.theme.space[12]),(e=>e.theme.colors.tealPrimary),(e=>e.theme.space[24])),A=(0,m.default)(b.Paragraph2)(i||(i=_(["\n    font-weight: ",";\n"])),(e=>e.theme.fontWeights[600])),z=(0,m.default)(b.Paragraph2)(r||(r=_(["\n    margin-right: ",";\n"])),(e=>e.theme.space[12])),D=m.default.a(o||(o=_(["\n    color: inherit;\n    text-decoration: none;\n    font-weight: ",";\n    margin-right: ",";\n"])),(e=>e.theme.fontWeights[600]),(e=>e.theme.space[8])),M=m.default.div(c||(c=_(["\n    margin: 0;\n    padding: 0;\n    text-align: end;\n"]))),S=m.default.div(s||(s=_(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: ",";\n    flex-shrink: 0;\n"])),(e=>e.theme.space[8])),T=(0,m.default)(w.default)(d||(d=_(["\n    height: ",";\n    margin-left: ",";\n"])),(e=>e.theme.sizes[48]),(e=>e.theme.space[24])),L=e=>{var{disabledButton:t=!1,loginRequired:n=!1}=e,{trackEvent:a}=(0,v.rS)(),l=(0,O.useHistory)(),{formatMessage:i}=(0,g.useIntl)(),{showContact:r,phones:o}=h().useContext(x.Z),{authenticated:c,loading:s}=h().useContext(B.Vo),d=(0,C.g)();return h().createElement(S,{"data-testid":"phones-container"},h().createElement(P,null,h().createElement(y,{size:44}),o?h().createElement(M,null,o.map(((e,t)=>h().createElement(z,{key:e,as:D,href:"tel:".concat((0,p.z)(e)),"data-testid":"contact-phone"},e,t!==o.length-1?",":"")))):h().createElement(A,null,"xxx xxx xxx"),!o&&h().createElement(T,{"data-testid":"show-phone",onClick:()=>{t?a(v.dQ.events.replyBlocked,void 0,v.dQ.touchPointButton.call):(a(v.hW.events.contactByPhone,void 0,v.dQ.touchPointButton.showPhone),s||(!n||c?r(E.a.AD_CONTACT_BOTTOM_BAR):d(l.location.pathname)))},disabled:t},i({id:"login.showPassword",defaultMessage:"show number"}))))},N=n(98e3),R=n(89567),F=n(75887);function Q(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var I,q=(0,m.default)(R.default)(k||(k=Q(["\n    ",";\n    padding: 0 ",";\n"])),(e=>{var{theme:t}=e;return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(0,N.css)(j||(j=Q(["\n    margin: 0 "," 0 ",";\n    flex: 1;\n    min-height: ",";\n"])),t?0:e.space[4],t?e.space[4]:0,e.sizes[48])}(t)}),(e=>{var{theme:t}=e;return t.space[8]})),H=n(81930);var W,Z,K,U,J,V,G,X,Y,$=m.default.div(I||(W=["\n    margin-top: ",";\n"],Z||(Z=W.slice(0)),I=Object.freeze(Object.defineProperties(W,{raw:{value:Object.freeze(Z)}}))),(e=>e.theme.space[24])),ee=()=>{var{phoneFetchedError:e,phoneFrictionChallenge:t,phoneFrictionChallengeDisplayPlace:n}=(0,u.useContext)(x.Z);return n!==E.a.AD_CONTACT_BOTTOM_BAR?null:h().createElement(h().Fragment,null,t&&h().createElement($,null,t),e&&h().createElement($,null,h().createElement(H.ErrorMessage,null,e)))},te=n(3275),ne=n(17918);function ae(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var le=(0,te.j)("chat-contact-bar-highlight-seen"),ie=e=>{var{children:t,chatEnabled:n,callEnabled:a,loginRequired:l,onMessageClick:i}=e,{phoneFetchedStatus:r}=(0,u.useContext)(x.Z),o=r===ne.L.REJECTED;return h().createElement(de,null,h().createElement(re,null,h().createElement(oe,null,t,h().createElement(ce,null,n&&h().createElement(se,{bottomSpacing:a},h().createElement(he,null,h().createElement(ue,{showIcon:!0,onClick:()=>{null===i||void 0===i||i()}}))),a&&h().createElement(L,{loginRequired:l,disabledButton:o}))),h().createElement(ee,null)))},re=m.default.div(K||(K=ae(["\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    padding: "," ",";\n    background-color: white;\n"])),(e=>e.theme.space[32]),(e=>e.theme.space[24])),oe=m.default.div(U||(U=ae(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),ce=m.default.div(J||(J=ae(["\n    margin-left: ",";\n    flex-grow: 1;\n    white-space: nowrap;\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n"])),(e=>e.theme.space[8])),se=m.default.div(V||(V=ae(["\n    text-align: center;\n    position: relative;\n    margin-bottom: ",";\n    align-self: flex-end;\n"])),(e=>e.bottomSpacing?e.theme.space[24]:0)),de=m.default.section(G||(G=ae(["\n    position: relative;\n"]))),ue=(0,m.default)((e=>{var{title:t,showIcon:n,onClick:a,className:l}=e,{trackEvent:i}=(0,v.rS)(),{formatMessage:r}=(0,g.useIntl)(),o=(0,u.useCallback)((e=>{i(v.dQ.events.contactByChat,void 0,v.dQ.touchPointButton.sendMessageBottomSection),null===a||void 0===a||a(e)}),[a,i]);return h().createElement(q,{onClick:o,className:l,icon:n?F.default:void 0},null!==t&&void 0!==t?t:r({id:"contact.message",defaultMessage:"Message"}))}))(X||(X=ae(["\n    width: 300px;\n"]))),he=m.default.div(Y||(Y=ae(["\n    position: relative;\n"])))}}]);
//# sourceMappingURL=olxeuweb.ad.chatBottomContactBar.bab55942c.chunk.js.map