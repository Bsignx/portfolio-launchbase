(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{CuO7:function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv"),n("a1gu"),n("Nsbk");var a=n("VbXa"),o=n.n(a),r=n("q1tI"),l=n.n(r),i=n("17x9"),c=n.n(i),u=n("ANjH"),p=n("/MKj"),s=n("QEnK"),d=n.n(s),h=n("RPlC");n("dYZn");var m={guideUrl:c.a.string,openHelpModal:c.a.func.isRequired},b=function(e){o()(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}return n.prototype.render=function(){var e=this.props,t=e.guideUrl,n=e.openHelpModal;return l.a.createElement("div",{className:"tool-panel-group project-tool-panel"},t&&l.a.createElement(d.a,{block:!0,bsStyle:"primary",className:"btn-invert",href:t,target:"_blank"},"Get a hint"),l.a.createElement(d.a,{block:!0,bsStyle:"primary",className:"btn-invert",onClick:n},"Ask for help"))},n}(r.Component);b.displayName="ProjectToolPanel",b.propTypes=m,t.a=Object(p.b)((function(){return{}}),(function(e){return Object(u.bindActionCreators)({openHelpModal:function(){return Object(h.I)("help")}},e)}))(b)},DXqF:function(e,t,n){"use strict";n("a1Th"),n("Btvt"),n("I5cv"),n("91GP");var a=n("PJYZ"),o=n.n(a),r=(n("a1gu"),n("Nsbk"),n("VbXa")),l=n.n(r),i=n("q1tI"),c=n.n(i),u=n("17x9"),p=n.n(u),s=n("Beh1");var d={isFrontEnd:p.a.bool,isSubmitting:p.a.bool,onSubmit:p.a.func.isRequired,updateProjectForm:p.a.func.isRequired},h=["solution"],m=["solution","githubLink"],b={types:{solution:"url",githubLink:"url"},required:["solution"]},g=function(e){l()(n,e);var t;t=n;function n(t){var n;return(n=e.call(this,t)||this).handleSubmit=n.handleSubmit.bind(o()(n)),n}var a=n.prototype;return a.componentDidMount=function(){this.props.updateProjectForm({})},a.handleSubmit=function(e){this.props.updateProjectForm(e),this.props.onSubmit()},a.render=function(){var e=this.props,t=e.isSubmitting,n=e.isFrontEnd,a=t?"Submit and go to my next challenge":"I've completed this challenge";return c.a.createElement(s.c,{buttonText:""+a,formFields:n?h:m,id:n?"front-end-form":"back-end-form",options:Object.assign({},b,{placeholders:{solution:"Link to solution, ex: "+(n?"https://codepen.io/camperbot/full/oNvPqqo":"https://camperbot.glitch.me"),githubLink:"Link to GitHub repo, ex: https://github.com/camperbot/hello"}}),submit:this.handleSubmit})},n}(i.Component);g.propTypes=d,t.a=g},dYZn:function(e,t,n){},lej5:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return S})),n.d(t,"query",(function(){return R}));n("a1Th"),n("Btvt"),n("I5cv"),n("91GP"),n("a1gu"),n("Nsbk");var a=n("VbXa"),o=n.n(a),r=n("q1tI"),l=n.n(r),i=n("17x9"),c=n.n(i),u=n("fYt5"),p=n.n(u),s=n("HEPS"),d=n.n(s),h=n("ONLP"),m=n.n(h),b=n("/MKj"),g=n("ANjH"),f=n("TJpk"),v=n.n(f),j=n("i6w1"),C=n("RPlC"),P=n("5bYC"),E=n("0HGt"),y=n("/hYU"),M=n("i0Tn"),k=n("rUbs"),N=n("ImkG"),T=n("DXqF"),q=n("CuO7"),O=n("GbDe"),x=n("Igpu"),I=n("ZcIl");var F={challengeMounted:c.a.func.isRequired,data:c.a.shape({challengeNode:j.c}),openCompletionModal:c.a.func.isRequired,pageContext:c.a.shape({challengeMeta:c.a.object}),updateChallengeMeta:c.a.func.isRequired,updateProjectFormValues:c.a.func.isRequired},S=function(e){o()(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}var a=n.prototype;return a.componentDidMount=function(){var e=this.props,t=e.challengeMounted,n=e.data.challengeNode,a=n.title,o=n.challengeType,r=e.pageContext.challengeMeta;(0,e.updateChallengeMeta)(Object.assign({},r,{title:a,challengeType:o})),t(r.id),this._container.focus()},a.componentDidUpdate=function(e){var t=e.data.challengeNode.title,n=this.props,a=n.challengeMounted,o=n.data.challengeNode,r=o.title,l=o.challengeType,i=n.pageContext.challengeMeta,c=n.updateChallengeMeta;t!==r&&(c(Object.assign({},i,{title:r,challengeType:l})),a(i.id))},a.render=function(){var e=this,t=this.props,n=t.data.challengeNode,a=n.challengeType,o=n.fields.blockName,r=n.forumTopicId,i=n.title,c=n.description,u=t.openCompletionModal,s=t.pageContext.challengeMeta,h=s.introPath,b=s.nextChallengePath,g=s.prevChallengePath,f=t.updateProjectFormValues,j=a===P.frontEndProject,C=o+" - "+i;return l.a.createElement(I.a,{innerRef:function(t){return e._container=t},introPath:h,nextChallengePath:b,prevChallengePath:g},l.a.createElement(y.a,null,l.a.createElement(v.a,{title:C+" | Learn | freeCodeCamp.org"}),l.a.createElement(p.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},l.a.createElement(N.a,null),l.a.createElement(M.a,null,C),l.a.createElement(k.a,{description:c}),l.a.createElement(T.a,{isFrontEnd:j,onSubmit:u,updateProjectForm:f}),l.a.createElement(q.a,{guideUrl:Object(E.a)({forumTopicId:r,title:i})}),l.a.createElement("br",null),l.a.createElement(N.a,null)),l.a.createElement(O.a,{blockName:o}),l.a.createElement(x.a,null)))))},n}(r.Component);S.displayName="Project",S.propTypes=F,t.default=Object(b.b)((function(){return{}}),(function(e){return Object(g.bindActionCreators)({updateChallengeMeta:C.X,challengeMounted:C.h,updateProjectFormValues:C.bb,openCompletionModal:function(){return Object(C.I)("completion")}},e)}))(S);var R="1759216927"}}]);
//# sourceMappingURL=component---src-templates-challenges-projects-frontend-show-js-a5b7c07f77178c0931b8.js.map