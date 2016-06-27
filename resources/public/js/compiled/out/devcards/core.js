// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18459__auto__ = (function (){var and__18447__auto__ = typeof Symbol !== 'undefined';
if(and__18447__auto__){
var and__18447__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18447__auto____$1){
var and__18447__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18447__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18447__auto____$2;
}
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__35110_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__35110_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args35111 = [];
var len__19529__auto___35114 = arguments.length;
var i__19530__auto___35115 = (0);
while(true){
if((i__19530__auto___35115 < len__19529__auto___35114)){
args35111.push((arguments[i__19530__auto___35115]));

var G__35116 = (i__19530__auto___35115 + (1));
i__19530__auto___35115 = G__35116;
continue;
} else {
}
break;
}

var G__35113 = args35111.length;
switch (G__35113) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35111.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18447__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18447__auto__){
var map__35124 = c;
var map__35124__$1 = ((((!((map__35124 == null)))?((((map__35124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var path = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18447__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__25482__auto___35130 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18459__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25482__auto___35130);
}

var seq__35126_35131 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35127_35132 = null;
var count__35128_35133 = (0);
var i__35129_35134 = (0);
while(true){
if((i__35129_35134 < count__35128_35133)){
var property__25483__auto___35135 = cljs.core._nth.call(null,chunk__35127_35132,i__35129_35134);
if(cljs.core.truth_((base__25482__auto___35130[property__25483__auto___35135]))){
(devcards.core.CodeHighlight.prototype[property__25483__auto___35135] = (base__25482__auto___35130[property__25483__auto___35135]));
} else {
}

var G__35136 = seq__35126_35131;
var G__35137 = chunk__35127_35132;
var G__35138 = count__35128_35133;
var G__35139 = (i__35129_35134 + (1));
seq__35126_35131 = G__35136;
chunk__35127_35132 = G__35137;
count__35128_35133 = G__35138;
i__35129_35134 = G__35139;
continue;
} else {
var temp__4657__auto___35140 = cljs.core.seq.call(null,seq__35126_35131);
if(temp__4657__auto___35140){
var seq__35126_35141__$1 = temp__4657__auto___35140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35126_35141__$1)){
var c__19270__auto___35142 = cljs.core.chunk_first.call(null,seq__35126_35141__$1);
var G__35143 = cljs.core.chunk_rest.call(null,seq__35126_35141__$1);
var G__35144 = c__19270__auto___35142;
var G__35145 = cljs.core.count.call(null,c__19270__auto___35142);
var G__35146 = (0);
seq__35126_35131 = G__35143;
chunk__35127_35132 = G__35144;
count__35128_35133 = G__35145;
i__35129_35134 = G__35146;
continue;
} else {
var property__25483__auto___35147 = cljs.core.first.call(null,seq__35126_35141__$1);
if(cljs.core.truth_((base__25482__auto___35130[property__25483__auto___35147]))){
(devcards.core.CodeHighlight.prototype[property__25483__auto___35147] = (base__25482__auto___35130[property__25483__auto___35147]));
} else {
}

var G__35148 = cljs.core.next.call(null,seq__35126_35141__$1);
var G__35149 = null;
var G__35150 = (0);
var G__35151 = (0);
seq__35126_35131 = G__35148;
chunk__35127_35132 = G__35149;
count__35128_35133 = G__35150;
i__35129_35134 = G__35151;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35152){
var map__35153 = p__35152;
var map__35153__$1 = ((((!((map__35153 == null)))?((((map__35153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35153):map__35153);
var content = cljs.core.get.call(null,map__35153__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__35155){
var map__35156 = p__35155;
var map__35156__$1 = ((((!((map__35156 == null)))?((((map__35156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35156):map__35156);
var block = map__35156__$1;
var content = cljs.core.get.call(null,map__35156__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19536__auto__ = [];
var len__19529__auto___35159 = arguments.length;
var i__19530__auto___35160 = (0);
while(true){
if((i__19530__auto___35160 < len__19529__auto___35159)){
args__19536__auto__.push((arguments[i__19530__auto___35160]));

var G__35161 = (i__19530__auto___35160 + (1));
i__19530__auto___35160 = G__35161;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq35158){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35158));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__35163 = devcards.system.devcards_rendered_card_class;
var G__35163__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__35163),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__35163);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__35163__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__35163__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args35164 = [];
var len__19529__auto___35172 = arguments.length;
var i__19530__auto___35173 = (0);
while(true){
if((i__19530__auto___35173 < len__19529__auto___35172)){
args35164.push((arguments[i__19530__auto___35173]));

var G__35174 = (i__19530__auto___35173 + (1));
i__19530__auto___35173 = G__35174;
continue;
} else {
}
break;
}

var G__35166 = args35164.length;
switch (G__35166) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35164.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__35167 = card;
var map__35167__$1 = ((((!((map__35167 == null)))?((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35167):map__35167);
var path = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__35167,map__35167__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__35167,map__35167__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs35169 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35169))?sablono.interpreter.attributes.call(null,attrs35169):null),((cljs.core.map_QMARK_.call(null,attrs35169))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35169)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__25482__auto___35181 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs35176 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35176))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs35176)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs35176))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35176)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25482__auto___35181);
}

var seq__35177_35182 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35178_35183 = null;
var count__35179_35184 = (0);
var i__35180_35185 = (0);
while(true){
if((i__35180_35185 < count__35179_35184)){
var property__25483__auto___35186 = cljs.core._nth.call(null,chunk__35178_35183,i__35180_35185);
if(cljs.core.truth_((base__25482__auto___35181[property__25483__auto___35186]))){
(devcards.core.DontUpdate.prototype[property__25483__auto___35186] = (base__25482__auto___35181[property__25483__auto___35186]));
} else {
}

var G__35187 = seq__35177_35182;
var G__35188 = chunk__35178_35183;
var G__35189 = count__35179_35184;
var G__35190 = (i__35180_35185 + (1));
seq__35177_35182 = G__35187;
chunk__35178_35183 = G__35188;
count__35179_35184 = G__35189;
i__35180_35185 = G__35190;
continue;
} else {
var temp__4657__auto___35191 = cljs.core.seq.call(null,seq__35177_35182);
if(temp__4657__auto___35191){
var seq__35177_35192__$1 = temp__4657__auto___35191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35177_35192__$1)){
var c__19270__auto___35193 = cljs.core.chunk_first.call(null,seq__35177_35192__$1);
var G__35194 = cljs.core.chunk_rest.call(null,seq__35177_35192__$1);
var G__35195 = c__19270__auto___35193;
var G__35196 = cljs.core.count.call(null,c__19270__auto___35193);
var G__35197 = (0);
seq__35177_35182 = G__35194;
chunk__35178_35183 = G__35195;
count__35179_35184 = G__35196;
i__35180_35185 = G__35197;
continue;
} else {
var property__25483__auto___35198 = cljs.core.first.call(null,seq__35177_35192__$1);
if(cljs.core.truth_((base__25482__auto___35181[property__25483__auto___35198]))){
(devcards.core.DontUpdate.prototype[property__25483__auto___35198] = (base__25482__auto___35181[property__25483__auto___35198]));
} else {
}

var G__35199 = cljs.core.next.call(null,seq__35177_35192__$1);
var G__35200 = null;
var G__35201 = (0);
var G__35202 = (0);
seq__35177_35182 = G__35199;
chunk__35178_35183 = G__35200;
count__35179_35184 = G__35201;
i__35180_35185 = G__35202;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18459__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19293__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto____$3);
})(),x__19293__auto____$2);
})(),x__19293__auto____$1);
})(),x__19293__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__25482__auto___35209 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18459__auto__ = (function (){var and__18447__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18447__auto__)){
return this$.state;
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__25482__auto___35209);
}

var seq__35205_35210 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35206_35211 = null;
var count__35207_35212 = (0);
var i__35208_35213 = (0);
while(true){
if((i__35208_35213 < count__35207_35212)){
var property__25483__auto___35214 = cljs.core._nth.call(null,chunk__35206_35211,i__35208_35213);
if(cljs.core.truth_((base__25482__auto___35209[property__25483__auto___35214]))){
(devcards.core.DevcardBase.prototype[property__25483__auto___35214] = (base__25482__auto___35209[property__25483__auto___35214]));
} else {
}

var G__35215 = seq__35205_35210;
var G__35216 = chunk__35206_35211;
var G__35217 = count__35207_35212;
var G__35218 = (i__35208_35213 + (1));
seq__35205_35210 = G__35215;
chunk__35206_35211 = G__35216;
count__35207_35212 = G__35217;
i__35208_35213 = G__35218;
continue;
} else {
var temp__4657__auto___35219 = cljs.core.seq.call(null,seq__35205_35210);
if(temp__4657__auto___35219){
var seq__35205_35220__$1 = temp__4657__auto___35219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35205_35220__$1)){
var c__19270__auto___35221 = cljs.core.chunk_first.call(null,seq__35205_35220__$1);
var G__35222 = cljs.core.chunk_rest.call(null,seq__35205_35220__$1);
var G__35223 = c__19270__auto___35221;
var G__35224 = cljs.core.count.call(null,c__19270__auto___35221);
var G__35225 = (0);
seq__35205_35210 = G__35222;
chunk__35206_35211 = G__35223;
count__35207_35212 = G__35224;
i__35208_35213 = G__35225;
continue;
} else {
var property__25483__auto___35226 = cljs.core.first.call(null,seq__35205_35220__$1);
if(cljs.core.truth_((base__25482__auto___35209[property__25483__auto___35226]))){
(devcards.core.DevcardBase.prototype[property__25483__auto___35226] = (base__25482__auto___35209[property__25483__auto___35226]));
} else {
}

var G__35227 = cljs.core.next.call(null,seq__35205_35220__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__35205_35210 = G__35227;
chunk__35206_35211 = G__35228;
count__35207_35212 = G__35229;
i__35208_35213 = G__35230;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__25482__auto___35235 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18447__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__25482__auto___35235);
}

var seq__35231_35236 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35232_35237 = null;
var count__35233_35238 = (0);
var i__35234_35239 = (0);
while(true){
if((i__35234_35239 < count__35233_35238)){
var property__25483__auto___35240 = cljs.core._nth.call(null,chunk__35232_35237,i__35234_35239);
if(cljs.core.truth_((base__25482__auto___35235[property__25483__auto___35240]))){
(devcards.core.DomComponent.prototype[property__25483__auto___35240] = (base__25482__auto___35235[property__25483__auto___35240]));
} else {
}

var G__35241 = seq__35231_35236;
var G__35242 = chunk__35232_35237;
var G__35243 = count__35233_35238;
var G__35244 = (i__35234_35239 + (1));
seq__35231_35236 = G__35241;
chunk__35232_35237 = G__35242;
count__35233_35238 = G__35243;
i__35234_35239 = G__35244;
continue;
} else {
var temp__4657__auto___35245 = cljs.core.seq.call(null,seq__35231_35236);
if(temp__4657__auto___35245){
var seq__35231_35246__$1 = temp__4657__auto___35245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35231_35246__$1)){
var c__19270__auto___35247 = cljs.core.chunk_first.call(null,seq__35231_35246__$1);
var G__35248 = cljs.core.chunk_rest.call(null,seq__35231_35246__$1);
var G__35249 = c__19270__auto___35247;
var G__35250 = cljs.core.count.call(null,c__19270__auto___35247);
var G__35251 = (0);
seq__35231_35236 = G__35248;
chunk__35232_35237 = G__35249;
count__35233_35238 = G__35250;
i__35234_35239 = G__35251;
continue;
} else {
var property__25483__auto___35252 = cljs.core.first.call(null,seq__35231_35246__$1);
if(cljs.core.truth_((base__25482__auto___35235[property__25483__auto___35252]))){
(devcards.core.DomComponent.prototype[property__25483__auto___35252] = (base__25482__auto___35235[property__25483__auto___35252]));
} else {
}

var G__35253 = cljs.core.next.call(null,seq__35231_35246__$1);
var G__35254 = null;
var G__35255 = (0);
var G__35256 = (0);
seq__35231_35236 = G__35253;
chunk__35232_35237 = G__35254;
count__35233_35238 = G__35255;
i__35234_35239 = G__35256;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = x === true;
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = x === false;
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = (x == null);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = typeof x === 'string';
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (x == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18459__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__35257_SHARP_){
return !(p1__35257_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__35266 = opts;
var map__35266__$1 = ((((!((map__35266 == null)))?((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35266):map__35266);
var name = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18459__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (options == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18459__auto__ = (initial_data == null);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
var or__18459__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18459__auto____$3){
return or__18459__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__35266,map__35266__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__35258_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__35258_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__35266,map__35266__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs35274 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs35274))?sablono.interpreter.attributes.call(null,attrs35274):null),((cljs.core.map_QMARK_.call(null,attrs35274))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35274)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs35278 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35278))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs35278)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs35278))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35278)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs35279 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35279))?sablono.interpreter.attributes.call(null,attrs35279):null),((cljs.core.map_QMARK_.call(null,attrs35279))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35279)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs35280 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35280))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs35280)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs35280))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35280)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__35281_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__35281_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k35283,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__35285 = (((k35283 instanceof cljs.core.Keyword))?k35283.fqn:null);
switch (G__35285) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35283,else__19084__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35282){
var self__ = this;
var G__35282__$1 = this;
return (new cljs.core.RecordIter((0),G__35282__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__35282){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__35286 = cljs.core.keyword_identical_QMARK_;
var expr__35287 = k__19089__auto__;
if(cljs.core.truth_(pred__35286.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__35287))){
return (new devcards.core.IdentiyOptions(G__35282,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__35282),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__35282){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__35282,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__35284){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__35284),null,cljs.core.dissoc.call(null,G__35284,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__35290){
var map__35293 = p__35290;
var map__35293__$1 = ((((!((map__35293 == null)))?((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35293):map__35293);
var devcard_opts = map__35293__$1;
var options = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__35293,map__35293__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__35293,map__35293__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k35296,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__35298 = (((k35296 instanceof cljs.core.Keyword))?k35296.fqn:null);
switch (G__35298) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35296,else__19084__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35295){
var self__ = this;
var G__35295__$1 = this;
return (new cljs.core.RecordIter((0),G__35295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__35295){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__35299 = cljs.core.keyword_identical_QMARK_;
var expr__35300 = k__19089__auto__;
if(cljs.core.truth_(pred__35299.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__35300))){
return (new devcards.core.AtomLikeOptions(G__35295,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__35295),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__35295){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__35295,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__35297){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__35297),null,cljs.core.dissoc.call(null,G__35297,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k35306,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__35308 = (((k35306 instanceof cljs.core.Keyword))?k35306.fqn:null);
switch (G__35308) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35306,else__19084__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35305){
var self__ = this;
var G__35305__$1 = this;
return (new cljs.core.RecordIter((0),G__35305__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__35305){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__35309 = cljs.core.keyword_identical_QMARK_;
var expr__35310 = k__19089__auto__;
if(cljs.core.truth_(pred__35309.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__35310))){
return (new devcards.core.EdnLikeOptions(G__35305,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__35305),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__35305){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__35305,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__35307){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__35307),null,cljs.core.dissoc.call(null,G__35307,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18447__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18447__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18447__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__35324 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__35324 == null))){
if((false) || (G__35324.devcards$core$IDevcard$)){
return true;
} else {
if((!G__35324.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__35324);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__35324);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__35327 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__35327__$1 = ((((!((map__35327 == null)))?((((map__35327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35327):map__35327);
var history = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__35331 = cljs.core.deref.call(null,history_atom);
var map__35331__$1 = ((((!((map__35331 == null)))?((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35331):map__35331);
var history = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__35335 = cljs.core.deref.call(null,history_atom);
var map__35335__$1 = ((((!((map__35335 == null)))?((((map__35335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35335):map__35335);
var history = cljs.core.get.call(null,map__35335__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__35335__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__35339 = cljs.core.deref.call(null,history_atom);
var map__35339__$1 = ((((!((map__35339 == null)))?((((map__35339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35339):map__35339);
var history = cljs.core.get.call(null,map__35339__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19293__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__35341){
var map__35342 = p__35341;
var map__35342__$1 = ((((!((map__35342 == null)))?((((map__35342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35342):map__35342);
var ha = map__35342__$1;
var pointer = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_35357 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_35357;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs35358 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35358))?sablono.interpreter.attributes.call(null,attrs35358):null),((cljs.core.map_QMARK_.call(null,attrs35358))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35358)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__35359,body){
var map__35363 = p__35359;
var map__35363__$1 = ((((!((map__35363 == null)))?((((map__35363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35363):map__35363);
var message = cljs.core.get.call(null,map__35363__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs35365 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs35365))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs35365)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs35365))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35365)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__35366){
var map__35374 = p__35366;
var map__35374__$1 = ((((!((map__35374 == null)))?((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35374):map__35374);
var m = map__35374__$1;
var expected = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs35376 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35376))?sablono.interpreter.attributes.call(null,attrs35376):null),((cljs.core.map_QMARK_.call(null,attrs35376))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35376),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs35383 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs35383))?sablono.interpreter.attributes.call(null,attrs35383):null),((cljs.core.map_QMARK_.call(null,attrs35383))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35383)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs35384 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35384))?sablono.interpreter.attributes.call(null,attrs35384):null),((cljs.core.map_QMARK_.call(null,attrs35384))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35384)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__35385){
var map__35386 = p__35385;
var map__35386__$1 = ((((!((map__35386 == null)))?((((map__35386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35386):map__35386);
var testing_contexts = cljs.core.get.call(null,map__35386__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs35388 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__35386,map__35386__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__35386,map__35386__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19293__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35388))?sablono.interpreter.attributes.call(null,attrs35388):null),((cljs.core.map_QMARK_.call(null,attrs35388))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35388)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs35395 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__35396,p__35397){
var map__35398 = p__35396;
var map__35398__$1 = ((((!((map__35398 == null)))?((((map__35398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35398):map__35398);
var last_context = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__35398__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__35399 = p__35397;
var i = cljs.core.nth.call(null,vec__35399,(0),null);
var t = cljs.core.nth.call(null,vec__35399,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19293__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35395))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs35395)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs35395))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35395)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__35413){
var map__35414 = p__35413;
var map__35414__$1 = ((((!((map__35414 == null)))?((((map__35414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35414):map__35414);
var type = cljs.core.get.call(null,map__35414__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__35412 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__35412__$1 = ((((!((map__35412 == null)))?((((map__35412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35412):map__35412);
var fail = cljs.core.get.call(null,map__35412__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__35412__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__35412__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (p__35417){
var map__35418 = p__35417;
var map__35418__$1 = ((((!((map__35418 == null)))?((((map__35418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35418):map__35418);
var type = cljs.core.get.call(null,map__35418__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1){
return (function (p__35420){
var map__35421 = p__35420;
var map__35421__$1 = ((((!((map__35421 == null)))?((((map__35421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35421):map__35421);
var type = cljs.core.get.call(null,map__35421__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__35412,map__35412__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18459__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_35509){
var state_val_35510 = (state_35509[(1)]);
if((state_val_35510 === (7))){
var state_35509__$1 = state_35509;
var statearr_35511_35560 = state_35509__$1;
(statearr_35511_35560[(2)] = false);

(statearr_35511_35560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (20))){
var inst_35450 = (state_35509[(7)]);
var inst_35469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35450);
var state_35509__$1 = state_35509;
var statearr_35512_35561 = state_35509__$1;
(statearr_35512_35561[(2)] = inst_35469);

(statearr_35512_35561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (27))){
var inst_35474 = (state_35509[(8)]);
var inst_35484 = (state_35509[(9)]);
var inst_35488 = inst_35474.call(null,inst_35484);
var state_35509__$1 = state_35509;
var statearr_35513_35562 = state_35509__$1;
(statearr_35513_35562[(2)] = inst_35488);

(statearr_35513_35562[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (1))){
var state_35509__$1 = state_35509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35509__$1,(2),devcards.core.test_channel);
} else {
if((state_val_35510 === (24))){
var state_35509__$1 = state_35509;
var statearr_35514_35563 = state_35509__$1;
(statearr_35514_35563[(2)] = null);

(statearr_35514_35563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (4))){
var state_35509__$1 = state_35509;
var statearr_35515_35564 = state_35509__$1;
(statearr_35515_35564[(2)] = false);

(statearr_35515_35564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (15))){
var state_35509__$1 = state_35509;
var statearr_35516_35565 = state_35509__$1;
(statearr_35516_35565[(2)] = false);

(statearr_35516_35565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (21))){
var inst_35450 = (state_35509[(7)]);
var state_35509__$1 = state_35509;
var statearr_35517_35566 = state_35509__$1;
(statearr_35517_35566[(2)] = inst_35450);

(statearr_35517_35566[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (13))){
var inst_35507 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35509__$1,inst_35507);
} else {
if((state_val_35510 === (22))){
var inst_35473 = (state_35509[(10)]);
var inst_35472 = (state_35509[(2)]);
var inst_35473__$1 = cljs.core.get.call(null,inst_35472,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_35474 = cljs.core.get.call(null,inst_35472,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_35509__$1 = (function (){var statearr_35518 = state_35509;
(statearr_35518[(8)] = inst_35474);

(statearr_35518[(10)] = inst_35473__$1);

return statearr_35518;
})();
if(cljs.core.truth_(inst_35473__$1)){
var statearr_35519_35567 = state_35509__$1;
(statearr_35519_35567[(1)] = (23));

} else {
var statearr_35520_35568 = state_35509__$1;
(statearr_35520_35568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (29))){
var inst_35498 = (state_35509[(2)]);
var inst_35499 = cljs.test.clear_env_BANG_.call(null);
var state_35509__$1 = (function (){var statearr_35521 = state_35509;
(statearr_35521[(11)] = inst_35498);

(statearr_35521[(12)] = inst_35499);

return statearr_35521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35509__$1,(30),devcards.core.test_channel);
} else {
if((state_val_35510 === (6))){
var state_35509__$1 = state_35509;
var statearr_35522_35569 = state_35509__$1;
(statearr_35522_35569[(2)] = true);

(statearr_35522_35569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (28))){
var inst_35474 = (state_35509[(8)]);
var inst_35490 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_35491 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_35492 = cljs.core.PersistentHashMap.fromArrays(inst_35490,inst_35491);
var inst_35493 = devcards.core.collect_test.call(null,inst_35492);
var inst_35494 = cljs.test.get_current_env.call(null);
var inst_35495 = cljs.core.assoc.call(null,inst_35494,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_35496 = inst_35474.call(null,inst_35495);
var state_35509__$1 = (function (){var statearr_35523 = state_35509;
(statearr_35523[(13)] = inst_35493);

return statearr_35523;
})();
var statearr_35524_35570 = state_35509__$1;
(statearr_35524_35570[(2)] = inst_35496);

(statearr_35524_35570[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (25))){
var inst_35505 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
var statearr_35525_35571 = state_35509__$1;
(statearr_35525_35571[(2)] = inst_35505);

(statearr_35525_35571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (17))){
var state_35509__$1 = state_35509;
var statearr_35526_35572 = state_35509__$1;
(statearr_35526_35572[(2)] = true);

(statearr_35526_35572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (3))){
var inst_35427 = (state_35509[(14)]);
var inst_35432 = inst_35427.cljs$lang$protocol_mask$partition0$;
var inst_35433 = (inst_35432 & (64));
var inst_35434 = inst_35427.cljs$core$ISeq$;
var inst_35435 = (inst_35433) || (inst_35434);
var state_35509__$1 = state_35509;
if(cljs.core.truth_(inst_35435)){
var statearr_35527_35573 = state_35509__$1;
(statearr_35527_35573[(1)] = (6));

} else {
var statearr_35528_35574 = state_35509__$1;
(statearr_35528_35574[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (12))){
var inst_35450 = (state_35509[(7)]);
var inst_35454 = (inst_35450 == null);
var inst_35455 = cljs.core.not.call(null,inst_35454);
var state_35509__$1 = state_35509;
if(inst_35455){
var statearr_35529_35575 = state_35509__$1;
(statearr_35529_35575[(1)] = (14));

} else {
var statearr_35530_35576 = state_35509__$1;
(statearr_35530_35576[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (2))){
var inst_35427 = (state_35509[(14)]);
var inst_35427__$1 = (state_35509[(2)]);
var inst_35429 = (inst_35427__$1 == null);
var inst_35430 = cljs.core.not.call(null,inst_35429);
var state_35509__$1 = (function (){var statearr_35531 = state_35509;
(statearr_35531[(14)] = inst_35427__$1);

return statearr_35531;
})();
if(inst_35430){
var statearr_35532_35577 = state_35509__$1;
(statearr_35532_35577[(1)] = (3));

} else {
var statearr_35533_35578 = state_35509__$1;
(statearr_35533_35578[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (23))){
var inst_35477 = (state_35509[(15)]);
var inst_35473 = (state_35509[(10)]);
var inst_35477__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_35478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35479 = devcards.core.run_card_tests.call(null,inst_35473);
var inst_35480 = [inst_35479,inst_35477__$1];
var inst_35481 = (new cljs.core.PersistentVector(null,2,(5),inst_35478,inst_35480,null));
var state_35509__$1 = (function (){var statearr_35534 = state_35509;
(statearr_35534[(15)] = inst_35477__$1);

return statearr_35534;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35509__$1,(26),inst_35481);
} else {
if((state_val_35510 === (19))){
var inst_35464 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
var statearr_35535_35579 = state_35509__$1;
(statearr_35535_35579[(2)] = inst_35464);

(statearr_35535_35579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (11))){
var inst_35427 = (state_35509[(14)]);
var inst_35447 = (state_35509[(2)]);
var inst_35448 = cljs.core.get.call(null,inst_35447,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_35449 = cljs.core.get.call(null,inst_35447,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_35450 = inst_35427;
var state_35509__$1 = (function (){var statearr_35536 = state_35509;
(statearr_35536[(7)] = inst_35450);

(statearr_35536[(16)] = inst_35449);

(statearr_35536[(17)] = inst_35448);

return statearr_35536;
})();
var statearr_35537_35580 = state_35509__$1;
(statearr_35537_35580[(2)] = null);

(statearr_35537_35580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (9))){
var inst_35427 = (state_35509[(14)]);
var inst_35444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35427);
var state_35509__$1 = state_35509;
var statearr_35538_35581 = state_35509__$1;
(statearr_35538_35581[(2)] = inst_35444);

(statearr_35538_35581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (5))){
var inst_35442 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
if(cljs.core.truth_(inst_35442)){
var statearr_35539_35582 = state_35509__$1;
(statearr_35539_35582[(1)] = (9));

} else {
var statearr_35540_35583 = state_35509__$1;
(statearr_35540_35583[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (14))){
var inst_35450 = (state_35509[(7)]);
var inst_35457 = inst_35450.cljs$lang$protocol_mask$partition0$;
var inst_35458 = (inst_35457 & (64));
var inst_35459 = inst_35450.cljs$core$ISeq$;
var inst_35460 = (inst_35458) || (inst_35459);
var state_35509__$1 = state_35509;
if(cljs.core.truth_(inst_35460)){
var statearr_35541_35584 = state_35509__$1;
(statearr_35541_35584[(1)] = (17));

} else {
var statearr_35542_35585 = state_35509__$1;
(statearr_35542_35585[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (26))){
var inst_35477 = (state_35509[(15)]);
var inst_35483 = (state_35509[(2)]);
var inst_35484 = cljs.core.nth.call(null,inst_35483,(0),null);
var inst_35485 = cljs.core.nth.call(null,inst_35483,(1),null);
var inst_35486 = cljs.core.not_EQ_.call(null,inst_35485,inst_35477);
var state_35509__$1 = (function (){var statearr_35543 = state_35509;
(statearr_35543[(9)] = inst_35484);

return statearr_35543;
})();
if(inst_35486){
var statearr_35544_35586 = state_35509__$1;
(statearr_35544_35586[(1)] = (27));

} else {
var statearr_35545_35587 = state_35509__$1;
(statearr_35545_35587[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (16))){
var inst_35467 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
if(cljs.core.truth_(inst_35467)){
var statearr_35546_35588 = state_35509__$1;
(statearr_35546_35588[(1)] = (20));

} else {
var statearr_35547_35589 = state_35509__$1;
(statearr_35547_35589[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (30))){
var inst_35501 = (state_35509[(2)]);
var inst_35450 = inst_35501;
var state_35509__$1 = (function (){var statearr_35548 = state_35509;
(statearr_35548[(7)] = inst_35450);

return statearr_35548;
})();
var statearr_35549_35590 = state_35509__$1;
(statearr_35549_35590[(2)] = null);

(statearr_35549_35590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (10))){
var inst_35427 = (state_35509[(14)]);
var state_35509__$1 = state_35509;
var statearr_35550_35591 = state_35509__$1;
(statearr_35550_35591[(2)] = inst_35427);

(statearr_35550_35591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (18))){
var state_35509__$1 = state_35509;
var statearr_35551_35592 = state_35509__$1;
(statearr_35551_35592[(2)] = false);

(statearr_35551_35592[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35510 === (8))){
var inst_35439 = (state_35509[(2)]);
var state_35509__$1 = state_35509;
var statearr_35552_35593 = state_35509__$1;
(statearr_35552_35593[(2)] = inst_35439);

(statearr_35552_35593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var devcards$core$state_machine__21720__auto__ = null;
var devcards$core$state_machine__21720__auto____0 = (function (){
var statearr_35556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35556[(0)] = devcards$core$state_machine__21720__auto__);

(statearr_35556[(1)] = (1));

return statearr_35556;
});
var devcards$core$state_machine__21720__auto____1 = (function (state_35509){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_35509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e35557){if((e35557 instanceof Object)){
var ex__21723__auto__ = e35557;
var statearr_35558_35594 = state_35509;
(statearr_35558_35594[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35595 = state_35509;
state_35509 = G__35595;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
devcards$core$state_machine__21720__auto__ = function(state_35509){
switch(arguments.length){
case 0:
return devcards$core$state_machine__21720__auto____0.call(this);
case 1:
return devcards$core$state_machine__21720__auto____1.call(this,state_35509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__21720__auto____0;
devcards$core$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__21720__auto____1;
return devcards$core$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_35559 = f__21832__auto__.call(null);
(statearr_35559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_35559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25482__auto___35600 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__25482__auto___35600);
}

var seq__35596_35601 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35597_35602 = null;
var count__35598_35603 = (0);
var i__35599_35604 = (0);
while(true){
if((i__35599_35604 < count__35598_35603)){
var property__25483__auto___35605 = cljs.core._nth.call(null,chunk__35597_35602,i__35599_35604);
if(cljs.core.truth_((base__25482__auto___35600[property__25483__auto___35605]))){
(devcards.core.TestDevcard.prototype[property__25483__auto___35605] = (base__25482__auto___35600[property__25483__auto___35605]));
} else {
}

var G__35606 = seq__35596_35601;
var G__35607 = chunk__35597_35602;
var G__35608 = count__35598_35603;
var G__35609 = (i__35599_35604 + (1));
seq__35596_35601 = G__35606;
chunk__35597_35602 = G__35607;
count__35598_35603 = G__35608;
i__35599_35604 = G__35609;
continue;
} else {
var temp__4657__auto___35610 = cljs.core.seq.call(null,seq__35596_35601);
if(temp__4657__auto___35610){
var seq__35596_35611__$1 = temp__4657__auto___35610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35596_35611__$1)){
var c__19270__auto___35612 = cljs.core.chunk_first.call(null,seq__35596_35611__$1);
var G__35613 = cljs.core.chunk_rest.call(null,seq__35596_35611__$1);
var G__35614 = c__19270__auto___35612;
var G__35615 = cljs.core.count.call(null,c__19270__auto___35612);
var G__35616 = (0);
seq__35596_35601 = G__35613;
chunk__35597_35602 = G__35614;
count__35598_35603 = G__35615;
i__35599_35604 = G__35616;
continue;
} else {
var property__25483__auto___35617 = cljs.core.first.call(null,seq__35596_35611__$1);
if(cljs.core.truth_((base__25482__auto___35600[property__25483__auto___35617]))){
(devcards.core.TestDevcard.prototype[property__25483__auto___35617] = (base__25482__auto___35600[property__25483__auto___35617]));
} else {
}

var G__35618 = cljs.core.next.call(null,seq__35596_35611__$1);
var G__35619 = null;
var G__35620 = (0);
var G__35621 = (0);
seq__35596_35601 = G__35618;
chunk__35597_35602 = G__35619;
count__35598_35603 = G__35620;
i__35599_35604 = G__35621;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19536__auto__ = [];
var len__19529__auto___35626 = arguments.length;
var i__19530__auto___35627 = (0);
while(true){
if((i__19530__auto___35627 < len__19529__auto___35626)){
args__19536__auto__.push((arguments[i__19530__auto___35627]));

var G__35628 = (i__19530__auto___35627 + (1));
i__19530__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core35623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core35623 = (function (test_thunks,meta35624){
this.test_thunks = test_thunks;
this.meta35624 = meta35624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core35623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35625,meta35624__$1){
var self__ = this;
var _35625__$1 = this;
return (new devcards.core.t_devcards$core35623(self__.test_thunks,meta35624__$1));
});

devcards.core.t_devcards$core35623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35625){
var self__ = this;
var _35625__$1 = this;
return self__.meta35624;
});

devcards.core.t_devcards$core35623.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core35623.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core35623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta35624","meta35624",-158548408,null)], null);
});

devcards.core.t_devcards$core35623.cljs$lang$type = true;

devcards.core.t_devcards$core35623.cljs$lang$ctorStr = "devcards.core/t_devcards$core35623";

devcards.core.t_devcards$core35623.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"devcards.core/t_devcards$core35623");
});

devcards.core.__GT_t_devcards$core35623 = (function devcards$core$__GT_t_devcards$core35623(test_thunks__$1,meta35624){
return (new devcards.core.t_devcards$core35623(test_thunks__$1,meta35624));
});

}

return (new devcards.core.t_devcards$core35623(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq35622){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35622));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs35630 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35630))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs35630)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs35630))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35630)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs35632 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35632))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs35632)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs35632))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35632)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_35662){
var state_val_35663 = (state_35662[(1)]);
if((state_val_35663 === (1))){
var inst_35653 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35662__$1,(2),inst_35653);
} else {
if((state_val_35663 === (2))){
var inst_35655 = (state_35662[(2)]);
var inst_35656 = cljs.core.async.timeout.call(null,(100));
var state_35662__$1 = (function (){var statearr_35664 = state_35662;
(statearr_35664[(7)] = inst_35655);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35662__$1,(3),inst_35656);
} else {
if((state_val_35663 === (3))){
var inst_35658 = (state_35662[(2)]);
var inst_35659 = (function (){return ((function (inst_35658,state_val_35663,c__21831__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_35658,state_val_35663,c__21831__auto__))
})();
var inst_35660 = setTimeout(inst_35659,(0));
var state_35662__$1 = (function (){var statearr_35665 = state_35662;
(statearr_35665[(8)] = inst_35658);

return statearr_35665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35662__$1,inst_35660);
} else {
return null;
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__21720__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__21720__auto____0 = (function (){
var statearr_35669 = [null,null,null,null,null,null,null,null,null];
(statearr_35669[(0)] = devcards$core$mount_namespace_$_state_machine__21720__auto__);

(statearr_35669[(1)] = (1));

return statearr_35669;
});
var devcards$core$mount_namespace_$_state_machine__21720__auto____1 = (function (state_35662){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_35662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e35670){if((e35670 instanceof Object)){
var ex__21723__auto__ = e35670;
var statearr_35671_35673 = state_35662;
(statearr_35671_35673[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35674 = state_35662;
state_35662 = G__35674;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__21720__auto__ = function(state_35662){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__21720__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__21720__auto____1.call(this,state_35662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__21720__auto____0;
devcards$core$mount_namespace_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__21720__auto____1;
return devcards$core$mount_namespace_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_35672 = f__21832__auto__.call(null);
(statearr_35672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_35672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1467040427594