// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards_example.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.hello_world = (function devcards_example$core$hello_world(){
return React.createElement("p",null,"Hello World");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"hello-world-card","hello-world-card",-1410552029)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hello-world-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.hello_world,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.display_name = (function devcards_example$core$display_name(name){
return React.createElement("div",null,React.createElement("h1",null,"Hello there, ",sablono.interpreter.interpret.call(null,name)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"name-card","name-card",360951848)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"name-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.display_name.call(null,"minisha"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.multiply = (function devcards_example$core$multiply(x){
return ((2) * x);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"multiply-card","multiply-card",838876616)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"multiply-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.multiply.call(null,(5)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.multiply_nested = (function devcards_example$core$multiply_nested(number){
return React.createElement("div",null,React.createElement("h1",null,"Multiplication result ",sablono.interpreter.interpret.call(null,devcards_example.core.multiply.call(null,number))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"multiply-nested-card","multiply-nested-card",-1406332765)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"multiply-nested-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.multiply_nested.call(null,(10)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.inline_style = (function devcards_example$core$inline_style(){
return React.createElement("div",null,React.createElement("p",null,"I am a inline-style!"),React.createElement("p",null,"I have ",React.createElement("strong",null,"bold"),React.createElement("span",{"style": {"color": "red"}}," and red "),"text"));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"inline-style-card","inline-style-card",-1885823445)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"inline-style-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.inline_style,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.for_loop = (function devcards_example$core$for_loop(){
return React.createElement("div",null,"List",React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__19239__auto__ = (function devcards_example$core$for_loop_$_iter__22456(s__22457){
return (new cljs.core.LazySeq(null,(function (){
var s__22457__$1 = s__22457;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22457__$1);
if(temp__4657__auto__){
var s__22457__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22457__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__22457__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__22459 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__22458 = (0);
while(true){
if((i__22458 < size__19238__auto__)){
var n = cljs.core._nth.call(null,c__19237__auto__,i__22458);
cljs.core.chunk_append.call(null,b__22459,React.createElement("li",{"key": n},sablono.interpreter.interpret.call(null,n)));

var G__22460 = (i__22458 + (1));
i__22458 = G__22460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22459),devcards_example$core$for_loop_$_iter__22456.call(null,cljs.core.chunk_rest.call(null,s__22457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22459),null);
}
} else {
var n = cljs.core.first.call(null,s__22457__$2);
return cljs.core.cons.call(null,React.createElement("li",{"key": n},sablono.interpreter.interpret.call(null,n)),devcards_example$core$for_loop_$_iter__22456.call(null,cljs.core.rest.call(null,s__22457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,cljs.core.range.call(null,(1),(10)));
})())),sablono.interpreter.interpret.call(null,sablono.core.submit_button.call(null,"React!")));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards_example.core","devcards_example.core",-1545516980),new cljs.core.Keyword(null,"for-loop-card","for-loop-card",169279793)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"for-loop-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards_example.core.for_loop,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards_example.core.main = (function devcards_example$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
devcards_example.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1467043495505