// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31425 = [];
var len__19529__auto___31431 = arguments.length;
var i__19530__auto___31432 = (0);
while(true){
if((i__19530__auto___31432 < len__19529__auto___31431)){
args31425.push((arguments[i__19530__auto___31432]));

var G__31433 = (i__19530__auto___31432 + (1));
i__19530__auto___31432 = G__31433;
continue;
} else {
}
break;
}

var G__31427 = args31425.length;
switch (G__31427) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31425.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31428 = (function (f,blockable,meta31429){
this.f = f;
this.blockable = blockable;
this.meta31429 = meta31429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31430,meta31429__$1){
var self__ = this;
var _31430__$1 = this;
return (new cljs.core.async.t_cljs$core$async31428(self__.f,self__.blockable,meta31429__$1));
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31430){
var self__ = this;
var _31430__$1 = this;
return self__.meta31429;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31429","meta31429",-1697874909,null)], null);
});

cljs.core.async.t_cljs$core$async31428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31428";

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async31428");
});

cljs.core.async.__GT_t_cljs$core$async31428 = (function cljs$core$async$__GT_t_cljs$core$async31428(f__$1,blockable__$1,meta31429){
return (new cljs.core.async.t_cljs$core$async31428(f__$1,blockable__$1,meta31429));
});

}

return (new cljs.core.async.t_cljs$core$async31428(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31437 = [];
var len__19529__auto___31440 = arguments.length;
var i__19530__auto___31441 = (0);
while(true){
if((i__19530__auto___31441 < len__19529__auto___31440)){
args31437.push((arguments[i__19530__auto___31441]));

var G__31442 = (i__19530__auto___31441 + (1));
i__19530__auto___31441 = G__31442;
continue;
} else {
}
break;
}

var G__31439 = args31437.length;
switch (G__31439) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31437.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args31444 = [];
var len__19529__auto___31447 = arguments.length;
var i__19530__auto___31448 = (0);
while(true){
if((i__19530__auto___31448 < len__19529__auto___31447)){
args31444.push((arguments[i__19530__auto___31448]));

var G__31449 = (i__19530__auto___31448 + (1));
i__19530__auto___31448 = G__31449;
continue;
} else {
}
break;
}

var G__31446 = args31444.length;
switch (G__31446) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31444.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args31451 = [];
var len__19529__auto___31454 = arguments.length;
var i__19530__auto___31455 = (0);
while(true){
if((i__19530__auto___31455 < len__19529__auto___31454)){
args31451.push((arguments[i__19530__auto___31455]));

var G__31456 = (i__19530__auto___31455 + (1));
i__19530__auto___31455 = G__31456;
continue;
} else {
}
break;
}

var G__31453 = args31451.length;
switch (G__31453) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31451.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31458 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31458);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31458,ret){
return (function (){
return fn1.call(null,val_31458);
});})(val_31458,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args31459 = [];
var len__19529__auto___31462 = arguments.length;
var i__19530__auto___31463 = (0);
while(true){
if((i__19530__auto___31463 < len__19529__auto___31462)){
args31459.push((arguments[i__19530__auto___31463]));

var G__31464 = (i__19530__auto___31463 + (1));
i__19530__auto___31463 = G__31464;
continue;
} else {
}
break;
}

var G__31461 = args31459.length;
switch (G__31461) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31459.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19374__auto___31466 = n;
var x_31467 = (0);
while(true){
if((x_31467 < n__19374__auto___31466)){
(a[x_31467] = (0));

var G__31468 = (x_31467 + (1));
x_31467 = G__31468;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31469 = (i + (1));
i = G__31469;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31473 = (function (alt_flag,flag,meta31474){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31474 = meta31474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31475,meta31474__$1){
var self__ = this;
var _31475__$1 = this;
return (new cljs.core.async.t_cljs$core$async31473(self__.alt_flag,self__.flag,meta31474__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31475){
var self__ = this;
var _31475__$1 = this;
return self__.meta31474;
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31474","meta31474",574384180,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31473";

cljs.core.async.t_cljs$core$async31473.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async31473");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31473 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31473(alt_flag__$1,flag__$1,meta31474){
return (new cljs.core.async.t_cljs$core$async31473(alt_flag__$1,flag__$1,meta31474));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31473(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31479 = (function (alt_handler,flag,cb,meta31480){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31480 = meta31480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31481,meta31480__$1){
var self__ = this;
var _31481__$1 = this;
return (new cljs.core.async.t_cljs$core$async31479(self__.alt_handler,self__.flag,self__.cb,meta31480__$1));
});

cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31481){
var self__ = this;
var _31481__$1 = this;
return self__.meta31480;
});

cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31480","meta31480",1175654790,null)], null);
});

cljs.core.async.t_cljs$core$async31479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31479";

cljs.core.async.t_cljs$core$async31479.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async31479");
});

cljs.core.async.__GT_t_cljs$core$async31479 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31479(alt_handler__$1,flag__$1,cb__$1,meta31480){
return (new cljs.core.async.t_cljs$core$async31479(alt_handler__$1,flag__$1,cb__$1,meta31480));
});

}

return (new cljs.core.async.t_cljs$core$async31479(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31482_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31482_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31483_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18459__auto__ = wport;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31484 = (i + (1));
i = G__31484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18459__auto__ = ret;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___31490 = arguments.length;
var i__19530__auto___31491 = (0);
while(true){
if((i__19530__auto___31491 < len__19529__auto___31490)){
args__19536__auto__.push((arguments[i__19530__auto___31491]));

var G__31492 = (i__19530__auto___31491 + (1));
i__19530__auto___31491 = G__31492;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31487){
var map__31488 = p__31487;
var map__31488__$1 = ((((!((map__31488 == null)))?((((map__31488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488):map__31488);
var opts = map__31488__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31485){
var G__31486 = cljs.core.first.call(null,seq31485);
var seq31485__$1 = cljs.core.next.call(null,seq31485);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31486,seq31485__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31493 = [];
var len__19529__auto___31543 = arguments.length;
var i__19530__auto___31544 = (0);
while(true){
if((i__19530__auto___31544 < len__19529__auto___31543)){
args31493.push((arguments[i__19530__auto___31544]));

var G__31545 = (i__19530__auto___31544 + (1));
i__19530__auto___31544 = G__31545;
continue;
} else {
}
break;
}

var G__31495 = args31493.length;
switch (G__31495) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31493.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21831__auto___31547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___31547){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___31547){
return (function (state_31519){
var state_val_31520 = (state_31519[(1)]);
if((state_val_31520 === (7))){
var inst_31515 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31521_31548 = state_31519__$1;
(statearr_31521_31548[(2)] = inst_31515);

(statearr_31521_31548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (1))){
var state_31519__$1 = state_31519;
var statearr_31522_31549 = state_31519__$1;
(statearr_31522_31549[(2)] = null);

(statearr_31522_31549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (4))){
var inst_31498 = (state_31519[(7)]);
var inst_31498__$1 = (state_31519[(2)]);
var inst_31499 = (inst_31498__$1 == null);
var state_31519__$1 = (function (){var statearr_31523 = state_31519;
(statearr_31523[(7)] = inst_31498__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31524_31550 = state_31519__$1;
(statearr_31524_31550[(1)] = (5));

} else {
var statearr_31525_31551 = state_31519__$1;
(statearr_31525_31551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (13))){
var state_31519__$1 = state_31519;
var statearr_31526_31552 = state_31519__$1;
(statearr_31526_31552[(2)] = null);

(statearr_31526_31552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (6))){
var inst_31498 = (state_31519[(7)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31519__$1,(11),to,inst_31498);
} else {
if((state_val_31520 === (3))){
var inst_31517 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31519__$1,inst_31517);
} else {
if((state_val_31520 === (12))){
var state_31519__$1 = state_31519;
var statearr_31527_31553 = state_31519__$1;
(statearr_31527_31553[(2)] = null);

(statearr_31527_31553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (2))){
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(4),from);
} else {
if((state_val_31520 === (11))){
var inst_31508 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
if(cljs.core.truth_(inst_31508)){
var statearr_31528_31554 = state_31519__$1;
(statearr_31528_31554[(1)] = (12));

} else {
var statearr_31529_31555 = state_31519__$1;
(statearr_31529_31555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (9))){
var state_31519__$1 = state_31519;
var statearr_31530_31556 = state_31519__$1;
(statearr_31530_31556[(2)] = null);

(statearr_31530_31556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (5))){
var state_31519__$1 = state_31519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31531_31557 = state_31519__$1;
(statearr_31531_31557[(1)] = (8));

} else {
var statearr_31532_31558 = state_31519__$1;
(statearr_31532_31558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (14))){
var inst_31513 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31533_31559 = state_31519__$1;
(statearr_31533_31559[(2)] = inst_31513);

(statearr_31533_31559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (10))){
var inst_31505 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31534_31560 = state_31519__$1;
(statearr_31534_31560[(2)] = inst_31505);

(statearr_31534_31560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (8))){
var inst_31502 = cljs.core.async.close_BANG_.call(null,to);
var state_31519__$1 = state_31519;
var statearr_31535_31561 = state_31519__$1;
(statearr_31535_31561[(2)] = inst_31502);

(statearr_31535_31561[(1)] = (10));


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
});})(c__21831__auto___31547))
;
return ((function (switch__21719__auto__,c__21831__auto___31547){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_31539 = [null,null,null,null,null,null,null,null];
(statearr_31539[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_31539[(1)] = (1));

return statearr_31539;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_31519){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31540){if((e31540 instanceof Object)){
var ex__21723__auto__ = e31540;
var statearr_31541_31562 = state_31519;
(statearr_31541_31562[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31563 = state_31519;
state_31519 = G__31563;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___31547))
})();
var state__21833__auto__ = (function (){var statearr_31542 = f__21832__auto__.call(null);
(statearr_31542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___31547);

return statearr_31542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___31547))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31747){
var vec__31748 = p__31747;
var v = cljs.core.nth.call(null,vec__31748,(0),null);
var p = cljs.core.nth.call(null,vec__31748,(1),null);
var job = vec__31748;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21831__auto___31930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (1))){
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31753__$1,(2),res,v);
} else {
if((state_val_31754 === (2))){
var inst_31750 = (state_31753[(2)]);
var inst_31751 = cljs.core.async.close_BANG_.call(null,res);
var state_31753__$1 = (function (){var statearr_31755 = state_31753;
(statearr_31755[(7)] = inst_31750);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
return null;
}
}
});})(c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results))
;
return ((function (switch__21719__auto__,c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1 = (function (state_31753){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object)){
var ex__21723__auto__ = e31760;
var statearr_31761_31931 = state_31753;
(statearr_31761_31931[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31932 = state_31753;
state_31753 = G__31932;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results))
})();
var state__21833__auto__ = (function (){var statearr_31762 = f__21832__auto__.call(null);
(statearr_31762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___31930);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___31930,res,vec__31748,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31763){
var vec__31764 = p__31763;
var v = cljs.core.nth.call(null,vec__31764,(0),null);
var p = cljs.core.nth.call(null,vec__31764,(1),null);
var job = vec__31764;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19374__auto___31933 = n;
var __31934 = (0);
while(true){
if((__31934 < n__19374__auto___31933)){
var G__31765_31935 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31765_31935) {
case "compute":
var c__21831__auto___31937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31934,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (__31934,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function (state_31778){
var state_val_31779 = (state_31778[(1)]);
if((state_val_31779 === (1))){
var state_31778__$1 = state_31778;
var statearr_31780_31938 = state_31778__$1;
(statearr_31780_31938[(2)] = null);

(statearr_31780_31938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (2))){
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31778__$1,(4),jobs);
} else {
if((state_val_31779 === (3))){
var inst_31776 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31778__$1,inst_31776);
} else {
if((state_val_31779 === (4))){
var inst_31768 = (state_31778[(2)]);
var inst_31769 = process.call(null,inst_31768);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31769)){
var statearr_31781_31939 = state_31778__$1;
(statearr_31781_31939[(1)] = (5));

} else {
var statearr_31782_31940 = state_31778__$1;
(statearr_31782_31940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (5))){
var state_31778__$1 = state_31778;
var statearr_31783_31941 = state_31778__$1;
(statearr_31783_31941[(2)] = null);

(statearr_31783_31941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (6))){
var state_31778__$1 = state_31778;
var statearr_31784_31942 = state_31778__$1;
(statearr_31784_31942[(2)] = null);

(statearr_31784_31942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (7))){
var inst_31774 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31785_31943 = state_31778__$1;
(statearr_31785_31943[(2)] = inst_31774);

(statearr_31785_31943[(1)] = (3));


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
});})(__31934,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
;
return ((function (__31934,switch__21719__auto__,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_31789 = [null,null,null,null,null,null,null];
(statearr_31789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__);

(statearr_31789[(1)] = (1));

return statearr_31789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1 = (function (state_31778){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31790){if((e31790 instanceof Object)){
var ex__21723__auto__ = e31790;
var statearr_31791_31944 = state_31778;
(statearr_31791_31944[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31945 = state_31778;
state_31778 = G__31945;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = function(state_31778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1.call(this,state_31778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__;
})()
;})(__31934,switch__21719__auto__,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_31792 = f__21832__auto__.call(null);
(statearr_31792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___31937);

return statearr_31792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(__31934,c__21831__auto___31937,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
);


break;
case "async":
var c__21831__auto___31946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31934,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (__31934,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function (state_31805){
var state_val_31806 = (state_31805[(1)]);
if((state_val_31806 === (1))){
var state_31805__$1 = state_31805;
var statearr_31807_31947 = state_31805__$1;
(statearr_31807_31947[(2)] = null);

(statearr_31807_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (2))){
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31805__$1,(4),jobs);
} else {
if((state_val_31806 === (3))){
var inst_31803 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31805__$1,inst_31803);
} else {
if((state_val_31806 === (4))){
var inst_31795 = (state_31805[(2)]);
var inst_31796 = async.call(null,inst_31795);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31796)){
var statearr_31808_31948 = state_31805__$1;
(statearr_31808_31948[(1)] = (5));

} else {
var statearr_31809_31949 = state_31805__$1;
(statearr_31809_31949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (5))){
var state_31805__$1 = state_31805;
var statearr_31810_31950 = state_31805__$1;
(statearr_31810_31950[(2)] = null);

(statearr_31810_31950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (6))){
var state_31805__$1 = state_31805;
var statearr_31811_31951 = state_31805__$1;
(statearr_31811_31951[(2)] = null);

(statearr_31811_31951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (7))){
var inst_31801 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31812_31952 = state_31805__$1;
(statearr_31812_31952[(2)] = inst_31801);

(statearr_31812_31952[(1)] = (3));


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
});})(__31934,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
;
return ((function (__31934,switch__21719__auto__,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_31816 = [null,null,null,null,null,null,null];
(statearr_31816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__);

(statearr_31816[(1)] = (1));

return statearr_31816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1 = (function (state_31805){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31817){if((e31817 instanceof Object)){
var ex__21723__auto__ = e31817;
var statearr_31818_31953 = state_31805;
(statearr_31818_31953[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31954 = state_31805;
state_31805 = G__31954;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = function(state_31805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1.call(this,state_31805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__;
})()
;})(__31934,switch__21719__auto__,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_31819 = f__21832__auto__.call(null);
(statearr_31819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___31946);

return statearr_31819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(__31934,c__21831__auto___31946,G__31765_31935,n__19374__auto___31933,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31955 = (__31934 + (1));
__31934 = G__31955;
continue;
} else {
}
break;
}

var c__21831__auto___31956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___31956,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___31956,jobs,results,process,async){
return (function (state_31841){
var state_val_31842 = (state_31841[(1)]);
if((state_val_31842 === (1))){
var state_31841__$1 = state_31841;
var statearr_31843_31957 = state_31841__$1;
(statearr_31843_31957[(2)] = null);

(statearr_31843_31957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (2))){
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31841__$1,(4),from);
} else {
if((state_val_31842 === (3))){
var inst_31839 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31841__$1,inst_31839);
} else {
if((state_val_31842 === (4))){
var inst_31822 = (state_31841[(7)]);
var inst_31822__$1 = (state_31841[(2)]);
var inst_31823 = (inst_31822__$1 == null);
var state_31841__$1 = (function (){var statearr_31844 = state_31841;
(statearr_31844[(7)] = inst_31822__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31823)){
var statearr_31845_31958 = state_31841__$1;
(statearr_31845_31958[(1)] = (5));

} else {
var statearr_31846_31959 = state_31841__$1;
(statearr_31846_31959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (5))){
var inst_31825 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31841__$1 = state_31841;
var statearr_31847_31960 = state_31841__$1;
(statearr_31847_31960[(2)] = inst_31825);

(statearr_31847_31960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (6))){
var inst_31822 = (state_31841[(7)]);
var inst_31827 = (state_31841[(8)]);
var inst_31827__$1 = cljs.core.async.chan.call(null,(1));
var inst_31828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31829 = [inst_31822,inst_31827__$1];
var inst_31830 = (new cljs.core.PersistentVector(null,2,(5),inst_31828,inst_31829,null));
var state_31841__$1 = (function (){var statearr_31848 = state_31841;
(statearr_31848[(8)] = inst_31827__$1);

return statearr_31848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31841__$1,(8),jobs,inst_31830);
} else {
if((state_val_31842 === (7))){
var inst_31837 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
var statearr_31849_31961 = state_31841__$1;
(statearr_31849_31961[(2)] = inst_31837);

(statearr_31849_31961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (8))){
var inst_31827 = (state_31841[(8)]);
var inst_31832 = (state_31841[(2)]);
var state_31841__$1 = (function (){var statearr_31850 = state_31841;
(statearr_31850[(9)] = inst_31832);

return statearr_31850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31841__$1,(9),results,inst_31827);
} else {
if((state_val_31842 === (9))){
var inst_31834 = (state_31841[(2)]);
var state_31841__$1 = (function (){var statearr_31851 = state_31841;
(statearr_31851[(10)] = inst_31834);

return statearr_31851;
})();
var statearr_31852_31962 = state_31841__$1;
(statearr_31852_31962[(2)] = null);

(statearr_31852_31962[(1)] = (2));


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
});})(c__21831__auto___31956,jobs,results,process,async))
;
return ((function (switch__21719__auto__,c__21831__auto___31956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_31856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__);

(statearr_31856[(1)] = (1));

return statearr_31856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1 = (function (state_31841){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31857){if((e31857 instanceof Object)){
var ex__21723__auto__ = e31857;
var statearr_31858_31963 = state_31841;
(statearr_31858_31963[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31964 = state_31841;
state_31841 = G__31964;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = function(state_31841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1.call(this,state_31841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___31956,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_31859 = f__21832__auto__.call(null);
(statearr_31859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___31956);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___31956,jobs,results,process,async))
);


var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__,jobs,results,process,async){
return (function (state_31897){
var state_val_31898 = (state_31897[(1)]);
if((state_val_31898 === (7))){
var inst_31893 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31899_31965 = state_31897__$1;
(statearr_31899_31965[(2)] = inst_31893);

(statearr_31899_31965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (20))){
var state_31897__$1 = state_31897;
var statearr_31900_31966 = state_31897__$1;
(statearr_31900_31966[(2)] = null);

(statearr_31900_31966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (1))){
var state_31897__$1 = state_31897;
var statearr_31901_31967 = state_31897__$1;
(statearr_31901_31967[(2)] = null);

(statearr_31901_31967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (4))){
var inst_31862 = (state_31897[(7)]);
var inst_31862__$1 = (state_31897[(2)]);
var inst_31863 = (inst_31862__$1 == null);
var state_31897__$1 = (function (){var statearr_31902 = state_31897;
(statearr_31902[(7)] = inst_31862__$1);

return statearr_31902;
})();
if(cljs.core.truth_(inst_31863)){
var statearr_31903_31968 = state_31897__$1;
(statearr_31903_31968[(1)] = (5));

} else {
var statearr_31904_31969 = state_31897__$1;
(statearr_31904_31969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (15))){
var inst_31875 = (state_31897[(8)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31897__$1,(18),to,inst_31875);
} else {
if((state_val_31898 === (21))){
var inst_31888 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31905_31970 = state_31897__$1;
(statearr_31905_31970[(2)] = inst_31888);

(statearr_31905_31970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (13))){
var inst_31890 = (state_31897[(2)]);
var state_31897__$1 = (function (){var statearr_31906 = state_31897;
(statearr_31906[(9)] = inst_31890);

return statearr_31906;
})();
var statearr_31907_31971 = state_31897__$1;
(statearr_31907_31971[(2)] = null);

(statearr_31907_31971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (6))){
var inst_31862 = (state_31897[(7)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31897__$1,(11),inst_31862);
} else {
if((state_val_31898 === (17))){
var inst_31883 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
if(cljs.core.truth_(inst_31883)){
var statearr_31908_31972 = state_31897__$1;
(statearr_31908_31972[(1)] = (19));

} else {
var statearr_31909_31973 = state_31897__$1;
(statearr_31909_31973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (3))){
var inst_31895 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31897__$1,inst_31895);
} else {
if((state_val_31898 === (12))){
var inst_31872 = (state_31897[(10)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31897__$1,(14),inst_31872);
} else {
if((state_val_31898 === (2))){
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31897__$1,(4),results);
} else {
if((state_val_31898 === (19))){
var state_31897__$1 = state_31897;
var statearr_31910_31974 = state_31897__$1;
(statearr_31910_31974[(2)] = null);

(statearr_31910_31974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (11))){
var inst_31872 = (state_31897[(2)]);
var state_31897__$1 = (function (){var statearr_31911 = state_31897;
(statearr_31911[(10)] = inst_31872);

return statearr_31911;
})();
var statearr_31912_31975 = state_31897__$1;
(statearr_31912_31975[(2)] = null);

(statearr_31912_31975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (9))){
var state_31897__$1 = state_31897;
var statearr_31913_31976 = state_31897__$1;
(statearr_31913_31976[(2)] = null);

(statearr_31913_31976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (5))){
var state_31897__$1 = state_31897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31914_31977 = state_31897__$1;
(statearr_31914_31977[(1)] = (8));

} else {
var statearr_31915_31978 = state_31897__$1;
(statearr_31915_31978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (14))){
var inst_31875 = (state_31897[(8)]);
var inst_31877 = (state_31897[(11)]);
var inst_31875__$1 = (state_31897[(2)]);
var inst_31876 = (inst_31875__$1 == null);
var inst_31877__$1 = cljs.core.not.call(null,inst_31876);
var state_31897__$1 = (function (){var statearr_31916 = state_31897;
(statearr_31916[(8)] = inst_31875__$1);

(statearr_31916[(11)] = inst_31877__$1);

return statearr_31916;
})();
if(inst_31877__$1){
var statearr_31917_31979 = state_31897__$1;
(statearr_31917_31979[(1)] = (15));

} else {
var statearr_31918_31980 = state_31897__$1;
(statearr_31918_31980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (16))){
var inst_31877 = (state_31897[(11)]);
var state_31897__$1 = state_31897;
var statearr_31919_31981 = state_31897__$1;
(statearr_31919_31981[(2)] = inst_31877);

(statearr_31919_31981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (10))){
var inst_31869 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31920_31982 = state_31897__$1;
(statearr_31920_31982[(2)] = inst_31869);

(statearr_31920_31982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (18))){
var inst_31880 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31921_31983 = state_31897__$1;
(statearr_31921_31983[(2)] = inst_31880);

(statearr_31921_31983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (8))){
var inst_31866 = cljs.core.async.close_BANG_.call(null,to);
var state_31897__$1 = state_31897;
var statearr_31922_31984 = state_31897__$1;
(statearr_31922_31984[(2)] = inst_31866);

(statearr_31922_31984[(1)] = (10));


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
});})(c__21831__auto__,jobs,results,process,async))
;
return ((function (switch__21719__auto__,c__21831__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_31926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__);

(statearr_31926[(1)] = (1));

return statearr_31926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1 = (function (state_31897){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_31897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e31927){if((e31927 instanceof Object)){
var ex__21723__auto__ = e31927;
var statearr_31928_31985 = state_31897;
(statearr_31928_31985[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31986 = state_31897;
state_31897 = G__31986;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__ = function(state_31897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1.call(this,state_31897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_31929 = f__21832__auto__.call(null);
(statearr_31929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,jobs,results,process,async))
);

return c__21831__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31987 = [];
var len__19529__auto___31990 = arguments.length;
var i__19530__auto___31991 = (0);
while(true){
if((i__19530__auto___31991 < len__19529__auto___31990)){
args31987.push((arguments[i__19530__auto___31991]));

var G__31992 = (i__19530__auto___31991 + (1));
i__19530__auto___31991 = G__31992;
continue;
} else {
}
break;
}

var G__31989 = args31987.length;
switch (G__31989) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31987.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31994 = [];
var len__19529__auto___31997 = arguments.length;
var i__19530__auto___31998 = (0);
while(true){
if((i__19530__auto___31998 < len__19529__auto___31997)){
args31994.push((arguments[i__19530__auto___31998]));

var G__31999 = (i__19530__auto___31998 + (1));
i__19530__auto___31998 = G__31999;
continue;
} else {
}
break;
}

var G__31996 = args31994.length;
switch (G__31996) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31994.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32001 = [];
var len__19529__auto___32054 = arguments.length;
var i__19530__auto___32055 = (0);
while(true){
if((i__19530__auto___32055 < len__19529__auto___32054)){
args32001.push((arguments[i__19530__auto___32055]));

var G__32056 = (i__19530__auto___32055 + (1));
i__19530__auto___32055 = G__32056;
continue;
} else {
}
break;
}

var G__32003 = args32001.length;
switch (G__32003) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32001.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21831__auto___32058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___32058,tc,fc){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___32058,tc,fc){
return (function (state_32029){
var state_val_32030 = (state_32029[(1)]);
if((state_val_32030 === (7))){
var inst_32025 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
var statearr_32031_32059 = state_32029__$1;
(statearr_32031_32059[(2)] = inst_32025);

(statearr_32031_32059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (1))){
var state_32029__$1 = state_32029;
var statearr_32032_32060 = state_32029__$1;
(statearr_32032_32060[(2)] = null);

(statearr_32032_32060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (4))){
var inst_32006 = (state_32029[(7)]);
var inst_32006__$1 = (state_32029[(2)]);
var inst_32007 = (inst_32006__$1 == null);
var state_32029__$1 = (function (){var statearr_32033 = state_32029;
(statearr_32033[(7)] = inst_32006__$1);

return statearr_32033;
})();
if(cljs.core.truth_(inst_32007)){
var statearr_32034_32061 = state_32029__$1;
(statearr_32034_32061[(1)] = (5));

} else {
var statearr_32035_32062 = state_32029__$1;
(statearr_32035_32062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (13))){
var state_32029__$1 = state_32029;
var statearr_32036_32063 = state_32029__$1;
(statearr_32036_32063[(2)] = null);

(statearr_32036_32063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (6))){
var inst_32006 = (state_32029[(7)]);
var inst_32012 = p.call(null,inst_32006);
var state_32029__$1 = state_32029;
if(cljs.core.truth_(inst_32012)){
var statearr_32037_32064 = state_32029__$1;
(statearr_32037_32064[(1)] = (9));

} else {
var statearr_32038_32065 = state_32029__$1;
(statearr_32038_32065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (3))){
var inst_32027 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32029__$1,inst_32027);
} else {
if((state_val_32030 === (12))){
var state_32029__$1 = state_32029;
var statearr_32039_32066 = state_32029__$1;
(statearr_32039_32066[(2)] = null);

(statearr_32039_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (2))){
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32029__$1,(4),ch);
} else {
if((state_val_32030 === (11))){
var inst_32006 = (state_32029[(7)]);
var inst_32016 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32029__$1,(8),inst_32016,inst_32006);
} else {
if((state_val_32030 === (9))){
var state_32029__$1 = state_32029;
var statearr_32040_32067 = state_32029__$1;
(statearr_32040_32067[(2)] = tc);

(statearr_32040_32067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (5))){
var inst_32009 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32010 = cljs.core.async.close_BANG_.call(null,fc);
var state_32029__$1 = (function (){var statearr_32041 = state_32029;
(statearr_32041[(8)] = inst_32009);

return statearr_32041;
})();
var statearr_32042_32068 = state_32029__$1;
(statearr_32042_32068[(2)] = inst_32010);

(statearr_32042_32068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (14))){
var inst_32023 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
var statearr_32043_32069 = state_32029__$1;
(statearr_32043_32069[(2)] = inst_32023);

(statearr_32043_32069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (10))){
var state_32029__$1 = state_32029;
var statearr_32044_32070 = state_32029__$1;
(statearr_32044_32070[(2)] = fc);

(statearr_32044_32070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32030 === (8))){
var inst_32018 = (state_32029[(2)]);
var state_32029__$1 = state_32029;
if(cljs.core.truth_(inst_32018)){
var statearr_32045_32071 = state_32029__$1;
(statearr_32045_32071[(1)] = (12));

} else {
var statearr_32046_32072 = state_32029__$1;
(statearr_32046_32072[(1)] = (13));

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
});})(c__21831__auto___32058,tc,fc))
;
return ((function (switch__21719__auto__,c__21831__auto___32058,tc,fc){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_32029){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_32029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e32051){if((e32051 instanceof Object)){
var ex__21723__auto__ = e32051;
var statearr_32052_32073 = state_32029;
(statearr_32052_32073[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32074 = state_32029;
state_32029 = G__32074;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_32029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_32029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___32058,tc,fc))
})();
var state__21833__auto__ = (function (){var statearr_32053 = f__21832__auto__.call(null);
(statearr_32053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___32058);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___32058,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_32138){
var state_val_32139 = (state_32138[(1)]);
if((state_val_32139 === (7))){
var inst_32134 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
var statearr_32140_32161 = state_32138__$1;
(statearr_32140_32161[(2)] = inst_32134);

(statearr_32140_32161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (1))){
var inst_32118 = init;
var state_32138__$1 = (function (){var statearr_32141 = state_32138;
(statearr_32141[(7)] = inst_32118);

return statearr_32141;
})();
var statearr_32142_32162 = state_32138__$1;
(statearr_32142_32162[(2)] = null);

(statearr_32142_32162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (4))){
var inst_32121 = (state_32138[(8)]);
var inst_32121__$1 = (state_32138[(2)]);
var inst_32122 = (inst_32121__$1 == null);
var state_32138__$1 = (function (){var statearr_32143 = state_32138;
(statearr_32143[(8)] = inst_32121__$1);

return statearr_32143;
})();
if(cljs.core.truth_(inst_32122)){
var statearr_32144_32163 = state_32138__$1;
(statearr_32144_32163[(1)] = (5));

} else {
var statearr_32145_32164 = state_32138__$1;
(statearr_32145_32164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (6))){
var inst_32121 = (state_32138[(8)]);
var inst_32118 = (state_32138[(7)]);
var inst_32125 = (state_32138[(9)]);
var inst_32125__$1 = f.call(null,inst_32118,inst_32121);
var inst_32126 = cljs.core.reduced_QMARK_.call(null,inst_32125__$1);
var state_32138__$1 = (function (){var statearr_32146 = state_32138;
(statearr_32146[(9)] = inst_32125__$1);

return statearr_32146;
})();
if(inst_32126){
var statearr_32147_32165 = state_32138__$1;
(statearr_32147_32165[(1)] = (8));

} else {
var statearr_32148_32166 = state_32138__$1;
(statearr_32148_32166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (3))){
var inst_32136 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32138__$1,inst_32136);
} else {
if((state_val_32139 === (2))){
var state_32138__$1 = state_32138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32138__$1,(4),ch);
} else {
if((state_val_32139 === (9))){
var inst_32125 = (state_32138[(9)]);
var inst_32118 = inst_32125;
var state_32138__$1 = (function (){var statearr_32149 = state_32138;
(statearr_32149[(7)] = inst_32118);

return statearr_32149;
})();
var statearr_32150_32167 = state_32138__$1;
(statearr_32150_32167[(2)] = null);

(statearr_32150_32167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (5))){
var inst_32118 = (state_32138[(7)]);
var state_32138__$1 = state_32138;
var statearr_32151_32168 = state_32138__$1;
(statearr_32151_32168[(2)] = inst_32118);

(statearr_32151_32168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (10))){
var inst_32132 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
var statearr_32152_32169 = state_32138__$1;
(statearr_32152_32169[(2)] = inst_32132);

(statearr_32152_32169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (8))){
var inst_32125 = (state_32138[(9)]);
var inst_32128 = cljs.core.deref.call(null,inst_32125);
var state_32138__$1 = state_32138;
var statearr_32153_32170 = state_32138__$1;
(statearr_32153_32170[(2)] = inst_32128);

(statearr_32153_32170[(1)] = (10));


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
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21720__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21720__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = cljs$core$async$reduce_$_state_machine__21720__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var cljs$core$async$reduce_$_state_machine__21720__auto____1 = (function (state_32138){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_32138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object)){
var ex__21723__auto__ = e32158;
var statearr_32159_32171 = state_32138;
(statearr_32159_32171[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32172 = state_32138;
state_32138 = G__32172;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21720__auto__ = function(state_32138){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21720__auto____1.call(this,state_32138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21720__auto____0;
cljs$core$async$reduce_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21720__auto____1;
return cljs$core$async$reduce_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_32160 = f__21832__auto__.call(null);
(statearr_32160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32173 = [];
var len__19529__auto___32225 = arguments.length;
var i__19530__auto___32226 = (0);
while(true){
if((i__19530__auto___32226 < len__19529__auto___32225)){
args32173.push((arguments[i__19530__auto___32226]));

var G__32227 = (i__19530__auto___32226 + (1));
i__19530__auto___32226 = G__32227;
continue;
} else {
}
break;
}

var G__32175 = args32173.length;
switch (G__32175) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32173.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_32200){
var state_val_32201 = (state_32200[(1)]);
if((state_val_32201 === (7))){
var inst_32182 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32202_32229 = state_32200__$1;
(statearr_32202_32229[(2)] = inst_32182);

(statearr_32202_32229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (1))){
var inst_32176 = cljs.core.seq.call(null,coll);
var inst_32177 = inst_32176;
var state_32200__$1 = (function (){var statearr_32203 = state_32200;
(statearr_32203[(7)] = inst_32177);

return statearr_32203;
})();
var statearr_32204_32230 = state_32200__$1;
(statearr_32204_32230[(2)] = null);

(statearr_32204_32230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (4))){
var inst_32177 = (state_32200[(7)]);
var inst_32180 = cljs.core.first.call(null,inst_32177);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32200__$1,(7),ch,inst_32180);
} else {
if((state_val_32201 === (13))){
var inst_32194 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32205_32231 = state_32200__$1;
(statearr_32205_32231[(2)] = inst_32194);

(statearr_32205_32231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (6))){
var inst_32185 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
if(cljs.core.truth_(inst_32185)){
var statearr_32206_32232 = state_32200__$1;
(statearr_32206_32232[(1)] = (8));

} else {
var statearr_32207_32233 = state_32200__$1;
(statearr_32207_32233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (3))){
var inst_32198 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32200__$1,inst_32198);
} else {
if((state_val_32201 === (12))){
var state_32200__$1 = state_32200;
var statearr_32208_32234 = state_32200__$1;
(statearr_32208_32234[(2)] = null);

(statearr_32208_32234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (2))){
var inst_32177 = (state_32200[(7)]);
var state_32200__$1 = state_32200;
if(cljs.core.truth_(inst_32177)){
var statearr_32209_32235 = state_32200__$1;
(statearr_32209_32235[(1)] = (4));

} else {
var statearr_32210_32236 = state_32200__$1;
(statearr_32210_32236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (11))){
var inst_32191 = cljs.core.async.close_BANG_.call(null,ch);
var state_32200__$1 = state_32200;
var statearr_32211_32237 = state_32200__$1;
(statearr_32211_32237[(2)] = inst_32191);

(statearr_32211_32237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (9))){
var state_32200__$1 = state_32200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32212_32238 = state_32200__$1;
(statearr_32212_32238[(1)] = (11));

} else {
var statearr_32213_32239 = state_32200__$1;
(statearr_32213_32239[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (5))){
var inst_32177 = (state_32200[(7)]);
var state_32200__$1 = state_32200;
var statearr_32214_32240 = state_32200__$1;
(statearr_32214_32240[(2)] = inst_32177);

(statearr_32214_32240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (10))){
var inst_32196 = (state_32200[(2)]);
var state_32200__$1 = state_32200;
var statearr_32215_32241 = state_32200__$1;
(statearr_32215_32241[(2)] = inst_32196);

(statearr_32215_32241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32201 === (8))){
var inst_32177 = (state_32200[(7)]);
var inst_32187 = cljs.core.next.call(null,inst_32177);
var inst_32177__$1 = inst_32187;
var state_32200__$1 = (function (){var statearr_32216 = state_32200;
(statearr_32216[(7)] = inst_32177__$1);

return statearr_32216;
})();
var statearr_32217_32242 = state_32200__$1;
(statearr_32217_32242[(2)] = null);

(statearr_32217_32242[(1)] = (2));


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
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_32200){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_32200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e32222){if((e32222 instanceof Object)){
var ex__21723__auto__ = e32222;
var statearr_32223_32243 = state_32200;
(statearr_32223_32243[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32244 = state_32200;
state_32200 = G__32244;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_32200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_32200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_32224 = f__21832__auto__.call(null);
(statearr_32224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19122__auto__ = (((_ == null))?null:_);
var m__19123__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,_);
} else {
var m__19123__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32466 = (function (mult,ch,cs,meta32467){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32467 = meta32467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32468,meta32467__$1){
var self__ = this;
var _32468__$1 = this;
return (new cljs.core.async.t_cljs$core$async32466(self__.mult,self__.ch,self__.cs,meta32467__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32468){
var self__ = this;
var _32468__$1 = this;
return self__.meta32467;
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32467","meta32467",-556738159,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32466";

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async32466");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32466 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32466(mult__$1,ch__$1,cs__$1,meta32467){
return (new cljs.core.async.t_cljs$core$async32466(mult__$1,ch__$1,cs__$1,meta32467));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32466(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21831__auto___32687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___32687,cs,m,dchan,dctr,done){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___32687,cs,m,dchan,dctr,done){
return (function (state_32599){
var state_val_32600 = (state_32599[(1)]);
if((state_val_32600 === (7))){
var inst_32595 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32601_32688 = state_32599__$1;
(statearr_32601_32688[(2)] = inst_32595);

(statearr_32601_32688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (20))){
var inst_32500 = (state_32599[(7)]);
var inst_32510 = cljs.core.first.call(null,inst_32500);
var inst_32511 = cljs.core.nth.call(null,inst_32510,(0),null);
var inst_32512 = cljs.core.nth.call(null,inst_32510,(1),null);
var state_32599__$1 = (function (){var statearr_32602 = state_32599;
(statearr_32602[(8)] = inst_32511);

return statearr_32602;
})();
if(cljs.core.truth_(inst_32512)){
var statearr_32603_32689 = state_32599__$1;
(statearr_32603_32689[(1)] = (22));

} else {
var statearr_32604_32690 = state_32599__$1;
(statearr_32604_32690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (27))){
var inst_32540 = (state_32599[(9)]);
var inst_32542 = (state_32599[(10)]);
var inst_32471 = (state_32599[(11)]);
var inst_32547 = (state_32599[(12)]);
var inst_32547__$1 = cljs.core._nth.call(null,inst_32540,inst_32542);
var inst_32548 = cljs.core.async.put_BANG_.call(null,inst_32547__$1,inst_32471,done);
var state_32599__$1 = (function (){var statearr_32605 = state_32599;
(statearr_32605[(12)] = inst_32547__$1);

return statearr_32605;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32606_32691 = state_32599__$1;
(statearr_32606_32691[(1)] = (30));

} else {
var statearr_32607_32692 = state_32599__$1;
(statearr_32607_32692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (1))){
var state_32599__$1 = state_32599;
var statearr_32608_32693 = state_32599__$1;
(statearr_32608_32693[(2)] = null);

(statearr_32608_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (24))){
var inst_32500 = (state_32599[(7)]);
var inst_32517 = (state_32599[(2)]);
var inst_32518 = cljs.core.next.call(null,inst_32500);
var inst_32480 = inst_32518;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32599__$1 = (function (){var statearr_32609 = state_32599;
(statearr_32609[(13)] = inst_32517);

(statearr_32609[(14)] = inst_32483);

(statearr_32609[(15)] = inst_32482);

(statearr_32609[(16)] = inst_32480);

(statearr_32609[(17)] = inst_32481);

return statearr_32609;
})();
var statearr_32610_32694 = state_32599__$1;
(statearr_32610_32694[(2)] = null);

(statearr_32610_32694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (39))){
var state_32599__$1 = state_32599;
var statearr_32614_32695 = state_32599__$1;
(statearr_32614_32695[(2)] = null);

(statearr_32614_32695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (4))){
var inst_32471 = (state_32599[(11)]);
var inst_32471__$1 = (state_32599[(2)]);
var inst_32472 = (inst_32471__$1 == null);
var state_32599__$1 = (function (){var statearr_32615 = state_32599;
(statearr_32615[(11)] = inst_32471__$1);

return statearr_32615;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32616_32696 = state_32599__$1;
(statearr_32616_32696[(1)] = (5));

} else {
var statearr_32617_32697 = state_32599__$1;
(statearr_32617_32697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (15))){
var inst_32483 = (state_32599[(14)]);
var inst_32482 = (state_32599[(15)]);
var inst_32480 = (state_32599[(16)]);
var inst_32481 = (state_32599[(17)]);
var inst_32496 = (state_32599[(2)]);
var inst_32497 = (inst_32483 + (1));
var tmp32611 = inst_32482;
var tmp32612 = inst_32480;
var tmp32613 = inst_32481;
var inst_32480__$1 = tmp32612;
var inst_32481__$1 = tmp32613;
var inst_32482__$1 = tmp32611;
var inst_32483__$1 = inst_32497;
var state_32599__$1 = (function (){var statearr_32618 = state_32599;
(statearr_32618[(14)] = inst_32483__$1);

(statearr_32618[(18)] = inst_32496);

(statearr_32618[(15)] = inst_32482__$1);

(statearr_32618[(16)] = inst_32480__$1);

(statearr_32618[(17)] = inst_32481__$1);

return statearr_32618;
})();
var statearr_32619_32698 = state_32599__$1;
(statearr_32619_32698[(2)] = null);

(statearr_32619_32698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (21))){
var inst_32521 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32623_32699 = state_32599__$1;
(statearr_32623_32699[(2)] = inst_32521);

(statearr_32623_32699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (31))){
var inst_32547 = (state_32599[(12)]);
var inst_32551 = done.call(null,null);
var inst_32552 = cljs.core.async.untap_STAR_.call(null,m,inst_32547);
var state_32599__$1 = (function (){var statearr_32624 = state_32599;
(statearr_32624[(19)] = inst_32551);

return statearr_32624;
})();
var statearr_32625_32700 = state_32599__$1;
(statearr_32625_32700[(2)] = inst_32552);

(statearr_32625_32700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (32))){
var inst_32540 = (state_32599[(9)]);
var inst_32539 = (state_32599[(20)]);
var inst_32542 = (state_32599[(10)]);
var inst_32541 = (state_32599[(21)]);
var inst_32554 = (state_32599[(2)]);
var inst_32555 = (inst_32542 + (1));
var tmp32620 = inst_32540;
var tmp32621 = inst_32539;
var tmp32622 = inst_32541;
var inst_32539__$1 = tmp32621;
var inst_32540__$1 = tmp32620;
var inst_32541__$1 = tmp32622;
var inst_32542__$1 = inst_32555;
var state_32599__$1 = (function (){var statearr_32626 = state_32599;
(statearr_32626[(9)] = inst_32540__$1);

(statearr_32626[(20)] = inst_32539__$1);

(statearr_32626[(10)] = inst_32542__$1);

(statearr_32626[(21)] = inst_32541__$1);

(statearr_32626[(22)] = inst_32554);

return statearr_32626;
})();
var statearr_32627_32701 = state_32599__$1;
(statearr_32627_32701[(2)] = null);

(statearr_32627_32701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (40))){
var inst_32567 = (state_32599[(23)]);
var inst_32571 = done.call(null,null);
var inst_32572 = cljs.core.async.untap_STAR_.call(null,m,inst_32567);
var state_32599__$1 = (function (){var statearr_32628 = state_32599;
(statearr_32628[(24)] = inst_32571);

return statearr_32628;
})();
var statearr_32629_32702 = state_32599__$1;
(statearr_32629_32702[(2)] = inst_32572);

(statearr_32629_32702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (33))){
var inst_32558 = (state_32599[(25)]);
var inst_32560 = cljs.core.chunked_seq_QMARK_.call(null,inst_32558);
var state_32599__$1 = state_32599;
if(inst_32560){
var statearr_32630_32703 = state_32599__$1;
(statearr_32630_32703[(1)] = (36));

} else {
var statearr_32631_32704 = state_32599__$1;
(statearr_32631_32704[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (13))){
var inst_32490 = (state_32599[(26)]);
var inst_32493 = cljs.core.async.close_BANG_.call(null,inst_32490);
var state_32599__$1 = state_32599;
var statearr_32632_32705 = state_32599__$1;
(statearr_32632_32705[(2)] = inst_32493);

(statearr_32632_32705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (22))){
var inst_32511 = (state_32599[(8)]);
var inst_32514 = cljs.core.async.close_BANG_.call(null,inst_32511);
var state_32599__$1 = state_32599;
var statearr_32633_32706 = state_32599__$1;
(statearr_32633_32706[(2)] = inst_32514);

(statearr_32633_32706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (36))){
var inst_32558 = (state_32599[(25)]);
var inst_32562 = cljs.core.chunk_first.call(null,inst_32558);
var inst_32563 = cljs.core.chunk_rest.call(null,inst_32558);
var inst_32564 = cljs.core.count.call(null,inst_32562);
var inst_32539 = inst_32563;
var inst_32540 = inst_32562;
var inst_32541 = inst_32564;
var inst_32542 = (0);
var state_32599__$1 = (function (){var statearr_32634 = state_32599;
(statearr_32634[(9)] = inst_32540);

(statearr_32634[(20)] = inst_32539);

(statearr_32634[(10)] = inst_32542);

(statearr_32634[(21)] = inst_32541);

return statearr_32634;
})();
var statearr_32635_32707 = state_32599__$1;
(statearr_32635_32707[(2)] = null);

(statearr_32635_32707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (41))){
var inst_32558 = (state_32599[(25)]);
var inst_32574 = (state_32599[(2)]);
var inst_32575 = cljs.core.next.call(null,inst_32558);
var inst_32539 = inst_32575;
var inst_32540 = null;
var inst_32541 = (0);
var inst_32542 = (0);
var state_32599__$1 = (function (){var statearr_32636 = state_32599;
(statearr_32636[(9)] = inst_32540);

(statearr_32636[(20)] = inst_32539);

(statearr_32636[(10)] = inst_32542);

(statearr_32636[(21)] = inst_32541);

(statearr_32636[(27)] = inst_32574);

return statearr_32636;
})();
var statearr_32637_32708 = state_32599__$1;
(statearr_32637_32708[(2)] = null);

(statearr_32637_32708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (43))){
var state_32599__$1 = state_32599;
var statearr_32638_32709 = state_32599__$1;
(statearr_32638_32709[(2)] = null);

(statearr_32638_32709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (29))){
var inst_32583 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32639_32710 = state_32599__$1;
(statearr_32639_32710[(2)] = inst_32583);

(statearr_32639_32710[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (44))){
var inst_32592 = (state_32599[(2)]);
var state_32599__$1 = (function (){var statearr_32640 = state_32599;
(statearr_32640[(28)] = inst_32592);

return statearr_32640;
})();
var statearr_32641_32711 = state_32599__$1;
(statearr_32641_32711[(2)] = null);

(statearr_32641_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (6))){
var inst_32531 = (state_32599[(29)]);
var inst_32530 = cljs.core.deref.call(null,cs);
var inst_32531__$1 = cljs.core.keys.call(null,inst_32530);
var inst_32532 = cljs.core.count.call(null,inst_32531__$1);
var inst_32533 = cljs.core.reset_BANG_.call(null,dctr,inst_32532);
var inst_32538 = cljs.core.seq.call(null,inst_32531__$1);
var inst_32539 = inst_32538;
var inst_32540 = null;
var inst_32541 = (0);
var inst_32542 = (0);
var state_32599__$1 = (function (){var statearr_32642 = state_32599;
(statearr_32642[(9)] = inst_32540);

(statearr_32642[(20)] = inst_32539);

(statearr_32642[(30)] = inst_32533);

(statearr_32642[(10)] = inst_32542);

(statearr_32642[(21)] = inst_32541);

(statearr_32642[(29)] = inst_32531__$1);

return statearr_32642;
})();
var statearr_32643_32712 = state_32599__$1;
(statearr_32643_32712[(2)] = null);

(statearr_32643_32712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (28))){
var inst_32539 = (state_32599[(20)]);
var inst_32558 = (state_32599[(25)]);
var inst_32558__$1 = cljs.core.seq.call(null,inst_32539);
var state_32599__$1 = (function (){var statearr_32644 = state_32599;
(statearr_32644[(25)] = inst_32558__$1);

return statearr_32644;
})();
if(inst_32558__$1){
var statearr_32645_32713 = state_32599__$1;
(statearr_32645_32713[(1)] = (33));

} else {
var statearr_32646_32714 = state_32599__$1;
(statearr_32646_32714[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (25))){
var inst_32542 = (state_32599[(10)]);
var inst_32541 = (state_32599[(21)]);
var inst_32544 = (inst_32542 < inst_32541);
var inst_32545 = inst_32544;
var state_32599__$1 = state_32599;
if(cljs.core.truth_(inst_32545)){
var statearr_32647_32715 = state_32599__$1;
(statearr_32647_32715[(1)] = (27));

} else {
var statearr_32648_32716 = state_32599__$1;
(statearr_32648_32716[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (34))){
var state_32599__$1 = state_32599;
var statearr_32649_32717 = state_32599__$1;
(statearr_32649_32717[(2)] = null);

(statearr_32649_32717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (17))){
var state_32599__$1 = state_32599;
var statearr_32650_32718 = state_32599__$1;
(statearr_32650_32718[(2)] = null);

(statearr_32650_32718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (3))){
var inst_32597 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32599__$1,inst_32597);
} else {
if((state_val_32600 === (12))){
var inst_32526 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32651_32719 = state_32599__$1;
(statearr_32651_32719[(2)] = inst_32526);

(statearr_32651_32719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (2))){
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32599__$1,(4),ch);
} else {
if((state_val_32600 === (23))){
var state_32599__$1 = state_32599;
var statearr_32652_32720 = state_32599__$1;
(statearr_32652_32720[(2)] = null);

(statearr_32652_32720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (35))){
var inst_32581 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32653_32721 = state_32599__$1;
(statearr_32653_32721[(2)] = inst_32581);

(statearr_32653_32721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (19))){
var inst_32500 = (state_32599[(7)]);
var inst_32504 = cljs.core.chunk_first.call(null,inst_32500);
var inst_32505 = cljs.core.chunk_rest.call(null,inst_32500);
var inst_32506 = cljs.core.count.call(null,inst_32504);
var inst_32480 = inst_32505;
var inst_32481 = inst_32504;
var inst_32482 = inst_32506;
var inst_32483 = (0);
var state_32599__$1 = (function (){var statearr_32654 = state_32599;
(statearr_32654[(14)] = inst_32483);

(statearr_32654[(15)] = inst_32482);

(statearr_32654[(16)] = inst_32480);

(statearr_32654[(17)] = inst_32481);

return statearr_32654;
})();
var statearr_32655_32722 = state_32599__$1;
(statearr_32655_32722[(2)] = null);

(statearr_32655_32722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (11))){
var inst_32500 = (state_32599[(7)]);
var inst_32480 = (state_32599[(16)]);
var inst_32500__$1 = cljs.core.seq.call(null,inst_32480);
var state_32599__$1 = (function (){var statearr_32656 = state_32599;
(statearr_32656[(7)] = inst_32500__$1);

return statearr_32656;
})();
if(inst_32500__$1){
var statearr_32657_32723 = state_32599__$1;
(statearr_32657_32723[(1)] = (16));

} else {
var statearr_32658_32724 = state_32599__$1;
(statearr_32658_32724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (9))){
var inst_32528 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32659_32725 = state_32599__$1;
(statearr_32659_32725[(2)] = inst_32528);

(statearr_32659_32725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (5))){
var inst_32478 = cljs.core.deref.call(null,cs);
var inst_32479 = cljs.core.seq.call(null,inst_32478);
var inst_32480 = inst_32479;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32599__$1 = (function (){var statearr_32660 = state_32599;
(statearr_32660[(14)] = inst_32483);

(statearr_32660[(15)] = inst_32482);

(statearr_32660[(16)] = inst_32480);

(statearr_32660[(17)] = inst_32481);

return statearr_32660;
})();
var statearr_32661_32726 = state_32599__$1;
(statearr_32661_32726[(2)] = null);

(statearr_32661_32726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (14))){
var state_32599__$1 = state_32599;
var statearr_32662_32727 = state_32599__$1;
(statearr_32662_32727[(2)] = null);

(statearr_32662_32727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (45))){
var inst_32589 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32663_32728 = state_32599__$1;
(statearr_32663_32728[(2)] = inst_32589);

(statearr_32663_32728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (26))){
var inst_32531 = (state_32599[(29)]);
var inst_32585 = (state_32599[(2)]);
var inst_32586 = cljs.core.seq.call(null,inst_32531);
var state_32599__$1 = (function (){var statearr_32664 = state_32599;
(statearr_32664[(31)] = inst_32585);

return statearr_32664;
})();
if(inst_32586){
var statearr_32665_32729 = state_32599__$1;
(statearr_32665_32729[(1)] = (42));

} else {
var statearr_32666_32730 = state_32599__$1;
(statearr_32666_32730[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (16))){
var inst_32500 = (state_32599[(7)]);
var inst_32502 = cljs.core.chunked_seq_QMARK_.call(null,inst_32500);
var state_32599__$1 = state_32599;
if(inst_32502){
var statearr_32667_32731 = state_32599__$1;
(statearr_32667_32731[(1)] = (19));

} else {
var statearr_32668_32732 = state_32599__$1;
(statearr_32668_32732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (38))){
var inst_32578 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32669_32733 = state_32599__$1;
(statearr_32669_32733[(2)] = inst_32578);

(statearr_32669_32733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (30))){
var state_32599__$1 = state_32599;
var statearr_32670_32734 = state_32599__$1;
(statearr_32670_32734[(2)] = null);

(statearr_32670_32734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (10))){
var inst_32483 = (state_32599[(14)]);
var inst_32481 = (state_32599[(17)]);
var inst_32489 = cljs.core._nth.call(null,inst_32481,inst_32483);
var inst_32490 = cljs.core.nth.call(null,inst_32489,(0),null);
var inst_32491 = cljs.core.nth.call(null,inst_32489,(1),null);
var state_32599__$1 = (function (){var statearr_32671 = state_32599;
(statearr_32671[(26)] = inst_32490);

return statearr_32671;
})();
if(cljs.core.truth_(inst_32491)){
var statearr_32672_32735 = state_32599__$1;
(statearr_32672_32735[(1)] = (13));

} else {
var statearr_32673_32736 = state_32599__$1;
(statearr_32673_32736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (18))){
var inst_32524 = (state_32599[(2)]);
var state_32599__$1 = state_32599;
var statearr_32674_32737 = state_32599__$1;
(statearr_32674_32737[(2)] = inst_32524);

(statearr_32674_32737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (42))){
var state_32599__$1 = state_32599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32599__$1,(45),dchan);
} else {
if((state_val_32600 === (37))){
var inst_32471 = (state_32599[(11)]);
var inst_32567 = (state_32599[(23)]);
var inst_32558 = (state_32599[(25)]);
var inst_32567__$1 = cljs.core.first.call(null,inst_32558);
var inst_32568 = cljs.core.async.put_BANG_.call(null,inst_32567__$1,inst_32471,done);
var state_32599__$1 = (function (){var statearr_32675 = state_32599;
(statearr_32675[(23)] = inst_32567__$1);

return statearr_32675;
})();
if(cljs.core.truth_(inst_32568)){
var statearr_32676_32738 = state_32599__$1;
(statearr_32676_32738[(1)] = (39));

} else {
var statearr_32677_32739 = state_32599__$1;
(statearr_32677_32739[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32600 === (8))){
var inst_32483 = (state_32599[(14)]);
var inst_32482 = (state_32599[(15)]);
var inst_32485 = (inst_32483 < inst_32482);
var inst_32486 = inst_32485;
var state_32599__$1 = state_32599;
if(cljs.core.truth_(inst_32486)){
var statearr_32678_32740 = state_32599__$1;
(statearr_32678_32740[(1)] = (10));

} else {
var statearr_32679_32741 = state_32599__$1;
(statearr_32679_32741[(1)] = (11));

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
});})(c__21831__auto___32687,cs,m,dchan,dctr,done))
;
return ((function (switch__21719__auto__,c__21831__auto___32687,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21720__auto__ = null;
var cljs$core$async$mult_$_state_machine__21720__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$mult_$_state_machine__21720__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$mult_$_state_machine__21720__auto____1 = (function (state_32599){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_32599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e32684){if((e32684 instanceof Object)){
var ex__21723__auto__ = e32684;
var statearr_32685_32742 = state_32599;
(statearr_32685_32742[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32743 = state_32599;
state_32599 = G__32743;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21720__auto__ = function(state_32599){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21720__auto____1.call(this,state_32599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21720__auto____0;
cljs$core$async$mult_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21720__auto____1;
return cljs$core$async$mult_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___32687,cs,m,dchan,dctr,done))
})();
var state__21833__auto__ = (function (){var statearr_32686 = f__21832__auto__.call(null);
(statearr_32686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___32687);

return statearr_32686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___32687,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32744 = [];
var len__19529__auto___32747 = arguments.length;
var i__19530__auto___32748 = (0);
while(true){
if((i__19530__auto___32748 < len__19529__auto___32747)){
args32744.push((arguments[i__19530__auto___32748]));

var G__32749 = (i__19530__auto___32748 + (1));
i__19530__auto___32748 = G__32749;
continue;
} else {
}
break;
}

var G__32746 = args32744.length;
switch (G__32746) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32744.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,state_map);
} else {
var m__19123__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,mode);
} else {
var m__19123__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___32761 = arguments.length;
var i__19530__auto___32762 = (0);
while(true){
if((i__19530__auto___32762 < len__19529__auto___32761)){
args__19536__auto__.push((arguments[i__19530__auto___32762]));

var G__32763 = (i__19530__auto___32762 + (1));
i__19530__auto___32762 = G__32763;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32755){
var map__32756 = p__32755;
var map__32756__$1 = ((((!((map__32756 == null)))?((((map__32756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);
var opts = map__32756__$1;
var statearr_32758_32764 = state;
(statearr_32758_32764[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32756,map__32756__$1,opts){
return (function (val){
var statearr_32759_32765 = state;
(statearr_32759_32765[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32756,map__32756__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32760_32766 = state;
(statearr_32760_32766[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32751){
var G__32752 = cljs.core.first.call(null,seq32751);
var seq32751__$1 = cljs.core.next.call(null,seq32751);
var G__32753 = cljs.core.first.call(null,seq32751__$1);
var seq32751__$2 = cljs.core.next.call(null,seq32751__$1);
var G__32754 = cljs.core.first.call(null,seq32751__$2);
var seq32751__$3 = cljs.core.next.call(null,seq32751__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32752,G__32753,G__32754,seq32751__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32930 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32931){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32931 = meta32931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32932,meta32931__$1){
var self__ = this;
var _32932__$1 = this;
return (new cljs.core.async.t_cljs$core$async32930(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32932){
var self__ = this;
var _32932__$1 = this;
return self__.meta32931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32931","meta32931",-1767650568,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32930";

cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async32930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32931){
return (new cljs.core.async.t_cljs$core$async32930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32930(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21831__auto___33093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (7))){
var inst_32948 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33032_33094 = state_33030__$1;
(statearr_33032_33094[(2)] = inst_32948);

(statearr_33032_33094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (20))){
var inst_32960 = (state_33030[(7)]);
var state_33030__$1 = state_33030;
var statearr_33033_33095 = state_33030__$1;
(statearr_33033_33095[(2)] = inst_32960);

(statearr_33033_33095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (27))){
var state_33030__$1 = state_33030;
var statearr_33034_33096 = state_33030__$1;
(statearr_33034_33096[(2)] = null);

(statearr_33034_33096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (1))){
var inst_32936 = (state_33030[(8)]);
var inst_32936__$1 = calc_state.call(null);
var inst_32938 = (inst_32936__$1 == null);
var inst_32939 = cljs.core.not.call(null,inst_32938);
var state_33030__$1 = (function (){var statearr_33035 = state_33030;
(statearr_33035[(8)] = inst_32936__$1);

return statearr_33035;
})();
if(inst_32939){
var statearr_33036_33097 = state_33030__$1;
(statearr_33036_33097[(1)] = (2));

} else {
var statearr_33037_33098 = state_33030__$1;
(statearr_33037_33098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (24))){
var inst_33004 = (state_33030[(9)]);
var inst_32990 = (state_33030[(10)]);
var inst_32983 = (state_33030[(11)]);
var inst_33004__$1 = inst_32983.call(null,inst_32990);
var state_33030__$1 = (function (){var statearr_33038 = state_33030;
(statearr_33038[(9)] = inst_33004__$1);

return statearr_33038;
})();
if(cljs.core.truth_(inst_33004__$1)){
var statearr_33039_33099 = state_33030__$1;
(statearr_33039_33099[(1)] = (29));

} else {
var statearr_33040_33100 = state_33030__$1;
(statearr_33040_33100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (4))){
var inst_32951 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32951)){
var statearr_33041_33101 = state_33030__$1;
(statearr_33041_33101[(1)] = (8));

} else {
var statearr_33042_33102 = state_33030__$1;
(statearr_33042_33102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (15))){
var inst_32977 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32977)){
var statearr_33043_33103 = state_33030__$1;
(statearr_33043_33103[(1)] = (19));

} else {
var statearr_33044_33104 = state_33030__$1;
(statearr_33044_33104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (21))){
var inst_32982 = (state_33030[(12)]);
var inst_32982__$1 = (state_33030[(2)]);
var inst_32983 = cljs.core.get.call(null,inst_32982__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32984 = cljs.core.get.call(null,inst_32982__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32985 = cljs.core.get.call(null,inst_32982__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33030__$1 = (function (){var statearr_33045 = state_33030;
(statearr_33045[(12)] = inst_32982__$1);

(statearr_33045[(13)] = inst_32984);

(statearr_33045[(11)] = inst_32983);

return statearr_33045;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33030__$1,(22),inst_32985);
} else {
if((state_val_33031 === (31))){
var inst_33012 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33012)){
var statearr_33046_33105 = state_33030__$1;
(statearr_33046_33105[(1)] = (32));

} else {
var statearr_33047_33106 = state_33030__$1;
(statearr_33047_33106[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (32))){
var inst_32989 = (state_33030[(14)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33030__$1,(35),out,inst_32989);
} else {
if((state_val_33031 === (33))){
var inst_32982 = (state_33030[(12)]);
var inst_32960 = inst_32982;
var state_33030__$1 = (function (){var statearr_33048 = state_33030;
(statearr_33048[(7)] = inst_32960);

return statearr_33048;
})();
var statearr_33049_33107 = state_33030__$1;
(statearr_33049_33107[(2)] = null);

(statearr_33049_33107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (13))){
var inst_32960 = (state_33030[(7)]);
var inst_32967 = inst_32960.cljs$lang$protocol_mask$partition0$;
var inst_32968 = (inst_32967 & (64));
var inst_32969 = inst_32960.cljs$core$ISeq$;
var inst_32970 = (inst_32968) || (inst_32969);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32970)){
var statearr_33050_33108 = state_33030__$1;
(statearr_33050_33108[(1)] = (16));

} else {
var statearr_33051_33109 = state_33030__$1;
(statearr_33051_33109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (22))){
var inst_32989 = (state_33030[(14)]);
var inst_32990 = (state_33030[(10)]);
var inst_32988 = (state_33030[(2)]);
var inst_32989__$1 = cljs.core.nth.call(null,inst_32988,(0),null);
var inst_32990__$1 = cljs.core.nth.call(null,inst_32988,(1),null);
var inst_32991 = (inst_32989__$1 == null);
var inst_32992 = cljs.core._EQ_.call(null,inst_32990__$1,change);
var inst_32993 = (inst_32991) || (inst_32992);
var state_33030__$1 = (function (){var statearr_33052 = state_33030;
(statearr_33052[(14)] = inst_32989__$1);

(statearr_33052[(10)] = inst_32990__$1);

return statearr_33052;
})();
if(cljs.core.truth_(inst_32993)){
var statearr_33053_33110 = state_33030__$1;
(statearr_33053_33110[(1)] = (23));

} else {
var statearr_33054_33111 = state_33030__$1;
(statearr_33054_33111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (36))){
var inst_32982 = (state_33030[(12)]);
var inst_32960 = inst_32982;
var state_33030__$1 = (function (){var statearr_33055 = state_33030;
(statearr_33055[(7)] = inst_32960);

return statearr_33055;
})();
var statearr_33056_33112 = state_33030__$1;
(statearr_33056_33112[(2)] = null);

(statearr_33056_33112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (29))){
var inst_33004 = (state_33030[(9)]);
var state_33030__$1 = state_33030;
var statearr_33057_33113 = state_33030__$1;
(statearr_33057_33113[(2)] = inst_33004);

(statearr_33057_33113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (6))){
var state_33030__$1 = state_33030;
var statearr_33058_33114 = state_33030__$1;
(statearr_33058_33114[(2)] = false);

(statearr_33058_33114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (28))){
var inst_33000 = (state_33030[(2)]);
var inst_33001 = calc_state.call(null);
var inst_32960 = inst_33001;
var state_33030__$1 = (function (){var statearr_33059 = state_33030;
(statearr_33059[(7)] = inst_32960);

(statearr_33059[(15)] = inst_33000);

return statearr_33059;
})();
var statearr_33060_33115 = state_33030__$1;
(statearr_33060_33115[(2)] = null);

(statearr_33060_33115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (25))){
var inst_33026 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33061_33116 = state_33030__$1;
(statearr_33061_33116[(2)] = inst_33026);

(statearr_33061_33116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (34))){
var inst_33024 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33062_33117 = state_33030__$1;
(statearr_33062_33117[(2)] = inst_33024);

(statearr_33062_33117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (17))){
var state_33030__$1 = state_33030;
var statearr_33063_33118 = state_33030__$1;
(statearr_33063_33118[(2)] = false);

(statearr_33063_33118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (3))){
var state_33030__$1 = state_33030;
var statearr_33064_33119 = state_33030__$1;
(statearr_33064_33119[(2)] = false);

(statearr_33064_33119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (12))){
var inst_33028 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33030__$1,inst_33028);
} else {
if((state_val_33031 === (2))){
var inst_32936 = (state_33030[(8)]);
var inst_32941 = inst_32936.cljs$lang$protocol_mask$partition0$;
var inst_32942 = (inst_32941 & (64));
var inst_32943 = inst_32936.cljs$core$ISeq$;
var inst_32944 = (inst_32942) || (inst_32943);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32944)){
var statearr_33065_33120 = state_33030__$1;
(statearr_33065_33120[(1)] = (5));

} else {
var statearr_33066_33121 = state_33030__$1;
(statearr_33066_33121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (23))){
var inst_32989 = (state_33030[(14)]);
var inst_32995 = (inst_32989 == null);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_32995)){
var statearr_33067_33122 = state_33030__$1;
(statearr_33067_33122[(1)] = (26));

} else {
var statearr_33068_33123 = state_33030__$1;
(statearr_33068_33123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (35))){
var inst_33015 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33015)){
var statearr_33069_33124 = state_33030__$1;
(statearr_33069_33124[(1)] = (36));

} else {
var statearr_33070_33125 = state_33030__$1;
(statearr_33070_33125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (19))){
var inst_32960 = (state_33030[(7)]);
var inst_32979 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32960);
var state_33030__$1 = state_33030;
var statearr_33071_33126 = state_33030__$1;
(statearr_33071_33126[(2)] = inst_32979);

(statearr_33071_33126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (11))){
var inst_32960 = (state_33030[(7)]);
var inst_32964 = (inst_32960 == null);
var inst_32965 = cljs.core.not.call(null,inst_32964);
var state_33030__$1 = state_33030;
if(inst_32965){
var statearr_33072_33127 = state_33030__$1;
(statearr_33072_33127[(1)] = (13));

} else {
var statearr_33073_33128 = state_33030__$1;
(statearr_33073_33128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (9))){
var inst_32936 = (state_33030[(8)]);
var state_33030__$1 = state_33030;
var statearr_33074_33129 = state_33030__$1;
(statearr_33074_33129[(2)] = inst_32936);

(statearr_33074_33129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (5))){
var state_33030__$1 = state_33030;
var statearr_33075_33130 = state_33030__$1;
(statearr_33075_33130[(2)] = true);

(statearr_33075_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (14))){
var state_33030__$1 = state_33030;
var statearr_33076_33131 = state_33030__$1;
(statearr_33076_33131[(2)] = false);

(statearr_33076_33131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (26))){
var inst_32990 = (state_33030[(10)]);
var inst_32997 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32990);
var state_33030__$1 = state_33030;
var statearr_33077_33132 = state_33030__$1;
(statearr_33077_33132[(2)] = inst_32997);

(statearr_33077_33132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (16))){
var state_33030__$1 = state_33030;
var statearr_33078_33133 = state_33030__$1;
(statearr_33078_33133[(2)] = true);

(statearr_33078_33133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (38))){
var inst_33020 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33079_33134 = state_33030__$1;
(statearr_33079_33134[(2)] = inst_33020);

(statearr_33079_33134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (30))){
var inst_32984 = (state_33030[(13)]);
var inst_32990 = (state_33030[(10)]);
var inst_32983 = (state_33030[(11)]);
var inst_33007 = cljs.core.empty_QMARK_.call(null,inst_32983);
var inst_33008 = inst_32984.call(null,inst_32990);
var inst_33009 = cljs.core.not.call(null,inst_33008);
var inst_33010 = (inst_33007) && (inst_33009);
var state_33030__$1 = state_33030;
var statearr_33080_33135 = state_33030__$1;
(statearr_33080_33135[(2)] = inst_33010);

(statearr_33080_33135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (10))){
var inst_32936 = (state_33030[(8)]);
var inst_32956 = (state_33030[(2)]);
var inst_32957 = cljs.core.get.call(null,inst_32956,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32958 = cljs.core.get.call(null,inst_32956,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32959 = cljs.core.get.call(null,inst_32956,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32960 = inst_32936;
var state_33030__$1 = (function (){var statearr_33081 = state_33030;
(statearr_33081[(16)] = inst_32957);

(statearr_33081[(17)] = inst_32959);

(statearr_33081[(18)] = inst_32958);

(statearr_33081[(7)] = inst_32960);

return statearr_33081;
})();
var statearr_33082_33136 = state_33030__$1;
(statearr_33082_33136[(2)] = null);

(statearr_33082_33136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (18))){
var inst_32974 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33083_33137 = state_33030__$1;
(statearr_33083_33137[(2)] = inst_32974);

(statearr_33083_33137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (37))){
var state_33030__$1 = state_33030;
var statearr_33084_33138 = state_33030__$1;
(statearr_33084_33138[(2)] = null);

(statearr_33084_33138[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (8))){
var inst_32936 = (state_33030[(8)]);
var inst_32953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32936);
var state_33030__$1 = state_33030;
var statearr_33085_33139 = state_33030__$1;
(statearr_33085_33139[(2)] = inst_32953);

(statearr_33085_33139[(1)] = (10));


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
});})(c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21719__auto__,c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21720__auto__ = null;
var cljs$core$async$mix_$_state_machine__21720__auto____0 = (function (){
var statearr_33089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33089[(0)] = cljs$core$async$mix_$_state_machine__21720__auto__);

(statearr_33089[(1)] = (1));

return statearr_33089;
});
var cljs$core$async$mix_$_state_machine__21720__auto____1 = (function (state_33030){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33090){if((e33090 instanceof Object)){
var ex__21723__auto__ = e33090;
var statearr_33091_33140 = state_33030;
(statearr_33091_33140[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33141 = state_33030;
state_33030 = G__33141;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21720__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21720__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21720__auto____0;
cljs$core$async$mix_$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21720__auto____1;
return cljs$core$async$mix_$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21833__auto__ = (function (){var statearr_33092 = f__21832__auto__.call(null);
(statearr_33092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33093);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33142 = [];
var len__19529__auto___33145 = arguments.length;
var i__19530__auto___33146 = (0);
while(true){
if((i__19530__auto___33146 < len__19529__auto___33145)){
args33142.push((arguments[i__19530__auto___33146]));

var G__33147 = (i__19530__auto___33146 + (1));
i__19530__auto___33146 = G__33147;
continue;
} else {
}
break;
}

var G__33144 = args33142.length;
switch (G__33144) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33142.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33150 = [];
var len__19529__auto___33275 = arguments.length;
var i__19530__auto___33276 = (0);
while(true){
if((i__19530__auto___33276 < len__19529__auto___33275)){
args33150.push((arguments[i__19530__auto___33276]));

var G__33277 = (i__19530__auto___33276 + (1));
i__19530__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var G__33152 = args33150.length;
switch (G__33152) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33150.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18459__auto__,mults){
return (function (p1__33149_SHARP_){
if(cljs.core.truth_(p1__33149_SHARP_.call(null,topic))){
return p1__33149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33153 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33154){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33154 = meta33154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33155,meta33154__$1){
var self__ = this;
var _33155__$1 = this;
return (new cljs.core.async.t_cljs$core$async33153(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33154__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33155){
var self__ = this;
var _33155__$1 = this;
return self__.meta33154;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33154","meta33154",-1925125191,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33153";

cljs.core.async.t_cljs$core$async33153.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async33153");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33153 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33154){
return (new cljs.core.async.t_cljs$core$async33153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33154));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33153(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21831__auto___33279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33279,mults,ensure_mult,p){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33279,mults,ensure_mult,p){
return (function (state_33227){
var state_val_33228 = (state_33227[(1)]);
if((state_val_33228 === (7))){
var inst_33223 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33229_33280 = state_33227__$1;
(statearr_33229_33280[(2)] = inst_33223);

(statearr_33229_33280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (20))){
var state_33227__$1 = state_33227;
var statearr_33230_33281 = state_33227__$1;
(statearr_33230_33281[(2)] = null);

(statearr_33230_33281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (1))){
var state_33227__$1 = state_33227;
var statearr_33231_33282 = state_33227__$1;
(statearr_33231_33282[(2)] = null);

(statearr_33231_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (24))){
var inst_33206 = (state_33227[(7)]);
var inst_33215 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33206);
var state_33227__$1 = state_33227;
var statearr_33232_33283 = state_33227__$1;
(statearr_33232_33283[(2)] = inst_33215);

(statearr_33232_33283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (4))){
var inst_33158 = (state_33227[(8)]);
var inst_33158__$1 = (state_33227[(2)]);
var inst_33159 = (inst_33158__$1 == null);
var state_33227__$1 = (function (){var statearr_33233 = state_33227;
(statearr_33233[(8)] = inst_33158__$1);

return statearr_33233;
})();
if(cljs.core.truth_(inst_33159)){
var statearr_33234_33284 = state_33227__$1;
(statearr_33234_33284[(1)] = (5));

} else {
var statearr_33235_33285 = state_33227__$1;
(statearr_33235_33285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (15))){
var inst_33200 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33236_33286 = state_33227__$1;
(statearr_33236_33286[(2)] = inst_33200);

(statearr_33236_33286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (21))){
var inst_33220 = (state_33227[(2)]);
var state_33227__$1 = (function (){var statearr_33237 = state_33227;
(statearr_33237[(9)] = inst_33220);

return statearr_33237;
})();
var statearr_33238_33287 = state_33227__$1;
(statearr_33238_33287[(2)] = null);

(statearr_33238_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (13))){
var inst_33182 = (state_33227[(10)]);
var inst_33184 = cljs.core.chunked_seq_QMARK_.call(null,inst_33182);
var state_33227__$1 = state_33227;
if(inst_33184){
var statearr_33239_33288 = state_33227__$1;
(statearr_33239_33288[(1)] = (16));

} else {
var statearr_33240_33289 = state_33227__$1;
(statearr_33240_33289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (22))){
var inst_33212 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
if(cljs.core.truth_(inst_33212)){
var statearr_33241_33290 = state_33227__$1;
(statearr_33241_33290[(1)] = (23));

} else {
var statearr_33242_33291 = state_33227__$1;
(statearr_33242_33291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (6))){
var inst_33158 = (state_33227[(8)]);
var inst_33208 = (state_33227[(11)]);
var inst_33206 = (state_33227[(7)]);
var inst_33206__$1 = topic_fn.call(null,inst_33158);
var inst_33207 = cljs.core.deref.call(null,mults);
var inst_33208__$1 = cljs.core.get.call(null,inst_33207,inst_33206__$1);
var state_33227__$1 = (function (){var statearr_33243 = state_33227;
(statearr_33243[(11)] = inst_33208__$1);

(statearr_33243[(7)] = inst_33206__$1);

return statearr_33243;
})();
if(cljs.core.truth_(inst_33208__$1)){
var statearr_33244_33292 = state_33227__$1;
(statearr_33244_33292[(1)] = (19));

} else {
var statearr_33245_33293 = state_33227__$1;
(statearr_33245_33293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (25))){
var inst_33217 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33246_33294 = state_33227__$1;
(statearr_33246_33294[(2)] = inst_33217);

(statearr_33246_33294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (17))){
var inst_33182 = (state_33227[(10)]);
var inst_33191 = cljs.core.first.call(null,inst_33182);
var inst_33192 = cljs.core.async.muxch_STAR_.call(null,inst_33191);
var inst_33193 = cljs.core.async.close_BANG_.call(null,inst_33192);
var inst_33194 = cljs.core.next.call(null,inst_33182);
var inst_33168 = inst_33194;
var inst_33169 = null;
var inst_33170 = (0);
var inst_33171 = (0);
var state_33227__$1 = (function (){var statearr_33247 = state_33227;
(statearr_33247[(12)] = inst_33169);

(statearr_33247[(13)] = inst_33171);

(statearr_33247[(14)] = inst_33170);

(statearr_33247[(15)] = inst_33193);

(statearr_33247[(16)] = inst_33168);

return statearr_33247;
})();
var statearr_33248_33295 = state_33227__$1;
(statearr_33248_33295[(2)] = null);

(statearr_33248_33295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (3))){
var inst_33225 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33227__$1,inst_33225);
} else {
if((state_val_33228 === (12))){
var inst_33202 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33249_33296 = state_33227__$1;
(statearr_33249_33296[(2)] = inst_33202);

(statearr_33249_33296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (2))){
var state_33227__$1 = state_33227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33227__$1,(4),ch);
} else {
if((state_val_33228 === (23))){
var state_33227__$1 = state_33227;
var statearr_33250_33297 = state_33227__$1;
(statearr_33250_33297[(2)] = null);

(statearr_33250_33297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (19))){
var inst_33158 = (state_33227[(8)]);
var inst_33208 = (state_33227[(11)]);
var inst_33210 = cljs.core.async.muxch_STAR_.call(null,inst_33208);
var state_33227__$1 = state_33227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33227__$1,(22),inst_33210,inst_33158);
} else {
if((state_val_33228 === (11))){
var inst_33182 = (state_33227[(10)]);
var inst_33168 = (state_33227[(16)]);
var inst_33182__$1 = cljs.core.seq.call(null,inst_33168);
var state_33227__$1 = (function (){var statearr_33251 = state_33227;
(statearr_33251[(10)] = inst_33182__$1);

return statearr_33251;
})();
if(inst_33182__$1){
var statearr_33252_33298 = state_33227__$1;
(statearr_33252_33298[(1)] = (13));

} else {
var statearr_33253_33299 = state_33227__$1;
(statearr_33253_33299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (9))){
var inst_33204 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33254_33300 = state_33227__$1;
(statearr_33254_33300[(2)] = inst_33204);

(statearr_33254_33300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (5))){
var inst_33165 = cljs.core.deref.call(null,mults);
var inst_33166 = cljs.core.vals.call(null,inst_33165);
var inst_33167 = cljs.core.seq.call(null,inst_33166);
var inst_33168 = inst_33167;
var inst_33169 = null;
var inst_33170 = (0);
var inst_33171 = (0);
var state_33227__$1 = (function (){var statearr_33255 = state_33227;
(statearr_33255[(12)] = inst_33169);

(statearr_33255[(13)] = inst_33171);

(statearr_33255[(14)] = inst_33170);

(statearr_33255[(16)] = inst_33168);

return statearr_33255;
})();
var statearr_33256_33301 = state_33227__$1;
(statearr_33256_33301[(2)] = null);

(statearr_33256_33301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (14))){
var state_33227__$1 = state_33227;
var statearr_33260_33302 = state_33227__$1;
(statearr_33260_33302[(2)] = null);

(statearr_33260_33302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (16))){
var inst_33182 = (state_33227[(10)]);
var inst_33186 = cljs.core.chunk_first.call(null,inst_33182);
var inst_33187 = cljs.core.chunk_rest.call(null,inst_33182);
var inst_33188 = cljs.core.count.call(null,inst_33186);
var inst_33168 = inst_33187;
var inst_33169 = inst_33186;
var inst_33170 = inst_33188;
var inst_33171 = (0);
var state_33227__$1 = (function (){var statearr_33261 = state_33227;
(statearr_33261[(12)] = inst_33169);

(statearr_33261[(13)] = inst_33171);

(statearr_33261[(14)] = inst_33170);

(statearr_33261[(16)] = inst_33168);

return statearr_33261;
})();
var statearr_33262_33303 = state_33227__$1;
(statearr_33262_33303[(2)] = null);

(statearr_33262_33303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (10))){
var inst_33169 = (state_33227[(12)]);
var inst_33171 = (state_33227[(13)]);
var inst_33170 = (state_33227[(14)]);
var inst_33168 = (state_33227[(16)]);
var inst_33176 = cljs.core._nth.call(null,inst_33169,inst_33171);
var inst_33177 = cljs.core.async.muxch_STAR_.call(null,inst_33176);
var inst_33178 = cljs.core.async.close_BANG_.call(null,inst_33177);
var inst_33179 = (inst_33171 + (1));
var tmp33257 = inst_33169;
var tmp33258 = inst_33170;
var tmp33259 = inst_33168;
var inst_33168__$1 = tmp33259;
var inst_33169__$1 = tmp33257;
var inst_33170__$1 = tmp33258;
var inst_33171__$1 = inst_33179;
var state_33227__$1 = (function (){var statearr_33263 = state_33227;
(statearr_33263[(12)] = inst_33169__$1);

(statearr_33263[(17)] = inst_33178);

(statearr_33263[(13)] = inst_33171__$1);

(statearr_33263[(14)] = inst_33170__$1);

(statearr_33263[(16)] = inst_33168__$1);

return statearr_33263;
})();
var statearr_33264_33304 = state_33227__$1;
(statearr_33264_33304[(2)] = null);

(statearr_33264_33304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (18))){
var inst_33197 = (state_33227[(2)]);
var state_33227__$1 = state_33227;
var statearr_33265_33305 = state_33227__$1;
(statearr_33265_33305[(2)] = inst_33197);

(statearr_33265_33305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33228 === (8))){
var inst_33171 = (state_33227[(13)]);
var inst_33170 = (state_33227[(14)]);
var inst_33173 = (inst_33171 < inst_33170);
var inst_33174 = inst_33173;
var state_33227__$1 = state_33227;
if(cljs.core.truth_(inst_33174)){
var statearr_33266_33306 = state_33227__$1;
(statearr_33266_33306[(1)] = (10));

} else {
var statearr_33267_33307 = state_33227__$1;
(statearr_33267_33307[(1)] = (11));

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
});})(c__21831__auto___33279,mults,ensure_mult,p))
;
return ((function (switch__21719__auto__,c__21831__auto___33279,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33271[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33271[(1)] = (1));

return statearr_33271;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33227){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33272){if((e33272 instanceof Object)){
var ex__21723__auto__ = e33272;
var statearr_33273_33308 = state_33227;
(statearr_33273_33308[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33309 = state_33227;
state_33227 = G__33309;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33279,mults,ensure_mult,p))
})();
var state__21833__auto__ = (function (){var statearr_33274 = f__21832__auto__.call(null);
(statearr_33274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33279);

return statearr_33274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33279,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33310 = [];
var len__19529__auto___33313 = arguments.length;
var i__19530__auto___33314 = (0);
while(true){
if((i__19530__auto___33314 < len__19529__auto___33313)){
args33310.push((arguments[i__19530__auto___33314]));

var G__33315 = (i__19530__auto___33314 + (1));
i__19530__auto___33314 = G__33315;
continue;
} else {
}
break;
}

var G__33312 = args33310.length;
switch (G__33312) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33310.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33317 = [];
var len__19529__auto___33320 = arguments.length;
var i__19530__auto___33321 = (0);
while(true){
if((i__19530__auto___33321 < len__19529__auto___33320)){
args33317.push((arguments[i__19530__auto___33321]));

var G__33322 = (i__19530__auto___33321 + (1));
i__19530__auto___33321 = G__33322;
continue;
} else {
}
break;
}

var G__33319 = args33317.length;
switch (G__33319) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33317.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33324 = [];
var len__19529__auto___33395 = arguments.length;
var i__19530__auto___33396 = (0);
while(true){
if((i__19530__auto___33396 < len__19529__auto___33395)){
args33324.push((arguments[i__19530__auto___33396]));

var G__33397 = (i__19530__auto___33396 + (1));
i__19530__auto___33396 = G__33397;
continue;
} else {
}
break;
}

var G__33326 = args33324.length;
switch (G__33326) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33324.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21831__auto___33399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33365){
var state_val_33366 = (state_33365[(1)]);
if((state_val_33366 === (7))){
var state_33365__$1 = state_33365;
var statearr_33367_33400 = state_33365__$1;
(statearr_33367_33400[(2)] = null);

(statearr_33367_33400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (1))){
var state_33365__$1 = state_33365;
var statearr_33368_33401 = state_33365__$1;
(statearr_33368_33401[(2)] = null);

(statearr_33368_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (4))){
var inst_33329 = (state_33365[(7)]);
var inst_33331 = (inst_33329 < cnt);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33331)){
var statearr_33369_33402 = state_33365__$1;
(statearr_33369_33402[(1)] = (6));

} else {
var statearr_33370_33403 = state_33365__$1;
(statearr_33370_33403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (15))){
var inst_33361 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33371_33404 = state_33365__$1;
(statearr_33371_33404[(2)] = inst_33361);

(statearr_33371_33404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (13))){
var inst_33354 = cljs.core.async.close_BANG_.call(null,out);
var state_33365__$1 = state_33365;
var statearr_33372_33405 = state_33365__$1;
(statearr_33372_33405[(2)] = inst_33354);

(statearr_33372_33405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (6))){
var state_33365__$1 = state_33365;
var statearr_33373_33406 = state_33365__$1;
(statearr_33373_33406[(2)] = null);

(statearr_33373_33406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (3))){
var inst_33363 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33365__$1,inst_33363);
} else {
if((state_val_33366 === (12))){
var inst_33351 = (state_33365[(8)]);
var inst_33351__$1 = (state_33365[(2)]);
var inst_33352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33351__$1);
var state_33365__$1 = (function (){var statearr_33374 = state_33365;
(statearr_33374[(8)] = inst_33351__$1);

return statearr_33374;
})();
if(cljs.core.truth_(inst_33352)){
var statearr_33375_33407 = state_33365__$1;
(statearr_33375_33407[(1)] = (13));

} else {
var statearr_33376_33408 = state_33365__$1;
(statearr_33376_33408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (2))){
var inst_33328 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33329 = (0);
var state_33365__$1 = (function (){var statearr_33377 = state_33365;
(statearr_33377[(9)] = inst_33328);

(statearr_33377[(7)] = inst_33329);

return statearr_33377;
})();
var statearr_33378_33409 = state_33365__$1;
(statearr_33378_33409[(2)] = null);

(statearr_33378_33409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (11))){
var inst_33329 = (state_33365[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33365,(10),Object,null,(9));
var inst_33338 = chs__$1.call(null,inst_33329);
var inst_33339 = done.call(null,inst_33329);
var inst_33340 = cljs.core.async.take_BANG_.call(null,inst_33338,inst_33339);
var state_33365__$1 = state_33365;
var statearr_33379_33410 = state_33365__$1;
(statearr_33379_33410[(2)] = inst_33340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (9))){
var inst_33329 = (state_33365[(7)]);
var inst_33342 = (state_33365[(2)]);
var inst_33343 = (inst_33329 + (1));
var inst_33329__$1 = inst_33343;
var state_33365__$1 = (function (){var statearr_33380 = state_33365;
(statearr_33380[(10)] = inst_33342);

(statearr_33380[(7)] = inst_33329__$1);

return statearr_33380;
})();
var statearr_33381_33411 = state_33365__$1;
(statearr_33381_33411[(2)] = null);

(statearr_33381_33411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (5))){
var inst_33349 = (state_33365[(2)]);
var state_33365__$1 = (function (){var statearr_33382 = state_33365;
(statearr_33382[(11)] = inst_33349);

return statearr_33382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33365__$1,(12),dchan);
} else {
if((state_val_33366 === (14))){
var inst_33351 = (state_33365[(8)]);
var inst_33356 = cljs.core.apply.call(null,f,inst_33351);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33365__$1,(16),out,inst_33356);
} else {
if((state_val_33366 === (16))){
var inst_33358 = (state_33365[(2)]);
var state_33365__$1 = (function (){var statearr_33383 = state_33365;
(statearr_33383[(12)] = inst_33358);

return statearr_33383;
})();
var statearr_33384_33412 = state_33365__$1;
(statearr_33384_33412[(2)] = null);

(statearr_33384_33412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (10))){
var inst_33333 = (state_33365[(2)]);
var inst_33334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33365__$1 = (function (){var statearr_33385 = state_33365;
(statearr_33385[(13)] = inst_33333);

return statearr_33385;
})();
var statearr_33386_33413 = state_33365__$1;
(statearr_33386_33413[(2)] = inst_33334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (8))){
var inst_33347 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33387_33414 = state_33365__$1;
(statearr_33387_33414[(2)] = inst_33347);

(statearr_33387_33414[(1)] = (5));


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
});})(c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21719__auto__,c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33391[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33391[(1)] = (1));

return statearr_33391;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33365){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33392){if((e33392 instanceof Object)){
var ex__21723__auto__ = e33392;
var statearr_33393_33415 = state_33365;
(statearr_33393_33415[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33416 = state_33365;
state_33365 = G__33416;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21833__auto__ = (function (){var statearr_33394 = f__21832__auto__.call(null);
(statearr_33394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33399);

return statearr_33394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33399,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33418 = [];
var len__19529__auto___33474 = arguments.length;
var i__19530__auto___33475 = (0);
while(true){
if((i__19530__auto___33475 < len__19529__auto___33474)){
args33418.push((arguments[i__19530__auto___33475]));

var G__33476 = (i__19530__auto___33475 + (1));
i__19530__auto___33475 = G__33476;
continue;
} else {
}
break;
}

var G__33420 = args33418.length;
switch (G__33420) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33418.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___33478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33478,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33478,out){
return (function (state_33450){
var state_val_33451 = (state_33450[(1)]);
if((state_val_33451 === (7))){
var inst_33430 = (state_33450[(7)]);
var inst_33429 = (state_33450[(8)]);
var inst_33429__$1 = (state_33450[(2)]);
var inst_33430__$1 = cljs.core.nth.call(null,inst_33429__$1,(0),null);
var inst_33431 = cljs.core.nth.call(null,inst_33429__$1,(1),null);
var inst_33432 = (inst_33430__$1 == null);
var state_33450__$1 = (function (){var statearr_33452 = state_33450;
(statearr_33452[(7)] = inst_33430__$1);

(statearr_33452[(8)] = inst_33429__$1);

(statearr_33452[(9)] = inst_33431);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33432)){
var statearr_33453_33479 = state_33450__$1;
(statearr_33453_33479[(1)] = (8));

} else {
var statearr_33454_33480 = state_33450__$1;
(statearr_33454_33480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (1))){
var inst_33421 = cljs.core.vec.call(null,chs);
var inst_33422 = inst_33421;
var state_33450__$1 = (function (){var statearr_33455 = state_33450;
(statearr_33455[(10)] = inst_33422);

return statearr_33455;
})();
var statearr_33456_33481 = state_33450__$1;
(statearr_33456_33481[(2)] = null);

(statearr_33456_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (4))){
var inst_33422 = (state_33450[(10)]);
var state_33450__$1 = state_33450;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33450__$1,(7),inst_33422);
} else {
if((state_val_33451 === (6))){
var inst_33446 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33457_33482 = state_33450__$1;
(statearr_33457_33482[(2)] = inst_33446);

(statearr_33457_33482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (3))){
var inst_33448 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33450__$1,inst_33448);
} else {
if((state_val_33451 === (2))){
var inst_33422 = (state_33450[(10)]);
var inst_33424 = cljs.core.count.call(null,inst_33422);
var inst_33425 = (inst_33424 > (0));
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33425)){
var statearr_33459_33483 = state_33450__$1;
(statearr_33459_33483[(1)] = (4));

} else {
var statearr_33460_33484 = state_33450__$1;
(statearr_33460_33484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (11))){
var inst_33422 = (state_33450[(10)]);
var inst_33439 = (state_33450[(2)]);
var tmp33458 = inst_33422;
var inst_33422__$1 = tmp33458;
var state_33450__$1 = (function (){var statearr_33461 = state_33450;
(statearr_33461[(10)] = inst_33422__$1);

(statearr_33461[(11)] = inst_33439);

return statearr_33461;
})();
var statearr_33462_33485 = state_33450__$1;
(statearr_33462_33485[(2)] = null);

(statearr_33462_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (9))){
var inst_33430 = (state_33450[(7)]);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33450__$1,(11),out,inst_33430);
} else {
if((state_val_33451 === (5))){
var inst_33444 = cljs.core.async.close_BANG_.call(null,out);
var state_33450__$1 = state_33450;
var statearr_33463_33486 = state_33450__$1;
(statearr_33463_33486[(2)] = inst_33444);

(statearr_33463_33486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (10))){
var inst_33442 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33464_33487 = state_33450__$1;
(statearr_33464_33487[(2)] = inst_33442);

(statearr_33464_33487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33451 === (8))){
var inst_33422 = (state_33450[(10)]);
var inst_33430 = (state_33450[(7)]);
var inst_33429 = (state_33450[(8)]);
var inst_33431 = (state_33450[(9)]);
var inst_33434 = (function (){var cs = inst_33422;
var vec__33427 = inst_33429;
var v = inst_33430;
var c = inst_33431;
return ((function (cs,vec__33427,v,c,inst_33422,inst_33430,inst_33429,inst_33431,state_val_33451,c__21831__auto___33478,out){
return (function (p1__33417_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33417_SHARP_);
});
;})(cs,vec__33427,v,c,inst_33422,inst_33430,inst_33429,inst_33431,state_val_33451,c__21831__auto___33478,out))
})();
var inst_33435 = cljs.core.filterv.call(null,inst_33434,inst_33422);
var inst_33422__$1 = inst_33435;
var state_33450__$1 = (function (){var statearr_33465 = state_33450;
(statearr_33465[(10)] = inst_33422__$1);

return statearr_33465;
})();
var statearr_33466_33488 = state_33450__$1;
(statearr_33466_33488[(2)] = null);

(statearr_33466_33488[(1)] = (2));


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
});})(c__21831__auto___33478,out))
;
return ((function (switch__21719__auto__,c__21831__auto___33478,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33470[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33470[(1)] = (1));

return statearr_33470;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33450){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33471){if((e33471 instanceof Object)){
var ex__21723__auto__ = e33471;
var statearr_33472_33489 = state_33450;
(statearr_33472_33489[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33490 = state_33450;
state_33450 = G__33490;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33478,out))
})();
var state__21833__auto__ = (function (){var statearr_33473 = f__21832__auto__.call(null);
(statearr_33473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33478);

return statearr_33473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33478,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33491 = [];
var len__19529__auto___33540 = arguments.length;
var i__19530__auto___33541 = (0);
while(true){
if((i__19530__auto___33541 < len__19529__auto___33540)){
args33491.push((arguments[i__19530__auto___33541]));

var G__33542 = (i__19530__auto___33541 + (1));
i__19530__auto___33541 = G__33542;
continue;
} else {
}
break;
}

var G__33493 = args33491.length;
switch (G__33493) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33491.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___33544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33544,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33544,out){
return (function (state_33517){
var state_val_33518 = (state_33517[(1)]);
if((state_val_33518 === (7))){
var inst_33499 = (state_33517[(7)]);
var inst_33499__$1 = (state_33517[(2)]);
var inst_33500 = (inst_33499__$1 == null);
var inst_33501 = cljs.core.not.call(null,inst_33500);
var state_33517__$1 = (function (){var statearr_33519 = state_33517;
(statearr_33519[(7)] = inst_33499__$1);

return statearr_33519;
})();
if(inst_33501){
var statearr_33520_33545 = state_33517__$1;
(statearr_33520_33545[(1)] = (8));

} else {
var statearr_33521_33546 = state_33517__$1;
(statearr_33521_33546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (1))){
var inst_33494 = (0);
var state_33517__$1 = (function (){var statearr_33522 = state_33517;
(statearr_33522[(8)] = inst_33494);

return statearr_33522;
})();
var statearr_33523_33547 = state_33517__$1;
(statearr_33523_33547[(2)] = null);

(statearr_33523_33547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (4))){
var state_33517__$1 = state_33517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33517__$1,(7),ch);
} else {
if((state_val_33518 === (6))){
var inst_33512 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
var statearr_33524_33548 = state_33517__$1;
(statearr_33524_33548[(2)] = inst_33512);

(statearr_33524_33548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (3))){
var inst_33514 = (state_33517[(2)]);
var inst_33515 = cljs.core.async.close_BANG_.call(null,out);
var state_33517__$1 = (function (){var statearr_33525 = state_33517;
(statearr_33525[(9)] = inst_33514);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33517__$1,inst_33515);
} else {
if((state_val_33518 === (2))){
var inst_33494 = (state_33517[(8)]);
var inst_33496 = (inst_33494 < n);
var state_33517__$1 = state_33517;
if(cljs.core.truth_(inst_33496)){
var statearr_33526_33549 = state_33517__$1;
(statearr_33526_33549[(1)] = (4));

} else {
var statearr_33527_33550 = state_33517__$1;
(statearr_33527_33550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (11))){
var inst_33494 = (state_33517[(8)]);
var inst_33504 = (state_33517[(2)]);
var inst_33505 = (inst_33494 + (1));
var inst_33494__$1 = inst_33505;
var state_33517__$1 = (function (){var statearr_33528 = state_33517;
(statearr_33528[(10)] = inst_33504);

(statearr_33528[(8)] = inst_33494__$1);

return statearr_33528;
})();
var statearr_33529_33551 = state_33517__$1;
(statearr_33529_33551[(2)] = null);

(statearr_33529_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (9))){
var state_33517__$1 = state_33517;
var statearr_33530_33552 = state_33517__$1;
(statearr_33530_33552[(2)] = null);

(statearr_33530_33552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (5))){
var state_33517__$1 = state_33517;
var statearr_33531_33553 = state_33517__$1;
(statearr_33531_33553[(2)] = null);

(statearr_33531_33553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (10))){
var inst_33509 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
var statearr_33532_33554 = state_33517__$1;
(statearr_33532_33554[(2)] = inst_33509);

(statearr_33532_33554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (8))){
var inst_33499 = (state_33517[(7)]);
var state_33517__$1 = state_33517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33517__$1,(11),out,inst_33499);
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
});})(c__21831__auto___33544,out))
;
return ((function (switch__21719__auto__,c__21831__auto___33544,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33536[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33536[(1)] = (1));

return statearr_33536;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33517){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33537){if((e33537 instanceof Object)){
var ex__21723__auto__ = e33537;
var statearr_33538_33555 = state_33517;
(statearr_33538_33555[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33556 = state_33517;
state_33517 = G__33556;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33544,out))
})();
var state__21833__auto__ = (function (){var statearr_33539 = f__21832__auto__.call(null);
(statearr_33539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33544);

return statearr_33539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33544,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33564 = (function (map_LT_,f,ch,meta33565){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33565 = meta33565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33566,meta33565__$1){
var self__ = this;
var _33566__$1 = this;
return (new cljs.core.async.t_cljs$core$async33564(self__.map_LT_,self__.f,self__.ch,meta33565__$1));
});

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33566){
var self__ = this;
var _33566__$1 = this;
return self__.meta33565;
});

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33567 = (function (map_LT_,f,ch,meta33565,_,fn1,meta33568){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33565 = meta33565;
this._ = _;
this.fn1 = fn1;
this.meta33568 = meta33568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33569,meta33568__$1){
var self__ = this;
var _33569__$1 = this;
return (new cljs.core.async.t_cljs$core$async33567(self__.map_LT_,self__.f,self__.ch,self__.meta33565,self__._,self__.fn1,meta33568__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33569){
var self__ = this;
var _33569__$1 = this;
return self__.meta33568;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33557_SHARP_){
return f1.call(null,(((p1__33557_SHARP_ == null))?null:self__.f.call(null,p1__33557_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33565","meta33565",948198882,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33564","cljs.core.async/t_cljs$core$async33564",1643783339,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33568","meta33568",-1326583058,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33567";

cljs.core.async.t_cljs$core$async33567.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async33567");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33567 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33567(map_LT___$1,f__$1,ch__$1,meta33565__$1,___$2,fn1__$1,meta33568){
return (new cljs.core.async.t_cljs$core$async33567(map_LT___$1,f__$1,ch__$1,meta33565__$1,___$2,fn1__$1,meta33568));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33567(self__.map_LT_,self__.f,self__.ch,self__.meta33565,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18447__auto__ = ret;
if(cljs.core.truth_(and__18447__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33565","meta33565",948198882,null)], null);
});

cljs.core.async.t_cljs$core$async33564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33564";

cljs.core.async.t_cljs$core$async33564.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async33564");
});

cljs.core.async.__GT_t_cljs$core$async33564 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33564(map_LT___$1,f__$1,ch__$1,meta33565){
return (new cljs.core.async.t_cljs$core$async33564(map_LT___$1,f__$1,ch__$1,meta33565));
});

}

return (new cljs.core.async.t_cljs$core$async33564(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33573 = (function (map_GT_,f,ch,meta33574){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33574 = meta33574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33575,meta33574__$1){
var self__ = this;
var _33575__$1 = this;
return (new cljs.core.async.t_cljs$core$async33573(self__.map_GT_,self__.f,self__.ch,meta33574__$1));
});

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33575){
var self__ = this;
var _33575__$1 = this;
return self__.meta33574;
});

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33574","meta33574",-873168110,null)], null);
});

cljs.core.async.t_cljs$core$async33573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33573";

cljs.core.async.t_cljs$core$async33573.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async33573");
});

cljs.core.async.__GT_t_cljs$core$async33573 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33573(map_GT___$1,f__$1,ch__$1,meta33574){
return (new cljs.core.async.t_cljs$core$async33573(map_GT___$1,f__$1,ch__$1,meta33574));
});

}

return (new cljs.core.async.t_cljs$core$async33573(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33579 = (function (filter_GT_,p,ch,meta33580){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33580 = meta33580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33581,meta33580__$1){
var self__ = this;
var _33581__$1 = this;
return (new cljs.core.async.t_cljs$core$async33579(self__.filter_GT_,self__.p,self__.ch,meta33580__$1));
});

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33581){
var self__ = this;
var _33581__$1 = this;
return self__.meta33580;
});

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33580","meta33580",1600443228,null)], null);
});

cljs.core.async.t_cljs$core$async33579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33579";

cljs.core.async.t_cljs$core$async33579.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async33579");
});

cljs.core.async.__GT_t_cljs$core$async33579 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33579(filter_GT___$1,p__$1,ch__$1,meta33580){
return (new cljs.core.async.t_cljs$core$async33579(filter_GT___$1,p__$1,ch__$1,meta33580));
});

}

return (new cljs.core.async.t_cljs$core$async33579(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33582 = [];
var len__19529__auto___33626 = arguments.length;
var i__19530__auto___33627 = (0);
while(true){
if((i__19530__auto___33627 < len__19529__auto___33626)){
args33582.push((arguments[i__19530__auto___33627]));

var G__33628 = (i__19530__auto___33627 + (1));
i__19530__auto___33627 = G__33628;
continue;
} else {
}
break;
}

var G__33584 = args33582.length;
switch (G__33584) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33582.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___33630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33630,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33630,out){
return (function (state_33605){
var state_val_33606 = (state_33605[(1)]);
if((state_val_33606 === (7))){
var inst_33601 = (state_33605[(2)]);
var state_33605__$1 = state_33605;
var statearr_33607_33631 = state_33605__$1;
(statearr_33607_33631[(2)] = inst_33601);

(statearr_33607_33631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (1))){
var state_33605__$1 = state_33605;
var statearr_33608_33632 = state_33605__$1;
(statearr_33608_33632[(2)] = null);

(statearr_33608_33632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (4))){
var inst_33587 = (state_33605[(7)]);
var inst_33587__$1 = (state_33605[(2)]);
var inst_33588 = (inst_33587__$1 == null);
var state_33605__$1 = (function (){var statearr_33609 = state_33605;
(statearr_33609[(7)] = inst_33587__$1);

return statearr_33609;
})();
if(cljs.core.truth_(inst_33588)){
var statearr_33610_33633 = state_33605__$1;
(statearr_33610_33633[(1)] = (5));

} else {
var statearr_33611_33634 = state_33605__$1;
(statearr_33611_33634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (6))){
var inst_33587 = (state_33605[(7)]);
var inst_33592 = p.call(null,inst_33587);
var state_33605__$1 = state_33605;
if(cljs.core.truth_(inst_33592)){
var statearr_33612_33635 = state_33605__$1;
(statearr_33612_33635[(1)] = (8));

} else {
var statearr_33613_33636 = state_33605__$1;
(statearr_33613_33636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (3))){
var inst_33603 = (state_33605[(2)]);
var state_33605__$1 = state_33605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33605__$1,inst_33603);
} else {
if((state_val_33606 === (2))){
var state_33605__$1 = state_33605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33605__$1,(4),ch);
} else {
if((state_val_33606 === (11))){
var inst_33595 = (state_33605[(2)]);
var state_33605__$1 = state_33605;
var statearr_33614_33637 = state_33605__$1;
(statearr_33614_33637[(2)] = inst_33595);

(statearr_33614_33637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (9))){
var state_33605__$1 = state_33605;
var statearr_33615_33638 = state_33605__$1;
(statearr_33615_33638[(2)] = null);

(statearr_33615_33638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (5))){
var inst_33590 = cljs.core.async.close_BANG_.call(null,out);
var state_33605__$1 = state_33605;
var statearr_33616_33639 = state_33605__$1;
(statearr_33616_33639[(2)] = inst_33590);

(statearr_33616_33639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (10))){
var inst_33598 = (state_33605[(2)]);
var state_33605__$1 = (function (){var statearr_33617 = state_33605;
(statearr_33617[(8)] = inst_33598);

return statearr_33617;
})();
var statearr_33618_33640 = state_33605__$1;
(statearr_33618_33640[(2)] = null);

(statearr_33618_33640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33606 === (8))){
var inst_33587 = (state_33605[(7)]);
var state_33605__$1 = state_33605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33605__$1,(11),out,inst_33587);
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
});})(c__21831__auto___33630,out))
;
return ((function (switch__21719__auto__,c__21831__auto___33630,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33622 = [null,null,null,null,null,null,null,null,null];
(statearr_33622[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33622[(1)] = (1));

return statearr_33622;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33605){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33623){if((e33623 instanceof Object)){
var ex__21723__auto__ = e33623;
var statearr_33624_33641 = state_33605;
(statearr_33624_33641[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_33605;
state_33605 = G__33642;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33630,out))
})();
var state__21833__auto__ = (function (){var statearr_33625 = f__21832__auto__.call(null);
(statearr_33625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33630);

return statearr_33625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33630,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33643 = [];
var len__19529__auto___33646 = arguments.length;
var i__19530__auto___33647 = (0);
while(true){
if((i__19530__auto___33647 < len__19529__auto___33646)){
args33643.push((arguments[i__19530__auto___33647]));

var G__33648 = (i__19530__auto___33647 + (1));
i__19530__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var G__33645 = args33643.length;
switch (G__33645) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33643.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto__){
return (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (7))){
var inst_33811 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33817_33858 = state_33815__$1;
(statearr_33817_33858[(2)] = inst_33811);

(statearr_33817_33858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (20))){
var inst_33781 = (state_33815[(7)]);
var inst_33792 = (state_33815[(2)]);
var inst_33793 = cljs.core.next.call(null,inst_33781);
var inst_33767 = inst_33793;
var inst_33768 = null;
var inst_33769 = (0);
var inst_33770 = (0);
var state_33815__$1 = (function (){var statearr_33818 = state_33815;
(statearr_33818[(8)] = inst_33792);

(statearr_33818[(9)] = inst_33770);

(statearr_33818[(10)] = inst_33769);

(statearr_33818[(11)] = inst_33767);

(statearr_33818[(12)] = inst_33768);

return statearr_33818;
})();
var statearr_33819_33859 = state_33815__$1;
(statearr_33819_33859[(2)] = null);

(statearr_33819_33859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (1))){
var state_33815__$1 = state_33815;
var statearr_33820_33860 = state_33815__$1;
(statearr_33820_33860[(2)] = null);

(statearr_33820_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (4))){
var inst_33756 = (state_33815[(13)]);
var inst_33756__$1 = (state_33815[(2)]);
var inst_33757 = (inst_33756__$1 == null);
var state_33815__$1 = (function (){var statearr_33821 = state_33815;
(statearr_33821[(13)] = inst_33756__$1);

return statearr_33821;
})();
if(cljs.core.truth_(inst_33757)){
var statearr_33822_33861 = state_33815__$1;
(statearr_33822_33861[(1)] = (5));

} else {
var statearr_33823_33862 = state_33815__$1;
(statearr_33823_33862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (15))){
var state_33815__$1 = state_33815;
var statearr_33827_33863 = state_33815__$1;
(statearr_33827_33863[(2)] = null);

(statearr_33827_33863[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (21))){
var state_33815__$1 = state_33815;
var statearr_33828_33864 = state_33815__$1;
(statearr_33828_33864[(2)] = null);

(statearr_33828_33864[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (13))){
var inst_33770 = (state_33815[(9)]);
var inst_33769 = (state_33815[(10)]);
var inst_33767 = (state_33815[(11)]);
var inst_33768 = (state_33815[(12)]);
var inst_33777 = (state_33815[(2)]);
var inst_33778 = (inst_33770 + (1));
var tmp33824 = inst_33769;
var tmp33825 = inst_33767;
var tmp33826 = inst_33768;
var inst_33767__$1 = tmp33825;
var inst_33768__$1 = tmp33826;
var inst_33769__$1 = tmp33824;
var inst_33770__$1 = inst_33778;
var state_33815__$1 = (function (){var statearr_33829 = state_33815;
(statearr_33829[(9)] = inst_33770__$1);

(statearr_33829[(10)] = inst_33769__$1);

(statearr_33829[(11)] = inst_33767__$1);

(statearr_33829[(12)] = inst_33768__$1);

(statearr_33829[(14)] = inst_33777);

return statearr_33829;
})();
var statearr_33830_33865 = state_33815__$1;
(statearr_33830_33865[(2)] = null);

(statearr_33830_33865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (22))){
var state_33815__$1 = state_33815;
var statearr_33831_33866 = state_33815__$1;
(statearr_33831_33866[(2)] = null);

(statearr_33831_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var inst_33756 = (state_33815[(13)]);
var inst_33765 = f.call(null,inst_33756);
var inst_33766 = cljs.core.seq.call(null,inst_33765);
var inst_33767 = inst_33766;
var inst_33768 = null;
var inst_33769 = (0);
var inst_33770 = (0);
var state_33815__$1 = (function (){var statearr_33832 = state_33815;
(statearr_33832[(9)] = inst_33770);

(statearr_33832[(10)] = inst_33769);

(statearr_33832[(11)] = inst_33767);

(statearr_33832[(12)] = inst_33768);

return statearr_33832;
})();
var statearr_33833_33867 = state_33815__$1;
(statearr_33833_33867[(2)] = null);

(statearr_33833_33867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (17))){
var inst_33781 = (state_33815[(7)]);
var inst_33785 = cljs.core.chunk_first.call(null,inst_33781);
var inst_33786 = cljs.core.chunk_rest.call(null,inst_33781);
var inst_33787 = cljs.core.count.call(null,inst_33785);
var inst_33767 = inst_33786;
var inst_33768 = inst_33785;
var inst_33769 = inst_33787;
var inst_33770 = (0);
var state_33815__$1 = (function (){var statearr_33834 = state_33815;
(statearr_33834[(9)] = inst_33770);

(statearr_33834[(10)] = inst_33769);

(statearr_33834[(11)] = inst_33767);

(statearr_33834[(12)] = inst_33768);

return statearr_33834;
})();
var statearr_33835_33868 = state_33815__$1;
(statearr_33835_33868[(2)] = null);

(statearr_33835_33868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (3))){
var inst_33813 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (12))){
var inst_33801 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33836_33869 = state_33815__$1;
(statearr_33836_33869[(2)] = inst_33801);

(statearr_33836_33869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (2))){
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33815__$1,(4),in$);
} else {
if((state_val_33816 === (23))){
var inst_33809 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33837_33870 = state_33815__$1;
(statearr_33837_33870[(2)] = inst_33809);

(statearr_33837_33870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (19))){
var inst_33796 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33838_33871 = state_33815__$1;
(statearr_33838_33871[(2)] = inst_33796);

(statearr_33838_33871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (11))){
var inst_33767 = (state_33815[(11)]);
var inst_33781 = (state_33815[(7)]);
var inst_33781__$1 = cljs.core.seq.call(null,inst_33767);
var state_33815__$1 = (function (){var statearr_33839 = state_33815;
(statearr_33839[(7)] = inst_33781__$1);

return statearr_33839;
})();
if(inst_33781__$1){
var statearr_33840_33872 = state_33815__$1;
(statearr_33840_33872[(1)] = (14));

} else {
var statearr_33841_33873 = state_33815__$1;
(statearr_33841_33873[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (9))){
var inst_33803 = (state_33815[(2)]);
var inst_33804 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33815__$1 = (function (){var statearr_33842 = state_33815;
(statearr_33842[(15)] = inst_33803);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33804)){
var statearr_33843_33874 = state_33815__$1;
(statearr_33843_33874[(1)] = (21));

} else {
var statearr_33844_33875 = state_33815__$1;
(statearr_33844_33875[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var inst_33759 = cljs.core.async.close_BANG_.call(null,out);
var state_33815__$1 = state_33815;
var statearr_33845_33876 = state_33815__$1;
(statearr_33845_33876[(2)] = inst_33759);

(statearr_33845_33876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (14))){
var inst_33781 = (state_33815[(7)]);
var inst_33783 = cljs.core.chunked_seq_QMARK_.call(null,inst_33781);
var state_33815__$1 = state_33815;
if(inst_33783){
var statearr_33846_33877 = state_33815__$1;
(statearr_33846_33877[(1)] = (17));

} else {
var statearr_33847_33878 = state_33815__$1;
(statearr_33847_33878[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (16))){
var inst_33799 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33848_33879 = state_33815__$1;
(statearr_33848_33879[(2)] = inst_33799);

(statearr_33848_33879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (10))){
var inst_33770 = (state_33815[(9)]);
var inst_33768 = (state_33815[(12)]);
var inst_33775 = cljs.core._nth.call(null,inst_33768,inst_33770);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33815__$1,(13),out,inst_33775);
} else {
if((state_val_33816 === (18))){
var inst_33781 = (state_33815[(7)]);
var inst_33790 = cljs.core.first.call(null,inst_33781);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33815__$1,(20),out,inst_33790);
} else {
if((state_val_33816 === (8))){
var inst_33770 = (state_33815[(9)]);
var inst_33769 = (state_33815[(10)]);
var inst_33772 = (inst_33770 < inst_33769);
var inst_33773 = inst_33772;
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33773)){
var statearr_33849_33880 = state_33815__$1;
(statearr_33849_33880[(1)] = (10));

} else {
var statearr_33850_33881 = state_33815__$1;
(statearr_33850_33881[(1)] = (11));

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
});})(c__21831__auto__))
;
return ((function (switch__21719__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____0 = (function (){
var statearr_33854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33854[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__);

(statearr_33854[(1)] = (1));

return statearr_33854;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____1 = (function (state_33815){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33855){if((e33855 instanceof Object)){
var ex__21723__auto__ = e33855;
var statearr_33856_33882 = state_33815;
(statearr_33856_33882[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_33815;
state_33815 = G__33883;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21720__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_33857 = f__21832__auto__.call(null);
(statearr_33857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33884 = [];
var len__19529__auto___33887 = arguments.length;
var i__19530__auto___33888 = (0);
while(true){
if((i__19530__auto___33888 < len__19529__auto___33887)){
args33884.push((arguments[i__19530__auto___33888]));

var G__33889 = (i__19530__auto___33888 + (1));
i__19530__auto___33888 = G__33889;
continue;
} else {
}
break;
}

var G__33886 = args33884.length;
switch (G__33886) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33884.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33891 = [];
var len__19529__auto___33894 = arguments.length;
var i__19530__auto___33895 = (0);
while(true){
if((i__19530__auto___33895 < len__19529__auto___33894)){
args33891.push((arguments[i__19530__auto___33895]));

var G__33896 = (i__19530__auto___33895 + (1));
i__19530__auto___33895 = G__33896;
continue;
} else {
}
break;
}

var G__33893 = args33891.length;
switch (G__33893) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33891.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33898 = [];
var len__19529__auto___33949 = arguments.length;
var i__19530__auto___33950 = (0);
while(true){
if((i__19530__auto___33950 < len__19529__auto___33949)){
args33898.push((arguments[i__19530__auto___33950]));

var G__33951 = (i__19530__auto___33950 + (1));
i__19530__auto___33950 = G__33951;
continue;
} else {
}
break;
}

var G__33900 = args33898.length;
switch (G__33900) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33898.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___33953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___33953,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___33953,out){
return (function (state_33924){
var state_val_33925 = (state_33924[(1)]);
if((state_val_33925 === (7))){
var inst_33919 = (state_33924[(2)]);
var state_33924__$1 = state_33924;
var statearr_33926_33954 = state_33924__$1;
(statearr_33926_33954[(2)] = inst_33919);

(statearr_33926_33954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (1))){
var inst_33901 = null;
var state_33924__$1 = (function (){var statearr_33927 = state_33924;
(statearr_33927[(7)] = inst_33901);

return statearr_33927;
})();
var statearr_33928_33955 = state_33924__$1;
(statearr_33928_33955[(2)] = null);

(statearr_33928_33955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (4))){
var inst_33904 = (state_33924[(8)]);
var inst_33904__$1 = (state_33924[(2)]);
var inst_33905 = (inst_33904__$1 == null);
var inst_33906 = cljs.core.not.call(null,inst_33905);
var state_33924__$1 = (function (){var statearr_33929 = state_33924;
(statearr_33929[(8)] = inst_33904__$1);

return statearr_33929;
})();
if(inst_33906){
var statearr_33930_33956 = state_33924__$1;
(statearr_33930_33956[(1)] = (5));

} else {
var statearr_33931_33957 = state_33924__$1;
(statearr_33931_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (6))){
var state_33924__$1 = state_33924;
var statearr_33932_33958 = state_33924__$1;
(statearr_33932_33958[(2)] = null);

(statearr_33932_33958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (3))){
var inst_33921 = (state_33924[(2)]);
var inst_33922 = cljs.core.async.close_BANG_.call(null,out);
var state_33924__$1 = (function (){var statearr_33933 = state_33924;
(statearr_33933[(9)] = inst_33921);

return statearr_33933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33924__$1,inst_33922);
} else {
if((state_val_33925 === (2))){
var state_33924__$1 = state_33924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33924__$1,(4),ch);
} else {
if((state_val_33925 === (11))){
var inst_33904 = (state_33924[(8)]);
var inst_33913 = (state_33924[(2)]);
var inst_33901 = inst_33904;
var state_33924__$1 = (function (){var statearr_33934 = state_33924;
(statearr_33934[(7)] = inst_33901);

(statearr_33934[(10)] = inst_33913);

return statearr_33934;
})();
var statearr_33935_33959 = state_33924__$1;
(statearr_33935_33959[(2)] = null);

(statearr_33935_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (9))){
var inst_33904 = (state_33924[(8)]);
var state_33924__$1 = state_33924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33924__$1,(11),out,inst_33904);
} else {
if((state_val_33925 === (5))){
var inst_33901 = (state_33924[(7)]);
var inst_33904 = (state_33924[(8)]);
var inst_33908 = cljs.core._EQ_.call(null,inst_33904,inst_33901);
var state_33924__$1 = state_33924;
if(inst_33908){
var statearr_33937_33960 = state_33924__$1;
(statearr_33937_33960[(1)] = (8));

} else {
var statearr_33938_33961 = state_33924__$1;
(statearr_33938_33961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (10))){
var inst_33916 = (state_33924[(2)]);
var state_33924__$1 = state_33924;
var statearr_33939_33962 = state_33924__$1;
(statearr_33939_33962[(2)] = inst_33916);

(statearr_33939_33962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (8))){
var inst_33901 = (state_33924[(7)]);
var tmp33936 = inst_33901;
var inst_33901__$1 = tmp33936;
var state_33924__$1 = (function (){var statearr_33940 = state_33924;
(statearr_33940[(7)] = inst_33901__$1);

return statearr_33940;
})();
var statearr_33941_33963 = state_33924__$1;
(statearr_33941_33963[(2)] = null);

(statearr_33941_33963[(1)] = (2));


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
});})(c__21831__auto___33953,out))
;
return ((function (switch__21719__auto__,c__21831__auto___33953,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_33945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33945[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_33945[(1)] = (1));

return statearr_33945;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_33924){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_33924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e33946){if((e33946 instanceof Object)){
var ex__21723__auto__ = e33946;
var statearr_33947_33964 = state_33924;
(statearr_33947_33964[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33924;
state_33924 = G__33965;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_33924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_33924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___33953,out))
})();
var state__21833__auto__ = (function (){var statearr_33948 = f__21832__auto__.call(null);
(statearr_33948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___33953);

return statearr_33948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___33953,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33966 = [];
var len__19529__auto___34036 = arguments.length;
var i__19530__auto___34037 = (0);
while(true){
if((i__19530__auto___34037 < len__19529__auto___34036)){
args33966.push((arguments[i__19530__auto___34037]));

var G__34038 = (i__19530__auto___34037 + (1));
i__19530__auto___34037 = G__34038;
continue;
} else {
}
break;
}

var G__33968 = args33966.length;
switch (G__33968) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33966.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___34040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___34040,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___34040,out){
return (function (state_34006){
var state_val_34007 = (state_34006[(1)]);
if((state_val_34007 === (7))){
var inst_34002 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34008_34041 = state_34006__$1;
(statearr_34008_34041[(2)] = inst_34002);

(statearr_34008_34041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (1))){
var inst_33969 = (new Array(n));
var inst_33970 = inst_33969;
var inst_33971 = (0);
var state_34006__$1 = (function (){var statearr_34009 = state_34006;
(statearr_34009[(7)] = inst_33971);

(statearr_34009[(8)] = inst_33970);

return statearr_34009;
})();
var statearr_34010_34042 = state_34006__$1;
(statearr_34010_34042[(2)] = null);

(statearr_34010_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (4))){
var inst_33974 = (state_34006[(9)]);
var inst_33974__$1 = (state_34006[(2)]);
var inst_33975 = (inst_33974__$1 == null);
var inst_33976 = cljs.core.not.call(null,inst_33975);
var state_34006__$1 = (function (){var statearr_34011 = state_34006;
(statearr_34011[(9)] = inst_33974__$1);

return statearr_34011;
})();
if(inst_33976){
var statearr_34012_34043 = state_34006__$1;
(statearr_34012_34043[(1)] = (5));

} else {
var statearr_34013_34044 = state_34006__$1;
(statearr_34013_34044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (15))){
var inst_33996 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34014_34045 = state_34006__$1;
(statearr_34014_34045[(2)] = inst_33996);

(statearr_34014_34045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (13))){
var state_34006__$1 = state_34006;
var statearr_34015_34046 = state_34006__$1;
(statearr_34015_34046[(2)] = null);

(statearr_34015_34046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (6))){
var inst_33971 = (state_34006[(7)]);
var inst_33992 = (inst_33971 > (0));
var state_34006__$1 = state_34006;
if(cljs.core.truth_(inst_33992)){
var statearr_34016_34047 = state_34006__$1;
(statearr_34016_34047[(1)] = (12));

} else {
var statearr_34017_34048 = state_34006__$1;
(statearr_34017_34048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (3))){
var inst_34004 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34006__$1,inst_34004);
} else {
if((state_val_34007 === (12))){
var inst_33970 = (state_34006[(8)]);
var inst_33994 = cljs.core.vec.call(null,inst_33970);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34006__$1,(15),out,inst_33994);
} else {
if((state_val_34007 === (2))){
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34006__$1,(4),ch);
} else {
if((state_val_34007 === (11))){
var inst_33986 = (state_34006[(2)]);
var inst_33987 = (new Array(n));
var inst_33970 = inst_33987;
var inst_33971 = (0);
var state_34006__$1 = (function (){var statearr_34018 = state_34006;
(statearr_34018[(7)] = inst_33971);

(statearr_34018[(10)] = inst_33986);

(statearr_34018[(8)] = inst_33970);

return statearr_34018;
})();
var statearr_34019_34049 = state_34006__$1;
(statearr_34019_34049[(2)] = null);

(statearr_34019_34049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (9))){
var inst_33970 = (state_34006[(8)]);
var inst_33984 = cljs.core.vec.call(null,inst_33970);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34006__$1,(11),out,inst_33984);
} else {
if((state_val_34007 === (5))){
var inst_33971 = (state_34006[(7)]);
var inst_33974 = (state_34006[(9)]);
var inst_33970 = (state_34006[(8)]);
var inst_33979 = (state_34006[(11)]);
var inst_33978 = (inst_33970[inst_33971] = inst_33974);
var inst_33979__$1 = (inst_33971 + (1));
var inst_33980 = (inst_33979__$1 < n);
var state_34006__$1 = (function (){var statearr_34020 = state_34006;
(statearr_34020[(12)] = inst_33978);

(statearr_34020[(11)] = inst_33979__$1);

return statearr_34020;
})();
if(cljs.core.truth_(inst_33980)){
var statearr_34021_34050 = state_34006__$1;
(statearr_34021_34050[(1)] = (8));

} else {
var statearr_34022_34051 = state_34006__$1;
(statearr_34022_34051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (14))){
var inst_33999 = (state_34006[(2)]);
var inst_34000 = cljs.core.async.close_BANG_.call(null,out);
var state_34006__$1 = (function (){var statearr_34024 = state_34006;
(statearr_34024[(13)] = inst_33999);

return statearr_34024;
})();
var statearr_34025_34052 = state_34006__$1;
(statearr_34025_34052[(2)] = inst_34000);

(statearr_34025_34052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (10))){
var inst_33990 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34026_34053 = state_34006__$1;
(statearr_34026_34053[(2)] = inst_33990);

(statearr_34026_34053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (8))){
var inst_33970 = (state_34006[(8)]);
var inst_33979 = (state_34006[(11)]);
var tmp34023 = inst_33970;
var inst_33970__$1 = tmp34023;
var inst_33971 = inst_33979;
var state_34006__$1 = (function (){var statearr_34027 = state_34006;
(statearr_34027[(7)] = inst_33971);

(statearr_34027[(8)] = inst_33970__$1);

return statearr_34027;
})();
var statearr_34028_34054 = state_34006__$1;
(statearr_34028_34054[(2)] = null);

(statearr_34028_34054[(1)] = (2));


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
});})(c__21831__auto___34040,out))
;
return ((function (switch__21719__auto__,c__21831__auto___34040,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_34032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34032[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_34032[(1)] = (1));

return statearr_34032;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_34006){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_34006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e34033){if((e34033 instanceof Object)){
var ex__21723__auto__ = e34033;
var statearr_34034_34055 = state_34006;
(statearr_34034_34055[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_34006;
state_34006 = G__34056;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___34040,out))
})();
var state__21833__auto__ = (function (){var statearr_34035 = f__21832__auto__.call(null);
(statearr_34035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___34040);

return statearr_34035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___34040,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34057 = [];
var len__19529__auto___34131 = arguments.length;
var i__19530__auto___34132 = (0);
while(true){
if((i__19530__auto___34132 < len__19529__auto___34131)){
args34057.push((arguments[i__19530__auto___34132]));

var G__34133 = (i__19530__auto___34132 + (1));
i__19530__auto___34132 = G__34133;
continue;
} else {
}
break;
}

var G__34059 = args34057.length;
switch (G__34059) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34057.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___34135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___34135,out){
return (function (){
var f__21832__auto__ = (function (){var switch__21719__auto__ = ((function (c__21831__auto___34135,out){
return (function (state_34101){
var state_val_34102 = (state_34101[(1)]);
if((state_val_34102 === (7))){
var inst_34097 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34103_34136 = state_34101__$1;
(statearr_34103_34136[(2)] = inst_34097);

(statearr_34103_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (1))){
var inst_34060 = [];
var inst_34061 = inst_34060;
var inst_34062 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34101__$1 = (function (){var statearr_34104 = state_34101;
(statearr_34104[(7)] = inst_34061);

(statearr_34104[(8)] = inst_34062);

return statearr_34104;
})();
var statearr_34105_34137 = state_34101__$1;
(statearr_34105_34137[(2)] = null);

(statearr_34105_34137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (4))){
var inst_34065 = (state_34101[(9)]);
var inst_34065__$1 = (state_34101[(2)]);
var inst_34066 = (inst_34065__$1 == null);
var inst_34067 = cljs.core.not.call(null,inst_34066);
var state_34101__$1 = (function (){var statearr_34106 = state_34101;
(statearr_34106[(9)] = inst_34065__$1);

return statearr_34106;
})();
if(inst_34067){
var statearr_34107_34138 = state_34101__$1;
(statearr_34107_34138[(1)] = (5));

} else {
var statearr_34108_34139 = state_34101__$1;
(statearr_34108_34139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (15))){
var inst_34091 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34109_34140 = state_34101__$1;
(statearr_34109_34140[(2)] = inst_34091);

(statearr_34109_34140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (13))){
var state_34101__$1 = state_34101;
var statearr_34110_34141 = state_34101__$1;
(statearr_34110_34141[(2)] = null);

(statearr_34110_34141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (6))){
var inst_34061 = (state_34101[(7)]);
var inst_34086 = inst_34061.length;
var inst_34087 = (inst_34086 > (0));
var state_34101__$1 = state_34101;
if(cljs.core.truth_(inst_34087)){
var statearr_34111_34142 = state_34101__$1;
(statearr_34111_34142[(1)] = (12));

} else {
var statearr_34112_34143 = state_34101__$1;
(statearr_34112_34143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (3))){
var inst_34099 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34101__$1,inst_34099);
} else {
if((state_val_34102 === (12))){
var inst_34061 = (state_34101[(7)]);
var inst_34089 = cljs.core.vec.call(null,inst_34061);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34101__$1,(15),out,inst_34089);
} else {
if((state_val_34102 === (2))){
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34101__$1,(4),ch);
} else {
if((state_val_34102 === (11))){
var inst_34069 = (state_34101[(10)]);
var inst_34065 = (state_34101[(9)]);
var inst_34079 = (state_34101[(2)]);
var inst_34080 = [];
var inst_34081 = inst_34080.push(inst_34065);
var inst_34061 = inst_34080;
var inst_34062 = inst_34069;
var state_34101__$1 = (function (){var statearr_34113 = state_34101;
(statearr_34113[(11)] = inst_34081);

(statearr_34113[(12)] = inst_34079);

(statearr_34113[(7)] = inst_34061);

(statearr_34113[(8)] = inst_34062);

return statearr_34113;
})();
var statearr_34114_34144 = state_34101__$1;
(statearr_34114_34144[(2)] = null);

(statearr_34114_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (9))){
var inst_34061 = (state_34101[(7)]);
var inst_34077 = cljs.core.vec.call(null,inst_34061);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34101__$1,(11),out,inst_34077);
} else {
if((state_val_34102 === (5))){
var inst_34069 = (state_34101[(10)]);
var inst_34062 = (state_34101[(8)]);
var inst_34065 = (state_34101[(9)]);
var inst_34069__$1 = f.call(null,inst_34065);
var inst_34070 = cljs.core._EQ_.call(null,inst_34069__$1,inst_34062);
var inst_34071 = cljs.core.keyword_identical_QMARK_.call(null,inst_34062,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34072 = (inst_34070) || (inst_34071);
var state_34101__$1 = (function (){var statearr_34115 = state_34101;
(statearr_34115[(10)] = inst_34069__$1);

return statearr_34115;
})();
if(cljs.core.truth_(inst_34072)){
var statearr_34116_34145 = state_34101__$1;
(statearr_34116_34145[(1)] = (8));

} else {
var statearr_34117_34146 = state_34101__$1;
(statearr_34117_34146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (14))){
var inst_34094 = (state_34101[(2)]);
var inst_34095 = cljs.core.async.close_BANG_.call(null,out);
var state_34101__$1 = (function (){var statearr_34119 = state_34101;
(statearr_34119[(13)] = inst_34094);

return statearr_34119;
})();
var statearr_34120_34147 = state_34101__$1;
(statearr_34120_34147[(2)] = inst_34095);

(statearr_34120_34147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (10))){
var inst_34084 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34121_34148 = state_34101__$1;
(statearr_34121_34148[(2)] = inst_34084);

(statearr_34121_34148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (8))){
var inst_34061 = (state_34101[(7)]);
var inst_34069 = (state_34101[(10)]);
var inst_34065 = (state_34101[(9)]);
var inst_34074 = inst_34061.push(inst_34065);
var tmp34118 = inst_34061;
var inst_34061__$1 = tmp34118;
var inst_34062 = inst_34069;
var state_34101__$1 = (function (){var statearr_34122 = state_34101;
(statearr_34122[(7)] = inst_34061__$1);

(statearr_34122[(14)] = inst_34074);

(statearr_34122[(8)] = inst_34062);

return statearr_34122;
})();
var statearr_34123_34149 = state_34101__$1;
(statearr_34123_34149[(2)] = null);

(statearr_34123_34149[(1)] = (2));


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
});})(c__21831__auto___34135,out))
;
return ((function (switch__21719__auto__,c__21831__auto___34135,out){
return (function() {
var cljs$core$async$state_machine__21720__auto__ = null;
var cljs$core$async$state_machine__21720__auto____0 = (function (){
var statearr_34127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34127[(0)] = cljs$core$async$state_machine__21720__auto__);

(statearr_34127[(1)] = (1));

return statearr_34127;
});
var cljs$core$async$state_machine__21720__auto____1 = (function (state_34101){
while(true){
var ret_value__21721__auto__ = (function (){try{while(true){
var result__21722__auto__ = switch__21719__auto__.call(null,state_34101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21722__auto__;
}
break;
}
}catch (e34128){if((e34128 instanceof Object)){
var ex__21723__auto__ = e34128;
var statearr_34129_34150 = state_34101;
(statearr_34129_34150[(5)] = ex__21723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34151 = state_34101;
state_34101 = G__34151;
continue;
} else {
return ret_value__21721__auto__;
}
break;
}
});
cljs$core$async$state_machine__21720__auto__ = function(state_34101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21720__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21720__auto____1.call(this,state_34101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21720__auto____0;
cljs$core$async$state_machine__21720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21720__auto____1;
return cljs$core$async$state_machine__21720__auto__;
})()
;})(switch__21719__auto__,c__21831__auto___34135,out))
})();
var state__21833__auto__ = (function (){var statearr_34130 = f__21832__auto__.call(null);
(statearr_34130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___34135);

return statearr_34130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___34135,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1467040425556