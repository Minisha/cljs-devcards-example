// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19536__auto__ = [];
var len__19529__auto___36923 = arguments.length;
var i__19530__auto___36924 = (0);
while(true){
if((i__19530__auto___36924 < len__19529__auto___36923)){
args__19536__auto__.push((arguments[i__19530__auto___36924]));

var G__36925 = (i__19530__auto___36924 + (1));
i__19530__auto___36924 = G__36925;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((2) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19537__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__36915_36926 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__36916_36927 = null;
var count__36917_36928 = (0);
var i__36918_36929 = (0);
while(true){
if((i__36918_36929 < count__36917_36928)){
var k_36930 = cljs.core._nth.call(null,chunk__36916_36927,i__36918_36929);
e.setAttribute(cljs.core.name.call(null,k_36930),cljs.core.get.call(null,attrs,k_36930));

var G__36931 = seq__36915_36926;
var G__36932 = chunk__36916_36927;
var G__36933 = count__36917_36928;
var G__36934 = (i__36918_36929 + (1));
seq__36915_36926 = G__36931;
chunk__36916_36927 = G__36932;
count__36917_36928 = G__36933;
i__36918_36929 = G__36934;
continue;
} else {
var temp__4657__auto___36935 = cljs.core.seq.call(null,seq__36915_36926);
if(temp__4657__auto___36935){
var seq__36915_36936__$1 = temp__4657__auto___36935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36915_36936__$1)){
var c__19270__auto___36937 = cljs.core.chunk_first.call(null,seq__36915_36936__$1);
var G__36938 = cljs.core.chunk_rest.call(null,seq__36915_36936__$1);
var G__36939 = c__19270__auto___36937;
var G__36940 = cljs.core.count.call(null,c__19270__auto___36937);
var G__36941 = (0);
seq__36915_36926 = G__36938;
chunk__36916_36927 = G__36939;
count__36917_36928 = G__36940;
i__36918_36929 = G__36941;
continue;
} else {
var k_36942 = cljs.core.first.call(null,seq__36915_36936__$1);
e.setAttribute(cljs.core.name.call(null,k_36942),cljs.core.get.call(null,attrs,k_36942));

var G__36943 = cljs.core.next.call(null,seq__36915_36936__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36915_36926 = G__36943;
chunk__36916_36927 = G__36944;
count__36917_36928 = G__36945;
i__36918_36929 = G__36946;
continue;
}
} else {
}
}
break;
}

var seq__36919_36947 = cljs.core.seq.call(null,children);
var chunk__36920_36948 = null;
var count__36921_36949 = (0);
var i__36922_36950 = (0);
while(true){
if((i__36922_36950 < count__36921_36949)){
var ch_36951 = cljs.core._nth.call(null,chunk__36920_36948,i__36922_36950);
e.appendChild(ch_36951);

var G__36952 = seq__36919_36947;
var G__36953 = chunk__36920_36948;
var G__36954 = count__36921_36949;
var G__36955 = (i__36922_36950 + (1));
seq__36919_36947 = G__36952;
chunk__36920_36948 = G__36953;
count__36921_36949 = G__36954;
i__36922_36950 = G__36955;
continue;
} else {
var temp__4657__auto___36956 = cljs.core.seq.call(null,seq__36919_36947);
if(temp__4657__auto___36956){
var seq__36919_36957__$1 = temp__4657__auto___36956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36919_36957__$1)){
var c__19270__auto___36958 = cljs.core.chunk_first.call(null,seq__36919_36957__$1);
var G__36959 = cljs.core.chunk_rest.call(null,seq__36919_36957__$1);
var G__36960 = c__19270__auto___36958;
var G__36961 = cljs.core.count.call(null,c__19270__auto___36958);
var G__36962 = (0);
seq__36919_36947 = G__36959;
chunk__36920_36948 = G__36960;
count__36921_36949 = G__36961;
i__36922_36950 = G__36962;
continue;
} else {
var ch_36963 = cljs.core.first.call(null,seq__36919_36957__$1);
e.appendChild(ch_36963);

var G__36964 = cljs.core.next.call(null,seq__36919_36957__$1);
var G__36965 = null;
var G__36966 = (0);
var G__36967 = (0);
seq__36919_36947 = G__36964;
chunk__36920_36948 = G__36965;
count__36921_36949 = G__36966;
i__36922_36950 = G__36967;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq36912){
var G__36913 = cljs.core.first.call(null,seq36912);
var seq36912__$1 = cljs.core.next.call(null,seq36912);
var G__36914 = cljs.core.first.call(null,seq36912__$1);
var seq36912__$2 = cljs.core.next.call(null,seq36912__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__36913,G__36914,seq36912__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_36968 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_36968.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_36968.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_36968.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_36968);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__36969,st_map){
var map__36974 = p__36969;
var map__36974__$1 = ((((!((map__36974 == null)))?((((map__36974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36974):map__36974);
var container_el = cljs.core.get.call(null,map__36974__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__36974,map__36974__$1,container_el){
return (function (p__36976){
var vec__36977 = p__36976;
var k = cljs.core.nth.call(null,vec__36977,(0),null);
var v = cljs.core.nth.call(null,vec__36977,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__36974,map__36974__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__36978,dom_str){
var map__36981 = p__36978;
var map__36981__$1 = ((((!((map__36981 == null)))?((((map__36981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36981):map__36981);
var c = map__36981__$1;
var content_area_el = cljs.core.get.call(null,map__36981__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__36983){
var map__36986 = p__36983;
var map__36986__$1 = ((((!((map__36986 == null)))?((((map__36986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36986):map__36986);
var content_area_el = cljs.core.get.call(null,map__36986__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_37029){
var state_val_37030 = (state_37029[(1)]);
if((state_val_37030 === (1))){
var inst_37014 = (state_37029[(7)]);
var inst_37014__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37015 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37016 = ["10px","10px","100%","68px","1.0"];
var inst_37017 = cljs.core.PersistentHashMap.fromArrays(inst_37015,inst_37016);
var inst_37018 = cljs.core.merge.call(null,inst_37017,style);
var inst_37019 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37014__$1,inst_37018);
var inst_37020 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37014__$1,msg);
var inst_37021 = cljs.core.async.timeout.call(null,(300));
var state_37029__$1 = (function (){var statearr_37031 = state_37029;
(statearr_37031[(8)] = inst_37020);

(statearr_37031[(7)] = inst_37014__$1);

(statearr_37031[(9)] = inst_37019);

return statearr_37031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37029__$1,(2),inst_37021);
} else {
if((state_val_37030 === (2))){
var inst_37014 = (state_37029[(7)]);
var inst_37023 = (state_37029[(2)]);
var inst_37024 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37025 = ["auto"];
var inst_37026 = cljs.core.PersistentHashMap.fromArrays(inst_37024,inst_37025);
var inst_37027 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37014,inst_37026);
var state_37029__$1 = (function (){var statearr_37032 = state_37029;
(statearr_37032[(10)] = inst_37023);

return statearr_37032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37029__$1,inst_37027);
} else {
return null;
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____0 = (function (){
var statearr_37036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37036[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__);

(statearr_37036[(1)] = (1));

return statearr_37036;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____1 = (function (state_37029){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37037){if((e37037 instanceof Object)){
var ex__21723__auto__ = e37037;
var statearr_37038_37040 = state_37029;
(statearr_37038_37040[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_37029;
state_37029 = G__37041;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__ = function(state_37029){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____1.call(this,state_37029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_37039 = f__21832__auto__.call(null);
(statearr_37039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_37039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args37042 = [];
var len__19529__auto___37045 = arguments.length;
var i__19530__auto___37046 = (0);
while(true){
if((i__19530__auto___37046 < len__19529__auto___37045)){
args37042.push((arguments[i__19530__auto___37046]));

var G__37047 = (i__19530__auto___37046 + (1));
i__19530__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var G__37044 = args37042.length;
switch (G__37044) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37042.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__37050 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__37050,(0),null);
var ln = cljs.core.nth.call(null,vec__37050,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__37053 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__37053,(0),null);
var file_line = cljs.core.nth.call(null,vec__37053,(1),null);
var file_column = cljs.core.nth.call(null,vec__37053,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__37053,file_name,file_line,file_column){
return (function (p1__37051_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__37051_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__37053,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18459__auto__ = file_line;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var and__18447__auto__ = cause;
if(cljs.core.truth_(and__18447__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18447__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__37054){
var map__37057 = p__37054;
var map__37057__$1 = ((((!((map__37057 == null)))?((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37057):map__37057);
var ex = map__37057__$1;
var exception_data = cljs.core.get.call(null,map__37057__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__37059){
var map__37065 = p__37059;
var map__37065__$1 = ((((!((map__37065 == null)))?((((map__37065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37065):map__37065);
var ex = map__37065__$1;
var exception_data = cljs.core.get.call(null,map__37065__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__37065,map__37065__$1,ex,exception_data){
return (function (p__37067){
var map__37068 = p__37067;
var map__37068__$1 = ((((!((map__37068 == null)))?((((map__37068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37068):map__37068);
var exc = map__37068__$1;
var data = cljs.core.get.call(null,map__37068__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18447__auto__)){
return data;
} else {
return and__18447__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__37065,map__37065__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__18459__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__37070){
var map__37076 = p__37070;
var map__37076__$1 = ((((!((map__37076 == null)))?((((map__37076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37076):map__37076);
var ex = map__37076__$1;
var exception_data = cljs.core.get.call(null,map__37076__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__37076,map__37076__$1,ex,exception_data){
return (function (p__37078){
var map__37079 = p__37078;
var map__37079__$1 = ((((!((map__37079 == null)))?((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37079):map__37079);
var exc = map__37079__$1;
var data = cljs.core.get.call(null,map__37079__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18447__auto__)){
return data;
} else {
return and__18447__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__37076,map__37076__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__37081){
var map__37085 = p__37081;
var map__37085__$1 = ((((!((map__37085 == null)))?((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37085):map__37085);
var ex = map__37085__$1;
var reader_exception = cljs.core.get.call(null,map__37085__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__37085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__18447__auto__ = reader_exception;
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__18447__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__37087 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__37087,(0),null);
var line = cljs.core.nth.call(null,vec__37087,(1),null);
var column = cljs.core.nth.call(null,vec__37087,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__37088){
var map__37094 = p__37088;
var map__37094__$1 = ((((!((map__37094 == null)))?((((map__37094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37094):map__37094);
var ex = map__37094__$1;
var exception_data = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__37096 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__37096__$1 = ((((!((map__37096 == null)))?((((map__37096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37096):map__37096);
var file = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__37098 = ex;
var G__37098__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__37098):G__37098);
var G__37098__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__37098__$1):G__37098__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__37098__$2);
} else {
return G__37098__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__37099){
var map__37102 = p__37099;
var map__37102__$1 = ((((!((map__37102 == null)))?((((map__37102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37102):map__37102);
var ex = map__37102__$1;
var message = cljs.core.get.call(null,map__37102__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = file;
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__37106){
var map__37109 = p__37106;
var map__37109__$1 = ((((!((map__37109 == null)))?((((map__37109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37109):map__37109);
var exception = map__37109__$1;
var failed_compiling = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__18447__auto__ = file;
if(cljs.core.truth_(and__18447__auto__)){
return line;
} else {
return and__18447__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37109,map__37109__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__37104_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__37104_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__37109,map__37109__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__37109,map__37109__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__37105_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__37105_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__37105_SHARP_)))].join('');
});})(last_message,map__37109,map__37109__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__37114 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__37114__$1 = ((((!((map__37114 == null)))?((((map__37114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37114):map__37114);
var head = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__37118 = figwheel.client.heads_up.ensure_container.call(null);
var map__37118__$1 = ((((!((map__37118 == null)))?((((map__37118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37118):map__37118);
var content_area_el = cljs.core.get.call(null,map__37118__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_37166){
var state_val_37167 = (state_37166[(1)]);
if((state_val_37167 === (1))){
var inst_37149 = (state_37166[(7)]);
var inst_37149__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37150 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37151 = ["0.0"];
var inst_37152 = cljs.core.PersistentHashMap.fromArrays(inst_37150,inst_37151);
var inst_37153 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37149__$1,inst_37152);
var inst_37154 = cljs.core.async.timeout.call(null,(300));
var state_37166__$1 = (function (){var statearr_37168 = state_37166;
(statearr_37168[(7)] = inst_37149__$1);

(statearr_37168[(8)] = inst_37153);

return statearr_37168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37166__$1,(2),inst_37154);
} else {
if((state_val_37167 === (2))){
var inst_37149 = (state_37166[(7)]);
var inst_37156 = (state_37166[(2)]);
var inst_37157 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37158 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37159 = cljs.core.PersistentHashMap.fromArrays(inst_37157,inst_37158);
var inst_37160 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37149,inst_37159);
var inst_37161 = cljs.core.async.timeout.call(null,(200));
var state_37166__$1 = (function (){var statearr_37169 = state_37166;
(statearr_37169[(9)] = inst_37156);

(statearr_37169[(10)] = inst_37160);

return statearr_37169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37166__$1,(3),inst_37161);
} else {
if((state_val_37167 === (3))){
var inst_37149 = (state_37166[(7)]);
var inst_37163 = (state_37166[(2)]);
var inst_37164 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37149,"");
var state_37166__$1 = (function (){var statearr_37170 = state_37166;
(statearr_37170[(11)] = inst_37163);

return statearr_37170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37166__$1,inst_37164);
} else {
return null;
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21720__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21720__auto____0 = (function (){
var statearr_37174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37174[(0)] = figwheel$client$heads_up$clear_$_state_machine__21720__auto__);

(statearr_37174[(1)] = (1));

return statearr_37174;
});
var figwheel$client$heads_up$clear_$_state_machine__21720__auto____1 = (function (state_37166){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37175){if((e37175 instanceof Object)){
var ex__21723__auto__ = e37175;
var statearr_37176_37178 = state_37166;
(statearr_37176_37178[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37179 = state_37166;
state_37166 = G__37179;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21720__auto__ = function(state_37166){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21720__auto____1.call(this,state_37166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21720__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21720__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_37177 = f__21832__auto__.call(null);
(statearr_37177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_37177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_37211){
var state_val_37212 = (state_37211[(1)]);
if((state_val_37212 === (1))){
var inst_37201 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37211__$1 = state_37211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37211__$1,(2),inst_37201);
} else {
if((state_val_37212 === (2))){
var inst_37203 = (state_37211[(2)]);
var inst_37204 = cljs.core.async.timeout.call(null,(400));
var state_37211__$1 = (function (){var statearr_37213 = state_37211;
(statearr_37213[(7)] = inst_37203);

return statearr_37213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37211__$1,(3),inst_37204);
} else {
if((state_val_37212 === (3))){
var inst_37206 = (state_37211[(2)]);
var inst_37207 = figwheel.client.heads_up.clear.call(null);
var state_37211__$1 = (function (){var statearr_37214 = state_37211;
(statearr_37214[(8)] = inst_37206);

return statearr_37214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37211__$1,(4),inst_37207);
} else {
if((state_val_37212 === (4))){
var inst_37209 = (state_37211[(2)]);
var state_37211__$1 = state_37211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37211__$1,inst_37209);
} else {
return null;
}
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____0 = (function (){
var statearr_37218 = [null,null,null,null,null,null,null,null,null];
(statearr_37218[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__);

(statearr_37218[(1)] = (1));

return statearr_37218;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____1 = (function (state_37211){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37219){if((e37219 instanceof Object)){
var ex__21723__auto__ = e37219;
var statearr_37220_37222 = state_37211;
(statearr_37220_37222[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37223 = state_37211;
state_37211 = G__37223;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__ = function(state_37211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____1.call(this,state_37211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_37221 = f__21832__auto__.call(null);
(statearr_37221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_37221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1467040428924