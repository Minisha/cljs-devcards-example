// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37226 = cljs.core._EQ_;
var expr__37227 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37230){if((e37230 instanceof Error)){
var e = e37230;
return false;
} else {
throw e37230;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37226.call(null,"true",expr__37227))){
return true;
} else {
if(cljs.core.truth_(pred__37226.call(null,"false",expr__37227))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37227)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37232){if((e37232 instanceof Error)){
var e = e37232;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37232;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19536__auto__ = [];
var len__19529__auto___37234 = arguments.length;
var i__19530__auto___37235 = (0);
while(true){
if((i__19530__auto___37235 < len__19529__auto___37234)){
args__19536__auto__.push((arguments[i__19530__auto___37235]));

var G__37236 = (i__19530__auto___37235 + (1));
i__19530__auto___37235 = G__37236;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq37233){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37233));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37237){
var map__37240 = p__37237;
var map__37240__$1 = ((((!((map__37240 == null)))?((((map__37240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37240):map__37240);
var message = cljs.core.get.call(null,map__37240__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37240__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18459__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18447__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18447__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18447__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21831__auto___37402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___37402,ch){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___37402,ch){
return (function (state_37371){
var state_val_37372 = (state_37371[(1)]);
if((state_val_37372 === (7))){
var inst_37367 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37373_37403 = state_37371__$1;
(statearr_37373_37403[(2)] = inst_37367);

(statearr_37373_37403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (1))){
var state_37371__$1 = state_37371;
var statearr_37374_37404 = state_37371__$1;
(statearr_37374_37404[(2)] = null);

(statearr_37374_37404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (4))){
var inst_37324 = (state_37371[(7)]);
var inst_37324__$1 = (state_37371[(2)]);
var state_37371__$1 = (function (){var statearr_37375 = state_37371;
(statearr_37375[(7)] = inst_37324__$1);

return statearr_37375;
})();
if(cljs.core.truth_(inst_37324__$1)){
var statearr_37376_37405 = state_37371__$1;
(statearr_37376_37405[(1)] = (5));

} else {
var statearr_37377_37406 = state_37371__$1;
(statearr_37377_37406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (15))){
var inst_37331 = (state_37371[(8)]);
var inst_37346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37331);
var inst_37347 = cljs.core.first.call(null,inst_37346);
var inst_37348 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37347);
var inst_37349 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37348)].join('');
var inst_37350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37349);
var state_37371__$1 = state_37371;
var statearr_37378_37407 = state_37371__$1;
(statearr_37378_37407[(2)] = inst_37350);

(statearr_37378_37407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (13))){
var inst_37355 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37379_37408 = state_37371__$1;
(statearr_37379_37408[(2)] = inst_37355);

(statearr_37379_37408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (6))){
var state_37371__$1 = state_37371;
var statearr_37380_37409 = state_37371__$1;
(statearr_37380_37409[(2)] = null);

(statearr_37380_37409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (17))){
var inst_37353 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37381_37410 = state_37371__$1;
(statearr_37381_37410[(2)] = inst_37353);

(statearr_37381_37410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (3))){
var inst_37369 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37371__$1,inst_37369);
} else {
if((state_val_37372 === (12))){
var inst_37330 = (state_37371[(9)]);
var inst_37344 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37330,opts);
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37344)){
var statearr_37382_37411 = state_37371__$1;
(statearr_37382_37411[(1)] = (15));

} else {
var statearr_37383_37412 = state_37371__$1;
(statearr_37383_37412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (2))){
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37371__$1,(4),ch);
} else {
if((state_val_37372 === (11))){
var inst_37331 = (state_37371[(8)]);
var inst_37336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37337 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37331);
var inst_37338 = cljs.core.async.timeout.call(null,(1000));
var inst_37339 = [inst_37337,inst_37338];
var inst_37340 = (new cljs.core.PersistentVector(null,2,(5),inst_37336,inst_37339,null));
var state_37371__$1 = state_37371;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37371__$1,(14),inst_37340);
} else {
if((state_val_37372 === (9))){
var inst_37331 = (state_37371[(8)]);
var inst_37357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37331);
var inst_37359 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37358);
var inst_37360 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37359)].join('');
var inst_37361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37360);
var state_37371__$1 = (function (){var statearr_37384 = state_37371;
(statearr_37384[(10)] = inst_37357);

return statearr_37384;
})();
var statearr_37385_37413 = state_37371__$1;
(statearr_37385_37413[(2)] = inst_37361);

(statearr_37385_37413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (5))){
var inst_37324 = (state_37371[(7)]);
var inst_37326 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37327 = (new cljs.core.PersistentArrayMap(null,2,inst_37326,null));
var inst_37328 = (new cljs.core.PersistentHashSet(null,inst_37327,null));
var inst_37329 = figwheel.client.focus_msgs.call(null,inst_37328,inst_37324);
var inst_37330 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37329);
var inst_37331 = cljs.core.first.call(null,inst_37329);
var inst_37332 = figwheel.client.autoload_QMARK_.call(null);
var state_37371__$1 = (function (){var statearr_37386 = state_37371;
(statearr_37386[(8)] = inst_37331);

(statearr_37386[(9)] = inst_37330);

return statearr_37386;
})();
if(cljs.core.truth_(inst_37332)){
var statearr_37387_37414 = state_37371__$1;
(statearr_37387_37414[(1)] = (8));

} else {
var statearr_37388_37415 = state_37371__$1;
(statearr_37388_37415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (14))){
var inst_37342 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37389_37416 = state_37371__$1;
(statearr_37389_37416[(2)] = inst_37342);

(statearr_37389_37416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (16))){
var state_37371__$1 = state_37371;
var statearr_37390_37417 = state_37371__$1;
(statearr_37390_37417[(2)] = null);

(statearr_37390_37417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (10))){
var inst_37363 = (state_37371[(2)]);
var state_37371__$1 = (function (){var statearr_37391 = state_37371;
(statearr_37391[(11)] = inst_37363);

return statearr_37391;
})();
var statearr_37392_37418 = state_37371__$1;
(statearr_37392_37418[(2)] = null);

(statearr_37392_37418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (8))){
var inst_37330 = (state_37371[(9)]);
var inst_37334 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37330,opts);
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37334)){
var statearr_37393_37419 = state_37371__$1;
(statearr_37393_37419[(1)] = (11));

} else {
var statearr_37394_37420 = state_37371__$1;
(statearr_37394_37420[(1)] = (12));

}

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
});})(c__21831__auto___37402,ch))
;
return ((function (switch__21719__auto__,c__21831__auto___37402,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____0 = (function (){
var statearr_37398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37398[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__);

(statearr_37398[(1)] = (1));

return statearr_37398;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____1 = (function (state_37371){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37399){if((e37399 instanceof Object)){
var ex__21723__auto__ = e37399;
var statearr_37400_37421 = state_37371;
(statearr_37400_37421[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37422 = state_37371;
state_37371 = G__37422;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__ = function(state_37371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____1.call(this,state_37371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21720__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___37402,ch))
})();
var state__21833__auto__ = (function (){var statearr_37401 = f__21832__auto__.call(null);
(statearr_37401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___37402);

return statearr_37401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___37402,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37423_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37423_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37430 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37430){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37429 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37429;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37428;
}}catch (e37427){if((e37427 instanceof Error)){
var e = e37427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37430], null));
} else {
var e = e37427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37430))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37431){
var map__37438 = p__37431;
var map__37438__$1 = ((((!((map__37438 == null)))?((((map__37438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37438):map__37438);
var opts = map__37438__$1;
var build_id = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37438,map__37438__$1,opts,build_id){
return (function (p__37440){
var vec__37441 = p__37440;
var map__37442 = cljs.core.nth.call(null,vec__37441,(0),null);
var map__37442__$1 = ((((!((map__37442 == null)))?((((map__37442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37442):map__37442);
var msg = map__37442__$1;
var msg_name = cljs.core.get.call(null,map__37442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37441,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37441,map__37442,map__37442__$1,msg,msg_name,_,map__37438,map__37438__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37441,map__37442,map__37442__$1,msg,msg_name,_,map__37438,map__37438__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37438,map__37438__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37448){
var vec__37449 = p__37448;
var map__37450 = cljs.core.nth.call(null,vec__37449,(0),null);
var map__37450__$1 = ((((!((map__37450 == null)))?((((map__37450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37450):map__37450);
var msg = map__37450__$1;
var msg_name = cljs.core.get.call(null,map__37450__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37449,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37452){
var map__37462 = p__37452;
var map__37462__$1 = ((((!((map__37462 == null)))?((((map__37462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37462):map__37462);
var on_compile_warning = cljs.core.get.call(null,map__37462__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37462__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37462,map__37462__$1,on_compile_warning,on_compile_fail){
return (function (p__37464){
var vec__37465 = p__37464;
var map__37466 = cljs.core.nth.call(null,vec__37465,(0),null);
var map__37466__$1 = ((((!((map__37466 == null)))?((((map__37466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37466):map__37466);
var msg = map__37466__$1;
var msg_name = cljs.core.get.call(null,map__37466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37465,(1));
var pred__37468 = cljs.core._EQ_;
var expr__37469 = msg_name;
if(cljs.core.truth_(pred__37468.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37469))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37468.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37469))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37462,map__37462__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__,msg_hist,msg_names,msg){
return (function (state_37677){
var state_val_37678 = (state_37677[(1)]);
if((state_val_37678 === (7))){
var inst_37605 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37605)){
var statearr_37679_37725 = state_37677__$1;
(statearr_37679_37725[(1)] = (8));

} else {
var statearr_37680_37726 = state_37677__$1;
(statearr_37680_37726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (20))){
var inst_37671 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37681_37727 = state_37677__$1;
(statearr_37681_37727[(2)] = inst_37671);

(statearr_37681_37727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (27))){
var inst_37667 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37682_37728 = state_37677__$1;
(statearr_37682_37728[(2)] = inst_37667);

(statearr_37682_37728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (1))){
var inst_37598 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37598)){
var statearr_37683_37729 = state_37677__$1;
(statearr_37683_37729[(1)] = (2));

} else {
var statearr_37684_37730 = state_37677__$1;
(statearr_37684_37730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (24))){
var inst_37669 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37685_37731 = state_37677__$1;
(statearr_37685_37731[(2)] = inst_37669);

(statearr_37685_37731[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (4))){
var inst_37675 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37677__$1,inst_37675);
} else {
if((state_val_37678 === (15))){
var inst_37673 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37686_37732 = state_37677__$1;
(statearr_37686_37732[(2)] = inst_37673);

(statearr_37686_37732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (21))){
var inst_37632 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37687_37733 = state_37677__$1;
(statearr_37687_37733[(2)] = inst_37632);

(statearr_37687_37733[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (31))){
var inst_37656 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37656)){
var statearr_37688_37734 = state_37677__$1;
(statearr_37688_37734[(1)] = (34));

} else {
var statearr_37689_37735 = state_37677__$1;
(statearr_37689_37735[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (32))){
var inst_37665 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37690_37736 = state_37677__$1;
(statearr_37690_37736[(2)] = inst_37665);

(statearr_37690_37736[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (33))){
var inst_37654 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37691_37737 = state_37677__$1;
(statearr_37691_37737[(2)] = inst_37654);

(statearr_37691_37737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (13))){
var inst_37619 = figwheel.client.heads_up.clear.call(null);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(16),inst_37619);
} else {
if((state_val_37678 === (22))){
var inst_37636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37637 = figwheel.client.heads_up.append_message.call(null,inst_37636);
var state_37677__$1 = state_37677;
var statearr_37692_37738 = state_37677__$1;
(statearr_37692_37738[(2)] = inst_37637);

(statearr_37692_37738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (36))){
var inst_37663 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37693_37739 = state_37677__$1;
(statearr_37693_37739[(2)] = inst_37663);

(statearr_37693_37739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (29))){
var inst_37647 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37694_37740 = state_37677__$1;
(statearr_37694_37740[(2)] = inst_37647);

(statearr_37694_37740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (6))){
var inst_37600 = (state_37677[(7)]);
var state_37677__$1 = state_37677;
var statearr_37695_37741 = state_37677__$1;
(statearr_37695_37741[(2)] = inst_37600);

(statearr_37695_37741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (28))){
var inst_37643 = (state_37677[(2)]);
var inst_37644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37645 = figwheel.client.heads_up.display_warning.call(null,inst_37644);
var state_37677__$1 = (function (){var statearr_37696 = state_37677;
(statearr_37696[(8)] = inst_37643);

return statearr_37696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(29),inst_37645);
} else {
if((state_val_37678 === (25))){
var inst_37641 = figwheel.client.heads_up.clear.call(null);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(28),inst_37641);
} else {
if((state_val_37678 === (34))){
var inst_37658 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(37),inst_37658);
} else {
if((state_val_37678 === (17))){
var inst_37625 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37697_37742 = state_37677__$1;
(statearr_37697_37742[(2)] = inst_37625);

(statearr_37697_37742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (3))){
var inst_37617 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37617)){
var statearr_37698_37743 = state_37677__$1;
(statearr_37698_37743[(1)] = (13));

} else {
var statearr_37699_37744 = state_37677__$1;
(statearr_37699_37744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (12))){
var inst_37613 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37700_37745 = state_37677__$1;
(statearr_37700_37745[(2)] = inst_37613);

(statearr_37700_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (2))){
var inst_37600 = (state_37677[(7)]);
var inst_37600__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37677__$1 = (function (){var statearr_37701 = state_37677;
(statearr_37701[(7)] = inst_37600__$1);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37600__$1)){
var statearr_37702_37746 = state_37677__$1;
(statearr_37702_37746[(1)] = (5));

} else {
var statearr_37703_37747 = state_37677__$1;
(statearr_37703_37747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (23))){
var inst_37639 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37639)){
var statearr_37704_37748 = state_37677__$1;
(statearr_37704_37748[(1)] = (25));

} else {
var statearr_37705_37749 = state_37677__$1;
(statearr_37705_37749[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (35))){
var state_37677__$1 = state_37677;
var statearr_37706_37750 = state_37677__$1;
(statearr_37706_37750[(2)] = null);

(statearr_37706_37750[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (19))){
var inst_37634 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37634)){
var statearr_37707_37751 = state_37677__$1;
(statearr_37707_37751[(1)] = (22));

} else {
var statearr_37708_37752 = state_37677__$1;
(statearr_37708_37752[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (11))){
var inst_37609 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37709_37753 = state_37677__$1;
(statearr_37709_37753[(2)] = inst_37609);

(statearr_37709_37753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (9))){
var inst_37611 = figwheel.client.heads_up.clear.call(null);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(12),inst_37611);
} else {
if((state_val_37678 === (5))){
var inst_37602 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37677__$1 = state_37677;
var statearr_37710_37754 = state_37677__$1;
(statearr_37710_37754[(2)] = inst_37602);

(statearr_37710_37754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (14))){
var inst_37627 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37627)){
var statearr_37711_37755 = state_37677__$1;
(statearr_37711_37755[(1)] = (18));

} else {
var statearr_37712_37756 = state_37677__$1;
(statearr_37712_37756[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (26))){
var inst_37649 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37677__$1 = state_37677;
if(cljs.core.truth_(inst_37649)){
var statearr_37713_37757 = state_37677__$1;
(statearr_37713_37757[(1)] = (30));

} else {
var statearr_37714_37758 = state_37677__$1;
(statearr_37714_37758[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (16))){
var inst_37621 = (state_37677[(2)]);
var inst_37622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37623 = figwheel.client.heads_up.display_exception.call(null,inst_37622);
var state_37677__$1 = (function (){var statearr_37715 = state_37677;
(statearr_37715[(9)] = inst_37621);

return statearr_37715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(17),inst_37623);
} else {
if((state_val_37678 === (30))){
var inst_37651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37652 = figwheel.client.heads_up.display_warning.call(null,inst_37651);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(33),inst_37652);
} else {
if((state_val_37678 === (10))){
var inst_37615 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37716_37759 = state_37677__$1;
(statearr_37716_37759[(2)] = inst_37615);

(statearr_37716_37759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (18))){
var inst_37629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37630 = figwheel.client.heads_up.display_exception.call(null,inst_37629);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(21),inst_37630);
} else {
if((state_val_37678 === (37))){
var inst_37660 = (state_37677[(2)]);
var state_37677__$1 = state_37677;
var statearr_37717_37760 = state_37677__$1;
(statearr_37717_37760[(2)] = inst_37660);

(statearr_37717_37760[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37678 === (8))){
var inst_37607 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(11),inst_37607);
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
}
}
}
}
}
}
}
});})(c__21831__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21719__auto__,c__21831__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____0 = (function (){
var statearr_37721 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37721[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__);

(statearr_37721[(1)] = (1));

return statearr_37721;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____1 = (function (state_37677){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37722){if((e37722 instanceof Object)){
var ex__21723__auto__ = e37722;
var statearr_37723_37761 = state_37677;
(statearr_37723_37761[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37762 = state_37677;
state_37677 = G__37762;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__ = function(state_37677){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____1.call(this,state_37677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__,msg_hist,msg_names,msg))
})();
var state__21833__auto__ = (function (){var statearr_37724 = f__21832__auto__.call(null);
(statearr_37724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_37724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,msg_hist,msg_names,msg))
);

return c__21831__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21831__auto___37825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___37825,ch){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___37825,ch){
return (function (state_37808){
var state_val_37809 = (state_37808[(1)]);
if((state_val_37809 === (1))){
var state_37808__$1 = state_37808;
var statearr_37810_37826 = state_37808__$1;
(statearr_37810_37826[(2)] = null);

(statearr_37810_37826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37809 === (2))){
var state_37808__$1 = state_37808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37808__$1,(4),ch);
} else {
if((state_val_37809 === (3))){
var inst_37806 = (state_37808[(2)]);
var state_37808__$1 = state_37808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37808__$1,inst_37806);
} else {
if((state_val_37809 === (4))){
var inst_37796 = (state_37808[(7)]);
var inst_37796__$1 = (state_37808[(2)]);
var state_37808__$1 = (function (){var statearr_37811 = state_37808;
(statearr_37811[(7)] = inst_37796__$1);

return statearr_37811;
})();
if(cljs.core.truth_(inst_37796__$1)){
var statearr_37812_37827 = state_37808__$1;
(statearr_37812_37827[(1)] = (5));

} else {
var statearr_37813_37828 = state_37808__$1;
(statearr_37813_37828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37809 === (5))){
var inst_37796 = (state_37808[(7)]);
var inst_37798 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37796);
var state_37808__$1 = state_37808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37808__$1,(8),inst_37798);
} else {
if((state_val_37809 === (6))){
var state_37808__$1 = state_37808;
var statearr_37814_37829 = state_37808__$1;
(statearr_37814_37829[(2)] = null);

(statearr_37814_37829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37809 === (7))){
var inst_37804 = (state_37808[(2)]);
var state_37808__$1 = state_37808;
var statearr_37815_37830 = state_37808__$1;
(statearr_37815_37830[(2)] = inst_37804);

(statearr_37815_37830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37809 === (8))){
var inst_37800 = (state_37808[(2)]);
var state_37808__$1 = (function (){var statearr_37816 = state_37808;
(statearr_37816[(8)] = inst_37800);

return statearr_37816;
})();
var statearr_37817_37831 = state_37808__$1;
(statearr_37817_37831[(2)] = null);

(statearr_37817_37831[(1)] = (2));


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
});})(c__21831__auto___37825,ch))
;
return ((function (switch__21719__auto__,c__21831__auto___37825,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21720__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21720__auto____0 = (function (){
var statearr_37821 = [null,null,null,null,null,null,null,null,null];
(statearr_37821[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21720__auto__);

(statearr_37821[(1)] = (1));

return statearr_37821;
});
var figwheel$client$heads_up_plugin_$_state_machine__21720__auto____1 = (function (state_37808){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37822){if((e37822 instanceof Object)){
var ex__21723__auto__ = e37822;
var statearr_37823_37832 = state_37808;
(statearr_37823_37832[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37833 = state_37808;
state_37808 = G__37833;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21720__auto__ = function(state_37808){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21720__auto____1.call(this,state_37808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21720__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21720__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___37825,ch))
})();
var state__21833__auto__ = (function (){var statearr_37824 = f__21832__auto__.call(null);
(statearr_37824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___37825);

return statearr_37824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___37825,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_37854){
var state_val_37855 = (state_37854[(1)]);
if((state_val_37855 === (1))){
var inst_37849 = cljs.core.async.timeout.call(null,(3000));
var state_37854__$1 = state_37854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37854__$1,(2),inst_37849);
} else {
if((state_val_37855 === (2))){
var inst_37851 = (state_37854[(2)]);
var inst_37852 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37854__$1 = (function (){var statearr_37856 = state_37854;
(statearr_37856[(7)] = inst_37851);

return statearr_37856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37854__$1,inst_37852);
} else {
return null;
}
}
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____0 = (function (){
var statearr_37860 = [null,null,null,null,null,null,null,null];
(statearr_37860[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__);

(statearr_37860[(1)] = (1));

return statearr_37860;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____1 = (function (state_37854){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_37854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e37861){if((e37861 instanceof Object)){
var ex__21723__auto__ = e37861;
var statearr_37862_37864 = state_37854;
(statearr_37862_37864[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37865 = state_37854;
state_37854 = G__37865;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__ = function(state_37854){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____1.call(this,state_37854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21720__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_37863 = f__21832__auto__.call(null);
(statearr_37863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_37863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37866){
var map__37873 = p__37866;
var map__37873__$1 = ((((!((map__37873 == null)))?((((map__37873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37873):map__37873);
var ed = map__37873__$1;
var formatted_exception = cljs.core.get.call(null,map__37873__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37873__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37873__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37875_37879 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37876_37880 = null;
var count__37877_37881 = (0);
var i__37878_37882 = (0);
while(true){
if((i__37878_37882 < count__37877_37881)){
var msg_37883 = cljs.core._nth.call(null,chunk__37876_37880,i__37878_37882);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37883);

var G__37884 = seq__37875_37879;
var G__37885 = chunk__37876_37880;
var G__37886 = count__37877_37881;
var G__37887 = (i__37878_37882 + (1));
seq__37875_37879 = G__37884;
chunk__37876_37880 = G__37885;
count__37877_37881 = G__37886;
i__37878_37882 = G__37887;
continue;
} else {
var temp__4657__auto___37888 = cljs.core.seq.call(null,seq__37875_37879);
if(temp__4657__auto___37888){
var seq__37875_37889__$1 = temp__4657__auto___37888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37875_37889__$1)){
var c__19270__auto___37890 = cljs.core.chunk_first.call(null,seq__37875_37889__$1);
var G__37891 = cljs.core.chunk_rest.call(null,seq__37875_37889__$1);
var G__37892 = c__19270__auto___37890;
var G__37893 = cljs.core.count.call(null,c__19270__auto___37890);
var G__37894 = (0);
seq__37875_37879 = G__37891;
chunk__37876_37880 = G__37892;
count__37877_37881 = G__37893;
i__37878_37882 = G__37894;
continue;
} else {
var msg_37895 = cljs.core.first.call(null,seq__37875_37889__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37895);

var G__37896 = cljs.core.next.call(null,seq__37875_37889__$1);
var G__37897 = null;
var G__37898 = (0);
var G__37899 = (0);
seq__37875_37879 = G__37896;
chunk__37876_37880 = G__37897;
count__37877_37881 = G__37898;
i__37878_37882 = G__37899;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37900){
var map__37903 = p__37900;
var map__37903__$1 = ((((!((map__37903 == null)))?((((map__37903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37903):map__37903);
var w = map__37903__$1;
var message = cljs.core.get.call(null,map__37903__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18447__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18447__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37911 = cljs.core.seq.call(null,plugins);
var chunk__37912 = null;
var count__37913 = (0);
var i__37914 = (0);
while(true){
if((i__37914 < count__37913)){
var vec__37915 = cljs.core._nth.call(null,chunk__37912,i__37914);
var k = cljs.core.nth.call(null,vec__37915,(0),null);
var plugin = cljs.core.nth.call(null,vec__37915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37917 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37911,chunk__37912,count__37913,i__37914,pl_37917,vec__37915,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37917.call(null,msg_hist);
});})(seq__37911,chunk__37912,count__37913,i__37914,pl_37917,vec__37915,k,plugin))
);
} else {
}

var G__37918 = seq__37911;
var G__37919 = chunk__37912;
var G__37920 = count__37913;
var G__37921 = (i__37914 + (1));
seq__37911 = G__37918;
chunk__37912 = G__37919;
count__37913 = G__37920;
i__37914 = G__37921;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37911);
if(temp__4657__auto__){
var seq__37911__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37911__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__37911__$1);
var G__37922 = cljs.core.chunk_rest.call(null,seq__37911__$1);
var G__37923 = c__19270__auto__;
var G__37924 = cljs.core.count.call(null,c__19270__auto__);
var G__37925 = (0);
seq__37911 = G__37922;
chunk__37912 = G__37923;
count__37913 = G__37924;
i__37914 = G__37925;
continue;
} else {
var vec__37916 = cljs.core.first.call(null,seq__37911__$1);
var k = cljs.core.nth.call(null,vec__37916,(0),null);
var plugin = cljs.core.nth.call(null,vec__37916,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37926 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37911,chunk__37912,count__37913,i__37914,pl_37926,vec__37916,k,plugin,seq__37911__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37926.call(null,msg_hist);
});})(seq__37911,chunk__37912,count__37913,i__37914,pl_37926,vec__37916,k,plugin,seq__37911__$1,temp__4657__auto__))
);
} else {
}

var G__37927 = cljs.core.next.call(null,seq__37911__$1);
var G__37928 = null;
var G__37929 = (0);
var G__37930 = (0);
seq__37911 = G__37927;
chunk__37912 = G__37928;
count__37913 = G__37929;
i__37914 = G__37930;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37931 = [];
var len__19529__auto___37934 = arguments.length;
var i__19530__auto___37935 = (0);
while(true){
if((i__19530__auto___37935 < len__19529__auto___37934)){
args37931.push((arguments[i__19530__auto___37935]));

var G__37936 = (i__19530__auto___37935 + (1));
i__19530__auto___37935 = G__37936;
continue;
} else {
}
break;
}

var G__37933 = args37931.length;
switch (G__37933) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37931.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19536__auto__ = [];
var len__19529__auto___37942 = arguments.length;
var i__19530__auto___37943 = (0);
while(true){
if((i__19530__auto___37943 < len__19529__auto___37942)){
args__19536__auto__.push((arguments[i__19530__auto___37943]));

var G__37944 = (i__19530__auto___37943 + (1));
i__19530__auto___37943 = G__37944;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37939){
var map__37940 = p__37939;
var map__37940__$1 = ((((!((map__37940 == null)))?((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37940):map__37940);
var opts = map__37940__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37938){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37938));
});

//# sourceMappingURL=client.js.map?rel=1467040429337