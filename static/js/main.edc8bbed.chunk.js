(this["webpackJsonplight-cake"]=this["webpackJsonplight-cake"]||[]).push([[0],{45:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c,s,l,d,u,p,b,g,m,j,h,z,w,k=t(1),f=t.n(k),x=t(20),y=t.n(x),O=t(15),v=t(16),S=t(19),C=t(18),A=t(17),P=t(7),F=t(6),I=t(3),W=t(4),D=Object(W.a)(a||(a=Object(I.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');\n    *, *::before, *::after{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    html {\n        font-size: 62.5%; \n      }\n      \n    body {\n        font-size: 1.6rem;\n        font-family: \"Montserrat\", sans-serif;\n        background-color: cornsilk;\n      }\n\n"]))),V=t(31),J=t(25),E=t(2),M=W.c.nav(i||(i=Object(I.a)(["\n    background: rgb(55,188,228);\n    background: linear-gradient(90deg, rgb(55, 188, 228) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);\n    height: 80px;\n    display: flex;\n"]))),B=W.c.ul(o||(o=Object(I.a)(["\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    justify-content: space-between;\n"]))),N=Object(W.c)(P.b)(r||(r=Object(I.a)(["\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 2.4rem;\n    display: flex;\n    color: cornsilk;\n"]))),L=Object(W.c)(V.a)(c||(c=Object(I.a)(["\n    margin: 0;\n"]))),q=W.c.h1(s||(s=Object(I.a)(["\n    text-transform: uppercase;\n"]))),K=W.c.div(l||(l=Object(I.a)(["\n        display: none;\n    @media screen and (max-width: 960px){\n        display: block;\n        position: absolute;\n        top: 0px;\n        right: 0;\n        transform: translate(-100%, 60%);\n        cursor: pointer;\n        font-size: 3rem;\n    }\n"]))),Z=W.c.ul(d||(d=Object(I.a)(["\n    list-style-type: none;\n    width: 50%;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: space-around;\n        @media screen and (max-width: 960px){\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 90vh;\n        position: absolute;\n        top: 80px;\n        left: ",";\n        background-color:  #ffcff1;\n        transition: all .5s ease;\n        }\n    "])),(function(n){return n.mobile?0:"-100%"})),T=W.c.li(u||(u=Object(I.a)(["\n    border-bottom: 2px solid transparent;\n    &:hover{\n        border-bottom: 2px solid #ff1493;\n        transition: all .5s ease;\n    }\n\n    @media screen and (max-width: 960px){\n        width: 100%;\n        &:hover{\n            border-bottom: 2px solid transparent;\n        }\n    }\n"]))),U=Object(W.c)(P.c)(p||(p=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 2.4rem;\n    color: cornsilk;\n    z-index: 9999;\n    &.active{\n        font-weight: 600;\n        font-size: 2.5rem;\n    }\n"]))),R=function(n){Object(S.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).state={mobileActive:!1},n.handleMobileActive=function(){return n.setState((function(n){return{mobileActive:!n.mobileActive}}))},n.removeMenuMobile=function(){return n.setState({mobileActive:!1})},n}return Object(v.a)(t,[{key:"render",value:function(){var n=this,e=this.state.mobileActive;return Object(E.jsx)(M,{children:Object(E.jsxs)(B,{children:[Object(E.jsxs)(N,{to:"/",onClick:this.removeMenuMobile,children:["Lekkie",Object(E.jsxs)(q,{children:["ci",Object(E.jsx)(L,{}),"cho"]})]}),Object(E.jsx)(K,{onClick:function(){return n.handleMobileActive({mobileActive:e})},children:e?Object(E.jsx)(J.a,{}):Object(E.jsx)(J.b,{})}),e?Object(E.jsxs)(Z,{mobile:!0,children:[Object(E.jsx)(T,{mobile:!0,onClick:this.removeMenuMobile,children:Object(E.jsx)(U,{as:P.c,to:"/zdrowo",children:"Zdrowo"})}),Object(E.jsx)(T,{mobile:!0,onClick:this.removeMenuMobile,children:Object(E.jsx)(U,{as:P.c,to:"/lekko",children:"Lekko"})}),Object(E.jsx)(T,{mobile:!0,onClick:this.removeMenuMobile,children:Object(E.jsx)(U,{as:P.c,to:"/smacznie",children:"Smacznie"})}),Object(E.jsx)(T,{mobile:!0,onClick:this.removeMenuMobile,children:Object(E.jsx)(U,{as:P.c,to:"/kolorowo",children:"Kolorowo"})})]}):Object(E.jsxs)(Z,{children:[Object(E.jsx)(T,{children:Object(E.jsx)(U,{as:P.c,to:"/zdrowo",activeclass:"active",children:"Zdrowo"})}),Object(E.jsx)(T,{children:Object(E.jsx)(U,{as:P.c,to:"/lekko",activeclass:"active",children:"Lekko"})}),Object(E.jsx)(T,{children:Object(E.jsx)(U,{as:P.c,to:"/smacznie",activeclass:"active",children:"Smacznie"})}),Object(E.jsx)(T,{children:Object(E.jsx)(U,{as:P.c,to:"/kolorowo",activeclass:"active",children:"Kolorowo"})})]})]})})}}]),t}(f.a.Component),G=W.c.button(b||(b=Object(I.a)(["\n    background-color: ",";\n    color: ",";\n    white-space: nowrap;\n    border-radius: 5px;\n    padding: ",";\n    font-size: ",";\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n    &:hover{\n        transition: all .4s ease;\n        background-color: ",";\n        color: "," \n    }\n\n    @media screen and (max-width: 960px){\n        width: 90%;\n    }\n\n    ","\n    ","\n"])),(function(n){return n.primary?"#ff1493":"#ffcff1"}),(function(n){return n.primary?"#ffcff1":"#ff1493"}),(function(n){return n.small?"10px 20px":"12px 64px"}),(function(n){return n.bigFont?"20px":"16px"}),(function(n){return n.primary?"#ffcff1":"#ff1493"}),(function(n){return n.primary?"#ff1493":"#ffcff1"}),(function(n){return n.facebookBtn&&Object(W.b)(g||(g=Object(I.a)(["\n        background-color: #4267B2;\n        color: #ffffff;\n        height: 64px;\n        font-weight: 600;\n        transition: all .4s ease;\n        &:hover{\n            background-color: #fff;\n            color: #4267B2; \n        }\n    "])))}),(function(n){return n.instagramBtn&&Object(W.b)(m||(m=Object(I.a)(["\n        background-color: #f05161;\n        color: #ffffff;\n        height: 64px;\n        font-weight: 600;\n        transition: all .4s ease;\n        &:hover{\n            background-color: #fff;\n            color: #f05161; \n        }\n    "])))})),H=t.p+"static/media/cupCake.d98ec466.png",Q=W.c.section(j||(j=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n    background: rgb(55,188,228);\n    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);\n    margin: 0 auto;\n    text-align: center;\n    color: cornsilk;\n    @media (max-width: 960px){\n        flex-direction: column-reverse;\n        height: 100%;\n        padding-bottom: 2rem;\n    }\n"]))),X=W.c.div(h||(h=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-basis: 60%;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    h1{\n        font-size: 10rem;\n        margin: 0 5rem 10rem 0; \n\n    @media(max-width: 960px){\n        font-size: 4.5rem;\n        margin: 3rem auto;\n    }\n    }\n"]))),Y=W.c.div(z||(z=Object(I.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n"]))),$=W.c.img(w||(w=Object(I.a)(["\n    width: 100%;\n    height: 100%;\n    @media (max-width: 960px){\n        width: 70%;\n        height: 70%;\n    }\n"]))),_=function(n){var e=n.title,t=n.color;return Object(E.jsxs)(Q,{color:t,children:[Object(E.jsxs)(X,{children:[Object(E.jsx)("h1",{children:e}),Object(E.jsx)("a",{href:"https://pl-pl.facebook.com/lekkieciacho",children:Object(E.jsx)(G,{primary:!0,facebookBtn:!0,children:"Odwied\u017a Nas na Facebooku"})}),Object(E.jsx)("br",{}),Object(E.jsx)("a",{href:"https://www.instagram.com",children:Object(E.jsx)(G,{primary:!0,instagramBtn:!0,children:"Odwied\u017a Nas na Instagramie"})})]}),Object(E.jsx)(Y,{children:Object(E.jsx)($,{src:H,alt:"Ciacho"})})]})};_.defaultProps={title:"100% ZDROWIA I  LEKKO\u015aCI",color:"cornsilk"};var nn,en,tn,an,on,rn,cn,sn,ln,dn,un,pn,bn=_,gn=W.c.section(nn||(nn=Object(I.a)(["\n    background-color: #9BB7D4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n"]))),mn=function(){return Object(E.jsxs)(gn,{children:[Object(E.jsx)("h1",{children:"Zdrowo"}),Object(E.jsx)("p",{children:"-[W BUDOWIE...]-"})]})},jn=W.c.section(en||(en=Object(I.a)(["\n    background-color: cadetblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n"]))),hn=function(){return Object(E.jsxs)(jn,{children:[Object(E.jsx)("h1",{children:"Lekko"}),Object(E.jsx)("p",{children:"-[W BUDOWIE...]-"})]})},zn=t(26),wn=t.p+"static/media/defaultCookie.bbf83659.jpg",kn=W.c.div(tn||(tn=Object(I.a)(["\n    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);\n    color: cornsilk;\n    width: 340px;\n    height: 380px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 25px;\n    background-color: ",";\n    margin: 25px 10px;\n    transition: all .3s ease;\n    @media screen and (max-width: 960px){\n        margin: 25px 15px;\n        width: 310px;\n        height: 350px;\n    }\n    :hover{\n        cursor: pointer;\n    }\n    :hover h2{\n        color: #ff1493;\n    }\n"])),(function(n){return n.bgColor||"#9BB7D4"})),fn=W.c.p(an||(an=Object(I.a)(["\n    flex-basis: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),xn=W.c.div(on||(on=Object(I.a)(["\n    flex-basis: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-height: 220px;\n    max-width: 340px;\n    @media screen and (max-width: 960px){\n        max-height: 220px;\n        max-width: 320px;\n    }\n"]))),yn=W.c.img(rn||(rn=Object(I.a)(["\n    width: 100%;\n    height: 100%;\n"]))),On=W.c.h2(cn||(cn=Object(I.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 20%;\n"]))),vn=W.c.p(sn||(sn=Object(I.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;    \n    flex-basis: 10%;\n"]))),Sn=function(n){Object(S.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).state={redirect:!1},n.handleViewportCard=function(){n.setState({redirect:!0})},n}return Object(v.a)(t,[{key:"render",value:function(){var n=Object.assign({},this.props);return this.state.redirect?Object(E.jsx)(F.a,{to:"smacznie/".concat(n.id)}):Object(E.jsxs)(kn,{bgColor:n.backgroundColor,onClick:this.handleViewportCard,children:[Object(E.jsx)(fn,{superInfo:n.superInfo,children:n.superInfo?"".concat(n.superInfo):""}),Object(E.jsx)(xn,{children:n.photo?Object(E.jsx)(yn,{src:n.photo}):Object(E.jsx)(yn,{src:wn})}),Object(E.jsx)(On,{children:n.name}),Object(E.jsxs)(vn,{children:[n.prize," ",n.value]})]})}}]),t}(f.a.Component),Cn=W.c.section(ln||(ln=Object(I.a)(["\n    background: rgb(55,188,228);\n    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);\n    min-height: 100vh;\n    margin: 0 auto;\n    text-align: center;\n"]))),An=W.c.h1(dn||(dn=Object(I.a)(["\n    font-size: 5rem;\n    color: cornsilk;\n    padding: 3rem;\n"]))),Pn=W.c.p(un||(un=Object(I.a)(["\n    font-size: 1.8rem;\n    padding: 3rem 5%;\n    color: cornsilk;\n"]))),Fn=W.c.section(pn||(pn=Object(I.a)(["\n    display: flex;\n    padding: 0 5%;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    @media screen and (max-width: 960px){\n        padding: 0;\n    }\n"]))),In=function(n){var e=n.cakes;return Object(E.jsxs)(Cn,{children:[Object(E.jsx)(An,{children:"Spe\u0142niamy s\u0142odkie marzenia!"}),Object(E.jsx)(Pn,{children:"Dostosowujemy si\u0119 do potrzeb klient\xf3w. Jeste\u015b alegrikiem, cukrzykiem, sportowcem, a mo\u017ce jeste\u015b na diecie albo po prostu zdrowo si\u0119 od\u017cywiasz? Niezale\u017cnie kim jeste\u015b b\u0105d\u017a co robisz, u Nas zawsze znajdziesz co\u015b dla siebie!"}),Object(E.jsx)(Fn,{children:e.map((function(n){return Object(k.createElement)(Sn,Object(zn.a)(Object(zn.a)({},n),{},{key:n.id}))}))})]})};In.defaultProps={cakes:[]};var Wn,Dn,Vn,Jn,En,Mn,Bn,Nn,Ln,qn,Kn,Zn,Tn,Un,Rn,Gn,Hn,Qn,Xn,Yn,$n,_n,ne,ee=Object(A.b)((function(n){return{cakes:n.cakes}}))(In),te=t.p+"static/media/LogoLekkieCiacho.b240eef9.jpg",ae=W.c.section(Wn||(Wn=Object(I.a)(["\n    background: rgb(55,188,228);\n    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);   \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 100vh;\n"]))),ie=W.c.img(Dn||(Dn=Object(I.a)(["\n    width: 350px;\n    height: 350px;\n    border-radius: 50%;\n    margin: 2rem 0;\n    @media screen and (max-width: 960px){\n        width: 275px;\n        height: 275px;\n    }\n"]))),oe=W.c.h1(Vn||(Vn=Object(I.a)(["\n    font-size: 3.6rem;\n    color: #fff;\n    margin: 2rem auto;\n"]))),re=W.c.p(Jn||(Jn=Object(I.a)(["\n    font-size: 2rem;\n    color: #fff;\n    width: 40%;\n    text-indent: 1.5rem;\n    line-height: 2.4rem;\n    text-align: center;\n    margin-bottom: 1.5rem;\n    @media (max-width: 960px){\n        font-size: 1.8rem;\n        width: 95%;\n    }\n"]))),ce=function(){return Object(E.jsxs)(ae,{children:[Object(E.jsx)(ie,{src:te}),Object(E.jsx)(oe,{children:"Kolorowo"}),Object(E.jsx)(re,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet neque nisi. Proin vel elit tincidunt, lobortis felis a, convallis massa. Suspendisse potenti. Aenean quis orci et neque venenatis varius. Proin volutpat ultricies elementum. Morbi nec mollis nibh, ut sollicitudin tellus. Etiam ullamcorper imperdiet porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at libero nibh. Aenean sed finibus diam. Cras erat nibh, elementum id consequat quis, dignissim id nunc."}),Object(E.jsx)(re,{children:"Maecenas rhoncus nunc a turpis pretium commodo. Fusce non congue justo. Phasellus sit amet vulputate est. Mauris dapibus interdum lectus, vitae lobortis neque bibendum a. Fusce vitae massa justo. Duis eu luctus turpis, at commodo libero. Nunc sodales consectetur ultrices. Sed mollis dapibus mi, sit amet blandit justo auctor sed. Fusce tincidunt ligula eget ipsum rutrum aliquam. Aliquam erat volutpat. Donec varius felis ut sem malesuada scelerisque. Donec at ultricies nulla. Vivamus volutpat commodo enim, non accumsan diam rhoncus non. Curabitur non sem maximus, tempus orci eleifend, mattis nibh."})]})},se=t(9),le=t.n(se),de=t(32),ue="/",pe="/zdrowo",be="/lekko",ge="/smacznie",me="/smacznie/:id",je="/kolorowo",he=W.c.div(En||(En=Object(I.a)(["\n    background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    padding: 5% 0;\n"]))),ze=W.c.section(Mn||(Mn=Object(I.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    height: 80vh;\n    min-height: 80vh;\n    max-height: 100vh;\n    background: rgb(55,188,228);\n    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);\n    width: 80%;\n    margin: 0 auto;\n    border-radius: 25px;\n    @media screen and (max-width: 960px){\n        height: auto;\n        max-height: 100%;\n        width: 90%;\n    }\n    \n"]))),we=W.c.header(Bn||(Bn=Object(I.a)(["\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n    padding: 2rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;  \n    flex-basis: 10%;\n    background-color: ",";\n"])),(function(n){return n.backgroundColor})),ke=W.c.div(Nn||(Nn=Object(I.a)(["\n    text-align: center;\n    flex-basis: 5%;\n    opacity: 1;\n    line-height: 10%;\n"]))),fe=Object(W.c)(de.a)(Ln||(Ln=Object(I.a)(["\n    font-size: 5rem;\n    color: #fff;\n    border: 2px solid #37bce4;\n    border-radius: 50%;\n    transition: all .3s ease;\n    @media screen and (max-width: 960px){\n        font-size: 3rem;\n    }\n    :hover{\n        cursor: pointer;\n        color: #37bce4;\n        border-color: #fff;\n    }\n"]))),xe=W.c.div(qn||(qn=Object(I.a)(["\n    width: 100%;\n    text-align: center;\n    padding-left: 10px;\n"]))),ye=W.c.h2(Kn||(Kn=Object(I.a)(["\n    font-size: 4rem;\n    color: #fff;\n    @media screen and (max-width: 960px){\n        font-size: 1.6rem;\n    }\n"]))),Oe=W.c.div(Zn||(Zn=Object(I.a)(["\n    display: flex;\n    width: 100%;\n    flex-basis: calc(90% - 25px);\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n    flex-wrap: wrap;\n    @media screen and (max-width: 960px){\n        flex-direction: column;\n        justify-content: flex-start;\n        padding: 0;\n    }\n"]))),ve=W.c.div(Tn||(Tn=Object(I.a)(["\n    display: flex;\n    flex-basis: 60%;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 80%;\n    @media screen and (max-width: 960px){\n        align-items: flex-start;\n    }\n"]))),Se=W.c.img(Un||(Un=Object(I.a)(["\n    width: 80%;\n    height: 75%;\n    max-width: 95%;\n    max-height: 95%;\n    background-color: transparent;\n    border-radius: 5px;\n    @media screen and (max-width: 960px){\n        width: 100%;\n        max-width: 100%;\n    }\n"]))),Ce=W.c.div(Rn||(Rn=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-basis: 40%;\n    width: 100%;\n    height: 85%;\n    justify-content: center;\n    align-items: center;\n    color: cornsilk;\n    @media screen and (max-width: 960px){\n        flex-basis: 100%;\n        align-items: flex-start;\n        height: auto;\n    }\n"]))),Ae=W.c.p(Gn||(Gn=Object(I.a)(["\n    font-size: 1.6rem;\n    padding: 1.6rem;\n"]))),Pe=W.c.p(Hn||(Hn=Object(I.a)(["\n    font-size: 1.6rem;\n    padding: 1.2rem;\n    @media screen and (max-width: 960px){\n        align-self: flex-end;\n    }\n"]))),Fe=W.c.p(Qn||(Qn=Object(I.a)(["\n    font-size: 2.2rem;\n    padding: 1.2rem;\n    color: tomato;\n    @media screen and (max-width: 960px){\n        align-self: center;\n    }\n"]))),Ie=W.c.p(Xn||(Xn=Object(I.a)(["\n    font-weight: bold;\n    font-size: 1.6rem;\n    margin-left: 1.2rem;\n    color: ",";\n"])),(function(n){return n.textColor})),We=W.c.p(Yn||(Yn=Object(I.a)(["\n    font-size: 1.6rem;\n    padding: .3rem;\n    margin-left: 1.4rem;\n"]))),De=W.c.div($n||($n=Object(I.a)(["\n    color: cornsilk;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 90%;\n    flex-wrap: wrap;\n    @media screen and (max-width: 960px){\n        margin: 1.6rem 0;\n        justify-content: center;\n    }\n"]))),Ve=W.c.p(_n||(_n=Object(I.a)(["\n    font-size: 1.6rem;\n    font-weight: bold;\n    flex-basis: 100%;\n    color: ",";\n"])),(function(n){return n.textColor})),Je=W.c.p(ne||(ne=Object(I.a)(["\n    font-size: 1.6rem;\n    flex-basis: 90%;\n"]))),Ee=function(n){var e=n.name,t=n.photo,a=n.prize,i=n.value,o=n.suplementsFacts,r=n.description,c=n.nutritionalValue,s=n.weight,l=n.backgroundColor;return Object(E.jsx)(he,{children:Object(E.jsxs)(ze,{children:[Object(E.jsxs)(we,{backgroundColor:l,children:[Object(E.jsx)(ke,{as:P.b,to:ge,children:Object(E.jsx)(fe,{})}),Object(E.jsx)(xe,{children:Object(E.jsx)(ye,{children:e})})]}),Object(E.jsxs)(Oe,{children:[Object(E.jsx)(ve,{children:Object(E.jsx)(Se,{src:t})}),Object(E.jsxs)(Ce,{children:[Object(E.jsx)(Ae,{children:r}),Object(E.jsxs)(Pe,{children:["Waga: ",s," g"]}),Object(E.jsxs)(Fe,{children:["Cena: ",a," ",i]}),Object(E.jsx)(Ie,{textColor:l,children:"Warto\u015b\u0107 od\u017cywcza produktu:"}),Object(E.jsxs)(We,{children:["W ",c.grammage," gramach:"]}),Object(E.jsxs)(We,{children:["Energia: ",c.energy.kJ," kJ / ",c.energy.kcal," kcal "]}),Object(E.jsxs)(We,{children:["T\u0142uszcz: ",c.fat," g, w tym kwasy t\u0142uszczowe nasycone: ",c.includingSaturatedSattyAcids," g"]}),Object(E.jsxs)(We,{children:["W\u0119glowodany: ",c.carbohydrates," g, w tym cukry ",c.includingSugars," g"]}),Object(E.jsxs)(We,{children:["Bia\u0142ko: ",c.protein]}),Object(E.jsxs)(We,{children:["S\xf3l: ",c.salt]})]}),Object(E.jsxs)(De,{children:[Object(E.jsx)(Ve,{textColor:l,children:"Sk\u0142ad:"}),Object(E.jsx)(Je,{children:o})]})]})]})})};Ee.defaultProps={photo:"https://images.pexels.com/photos/5898232/pexels-photo-5898232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",prize:99999,value:"PropTypes.string",weight:99999,suplementsFacts:"Sk\u0142adniki",description:"Opis",backgroundColor:"#fff",nutritionalValue:le.a.shape({grammage:99999,energy:le.a.shape({kJ:99999,kcal:99999}),fat:99999,includingSaturatedSattyAcids:99999,carbohydrates:99999,includingSugars:99999,protein:99999,salt:99999})};var Me=Ee,Be=function(n){var e=n.activeCakeProps;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(Me,{name:e.name,photo:e.photo,prize:e.prize,value:e.value,superInfo:e.superInfo,suplementsFacts:e.suplementsFacts,description:e.description,backgroundColor:e.backgroundColor,nutritionalValue:e.nutritionalValue,weight:e.weight})})};Be.defaultProps={activeCakeProps:le.a.shape({photo:"https://images.pexels.com/photos/5898232/pexels-photo-5898232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",prize:99999,value:"PropTypes.string",weight:99999,suplementsFacts:"Sk\u0142adniki",description:"Opis",backgroundColor:"#fff",nutritionalValue:le.a.shape({grammage:99999,energy:le.a.shape({kJ:99999,kcal:99999}),fat:99999,includingSaturatedSattyAcids:99999,carbohydrates:99999,includingSugars:99999,protein:99999,salt:99999})})};var Ne=Object(F.g)(Object(A.b)((function(n,e){return{activeCakeProps:n.cakes.find((function(n){return n.id===Number(e.match.params.id)}))}}))(Be)),Le=t(33),qe=t.p+"static/media/Biscuits.16523ca6.jpg",Ke={cakes:[{id:1,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#FDAC53",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:2,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:200,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#A0DAA9",nutritionalValue:{grammage:200,energy:{kJ:200,kcal:200},fat:200,includingSaturatedSattyAcids:200,carbohydrates:200,includingSugars:200,protein:200,salt:200}},{id:3,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#E9897E",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:4,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#00A170",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:5,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:500,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#926AA6",nutritionalValue:{grammage:500,energy:{kJ:500,kcal:500},fat:500,includingSaturatedSattyAcids:500,carbohydrates:500,includingSugars:500,protein:500,salt:500}},{id:6,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#FDAC53",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:7,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:200,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#A0DAA9",nutritionalValue:{grammage:200,energy:{kJ:200,kcal:200},fat:200,includingSaturatedSattyAcids:200,carbohydrates:200,includingSugars:200,protein:200,salt:200}},{id:8,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#E9897E",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:9,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#00A170",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:10,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:500,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#926AA6",nutritionalValue:{grammage:500,energy:{kJ:500,kcal:500},fat:500,includingSaturatedSattyAcids:500,carbohydrates:500,includingSugars:500,protein:500,salt:500}},{id:11,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#FDAC53",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:12,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:200,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#A0DAA9",nutritionalValue:{grammage:200,energy:{kJ:200,kcal:200},fat:200,includingSaturatedSattyAcids:200,carbohydrates:200,includingSugars:200,protein:200,salt:200}},{id:13,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#E9897E",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:14,name:"P\u0105czek z chrzanem",photo:qe,prize:27.99,value:"z\u0142/szt",weight:100,superInfo:"Nowo\u015b\u0107",suplementsFacts:"grab, jesion, buk, jab\u0142o\u0144, grusza lub \u015bliwa",description:"Drewno do palenia w kominku powinno by\u0107 sezonowane od roku do nawet 3 lat w zale\u017cno\u015bci od gatunku. W\xf3wczas jego wilgotno\u015b\u0107 spada do 15-20%.",backgroundColor:"#00A170",nutritionalValue:{grammage:100,energy:{kJ:100,kcal:100},fat:100,includingSaturatedSattyAcids:100,carbohydrates:100,includingSugars:100,protein:100,salt:100}},{id:15,name:"P\u0105czek z czosnkiem",prize:8.99,value:"z\u0142/szt",weight:500,superInfo:"Przeterminowany",suplementsFacts:"soda oczyszczona, mas\u0142o, cukier trzcinowy, szpachla g\u0142adzi gipsowej bia\u0142ej CEKOL-F16, jaja, imbir marynowany",description:"Produkt wykonany jest z prostok\u0105tnej stalowej blachy, wzd\u0142u\u017c kt\xf3rej po obu stronach powycinane s\u0105 prostok\u0105tne kierownice poodginane na przemian w d\xf3\u0142 i w g\xf3r\u0119. W zale\u017cno\u015bci od ilo\u015bci kierownic znajduj\u0105cych si\u0119 w zawirowywaczu i k\u0105ta ich zagi\u0119cia zale\u017ce\u0107 b\u0119dzie stopie\u0144 wykorzystania ciep\u0142a, kt\xf3re wraz ze spalinami uchodzi\u0107 b\u0119dzie z kot\u0142a do komina.",backgroundColor:"#926AA6",nutritionalValue:{grammage:500,energy:{kJ:500,kcal:500},fat:500,includingSaturatedSattyAcids:500,carbohydrates:500,includingSugars:500,protein:500,salt:500}}]},Ze=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;return n},Te=Object(Le.a)(Ze),Ue=function(n){Object(S.a)(t,n);var e=Object(C.a)(t);function t(){return Object(O.a)(this,t),e.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return Object(E.jsxs)(A.a,{store:Te,children:[Object(E.jsxs)(P.a,{children:[Object(E.jsx)(D,{}),Object(E.jsx)(R,{}),Object(E.jsxs)(F.d,{children:[Object(E.jsx)(F.b,{exact:!0,path:ue,component:bn}),Object(E.jsx)(F.b,{path:pe,component:mn}),Object(E.jsx)(F.b,{path:be,component:hn}),Object(E.jsx)(F.b,{path:me,component:Ne}),Object(E.jsx)(F.b,{path:ge,component:ee}),Object(E.jsx)(F.b,{path:je,component:ce})]})]}),Object(E.jsx)("div",{children:"Footer -[W BUDOWIE...]"})]})}}]),t}(f.a.Component);y.a.render(Object(E.jsx)(f.a.StrictMode,{children:Object(E.jsx)(Ue,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.edc8bbed.chunk.js.map