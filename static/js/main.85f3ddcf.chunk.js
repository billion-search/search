(this["webpackJsonpbillion-search"]=this["webpackJsonpbillion-search"]||[]).push([[0],{42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(32),i=a.n(c),h=(a(42),a(10)),r=a(3),l=a(4),o=a(5),d=a(7),u=a(6),j=a(34),p=a(18),b=a(15),O=a(8),g=a(1),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).inputRef=s.a.createRef(),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.props.changeSearchVal(e.target.value)}},{key:"handleClick",value:function(e){this.props.changeSearchVal("")}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.props.searchvalue&&this.props.history.push("/s/result/".concat(this.props.searchvalue))}},{key:"keypressHandler",value:function(e){"Enter"===e.key&&(this.inputRef.current.blur(),this.inputRef.current.value="")}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("form",{className:"search",style:{width:this.props.width,height:this.props.height},onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"cont-input",children:[Object(g.jsx)("input",{className:"input-search",value:this.props.searchvalue,onChange:this.handleChange,ref:this.inputRef,onKeyPress:function(t){return e.keypressHandler(t)}}),""===this.props.searchvalue?"":Object(g.jsx)(p.a,{className:"clear-search",size:"1.2em",onClick:this.handleClick})]}),Object(g.jsx)("span",{className:"gap-search"}),Object(g.jsx)(b.b,{to:"/s/result",onClick:this.handleSubmit,children:Object(g.jsx)(j.a,{className:"icon-search",size:"1em"})})]})}}]),a}(n.Component),k=Object(O.f)(m),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.props.changeSearchVal("")}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"logo-billion",style:{fontSize:this.props.size},children:Object(g.jsxs)(b.b,{to:"/search",onClick:this.handleClick,children:[Object(g.jsx)("span",{className:"child1",children:"B"}),Object(g.jsx)("span",{className:"child2",children:"illion"})]})})}}]),a}(n.Component),x=a(35),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"opt-weig",children:[Object(g.jsxs)("label",{className:"container ligth-container",children:["WeighterBool",Object(g.jsx)("input",{onChange:this.props.onChange,type:"radio",defaultChecked:"WeighterBool"===this.props.active,name:"sous-radio1",value:"WeighterBool"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"container ligth-container",children:["WeighterTF",Object(g.jsx)("input",{onChange:this.props.onChange,type:"radio",defaultChecked:"WeighterTF"===this.props.active,name:"sous-radio1",value:"WeighterTF"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"container ligth-container",children:["WeighterIDF",Object(g.jsx)("input",{onChange:this.props.onChange,type:"radio",defaultChecked:"WeighterIDF"===this.props.active,name:"sous-radio1",value:"WeighterIDF"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"container ligth-container",children:["WeighterLogTF",Object(g.jsx)("input",{onChange:this.props.onChange,type:"radio",defaultChecked:"WeighterLogTF"===this.props.active,name:"sous-radio1",value:"WeighterLogTF"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"container ligth-container",children:["WeighterLog",Object(g.jsx)("input",{onChange:this.props.onChange,type:"radio",defaultChecked:"WeighterLog"===this.props.active,name:"sous-radio1",value:"WeighterLog"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]})]})}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state=Object(h.a)({},e.initOpt),n.state.show=!1,n.oldOpt=Object(h.a)({},n.state),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleClickClose=n.handleClickClose.bind(Object(o.a)(n)),n.handleClickOpt=n.handleClickOpt.bind(Object(o.a)(n)),n.handleChangeWg=n.handleChangeWg.bind(Object(o.a)(n)),n.handleChangeModel=n.handleChangeModel.bind(Object(o.a)(n)),n.handleChangeNorm=n.handleChangeNorm.bind(Object(o.a)(n)),n.handleChangeB=n.handleChangeB.bind(Object(o.a)(n)),n.handleChangeK1=n.handleChangeK1.bind(Object(o.a)(n)),n.handleChangeSigma=n.handleChangeSigma.bind(Object(o.a)(n)),n.handleClickSave=n.handleClickSave.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleClickSave",value:function(){this.oldOpt.show=!1,this.setState({show:!1}),this.oldOpt=Object(h.a)({},this.state),this.props.setOpt(this.state)}},{key:"handleChangeB",value:function(e){this.setState({b:e.target.value})}},{key:"handleChangeK1",value:function(e){this.setState({k1:e.target.value})}},{key:"handleChangeSigma",value:function(e){this.setState({sigma:e.target.value})}},{key:"handleChangeNorm",value:function(e){this.setState({norm:!this.state.norm})}},{key:"handleChangeWg",value:function(e){this.setState({wg:e.target.value})}},{key:"handleChangeModel",value:function(e){this.setState({model:e.target.value})}},{key:"handleClick",value:function(){this.setState({show:!0})}},{key:"handleClickClose",value:function(){this.oldOpt.show=!1,this.setState(Object(h.a)({},this.oldOpt))}},{key:"handleClickOpt",value:function(e){e.stopPropagation()}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"setting",children:[Object(g.jsx)(x.a,{size:35,className:"setting-icon",onClick:this.handleClick}),this.state.show?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"setting-opt-bcg",onClick:this.handleClickClose,children:Object(g.jsxs)("div",{className:"setting-opt",onClick:this.handleClickOpt,children:[Object(g.jsx)(p.a,{className:"setting-opt-close",size:"1.2em",onClick:this.handleClickClose}),Object(g.jsxs)("div",{className:"opt",children:[Object(g.jsx)("div",{className:"weig",children:"Weighter"}),Object(g.jsx)(f,{onChange:this.handleChangeWg,active:this.state.wg})]}),Object(g.jsxs)("div",{className:"opt",children:[Object(g.jsxs)("label",{className:"container radio-container",children:["Vectoriel",Object(g.jsx)("input",{onChange:this.handleChangeModel,value:"Vectoriel",type:"radio",defaultChecked:"Vectoriel"===this.state.model,name:"radio"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"container checkbox-container ligth-container",children:["Normalized",Object(g.jsx)("input",{type:"checkbox",defaultChecked:this.state.norm,onChange:this.handleChangeNorm}),Object(g.jsx)("span",{className:"checkmark checkbox-checkmark"})]})]}),Object(g.jsxs)("div",{className:"opt",children:[Object(g.jsxs)("label",{className:"container radio-container",children:["ModeleLangue",Object(g.jsx)("input",{value:"ModeleLangue",defaultChecked:"ModeleLangue"===this.state.model,onChange:this.handleChangeModel,type:"radio",name:"radio"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"ligth-container text-container",children:["sigma",Object(g.jsx)("input",{className:"input-text",value:this.state.sigma,onChange:this.handleChangeSigma})]})]}),Object(g.jsxs)("div",{className:"opt",children:[Object(g.jsxs)("label",{className:"container radio-container",children:["OkapiBM25",Object(g.jsx)("input",{value:"OkapiBM25",defaultChecked:"OkapiBM25"===this.state.model,onChange:this.handleChangeModel,type:"radio",name:"radio"}),Object(g.jsx)("span",{className:"checkmark radio-checkmark"})]}),Object(g.jsxs)("label",{className:"ligth-container text-container",children:["k1",Object(g.jsx)("input",{className:"input-text",value:this.state.k1,onChange:this.handleChangeK1})]}),Object(g.jsxs)("label",{className:"ligth-container text-container",children:["b",Object(g.jsx)("input",{className:"input-text",value:this.state.b,onChange:this.handleChangeB})]})]}),Object(g.jsx)("div",{className:"setting-save",onClick:this.handleClickSave,children:"Save"})]})})}):""]})}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"accueil",children:[Object(g.jsx)(C,{setOpt:this.props.setOpt,initOpt:this.props.initOpt}),Object(g.jsx)(v,{size:"120px",changeSearchVal:this.props.changeSearchVal}),Object(g.jsx)(k,{changeSearchVal:this.props.changeSearchVal,searchvalue:this.props.searchvalue,width:"60%",height:"50px"})]})}}]),a}(n.Component),N=a(36),S=a.n(N),R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e="/s/doc/".concat(this.props.doc.getId());return Object(g.jsxs)("div",{className:"docres",children:[Object(g.jsx)(b.b,{to:e,children:Object(g.jsxs)("div",{className:"docres-head",children:[Object(g.jsx)("span",{className:"docres-link",children:e}),Object(g.jsx)("span",{className:"docres-title",children:this.props.doc.getTitle(.1)})]})}),Object(g.jsx)("span",{className:"docres-text",children:this.props.doc.getText(.1)})]})}}]),a}(n.Component),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=[];return this.props.listRes.forEach((function(t){e.push(Object(g.jsx)(R,{doc:t},t.getId()))})),Object(g.jsx)("div",{className:"listres",children:1===e.length&&-1===this.props.listRes[0].getId()?Object(g.jsx)("span",{style:{fontSize:"0.8em"},children:"Your search did not match any\n          documents."}):e})}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).oldq="",n}return Object(l.a)(a,[{key:"getPages",value:function(){var e=this.props.location.pathname.split("/"),t=e[e.length-1];t!==this.oldq&&(this.props.search(t),this.oldq=t)}},{key:"componentDidUpdate",value:function(){this.getPages()}},{key:"componentDidMount",value:function(){this.getPages()}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"result",children:[Object(g.jsxs)("div",{className:"result-head",children:[this.props.load?Object(g.jsx)(S.a,{type:"cylon",color:"#adb5bd",height:"5em",width:"5em",className:"load"}):"",Object(g.jsx)(C,{setOpt:this.props.setOpt,initOpt:this.props.initOpt}),Object(g.jsx)(v,{size:"35px",changeSearchVal:this.props.changeSearchVal}),Object(g.jsx)(k,{search:this.props.search,changeSearchVal:this.props.changeSearchVal,searchvalue:this.props.searchvalue,width:"40%",height:"40px"})]}),Object(g.jsx)("span",{className:"gap-result"}),Object(g.jsx)(V,{listRes:this.props.listRes})]})}}]),a}(n.Component),w=Object(O.f)((function(e){return Object(g.jsx)(W,Object(h.a)({},e))})),M=a(37),L=a.n(M),T=function(){function e(t,a,n,s,c){Object(r.a)(this,e),this.id=t,this.title=a,this.text=s,this.auteur=n,this.link=c}return Object(l.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getTitle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=~~(this.title.length*e);return t<55&&(t=55),"".concat(this.title.substring(0,t)).concat(this.title.length>=55&&1!==e?"....":"")}},{key:"getText",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=~~(this.text.length*e);return t<200&&(t=200),"".concat(this.text.substring(0,t)).concat(this.text.length>=200&&1!==e?"....":"")}},{key:"getAuteur",value:function(){return this.auteur}},{key:"getLink",value:function(){return this.link}}],[{key:"searchDoc",value:function(t,a,n,s){var c=JSON.stringify({opt:t,query:a});L.a.post("http://127.0.0.1:5000/search",c,{headers:{"Content-Type":"application/json"}}).then((function(t){var a=e.parserDoc(t.data.ranking);"ok"===t.data.state?n(a):s(a)})).catch((function(){s()}))}},{key:"parserDoc",value:function(t){var a=[];return t.forEach((function(t){a.push(new e(t.id,t.metadata.titre,t.metadata.auteur,t.metadata.texte,[]))})),a}}]),e}(),B=(a(67),a(68),a(69),a(70),a(71),a(72),a(73),a(74),a(75),a(76),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"randomColorHax",value:function(){for(var e=Math.floor(16777215*Math.random()).toString(16),t=0;"000000"===e&&t<100;)e=Math.floor(16777215*Math.random()).toString(16),t+=1;return e}},{key:"render",value:function(){var e=this.props.doc.getText(1);return Object(g.jsxs)("div",{className:"pagedoc",style:{background:"#".concat(this.randomColorHax())},children:[Object(g.jsx)("h1",{className:"pagedoc-title",children:this.props.doc.getTitle(1)}),Object(g.jsxs)("span",{className:"pagedoc-text",children:[Object(g.jsx)("span",{className:"pagedoc-begin-text",children:e[0]}),e.substring(1,e.length)]}),Object(g.jsx)("div",{className:"pagedoc-cnt-auteur",children:Object(g.jsx)("span",{className:"pagedoc-auteur",children:this.props.doc.getAuteur()})})]})}}]),a}(n.Component)),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=[];return this.props.listRes.forEach((function(t){e.push(Object(g.jsx)(O.a,{path:"/s/doc/".concat(t.getId()),exact:!0,render:function(e){return Object(g.jsx)(B,Object(h.a)(Object(h.a)({},e),{},{doc:t}))}},t.getId()))})),Object(g.jsx)("div",{className:"uidoc",children:e})}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"ErreurPath"})}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={load:!0,opt:{show:!1,model:"Vectoriel",wg:"WeighterBool",norm:!0,b:.75,k1:1.2,sigma:.1},searchvalue:"",listRes:[]},n.changeSearchVal=n.changeSearchVal.bind(Object(o.a)(n)),n.callbackSearch=n.callbackSearch.bind(Object(o.a)(n)),n.callbackSearchCatch=n.callbackSearchCatch.bind(Object(o.a)(n)),n.setListRes=n.setListRes.bind(Object(o.a)(n)),n.setOpt=n.setOpt.bind(Object(o.a)(n)),n.search=n.search.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"setOpt",value:function(e){this.setState({opt:e})}},{key:"changeSearchVal",value:function(e){this.setState({searchvalue:e})}},{key:"setListRes",value:function(e){this.setState({listRes:e})}},{key:"setSetting",value:function(e){this.setState({param:e})}},{key:"callbackSearch",value:function(e){this.setListRes(e),this.setState({load:!1})}},{key:"callbackSearchCatch",value:function(e){this.setListRes(e),this.setState({load:!1})}},{key:"search",value:function(e){this.setState({searchvalue:e,load:!0,listRes:[]}),T.searchDoc(this.state.opt,e,this.callbackSearch,this.callbackSearchCatch)}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(b.a,{forceRefresh:!1,children:Object(g.jsxs)(O.c,{children:[Object(g.jsx)(O.a,{path:"/search",exact:!0,render:function(t){return Object(g.jsx)(y,Object(h.a)(Object(h.a)({},t),{},{initOpt:e.state.opt,setOpt:e.setOpt,searchvalue:e.state.searchvalue,changeSearchVal:e.changeSearchVal}))}}),Object(g.jsx)(O.a,{path:"/s/result",render:function(t){return Object(g.jsx)(w,Object(h.a)(Object(h.a)({},t),{},{initOpt:e.state.opt,setOpt:e.setOpt,load:e.state.load,search:e.search,listRes:e.state.listRes,searchvalue:e.state.searchvalue,changeSearchVal:e.changeSearchVal}))}}),Object(g.jsx)(F,{listRes:this.state.listRes}),Object(g.jsx)(O.a,{path:"/s",component:D})]})})})}}]),a}(n.Component),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),z()}},[[77,1,2]]]);
//# sourceMappingURL=main.85f3ddcf.chunk.js.map