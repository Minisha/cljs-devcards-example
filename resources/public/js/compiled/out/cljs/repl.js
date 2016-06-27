// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36738_36752 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36739_36753 = null;
var count__36740_36754 = (0);
var i__36741_36755 = (0);
while(true){
if((i__36741_36755 < count__36740_36754)){
var f_36756 = cljs.core._nth.call(null,chunk__36739_36753,i__36741_36755);
cljs.core.println.call(null,"  ",f_36756);

var G__36757 = seq__36738_36752;
var G__36758 = chunk__36739_36753;
var G__36759 = count__36740_36754;
var G__36760 = (i__36741_36755 + (1));
seq__36738_36752 = G__36757;
chunk__36739_36753 = G__36758;
count__36740_36754 = G__36759;
i__36741_36755 = G__36760;
continue;
} else {
var temp__4657__auto___36761 = cljs.core.seq.call(null,seq__36738_36752);
if(temp__4657__auto___36761){
var seq__36738_36762__$1 = temp__4657__auto___36761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36738_36762__$1)){
var c__19270__auto___36763 = cljs.core.chunk_first.call(null,seq__36738_36762__$1);
var G__36764 = cljs.core.chunk_rest.call(null,seq__36738_36762__$1);
var G__36765 = c__19270__auto___36763;
var G__36766 = cljs.core.count.call(null,c__19270__auto___36763);
var G__36767 = (0);
seq__36738_36752 = G__36764;
chunk__36739_36753 = G__36765;
count__36740_36754 = G__36766;
i__36741_36755 = G__36767;
continue;
} else {
var f_36768 = cljs.core.first.call(null,seq__36738_36762__$1);
cljs.core.println.call(null,"  ",f_36768);

var G__36769 = cljs.core.next.call(null,seq__36738_36762__$1);
var G__36770 = null;
var G__36771 = (0);
var G__36772 = (0);
seq__36738_36752 = G__36769;
chunk__36739_36753 = G__36770;
count__36740_36754 = G__36771;
i__36741_36755 = G__36772;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36773 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36773);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36773)))?cljs.core.second.call(null,arglists_36773):arglists_36773));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36742 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36743 = null;
var count__36744 = (0);
var i__36745 = (0);
while(true){
if((i__36745 < count__36744)){
var vec__36746 = cljs.core._nth.call(null,chunk__36743,i__36745);
var name = cljs.core.nth.call(null,vec__36746,(0),null);
var map__36747 = cljs.core.nth.call(null,vec__36746,(1),null);
var map__36747__$1 = ((((!((map__36747 == null)))?((((map__36747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36747):map__36747);
var doc = cljs.core.get.call(null,map__36747__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36747__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36774 = seq__36742;
var G__36775 = chunk__36743;
var G__36776 = count__36744;
var G__36777 = (i__36745 + (1));
seq__36742 = G__36774;
chunk__36743 = G__36775;
count__36744 = G__36776;
i__36745 = G__36777;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36742);
if(temp__4657__auto__){
var seq__36742__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36742__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__36742__$1);
var G__36778 = cljs.core.chunk_rest.call(null,seq__36742__$1);
var G__36779 = c__19270__auto__;
var G__36780 = cljs.core.count.call(null,c__19270__auto__);
var G__36781 = (0);
seq__36742 = G__36778;
chunk__36743 = G__36779;
count__36744 = G__36780;
i__36745 = G__36781;
continue;
} else {
var vec__36749 = cljs.core.first.call(null,seq__36742__$1);
var name = cljs.core.nth.call(null,vec__36749,(0),null);
var map__36750 = cljs.core.nth.call(null,vec__36749,(1),null);
var map__36750__$1 = ((((!((map__36750 == null)))?((((map__36750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36750):map__36750);
var doc = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__36782 = cljs.core.next.call(null,seq__36742__$1);
var G__36783 = null;
var G__36784 = (0);
var G__36785 = (0);
seq__36742 = G__36782;
chunk__36743 = G__36783;
count__36744 = G__36784;
i__36745 = G__36785;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467040428329