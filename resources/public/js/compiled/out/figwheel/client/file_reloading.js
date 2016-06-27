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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35704_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35704_SHARP_));
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
var seq__35709 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35710 = null;
var count__35711 = (0);
var i__35712 = (0);
while(true){
if((i__35712 < count__35711)){
var n = cljs.core._nth.call(null,chunk__35710,i__35712);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35713 = seq__35709;
var G__35714 = chunk__35710;
var G__35715 = count__35711;
var G__35716 = (i__35712 + (1));
seq__35709 = G__35713;
chunk__35710 = G__35714;
count__35711 = G__35715;
i__35712 = G__35716;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35709);
if(temp__4657__auto__){
var seq__35709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35709__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__35709__$1);
var G__35717 = cljs.core.chunk_rest.call(null,seq__35709__$1);
var G__35718 = c__19270__auto__;
var G__35719 = cljs.core.count.call(null,c__19270__auto__);
var G__35720 = (0);
seq__35709 = G__35717;
chunk__35710 = G__35718;
count__35711 = G__35719;
i__35712 = G__35720;
continue;
} else {
var n = cljs.core.first.call(null,seq__35709__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35721 = cljs.core.next.call(null,seq__35709__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__35709 = G__35721;
chunk__35710 = G__35722;
count__35711 = G__35723;
i__35712 = G__35724;
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

var seq__35763_35770 = cljs.core.seq.call(null,deps);
var chunk__35764_35771 = null;
var count__35765_35772 = (0);
var i__35766_35773 = (0);
while(true){
if((i__35766_35773 < count__35765_35772)){
var dep_35774 = cljs.core._nth.call(null,chunk__35764_35771,i__35766_35773);
topo_sort_helper_STAR_.call(null,dep_35774,(depth + (1)),state);

var G__35775 = seq__35763_35770;
var G__35776 = chunk__35764_35771;
var G__35777 = count__35765_35772;
var G__35778 = (i__35766_35773 + (1));
seq__35763_35770 = G__35775;
chunk__35764_35771 = G__35776;
count__35765_35772 = G__35777;
i__35766_35773 = G__35778;
continue;
} else {
var temp__4657__auto___35779 = cljs.core.seq.call(null,seq__35763_35770);
if(temp__4657__auto___35779){
var seq__35763_35780__$1 = temp__4657__auto___35779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35763_35780__$1)){
var c__19270__auto___35781 = cljs.core.chunk_first.call(null,seq__35763_35780__$1);
var G__35782 = cljs.core.chunk_rest.call(null,seq__35763_35780__$1);
var G__35783 = c__19270__auto___35781;
var G__35784 = cljs.core.count.call(null,c__19270__auto___35781);
var G__35785 = (0);
seq__35763_35770 = G__35782;
chunk__35764_35771 = G__35783;
count__35765_35772 = G__35784;
i__35766_35773 = G__35785;
continue;
} else {
var dep_35786 = cljs.core.first.call(null,seq__35763_35780__$1);
topo_sort_helper_STAR_.call(null,dep_35786,(depth + (1)),state);

var G__35787 = cljs.core.next.call(null,seq__35763_35780__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35763_35770 = G__35787;
chunk__35764_35771 = G__35788;
count__35765_35772 = G__35789;
i__35766_35773 = G__35790;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35767){
var vec__35769 = p__35767;
var x = cljs.core.nth.call(null,vec__35769,(0),null);
var xs = cljs.core.nthnext.call(null,vec__35769,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35769,x,xs,get_deps__$1){
return (function (p1__35725_SHARP_){
return clojure.set.difference.call(null,p1__35725_SHARP_,x);
});})(vec__35769,x,xs,get_deps__$1))
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
var seq__35803 = cljs.core.seq.call(null,provides);
var chunk__35804 = null;
var count__35805 = (0);
var i__35806 = (0);
while(true){
if((i__35806 < count__35805)){
var prov = cljs.core._nth.call(null,chunk__35804,i__35806);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35807_35815 = cljs.core.seq.call(null,requires);
var chunk__35808_35816 = null;
var count__35809_35817 = (0);
var i__35810_35818 = (0);
while(true){
if((i__35810_35818 < count__35809_35817)){
var req_35819 = cljs.core._nth.call(null,chunk__35808_35816,i__35810_35818);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35819,prov);

var G__35820 = seq__35807_35815;
var G__35821 = chunk__35808_35816;
var G__35822 = count__35809_35817;
var G__35823 = (i__35810_35818 + (1));
seq__35807_35815 = G__35820;
chunk__35808_35816 = G__35821;
count__35809_35817 = G__35822;
i__35810_35818 = G__35823;
continue;
} else {
var temp__4657__auto___35824 = cljs.core.seq.call(null,seq__35807_35815);
if(temp__4657__auto___35824){
var seq__35807_35825__$1 = temp__4657__auto___35824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35807_35825__$1)){
var c__19270__auto___35826 = cljs.core.chunk_first.call(null,seq__35807_35825__$1);
var G__35827 = cljs.core.chunk_rest.call(null,seq__35807_35825__$1);
var G__35828 = c__19270__auto___35826;
var G__35829 = cljs.core.count.call(null,c__19270__auto___35826);
var G__35830 = (0);
seq__35807_35815 = G__35827;
chunk__35808_35816 = G__35828;
count__35809_35817 = G__35829;
i__35810_35818 = G__35830;
continue;
} else {
var req_35831 = cljs.core.first.call(null,seq__35807_35825__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35831,prov);

var G__35832 = cljs.core.next.call(null,seq__35807_35825__$1);
var G__35833 = null;
var G__35834 = (0);
var G__35835 = (0);
seq__35807_35815 = G__35832;
chunk__35808_35816 = G__35833;
count__35809_35817 = G__35834;
i__35810_35818 = G__35835;
continue;
}
} else {
}
}
break;
}

var G__35836 = seq__35803;
var G__35837 = chunk__35804;
var G__35838 = count__35805;
var G__35839 = (i__35806 + (1));
seq__35803 = G__35836;
chunk__35804 = G__35837;
count__35805 = G__35838;
i__35806 = G__35839;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35803);
if(temp__4657__auto__){
var seq__35803__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35803__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__35803__$1);
var G__35840 = cljs.core.chunk_rest.call(null,seq__35803__$1);
var G__35841 = c__19270__auto__;
var G__35842 = cljs.core.count.call(null,c__19270__auto__);
var G__35843 = (0);
seq__35803 = G__35840;
chunk__35804 = G__35841;
count__35805 = G__35842;
i__35806 = G__35843;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35803__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35811_35844 = cljs.core.seq.call(null,requires);
var chunk__35812_35845 = null;
var count__35813_35846 = (0);
var i__35814_35847 = (0);
while(true){
if((i__35814_35847 < count__35813_35846)){
var req_35848 = cljs.core._nth.call(null,chunk__35812_35845,i__35814_35847);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35848,prov);

var G__35849 = seq__35811_35844;
var G__35850 = chunk__35812_35845;
var G__35851 = count__35813_35846;
var G__35852 = (i__35814_35847 + (1));
seq__35811_35844 = G__35849;
chunk__35812_35845 = G__35850;
count__35813_35846 = G__35851;
i__35814_35847 = G__35852;
continue;
} else {
var temp__4657__auto___35853__$1 = cljs.core.seq.call(null,seq__35811_35844);
if(temp__4657__auto___35853__$1){
var seq__35811_35854__$1 = temp__4657__auto___35853__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35811_35854__$1)){
var c__19270__auto___35855 = cljs.core.chunk_first.call(null,seq__35811_35854__$1);
var G__35856 = cljs.core.chunk_rest.call(null,seq__35811_35854__$1);
var G__35857 = c__19270__auto___35855;
var G__35858 = cljs.core.count.call(null,c__19270__auto___35855);
var G__35859 = (0);
seq__35811_35844 = G__35856;
chunk__35812_35845 = G__35857;
count__35813_35846 = G__35858;
i__35814_35847 = G__35859;
continue;
} else {
var req_35860 = cljs.core.first.call(null,seq__35811_35854__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35860,prov);

var G__35861 = cljs.core.next.call(null,seq__35811_35854__$1);
var G__35862 = null;
var G__35863 = (0);
var G__35864 = (0);
seq__35811_35844 = G__35861;
chunk__35812_35845 = G__35862;
count__35813_35846 = G__35863;
i__35814_35847 = G__35864;
continue;
}
} else {
}
}
break;
}

var G__35865 = cljs.core.next.call(null,seq__35803__$1);
var G__35866 = null;
var G__35867 = (0);
var G__35868 = (0);
seq__35803 = G__35865;
chunk__35804 = G__35866;
count__35805 = G__35867;
i__35806 = G__35868;
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
var seq__35873_35877 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35874_35878 = null;
var count__35875_35879 = (0);
var i__35876_35880 = (0);
while(true){
if((i__35876_35880 < count__35875_35879)){
var ns_35881 = cljs.core._nth.call(null,chunk__35874_35878,i__35876_35880);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35881);

var G__35882 = seq__35873_35877;
var G__35883 = chunk__35874_35878;
var G__35884 = count__35875_35879;
var G__35885 = (i__35876_35880 + (1));
seq__35873_35877 = G__35882;
chunk__35874_35878 = G__35883;
count__35875_35879 = G__35884;
i__35876_35880 = G__35885;
continue;
} else {
var temp__4657__auto___35886 = cljs.core.seq.call(null,seq__35873_35877);
if(temp__4657__auto___35886){
var seq__35873_35887__$1 = temp__4657__auto___35886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35873_35887__$1)){
var c__19270__auto___35888 = cljs.core.chunk_first.call(null,seq__35873_35887__$1);
var G__35889 = cljs.core.chunk_rest.call(null,seq__35873_35887__$1);
var G__35890 = c__19270__auto___35888;
var G__35891 = cljs.core.count.call(null,c__19270__auto___35888);
var G__35892 = (0);
seq__35873_35877 = G__35889;
chunk__35874_35878 = G__35890;
count__35875_35879 = G__35891;
i__35876_35880 = G__35892;
continue;
} else {
var ns_35893 = cljs.core.first.call(null,seq__35873_35887__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35893);

var G__35894 = cljs.core.next.call(null,seq__35873_35887__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35873_35877 = G__35894;
chunk__35874_35878 = G__35895;
count__35875_35879 = G__35896;
i__35876_35880 = G__35897;
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
var G__35898__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35899__i = 0, G__35899__a = new Array(arguments.length -  0);
while (G__35899__i < G__35899__a.length) {G__35899__a[G__35899__i] = arguments[G__35899__i + 0]; ++G__35899__i;}
  args = new cljs.core.IndexedSeq(G__35899__a,0);
} 
return G__35898__delegate.call(this,args);};
G__35898.cljs$lang$maxFixedArity = 0;
G__35898.cljs$lang$applyTo = (function (arglist__35900){
var args = cljs.core.seq(arglist__35900);
return G__35898__delegate(args);
});
G__35898.cljs$core$IFn$_invoke$arity$variadic = G__35898__delegate;
return G__35898;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35902 = cljs.core._EQ_;
var expr__35903 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35902.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35903))){
var path_parts = ((function (pred__35902,expr__35903){
return (function (p1__35901_SHARP_){
return clojure.string.split.call(null,p1__35901_SHARP_,/[\/\\]/);
});})(pred__35902,expr__35903))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35902,expr__35903){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35905){if((e35905 instanceof Error)){
var e = e35905;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35905;

}
}})());
});
;})(path_parts,sep,root,pred__35902,expr__35903))
} else {
if(cljs.core.truth_(pred__35902.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35903))){
return ((function (pred__35902,expr__35903){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35902,expr__35903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35902,expr__35903))
);

return deferred.addErrback(((function (deferred,pred__35902,expr__35903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35902,expr__35903))
);
});
;})(pred__35902,expr__35903))
} else {
return ((function (pred__35902,expr__35903){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35902,expr__35903))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35906,callback){
var map__35909 = p__35906;
var map__35909__$1 = ((((!((map__35909 == null)))?((((map__35909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35909):map__35909);
var file_msg = map__35909__$1;
var request_url = cljs.core.get.call(null,map__35909__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35909,map__35909__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35909,map__35909__$1,file_msg,request_url))
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
return (function (state_35933){
var state_val_35934 = (state_35933[(1)]);
if((state_val_35934 === (7))){
var inst_35929 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35935_35955 = state_35933__$1;
(statearr_35935_35955[(2)] = inst_35929);

(statearr_35935_35955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (1))){
var state_35933__$1 = state_35933;
var statearr_35936_35956 = state_35933__$1;
(statearr_35936_35956[(2)] = null);

(statearr_35936_35956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (4))){
var inst_35913 = (state_35933[(7)]);
var inst_35913__$1 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35937 = state_35933;
(statearr_35937[(7)] = inst_35913__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35913__$1)){
var statearr_35938_35957 = state_35933__$1;
(statearr_35938_35957[(1)] = (5));

} else {
var statearr_35939_35958 = state_35933__$1;
(statearr_35939_35958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (6))){
var state_35933__$1 = state_35933;
var statearr_35940_35959 = state_35933__$1;
(statearr_35940_35959[(2)] = null);

(statearr_35940_35959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (3))){
var inst_35931 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else {
if((state_val_35934 === (2))){
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35934 === (11))){
var inst_35925 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35941 = state_35933;
(statearr_35941[(8)] = inst_35925);

return statearr_35941;
})();
var statearr_35942_35960 = state_35933__$1;
(statearr_35942_35960[(2)] = null);

(statearr_35942_35960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (9))){
var inst_35917 = (state_35933[(9)]);
var inst_35919 = (state_35933[(10)]);
var inst_35921 = inst_35919.call(null,inst_35917);
var state_35933__$1 = state_35933;
var statearr_35943_35961 = state_35933__$1;
(statearr_35943_35961[(2)] = inst_35921);

(statearr_35943_35961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (5))){
var inst_35913 = (state_35933[(7)]);
var inst_35915 = figwheel.client.file_reloading.blocking_load.call(null,inst_35913);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(8),inst_35915);
} else {
if((state_val_35934 === (10))){
var inst_35917 = (state_35933[(9)]);
var inst_35923 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35917);
var state_35933__$1 = state_35933;
var statearr_35944_35962 = state_35933__$1;
(statearr_35944_35962[(2)] = inst_35923);

(statearr_35944_35962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (8))){
var inst_35919 = (state_35933[(10)]);
var inst_35913 = (state_35933[(7)]);
var inst_35917 = (state_35933[(2)]);
var inst_35918 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35919__$1 = cljs.core.get.call(null,inst_35918,inst_35913);
var state_35933__$1 = (function (){var statearr_35945 = state_35933;
(statearr_35945[(9)] = inst_35917);

(statearr_35945[(10)] = inst_35919__$1);

return statearr_35945;
})();
if(cljs.core.truth_(inst_35919__$1)){
var statearr_35946_35963 = state_35933__$1;
(statearr_35946_35963[(1)] = (9));

} else {
var statearr_35947_35964 = state_35933__$1;
(statearr_35947_35964[(1)] = (10));

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
var statearr_35951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35951[(0)] = figwheel$client$file_reloading$state_machine__21720__auto__);

(statearr_35951[(1)] = (1));

return statearr_35951;
});
var figwheel$client$file_reloading$state_machine__21720__auto____1 = (function (state_35933){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_35933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e35952){if((e35952 instanceof Object)){
var ex__21723__auto__ = e35952;
var statearr_35953_35965 = state_35933;
(statearr_35953_35965[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35966 = state_35933;
state_35933 = G__35966;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21720__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21720__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21720__auto____0;
figwheel$client$file_reloading$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21720__auto____1;
return figwheel$client$file_reloading$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_35954 = f__21832__auto__.call(null);
(statearr_35954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_35954;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35967,callback){
var map__35970 = p__35967;
var map__35970__$1 = ((((!((map__35970 == null)))?((((map__35970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35970):map__35970);
var file_msg = map__35970__$1;
var namespace = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35970,map__35970__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35970,map__35970__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35972){
var map__35975 = p__35972;
var map__35975__$1 = ((((!((map__35975 == null)))?((((map__35975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35975):map__35975);
var file_msg = map__35975__$1;
var namespace = cljs.core.get.call(null,map__35975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35977,callback){
var map__35980 = p__35977;
var map__35980__$1 = ((((!((map__35980 == null)))?((((map__35980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35980):map__35980);
var file_msg = map__35980__$1;
var request_url = cljs.core.get.call(null,map__35980__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35980__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21831__auto___36068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___36068,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___36068,out){
return (function (state_36050){
var state_val_36051 = (state_36050[(1)]);
if((state_val_36051 === (1))){
var inst_36028 = cljs.core.nth.call(null,files,(0),null);
var inst_36029 = cljs.core.nthnext.call(null,files,(1));
var inst_36030 = files;
var state_36050__$1 = (function (){var statearr_36052 = state_36050;
(statearr_36052[(7)] = inst_36028);

(statearr_36052[(8)] = inst_36029);

(statearr_36052[(9)] = inst_36030);

return statearr_36052;
})();
var statearr_36053_36069 = state_36050__$1;
(statearr_36053_36069[(2)] = null);

(statearr_36053_36069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (2))){
var inst_36033 = (state_36050[(10)]);
var inst_36030 = (state_36050[(9)]);
var inst_36033__$1 = cljs.core.nth.call(null,inst_36030,(0),null);
var inst_36034 = cljs.core.nthnext.call(null,inst_36030,(1));
var inst_36035 = (inst_36033__$1 == null);
var inst_36036 = cljs.core.not.call(null,inst_36035);
var state_36050__$1 = (function (){var statearr_36054 = state_36050;
(statearr_36054[(11)] = inst_36034);

(statearr_36054[(10)] = inst_36033__$1);

return statearr_36054;
})();
if(inst_36036){
var statearr_36055_36070 = state_36050__$1;
(statearr_36055_36070[(1)] = (4));

} else {
var statearr_36056_36071 = state_36050__$1;
(statearr_36056_36071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (3))){
var inst_36048 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36050__$1,inst_36048);
} else {
if((state_val_36051 === (4))){
var inst_36033 = (state_36050[(10)]);
var inst_36038 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36033);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36050__$1,(7),inst_36038);
} else {
if((state_val_36051 === (5))){
var inst_36044 = cljs.core.async.close_BANG_.call(null,out);
var state_36050__$1 = state_36050;
var statearr_36057_36072 = state_36050__$1;
(statearr_36057_36072[(2)] = inst_36044);

(statearr_36057_36072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (6))){
var inst_36046 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36058_36073 = state_36050__$1;
(statearr_36058_36073[(2)] = inst_36046);

(statearr_36058_36073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (7))){
var inst_36034 = (state_36050[(11)]);
var inst_36040 = (state_36050[(2)]);
var inst_36041 = cljs.core.async.put_BANG_.call(null,out,inst_36040);
var inst_36030 = inst_36034;
var state_36050__$1 = (function (){var statearr_36059 = state_36050;
(statearr_36059[(12)] = inst_36041);

(statearr_36059[(9)] = inst_36030);

return statearr_36059;
})();
var statearr_36060_36074 = state_36050__$1;
(statearr_36060_36074[(2)] = null);

(statearr_36060_36074[(1)] = (2));


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
});})(c__21831__auto___36068,out))
;
return ((function (switch__21719__auto__,c__21831__auto___36068,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0 = (function (){
var statearr_36064 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36064[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__);

(statearr_36064[(1)] = (1));

return statearr_36064;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1 = (function (state_36050){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_36050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e36065){if((e36065 instanceof Object)){
var ex__21723__auto__ = e36065;
var statearr_36066_36075 = state_36050;
(statearr_36066_36075[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36076 = state_36050;
state_36050 = G__36076;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__ = function(state_36050){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1.call(this,state_36050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___36068,out))
})();
var state__21833__auto__ = (function (){var statearr_36067 = f__21832__auto__.call(null);
(statearr_36067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___36068);

return statearr_36067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___36068,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36077,opts){
var map__36081 = p__36077;
var map__36081__$1 = ((((!((map__36081 == null)))?((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var eval_body__$1 = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36083){var e = e36083;
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
return (function (p1__36084_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36084_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36089){
var vec__36090 = p__36089;
var k = cljs.core.nth.call(null,vec__36090,(0),null);
var v = cljs.core.nth.call(null,vec__36090,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36091){
var vec__36092 = p__36091;
var k = cljs.core.nth.call(null,vec__36092,(0),null);
var v = cljs.core.nth.call(null,vec__36092,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36096,p__36097){
var map__36344 = p__36096;
var map__36344__$1 = ((((!((map__36344 == null)))?((((map__36344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36344):map__36344);
var opts = map__36344__$1;
var before_jsload = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36344__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36345 = p__36097;
var map__36345__$1 = ((((!((map__36345 == null)))?((((map__36345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36345):map__36345);
var msg = map__36345__$1;
var files = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36498){
var state_val_36499 = (state_36498[(1)]);
if((state_val_36499 === (7))){
var inst_36360 = (state_36498[(7)]);
var inst_36362 = (state_36498[(8)]);
var inst_36359 = (state_36498[(9)]);
var inst_36361 = (state_36498[(10)]);
var inst_36367 = cljs.core._nth.call(null,inst_36360,inst_36362);
var inst_36368 = figwheel.client.file_reloading.eval_body.call(null,inst_36367,opts);
var inst_36369 = (inst_36362 + (1));
var tmp36500 = inst_36360;
var tmp36501 = inst_36359;
var tmp36502 = inst_36361;
var inst_36359__$1 = tmp36501;
var inst_36360__$1 = tmp36500;
var inst_36361__$1 = tmp36502;
var inst_36362__$1 = inst_36369;
var state_36498__$1 = (function (){var statearr_36503 = state_36498;
(statearr_36503[(7)] = inst_36360__$1);

(statearr_36503[(11)] = inst_36368);

(statearr_36503[(8)] = inst_36362__$1);

(statearr_36503[(9)] = inst_36359__$1);

(statearr_36503[(10)] = inst_36361__$1);

return statearr_36503;
})();
var statearr_36504_36590 = state_36498__$1;
(statearr_36504_36590[(2)] = null);

(statearr_36504_36590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (20))){
var inst_36402 = (state_36498[(12)]);
var inst_36410 = figwheel.client.file_reloading.sort_files.call(null,inst_36402);
var state_36498__$1 = state_36498;
var statearr_36505_36591 = state_36498__$1;
(statearr_36505_36591[(2)] = inst_36410);

(statearr_36505_36591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (27))){
var state_36498__$1 = state_36498;
var statearr_36506_36592 = state_36498__$1;
(statearr_36506_36592[(2)] = null);

(statearr_36506_36592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (1))){
var inst_36351 = (state_36498[(13)]);
var inst_36348 = before_jsload.call(null,files);
var inst_36349 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36350 = (function (){return ((function (inst_36351,inst_36348,inst_36349,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36093_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36093_SHARP_);
});
;})(inst_36351,inst_36348,inst_36349,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36351__$1 = cljs.core.filter.call(null,inst_36350,files);
var inst_36352 = cljs.core.not_empty.call(null,inst_36351__$1);
var state_36498__$1 = (function (){var statearr_36507 = state_36498;
(statearr_36507[(14)] = inst_36349);

(statearr_36507[(15)] = inst_36348);

(statearr_36507[(13)] = inst_36351__$1);

return statearr_36507;
})();
if(cljs.core.truth_(inst_36352)){
var statearr_36508_36593 = state_36498__$1;
(statearr_36508_36593[(1)] = (2));

} else {
var statearr_36509_36594 = state_36498__$1;
(statearr_36509_36594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (24))){
var state_36498__$1 = state_36498;
var statearr_36510_36595 = state_36498__$1;
(statearr_36510_36595[(2)] = null);

(statearr_36510_36595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (39))){
var inst_36452 = (state_36498[(16)]);
var state_36498__$1 = state_36498;
var statearr_36511_36596 = state_36498__$1;
(statearr_36511_36596[(2)] = inst_36452);

(statearr_36511_36596[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (46))){
var inst_36493 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36512_36597 = state_36498__$1;
(statearr_36512_36597[(2)] = inst_36493);

(statearr_36512_36597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (4))){
var inst_36396 = (state_36498[(2)]);
var inst_36397 = cljs.core.List.EMPTY;
var inst_36398 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36397);
var inst_36399 = (function (){return ((function (inst_36396,inst_36397,inst_36398,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36094_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36094_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36094_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_36396,inst_36397,inst_36398,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36400 = cljs.core.filter.call(null,inst_36399,files);
var inst_36401 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36402 = cljs.core.concat.call(null,inst_36400,inst_36401);
var state_36498__$1 = (function (){var statearr_36513 = state_36498;
(statearr_36513[(17)] = inst_36396);

(statearr_36513[(18)] = inst_36398);

(statearr_36513[(12)] = inst_36402);

return statearr_36513;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36514_36598 = state_36498__$1;
(statearr_36514_36598[(1)] = (16));

} else {
var statearr_36515_36599 = state_36498__$1;
(statearr_36515_36599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (15))){
var inst_36386 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36516_36600 = state_36498__$1;
(statearr_36516_36600[(2)] = inst_36386);

(statearr_36516_36600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (21))){
var inst_36412 = (state_36498[(19)]);
var inst_36412__$1 = (state_36498[(2)]);
var inst_36413 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36412__$1);
var state_36498__$1 = (function (){var statearr_36517 = state_36498;
(statearr_36517[(19)] = inst_36412__$1);

return statearr_36517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36498__$1,(22),inst_36413);
} else {
if((state_val_36499 === (31))){
var inst_36496 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36498__$1,inst_36496);
} else {
if((state_val_36499 === (32))){
var inst_36452 = (state_36498[(16)]);
var inst_36457 = inst_36452.cljs$lang$protocol_mask$partition0$;
var inst_36458 = (inst_36457 & (64));
var inst_36459 = inst_36452.cljs$core$ISeq$;
var inst_36460 = (inst_36458) || (inst_36459);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36460)){
var statearr_36518_36601 = state_36498__$1;
(statearr_36518_36601[(1)] = (35));

} else {
var statearr_36519_36602 = state_36498__$1;
(statearr_36519_36602[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (40))){
var inst_36473 = (state_36498[(20)]);
var inst_36472 = (state_36498[(2)]);
var inst_36473__$1 = cljs.core.get.call(null,inst_36472,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36474 = cljs.core.get.call(null,inst_36472,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36475 = cljs.core.not_empty.call(null,inst_36473__$1);
var state_36498__$1 = (function (){var statearr_36520 = state_36498;
(statearr_36520[(20)] = inst_36473__$1);

(statearr_36520[(21)] = inst_36474);

return statearr_36520;
})();
if(cljs.core.truth_(inst_36475)){
var statearr_36521_36603 = state_36498__$1;
(statearr_36521_36603[(1)] = (41));

} else {
var statearr_36522_36604 = state_36498__$1;
(statearr_36522_36604[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (33))){
var state_36498__$1 = state_36498;
var statearr_36523_36605 = state_36498__$1;
(statearr_36523_36605[(2)] = false);

(statearr_36523_36605[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (13))){
var inst_36372 = (state_36498[(22)]);
var inst_36376 = cljs.core.chunk_first.call(null,inst_36372);
var inst_36377 = cljs.core.chunk_rest.call(null,inst_36372);
var inst_36378 = cljs.core.count.call(null,inst_36376);
var inst_36359 = inst_36377;
var inst_36360 = inst_36376;
var inst_36361 = inst_36378;
var inst_36362 = (0);
var state_36498__$1 = (function (){var statearr_36524 = state_36498;
(statearr_36524[(7)] = inst_36360);

(statearr_36524[(8)] = inst_36362);

(statearr_36524[(9)] = inst_36359);

(statearr_36524[(10)] = inst_36361);

return statearr_36524;
})();
var statearr_36525_36606 = state_36498__$1;
(statearr_36525_36606[(2)] = null);

(statearr_36525_36606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (22))){
var inst_36420 = (state_36498[(23)]);
var inst_36412 = (state_36498[(19)]);
var inst_36415 = (state_36498[(24)]);
var inst_36416 = (state_36498[(25)]);
var inst_36415__$1 = (state_36498[(2)]);
var inst_36416__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36415__$1);
var inst_36417 = (function (){var all_files = inst_36412;
var res_SINGLEQUOTE_ = inst_36415__$1;
var res = inst_36416__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36420,inst_36412,inst_36415,inst_36416,inst_36415__$1,inst_36416__$1,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36095_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36095_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36420,inst_36412,inst_36415,inst_36416,inst_36415__$1,inst_36416__$1,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36418 = cljs.core.filter.call(null,inst_36417,inst_36415__$1);
var inst_36419 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36420__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36419);
var inst_36421 = cljs.core.not_empty.call(null,inst_36420__$1);
var state_36498__$1 = (function (){var statearr_36526 = state_36498;
(statearr_36526[(26)] = inst_36418);

(statearr_36526[(23)] = inst_36420__$1);

(statearr_36526[(24)] = inst_36415__$1);

(statearr_36526[(25)] = inst_36416__$1);

return statearr_36526;
})();
if(cljs.core.truth_(inst_36421)){
var statearr_36527_36607 = state_36498__$1;
(statearr_36527_36607[(1)] = (23));

} else {
var statearr_36528_36608 = state_36498__$1;
(statearr_36528_36608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (36))){
var state_36498__$1 = state_36498;
var statearr_36529_36609 = state_36498__$1;
(statearr_36529_36609[(2)] = false);

(statearr_36529_36609[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (41))){
var inst_36473 = (state_36498[(20)]);
var inst_36477 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36478 = cljs.core.map.call(null,inst_36477,inst_36473);
var inst_36479 = cljs.core.pr_str.call(null,inst_36478);
var inst_36480 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36479)].join('');
var inst_36481 = figwheel.client.utils.log.call(null,inst_36480);
var state_36498__$1 = state_36498;
var statearr_36530_36610 = state_36498__$1;
(statearr_36530_36610[(2)] = inst_36481);

(statearr_36530_36610[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (43))){
var inst_36474 = (state_36498[(21)]);
var inst_36484 = (state_36498[(2)]);
var inst_36485 = cljs.core.not_empty.call(null,inst_36474);
var state_36498__$1 = (function (){var statearr_36531 = state_36498;
(statearr_36531[(27)] = inst_36484);

return statearr_36531;
})();
if(cljs.core.truth_(inst_36485)){
var statearr_36532_36611 = state_36498__$1;
(statearr_36532_36611[(1)] = (44));

} else {
var statearr_36533_36612 = state_36498__$1;
(statearr_36533_36612[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (29))){
var inst_36418 = (state_36498[(26)]);
var inst_36420 = (state_36498[(23)]);
var inst_36412 = (state_36498[(19)]);
var inst_36415 = (state_36498[(24)]);
var inst_36452 = (state_36498[(16)]);
var inst_36416 = (state_36498[(25)]);
var inst_36448 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36451 = (function (){var all_files = inst_36412;
var res_SINGLEQUOTE_ = inst_36415;
var res = inst_36416;
var files_not_loaded = inst_36418;
var dependencies_that_loaded = inst_36420;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36452,inst_36416,inst_36448,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36450){
var map__36534 = p__36450;
var map__36534__$1 = ((((!((map__36534 == null)))?((((map__36534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36534):map__36534);
var namespace = cljs.core.get.call(null,map__36534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36452,inst_36416,inst_36448,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36452__$1 = cljs.core.group_by.call(null,inst_36451,inst_36418);
var inst_36454 = (inst_36452__$1 == null);
var inst_36455 = cljs.core.not.call(null,inst_36454);
var state_36498__$1 = (function (){var statearr_36536 = state_36498;
(statearr_36536[(16)] = inst_36452__$1);

(statearr_36536[(28)] = inst_36448);

return statearr_36536;
})();
if(inst_36455){
var statearr_36537_36613 = state_36498__$1;
(statearr_36537_36613[(1)] = (32));

} else {
var statearr_36538_36614 = state_36498__$1;
(statearr_36538_36614[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (44))){
var inst_36474 = (state_36498[(21)]);
var inst_36487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36474);
var inst_36488 = cljs.core.pr_str.call(null,inst_36487);
var inst_36489 = [cljs.core.str("not required: "),cljs.core.str(inst_36488)].join('');
var inst_36490 = figwheel.client.utils.log.call(null,inst_36489);
var state_36498__$1 = state_36498;
var statearr_36539_36615 = state_36498__$1;
(statearr_36539_36615[(2)] = inst_36490);

(statearr_36539_36615[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (6))){
var inst_36393 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36540_36616 = state_36498__$1;
(statearr_36540_36616[(2)] = inst_36393);

(statearr_36540_36616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (28))){
var inst_36418 = (state_36498[(26)]);
var inst_36445 = (state_36498[(2)]);
var inst_36446 = cljs.core.not_empty.call(null,inst_36418);
var state_36498__$1 = (function (){var statearr_36541 = state_36498;
(statearr_36541[(29)] = inst_36445);

return statearr_36541;
})();
if(cljs.core.truth_(inst_36446)){
var statearr_36542_36617 = state_36498__$1;
(statearr_36542_36617[(1)] = (29));

} else {
var statearr_36543_36618 = state_36498__$1;
(statearr_36543_36618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (25))){
var inst_36416 = (state_36498[(25)]);
var inst_36432 = (state_36498[(2)]);
var inst_36433 = cljs.core.not_empty.call(null,inst_36416);
var state_36498__$1 = (function (){var statearr_36544 = state_36498;
(statearr_36544[(30)] = inst_36432);

return statearr_36544;
})();
if(cljs.core.truth_(inst_36433)){
var statearr_36545_36619 = state_36498__$1;
(statearr_36545_36619[(1)] = (26));

} else {
var statearr_36546_36620 = state_36498__$1;
(statearr_36546_36620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (34))){
var inst_36467 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36467)){
var statearr_36547_36621 = state_36498__$1;
(statearr_36547_36621[(1)] = (38));

} else {
var statearr_36548_36622 = state_36498__$1;
(statearr_36548_36622[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (17))){
var state_36498__$1 = state_36498;
var statearr_36549_36623 = state_36498__$1;
(statearr_36549_36623[(2)] = recompile_dependents);

(statearr_36549_36623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (3))){
var state_36498__$1 = state_36498;
var statearr_36550_36624 = state_36498__$1;
(statearr_36550_36624[(2)] = null);

(statearr_36550_36624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (12))){
var inst_36389 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36551_36625 = state_36498__$1;
(statearr_36551_36625[(2)] = inst_36389);

(statearr_36551_36625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (2))){
var inst_36351 = (state_36498[(13)]);
var inst_36358 = cljs.core.seq.call(null,inst_36351);
var inst_36359 = inst_36358;
var inst_36360 = null;
var inst_36361 = (0);
var inst_36362 = (0);
var state_36498__$1 = (function (){var statearr_36552 = state_36498;
(statearr_36552[(7)] = inst_36360);

(statearr_36552[(8)] = inst_36362);

(statearr_36552[(9)] = inst_36359);

(statearr_36552[(10)] = inst_36361);

return statearr_36552;
})();
var statearr_36553_36626 = state_36498__$1;
(statearr_36553_36626[(2)] = null);

(statearr_36553_36626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (23))){
var inst_36418 = (state_36498[(26)]);
var inst_36420 = (state_36498[(23)]);
var inst_36412 = (state_36498[(19)]);
var inst_36415 = (state_36498[(24)]);
var inst_36416 = (state_36498[(25)]);
var inst_36423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36425 = (function (){var all_files = inst_36412;
var res_SINGLEQUOTE_ = inst_36415;
var res = inst_36416;
var files_not_loaded = inst_36418;
var dependencies_that_loaded = inst_36420;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36423,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36424){
var map__36554 = p__36424;
var map__36554__$1 = ((((!((map__36554 == null)))?((((map__36554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36554):map__36554);
var request_url = cljs.core.get.call(null,map__36554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36423,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36426 = cljs.core.reverse.call(null,inst_36420);
var inst_36427 = cljs.core.map.call(null,inst_36425,inst_36426);
var inst_36428 = cljs.core.pr_str.call(null,inst_36427);
var inst_36429 = figwheel.client.utils.log.call(null,inst_36428);
var state_36498__$1 = (function (){var statearr_36556 = state_36498;
(statearr_36556[(31)] = inst_36423);

return statearr_36556;
})();
var statearr_36557_36627 = state_36498__$1;
(statearr_36557_36627[(2)] = inst_36429);

(statearr_36557_36627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (35))){
var state_36498__$1 = state_36498;
var statearr_36558_36628 = state_36498__$1;
(statearr_36558_36628[(2)] = true);

(statearr_36558_36628[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (19))){
var inst_36402 = (state_36498[(12)]);
var inst_36408 = figwheel.client.file_reloading.expand_files.call(null,inst_36402);
var state_36498__$1 = state_36498;
var statearr_36559_36629 = state_36498__$1;
(statearr_36559_36629[(2)] = inst_36408);

(statearr_36559_36629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (11))){
var state_36498__$1 = state_36498;
var statearr_36560_36630 = state_36498__$1;
(statearr_36560_36630[(2)] = null);

(statearr_36560_36630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (9))){
var inst_36391 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36561_36631 = state_36498__$1;
(statearr_36561_36631[(2)] = inst_36391);

(statearr_36561_36631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (5))){
var inst_36362 = (state_36498[(8)]);
var inst_36361 = (state_36498[(10)]);
var inst_36364 = (inst_36362 < inst_36361);
var inst_36365 = inst_36364;
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36365)){
var statearr_36562_36632 = state_36498__$1;
(statearr_36562_36632[(1)] = (7));

} else {
var statearr_36563_36633 = state_36498__$1;
(statearr_36563_36633[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (14))){
var inst_36372 = (state_36498[(22)]);
var inst_36381 = cljs.core.first.call(null,inst_36372);
var inst_36382 = figwheel.client.file_reloading.eval_body.call(null,inst_36381,opts);
var inst_36383 = cljs.core.next.call(null,inst_36372);
var inst_36359 = inst_36383;
var inst_36360 = null;
var inst_36361 = (0);
var inst_36362 = (0);
var state_36498__$1 = (function (){var statearr_36564 = state_36498;
(statearr_36564[(32)] = inst_36382);

(statearr_36564[(7)] = inst_36360);

(statearr_36564[(8)] = inst_36362);

(statearr_36564[(9)] = inst_36359);

(statearr_36564[(10)] = inst_36361);

return statearr_36564;
})();
var statearr_36565_36634 = state_36498__$1;
(statearr_36565_36634[(2)] = null);

(statearr_36565_36634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (45))){
var state_36498__$1 = state_36498;
var statearr_36566_36635 = state_36498__$1;
(statearr_36566_36635[(2)] = null);

(statearr_36566_36635[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (26))){
var inst_36418 = (state_36498[(26)]);
var inst_36420 = (state_36498[(23)]);
var inst_36412 = (state_36498[(19)]);
var inst_36415 = (state_36498[(24)]);
var inst_36416 = (state_36498[(25)]);
var inst_36435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36437 = (function (){var all_files = inst_36412;
var res_SINGLEQUOTE_ = inst_36415;
var res = inst_36416;
var files_not_loaded = inst_36418;
var dependencies_that_loaded = inst_36420;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36435,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36436){
var map__36567 = p__36436;
var map__36567__$1 = ((((!((map__36567 == null)))?((((map__36567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36567):map__36567);
var namespace = cljs.core.get.call(null,map__36567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36435,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36438 = cljs.core.map.call(null,inst_36437,inst_36416);
var inst_36439 = cljs.core.pr_str.call(null,inst_36438);
var inst_36440 = figwheel.client.utils.log.call(null,inst_36439);
var inst_36441 = (function (){var all_files = inst_36412;
var res_SINGLEQUOTE_ = inst_36415;
var res = inst_36416;
var files_not_loaded = inst_36418;
var dependencies_that_loaded = inst_36420;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36435,inst_36437,inst_36438,inst_36439,inst_36440,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36418,inst_36420,inst_36412,inst_36415,inst_36416,inst_36435,inst_36437,inst_36438,inst_36439,inst_36440,state_val_36499,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36442 = setTimeout(inst_36441,(10));
var state_36498__$1 = (function (){var statearr_36569 = state_36498;
(statearr_36569[(33)] = inst_36440);

(statearr_36569[(34)] = inst_36435);

return statearr_36569;
})();
var statearr_36570_36636 = state_36498__$1;
(statearr_36570_36636[(2)] = inst_36442);

(statearr_36570_36636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (16))){
var state_36498__$1 = state_36498;
var statearr_36571_36637 = state_36498__$1;
(statearr_36571_36637[(2)] = reload_dependents);

(statearr_36571_36637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (38))){
var inst_36452 = (state_36498[(16)]);
var inst_36469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36452);
var state_36498__$1 = state_36498;
var statearr_36572_36638 = state_36498__$1;
(statearr_36572_36638[(2)] = inst_36469);

(statearr_36572_36638[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (30))){
var state_36498__$1 = state_36498;
var statearr_36573_36639 = state_36498__$1;
(statearr_36573_36639[(2)] = null);

(statearr_36573_36639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (10))){
var inst_36372 = (state_36498[(22)]);
var inst_36374 = cljs.core.chunked_seq_QMARK_.call(null,inst_36372);
var state_36498__$1 = state_36498;
if(inst_36374){
var statearr_36574_36640 = state_36498__$1;
(statearr_36574_36640[(1)] = (13));

} else {
var statearr_36575_36641 = state_36498__$1;
(statearr_36575_36641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (18))){
var inst_36406 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36406)){
var statearr_36576_36642 = state_36498__$1;
(statearr_36576_36642[(1)] = (19));

} else {
var statearr_36577_36643 = state_36498__$1;
(statearr_36577_36643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (42))){
var state_36498__$1 = state_36498;
var statearr_36578_36644 = state_36498__$1;
(statearr_36578_36644[(2)] = null);

(statearr_36578_36644[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (37))){
var inst_36464 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36579_36645 = state_36498__$1;
(statearr_36579_36645[(2)] = inst_36464);

(statearr_36579_36645[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (8))){
var inst_36372 = (state_36498[(22)]);
var inst_36359 = (state_36498[(9)]);
var inst_36372__$1 = cljs.core.seq.call(null,inst_36359);
var state_36498__$1 = (function (){var statearr_36580 = state_36498;
(statearr_36580[(22)] = inst_36372__$1);

return statearr_36580;
})();
if(inst_36372__$1){
var statearr_36581_36646 = state_36498__$1;
(statearr_36581_36646[(1)] = (10));

} else {
var statearr_36582_36647 = state_36498__$1;
(statearr_36582_36647[(1)] = (11));

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
});})(c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21719__auto__,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0 = (function (){
var statearr_36586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36586[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__);

(statearr_36586[(1)] = (1));

return statearr_36586;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1 = (function (state_36498){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_36498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e36587){if((e36587 instanceof Object)){
var ex__21723__auto__ = e36587;
var statearr_36588_36648 = state_36498;
(statearr_36588_36648[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36649 = state_36498;
state_36498 = G__36649;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__ = function(state_36498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1.call(this,state_36498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21833__auto__ = (function (){var statearr_36589 = f__21832__auto__.call(null);
(statearr_36589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_36589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,map__36344,map__36344__$1,opts,before_jsload,on_jsload,reload_dependents,map__36345,map__36345__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21831__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36652,link){
var map__36655 = p__36652;
var map__36655__$1 = ((((!((map__36655 == null)))?((((map__36655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36655):map__36655);
var file = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36655,map__36655__$1,file){
return (function (p1__36650_SHARP_,p2__36651_SHARP_){
if(cljs.core._EQ_.call(null,p1__36650_SHARP_,p2__36651_SHARP_)){
return p1__36650_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36655,map__36655__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36661){
var map__36662 = p__36661;
var map__36662__$1 = ((((!((map__36662 == null)))?((((map__36662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36662):map__36662);
var match_length = cljs.core.get.call(null,map__36662__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36662__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36657_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36657_SHARP_);
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
var args36664 = [];
var len__19529__auto___36667 = arguments.length;
var i__19530__auto___36668 = (0);
while(true){
if((i__19530__auto___36668 < len__19529__auto___36667)){
args36664.push((arguments[i__19530__auto___36668]));

var G__36669 = (i__19530__auto___36668 + (1));
i__19530__auto___36668 = G__36669;
continue;
} else {
}
break;
}

var G__36666 = args36664.length;
switch (G__36666) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36664.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36671_SHARP_,p2__36672_SHARP_){
return cljs.core.assoc.call(null,p1__36671_SHARP_,cljs.core.get.call(null,p2__36672_SHARP_,key),p2__36672_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36673){
var map__36676 = p__36673;
var map__36676__$1 = ((((!((map__36676 == null)))?((((map__36676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36676):map__36676);
var f_data = map__36676__$1;
var file = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36678,files_msg){
var map__36685 = p__36678;
var map__36685__$1 = ((((!((map__36685 == null)))?((((map__36685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36685):map__36685);
var opts = map__36685__$1;
var on_cssload = cljs.core.get.call(null,map__36685__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36687_36691 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36688_36692 = null;
var count__36689_36693 = (0);
var i__36690_36694 = (0);
while(true){
if((i__36690_36694 < count__36689_36693)){
var f_36695 = cljs.core._nth.call(null,chunk__36688_36692,i__36690_36694);
figwheel.client.file_reloading.reload_css_file.call(null,f_36695);

var G__36696 = seq__36687_36691;
var G__36697 = chunk__36688_36692;
var G__36698 = count__36689_36693;
var G__36699 = (i__36690_36694 + (1));
seq__36687_36691 = G__36696;
chunk__36688_36692 = G__36697;
count__36689_36693 = G__36698;
i__36690_36694 = G__36699;
continue;
} else {
var temp__4657__auto___36700 = cljs.core.seq.call(null,seq__36687_36691);
if(temp__4657__auto___36700){
var seq__36687_36701__$1 = temp__4657__auto___36700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36687_36701__$1)){
var c__19270__auto___36702 = cljs.core.chunk_first.call(null,seq__36687_36701__$1);
var G__36703 = cljs.core.chunk_rest.call(null,seq__36687_36701__$1);
var G__36704 = c__19270__auto___36702;
var G__36705 = cljs.core.count.call(null,c__19270__auto___36702);
var G__36706 = (0);
seq__36687_36691 = G__36703;
chunk__36688_36692 = G__36704;
count__36689_36693 = G__36705;
i__36690_36694 = G__36706;
continue;
} else {
var f_36707 = cljs.core.first.call(null,seq__36687_36701__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36707);

var G__36708 = cljs.core.next.call(null,seq__36687_36701__$1);
var G__36709 = null;
var G__36710 = (0);
var G__36711 = (0);
seq__36687_36691 = G__36708;
chunk__36688_36692 = G__36709;
count__36689_36693 = G__36710;
i__36690_36694 = G__36711;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36685,map__36685__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36685,map__36685__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467040428206