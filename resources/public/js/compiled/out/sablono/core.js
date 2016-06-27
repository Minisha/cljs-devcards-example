// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__34257__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__34256 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__34256,(0),null);
var body = cljs.core.nthnext.call(null,vec__34256,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__34257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34258__i = 0, G__34258__a = new Array(arguments.length -  0);
while (G__34258__i < G__34258__a.length) {G__34258__a[G__34258__i] = arguments[G__34258__i + 0]; ++G__34258__i;}
  args = new cljs.core.IndexedSeq(G__34258__a,0);
} 
return G__34257__delegate.call(this,args);};
G__34257.cljs$lang$maxFixedArity = 0;
G__34257.cljs$lang$applyTo = (function (arglist__34259){
var args = cljs.core.seq(arglist__34259);
return G__34257__delegate(args);
});
G__34257.cljs$core$IFn$_invoke$arity$variadic = G__34257__delegate;
return G__34257;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__34264(s__34265){
return (new cljs.core.LazySeq(null,(function (){
var s__34265__$1 = s__34265;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34265__$1);
if(temp__4657__auto__){
var s__34265__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34265__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__34265__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__34267 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__34266 = (0);
while(true){
if((i__34266 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__34266);
cljs.core.chunk_append.call(null,b__34267,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34268 = (i__34266 + (1));
i__34266 = G__34268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34267),sablono$core$update_arglists_$_iter__34264.call(null,cljs.core.chunk_rest.call(null,s__34265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34267),null);
}
} else {
var args = cljs.core.first.call(null,s__34265__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__34264.call(null,cljs.core.rest.call(null,s__34265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19536__auto__ = [];
var len__19529__auto___34274 = arguments.length;
var i__19530__auto___34275 = (0);
while(true){
if((i__19530__auto___34275 < len__19529__auto___34274)){
args__19536__auto__.push((arguments[i__19530__auto___34275]));

var G__34276 = (i__19530__auto___34275 + (1));
i__19530__auto___34275 = G__34276;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__34270(s__34271){
return (new cljs.core.LazySeq(null,(function (){
var s__34271__$1 = s__34271;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34271__$1);
if(temp__4657__auto__){
var s__34271__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34271__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__34271__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__34273 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__34272 = (0);
while(true){
if((i__34272 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__34272);
cljs.core.chunk_append.call(null,b__34273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34277 = (i__34272 + (1));
i__34272 = G__34277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34273),sablono$core$iter__34270.call(null,cljs.core.chunk_rest.call(null,s__34271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34273),null);
}
} else {
var style = cljs.core.first.call(null,s__34271__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__34270.call(null,cljs.core.rest.call(null,s__34271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq34269){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34269));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to34278 = (function sablono$core$link_to34278(var_args){
var args__19536__auto__ = [];
var len__19529__auto___34281 = arguments.length;
var i__19530__auto___34282 = (0);
while(true){
if((i__19530__auto___34282 < len__19529__auto___34281)){
args__19536__auto__.push((arguments[i__19530__auto___34282]));

var G__34283 = (i__19530__auto___34282 + (1));
i__19530__auto___34282 = G__34283;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34278.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to34278.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to34278.cljs$lang$maxFixedArity = (1);

sablono.core.link_to34278.cljs$lang$applyTo = (function (seq34279){
var G__34280 = cljs.core.first.call(null,seq34279);
var seq34279__$1 = cljs.core.next.call(null,seq34279);
return sablono.core.link_to34278.cljs$core$IFn$_invoke$arity$variadic(G__34280,seq34279__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34278);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to34284 = (function sablono$core$mail_to34284(var_args){
var args__19536__auto__ = [];
var len__19529__auto___34289 = arguments.length;
var i__19530__auto___34290 = (0);
while(true){
if((i__19530__auto___34290 < len__19529__auto___34289)){
args__19536__auto__.push((arguments[i__19530__auto___34290]));

var G__34291 = (i__19530__auto___34290 + (1));
i__19530__auto___34290 = G__34291;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to34284.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to34284.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__34287){
var vec__34288 = p__34287;
var content = cljs.core.nth.call(null,vec__34288,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to34284.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to34284.cljs$lang$applyTo = (function (seq34285){
var G__34286 = cljs.core.first.call(null,seq34285);
var seq34285__$1 = cljs.core.next.call(null,seq34285);
return sablono.core.mail_to34284.cljs$core$IFn$_invoke$arity$variadic(G__34286,seq34285__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34284);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list34292 = (function sablono$core$unordered_list34292(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list34292_$_iter__34297(s__34298){
return (new cljs.core.LazySeq(null,(function (){
var s__34298__$1 = s__34298;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34298__$1);
if(temp__4657__auto__){
var s__34298__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34298__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__34298__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__34300 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__34299 = (0);
while(true){
if((i__34299 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__34299);
cljs.core.chunk_append.call(null,b__34300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34301 = (i__34299 + (1));
i__34299 = G__34301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34300),sablono$core$unordered_list34292_$_iter__34297.call(null,cljs.core.chunk_rest.call(null,s__34298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34300),null);
}
} else {
var x = cljs.core.first.call(null,s__34298__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list34292_$_iter__34297.call(null,cljs.core.rest.call(null,s__34298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34292);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list34302 = (function sablono$core$ordered_list34302(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list34302_$_iter__34307(s__34308){
return (new cljs.core.LazySeq(null,(function (){
var s__34308__$1 = s__34308;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34308__$1);
if(temp__4657__auto__){
var s__34308__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34308__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__34308__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__34310 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__34309 = (0);
while(true){
if((i__34309 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__34309);
cljs.core.chunk_append.call(null,b__34310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34311 = (i__34309 + (1));
i__34309 = G__34311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34310),sablono$core$ordered_list34302_$_iter__34307.call(null,cljs.core.chunk_rest.call(null,s__34308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34310),null);
}
} else {
var x = cljs.core.first.call(null,s__34308__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list34302_$_iter__34307.call(null,cljs.core.rest.call(null,s__34308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34302);
/**
 * Create an image element.
 */
sablono.core.image34312 = (function sablono$core$image34312(var_args){
var args34313 = [];
var len__19529__auto___34316 = arguments.length;
var i__19530__auto___34317 = (0);
while(true){
if((i__19530__auto___34317 < len__19529__auto___34316)){
args34313.push((arguments[i__19530__auto___34317]));

var G__34318 = (i__19530__auto___34317 + (1));
i__19530__auto___34317 = G__34318;
continue;
} else {
}
break;
}

var G__34315 = args34313.length;
switch (G__34315) {
case 1:
return sablono.core.image34312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image34312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34313.length)].join('')));

}
});

sablono.core.image34312.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image34312.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image34312.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34312);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__34320_SHARP_,p2__34321_SHARP_){
return [cljs.core.str(p1__34320_SHARP_),cljs.core.str("["),cljs.core.str(p2__34321_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__34322_SHARP_,p2__34323_SHARP_){
return [cljs.core.str(p1__34322_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34323_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field34324 = (function sablono$core$color_field34324(var_args){
var args34325 = [];
var len__19529__auto___34392 = arguments.length;
var i__19530__auto___34393 = (0);
while(true){
if((i__19530__auto___34393 < len__19529__auto___34392)){
args34325.push((arguments[i__19530__auto___34393]));

var G__34394 = (i__19530__auto___34393 + (1));
i__19530__auto___34393 = G__34394;
continue;
} else {
}
break;
}

var G__34327 = args34325.length;
switch (G__34327) {
case 1:
return sablono.core.color_field34324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field34324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34325.length)].join('')));

}
});

sablono.core.color_field34324.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.color_field34324.call(null,name__25164__auto__,null);
});

sablono.core.color_field34324.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.color_field34324.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34324);

/**
 * Creates a date input field.
 */
sablono.core.date_field34328 = (function sablono$core$date_field34328(var_args){
var args34329 = [];
var len__19529__auto___34396 = arguments.length;
var i__19530__auto___34397 = (0);
while(true){
if((i__19530__auto___34397 < len__19529__auto___34396)){
args34329.push((arguments[i__19530__auto___34397]));

var G__34398 = (i__19530__auto___34397 + (1));
i__19530__auto___34397 = G__34398;
continue;
} else {
}
break;
}

var G__34331 = args34329.length;
switch (G__34331) {
case 1:
return sablono.core.date_field34328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field34328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34329.length)].join('')));

}
});

sablono.core.date_field34328.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.date_field34328.call(null,name__25164__auto__,null);
});

sablono.core.date_field34328.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.date_field34328.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34328);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field34332 = (function sablono$core$datetime_field34332(var_args){
var args34333 = [];
var len__19529__auto___34400 = arguments.length;
var i__19530__auto___34401 = (0);
while(true){
if((i__19530__auto___34401 < len__19529__auto___34400)){
args34333.push((arguments[i__19530__auto___34401]));

var G__34402 = (i__19530__auto___34401 + (1));
i__19530__auto___34401 = G__34402;
continue;
} else {
}
break;
}

var G__34335 = args34333.length;
switch (G__34335) {
case 1:
return sablono.core.datetime_field34332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field34332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34333.length)].join('')));

}
});

sablono.core.datetime_field34332.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.datetime_field34332.call(null,name__25164__auto__,null);
});

sablono.core.datetime_field34332.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.datetime_field34332.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34332);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field34336 = (function sablono$core$datetime_local_field34336(var_args){
var args34337 = [];
var len__19529__auto___34404 = arguments.length;
var i__19530__auto___34405 = (0);
while(true){
if((i__19530__auto___34405 < len__19529__auto___34404)){
args34337.push((arguments[i__19530__auto___34405]));

var G__34406 = (i__19530__auto___34405 + (1));
i__19530__auto___34405 = G__34406;
continue;
} else {
}
break;
}

var G__34339 = args34337.length;
switch (G__34339) {
case 1:
return sablono.core.datetime_local_field34336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field34336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34337.length)].join('')));

}
});

sablono.core.datetime_local_field34336.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.datetime_local_field34336.call(null,name__25164__auto__,null);
});

sablono.core.datetime_local_field34336.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.datetime_local_field34336.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34336);

/**
 * Creates a email input field.
 */
sablono.core.email_field34340 = (function sablono$core$email_field34340(var_args){
var args34341 = [];
var len__19529__auto___34408 = arguments.length;
var i__19530__auto___34409 = (0);
while(true){
if((i__19530__auto___34409 < len__19529__auto___34408)){
args34341.push((arguments[i__19530__auto___34409]));

var G__34410 = (i__19530__auto___34409 + (1));
i__19530__auto___34409 = G__34410;
continue;
} else {
}
break;
}

var G__34343 = args34341.length;
switch (G__34343) {
case 1:
return sablono.core.email_field34340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field34340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34341.length)].join('')));

}
});

sablono.core.email_field34340.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.email_field34340.call(null,name__25164__auto__,null);
});

sablono.core.email_field34340.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.email_field34340.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34340);

/**
 * Creates a file input field.
 */
sablono.core.file_field34344 = (function sablono$core$file_field34344(var_args){
var args34345 = [];
var len__19529__auto___34412 = arguments.length;
var i__19530__auto___34413 = (0);
while(true){
if((i__19530__auto___34413 < len__19529__auto___34412)){
args34345.push((arguments[i__19530__auto___34413]));

var G__34414 = (i__19530__auto___34413 + (1));
i__19530__auto___34413 = G__34414;
continue;
} else {
}
break;
}

var G__34347 = args34345.length;
switch (G__34347) {
case 1:
return sablono.core.file_field34344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field34344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34345.length)].join('')));

}
});

sablono.core.file_field34344.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.file_field34344.call(null,name__25164__auto__,null);
});

sablono.core.file_field34344.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.file_field34344.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34344);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field34348 = (function sablono$core$hidden_field34348(var_args){
var args34349 = [];
var len__19529__auto___34416 = arguments.length;
var i__19530__auto___34417 = (0);
while(true){
if((i__19530__auto___34417 < len__19529__auto___34416)){
args34349.push((arguments[i__19530__auto___34417]));

var G__34418 = (i__19530__auto___34417 + (1));
i__19530__auto___34417 = G__34418;
continue;
} else {
}
break;
}

var G__34351 = args34349.length;
switch (G__34351) {
case 1:
return sablono.core.hidden_field34348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field34348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34349.length)].join('')));

}
});

sablono.core.hidden_field34348.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.hidden_field34348.call(null,name__25164__auto__,null);
});

sablono.core.hidden_field34348.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.hidden_field34348.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34348);

/**
 * Creates a month input field.
 */
sablono.core.month_field34352 = (function sablono$core$month_field34352(var_args){
var args34353 = [];
var len__19529__auto___34420 = arguments.length;
var i__19530__auto___34421 = (0);
while(true){
if((i__19530__auto___34421 < len__19529__auto___34420)){
args34353.push((arguments[i__19530__auto___34421]));

var G__34422 = (i__19530__auto___34421 + (1));
i__19530__auto___34421 = G__34422;
continue;
} else {
}
break;
}

var G__34355 = args34353.length;
switch (G__34355) {
case 1:
return sablono.core.month_field34352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field34352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34353.length)].join('')));

}
});

sablono.core.month_field34352.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.month_field34352.call(null,name__25164__auto__,null);
});

sablono.core.month_field34352.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.month_field34352.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34352);

/**
 * Creates a number input field.
 */
sablono.core.number_field34356 = (function sablono$core$number_field34356(var_args){
var args34357 = [];
var len__19529__auto___34424 = arguments.length;
var i__19530__auto___34425 = (0);
while(true){
if((i__19530__auto___34425 < len__19529__auto___34424)){
args34357.push((arguments[i__19530__auto___34425]));

var G__34426 = (i__19530__auto___34425 + (1));
i__19530__auto___34425 = G__34426;
continue;
} else {
}
break;
}

var G__34359 = args34357.length;
switch (G__34359) {
case 1:
return sablono.core.number_field34356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field34356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34357.length)].join('')));

}
});

sablono.core.number_field34356.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.number_field34356.call(null,name__25164__auto__,null);
});

sablono.core.number_field34356.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.number_field34356.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34356);

/**
 * Creates a password input field.
 */
sablono.core.password_field34360 = (function sablono$core$password_field34360(var_args){
var args34361 = [];
var len__19529__auto___34428 = arguments.length;
var i__19530__auto___34429 = (0);
while(true){
if((i__19530__auto___34429 < len__19529__auto___34428)){
args34361.push((arguments[i__19530__auto___34429]));

var G__34430 = (i__19530__auto___34429 + (1));
i__19530__auto___34429 = G__34430;
continue;
} else {
}
break;
}

var G__34363 = args34361.length;
switch (G__34363) {
case 1:
return sablono.core.password_field34360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field34360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34361.length)].join('')));

}
});

sablono.core.password_field34360.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.password_field34360.call(null,name__25164__auto__,null);
});

sablono.core.password_field34360.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.password_field34360.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34360);

/**
 * Creates a range input field.
 */
sablono.core.range_field34364 = (function sablono$core$range_field34364(var_args){
var args34365 = [];
var len__19529__auto___34432 = arguments.length;
var i__19530__auto___34433 = (0);
while(true){
if((i__19530__auto___34433 < len__19529__auto___34432)){
args34365.push((arguments[i__19530__auto___34433]));

var G__34434 = (i__19530__auto___34433 + (1));
i__19530__auto___34433 = G__34434;
continue;
} else {
}
break;
}

var G__34367 = args34365.length;
switch (G__34367) {
case 1:
return sablono.core.range_field34364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field34364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34365.length)].join('')));

}
});

sablono.core.range_field34364.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.range_field34364.call(null,name__25164__auto__,null);
});

sablono.core.range_field34364.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.range_field34364.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34364);

/**
 * Creates a search input field.
 */
sablono.core.search_field34368 = (function sablono$core$search_field34368(var_args){
var args34369 = [];
var len__19529__auto___34436 = arguments.length;
var i__19530__auto___34437 = (0);
while(true){
if((i__19530__auto___34437 < len__19529__auto___34436)){
args34369.push((arguments[i__19530__auto___34437]));

var G__34438 = (i__19530__auto___34437 + (1));
i__19530__auto___34437 = G__34438;
continue;
} else {
}
break;
}

var G__34371 = args34369.length;
switch (G__34371) {
case 1:
return sablono.core.search_field34368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field34368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34369.length)].join('')));

}
});

sablono.core.search_field34368.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.search_field34368.call(null,name__25164__auto__,null);
});

sablono.core.search_field34368.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.search_field34368.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34368);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field34372 = (function sablono$core$tel_field34372(var_args){
var args34373 = [];
var len__19529__auto___34440 = arguments.length;
var i__19530__auto___34441 = (0);
while(true){
if((i__19530__auto___34441 < len__19529__auto___34440)){
args34373.push((arguments[i__19530__auto___34441]));

var G__34442 = (i__19530__auto___34441 + (1));
i__19530__auto___34441 = G__34442;
continue;
} else {
}
break;
}

var G__34375 = args34373.length;
switch (G__34375) {
case 1:
return sablono.core.tel_field34372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field34372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34373.length)].join('')));

}
});

sablono.core.tel_field34372.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.tel_field34372.call(null,name__25164__auto__,null);
});

sablono.core.tel_field34372.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.tel_field34372.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34372);

/**
 * Creates a text input field.
 */
sablono.core.text_field34376 = (function sablono$core$text_field34376(var_args){
var args34377 = [];
var len__19529__auto___34444 = arguments.length;
var i__19530__auto___34445 = (0);
while(true){
if((i__19530__auto___34445 < len__19529__auto___34444)){
args34377.push((arguments[i__19530__auto___34445]));

var G__34446 = (i__19530__auto___34445 + (1));
i__19530__auto___34445 = G__34446;
continue;
} else {
}
break;
}

var G__34379 = args34377.length;
switch (G__34379) {
case 1:
return sablono.core.text_field34376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field34376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34377.length)].join('')));

}
});

sablono.core.text_field34376.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.text_field34376.call(null,name__25164__auto__,null);
});

sablono.core.text_field34376.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.text_field34376.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34376);

/**
 * Creates a time input field.
 */
sablono.core.time_field34380 = (function sablono$core$time_field34380(var_args){
var args34381 = [];
var len__19529__auto___34448 = arguments.length;
var i__19530__auto___34449 = (0);
while(true){
if((i__19530__auto___34449 < len__19529__auto___34448)){
args34381.push((arguments[i__19530__auto___34449]));

var G__34450 = (i__19530__auto___34449 + (1));
i__19530__auto___34449 = G__34450;
continue;
} else {
}
break;
}

var G__34383 = args34381.length;
switch (G__34383) {
case 1:
return sablono.core.time_field34380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field34380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34381.length)].join('')));

}
});

sablono.core.time_field34380.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.time_field34380.call(null,name__25164__auto__,null);
});

sablono.core.time_field34380.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.time_field34380.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34380);

/**
 * Creates a url input field.
 */
sablono.core.url_field34384 = (function sablono$core$url_field34384(var_args){
var args34385 = [];
var len__19529__auto___34452 = arguments.length;
var i__19530__auto___34453 = (0);
while(true){
if((i__19530__auto___34453 < len__19529__auto___34452)){
args34385.push((arguments[i__19530__auto___34453]));

var G__34454 = (i__19530__auto___34453 + (1));
i__19530__auto___34453 = G__34454;
continue;
} else {
}
break;
}

var G__34387 = args34385.length;
switch (G__34387) {
case 1:
return sablono.core.url_field34384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field34384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34385.length)].join('')));

}
});

sablono.core.url_field34384.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.url_field34384.call(null,name__25164__auto__,null);
});

sablono.core.url_field34384.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.url_field34384.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34384);

/**
 * Creates a week input field.
 */
sablono.core.week_field34388 = (function sablono$core$week_field34388(var_args){
var args34389 = [];
var len__19529__auto___34456 = arguments.length;
var i__19530__auto___34457 = (0);
while(true){
if((i__19530__auto___34457 < len__19529__auto___34456)){
args34389.push((arguments[i__19530__auto___34457]));

var G__34458 = (i__19530__auto___34457 + (1));
i__19530__auto___34457 = G__34458;
continue;
} else {
}
break;
}

var G__34391 = args34389.length;
switch (G__34391) {
case 1:
return sablono.core.week_field34388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field34388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34389.length)].join('')));

}
});

sablono.core.week_field34388.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.week_field34388.call(null,name__25164__auto__,null);
});

sablono.core.week_field34388.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.week_field34388.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34388);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34460 = (function sablono$core$check_box34460(var_args){
var args34461 = [];
var len__19529__auto___34464 = arguments.length;
var i__19530__auto___34465 = (0);
while(true){
if((i__19530__auto___34465 < len__19529__auto___34464)){
args34461.push((arguments[i__19530__auto___34465]));

var G__34466 = (i__19530__auto___34465 + (1));
i__19530__auto___34465 = G__34466;
continue;
} else {
}
break;
}

var G__34463 = args34461.length;
switch (G__34463) {
case 1:
return sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34461.length)].join('')));

}
});

sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box34460.call(null,name,null);
});

sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box34460.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box34460.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34460.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34460);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34468 = (function sablono$core$radio_button34468(var_args){
var args34469 = [];
var len__19529__auto___34472 = arguments.length;
var i__19530__auto___34473 = (0);
while(true){
if((i__19530__auto___34473 < len__19529__auto___34472)){
args34469.push((arguments[i__19530__auto___34473]));

var G__34474 = (i__19530__auto___34473 + (1));
i__19530__auto___34473 = G__34474;
continue;
} else {
}
break;
}

var G__34471 = args34469.length;
switch (G__34471) {
case 1:
return sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34469.length)].join('')));

}
});

sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button34468.call(null,group,null);
});

sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button34468.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button34468.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34468.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34468);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34476 = (function sablono$core$select_options34476(coll){
var iter__19239__auto__ = (function sablono$core$select_options34476_$_iter__34485(s__34486){
return (new cljs.core.LazySeq(null,(function (){
var s__34486__$1 = s__34486;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34486__$1);
if(temp__4657__auto__){
var s__34486__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34486__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__34486__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__34488 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__34487 = (0);
while(true){
if((i__34487 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__34487);
cljs.core.chunk_append.call(null,b__34488,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34491 = x;
var text = cljs.core.nth.call(null,vec__34491,(0),null);
var val = cljs.core.nth.call(null,vec__34491,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34491,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options34476.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34493 = (i__34487 + (1));
i__34487 = G__34493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34488),sablono$core$select_options34476_$_iter__34485.call(null,cljs.core.chunk_rest.call(null,s__34486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34488),null);
}
} else {
var x = cljs.core.first.call(null,s__34486__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34492 = x;
var text = cljs.core.nth.call(null,vec__34492,(0),null);
var val = cljs.core.nth.call(null,vec__34492,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34492,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options34476.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34476_$_iter__34485.call(null,cljs.core.rest.call(null,s__34486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34476);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34494 = (function sablono$core$drop_down34494(var_args){
var args34495 = [];
var len__19529__auto___34498 = arguments.length;
var i__19530__auto___34499 = (0);
while(true){
if((i__19530__auto___34499 < len__19529__auto___34498)){
args34495.push((arguments[i__19530__auto___34499]));

var G__34500 = (i__19530__auto___34499 + (1));
i__19530__auto___34499 = G__34500;
continue;
} else {
}
break;
}

var G__34497 = args34495.length;
switch (G__34497) {
case 2:
return sablono.core.drop_down34494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34494.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34495.length)].join('')));

}
});

sablono.core.drop_down34494.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34494.call(null,name,options,null);
});

sablono.core.drop_down34494.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down34494.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34494);
/**
 * Creates a text area element.
 */
sablono.core.text_area34502 = (function sablono$core$text_area34502(var_args){
var args34503 = [];
var len__19529__auto___34506 = arguments.length;
var i__19530__auto___34507 = (0);
while(true){
if((i__19530__auto___34507 < len__19529__auto___34506)){
args34503.push((arguments[i__19530__auto___34507]));

var G__34508 = (i__19530__auto___34507 + (1));
i__19530__auto___34507 = G__34508;
continue;
} else {
}
break;
}

var G__34505 = args34503.length;
switch (G__34505) {
case 1:
return sablono.core.text_area34502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34503.length)].join('')));

}
});

sablono.core.text_area34502.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area34502.call(null,name,null);
});

sablono.core.text_area34502.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area34502.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34502);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34510 = (function sablono$core$label34510(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34510);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34511 = (function sablono$core$submit_button34511(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34511);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34512 = (function sablono$core$reset_button34512(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34512);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34513 = (function sablono$core$form_to34513(var_args){
var args__19536__auto__ = [];
var len__19529__auto___34518 = arguments.length;
var i__19530__auto___34519 = (0);
while(true){
if((i__19530__auto___34519 < len__19529__auto___34518)){
args__19536__auto__.push((arguments[i__19530__auto___34519]));

var G__34520 = (i__19530__auto___34519 + (1));
i__19530__auto___34519 = G__34520;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34513.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to34513.cljs$core$IFn$_invoke$arity$variadic = (function (p__34516,body){
var vec__34517 = p__34516;
var method = cljs.core.nth.call(null,vec__34517,(0),null);
var action = cljs.core.nth.call(null,vec__34517,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to34513.cljs$lang$maxFixedArity = (1);

sablono.core.form_to34513.cljs$lang$applyTo = (function (seq34514){
var G__34515 = cljs.core.first.call(null,seq34514);
var seq34514__$1 = cljs.core.next.call(null,seq34514);
return sablono.core.form_to34513.cljs$core$IFn$_invoke$arity$variadic(G__34515,seq34514__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34513);

//# sourceMappingURL=core.js.map?rel=1467040426237