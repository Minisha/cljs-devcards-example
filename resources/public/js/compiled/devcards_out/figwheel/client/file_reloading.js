// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18459__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18459__auto__){
return or__18459__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18459__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26862_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26862_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26867 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26868 = null;
var count__26869 = (0);
var i__26870 = (0);
while(true){
if((i__26870 < count__26869)){
var n = cljs.core._nth.call(null,chunk__26868,i__26870);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26871 = seq__26867;
var G__26872 = chunk__26868;
var G__26873 = count__26869;
var G__26874 = (i__26870 + (1));
seq__26867 = G__26871;
chunk__26868 = G__26872;
count__26869 = G__26873;
i__26870 = G__26874;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26867);
if(temp__4657__auto__){
var seq__26867__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26867__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26867__$1);
var G__26875 = cljs.core.chunk_rest.call(null,seq__26867__$1);
var G__26876 = c__19270__auto__;
var G__26877 = cljs.core.count.call(null,c__19270__auto__);
var G__26878 = (0);
seq__26867 = G__26875;
chunk__26868 = G__26876;
count__26869 = G__26877;
i__26870 = G__26878;
continue;
} else {
var n = cljs.core.first.call(null,seq__26867__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26879 = cljs.core.next.call(null,seq__26867__$1);
var G__26880 = null;
var G__26881 = (0);
var G__26882 = (0);
seq__26867 = G__26879;
chunk__26868 = G__26880;
count__26869 = G__26881;
i__26870 = G__26882;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26921_26928 = cljs.core.seq.call(null,deps);
var chunk__26922_26929 = null;
var count__26923_26930 = (0);
var i__26924_26931 = (0);
while(true){
if((i__26924_26931 < count__26923_26930)){
var dep_26932 = cljs.core._nth.call(null,chunk__26922_26929,i__26924_26931);
topo_sort_helper_STAR_.call(null,dep_26932,(depth + (1)),state);

var G__26933 = seq__26921_26928;
var G__26934 = chunk__26922_26929;
var G__26935 = count__26923_26930;
var G__26936 = (i__26924_26931 + (1));
seq__26921_26928 = G__26933;
chunk__26922_26929 = G__26934;
count__26923_26930 = G__26935;
i__26924_26931 = G__26936;
continue;
} else {
var temp__4657__auto___26937 = cljs.core.seq.call(null,seq__26921_26928);
if(temp__4657__auto___26937){
var seq__26921_26938__$1 = temp__4657__auto___26937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26921_26938__$1)){
var c__19270__auto___26939 = cljs.core.chunk_first.call(null,seq__26921_26938__$1);
var G__26940 = cljs.core.chunk_rest.call(null,seq__26921_26938__$1);
var G__26941 = c__19270__auto___26939;
var G__26942 = cljs.core.count.call(null,c__19270__auto___26939);
var G__26943 = (0);
seq__26921_26928 = G__26940;
chunk__26922_26929 = G__26941;
count__26923_26930 = G__26942;
i__26924_26931 = G__26943;
continue;
} else {
var dep_26944 = cljs.core.first.call(null,seq__26921_26938__$1);
topo_sort_helper_STAR_.call(null,dep_26944,(depth + (1)),state);

var G__26945 = cljs.core.next.call(null,seq__26921_26938__$1);
var G__26946 = null;
var G__26947 = (0);
var G__26948 = (0);
seq__26921_26928 = G__26945;
chunk__26922_26929 = G__26946;
count__26923_26930 = G__26947;
i__26924_26931 = G__26948;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26925){
var vec__26927 = p__26925;
var x = cljs.core.nth.call(null,vec__26927,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26927,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26927,x,xs,get_deps__$1){
return (function (p1__26883_SHARP_){
return clojure.set.difference.call(null,p1__26883_SHARP_,x);
});})(vec__26927,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26961 = cljs.core.seq.call(null,provides);
var chunk__26962 = null;
var count__26963 = (0);
var i__26964 = (0);
while(true){
if((i__26964 < count__26963)){
var prov = cljs.core._nth.call(null,chunk__26962,i__26964);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26965_26973 = cljs.core.seq.call(null,requires);
var chunk__26966_26974 = null;
var count__26967_26975 = (0);
var i__26968_26976 = (0);
while(true){
if((i__26968_26976 < count__26967_26975)){
var req_26977 = cljs.core._nth.call(null,chunk__26966_26974,i__26968_26976);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26977,prov);

var G__26978 = seq__26965_26973;
var G__26979 = chunk__26966_26974;
var G__26980 = count__26967_26975;
var G__26981 = (i__26968_26976 + (1));
seq__26965_26973 = G__26978;
chunk__26966_26974 = G__26979;
count__26967_26975 = G__26980;
i__26968_26976 = G__26981;
continue;
} else {
var temp__4657__auto___26982 = cljs.core.seq.call(null,seq__26965_26973);
if(temp__4657__auto___26982){
var seq__26965_26983__$1 = temp__4657__auto___26982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26965_26983__$1)){
var c__19270__auto___26984 = cljs.core.chunk_first.call(null,seq__26965_26983__$1);
var G__26985 = cljs.core.chunk_rest.call(null,seq__26965_26983__$1);
var G__26986 = c__19270__auto___26984;
var G__26987 = cljs.core.count.call(null,c__19270__auto___26984);
var G__26988 = (0);
seq__26965_26973 = G__26985;
chunk__26966_26974 = G__26986;
count__26967_26975 = G__26987;
i__26968_26976 = G__26988;
continue;
} else {
var req_26989 = cljs.core.first.call(null,seq__26965_26983__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26989,prov);

var G__26990 = cljs.core.next.call(null,seq__26965_26983__$1);
var G__26991 = null;
var G__26992 = (0);
var G__26993 = (0);
seq__26965_26973 = G__26990;
chunk__26966_26974 = G__26991;
count__26967_26975 = G__26992;
i__26968_26976 = G__26993;
continue;
}
} else {
}
}
break;
}

var G__26994 = seq__26961;
var G__26995 = chunk__26962;
var G__26996 = count__26963;
var G__26997 = (i__26964 + (1));
seq__26961 = G__26994;
chunk__26962 = G__26995;
count__26963 = G__26996;
i__26964 = G__26997;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26961);
if(temp__4657__auto__){
var seq__26961__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26961__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__26961__$1);
var G__26998 = cljs.core.chunk_rest.call(null,seq__26961__$1);
var G__26999 = c__19270__auto__;
var G__27000 = cljs.core.count.call(null,c__19270__auto__);
var G__27001 = (0);
seq__26961 = G__26998;
chunk__26962 = G__26999;
count__26963 = G__27000;
i__26964 = G__27001;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26961__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26969_27002 = cljs.core.seq.call(null,requires);
var chunk__26970_27003 = null;
var count__26971_27004 = (0);
var i__26972_27005 = (0);
while(true){
if((i__26972_27005 < count__26971_27004)){
var req_27006 = cljs.core._nth.call(null,chunk__26970_27003,i__26972_27005);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27006,prov);

var G__27007 = seq__26969_27002;
var G__27008 = chunk__26970_27003;
var G__27009 = count__26971_27004;
var G__27010 = (i__26972_27005 + (1));
seq__26969_27002 = G__27007;
chunk__26970_27003 = G__27008;
count__26971_27004 = G__27009;
i__26972_27005 = G__27010;
continue;
} else {
var temp__4657__auto___27011__$1 = cljs.core.seq.call(null,seq__26969_27002);
if(temp__4657__auto___27011__$1){
var seq__26969_27012__$1 = temp__4657__auto___27011__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26969_27012__$1)){
var c__19270__auto___27013 = cljs.core.chunk_first.call(null,seq__26969_27012__$1);
var G__27014 = cljs.core.chunk_rest.call(null,seq__26969_27012__$1);
var G__27015 = c__19270__auto___27013;
var G__27016 = cljs.core.count.call(null,c__19270__auto___27013);
var G__27017 = (0);
seq__26969_27002 = G__27014;
chunk__26970_27003 = G__27015;
count__26971_27004 = G__27016;
i__26972_27005 = G__27017;
continue;
} else {
var req_27018 = cljs.core.first.call(null,seq__26969_27012__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27018,prov);

var G__27019 = cljs.core.next.call(null,seq__26969_27012__$1);
var G__27020 = null;
var G__27021 = (0);
var G__27022 = (0);
seq__26969_27002 = G__27019;
chunk__26970_27003 = G__27020;
count__26971_27004 = G__27021;
i__26972_27005 = G__27022;
continue;
}
} else {
}
}
break;
}

var G__27023 = cljs.core.next.call(null,seq__26961__$1);
var G__27024 = null;
var G__27025 = (0);
var G__27026 = (0);
seq__26961 = G__27023;
chunk__26962 = G__27024;
count__26963 = G__27025;
i__26964 = G__27026;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27031_27035 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27032_27036 = null;
var count__27033_27037 = (0);
var i__27034_27038 = (0);
while(true){
if((i__27034_27038 < count__27033_27037)){
var ns_27039 = cljs.core._nth.call(null,chunk__27032_27036,i__27034_27038);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27039);

var G__27040 = seq__27031_27035;
var G__27041 = chunk__27032_27036;
var G__27042 = count__27033_27037;
var G__27043 = (i__27034_27038 + (1));
seq__27031_27035 = G__27040;
chunk__27032_27036 = G__27041;
count__27033_27037 = G__27042;
i__27034_27038 = G__27043;
continue;
} else {
var temp__4657__auto___27044 = cljs.core.seq.call(null,seq__27031_27035);
if(temp__4657__auto___27044){
var seq__27031_27045__$1 = temp__4657__auto___27044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27031_27045__$1)){
var c__19270__auto___27046 = cljs.core.chunk_first.call(null,seq__27031_27045__$1);
var G__27047 = cljs.core.chunk_rest.call(null,seq__27031_27045__$1);
var G__27048 = c__19270__auto___27046;
var G__27049 = cljs.core.count.call(null,c__19270__auto___27046);
var G__27050 = (0);
seq__27031_27035 = G__27047;
chunk__27032_27036 = G__27048;
count__27033_27037 = G__27049;
i__27034_27038 = G__27050;
continue;
} else {
var ns_27051 = cljs.core.first.call(null,seq__27031_27045__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27051);

var G__27052 = cljs.core.next.call(null,seq__27031_27045__$1);
var G__27053 = null;
var G__27054 = (0);
var G__27055 = (0);
seq__27031_27035 = G__27052;
chunk__27032_27036 = G__27053;
count__27033_27037 = G__27054;
i__27034_27038 = G__27055;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18459__auto__ = goog.require__;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27056__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27057__i = 0, G__27057__a = new Array(arguments.length -  0);
while (G__27057__i < G__27057__a.length) {G__27057__a[G__27057__i] = arguments[G__27057__i + 0]; ++G__27057__i;}
  args = new cljs.core.IndexedSeq(G__27057__a,0);
} 
return G__27056__delegate.call(this,args);};
G__27056.cljs$lang$maxFixedArity = 0;
G__27056.cljs$lang$applyTo = (function (arglist__27058){
var args = cljs.core.seq(arglist__27058);
return G__27056__delegate(args);
});
G__27056.cljs$core$IFn$_invoke$arity$variadic = G__27056__delegate;
return G__27056;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27060 = cljs.core._EQ_;
var expr__27061 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27060.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27061))){
var path_parts = ((function (pred__27060,expr__27061){
return (function (p1__27059_SHARP_){
return clojure.string.split.call(null,p1__27059_SHARP_,/[\/\\]/);
});})(pred__27060,expr__27061))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27060,expr__27061){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27063){if((e27063 instanceof Error)){
var e = e27063;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27063;

}
}})());
});
;})(path_parts,sep,root,pred__27060,expr__27061))
} else {
if(cljs.core.truth_(pred__27060.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27061))){
return ((function (pred__27060,expr__27061){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27060,expr__27061){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27060,expr__27061))
);

return deferred.addErrback(((function (deferred,pred__27060,expr__27061){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27060,expr__27061))
);
});
;})(pred__27060,expr__27061))
} else {
return ((function (pred__27060,expr__27061){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27060,expr__27061))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27064,callback){
var map__27067 = p__27064;
var map__27067__$1 = ((((!((map__27067 == null)))?((((map__27067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27067):map__27067);
var file_msg = map__27067__$1;
var request_url = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27067,map__27067__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27067,map__27067__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_27091){
var state_val_27092 = (state_27091[(1)]);
if((state_val_27092 === (7))){
var inst_27087 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27093_27113 = state_27091__$1;
(statearr_27093_27113[(2)] = inst_27087);

(statearr_27093_27113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (1))){
var state_27091__$1 = state_27091;
var statearr_27094_27114 = state_27091__$1;
(statearr_27094_27114[(2)] = null);

(statearr_27094_27114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (4))){
var inst_27071 = (state_27091[(7)]);
var inst_27071__$1 = (state_27091[(2)]);
var state_27091__$1 = (function (){var statearr_27095 = state_27091;
(statearr_27095[(7)] = inst_27071__$1);

return statearr_27095;
})();
if(cljs.core.truth_(inst_27071__$1)){
var statearr_27096_27115 = state_27091__$1;
(statearr_27096_27115[(1)] = (5));

} else {
var statearr_27097_27116 = state_27091__$1;
(statearr_27097_27116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (6))){
var state_27091__$1 = state_27091;
var statearr_27098_27117 = state_27091__$1;
(statearr_27098_27117[(2)] = null);

(statearr_27098_27117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (3))){
var inst_27089 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27091__$1,inst_27089);
} else {
if((state_val_27092 === (2))){
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27091__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27092 === (11))){
var inst_27083 = (state_27091[(2)]);
var state_27091__$1 = (function (){var statearr_27099 = state_27091;
(statearr_27099[(8)] = inst_27083);

return statearr_27099;
})();
var statearr_27100_27118 = state_27091__$1;
(statearr_27100_27118[(2)] = null);

(statearr_27100_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (9))){
var inst_27075 = (state_27091[(9)]);
var inst_27077 = (state_27091[(10)]);
var inst_27079 = inst_27077.call(null,inst_27075);
var state_27091__$1 = state_27091;
var statearr_27101_27119 = state_27091__$1;
(statearr_27101_27119[(2)] = inst_27079);

(statearr_27101_27119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (5))){
var inst_27071 = (state_27091[(7)]);
var inst_27073 = figwheel.client.file_reloading.blocking_load.call(null,inst_27071);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27091__$1,(8),inst_27073);
} else {
if((state_val_27092 === (10))){
var inst_27075 = (state_27091[(9)]);
var inst_27081 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27075);
var state_27091__$1 = state_27091;
var statearr_27102_27120 = state_27091__$1;
(statearr_27102_27120[(2)] = inst_27081);

(statearr_27102_27120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (8))){
var inst_27071 = (state_27091[(7)]);
var inst_27077 = (state_27091[(10)]);
var inst_27075 = (state_27091[(2)]);
var inst_27076 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27077__$1 = cljs.core.get.call(null,inst_27076,inst_27071);
var state_27091__$1 = (function (){var statearr_27103 = state_27091;
(statearr_27103[(9)] = inst_27075);

(statearr_27103[(10)] = inst_27077__$1);

return statearr_27103;
})();
if(cljs.core.truth_(inst_27077__$1)){
var statearr_27104_27121 = state_27091__$1;
(statearr_27104_27121[(1)] = (9));

} else {
var statearr_27105_27122 = state_27091__$1;
(statearr_27105_27122[(1)] = (10));

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
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21720__auto__ = null;
var figwheel$client$file_reloading$state_machine__21720__auto____0 = (function (){
var statearr_27109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27109[(0)] = figwheel$client$file_reloading$state_machine__21720__auto__);

(statearr_27109[(1)] = (1));

return statearr_27109;
});
var figwheel$client$file_reloading$state_machine__21720__auto____1 = (function (state_27091){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_27091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e27110){if((e27110 instanceof Object)){
var ex__21723__auto__ = e27110;
var statearr_27111_27123 = state_27091;
(statearr_27111_27123[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27124 = state_27091;
state_27091 = G__27124;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21720__auto__ = function(state_27091){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21720__auto____1.call(this,state_27091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21720__auto____0;
figwheel$client$file_reloading$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21720__auto____1;
return figwheel$client$file_reloading$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_27112 = f__21832__auto__.call(null);
(statearr_27112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_27112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27125,callback){
var map__27128 = p__27125;
var map__27128__$1 = ((((!((map__27128 == null)))?((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var file_msg = map__27128__$1;
var namespace = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27128,map__27128__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27128,map__27128__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27130){
var map__27133 = p__27130;
var map__27133__$1 = ((((!((map__27133 == null)))?((((map__27133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27133):map__27133);
var file_msg = map__27133__$1;
var namespace = cljs.core.get.call(null,map__27133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18447__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18447__auto__){
var or__18459__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto____$1)){
return or__18459__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18447__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27135,callback){
var map__27138 = p__27135;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var file_msg = map__27138__$1;
var request_url = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21831__auto___27226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___27226,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___27226,out){
return (function (state_27208){
var state_val_27209 = (state_27208[(1)]);
if((state_val_27209 === (1))){
var inst_27186 = cljs.core.nth.call(null,files,(0),null);
var inst_27187 = cljs.core.nthnext.call(null,files,(1));
var inst_27188 = files;
var state_27208__$1 = (function (){var statearr_27210 = state_27208;
(statearr_27210[(7)] = inst_27188);

(statearr_27210[(8)] = inst_27187);

(statearr_27210[(9)] = inst_27186);

return statearr_27210;
})();
var statearr_27211_27227 = state_27208__$1;
(statearr_27211_27227[(2)] = null);

(statearr_27211_27227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (2))){
var inst_27191 = (state_27208[(10)]);
var inst_27188 = (state_27208[(7)]);
var inst_27191__$1 = cljs.core.nth.call(null,inst_27188,(0),null);
var inst_27192 = cljs.core.nthnext.call(null,inst_27188,(1));
var inst_27193 = (inst_27191__$1 == null);
var inst_27194 = cljs.core.not.call(null,inst_27193);
var state_27208__$1 = (function (){var statearr_27212 = state_27208;
(statearr_27212[(11)] = inst_27192);

(statearr_27212[(10)] = inst_27191__$1);

return statearr_27212;
})();
if(inst_27194){
var statearr_27213_27228 = state_27208__$1;
(statearr_27213_27228[(1)] = (4));

} else {
var statearr_27214_27229 = state_27208__$1;
(statearr_27214_27229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (3))){
var inst_27206 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27208__$1,inst_27206);
} else {
if((state_val_27209 === (4))){
var inst_27191 = (state_27208[(10)]);
var inst_27196 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27191);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(7),inst_27196);
} else {
if((state_val_27209 === (5))){
var inst_27202 = cljs.core.async.close_BANG_.call(null,out);
var state_27208__$1 = state_27208;
var statearr_27215_27230 = state_27208__$1;
(statearr_27215_27230[(2)] = inst_27202);

(statearr_27215_27230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (6))){
var inst_27204 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27216_27231 = state_27208__$1;
(statearr_27216_27231[(2)] = inst_27204);

(statearr_27216_27231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (7))){
var inst_27192 = (state_27208[(11)]);
var inst_27198 = (state_27208[(2)]);
var inst_27199 = cljs.core.async.put_BANG_.call(null,out,inst_27198);
var inst_27188 = inst_27192;
var state_27208__$1 = (function (){var statearr_27217 = state_27208;
(statearr_27217[(12)] = inst_27199);

(statearr_27217[(7)] = inst_27188);

return statearr_27217;
})();
var statearr_27218_27232 = state_27208__$1;
(statearr_27218_27232[(2)] = null);

(statearr_27218_27232[(1)] = (2));


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
});})(c__21831__auto___27226,out))
;
return ((function (switch__21719__auto__,c__21831__auto___27226,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0 = (function (){
var statearr_27222 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27222[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__);

(statearr_27222[(1)] = (1));

return statearr_27222;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1 = (function (state_27208){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_27208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e27223){if((e27223 instanceof Object)){
var ex__21723__auto__ = e27223;
var statearr_27224_27233 = state_27208;
(statearr_27224_27233[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27234 = state_27208;
state_27208 = G__27234;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___27226,out))
})();
var state__21833__auto__ = (function (){var statearr_27225 = f__21832__auto__.call(null);
(statearr_27225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___27226);

return statearr_27225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___27226,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27235,opts){
var map__27239 = p__27235;
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var eval_body__$1 = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18447__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18447__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27241){var e = e27241;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27242_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27242_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27247){
var vec__27248 = p__27247;
var k = cljs.core.nth.call(null,vec__27248,(0),null);
var v = cljs.core.nth.call(null,vec__27248,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27249){
var vec__27250 = p__27249;
var k = cljs.core.nth.call(null,vec__27250,(0),null);
var v = cljs.core.nth.call(null,vec__27250,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27254,p__27255){
var map__27502 = p__27254;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var opts = map__27502__$1;
var before_jsload = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27503 = p__27255;
var map__27503__$1 = ((((!((map__27503 == null)))?((((map__27503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27503):map__27503);
var msg = map__27503__$1;
var files = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27656){
var state_val_27657 = (state_27656[(1)]);
if((state_val_27657 === (7))){
var inst_27518 = (state_27656[(7)]);
var inst_27517 = (state_27656[(8)]);
var inst_27520 = (state_27656[(9)]);
var inst_27519 = (state_27656[(10)]);
var inst_27525 = cljs.core._nth.call(null,inst_27518,inst_27520);
var inst_27526 = figwheel.client.file_reloading.eval_body.call(null,inst_27525,opts);
var inst_27527 = (inst_27520 + (1));
var tmp27658 = inst_27518;
var tmp27659 = inst_27517;
var tmp27660 = inst_27519;
var inst_27517__$1 = tmp27659;
var inst_27518__$1 = tmp27658;
var inst_27519__$1 = tmp27660;
var inst_27520__$1 = inst_27527;
var state_27656__$1 = (function (){var statearr_27661 = state_27656;
(statearr_27661[(7)] = inst_27518__$1);

(statearr_27661[(8)] = inst_27517__$1);

(statearr_27661[(9)] = inst_27520__$1);

(statearr_27661[(10)] = inst_27519__$1);

(statearr_27661[(11)] = inst_27526);

return statearr_27661;
})();
var statearr_27662_27748 = state_27656__$1;
(statearr_27662_27748[(2)] = null);

(statearr_27662_27748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (20))){
var inst_27560 = (state_27656[(12)]);
var inst_27568 = figwheel.client.file_reloading.sort_files.call(null,inst_27560);
var state_27656__$1 = state_27656;
var statearr_27663_27749 = state_27656__$1;
(statearr_27663_27749[(2)] = inst_27568);

(statearr_27663_27749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (27))){
var state_27656__$1 = state_27656;
var statearr_27664_27750 = state_27656__$1;
(statearr_27664_27750[(2)] = null);

(statearr_27664_27750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (1))){
var inst_27509 = (state_27656[(13)]);
var inst_27506 = before_jsload.call(null,files);
var inst_27507 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27508 = (function (){return ((function (inst_27509,inst_27506,inst_27507,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27251_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27251_SHARP_);
});
;})(inst_27509,inst_27506,inst_27507,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27509__$1 = cljs.core.filter.call(null,inst_27508,files);
var inst_27510 = cljs.core.not_empty.call(null,inst_27509__$1);
var state_27656__$1 = (function (){var statearr_27665 = state_27656;
(statearr_27665[(14)] = inst_27506);

(statearr_27665[(15)] = inst_27507);

(statearr_27665[(13)] = inst_27509__$1);

return statearr_27665;
})();
if(cljs.core.truth_(inst_27510)){
var statearr_27666_27751 = state_27656__$1;
(statearr_27666_27751[(1)] = (2));

} else {
var statearr_27667_27752 = state_27656__$1;
(statearr_27667_27752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (24))){
var state_27656__$1 = state_27656;
var statearr_27668_27753 = state_27656__$1;
(statearr_27668_27753[(2)] = null);

(statearr_27668_27753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (39))){
var inst_27610 = (state_27656[(16)]);
var state_27656__$1 = state_27656;
var statearr_27669_27754 = state_27656__$1;
(statearr_27669_27754[(2)] = inst_27610);

(statearr_27669_27754[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (46))){
var inst_27651 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27670_27755 = state_27656__$1;
(statearr_27670_27755[(2)] = inst_27651);

(statearr_27670_27755[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (4))){
var inst_27554 = (state_27656[(2)]);
var inst_27555 = cljs.core.List.EMPTY;
var inst_27556 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27555);
var inst_27557 = (function (){return ((function (inst_27554,inst_27555,inst_27556,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27252_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27252_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27252_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_27554,inst_27555,inst_27556,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27558 = cljs.core.filter.call(null,inst_27557,files);
var inst_27559 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27560 = cljs.core.concat.call(null,inst_27558,inst_27559);
var state_27656__$1 = (function (){var statearr_27671 = state_27656;
(statearr_27671[(17)] = inst_27556);

(statearr_27671[(12)] = inst_27560);

(statearr_27671[(18)] = inst_27554);

return statearr_27671;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27672_27756 = state_27656__$1;
(statearr_27672_27756[(1)] = (16));

} else {
var statearr_27673_27757 = state_27656__$1;
(statearr_27673_27757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (15))){
var inst_27544 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27674_27758 = state_27656__$1;
(statearr_27674_27758[(2)] = inst_27544);

(statearr_27674_27758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (21))){
var inst_27570 = (state_27656[(19)]);
var inst_27570__$1 = (state_27656[(2)]);
var inst_27571 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27570__$1);
var state_27656__$1 = (function (){var statearr_27675 = state_27656;
(statearr_27675[(19)] = inst_27570__$1);

return statearr_27675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27656__$1,(22),inst_27571);
} else {
if((state_val_27657 === (31))){
var inst_27654 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27656__$1,inst_27654);
} else {
if((state_val_27657 === (32))){
var inst_27610 = (state_27656[(16)]);
var inst_27615 = inst_27610.cljs$lang$protocol_mask$partition0$;
var inst_27616 = (inst_27615 & (64));
var inst_27617 = inst_27610.cljs$core$ISeq$;
var inst_27618 = (inst_27616) || (inst_27617);
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27618)){
var statearr_27676_27759 = state_27656__$1;
(statearr_27676_27759[(1)] = (35));

} else {
var statearr_27677_27760 = state_27656__$1;
(statearr_27677_27760[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (40))){
var inst_27631 = (state_27656[(20)]);
var inst_27630 = (state_27656[(2)]);
var inst_27631__$1 = cljs.core.get.call(null,inst_27630,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27632 = cljs.core.get.call(null,inst_27630,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27633 = cljs.core.not_empty.call(null,inst_27631__$1);
var state_27656__$1 = (function (){var statearr_27678 = state_27656;
(statearr_27678[(21)] = inst_27632);

(statearr_27678[(20)] = inst_27631__$1);

return statearr_27678;
})();
if(cljs.core.truth_(inst_27633)){
var statearr_27679_27761 = state_27656__$1;
(statearr_27679_27761[(1)] = (41));

} else {
var statearr_27680_27762 = state_27656__$1;
(statearr_27680_27762[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (33))){
var state_27656__$1 = state_27656;
var statearr_27681_27763 = state_27656__$1;
(statearr_27681_27763[(2)] = false);

(statearr_27681_27763[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (13))){
var inst_27530 = (state_27656[(22)]);
var inst_27534 = cljs.core.chunk_first.call(null,inst_27530);
var inst_27535 = cljs.core.chunk_rest.call(null,inst_27530);
var inst_27536 = cljs.core.count.call(null,inst_27534);
var inst_27517 = inst_27535;
var inst_27518 = inst_27534;
var inst_27519 = inst_27536;
var inst_27520 = (0);
var state_27656__$1 = (function (){var statearr_27682 = state_27656;
(statearr_27682[(7)] = inst_27518);

(statearr_27682[(8)] = inst_27517);

(statearr_27682[(9)] = inst_27520);

(statearr_27682[(10)] = inst_27519);

return statearr_27682;
})();
var statearr_27683_27764 = state_27656__$1;
(statearr_27683_27764[(2)] = null);

(statearr_27683_27764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (22))){
var inst_27578 = (state_27656[(23)]);
var inst_27570 = (state_27656[(19)]);
var inst_27574 = (state_27656[(24)]);
var inst_27573 = (state_27656[(25)]);
var inst_27573__$1 = (state_27656[(2)]);
var inst_27574__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27573__$1);
var inst_27575 = (function (){var all_files = inst_27570;
var res_SINGLEQUOTE_ = inst_27573__$1;
var res = inst_27574__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27578,inst_27570,inst_27574,inst_27573,inst_27573__$1,inst_27574__$1,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27253_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27253_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27578,inst_27570,inst_27574,inst_27573,inst_27573__$1,inst_27574__$1,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27576 = cljs.core.filter.call(null,inst_27575,inst_27573__$1);
var inst_27577 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27578__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27577);
var inst_27579 = cljs.core.not_empty.call(null,inst_27578__$1);
var state_27656__$1 = (function (){var statearr_27684 = state_27656;
(statearr_27684[(26)] = inst_27576);

(statearr_27684[(23)] = inst_27578__$1);

(statearr_27684[(24)] = inst_27574__$1);

(statearr_27684[(25)] = inst_27573__$1);

return statearr_27684;
})();
if(cljs.core.truth_(inst_27579)){
var statearr_27685_27765 = state_27656__$1;
(statearr_27685_27765[(1)] = (23));

} else {
var statearr_27686_27766 = state_27656__$1;
(statearr_27686_27766[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (36))){
var state_27656__$1 = state_27656;
var statearr_27687_27767 = state_27656__$1;
(statearr_27687_27767[(2)] = false);

(statearr_27687_27767[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (41))){
var inst_27631 = (state_27656[(20)]);
var inst_27635 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27636 = cljs.core.map.call(null,inst_27635,inst_27631);
var inst_27637 = cljs.core.pr_str.call(null,inst_27636);
var inst_27638 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27637)].join('');
var inst_27639 = figwheel.client.utils.log.call(null,inst_27638);
var state_27656__$1 = state_27656;
var statearr_27688_27768 = state_27656__$1;
(statearr_27688_27768[(2)] = inst_27639);

(statearr_27688_27768[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (43))){
var inst_27632 = (state_27656[(21)]);
var inst_27642 = (state_27656[(2)]);
var inst_27643 = cljs.core.not_empty.call(null,inst_27632);
var state_27656__$1 = (function (){var statearr_27689 = state_27656;
(statearr_27689[(27)] = inst_27642);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27643)){
var statearr_27690_27769 = state_27656__$1;
(statearr_27690_27769[(1)] = (44));

} else {
var statearr_27691_27770 = state_27656__$1;
(statearr_27691_27770[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (29))){
var inst_27610 = (state_27656[(16)]);
var inst_27576 = (state_27656[(26)]);
var inst_27578 = (state_27656[(23)]);
var inst_27570 = (state_27656[(19)]);
var inst_27574 = (state_27656[(24)]);
var inst_27573 = (state_27656[(25)]);
var inst_27606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27609 = (function (){var all_files = inst_27570;
var res_SINGLEQUOTE_ = inst_27573;
var res = inst_27574;
var files_not_loaded = inst_27576;
var dependencies_that_loaded = inst_27578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27610,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27606,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27608){
var map__27692 = p__27608;
var map__27692__$1 = ((((!((map__27692 == null)))?((((map__27692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27692):map__27692);
var namespace = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27610,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27606,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27610__$1 = cljs.core.group_by.call(null,inst_27609,inst_27576);
var inst_27612 = (inst_27610__$1 == null);
var inst_27613 = cljs.core.not.call(null,inst_27612);
var state_27656__$1 = (function (){var statearr_27694 = state_27656;
(statearr_27694[(16)] = inst_27610__$1);

(statearr_27694[(28)] = inst_27606);

return statearr_27694;
})();
if(inst_27613){
var statearr_27695_27771 = state_27656__$1;
(statearr_27695_27771[(1)] = (32));

} else {
var statearr_27696_27772 = state_27656__$1;
(statearr_27696_27772[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (44))){
var inst_27632 = (state_27656[(21)]);
var inst_27645 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27632);
var inst_27646 = cljs.core.pr_str.call(null,inst_27645);
var inst_27647 = [cljs.core.str("not required: "),cljs.core.str(inst_27646)].join('');
var inst_27648 = figwheel.client.utils.log.call(null,inst_27647);
var state_27656__$1 = state_27656;
var statearr_27697_27773 = state_27656__$1;
(statearr_27697_27773[(2)] = inst_27648);

(statearr_27697_27773[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (6))){
var inst_27551 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27698_27774 = state_27656__$1;
(statearr_27698_27774[(2)] = inst_27551);

(statearr_27698_27774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (28))){
var inst_27576 = (state_27656[(26)]);
var inst_27603 = (state_27656[(2)]);
var inst_27604 = cljs.core.not_empty.call(null,inst_27576);
var state_27656__$1 = (function (){var statearr_27699 = state_27656;
(statearr_27699[(29)] = inst_27603);

return statearr_27699;
})();
if(cljs.core.truth_(inst_27604)){
var statearr_27700_27775 = state_27656__$1;
(statearr_27700_27775[(1)] = (29));

} else {
var statearr_27701_27776 = state_27656__$1;
(statearr_27701_27776[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (25))){
var inst_27574 = (state_27656[(24)]);
var inst_27590 = (state_27656[(2)]);
var inst_27591 = cljs.core.not_empty.call(null,inst_27574);
var state_27656__$1 = (function (){var statearr_27702 = state_27656;
(statearr_27702[(30)] = inst_27590);

return statearr_27702;
})();
if(cljs.core.truth_(inst_27591)){
var statearr_27703_27777 = state_27656__$1;
(statearr_27703_27777[(1)] = (26));

} else {
var statearr_27704_27778 = state_27656__$1;
(statearr_27704_27778[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (34))){
var inst_27625 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27625)){
var statearr_27705_27779 = state_27656__$1;
(statearr_27705_27779[(1)] = (38));

} else {
var statearr_27706_27780 = state_27656__$1;
(statearr_27706_27780[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (17))){
var state_27656__$1 = state_27656;
var statearr_27707_27781 = state_27656__$1;
(statearr_27707_27781[(2)] = recompile_dependents);

(statearr_27707_27781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (3))){
var state_27656__$1 = state_27656;
var statearr_27708_27782 = state_27656__$1;
(statearr_27708_27782[(2)] = null);

(statearr_27708_27782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (12))){
var inst_27547 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27709_27783 = state_27656__$1;
(statearr_27709_27783[(2)] = inst_27547);

(statearr_27709_27783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (2))){
var inst_27509 = (state_27656[(13)]);
var inst_27516 = cljs.core.seq.call(null,inst_27509);
var inst_27517 = inst_27516;
var inst_27518 = null;
var inst_27519 = (0);
var inst_27520 = (0);
var state_27656__$1 = (function (){var statearr_27710 = state_27656;
(statearr_27710[(7)] = inst_27518);

(statearr_27710[(8)] = inst_27517);

(statearr_27710[(9)] = inst_27520);

(statearr_27710[(10)] = inst_27519);

return statearr_27710;
})();
var statearr_27711_27784 = state_27656__$1;
(statearr_27711_27784[(2)] = null);

(statearr_27711_27784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (23))){
var inst_27576 = (state_27656[(26)]);
var inst_27578 = (state_27656[(23)]);
var inst_27570 = (state_27656[(19)]);
var inst_27574 = (state_27656[(24)]);
var inst_27573 = (state_27656[(25)]);
var inst_27581 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27583 = (function (){var all_files = inst_27570;
var res_SINGLEQUOTE_ = inst_27573;
var res = inst_27574;
var files_not_loaded = inst_27576;
var dependencies_that_loaded = inst_27578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27581,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27582){
var map__27712 = p__27582;
var map__27712__$1 = ((((!((map__27712 == null)))?((((map__27712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27712):map__27712);
var request_url = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27581,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27584 = cljs.core.reverse.call(null,inst_27578);
var inst_27585 = cljs.core.map.call(null,inst_27583,inst_27584);
var inst_27586 = cljs.core.pr_str.call(null,inst_27585);
var inst_27587 = figwheel.client.utils.log.call(null,inst_27586);
var state_27656__$1 = (function (){var statearr_27714 = state_27656;
(statearr_27714[(31)] = inst_27581);

return statearr_27714;
})();
var statearr_27715_27785 = state_27656__$1;
(statearr_27715_27785[(2)] = inst_27587);

(statearr_27715_27785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (35))){
var state_27656__$1 = state_27656;
var statearr_27716_27786 = state_27656__$1;
(statearr_27716_27786[(2)] = true);

(statearr_27716_27786[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (19))){
var inst_27560 = (state_27656[(12)]);
var inst_27566 = figwheel.client.file_reloading.expand_files.call(null,inst_27560);
var state_27656__$1 = state_27656;
var statearr_27717_27787 = state_27656__$1;
(statearr_27717_27787[(2)] = inst_27566);

(statearr_27717_27787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (11))){
var state_27656__$1 = state_27656;
var statearr_27718_27788 = state_27656__$1;
(statearr_27718_27788[(2)] = null);

(statearr_27718_27788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (9))){
var inst_27549 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27719_27789 = state_27656__$1;
(statearr_27719_27789[(2)] = inst_27549);

(statearr_27719_27789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (5))){
var inst_27520 = (state_27656[(9)]);
var inst_27519 = (state_27656[(10)]);
var inst_27522 = (inst_27520 < inst_27519);
var inst_27523 = inst_27522;
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27523)){
var statearr_27720_27790 = state_27656__$1;
(statearr_27720_27790[(1)] = (7));

} else {
var statearr_27721_27791 = state_27656__$1;
(statearr_27721_27791[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (14))){
var inst_27530 = (state_27656[(22)]);
var inst_27539 = cljs.core.first.call(null,inst_27530);
var inst_27540 = figwheel.client.file_reloading.eval_body.call(null,inst_27539,opts);
var inst_27541 = cljs.core.next.call(null,inst_27530);
var inst_27517 = inst_27541;
var inst_27518 = null;
var inst_27519 = (0);
var inst_27520 = (0);
var state_27656__$1 = (function (){var statearr_27722 = state_27656;
(statearr_27722[(7)] = inst_27518);

(statearr_27722[(8)] = inst_27517);

(statearr_27722[(32)] = inst_27540);

(statearr_27722[(9)] = inst_27520);

(statearr_27722[(10)] = inst_27519);

return statearr_27722;
})();
var statearr_27723_27792 = state_27656__$1;
(statearr_27723_27792[(2)] = null);

(statearr_27723_27792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (45))){
var state_27656__$1 = state_27656;
var statearr_27724_27793 = state_27656__$1;
(statearr_27724_27793[(2)] = null);

(statearr_27724_27793[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (26))){
var inst_27576 = (state_27656[(26)]);
var inst_27578 = (state_27656[(23)]);
var inst_27570 = (state_27656[(19)]);
var inst_27574 = (state_27656[(24)]);
var inst_27573 = (state_27656[(25)]);
var inst_27593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27595 = (function (){var all_files = inst_27570;
var res_SINGLEQUOTE_ = inst_27573;
var res = inst_27574;
var files_not_loaded = inst_27576;
var dependencies_that_loaded = inst_27578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27593,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27594){
var map__27725 = p__27594;
var map__27725__$1 = ((((!((map__27725 == null)))?((((map__27725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27725):map__27725);
var namespace = cljs.core.get.call(null,map__27725__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27593,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27596 = cljs.core.map.call(null,inst_27595,inst_27574);
var inst_27597 = cljs.core.pr_str.call(null,inst_27596);
var inst_27598 = figwheel.client.utils.log.call(null,inst_27597);
var inst_27599 = (function (){var all_files = inst_27570;
var res_SINGLEQUOTE_ = inst_27573;
var res = inst_27574;
var files_not_loaded = inst_27576;
var dependencies_that_loaded = inst_27578;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27593,inst_27595,inst_27596,inst_27597,inst_27598,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27576,inst_27578,inst_27570,inst_27574,inst_27573,inst_27593,inst_27595,inst_27596,inst_27597,inst_27598,state_val_27657,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27600 = setTimeout(inst_27599,(10));
var state_27656__$1 = (function (){var statearr_27727 = state_27656;
(statearr_27727[(33)] = inst_27593);

(statearr_27727[(34)] = inst_27598);

return statearr_27727;
})();
var statearr_27728_27794 = state_27656__$1;
(statearr_27728_27794[(2)] = inst_27600);

(statearr_27728_27794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (16))){
var state_27656__$1 = state_27656;
var statearr_27729_27795 = state_27656__$1;
(statearr_27729_27795[(2)] = reload_dependents);

(statearr_27729_27795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (38))){
var inst_27610 = (state_27656[(16)]);
var inst_27627 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27610);
var state_27656__$1 = state_27656;
var statearr_27730_27796 = state_27656__$1;
(statearr_27730_27796[(2)] = inst_27627);

(statearr_27730_27796[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (30))){
var state_27656__$1 = state_27656;
var statearr_27731_27797 = state_27656__$1;
(statearr_27731_27797[(2)] = null);

(statearr_27731_27797[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (10))){
var inst_27530 = (state_27656[(22)]);
var inst_27532 = cljs.core.chunked_seq_QMARK_.call(null,inst_27530);
var state_27656__$1 = state_27656;
if(inst_27532){
var statearr_27732_27798 = state_27656__$1;
(statearr_27732_27798[(1)] = (13));

} else {
var statearr_27733_27799 = state_27656__$1;
(statearr_27733_27799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (18))){
var inst_27564 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27564)){
var statearr_27734_27800 = state_27656__$1;
(statearr_27734_27800[(1)] = (19));

} else {
var statearr_27735_27801 = state_27656__$1;
(statearr_27735_27801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (42))){
var state_27656__$1 = state_27656;
var statearr_27736_27802 = state_27656__$1;
(statearr_27736_27802[(2)] = null);

(statearr_27736_27802[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (37))){
var inst_27622 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27737_27803 = state_27656__$1;
(statearr_27737_27803[(2)] = inst_27622);

(statearr_27737_27803[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (8))){
var inst_27517 = (state_27656[(8)]);
var inst_27530 = (state_27656[(22)]);
var inst_27530__$1 = cljs.core.seq.call(null,inst_27517);
var state_27656__$1 = (function (){var statearr_27738 = state_27656;
(statearr_27738[(22)] = inst_27530__$1);

return statearr_27738;
})();
if(inst_27530__$1){
var statearr_27739_27804 = state_27656__$1;
(statearr_27739_27804[(1)] = (10));

} else {
var statearr_27740_27805 = state_27656__$1;
(statearr_27740_27805[(1)] = (11));

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
});})(c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21719__auto__,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0 = (function (){
var statearr_27744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27744[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__);

(statearr_27744[(1)] = (1));

return statearr_27744;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1 = (function (state_27656){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_27656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e27745){if((e27745 instanceof Object)){
var ex__21723__auto__ = e27745;
var statearr_27746_27806 = state_27656;
(statearr_27746_27806[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27807 = state_27656;
state_27656 = G__27807;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__ = function(state_27656){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1.call(this,state_27656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21833__auto__ = (function (){var statearr_27747 = f__21832__auto__.call(null);
(statearr_27747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_27747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,map__27502,map__27502__$1,opts,before_jsload,on_jsload,reload_dependents,map__27503,map__27503__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21831__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27810,link){
var map__27813 = p__27810;
var map__27813__$1 = ((((!((map__27813 == null)))?((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var file = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27813,map__27813__$1,file){
return (function (p1__27808_SHARP_,p2__27809_SHARP_){
if(cljs.core._EQ_.call(null,p1__27808_SHARP_,p2__27809_SHARP_)){
return p1__27808_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27813,map__27813__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27819){
var map__27820 = p__27819;
var map__27820__$1 = ((((!((map__27820 == null)))?((((map__27820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var match_length = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27815_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27815_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27822 = [];
var len__19529__auto___27825 = arguments.length;
var i__19530__auto___27826 = (0);
while(true){
if((i__19530__auto___27826 < len__19529__auto___27825)){
args27822.push((arguments[i__19530__auto___27826]));

var G__27827 = (i__19530__auto___27826 + (1));
i__19530__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var G__27824 = args27822.length;
switch (G__27824) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27822.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27829_SHARP_,p2__27830_SHARP_){
return cljs.core.assoc.call(null,p1__27829_SHARP_,cljs.core.get.call(null,p2__27830_SHARP_,key),p2__27830_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27831){
var map__27834 = p__27831;
var map__27834__$1 = ((((!((map__27834 == null)))?((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var f_data = map__27834__$1;
var file = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27836,files_msg){
var map__27843 = p__27836;
var map__27843__$1 = ((((!((map__27843 == null)))?((((map__27843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27843):map__27843);
var opts = map__27843__$1;
var on_cssload = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27845_27849 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27846_27850 = null;
var count__27847_27851 = (0);
var i__27848_27852 = (0);
while(true){
if((i__27848_27852 < count__27847_27851)){
var f_27853 = cljs.core._nth.call(null,chunk__27846_27850,i__27848_27852);
figwheel.client.file_reloading.reload_css_file.call(null,f_27853);

var G__27854 = seq__27845_27849;
var G__27855 = chunk__27846_27850;
var G__27856 = count__27847_27851;
var G__27857 = (i__27848_27852 + (1));
seq__27845_27849 = G__27854;
chunk__27846_27850 = G__27855;
count__27847_27851 = G__27856;
i__27848_27852 = G__27857;
continue;
} else {
var temp__4657__auto___27858 = cljs.core.seq.call(null,seq__27845_27849);
if(temp__4657__auto___27858){
var seq__27845_27859__$1 = temp__4657__auto___27858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27845_27859__$1)){
var c__19270__auto___27860 = cljs.core.chunk_first.call(null,seq__27845_27859__$1);
var G__27861 = cljs.core.chunk_rest.call(null,seq__27845_27859__$1);
var G__27862 = c__19270__auto___27860;
var G__27863 = cljs.core.count.call(null,c__19270__auto___27860);
var G__27864 = (0);
seq__27845_27849 = G__27861;
chunk__27846_27850 = G__27862;
count__27847_27851 = G__27863;
i__27848_27852 = G__27864;
continue;
} else {
var f_27865 = cljs.core.first.call(null,seq__27845_27859__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27865);

var G__27866 = cljs.core.next.call(null,seq__27845_27859__$1);
var G__27867 = null;
var G__27868 = (0);
var G__27869 = (0);
seq__27845_27849 = G__27866;
chunk__27846_27850 = G__27867;
count__27847_27851 = G__27868;
i__27848_27852 = G__27869;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27843,map__27843__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27843,map__27843__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467032260278