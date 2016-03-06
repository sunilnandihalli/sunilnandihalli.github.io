// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13827 = [];
var len__7123__auto___13833 = arguments.length;
var i__7124__auto___13834 = (0);
while(true){
if((i__7124__auto___13834 < len__7123__auto___13833)){
args13827.push((arguments[i__7124__auto___13834]));

var G__13835 = (i__7124__auto___13834 + (1));
i__7124__auto___13834 = G__13835;
continue;
} else {
}
break;
}

var G__13829 = args13827.length;
switch (G__13829) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13827.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13830 = (function (f,blockable,meta13831){
this.f = f;
this.blockable = blockable;
this.meta13831 = meta13831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13832,meta13831__$1){
var self__ = this;
var _13832__$1 = this;
return (new cljs.core.async.t_cljs$core$async13830(self__.f,self__.blockable,meta13831__$1));
});

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13832){
var self__ = this;
var _13832__$1 = this;
return self__.meta13831;
});

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13831","meta13831",-1337090120,null)], null);
});

cljs.core.async.t_cljs$core$async13830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13830";

cljs.core.async.t_cljs$core$async13830.cljs$lang$ctorPrWriter = (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async13830");
});

cljs.core.async.__GT_t_cljs$core$async13830 = (function cljs$core$async$__GT_t_cljs$core$async13830(f__$1,blockable__$1,meta13831){
return (new cljs.core.async.t_cljs$core$async13830(f__$1,blockable__$1,meta13831));
});

}

return (new cljs.core.async.t_cljs$core$async13830(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13839 = [];
var len__7123__auto___13842 = arguments.length;
var i__7124__auto___13843 = (0);
while(true){
if((i__7124__auto___13843 < len__7123__auto___13842)){
args13839.push((arguments[i__7124__auto___13843]));

var G__13844 = (i__7124__auto___13843 + (1));
i__7124__auto___13843 = G__13844;
continue;
} else {
}
break;
}

var G__13841 = args13839.length;
switch (G__13841) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13839.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args13846 = [];
var len__7123__auto___13849 = arguments.length;
var i__7124__auto___13850 = (0);
while(true){
if((i__7124__auto___13850 < len__7123__auto___13849)){
args13846.push((arguments[i__7124__auto___13850]));

var G__13851 = (i__7124__auto___13850 + (1));
i__7124__auto___13850 = G__13851;
continue;
} else {
}
break;
}

var G__13848 = args13846.length;
switch (G__13848) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13846.length)].join('')));

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
var args13853 = [];
var len__7123__auto___13856 = arguments.length;
var i__7124__auto___13857 = (0);
while(true){
if((i__7124__auto___13857 < len__7123__auto___13856)){
args13853.push((arguments[i__7124__auto___13857]));

var G__13858 = (i__7124__auto___13857 + (1));
i__7124__auto___13857 = G__13858;
continue;
} else {
}
break;
}

var G__13855 = args13853.length;
switch (G__13855) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13853.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13860 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13860);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13860,ret){
return (function (){
return fn1.call(null,val_13860);
});})(val_13860,ret))
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
var args13861 = [];
var len__7123__auto___13864 = arguments.length;
var i__7124__auto___13865 = (0);
while(true){
if((i__7124__auto___13865 < len__7123__auto___13864)){
args13861.push((arguments[i__7124__auto___13865]));

var G__13866 = (i__7124__auto___13865 + (1));
i__7124__auto___13865 = G__13866;
continue;
} else {
}
break;
}

var G__13863 = args13861.length;
switch (G__13863) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13861.length)].join('')));

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
var n__6968__auto___13868 = n;
var x_13869 = (0);
while(true){
if((x_13869 < n__6968__auto___13868)){
(a[x_13869] = (0));

var G__13870 = (x_13869 + (1));
x_13869 = G__13870;
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

var G__13871 = (i + (1));
i = G__13871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13875 = (function (alt_flag,flag,meta13876){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13876 = meta13876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13877,meta13876__$1){
var self__ = this;
var _13877__$1 = this;
return (new cljs.core.async.t_cljs$core$async13875(self__.alt_flag,self__.flag,meta13876__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13877){
var self__ = this;
var _13877__$1 = this;
return self__.meta13876;
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13876","meta13876",-92472061,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13875";

cljs.core.async.t_cljs$core$async13875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async13875");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13875 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13875(alt_flag__$1,flag__$1,meta13876){
return (new cljs.core.async.t_cljs$core$async13875(alt_flag__$1,flag__$1,meta13876));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13875(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13881 = (function (alt_handler,flag,cb,meta13882){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13882 = meta13882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13883,meta13882__$1){
var self__ = this;
var _13883__$1 = this;
return (new cljs.core.async.t_cljs$core$async13881(self__.alt_handler,self__.flag,self__.cb,meta13882__$1));
});

cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13883){
var self__ = this;
var _13883__$1 = this;
return self__.meta13882;
});

cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13882","meta13882",-2110911338,null)], null);
});

cljs.core.async.t_cljs$core$async13881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13881";

cljs.core.async.t_cljs$core$async13881.cljs$lang$ctorPrWriter = (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async13881");
});

cljs.core.async.__GT_t_cljs$core$async13881 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13881(alt_handler__$1,flag__$1,cb__$1,meta13882){
return (new cljs.core.async.t_cljs$core$async13881(alt_handler__$1,flag__$1,cb__$1,meta13882));
});

}

return (new cljs.core.async.t_cljs$core$async13881(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13884_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13884_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13885_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13885_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6065__auto__ = wport;
if(cljs.core.truth_(or__6065__auto__)){
return or__6065__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13886 = (i + (1));
i = G__13886;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6065__auto__ = ret;
if(cljs.core.truth_(or__6065__auto__)){
return or__6065__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6053__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6053__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6053__auto__;
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
var args__7130__auto__ = [];
var len__7123__auto___13892 = arguments.length;
var i__7124__auto___13893 = (0);
while(true){
if((i__7124__auto___13893 < len__7123__auto___13892)){
args__7130__auto__.push((arguments[i__7124__auto___13893]));

var G__13894 = (i__7124__auto___13893 + (1));
i__7124__auto___13893 = G__13894;
continue;
} else {
}
break;
}

var argseq__7131__auto__ = ((((1) < args__7130__auto__.length))?(new cljs.core.IndexedSeq(args__7130__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7131__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13889){
var map__13890 = p__13889;
var map__13890__$1 = ((((!((map__13890 == null)))?((((map__13890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13890):map__13890);
var opts = map__13890__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13887){
var G__13888 = cljs.core.first.call(null,seq13887);
var seq13887__$1 = cljs.core.next.call(null,seq13887);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13888,seq13887__$1);
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
var args13895 = [];
var len__7123__auto___13945 = arguments.length;
var i__7124__auto___13946 = (0);
while(true){
if((i__7124__auto___13946 < len__7123__auto___13945)){
args13895.push((arguments[i__7124__auto___13946]));

var G__13947 = (i__7124__auto___13946 + (1));
i__7124__auto___13946 = G__13947;
continue;
} else {
}
break;
}

var G__13897 = args13895.length;
switch (G__13897) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13895.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13782__auto___13949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___13949){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___13949){
return (function (state_13921){
var state_val_13922 = (state_13921[(1)]);
if((state_val_13922 === (7))){
var inst_13917 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13923_13950 = state_13921__$1;
(statearr_13923_13950[(2)] = inst_13917);

(statearr_13923_13950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (1))){
var state_13921__$1 = state_13921;
var statearr_13924_13951 = state_13921__$1;
(statearr_13924_13951[(2)] = null);

(statearr_13924_13951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (4))){
var inst_13900 = (state_13921[(7)]);
var inst_13900__$1 = (state_13921[(2)]);
var inst_13901 = (inst_13900__$1 == null);
var state_13921__$1 = (function (){var statearr_13925 = state_13921;
(statearr_13925[(7)] = inst_13900__$1);

return statearr_13925;
})();
if(cljs.core.truth_(inst_13901)){
var statearr_13926_13952 = state_13921__$1;
(statearr_13926_13952[(1)] = (5));

} else {
var statearr_13927_13953 = state_13921__$1;
(statearr_13927_13953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (13))){
var state_13921__$1 = state_13921;
var statearr_13928_13954 = state_13921__$1;
(statearr_13928_13954[(2)] = null);

(statearr_13928_13954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (6))){
var inst_13900 = (state_13921[(7)]);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13921__$1,(11),to,inst_13900);
} else {
if((state_val_13922 === (3))){
var inst_13919 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13921__$1,inst_13919);
} else {
if((state_val_13922 === (12))){
var state_13921__$1 = state_13921;
var statearr_13929_13955 = state_13921__$1;
(statearr_13929_13955[(2)] = null);

(statearr_13929_13955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (2))){
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13921__$1,(4),from);
} else {
if((state_val_13922 === (11))){
var inst_13910 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
if(cljs.core.truth_(inst_13910)){
var statearr_13930_13956 = state_13921__$1;
(statearr_13930_13956[(1)] = (12));

} else {
var statearr_13931_13957 = state_13921__$1;
(statearr_13931_13957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (9))){
var state_13921__$1 = state_13921;
var statearr_13932_13958 = state_13921__$1;
(statearr_13932_13958[(2)] = null);

(statearr_13932_13958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (5))){
var state_13921__$1 = state_13921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13933_13959 = state_13921__$1;
(statearr_13933_13959[(1)] = (8));

} else {
var statearr_13934_13960 = state_13921__$1;
(statearr_13934_13960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (14))){
var inst_13915 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13935_13961 = state_13921__$1;
(statearr_13935_13961[(2)] = inst_13915);

(statearr_13935_13961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (10))){
var inst_13907 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13936_13962 = state_13921__$1;
(statearr_13936_13962[(2)] = inst_13907);

(statearr_13936_13962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (8))){
var inst_13904 = cljs.core.async.close_BANG_.call(null,to);
var state_13921__$1 = state_13921;
var statearr_13937_13963 = state_13921__$1;
(statearr_13937_13963[(2)] = inst_13904);

(statearr_13937_13963[(1)] = (10));


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
});})(c__13782__auto___13949))
;
return ((function (switch__13670__auto__,c__13782__auto___13949){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_13941 = [null,null,null,null,null,null,null,null];
(statearr_13941[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_13941[(1)] = (1));

return statearr_13941;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_13921){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_13921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e13942){if((e13942 instanceof Object)){
var ex__13674__auto__ = e13942;
var statearr_13943_13964 = state_13921;
(statearr_13943_13964[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13965 = state_13921;
state_13921 = G__13965;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_13921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_13921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___13949))
})();
var state__13784__auto__ = (function (){var statearr_13944 = f__13783__auto__.call(null);
(statearr_13944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___13949);

return statearr_13944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___13949))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14149){
var vec__14150 = p__14149;
var v = cljs.core.nth.call(null,vec__14150,(0),null);
var p = cljs.core.nth.call(null,vec__14150,(1),null);
var job = vec__14150;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13782__auto___14332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results){
return (function (state_14155){
var state_val_14156 = (state_14155[(1)]);
if((state_val_14156 === (1))){
var state_14155__$1 = state_14155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14155__$1,(2),res,v);
} else {
if((state_val_14156 === (2))){
var inst_14152 = (state_14155[(2)]);
var inst_14153 = cljs.core.async.close_BANG_.call(null,res);
var state_14155__$1 = (function (){var statearr_14157 = state_14155;
(statearr_14157[(7)] = inst_14152);

return statearr_14157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14155__$1,inst_14153);
} else {
return null;
}
}
});})(c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results))
;
return ((function (switch__13670__auto__,c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_14161 = [null,null,null,null,null,null,null,null];
(statearr_14161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__);

(statearr_14161[(1)] = (1));

return statearr_14161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1 = (function (state_14155){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14162){if((e14162 instanceof Object)){
var ex__13674__auto__ = e14162;
var statearr_14163_14333 = state_14155;
(statearr_14163_14333[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14334 = state_14155;
state_14155 = G__14334;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = function(state_14155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1.call(this,state_14155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results))
})();
var state__13784__auto__ = (function (){var statearr_14164 = f__13783__auto__.call(null);
(statearr_14164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___14332);

return statearr_14164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___14332,res,vec__14150,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14165){
var vec__14166 = p__14165;
var v = cljs.core.nth.call(null,vec__14166,(0),null);
var p = cljs.core.nth.call(null,vec__14166,(1),null);
var job = vec__14166;
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
var n__6968__auto___14335 = n;
var __14336 = (0);
while(true){
if((__14336 < n__6968__auto___14335)){
var G__14167_14337 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14167_14337) {
case "compute":
var c__13782__auto___14339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14336,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (__14336,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function (state_14180){
var state_val_14181 = (state_14180[(1)]);
if((state_val_14181 === (1))){
var state_14180__$1 = state_14180;
var statearr_14182_14340 = state_14180__$1;
(statearr_14182_14340[(2)] = null);

(statearr_14182_14340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (2))){
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14180__$1,(4),jobs);
} else {
if((state_val_14181 === (3))){
var inst_14178 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14180__$1,inst_14178);
} else {
if((state_val_14181 === (4))){
var inst_14170 = (state_14180[(2)]);
var inst_14171 = process.call(null,inst_14170);
var state_14180__$1 = state_14180;
if(cljs.core.truth_(inst_14171)){
var statearr_14183_14341 = state_14180__$1;
(statearr_14183_14341[(1)] = (5));

} else {
var statearr_14184_14342 = state_14180__$1;
(statearr_14184_14342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (5))){
var state_14180__$1 = state_14180;
var statearr_14185_14343 = state_14180__$1;
(statearr_14185_14343[(2)] = null);

(statearr_14185_14343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (6))){
var state_14180__$1 = state_14180;
var statearr_14186_14344 = state_14180__$1;
(statearr_14186_14344[(2)] = null);

(statearr_14186_14344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (7))){
var inst_14176 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14187_14345 = state_14180__$1;
(statearr_14187_14345[(2)] = inst_14176);

(statearr_14187_14345[(1)] = (3));


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
});})(__14336,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
;
return ((function (__14336,switch__13670__auto__,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null];
(statearr_14191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1 = (function (state_14180){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14192){if((e14192 instanceof Object)){
var ex__13674__auto__ = e14192;
var statearr_14193_14346 = state_14180;
(statearr_14193_14346[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14347 = state_14180;
state_14180 = G__14347;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = function(state_14180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1.call(this,state_14180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__;
})()
;})(__14336,switch__13670__auto__,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
})();
var state__13784__auto__ = (function (){var statearr_14194 = f__13783__auto__.call(null);
(statearr_14194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___14339);

return statearr_14194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(__14336,c__13782__auto___14339,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
);


break;
case "async":
var c__13782__auto___14348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14336,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (__14336,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function (state_14207){
var state_val_14208 = (state_14207[(1)]);
if((state_val_14208 === (1))){
var state_14207__$1 = state_14207;
var statearr_14209_14349 = state_14207__$1;
(statearr_14209_14349[(2)] = null);

(statearr_14209_14349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (2))){
var state_14207__$1 = state_14207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14207__$1,(4),jobs);
} else {
if((state_val_14208 === (3))){
var inst_14205 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14207__$1,inst_14205);
} else {
if((state_val_14208 === (4))){
var inst_14197 = (state_14207[(2)]);
var inst_14198 = async.call(null,inst_14197);
var state_14207__$1 = state_14207;
if(cljs.core.truth_(inst_14198)){
var statearr_14210_14350 = state_14207__$1;
(statearr_14210_14350[(1)] = (5));

} else {
var statearr_14211_14351 = state_14207__$1;
(statearr_14211_14351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (5))){
var state_14207__$1 = state_14207;
var statearr_14212_14352 = state_14207__$1;
(statearr_14212_14352[(2)] = null);

(statearr_14212_14352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (6))){
var state_14207__$1 = state_14207;
var statearr_14213_14353 = state_14207__$1;
(statearr_14213_14353[(2)] = null);

(statearr_14213_14353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14208 === (7))){
var inst_14203 = (state_14207[(2)]);
var state_14207__$1 = state_14207;
var statearr_14214_14354 = state_14207__$1;
(statearr_14214_14354[(2)] = inst_14203);

(statearr_14214_14354[(1)] = (3));


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
});})(__14336,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
;
return ((function (__14336,switch__13670__auto__,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_14218 = [null,null,null,null,null,null,null];
(statearr_14218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__);

(statearr_14218[(1)] = (1));

return statearr_14218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1 = (function (state_14207){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14219){if((e14219 instanceof Object)){
var ex__13674__auto__ = e14219;
var statearr_14220_14355 = state_14207;
(statearr_14220_14355[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14356 = state_14207;
state_14207 = G__14356;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = function(state_14207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1.call(this,state_14207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__;
})()
;})(__14336,switch__13670__auto__,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
})();
var state__13784__auto__ = (function (){var statearr_14221 = f__13783__auto__.call(null);
(statearr_14221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___14348);

return statearr_14221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(__14336,c__13782__auto___14348,G__14167_14337,n__6968__auto___14335,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14357 = (__14336 + (1));
__14336 = G__14357;
continue;
} else {
}
break;
}

var c__13782__auto___14358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___14358,jobs,results,process,async){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___14358,jobs,results,process,async){
return (function (state_14243){
var state_val_14244 = (state_14243[(1)]);
if((state_val_14244 === (1))){
var state_14243__$1 = state_14243;
var statearr_14245_14359 = state_14243__$1;
(statearr_14245_14359[(2)] = null);

(statearr_14245_14359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (2))){
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14243__$1,(4),from);
} else {
if((state_val_14244 === (3))){
var inst_14241 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14243__$1,inst_14241);
} else {
if((state_val_14244 === (4))){
var inst_14224 = (state_14243[(7)]);
var inst_14224__$1 = (state_14243[(2)]);
var inst_14225 = (inst_14224__$1 == null);
var state_14243__$1 = (function (){var statearr_14246 = state_14243;
(statearr_14246[(7)] = inst_14224__$1);

return statearr_14246;
})();
if(cljs.core.truth_(inst_14225)){
var statearr_14247_14360 = state_14243__$1;
(statearr_14247_14360[(1)] = (5));

} else {
var statearr_14248_14361 = state_14243__$1;
(statearr_14248_14361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (5))){
var inst_14227 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14243__$1 = state_14243;
var statearr_14249_14362 = state_14243__$1;
(statearr_14249_14362[(2)] = inst_14227);

(statearr_14249_14362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (6))){
var inst_14224 = (state_14243[(7)]);
var inst_14229 = (state_14243[(8)]);
var inst_14229__$1 = cljs.core.async.chan.call(null,(1));
var inst_14230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14231 = [inst_14224,inst_14229__$1];
var inst_14232 = (new cljs.core.PersistentVector(null,2,(5),inst_14230,inst_14231,null));
var state_14243__$1 = (function (){var statearr_14250 = state_14243;
(statearr_14250[(8)] = inst_14229__$1);

return statearr_14250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14243__$1,(8),jobs,inst_14232);
} else {
if((state_val_14244 === (7))){
var inst_14239 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14251_14363 = state_14243__$1;
(statearr_14251_14363[(2)] = inst_14239);

(statearr_14251_14363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (8))){
var inst_14229 = (state_14243[(8)]);
var inst_14234 = (state_14243[(2)]);
var state_14243__$1 = (function (){var statearr_14252 = state_14243;
(statearr_14252[(9)] = inst_14234);

return statearr_14252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14243__$1,(9),results,inst_14229);
} else {
if((state_val_14244 === (9))){
var inst_14236 = (state_14243[(2)]);
var state_14243__$1 = (function (){var statearr_14253 = state_14243;
(statearr_14253[(10)] = inst_14236);

return statearr_14253;
})();
var statearr_14254_14364 = state_14243__$1;
(statearr_14254_14364[(2)] = null);

(statearr_14254_14364[(1)] = (2));


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
});})(c__13782__auto___14358,jobs,results,process,async))
;
return ((function (switch__13670__auto__,c__13782__auto___14358,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_14258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__);

(statearr_14258[(1)] = (1));

return statearr_14258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1 = (function (state_14243){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14259){if((e14259 instanceof Object)){
var ex__13674__auto__ = e14259;
var statearr_14260_14365 = state_14243;
(statearr_14260_14365[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14366 = state_14243;
state_14243 = G__14366;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = function(state_14243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1.call(this,state_14243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___14358,jobs,results,process,async))
})();
var state__13784__auto__ = (function (){var statearr_14261 = f__13783__auto__.call(null);
(statearr_14261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___14358);

return statearr_14261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___14358,jobs,results,process,async))
);


var c__13782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto__,jobs,results,process,async){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto__,jobs,results,process,async){
return (function (state_14299){
var state_val_14300 = (state_14299[(1)]);
if((state_val_14300 === (7))){
var inst_14295 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
var statearr_14301_14367 = state_14299__$1;
(statearr_14301_14367[(2)] = inst_14295);

(statearr_14301_14367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (20))){
var state_14299__$1 = state_14299;
var statearr_14302_14368 = state_14299__$1;
(statearr_14302_14368[(2)] = null);

(statearr_14302_14368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (1))){
var state_14299__$1 = state_14299;
var statearr_14303_14369 = state_14299__$1;
(statearr_14303_14369[(2)] = null);

(statearr_14303_14369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (4))){
var inst_14264 = (state_14299[(7)]);
var inst_14264__$1 = (state_14299[(2)]);
var inst_14265 = (inst_14264__$1 == null);
var state_14299__$1 = (function (){var statearr_14304 = state_14299;
(statearr_14304[(7)] = inst_14264__$1);

return statearr_14304;
})();
if(cljs.core.truth_(inst_14265)){
var statearr_14305_14370 = state_14299__$1;
(statearr_14305_14370[(1)] = (5));

} else {
var statearr_14306_14371 = state_14299__$1;
(statearr_14306_14371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (15))){
var inst_14277 = (state_14299[(8)]);
var state_14299__$1 = state_14299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14299__$1,(18),to,inst_14277);
} else {
if((state_val_14300 === (21))){
var inst_14290 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
var statearr_14307_14372 = state_14299__$1;
(statearr_14307_14372[(2)] = inst_14290);

(statearr_14307_14372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (13))){
var inst_14292 = (state_14299[(2)]);
var state_14299__$1 = (function (){var statearr_14308 = state_14299;
(statearr_14308[(9)] = inst_14292);

return statearr_14308;
})();
var statearr_14309_14373 = state_14299__$1;
(statearr_14309_14373[(2)] = null);

(statearr_14309_14373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (6))){
var inst_14264 = (state_14299[(7)]);
var state_14299__$1 = state_14299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14299__$1,(11),inst_14264);
} else {
if((state_val_14300 === (17))){
var inst_14285 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
if(cljs.core.truth_(inst_14285)){
var statearr_14310_14374 = state_14299__$1;
(statearr_14310_14374[(1)] = (19));

} else {
var statearr_14311_14375 = state_14299__$1;
(statearr_14311_14375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (3))){
var inst_14297 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14299__$1,inst_14297);
} else {
if((state_val_14300 === (12))){
var inst_14274 = (state_14299[(10)]);
var state_14299__$1 = state_14299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14299__$1,(14),inst_14274);
} else {
if((state_val_14300 === (2))){
var state_14299__$1 = state_14299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14299__$1,(4),results);
} else {
if((state_val_14300 === (19))){
var state_14299__$1 = state_14299;
var statearr_14312_14376 = state_14299__$1;
(statearr_14312_14376[(2)] = null);

(statearr_14312_14376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (11))){
var inst_14274 = (state_14299[(2)]);
var state_14299__$1 = (function (){var statearr_14313 = state_14299;
(statearr_14313[(10)] = inst_14274);

return statearr_14313;
})();
var statearr_14314_14377 = state_14299__$1;
(statearr_14314_14377[(2)] = null);

(statearr_14314_14377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (9))){
var state_14299__$1 = state_14299;
var statearr_14315_14378 = state_14299__$1;
(statearr_14315_14378[(2)] = null);

(statearr_14315_14378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (5))){
var state_14299__$1 = state_14299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14316_14379 = state_14299__$1;
(statearr_14316_14379[(1)] = (8));

} else {
var statearr_14317_14380 = state_14299__$1;
(statearr_14317_14380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (14))){
var inst_14279 = (state_14299[(11)]);
var inst_14277 = (state_14299[(8)]);
var inst_14277__$1 = (state_14299[(2)]);
var inst_14278 = (inst_14277__$1 == null);
var inst_14279__$1 = cljs.core.not.call(null,inst_14278);
var state_14299__$1 = (function (){var statearr_14318 = state_14299;
(statearr_14318[(11)] = inst_14279__$1);

(statearr_14318[(8)] = inst_14277__$1);

return statearr_14318;
})();
if(inst_14279__$1){
var statearr_14319_14381 = state_14299__$1;
(statearr_14319_14381[(1)] = (15));

} else {
var statearr_14320_14382 = state_14299__$1;
(statearr_14320_14382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (16))){
var inst_14279 = (state_14299[(11)]);
var state_14299__$1 = state_14299;
var statearr_14321_14383 = state_14299__$1;
(statearr_14321_14383[(2)] = inst_14279);

(statearr_14321_14383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (10))){
var inst_14271 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
var statearr_14322_14384 = state_14299__$1;
(statearr_14322_14384[(2)] = inst_14271);

(statearr_14322_14384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (18))){
var inst_14282 = (state_14299[(2)]);
var state_14299__$1 = state_14299;
var statearr_14323_14385 = state_14299__$1;
(statearr_14323_14385[(2)] = inst_14282);

(statearr_14323_14385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14300 === (8))){
var inst_14268 = cljs.core.async.close_BANG_.call(null,to);
var state_14299__$1 = state_14299;
var statearr_14324_14386 = state_14299__$1;
(statearr_14324_14386[(2)] = inst_14268);

(statearr_14324_14386[(1)] = (10));


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
});})(c__13782__auto__,jobs,results,process,async))
;
return ((function (switch__13670__auto__,c__13782__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_14328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__);

(statearr_14328[(1)] = (1));

return statearr_14328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1 = (function (state_14299){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14329){if((e14329 instanceof Object)){
var ex__13674__auto__ = e14329;
var statearr_14330_14387 = state_14299;
(statearr_14330_14387[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14388 = state_14299;
state_14299 = G__14388;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__ = function(state_14299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1.call(this,state_14299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto__,jobs,results,process,async))
})();
var state__13784__auto__ = (function (){var statearr_14331 = f__13783__auto__.call(null);
(statearr_14331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto__);

return statearr_14331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto__,jobs,results,process,async))
);

return c__13782__auto__;
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
var args14389 = [];
var len__7123__auto___14392 = arguments.length;
var i__7124__auto___14393 = (0);
while(true){
if((i__7124__auto___14393 < len__7123__auto___14392)){
args14389.push((arguments[i__7124__auto___14393]));

var G__14394 = (i__7124__auto___14393 + (1));
i__7124__auto___14393 = G__14394;
continue;
} else {
}
break;
}

var G__14391 = args14389.length;
switch (G__14391) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14389.length)].join('')));

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
var args14396 = [];
var len__7123__auto___14399 = arguments.length;
var i__7124__auto___14400 = (0);
while(true){
if((i__7124__auto___14400 < len__7123__auto___14399)){
args14396.push((arguments[i__7124__auto___14400]));

var G__14401 = (i__7124__auto___14400 + (1));
i__7124__auto___14400 = G__14401;
continue;
} else {
}
break;
}

var G__14398 = args14396.length;
switch (G__14398) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14396.length)].join('')));

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
var args14403 = [];
var len__7123__auto___14456 = arguments.length;
var i__7124__auto___14457 = (0);
while(true){
if((i__7124__auto___14457 < len__7123__auto___14456)){
args14403.push((arguments[i__7124__auto___14457]));

var G__14458 = (i__7124__auto___14457 + (1));
i__7124__auto___14457 = G__14458;
continue;
} else {
}
break;
}

var G__14405 = args14403.length;
switch (G__14405) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14403.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13782__auto___14460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___14460,tc,fc){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___14460,tc,fc){
return (function (state_14431){
var state_val_14432 = (state_14431[(1)]);
if((state_val_14432 === (7))){
var inst_14427 = (state_14431[(2)]);
var state_14431__$1 = state_14431;
var statearr_14433_14461 = state_14431__$1;
(statearr_14433_14461[(2)] = inst_14427);

(statearr_14433_14461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (1))){
var state_14431__$1 = state_14431;
var statearr_14434_14462 = state_14431__$1;
(statearr_14434_14462[(2)] = null);

(statearr_14434_14462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (4))){
var inst_14408 = (state_14431[(7)]);
var inst_14408__$1 = (state_14431[(2)]);
var inst_14409 = (inst_14408__$1 == null);
var state_14431__$1 = (function (){var statearr_14435 = state_14431;
(statearr_14435[(7)] = inst_14408__$1);

return statearr_14435;
})();
if(cljs.core.truth_(inst_14409)){
var statearr_14436_14463 = state_14431__$1;
(statearr_14436_14463[(1)] = (5));

} else {
var statearr_14437_14464 = state_14431__$1;
(statearr_14437_14464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (13))){
var state_14431__$1 = state_14431;
var statearr_14438_14465 = state_14431__$1;
(statearr_14438_14465[(2)] = null);

(statearr_14438_14465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (6))){
var inst_14408 = (state_14431[(7)]);
var inst_14414 = p.call(null,inst_14408);
var state_14431__$1 = state_14431;
if(cljs.core.truth_(inst_14414)){
var statearr_14439_14466 = state_14431__$1;
(statearr_14439_14466[(1)] = (9));

} else {
var statearr_14440_14467 = state_14431__$1;
(statearr_14440_14467[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (3))){
var inst_14429 = (state_14431[(2)]);
var state_14431__$1 = state_14431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14431__$1,inst_14429);
} else {
if((state_val_14432 === (12))){
var state_14431__$1 = state_14431;
var statearr_14441_14468 = state_14431__$1;
(statearr_14441_14468[(2)] = null);

(statearr_14441_14468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (2))){
var state_14431__$1 = state_14431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14431__$1,(4),ch);
} else {
if((state_val_14432 === (11))){
var inst_14408 = (state_14431[(7)]);
var inst_14418 = (state_14431[(2)]);
var state_14431__$1 = state_14431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14431__$1,(8),inst_14418,inst_14408);
} else {
if((state_val_14432 === (9))){
var state_14431__$1 = state_14431;
var statearr_14442_14469 = state_14431__$1;
(statearr_14442_14469[(2)] = tc);

(statearr_14442_14469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (5))){
var inst_14411 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14412 = cljs.core.async.close_BANG_.call(null,fc);
var state_14431__$1 = (function (){var statearr_14443 = state_14431;
(statearr_14443[(8)] = inst_14411);

return statearr_14443;
})();
var statearr_14444_14470 = state_14431__$1;
(statearr_14444_14470[(2)] = inst_14412);

(statearr_14444_14470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (14))){
var inst_14425 = (state_14431[(2)]);
var state_14431__$1 = state_14431;
var statearr_14445_14471 = state_14431__$1;
(statearr_14445_14471[(2)] = inst_14425);

(statearr_14445_14471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (10))){
var state_14431__$1 = state_14431;
var statearr_14446_14472 = state_14431__$1;
(statearr_14446_14472[(2)] = fc);

(statearr_14446_14472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14432 === (8))){
var inst_14420 = (state_14431[(2)]);
var state_14431__$1 = state_14431;
if(cljs.core.truth_(inst_14420)){
var statearr_14447_14473 = state_14431__$1;
(statearr_14447_14473[(1)] = (12));

} else {
var statearr_14448_14474 = state_14431__$1;
(statearr_14448_14474[(1)] = (13));

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
});})(c__13782__auto___14460,tc,fc))
;
return ((function (switch__13670__auto__,c__13782__auto___14460,tc,fc){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_14452 = [null,null,null,null,null,null,null,null,null];
(statearr_14452[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_14452[(1)] = (1));

return statearr_14452;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_14431){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14453){if((e14453 instanceof Object)){
var ex__13674__auto__ = e14453;
var statearr_14454_14475 = state_14431;
(statearr_14454_14475[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14476 = state_14431;
state_14431 = G__14476;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_14431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_14431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___14460,tc,fc))
})();
var state__13784__auto__ = (function (){var statearr_14455 = f__13783__auto__.call(null);
(statearr_14455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___14460);

return statearr_14455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___14460,tc,fc))
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
var c__13782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto__){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto__){
return (function (state_14540){
var state_val_14541 = (state_14540[(1)]);
if((state_val_14541 === (7))){
var inst_14536 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
var statearr_14542_14563 = state_14540__$1;
(statearr_14542_14563[(2)] = inst_14536);

(statearr_14542_14563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (1))){
var inst_14520 = init;
var state_14540__$1 = (function (){var statearr_14543 = state_14540;
(statearr_14543[(7)] = inst_14520);

return statearr_14543;
})();
var statearr_14544_14564 = state_14540__$1;
(statearr_14544_14564[(2)] = null);

(statearr_14544_14564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (4))){
var inst_14523 = (state_14540[(8)]);
var inst_14523__$1 = (state_14540[(2)]);
var inst_14524 = (inst_14523__$1 == null);
var state_14540__$1 = (function (){var statearr_14545 = state_14540;
(statearr_14545[(8)] = inst_14523__$1);

return statearr_14545;
})();
if(cljs.core.truth_(inst_14524)){
var statearr_14546_14565 = state_14540__$1;
(statearr_14546_14565[(1)] = (5));

} else {
var statearr_14547_14566 = state_14540__$1;
(statearr_14547_14566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (6))){
var inst_14527 = (state_14540[(9)]);
var inst_14523 = (state_14540[(8)]);
var inst_14520 = (state_14540[(7)]);
var inst_14527__$1 = f.call(null,inst_14520,inst_14523);
var inst_14528 = cljs.core.reduced_QMARK_.call(null,inst_14527__$1);
var state_14540__$1 = (function (){var statearr_14548 = state_14540;
(statearr_14548[(9)] = inst_14527__$1);

return statearr_14548;
})();
if(inst_14528){
var statearr_14549_14567 = state_14540__$1;
(statearr_14549_14567[(1)] = (8));

} else {
var statearr_14550_14568 = state_14540__$1;
(statearr_14550_14568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (3))){
var inst_14538 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14540__$1,inst_14538);
} else {
if((state_val_14541 === (2))){
var state_14540__$1 = state_14540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14540__$1,(4),ch);
} else {
if((state_val_14541 === (9))){
var inst_14527 = (state_14540[(9)]);
var inst_14520 = inst_14527;
var state_14540__$1 = (function (){var statearr_14551 = state_14540;
(statearr_14551[(7)] = inst_14520);

return statearr_14551;
})();
var statearr_14552_14569 = state_14540__$1;
(statearr_14552_14569[(2)] = null);

(statearr_14552_14569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (5))){
var inst_14520 = (state_14540[(7)]);
var state_14540__$1 = state_14540;
var statearr_14553_14570 = state_14540__$1;
(statearr_14553_14570[(2)] = inst_14520);

(statearr_14553_14570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (10))){
var inst_14534 = (state_14540[(2)]);
var state_14540__$1 = state_14540;
var statearr_14554_14571 = state_14540__$1;
(statearr_14554_14571[(2)] = inst_14534);

(statearr_14554_14571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14541 === (8))){
var inst_14527 = (state_14540[(9)]);
var inst_14530 = cljs.core.deref.call(null,inst_14527);
var state_14540__$1 = state_14540;
var statearr_14555_14572 = state_14540__$1;
(statearr_14555_14572[(2)] = inst_14530);

(statearr_14555_14572[(1)] = (10));


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
});})(c__13782__auto__))
;
return ((function (switch__13670__auto__,c__13782__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13671__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13671__auto____0 = (function (){
var statearr_14559 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14559[(0)] = cljs$core$async$reduce_$_state_machine__13671__auto__);

(statearr_14559[(1)] = (1));

return statearr_14559;
});
var cljs$core$async$reduce_$_state_machine__13671__auto____1 = (function (state_14540){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14560){if((e14560 instanceof Object)){
var ex__13674__auto__ = e14560;
var statearr_14561_14573 = state_14540;
(statearr_14561_14573[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14574 = state_14540;
state_14540 = G__14574;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13671__auto__ = function(state_14540){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13671__auto____1.call(this,state_14540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13671__auto____0;
cljs$core$async$reduce_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13671__auto____1;
return cljs$core$async$reduce_$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto__))
})();
var state__13784__auto__ = (function (){var statearr_14562 = f__13783__auto__.call(null);
(statearr_14562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto__);

return statearr_14562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto__))
);

return c__13782__auto__;
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
var args14575 = [];
var len__7123__auto___14627 = arguments.length;
var i__7124__auto___14628 = (0);
while(true){
if((i__7124__auto___14628 < len__7123__auto___14627)){
args14575.push((arguments[i__7124__auto___14628]));

var G__14629 = (i__7124__auto___14628 + (1));
i__7124__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var G__14577 = args14575.length;
switch (G__14577) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14575.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto__){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto__){
return (function (state_14602){
var state_val_14603 = (state_14602[(1)]);
if((state_val_14603 === (7))){
var inst_14584 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14604_14631 = state_14602__$1;
(statearr_14604_14631[(2)] = inst_14584);

(statearr_14604_14631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (1))){
var inst_14578 = cljs.core.seq.call(null,coll);
var inst_14579 = inst_14578;
var state_14602__$1 = (function (){var statearr_14605 = state_14602;
(statearr_14605[(7)] = inst_14579);

return statearr_14605;
})();
var statearr_14606_14632 = state_14602__$1;
(statearr_14606_14632[(2)] = null);

(statearr_14606_14632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (4))){
var inst_14579 = (state_14602[(7)]);
var inst_14582 = cljs.core.first.call(null,inst_14579);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14602__$1,(7),ch,inst_14582);
} else {
if((state_val_14603 === (13))){
var inst_14596 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14607_14633 = state_14602__$1;
(statearr_14607_14633[(2)] = inst_14596);

(statearr_14607_14633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (6))){
var inst_14587 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14587)){
var statearr_14608_14634 = state_14602__$1;
(statearr_14608_14634[(1)] = (8));

} else {
var statearr_14609_14635 = state_14602__$1;
(statearr_14609_14635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (3))){
var inst_14600 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14602__$1,inst_14600);
} else {
if((state_val_14603 === (12))){
var state_14602__$1 = state_14602;
var statearr_14610_14636 = state_14602__$1;
(statearr_14610_14636[(2)] = null);

(statearr_14610_14636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (2))){
var inst_14579 = (state_14602[(7)]);
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14579)){
var statearr_14611_14637 = state_14602__$1;
(statearr_14611_14637[(1)] = (4));

} else {
var statearr_14612_14638 = state_14602__$1;
(statearr_14612_14638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (11))){
var inst_14593 = cljs.core.async.close_BANG_.call(null,ch);
var state_14602__$1 = state_14602;
var statearr_14613_14639 = state_14602__$1;
(statearr_14613_14639[(2)] = inst_14593);

(statearr_14613_14639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (9))){
var state_14602__$1 = state_14602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14614_14640 = state_14602__$1;
(statearr_14614_14640[(1)] = (11));

} else {
var statearr_14615_14641 = state_14602__$1;
(statearr_14615_14641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (5))){
var inst_14579 = (state_14602[(7)]);
var state_14602__$1 = state_14602;
var statearr_14616_14642 = state_14602__$1;
(statearr_14616_14642[(2)] = inst_14579);

(statearr_14616_14642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (10))){
var inst_14598 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14617_14643 = state_14602__$1;
(statearr_14617_14643[(2)] = inst_14598);

(statearr_14617_14643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (8))){
var inst_14579 = (state_14602[(7)]);
var inst_14589 = cljs.core.next.call(null,inst_14579);
var inst_14579__$1 = inst_14589;
var state_14602__$1 = (function (){var statearr_14618 = state_14602;
(statearr_14618[(7)] = inst_14579__$1);

return statearr_14618;
})();
var statearr_14619_14644 = state_14602__$1;
(statearr_14619_14644[(2)] = null);

(statearr_14619_14644[(1)] = (2));


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
});})(c__13782__auto__))
;
return ((function (switch__13670__auto__,c__13782__auto__){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_14623 = [null,null,null,null,null,null,null,null];
(statearr_14623[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_14623[(1)] = (1));

return statearr_14623;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_14602){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_14602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e14624){if((e14624 instanceof Object)){
var ex__13674__auto__ = e14624;
var statearr_14625_14645 = state_14602;
(statearr_14625_14645[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14646 = state_14602;
state_14602 = G__14646;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_14602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_14602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto__))
})();
var state__13784__auto__ = (function (){var statearr_14626 = f__13783__auto__.call(null);
(statearr_14626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto__);

return statearr_14626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto__))
);

return c__13782__auto__;
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
var x__6720__auto__ = (((_ == null))?null:_);
var m__6721__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,_);
} else {
var m__6721__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,_);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6721__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,ch);
} else {
var m__6721__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,ch);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m);
} else {
var m__6721__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14868 = (function (mult,ch,cs,meta14869){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14869 = meta14869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14870,meta14869__$1){
var self__ = this;
var _14870__$1 = this;
return (new cljs.core.async.t_cljs$core$async14868(self__.mult,self__.ch,self__.cs,meta14869__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14870){
var self__ = this;
var _14870__$1 = this;
return self__.meta14869;
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14869","meta14869",1296029079,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14868";

cljs.core.async.t_cljs$core$async14868.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async14868");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14868 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14868(mult__$1,ch__$1,cs__$1,meta14869){
return (new cljs.core.async.t_cljs$core$async14868(mult__$1,ch__$1,cs__$1,meta14869));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14868(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13782__auto___15089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15089,cs,m,dchan,dctr,done){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15089,cs,m,dchan,dctr,done){
return (function (state_15001){
var state_val_15002 = (state_15001[(1)]);
if((state_val_15002 === (7))){
var inst_14997 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15003_15090 = state_15001__$1;
(statearr_15003_15090[(2)] = inst_14997);

(statearr_15003_15090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (20))){
var inst_14902 = (state_15001[(7)]);
var inst_14912 = cljs.core.first.call(null,inst_14902);
var inst_14913 = cljs.core.nth.call(null,inst_14912,(0),null);
var inst_14914 = cljs.core.nth.call(null,inst_14912,(1),null);
var state_15001__$1 = (function (){var statearr_15004 = state_15001;
(statearr_15004[(8)] = inst_14913);

return statearr_15004;
})();
if(cljs.core.truth_(inst_14914)){
var statearr_15005_15091 = state_15001__$1;
(statearr_15005_15091[(1)] = (22));

} else {
var statearr_15006_15092 = state_15001__$1;
(statearr_15006_15092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (27))){
var inst_14949 = (state_15001[(9)]);
var inst_14944 = (state_15001[(10)]);
var inst_14942 = (state_15001[(11)]);
var inst_14873 = (state_15001[(12)]);
var inst_14949__$1 = cljs.core._nth.call(null,inst_14942,inst_14944);
var inst_14950 = cljs.core.async.put_BANG_.call(null,inst_14949__$1,inst_14873,done);
var state_15001__$1 = (function (){var statearr_15007 = state_15001;
(statearr_15007[(9)] = inst_14949__$1);

return statearr_15007;
})();
if(cljs.core.truth_(inst_14950)){
var statearr_15008_15093 = state_15001__$1;
(statearr_15008_15093[(1)] = (30));

} else {
var statearr_15009_15094 = state_15001__$1;
(statearr_15009_15094[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (1))){
var state_15001__$1 = state_15001;
var statearr_15010_15095 = state_15001__$1;
(statearr_15010_15095[(2)] = null);

(statearr_15010_15095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (24))){
var inst_14902 = (state_15001[(7)]);
var inst_14919 = (state_15001[(2)]);
var inst_14920 = cljs.core.next.call(null,inst_14902);
var inst_14882 = inst_14920;
var inst_14883 = null;
var inst_14884 = (0);
var inst_14885 = (0);
var state_15001__$1 = (function (){var statearr_15011 = state_15001;
(statearr_15011[(13)] = inst_14919);

(statearr_15011[(14)] = inst_14883);

(statearr_15011[(15)] = inst_14882);

(statearr_15011[(16)] = inst_14884);

(statearr_15011[(17)] = inst_14885);

return statearr_15011;
})();
var statearr_15012_15096 = state_15001__$1;
(statearr_15012_15096[(2)] = null);

(statearr_15012_15096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (39))){
var state_15001__$1 = state_15001;
var statearr_15016_15097 = state_15001__$1;
(statearr_15016_15097[(2)] = null);

(statearr_15016_15097[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (4))){
var inst_14873 = (state_15001[(12)]);
var inst_14873__$1 = (state_15001[(2)]);
var inst_14874 = (inst_14873__$1 == null);
var state_15001__$1 = (function (){var statearr_15017 = state_15001;
(statearr_15017[(12)] = inst_14873__$1);

return statearr_15017;
})();
if(cljs.core.truth_(inst_14874)){
var statearr_15018_15098 = state_15001__$1;
(statearr_15018_15098[(1)] = (5));

} else {
var statearr_15019_15099 = state_15001__$1;
(statearr_15019_15099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (15))){
var inst_14883 = (state_15001[(14)]);
var inst_14882 = (state_15001[(15)]);
var inst_14884 = (state_15001[(16)]);
var inst_14885 = (state_15001[(17)]);
var inst_14898 = (state_15001[(2)]);
var inst_14899 = (inst_14885 + (1));
var tmp15013 = inst_14883;
var tmp15014 = inst_14882;
var tmp15015 = inst_14884;
var inst_14882__$1 = tmp15014;
var inst_14883__$1 = tmp15013;
var inst_14884__$1 = tmp15015;
var inst_14885__$1 = inst_14899;
var state_15001__$1 = (function (){var statearr_15020 = state_15001;
(statearr_15020[(18)] = inst_14898);

(statearr_15020[(14)] = inst_14883__$1);

(statearr_15020[(15)] = inst_14882__$1);

(statearr_15020[(16)] = inst_14884__$1);

(statearr_15020[(17)] = inst_14885__$1);

return statearr_15020;
})();
var statearr_15021_15100 = state_15001__$1;
(statearr_15021_15100[(2)] = null);

(statearr_15021_15100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (21))){
var inst_14923 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15025_15101 = state_15001__$1;
(statearr_15025_15101[(2)] = inst_14923);

(statearr_15025_15101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (31))){
var inst_14949 = (state_15001[(9)]);
var inst_14953 = done.call(null,null);
var inst_14954 = cljs.core.async.untap_STAR_.call(null,m,inst_14949);
var state_15001__$1 = (function (){var statearr_15026 = state_15001;
(statearr_15026[(19)] = inst_14953);

return statearr_15026;
})();
var statearr_15027_15102 = state_15001__$1;
(statearr_15027_15102[(2)] = inst_14954);

(statearr_15027_15102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (32))){
var inst_14943 = (state_15001[(20)]);
var inst_14944 = (state_15001[(10)]);
var inst_14942 = (state_15001[(11)]);
var inst_14941 = (state_15001[(21)]);
var inst_14956 = (state_15001[(2)]);
var inst_14957 = (inst_14944 + (1));
var tmp15022 = inst_14943;
var tmp15023 = inst_14942;
var tmp15024 = inst_14941;
var inst_14941__$1 = tmp15024;
var inst_14942__$1 = tmp15023;
var inst_14943__$1 = tmp15022;
var inst_14944__$1 = inst_14957;
var state_15001__$1 = (function (){var statearr_15028 = state_15001;
(statearr_15028[(20)] = inst_14943__$1);

(statearr_15028[(10)] = inst_14944__$1);

(statearr_15028[(11)] = inst_14942__$1);

(statearr_15028[(21)] = inst_14941__$1);

(statearr_15028[(22)] = inst_14956);

return statearr_15028;
})();
var statearr_15029_15103 = state_15001__$1;
(statearr_15029_15103[(2)] = null);

(statearr_15029_15103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (40))){
var inst_14969 = (state_15001[(23)]);
var inst_14973 = done.call(null,null);
var inst_14974 = cljs.core.async.untap_STAR_.call(null,m,inst_14969);
var state_15001__$1 = (function (){var statearr_15030 = state_15001;
(statearr_15030[(24)] = inst_14973);

return statearr_15030;
})();
var statearr_15031_15104 = state_15001__$1;
(statearr_15031_15104[(2)] = inst_14974);

(statearr_15031_15104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (33))){
var inst_14960 = (state_15001[(25)]);
var inst_14962 = cljs.core.chunked_seq_QMARK_.call(null,inst_14960);
var state_15001__$1 = state_15001;
if(inst_14962){
var statearr_15032_15105 = state_15001__$1;
(statearr_15032_15105[(1)] = (36));

} else {
var statearr_15033_15106 = state_15001__$1;
(statearr_15033_15106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (13))){
var inst_14892 = (state_15001[(26)]);
var inst_14895 = cljs.core.async.close_BANG_.call(null,inst_14892);
var state_15001__$1 = state_15001;
var statearr_15034_15107 = state_15001__$1;
(statearr_15034_15107[(2)] = inst_14895);

(statearr_15034_15107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (22))){
var inst_14913 = (state_15001[(8)]);
var inst_14916 = cljs.core.async.close_BANG_.call(null,inst_14913);
var state_15001__$1 = state_15001;
var statearr_15035_15108 = state_15001__$1;
(statearr_15035_15108[(2)] = inst_14916);

(statearr_15035_15108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (36))){
var inst_14960 = (state_15001[(25)]);
var inst_14964 = cljs.core.chunk_first.call(null,inst_14960);
var inst_14965 = cljs.core.chunk_rest.call(null,inst_14960);
var inst_14966 = cljs.core.count.call(null,inst_14964);
var inst_14941 = inst_14965;
var inst_14942 = inst_14964;
var inst_14943 = inst_14966;
var inst_14944 = (0);
var state_15001__$1 = (function (){var statearr_15036 = state_15001;
(statearr_15036[(20)] = inst_14943);

(statearr_15036[(10)] = inst_14944);

(statearr_15036[(11)] = inst_14942);

(statearr_15036[(21)] = inst_14941);

return statearr_15036;
})();
var statearr_15037_15109 = state_15001__$1;
(statearr_15037_15109[(2)] = null);

(statearr_15037_15109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (41))){
var inst_14960 = (state_15001[(25)]);
var inst_14976 = (state_15001[(2)]);
var inst_14977 = cljs.core.next.call(null,inst_14960);
var inst_14941 = inst_14977;
var inst_14942 = null;
var inst_14943 = (0);
var inst_14944 = (0);
var state_15001__$1 = (function (){var statearr_15038 = state_15001;
(statearr_15038[(20)] = inst_14943);

(statearr_15038[(27)] = inst_14976);

(statearr_15038[(10)] = inst_14944);

(statearr_15038[(11)] = inst_14942);

(statearr_15038[(21)] = inst_14941);

return statearr_15038;
})();
var statearr_15039_15110 = state_15001__$1;
(statearr_15039_15110[(2)] = null);

(statearr_15039_15110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (43))){
var state_15001__$1 = state_15001;
var statearr_15040_15111 = state_15001__$1;
(statearr_15040_15111[(2)] = null);

(statearr_15040_15111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (29))){
var inst_14985 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15041_15112 = state_15001__$1;
(statearr_15041_15112[(2)] = inst_14985);

(statearr_15041_15112[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (44))){
var inst_14994 = (state_15001[(2)]);
var state_15001__$1 = (function (){var statearr_15042 = state_15001;
(statearr_15042[(28)] = inst_14994);

return statearr_15042;
})();
var statearr_15043_15113 = state_15001__$1;
(statearr_15043_15113[(2)] = null);

(statearr_15043_15113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (6))){
var inst_14933 = (state_15001[(29)]);
var inst_14932 = cljs.core.deref.call(null,cs);
var inst_14933__$1 = cljs.core.keys.call(null,inst_14932);
var inst_14934 = cljs.core.count.call(null,inst_14933__$1);
var inst_14935 = cljs.core.reset_BANG_.call(null,dctr,inst_14934);
var inst_14940 = cljs.core.seq.call(null,inst_14933__$1);
var inst_14941 = inst_14940;
var inst_14942 = null;
var inst_14943 = (0);
var inst_14944 = (0);
var state_15001__$1 = (function (){var statearr_15044 = state_15001;
(statearr_15044[(20)] = inst_14943);

(statearr_15044[(30)] = inst_14935);

(statearr_15044[(10)] = inst_14944);

(statearr_15044[(11)] = inst_14942);

(statearr_15044[(29)] = inst_14933__$1);

(statearr_15044[(21)] = inst_14941);

return statearr_15044;
})();
var statearr_15045_15114 = state_15001__$1;
(statearr_15045_15114[(2)] = null);

(statearr_15045_15114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (28))){
var inst_14960 = (state_15001[(25)]);
var inst_14941 = (state_15001[(21)]);
var inst_14960__$1 = cljs.core.seq.call(null,inst_14941);
var state_15001__$1 = (function (){var statearr_15046 = state_15001;
(statearr_15046[(25)] = inst_14960__$1);

return statearr_15046;
})();
if(inst_14960__$1){
var statearr_15047_15115 = state_15001__$1;
(statearr_15047_15115[(1)] = (33));

} else {
var statearr_15048_15116 = state_15001__$1;
(statearr_15048_15116[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (25))){
var inst_14943 = (state_15001[(20)]);
var inst_14944 = (state_15001[(10)]);
var inst_14946 = (inst_14944 < inst_14943);
var inst_14947 = inst_14946;
var state_15001__$1 = state_15001;
if(cljs.core.truth_(inst_14947)){
var statearr_15049_15117 = state_15001__$1;
(statearr_15049_15117[(1)] = (27));

} else {
var statearr_15050_15118 = state_15001__$1;
(statearr_15050_15118[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (34))){
var state_15001__$1 = state_15001;
var statearr_15051_15119 = state_15001__$1;
(statearr_15051_15119[(2)] = null);

(statearr_15051_15119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (17))){
var state_15001__$1 = state_15001;
var statearr_15052_15120 = state_15001__$1;
(statearr_15052_15120[(2)] = null);

(statearr_15052_15120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (3))){
var inst_14999 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15001__$1,inst_14999);
} else {
if((state_val_15002 === (12))){
var inst_14928 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15053_15121 = state_15001__$1;
(statearr_15053_15121[(2)] = inst_14928);

(statearr_15053_15121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (2))){
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15001__$1,(4),ch);
} else {
if((state_val_15002 === (23))){
var state_15001__$1 = state_15001;
var statearr_15054_15122 = state_15001__$1;
(statearr_15054_15122[(2)] = null);

(statearr_15054_15122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (35))){
var inst_14983 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15055_15123 = state_15001__$1;
(statearr_15055_15123[(2)] = inst_14983);

(statearr_15055_15123[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (19))){
var inst_14902 = (state_15001[(7)]);
var inst_14906 = cljs.core.chunk_first.call(null,inst_14902);
var inst_14907 = cljs.core.chunk_rest.call(null,inst_14902);
var inst_14908 = cljs.core.count.call(null,inst_14906);
var inst_14882 = inst_14907;
var inst_14883 = inst_14906;
var inst_14884 = inst_14908;
var inst_14885 = (0);
var state_15001__$1 = (function (){var statearr_15056 = state_15001;
(statearr_15056[(14)] = inst_14883);

(statearr_15056[(15)] = inst_14882);

(statearr_15056[(16)] = inst_14884);

(statearr_15056[(17)] = inst_14885);

return statearr_15056;
})();
var statearr_15057_15124 = state_15001__$1;
(statearr_15057_15124[(2)] = null);

(statearr_15057_15124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (11))){
var inst_14882 = (state_15001[(15)]);
var inst_14902 = (state_15001[(7)]);
var inst_14902__$1 = cljs.core.seq.call(null,inst_14882);
var state_15001__$1 = (function (){var statearr_15058 = state_15001;
(statearr_15058[(7)] = inst_14902__$1);

return statearr_15058;
})();
if(inst_14902__$1){
var statearr_15059_15125 = state_15001__$1;
(statearr_15059_15125[(1)] = (16));

} else {
var statearr_15060_15126 = state_15001__$1;
(statearr_15060_15126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (9))){
var inst_14930 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15061_15127 = state_15001__$1;
(statearr_15061_15127[(2)] = inst_14930);

(statearr_15061_15127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (5))){
var inst_14880 = cljs.core.deref.call(null,cs);
var inst_14881 = cljs.core.seq.call(null,inst_14880);
var inst_14882 = inst_14881;
var inst_14883 = null;
var inst_14884 = (0);
var inst_14885 = (0);
var state_15001__$1 = (function (){var statearr_15062 = state_15001;
(statearr_15062[(14)] = inst_14883);

(statearr_15062[(15)] = inst_14882);

(statearr_15062[(16)] = inst_14884);

(statearr_15062[(17)] = inst_14885);

return statearr_15062;
})();
var statearr_15063_15128 = state_15001__$1;
(statearr_15063_15128[(2)] = null);

(statearr_15063_15128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (14))){
var state_15001__$1 = state_15001;
var statearr_15064_15129 = state_15001__$1;
(statearr_15064_15129[(2)] = null);

(statearr_15064_15129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (45))){
var inst_14991 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15065_15130 = state_15001__$1;
(statearr_15065_15130[(2)] = inst_14991);

(statearr_15065_15130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (26))){
var inst_14933 = (state_15001[(29)]);
var inst_14987 = (state_15001[(2)]);
var inst_14988 = cljs.core.seq.call(null,inst_14933);
var state_15001__$1 = (function (){var statearr_15066 = state_15001;
(statearr_15066[(31)] = inst_14987);

return statearr_15066;
})();
if(inst_14988){
var statearr_15067_15131 = state_15001__$1;
(statearr_15067_15131[(1)] = (42));

} else {
var statearr_15068_15132 = state_15001__$1;
(statearr_15068_15132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (16))){
var inst_14902 = (state_15001[(7)]);
var inst_14904 = cljs.core.chunked_seq_QMARK_.call(null,inst_14902);
var state_15001__$1 = state_15001;
if(inst_14904){
var statearr_15069_15133 = state_15001__$1;
(statearr_15069_15133[(1)] = (19));

} else {
var statearr_15070_15134 = state_15001__$1;
(statearr_15070_15134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (38))){
var inst_14980 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15071_15135 = state_15001__$1;
(statearr_15071_15135[(2)] = inst_14980);

(statearr_15071_15135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (30))){
var state_15001__$1 = state_15001;
var statearr_15072_15136 = state_15001__$1;
(statearr_15072_15136[(2)] = null);

(statearr_15072_15136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (10))){
var inst_14883 = (state_15001[(14)]);
var inst_14885 = (state_15001[(17)]);
var inst_14891 = cljs.core._nth.call(null,inst_14883,inst_14885);
var inst_14892 = cljs.core.nth.call(null,inst_14891,(0),null);
var inst_14893 = cljs.core.nth.call(null,inst_14891,(1),null);
var state_15001__$1 = (function (){var statearr_15073 = state_15001;
(statearr_15073[(26)] = inst_14892);

return statearr_15073;
})();
if(cljs.core.truth_(inst_14893)){
var statearr_15074_15137 = state_15001__$1;
(statearr_15074_15137[(1)] = (13));

} else {
var statearr_15075_15138 = state_15001__$1;
(statearr_15075_15138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (18))){
var inst_14926 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15076_15139 = state_15001__$1;
(statearr_15076_15139[(2)] = inst_14926);

(statearr_15076_15139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (42))){
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15001__$1,(45),dchan);
} else {
if((state_val_15002 === (37))){
var inst_14873 = (state_15001[(12)]);
var inst_14969 = (state_15001[(23)]);
var inst_14960 = (state_15001[(25)]);
var inst_14969__$1 = cljs.core.first.call(null,inst_14960);
var inst_14970 = cljs.core.async.put_BANG_.call(null,inst_14969__$1,inst_14873,done);
var state_15001__$1 = (function (){var statearr_15077 = state_15001;
(statearr_15077[(23)] = inst_14969__$1);

return statearr_15077;
})();
if(cljs.core.truth_(inst_14970)){
var statearr_15078_15140 = state_15001__$1;
(statearr_15078_15140[(1)] = (39));

} else {
var statearr_15079_15141 = state_15001__$1;
(statearr_15079_15141[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (8))){
var inst_14884 = (state_15001[(16)]);
var inst_14885 = (state_15001[(17)]);
var inst_14887 = (inst_14885 < inst_14884);
var inst_14888 = inst_14887;
var state_15001__$1 = state_15001;
if(cljs.core.truth_(inst_14888)){
var statearr_15080_15142 = state_15001__$1;
(statearr_15080_15142[(1)] = (10));

} else {
var statearr_15081_15143 = state_15001__$1;
(statearr_15081_15143[(1)] = (11));

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
});})(c__13782__auto___15089,cs,m,dchan,dctr,done))
;
return ((function (switch__13670__auto__,c__13782__auto___15089,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13671__auto__ = null;
var cljs$core$async$mult_$_state_machine__13671__auto____0 = (function (){
var statearr_15085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15085[(0)] = cljs$core$async$mult_$_state_machine__13671__auto__);

(statearr_15085[(1)] = (1));

return statearr_15085;
});
var cljs$core$async$mult_$_state_machine__13671__auto____1 = (function (state_15001){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15086){if((e15086 instanceof Object)){
var ex__13674__auto__ = e15086;
var statearr_15087_15144 = state_15001;
(statearr_15087_15144[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15145 = state_15001;
state_15001 = G__15145;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13671__auto__ = function(state_15001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13671__auto____1.call(this,state_15001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13671__auto____0;
cljs$core$async$mult_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13671__auto____1;
return cljs$core$async$mult_$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15089,cs,m,dchan,dctr,done))
})();
var state__13784__auto__ = (function (){var statearr_15088 = f__13783__auto__.call(null);
(statearr_15088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15089);

return statearr_15088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15089,cs,m,dchan,dctr,done))
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
var args15146 = [];
var len__7123__auto___15149 = arguments.length;
var i__7124__auto___15150 = (0);
while(true){
if((i__7124__auto___15150 < len__7123__auto___15149)){
args15146.push((arguments[i__7124__auto___15150]));

var G__15151 = (i__7124__auto___15150 + (1));
i__7124__auto___15150 = G__15151;
continue;
} else {
}
break;
}

var G__15148 = args15146.length;
switch (G__15148) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15146.length)].join('')));

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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,ch);
} else {
var m__6721__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,ch);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,ch);
} else {
var m__6721__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,ch);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m);
} else {
var m__6721__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,state_map);
} else {
var m__6721__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,state_map);
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
var x__6720__auto__ = (((m == null))?null:m);
var m__6721__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,m,mode);
} else {
var m__6721__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7130__auto__ = [];
var len__7123__auto___15163 = arguments.length;
var i__7124__auto___15164 = (0);
while(true){
if((i__7124__auto___15164 < len__7123__auto___15163)){
args__7130__auto__.push((arguments[i__7124__auto___15164]));

var G__15165 = (i__7124__auto___15164 + (1));
i__7124__auto___15164 = G__15165;
continue;
} else {
}
break;
}

var argseq__7131__auto__ = ((((3) < args__7130__auto__.length))?(new cljs.core.IndexedSeq(args__7130__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7131__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15157){
var map__15158 = p__15157;
var map__15158__$1 = ((((!((map__15158 == null)))?((((map__15158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15158):map__15158);
var opts = map__15158__$1;
var statearr_15160_15166 = state;
(statearr_15160_15166[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15158,map__15158__$1,opts){
return (function (val){
var statearr_15161_15167 = state;
(statearr_15161_15167[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15158,map__15158__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15162_15168 = state;
(statearr_15162_15168[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15153){
var G__15154 = cljs.core.first.call(null,seq15153);
var seq15153__$1 = cljs.core.next.call(null,seq15153);
var G__15155 = cljs.core.first.call(null,seq15153__$1);
var seq15153__$2 = cljs.core.next.call(null,seq15153__$1);
var G__15156 = cljs.core.first.call(null,seq15153__$2);
var seq15153__$3 = cljs.core.next.call(null,seq15153__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15154,G__15155,G__15156,seq15153__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15332 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15333){
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
this.meta15333 = meta15333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15334,meta15333__$1){
var self__ = this;
var _15334__$1 = this;
return (new cljs.core.async.t_cljs$core$async15332(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15334){
var self__ = this;
var _15334__$1 = this;
return self__.meta15333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15333","meta15333",-474489223,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15332";

cljs.core.async.t_cljs$core$async15332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15333){
return (new cljs.core.async.t_cljs$core$async15332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15332(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13782__auto___15495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15432){
var state_val_15433 = (state_15432[(1)]);
if((state_val_15433 === (7))){
var inst_15350 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15434_15496 = state_15432__$1;
(statearr_15434_15496[(2)] = inst_15350);

(statearr_15434_15496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (20))){
var inst_15362 = (state_15432[(7)]);
var state_15432__$1 = state_15432;
var statearr_15435_15497 = state_15432__$1;
(statearr_15435_15497[(2)] = inst_15362);

(statearr_15435_15497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (27))){
var state_15432__$1 = state_15432;
var statearr_15436_15498 = state_15432__$1;
(statearr_15436_15498[(2)] = null);

(statearr_15436_15498[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (1))){
var inst_15338 = (state_15432[(8)]);
var inst_15338__$1 = calc_state.call(null);
var inst_15340 = (inst_15338__$1 == null);
var inst_15341 = cljs.core.not.call(null,inst_15340);
var state_15432__$1 = (function (){var statearr_15437 = state_15432;
(statearr_15437[(8)] = inst_15338__$1);

return statearr_15437;
})();
if(inst_15341){
var statearr_15438_15499 = state_15432__$1;
(statearr_15438_15499[(1)] = (2));

} else {
var statearr_15439_15500 = state_15432__$1;
(statearr_15439_15500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (24))){
var inst_15406 = (state_15432[(9)]);
var inst_15392 = (state_15432[(10)]);
var inst_15385 = (state_15432[(11)]);
var inst_15406__$1 = inst_15385.call(null,inst_15392);
var state_15432__$1 = (function (){var statearr_15440 = state_15432;
(statearr_15440[(9)] = inst_15406__$1);

return statearr_15440;
})();
if(cljs.core.truth_(inst_15406__$1)){
var statearr_15441_15501 = state_15432__$1;
(statearr_15441_15501[(1)] = (29));

} else {
var statearr_15442_15502 = state_15432__$1;
(statearr_15442_15502[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (4))){
var inst_15353 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15353)){
var statearr_15443_15503 = state_15432__$1;
(statearr_15443_15503[(1)] = (8));

} else {
var statearr_15444_15504 = state_15432__$1;
(statearr_15444_15504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (15))){
var inst_15379 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15379)){
var statearr_15445_15505 = state_15432__$1;
(statearr_15445_15505[(1)] = (19));

} else {
var statearr_15446_15506 = state_15432__$1;
(statearr_15446_15506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (21))){
var inst_15384 = (state_15432[(12)]);
var inst_15384__$1 = (state_15432[(2)]);
var inst_15385 = cljs.core.get.call(null,inst_15384__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15386 = cljs.core.get.call(null,inst_15384__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15387 = cljs.core.get.call(null,inst_15384__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15432__$1 = (function (){var statearr_15447 = state_15432;
(statearr_15447[(13)] = inst_15386);

(statearr_15447[(11)] = inst_15385);

(statearr_15447[(12)] = inst_15384__$1);

return statearr_15447;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15432__$1,(22),inst_15387);
} else {
if((state_val_15433 === (31))){
var inst_15414 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15414)){
var statearr_15448_15507 = state_15432__$1;
(statearr_15448_15507[(1)] = (32));

} else {
var statearr_15449_15508 = state_15432__$1;
(statearr_15449_15508[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (32))){
var inst_15391 = (state_15432[(14)]);
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15432__$1,(35),out,inst_15391);
} else {
if((state_val_15433 === (33))){
var inst_15384 = (state_15432[(12)]);
var inst_15362 = inst_15384;
var state_15432__$1 = (function (){var statearr_15450 = state_15432;
(statearr_15450[(7)] = inst_15362);

return statearr_15450;
})();
var statearr_15451_15509 = state_15432__$1;
(statearr_15451_15509[(2)] = null);

(statearr_15451_15509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (13))){
var inst_15362 = (state_15432[(7)]);
var inst_15369 = inst_15362.cljs$lang$protocol_mask$partition0$;
var inst_15370 = (inst_15369 & (64));
var inst_15371 = inst_15362.cljs$core$ISeq$;
var inst_15372 = (inst_15370) || (inst_15371);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15372)){
var statearr_15452_15510 = state_15432__$1;
(statearr_15452_15510[(1)] = (16));

} else {
var statearr_15453_15511 = state_15432__$1;
(statearr_15453_15511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (22))){
var inst_15392 = (state_15432[(10)]);
var inst_15391 = (state_15432[(14)]);
var inst_15390 = (state_15432[(2)]);
var inst_15391__$1 = cljs.core.nth.call(null,inst_15390,(0),null);
var inst_15392__$1 = cljs.core.nth.call(null,inst_15390,(1),null);
var inst_15393 = (inst_15391__$1 == null);
var inst_15394 = cljs.core._EQ_.call(null,inst_15392__$1,change);
var inst_15395 = (inst_15393) || (inst_15394);
var state_15432__$1 = (function (){var statearr_15454 = state_15432;
(statearr_15454[(10)] = inst_15392__$1);

(statearr_15454[(14)] = inst_15391__$1);

return statearr_15454;
})();
if(cljs.core.truth_(inst_15395)){
var statearr_15455_15512 = state_15432__$1;
(statearr_15455_15512[(1)] = (23));

} else {
var statearr_15456_15513 = state_15432__$1;
(statearr_15456_15513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (36))){
var inst_15384 = (state_15432[(12)]);
var inst_15362 = inst_15384;
var state_15432__$1 = (function (){var statearr_15457 = state_15432;
(statearr_15457[(7)] = inst_15362);

return statearr_15457;
})();
var statearr_15458_15514 = state_15432__$1;
(statearr_15458_15514[(2)] = null);

(statearr_15458_15514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (29))){
var inst_15406 = (state_15432[(9)]);
var state_15432__$1 = state_15432;
var statearr_15459_15515 = state_15432__$1;
(statearr_15459_15515[(2)] = inst_15406);

(statearr_15459_15515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (6))){
var state_15432__$1 = state_15432;
var statearr_15460_15516 = state_15432__$1;
(statearr_15460_15516[(2)] = false);

(statearr_15460_15516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (28))){
var inst_15402 = (state_15432[(2)]);
var inst_15403 = calc_state.call(null);
var inst_15362 = inst_15403;
var state_15432__$1 = (function (){var statearr_15461 = state_15432;
(statearr_15461[(7)] = inst_15362);

(statearr_15461[(15)] = inst_15402);

return statearr_15461;
})();
var statearr_15462_15517 = state_15432__$1;
(statearr_15462_15517[(2)] = null);

(statearr_15462_15517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (25))){
var inst_15428 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15463_15518 = state_15432__$1;
(statearr_15463_15518[(2)] = inst_15428);

(statearr_15463_15518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (34))){
var inst_15426 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15464_15519 = state_15432__$1;
(statearr_15464_15519[(2)] = inst_15426);

(statearr_15464_15519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (17))){
var state_15432__$1 = state_15432;
var statearr_15465_15520 = state_15432__$1;
(statearr_15465_15520[(2)] = false);

(statearr_15465_15520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (3))){
var state_15432__$1 = state_15432;
var statearr_15466_15521 = state_15432__$1;
(statearr_15466_15521[(2)] = false);

(statearr_15466_15521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (12))){
var inst_15430 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15432__$1,inst_15430);
} else {
if((state_val_15433 === (2))){
var inst_15338 = (state_15432[(8)]);
var inst_15343 = inst_15338.cljs$lang$protocol_mask$partition0$;
var inst_15344 = (inst_15343 & (64));
var inst_15345 = inst_15338.cljs$core$ISeq$;
var inst_15346 = (inst_15344) || (inst_15345);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15346)){
var statearr_15467_15522 = state_15432__$1;
(statearr_15467_15522[(1)] = (5));

} else {
var statearr_15468_15523 = state_15432__$1;
(statearr_15468_15523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (23))){
var inst_15391 = (state_15432[(14)]);
var inst_15397 = (inst_15391 == null);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15397)){
var statearr_15469_15524 = state_15432__$1;
(statearr_15469_15524[(1)] = (26));

} else {
var statearr_15470_15525 = state_15432__$1;
(statearr_15470_15525[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (35))){
var inst_15417 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
if(cljs.core.truth_(inst_15417)){
var statearr_15471_15526 = state_15432__$1;
(statearr_15471_15526[(1)] = (36));

} else {
var statearr_15472_15527 = state_15432__$1;
(statearr_15472_15527[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (19))){
var inst_15362 = (state_15432[(7)]);
var inst_15381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15362);
var state_15432__$1 = state_15432;
var statearr_15473_15528 = state_15432__$1;
(statearr_15473_15528[(2)] = inst_15381);

(statearr_15473_15528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (11))){
var inst_15362 = (state_15432[(7)]);
var inst_15366 = (inst_15362 == null);
var inst_15367 = cljs.core.not.call(null,inst_15366);
var state_15432__$1 = state_15432;
if(inst_15367){
var statearr_15474_15529 = state_15432__$1;
(statearr_15474_15529[(1)] = (13));

} else {
var statearr_15475_15530 = state_15432__$1;
(statearr_15475_15530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (9))){
var inst_15338 = (state_15432[(8)]);
var state_15432__$1 = state_15432;
var statearr_15476_15531 = state_15432__$1;
(statearr_15476_15531[(2)] = inst_15338);

(statearr_15476_15531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (5))){
var state_15432__$1 = state_15432;
var statearr_15477_15532 = state_15432__$1;
(statearr_15477_15532[(2)] = true);

(statearr_15477_15532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (14))){
var state_15432__$1 = state_15432;
var statearr_15478_15533 = state_15432__$1;
(statearr_15478_15533[(2)] = false);

(statearr_15478_15533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (26))){
var inst_15392 = (state_15432[(10)]);
var inst_15399 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15392);
var state_15432__$1 = state_15432;
var statearr_15479_15534 = state_15432__$1;
(statearr_15479_15534[(2)] = inst_15399);

(statearr_15479_15534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (16))){
var state_15432__$1 = state_15432;
var statearr_15480_15535 = state_15432__$1;
(statearr_15480_15535[(2)] = true);

(statearr_15480_15535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (38))){
var inst_15422 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15481_15536 = state_15432__$1;
(statearr_15481_15536[(2)] = inst_15422);

(statearr_15481_15536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (30))){
var inst_15386 = (state_15432[(13)]);
var inst_15392 = (state_15432[(10)]);
var inst_15385 = (state_15432[(11)]);
var inst_15409 = cljs.core.empty_QMARK_.call(null,inst_15385);
var inst_15410 = inst_15386.call(null,inst_15392);
var inst_15411 = cljs.core.not.call(null,inst_15410);
var inst_15412 = (inst_15409) && (inst_15411);
var state_15432__$1 = state_15432;
var statearr_15482_15537 = state_15432__$1;
(statearr_15482_15537[(2)] = inst_15412);

(statearr_15482_15537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (10))){
var inst_15338 = (state_15432[(8)]);
var inst_15358 = (state_15432[(2)]);
var inst_15359 = cljs.core.get.call(null,inst_15358,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15360 = cljs.core.get.call(null,inst_15358,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15361 = cljs.core.get.call(null,inst_15358,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15362 = inst_15338;
var state_15432__$1 = (function (){var statearr_15483 = state_15432;
(statearr_15483[(16)] = inst_15361);

(statearr_15483[(7)] = inst_15362);

(statearr_15483[(17)] = inst_15360);

(statearr_15483[(18)] = inst_15359);

return statearr_15483;
})();
var statearr_15484_15538 = state_15432__$1;
(statearr_15484_15538[(2)] = null);

(statearr_15484_15538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (18))){
var inst_15376 = (state_15432[(2)]);
var state_15432__$1 = state_15432;
var statearr_15485_15539 = state_15432__$1;
(statearr_15485_15539[(2)] = inst_15376);

(statearr_15485_15539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (37))){
var state_15432__$1 = state_15432;
var statearr_15486_15540 = state_15432__$1;
(statearr_15486_15540[(2)] = null);

(statearr_15486_15540[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15433 === (8))){
var inst_15338 = (state_15432[(8)]);
var inst_15355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15338);
var state_15432__$1 = state_15432;
var statearr_15487_15541 = state_15432__$1;
(statearr_15487_15541[(2)] = inst_15355);

(statearr_15487_15541[(1)] = (10));


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
});})(c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13670__auto__,c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13671__auto__ = null;
var cljs$core$async$mix_$_state_machine__13671__auto____0 = (function (){
var statearr_15491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15491[(0)] = cljs$core$async$mix_$_state_machine__13671__auto__);

(statearr_15491[(1)] = (1));

return statearr_15491;
});
var cljs$core$async$mix_$_state_machine__13671__auto____1 = (function (state_15432){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15492){if((e15492 instanceof Object)){
var ex__13674__auto__ = e15492;
var statearr_15493_15542 = state_15432;
(statearr_15493_15542[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15543 = state_15432;
state_15432 = G__15543;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13671__auto__ = function(state_15432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13671__auto____1.call(this,state_15432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13671__auto____0;
cljs$core$async$mix_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13671__auto____1;
return cljs$core$async$mix_$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13784__auto__ = (function (){var statearr_15494 = f__13783__auto__.call(null);
(statearr_15494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15495);

return statearr_15494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6720__auto__ = (((p == null))?null:p);
var m__6721__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6721__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6720__auto__ = (((p == null))?null:p);
var m__6721__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,p,v,ch);
} else {
var m__6721__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15544 = [];
var len__7123__auto___15547 = arguments.length;
var i__7124__auto___15548 = (0);
while(true){
if((i__7124__auto___15548 < len__7123__auto___15547)){
args15544.push((arguments[i__7124__auto___15548]));

var G__15549 = (i__7124__auto___15548 + (1));
i__7124__auto___15548 = G__15549;
continue;
} else {
}
break;
}

var G__15546 = args15544.length;
switch (G__15546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15544.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6720__auto__ = (((p == null))?null:p);
var m__6721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,p);
} else {
var m__6721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,p);
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
var x__6720__auto__ = (((p == null))?null:p);
var m__6721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6720__auto__)]);
if(!((m__6721__auto__ == null))){
return m__6721__auto__.call(null,p,v);
} else {
var m__6721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6721__auto____$1 == null))){
return m__6721__auto____$1.call(null,p,v);
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
var args15552 = [];
var len__7123__auto___15677 = arguments.length;
var i__7124__auto___15678 = (0);
while(true){
if((i__7124__auto___15678 < len__7123__auto___15677)){
args15552.push((arguments[i__7124__auto___15678]));

var G__15679 = (i__7124__auto___15678 + (1));
i__7124__auto___15678 = G__15679;
continue;
} else {
}
break;
}

var G__15554 = args15552.length;
switch (G__15554) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15552.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6065__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6065__auto__)){
return or__6065__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6065__auto__,mults){
return (function (p1__15551_SHARP_){
if(cljs.core.truth_(p1__15551_SHARP_.call(null,topic))){
return p1__15551_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15551_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6065__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15556 = meta15556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15557,meta15556__$1){
var self__ = this;
var _15557__$1 = this;
return (new cljs.core.async.t_cljs$core$async15555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15556__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15557){
var self__ = this;
var _15557__$1 = this;
return self__.meta15556;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15556","meta15556",-1927960482,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15555";

cljs.core.async.t_cljs$core$async15555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15555");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15555 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15556){
return (new cljs.core.async.t_cljs$core$async15555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15556));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13782__auto___15681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15681,mults,ensure_mult,p){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15681,mults,ensure_mult,p){
return (function (state_15629){
var state_val_15630 = (state_15629[(1)]);
if((state_val_15630 === (7))){
var inst_15625 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15631_15682 = state_15629__$1;
(statearr_15631_15682[(2)] = inst_15625);

(statearr_15631_15682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (20))){
var state_15629__$1 = state_15629;
var statearr_15632_15683 = state_15629__$1;
(statearr_15632_15683[(2)] = null);

(statearr_15632_15683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (1))){
var state_15629__$1 = state_15629;
var statearr_15633_15684 = state_15629__$1;
(statearr_15633_15684[(2)] = null);

(statearr_15633_15684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (24))){
var inst_15608 = (state_15629[(7)]);
var inst_15617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15608);
var state_15629__$1 = state_15629;
var statearr_15634_15685 = state_15629__$1;
(statearr_15634_15685[(2)] = inst_15617);

(statearr_15634_15685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (4))){
var inst_15560 = (state_15629[(8)]);
var inst_15560__$1 = (state_15629[(2)]);
var inst_15561 = (inst_15560__$1 == null);
var state_15629__$1 = (function (){var statearr_15635 = state_15629;
(statearr_15635[(8)] = inst_15560__$1);

return statearr_15635;
})();
if(cljs.core.truth_(inst_15561)){
var statearr_15636_15686 = state_15629__$1;
(statearr_15636_15686[(1)] = (5));

} else {
var statearr_15637_15687 = state_15629__$1;
(statearr_15637_15687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (15))){
var inst_15602 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15638_15688 = state_15629__$1;
(statearr_15638_15688[(2)] = inst_15602);

(statearr_15638_15688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (21))){
var inst_15622 = (state_15629[(2)]);
var state_15629__$1 = (function (){var statearr_15639 = state_15629;
(statearr_15639[(9)] = inst_15622);

return statearr_15639;
})();
var statearr_15640_15689 = state_15629__$1;
(statearr_15640_15689[(2)] = null);

(statearr_15640_15689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (13))){
var inst_15584 = (state_15629[(10)]);
var inst_15586 = cljs.core.chunked_seq_QMARK_.call(null,inst_15584);
var state_15629__$1 = state_15629;
if(inst_15586){
var statearr_15641_15690 = state_15629__$1;
(statearr_15641_15690[(1)] = (16));

} else {
var statearr_15642_15691 = state_15629__$1;
(statearr_15642_15691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (22))){
var inst_15614 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
if(cljs.core.truth_(inst_15614)){
var statearr_15643_15692 = state_15629__$1;
(statearr_15643_15692[(1)] = (23));

} else {
var statearr_15644_15693 = state_15629__$1;
(statearr_15644_15693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (6))){
var inst_15610 = (state_15629[(11)]);
var inst_15560 = (state_15629[(8)]);
var inst_15608 = (state_15629[(7)]);
var inst_15608__$1 = topic_fn.call(null,inst_15560);
var inst_15609 = cljs.core.deref.call(null,mults);
var inst_15610__$1 = cljs.core.get.call(null,inst_15609,inst_15608__$1);
var state_15629__$1 = (function (){var statearr_15645 = state_15629;
(statearr_15645[(11)] = inst_15610__$1);

(statearr_15645[(7)] = inst_15608__$1);

return statearr_15645;
})();
if(cljs.core.truth_(inst_15610__$1)){
var statearr_15646_15694 = state_15629__$1;
(statearr_15646_15694[(1)] = (19));

} else {
var statearr_15647_15695 = state_15629__$1;
(statearr_15647_15695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (25))){
var inst_15619 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15648_15696 = state_15629__$1;
(statearr_15648_15696[(2)] = inst_15619);

(statearr_15648_15696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (17))){
var inst_15584 = (state_15629[(10)]);
var inst_15593 = cljs.core.first.call(null,inst_15584);
var inst_15594 = cljs.core.async.muxch_STAR_.call(null,inst_15593);
var inst_15595 = cljs.core.async.close_BANG_.call(null,inst_15594);
var inst_15596 = cljs.core.next.call(null,inst_15584);
var inst_15570 = inst_15596;
var inst_15571 = null;
var inst_15572 = (0);
var inst_15573 = (0);
var state_15629__$1 = (function (){var statearr_15649 = state_15629;
(statearr_15649[(12)] = inst_15572);

(statearr_15649[(13)] = inst_15595);

(statearr_15649[(14)] = inst_15573);

(statearr_15649[(15)] = inst_15571);

(statearr_15649[(16)] = inst_15570);

return statearr_15649;
})();
var statearr_15650_15697 = state_15629__$1;
(statearr_15650_15697[(2)] = null);

(statearr_15650_15697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (3))){
var inst_15627 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15629__$1,inst_15627);
} else {
if((state_val_15630 === (12))){
var inst_15604 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15651_15698 = state_15629__$1;
(statearr_15651_15698[(2)] = inst_15604);

(statearr_15651_15698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (2))){
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15629__$1,(4),ch);
} else {
if((state_val_15630 === (23))){
var state_15629__$1 = state_15629;
var statearr_15652_15699 = state_15629__$1;
(statearr_15652_15699[(2)] = null);

(statearr_15652_15699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (19))){
var inst_15610 = (state_15629[(11)]);
var inst_15560 = (state_15629[(8)]);
var inst_15612 = cljs.core.async.muxch_STAR_.call(null,inst_15610);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15629__$1,(22),inst_15612,inst_15560);
} else {
if((state_val_15630 === (11))){
var inst_15584 = (state_15629[(10)]);
var inst_15570 = (state_15629[(16)]);
var inst_15584__$1 = cljs.core.seq.call(null,inst_15570);
var state_15629__$1 = (function (){var statearr_15653 = state_15629;
(statearr_15653[(10)] = inst_15584__$1);

return statearr_15653;
})();
if(inst_15584__$1){
var statearr_15654_15700 = state_15629__$1;
(statearr_15654_15700[(1)] = (13));

} else {
var statearr_15655_15701 = state_15629__$1;
(statearr_15655_15701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (9))){
var inst_15606 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15656_15702 = state_15629__$1;
(statearr_15656_15702[(2)] = inst_15606);

(statearr_15656_15702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (5))){
var inst_15567 = cljs.core.deref.call(null,mults);
var inst_15568 = cljs.core.vals.call(null,inst_15567);
var inst_15569 = cljs.core.seq.call(null,inst_15568);
var inst_15570 = inst_15569;
var inst_15571 = null;
var inst_15572 = (0);
var inst_15573 = (0);
var state_15629__$1 = (function (){var statearr_15657 = state_15629;
(statearr_15657[(12)] = inst_15572);

(statearr_15657[(14)] = inst_15573);

(statearr_15657[(15)] = inst_15571);

(statearr_15657[(16)] = inst_15570);

return statearr_15657;
})();
var statearr_15658_15703 = state_15629__$1;
(statearr_15658_15703[(2)] = null);

(statearr_15658_15703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (14))){
var state_15629__$1 = state_15629;
var statearr_15662_15704 = state_15629__$1;
(statearr_15662_15704[(2)] = null);

(statearr_15662_15704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (16))){
var inst_15584 = (state_15629[(10)]);
var inst_15588 = cljs.core.chunk_first.call(null,inst_15584);
var inst_15589 = cljs.core.chunk_rest.call(null,inst_15584);
var inst_15590 = cljs.core.count.call(null,inst_15588);
var inst_15570 = inst_15589;
var inst_15571 = inst_15588;
var inst_15572 = inst_15590;
var inst_15573 = (0);
var state_15629__$1 = (function (){var statearr_15663 = state_15629;
(statearr_15663[(12)] = inst_15572);

(statearr_15663[(14)] = inst_15573);

(statearr_15663[(15)] = inst_15571);

(statearr_15663[(16)] = inst_15570);

return statearr_15663;
})();
var statearr_15664_15705 = state_15629__$1;
(statearr_15664_15705[(2)] = null);

(statearr_15664_15705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (10))){
var inst_15572 = (state_15629[(12)]);
var inst_15573 = (state_15629[(14)]);
var inst_15571 = (state_15629[(15)]);
var inst_15570 = (state_15629[(16)]);
var inst_15578 = cljs.core._nth.call(null,inst_15571,inst_15573);
var inst_15579 = cljs.core.async.muxch_STAR_.call(null,inst_15578);
var inst_15580 = cljs.core.async.close_BANG_.call(null,inst_15579);
var inst_15581 = (inst_15573 + (1));
var tmp15659 = inst_15572;
var tmp15660 = inst_15571;
var tmp15661 = inst_15570;
var inst_15570__$1 = tmp15661;
var inst_15571__$1 = tmp15660;
var inst_15572__$1 = tmp15659;
var inst_15573__$1 = inst_15581;
var state_15629__$1 = (function (){var statearr_15665 = state_15629;
(statearr_15665[(12)] = inst_15572__$1);

(statearr_15665[(14)] = inst_15573__$1);

(statearr_15665[(15)] = inst_15571__$1);

(statearr_15665[(17)] = inst_15580);

(statearr_15665[(16)] = inst_15570__$1);

return statearr_15665;
})();
var statearr_15666_15706 = state_15629__$1;
(statearr_15666_15706[(2)] = null);

(statearr_15666_15706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (18))){
var inst_15599 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15667_15707 = state_15629__$1;
(statearr_15667_15707[(2)] = inst_15599);

(statearr_15667_15707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (8))){
var inst_15572 = (state_15629[(12)]);
var inst_15573 = (state_15629[(14)]);
var inst_15575 = (inst_15573 < inst_15572);
var inst_15576 = inst_15575;
var state_15629__$1 = state_15629;
if(cljs.core.truth_(inst_15576)){
var statearr_15668_15708 = state_15629__$1;
(statearr_15668_15708[(1)] = (10));

} else {
var statearr_15669_15709 = state_15629__$1;
(statearr_15669_15709[(1)] = (11));

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
});})(c__13782__auto___15681,mults,ensure_mult,p))
;
return ((function (switch__13670__auto__,c__13782__auto___15681,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_15673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15673[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_15673[(1)] = (1));

return statearr_15673;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_15629){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15674){if((e15674 instanceof Object)){
var ex__13674__auto__ = e15674;
var statearr_15675_15710 = state_15629;
(statearr_15675_15710[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15711 = state_15629;
state_15629 = G__15711;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_15629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_15629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15681,mults,ensure_mult,p))
})();
var state__13784__auto__ = (function (){var statearr_15676 = f__13783__auto__.call(null);
(statearr_15676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15681);

return statearr_15676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15681,mults,ensure_mult,p))
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
var args15712 = [];
var len__7123__auto___15715 = arguments.length;
var i__7124__auto___15716 = (0);
while(true){
if((i__7124__auto___15716 < len__7123__auto___15715)){
args15712.push((arguments[i__7124__auto___15716]));

var G__15717 = (i__7124__auto___15716 + (1));
i__7124__auto___15716 = G__15717;
continue;
} else {
}
break;
}

var G__15714 = args15712.length;
switch (G__15714) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15712.length)].join('')));

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
var args15719 = [];
var len__7123__auto___15722 = arguments.length;
var i__7124__auto___15723 = (0);
while(true){
if((i__7124__auto___15723 < len__7123__auto___15722)){
args15719.push((arguments[i__7124__auto___15723]));

var G__15724 = (i__7124__auto___15723 + (1));
i__7124__auto___15723 = G__15724;
continue;
} else {
}
break;
}

var G__15721 = args15719.length;
switch (G__15721) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15719.length)].join('')));

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
var args15726 = [];
var len__7123__auto___15797 = arguments.length;
var i__7124__auto___15798 = (0);
while(true){
if((i__7124__auto___15798 < len__7123__auto___15797)){
args15726.push((arguments[i__7124__auto___15798]));

var G__15799 = (i__7124__auto___15798 + (1));
i__7124__auto___15798 = G__15799;
continue;
} else {
}
break;
}

var G__15728 = args15726.length;
switch (G__15728) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15726.length)].join('')));

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
var c__13782__auto___15801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15767){
var state_val_15768 = (state_15767[(1)]);
if((state_val_15768 === (7))){
var state_15767__$1 = state_15767;
var statearr_15769_15802 = state_15767__$1;
(statearr_15769_15802[(2)] = null);

(statearr_15769_15802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (1))){
var state_15767__$1 = state_15767;
var statearr_15770_15803 = state_15767__$1;
(statearr_15770_15803[(2)] = null);

(statearr_15770_15803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (4))){
var inst_15731 = (state_15767[(7)]);
var inst_15733 = (inst_15731 < cnt);
var state_15767__$1 = state_15767;
if(cljs.core.truth_(inst_15733)){
var statearr_15771_15804 = state_15767__$1;
(statearr_15771_15804[(1)] = (6));

} else {
var statearr_15772_15805 = state_15767__$1;
(statearr_15772_15805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (15))){
var inst_15763 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
var statearr_15773_15806 = state_15767__$1;
(statearr_15773_15806[(2)] = inst_15763);

(statearr_15773_15806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (13))){
var inst_15756 = cljs.core.async.close_BANG_.call(null,out);
var state_15767__$1 = state_15767;
var statearr_15774_15807 = state_15767__$1;
(statearr_15774_15807[(2)] = inst_15756);

(statearr_15774_15807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (6))){
var state_15767__$1 = state_15767;
var statearr_15775_15808 = state_15767__$1;
(statearr_15775_15808[(2)] = null);

(statearr_15775_15808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (3))){
var inst_15765 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15767__$1,inst_15765);
} else {
if((state_val_15768 === (12))){
var inst_15753 = (state_15767[(8)]);
var inst_15753__$1 = (state_15767[(2)]);
var inst_15754 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15753__$1);
var state_15767__$1 = (function (){var statearr_15776 = state_15767;
(statearr_15776[(8)] = inst_15753__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15754)){
var statearr_15777_15809 = state_15767__$1;
(statearr_15777_15809[(1)] = (13));

} else {
var statearr_15778_15810 = state_15767__$1;
(statearr_15778_15810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (2))){
var inst_15730 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15731 = (0);
var state_15767__$1 = (function (){var statearr_15779 = state_15767;
(statearr_15779[(9)] = inst_15730);

(statearr_15779[(7)] = inst_15731);

return statearr_15779;
})();
var statearr_15780_15811 = state_15767__$1;
(statearr_15780_15811[(2)] = null);

(statearr_15780_15811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (11))){
var inst_15731 = (state_15767[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15767,(10),Object,null,(9));
var inst_15740 = chs__$1.call(null,inst_15731);
var inst_15741 = done.call(null,inst_15731);
var inst_15742 = cljs.core.async.take_BANG_.call(null,inst_15740,inst_15741);
var state_15767__$1 = state_15767;
var statearr_15781_15812 = state_15767__$1;
(statearr_15781_15812[(2)] = inst_15742);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (9))){
var inst_15731 = (state_15767[(7)]);
var inst_15744 = (state_15767[(2)]);
var inst_15745 = (inst_15731 + (1));
var inst_15731__$1 = inst_15745;
var state_15767__$1 = (function (){var statearr_15782 = state_15767;
(statearr_15782[(7)] = inst_15731__$1);

(statearr_15782[(10)] = inst_15744);

return statearr_15782;
})();
var statearr_15783_15813 = state_15767__$1;
(statearr_15783_15813[(2)] = null);

(statearr_15783_15813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (5))){
var inst_15751 = (state_15767[(2)]);
var state_15767__$1 = (function (){var statearr_15784 = state_15767;
(statearr_15784[(11)] = inst_15751);

return statearr_15784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15767__$1,(12),dchan);
} else {
if((state_val_15768 === (14))){
var inst_15753 = (state_15767[(8)]);
var inst_15758 = cljs.core.apply.call(null,f,inst_15753);
var state_15767__$1 = state_15767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15767__$1,(16),out,inst_15758);
} else {
if((state_val_15768 === (16))){
var inst_15760 = (state_15767[(2)]);
var state_15767__$1 = (function (){var statearr_15785 = state_15767;
(statearr_15785[(12)] = inst_15760);

return statearr_15785;
})();
var statearr_15786_15814 = state_15767__$1;
(statearr_15786_15814[(2)] = null);

(statearr_15786_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (10))){
var inst_15735 = (state_15767[(2)]);
var inst_15736 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15767__$1 = (function (){var statearr_15787 = state_15767;
(statearr_15787[(13)] = inst_15735);

return statearr_15787;
})();
var statearr_15788_15815 = state_15767__$1;
(statearr_15788_15815[(2)] = inst_15736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15767__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15768 === (8))){
var inst_15749 = (state_15767[(2)]);
var state_15767__$1 = state_15767;
var statearr_15789_15816 = state_15767__$1;
(statearr_15789_15816[(2)] = inst_15749);

(statearr_15789_15816[(1)] = (5));


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
});})(c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13670__auto__,c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_15793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15793[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_15793[(1)] = (1));

return statearr_15793;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_15767){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15794){if((e15794 instanceof Object)){
var ex__13674__auto__ = e15794;
var statearr_15795_15817 = state_15767;
(statearr_15795_15817[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15818 = state_15767;
state_15767 = G__15818;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_15767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_15767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13784__auto__ = (function (){var statearr_15796 = f__13783__auto__.call(null);
(statearr_15796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15801);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15801,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15820 = [];
var len__7123__auto___15876 = arguments.length;
var i__7124__auto___15877 = (0);
while(true){
if((i__7124__auto___15877 < len__7123__auto___15876)){
args15820.push((arguments[i__7124__auto___15877]));

var G__15878 = (i__7124__auto___15877 + (1));
i__7124__auto___15877 = G__15878;
continue;
} else {
}
break;
}

var G__15822 = args15820.length;
switch (G__15822) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15820.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___15880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15880,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15880,out){
return (function (state_15852){
var state_val_15853 = (state_15852[(1)]);
if((state_val_15853 === (7))){
var inst_15831 = (state_15852[(7)]);
var inst_15832 = (state_15852[(8)]);
var inst_15831__$1 = (state_15852[(2)]);
var inst_15832__$1 = cljs.core.nth.call(null,inst_15831__$1,(0),null);
var inst_15833 = cljs.core.nth.call(null,inst_15831__$1,(1),null);
var inst_15834 = (inst_15832__$1 == null);
var state_15852__$1 = (function (){var statearr_15854 = state_15852;
(statearr_15854[(7)] = inst_15831__$1);

(statearr_15854[(9)] = inst_15833);

(statearr_15854[(8)] = inst_15832__$1);

return statearr_15854;
})();
if(cljs.core.truth_(inst_15834)){
var statearr_15855_15881 = state_15852__$1;
(statearr_15855_15881[(1)] = (8));

} else {
var statearr_15856_15882 = state_15852__$1;
(statearr_15856_15882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (1))){
var inst_15823 = cljs.core.vec.call(null,chs);
var inst_15824 = inst_15823;
var state_15852__$1 = (function (){var statearr_15857 = state_15852;
(statearr_15857[(10)] = inst_15824);

return statearr_15857;
})();
var statearr_15858_15883 = state_15852__$1;
(statearr_15858_15883[(2)] = null);

(statearr_15858_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (4))){
var inst_15824 = (state_15852[(10)]);
var state_15852__$1 = state_15852;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15852__$1,(7),inst_15824);
} else {
if((state_val_15853 === (6))){
var inst_15848 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15859_15884 = state_15852__$1;
(statearr_15859_15884[(2)] = inst_15848);

(statearr_15859_15884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (3))){
var inst_15850 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15852__$1,inst_15850);
} else {
if((state_val_15853 === (2))){
var inst_15824 = (state_15852[(10)]);
var inst_15826 = cljs.core.count.call(null,inst_15824);
var inst_15827 = (inst_15826 > (0));
var state_15852__$1 = state_15852;
if(cljs.core.truth_(inst_15827)){
var statearr_15861_15885 = state_15852__$1;
(statearr_15861_15885[(1)] = (4));

} else {
var statearr_15862_15886 = state_15852__$1;
(statearr_15862_15886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (11))){
var inst_15824 = (state_15852[(10)]);
var inst_15841 = (state_15852[(2)]);
var tmp15860 = inst_15824;
var inst_15824__$1 = tmp15860;
var state_15852__$1 = (function (){var statearr_15863 = state_15852;
(statearr_15863[(11)] = inst_15841);

(statearr_15863[(10)] = inst_15824__$1);

return statearr_15863;
})();
var statearr_15864_15887 = state_15852__$1;
(statearr_15864_15887[(2)] = null);

(statearr_15864_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (9))){
var inst_15832 = (state_15852[(8)]);
var state_15852__$1 = state_15852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15852__$1,(11),out,inst_15832);
} else {
if((state_val_15853 === (5))){
var inst_15846 = cljs.core.async.close_BANG_.call(null,out);
var state_15852__$1 = state_15852;
var statearr_15865_15888 = state_15852__$1;
(statearr_15865_15888[(2)] = inst_15846);

(statearr_15865_15888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (10))){
var inst_15844 = (state_15852[(2)]);
var state_15852__$1 = state_15852;
var statearr_15866_15889 = state_15852__$1;
(statearr_15866_15889[(2)] = inst_15844);

(statearr_15866_15889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15853 === (8))){
var inst_15831 = (state_15852[(7)]);
var inst_15833 = (state_15852[(9)]);
var inst_15824 = (state_15852[(10)]);
var inst_15832 = (state_15852[(8)]);
var inst_15836 = (function (){var cs = inst_15824;
var vec__15829 = inst_15831;
var v = inst_15832;
var c = inst_15833;
return ((function (cs,vec__15829,v,c,inst_15831,inst_15833,inst_15824,inst_15832,state_val_15853,c__13782__auto___15880,out){
return (function (p1__15819_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15819_SHARP_);
});
;})(cs,vec__15829,v,c,inst_15831,inst_15833,inst_15824,inst_15832,state_val_15853,c__13782__auto___15880,out))
})();
var inst_15837 = cljs.core.filterv.call(null,inst_15836,inst_15824);
var inst_15824__$1 = inst_15837;
var state_15852__$1 = (function (){var statearr_15867 = state_15852;
(statearr_15867[(10)] = inst_15824__$1);

return statearr_15867;
})();
var statearr_15868_15890 = state_15852__$1;
(statearr_15868_15890[(2)] = null);

(statearr_15868_15890[(1)] = (2));


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
});})(c__13782__auto___15880,out))
;
return ((function (switch__13670__auto__,c__13782__auto___15880,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_15872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15872[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_15872[(1)] = (1));

return statearr_15872;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_15852){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15873){if((e15873 instanceof Object)){
var ex__13674__auto__ = e15873;
var statearr_15874_15891 = state_15852;
(statearr_15874_15891[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15892 = state_15852;
state_15852 = G__15892;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_15852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_15852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15880,out))
})();
var state__13784__auto__ = (function (){var statearr_15875 = f__13783__auto__.call(null);
(statearr_15875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15880);

return statearr_15875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15880,out))
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
var args15893 = [];
var len__7123__auto___15942 = arguments.length;
var i__7124__auto___15943 = (0);
while(true){
if((i__7124__auto___15943 < len__7123__auto___15942)){
args15893.push((arguments[i__7124__auto___15943]));

var G__15944 = (i__7124__auto___15943 + (1));
i__7124__auto___15943 = G__15944;
continue;
} else {
}
break;
}

var G__15895 = args15893.length;
switch (G__15895) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15893.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___15946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___15946,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___15946,out){
return (function (state_15919){
var state_val_15920 = (state_15919[(1)]);
if((state_val_15920 === (7))){
var inst_15901 = (state_15919[(7)]);
var inst_15901__$1 = (state_15919[(2)]);
var inst_15902 = (inst_15901__$1 == null);
var inst_15903 = cljs.core.not.call(null,inst_15902);
var state_15919__$1 = (function (){var statearr_15921 = state_15919;
(statearr_15921[(7)] = inst_15901__$1);

return statearr_15921;
})();
if(inst_15903){
var statearr_15922_15947 = state_15919__$1;
(statearr_15922_15947[(1)] = (8));

} else {
var statearr_15923_15948 = state_15919__$1;
(statearr_15923_15948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (1))){
var inst_15896 = (0);
var state_15919__$1 = (function (){var statearr_15924 = state_15919;
(statearr_15924[(8)] = inst_15896);

return statearr_15924;
})();
var statearr_15925_15949 = state_15919__$1;
(statearr_15925_15949[(2)] = null);

(statearr_15925_15949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (4))){
var state_15919__$1 = state_15919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15919__$1,(7),ch);
} else {
if((state_val_15920 === (6))){
var inst_15914 = (state_15919[(2)]);
var state_15919__$1 = state_15919;
var statearr_15926_15950 = state_15919__$1;
(statearr_15926_15950[(2)] = inst_15914);

(statearr_15926_15950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (3))){
var inst_15916 = (state_15919[(2)]);
var inst_15917 = cljs.core.async.close_BANG_.call(null,out);
var state_15919__$1 = (function (){var statearr_15927 = state_15919;
(statearr_15927[(9)] = inst_15916);

return statearr_15927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15919__$1,inst_15917);
} else {
if((state_val_15920 === (2))){
var inst_15896 = (state_15919[(8)]);
var inst_15898 = (inst_15896 < n);
var state_15919__$1 = state_15919;
if(cljs.core.truth_(inst_15898)){
var statearr_15928_15951 = state_15919__$1;
(statearr_15928_15951[(1)] = (4));

} else {
var statearr_15929_15952 = state_15919__$1;
(statearr_15929_15952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (11))){
var inst_15896 = (state_15919[(8)]);
var inst_15906 = (state_15919[(2)]);
var inst_15907 = (inst_15896 + (1));
var inst_15896__$1 = inst_15907;
var state_15919__$1 = (function (){var statearr_15930 = state_15919;
(statearr_15930[(10)] = inst_15906);

(statearr_15930[(8)] = inst_15896__$1);

return statearr_15930;
})();
var statearr_15931_15953 = state_15919__$1;
(statearr_15931_15953[(2)] = null);

(statearr_15931_15953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (9))){
var state_15919__$1 = state_15919;
var statearr_15932_15954 = state_15919__$1;
(statearr_15932_15954[(2)] = null);

(statearr_15932_15954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (5))){
var state_15919__$1 = state_15919;
var statearr_15933_15955 = state_15919__$1;
(statearr_15933_15955[(2)] = null);

(statearr_15933_15955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (10))){
var inst_15911 = (state_15919[(2)]);
var state_15919__$1 = state_15919;
var statearr_15934_15956 = state_15919__$1;
(statearr_15934_15956[(2)] = inst_15911);

(statearr_15934_15956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15920 === (8))){
var inst_15901 = (state_15919[(7)]);
var state_15919__$1 = state_15919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15919__$1,(11),out,inst_15901);
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
});})(c__13782__auto___15946,out))
;
return ((function (switch__13670__auto__,c__13782__auto___15946,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_15938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15938[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_15938[(1)] = (1));

return statearr_15938;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_15919){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_15919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e15939){if((e15939 instanceof Object)){
var ex__13674__auto__ = e15939;
var statearr_15940_15957 = state_15919;
(statearr_15940_15957[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15958 = state_15919;
state_15919 = G__15958;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_15919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_15919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___15946,out))
})();
var state__13784__auto__ = (function (){var statearr_15941 = f__13783__auto__.call(null);
(statearr_15941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___15946);

return statearr_15941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___15946,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15966 = (function (map_LT_,f,ch,meta15967){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15967 = meta15967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15968,meta15967__$1){
var self__ = this;
var _15968__$1 = this;
return (new cljs.core.async.t_cljs$core$async15966(self__.map_LT_,self__.f,self__.ch,meta15967__$1));
});

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15968){
var self__ = this;
var _15968__$1 = this;
return self__.meta15967;
});

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15969 = (function (map_LT_,f,ch,meta15967,_,fn1,meta15970){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15967 = meta15967;
this._ = _;
this.fn1 = fn1;
this.meta15970 = meta15970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15971,meta15970__$1){
var self__ = this;
var _15971__$1 = this;
return (new cljs.core.async.t_cljs$core$async15969(self__.map_LT_,self__.f,self__.ch,self__.meta15967,self__._,self__.fn1,meta15970__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15971){
var self__ = this;
var _15971__$1 = this;
return self__.meta15970;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15959_SHARP_){
return f1.call(null,(((p1__15959_SHARP_ == null))?null:self__.f.call(null,p1__15959_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15967","meta15967",-1984552529,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15966","cljs.core.async/t_cljs$core$async15966",1204361430,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15970","meta15970",-1288718979,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15969";

cljs.core.async.t_cljs$core$async15969.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15969");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15969 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15969(map_LT___$1,f__$1,ch__$1,meta15967__$1,___$2,fn1__$1,meta15970){
return (new cljs.core.async.t_cljs$core$async15969(map_LT___$1,f__$1,ch__$1,meta15967__$1,___$2,fn1__$1,meta15970));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15969(self__.map_LT_,self__.f,self__.ch,self__.meta15967,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6053__auto__ = ret;
if(cljs.core.truth_(and__6053__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6053__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15967","meta15967",-1984552529,null)], null);
});

cljs.core.async.t_cljs$core$async15966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15966";

cljs.core.async.t_cljs$core$async15966.cljs$lang$ctorPrWriter = (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15966");
});

cljs.core.async.__GT_t_cljs$core$async15966 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15966(map_LT___$1,f__$1,ch__$1,meta15967){
return (new cljs.core.async.t_cljs$core$async15966(map_LT___$1,f__$1,ch__$1,meta15967));
});

}

return (new cljs.core.async.t_cljs$core$async15966(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15975 = (function (map_GT_,f,ch,meta15976){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15976 = meta15976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15977,meta15976__$1){
var self__ = this;
var _15977__$1 = this;
return (new cljs.core.async.t_cljs$core$async15975(self__.map_GT_,self__.f,self__.ch,meta15976__$1));
});

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15977){
var self__ = this;
var _15977__$1 = this;
return self__.meta15976;
});

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15976","meta15976",-1428590401,null)], null);
});

cljs.core.async.t_cljs$core$async15975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15975";

cljs.core.async.t_cljs$core$async15975.cljs$lang$ctorPrWriter = (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15975");
});

cljs.core.async.__GT_t_cljs$core$async15975 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15975(map_GT___$1,f__$1,ch__$1,meta15976){
return (new cljs.core.async.t_cljs$core$async15975(map_GT___$1,f__$1,ch__$1,meta15976));
});

}

return (new cljs.core.async.t_cljs$core$async15975(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15981 = (function (filter_GT_,p,ch,meta15982){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15982 = meta15982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15983,meta15982__$1){
var self__ = this;
var _15983__$1 = this;
return (new cljs.core.async.t_cljs$core$async15981(self__.filter_GT_,self__.p,self__.ch,meta15982__$1));
});

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15983){
var self__ = this;
var _15983__$1 = this;
return self__.meta15982;
});

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15982","meta15982",-1417843993,null)], null);
});

cljs.core.async.t_cljs$core$async15981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15981";

cljs.core.async.t_cljs$core$async15981.cljs$lang$ctorPrWriter = (function (this__6663__auto__,writer__6664__auto__,opt__6665__auto__){
return cljs.core._write.call(null,writer__6664__auto__,"cljs.core.async/t_cljs$core$async15981");
});

cljs.core.async.__GT_t_cljs$core$async15981 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15981(filter_GT___$1,p__$1,ch__$1,meta15982){
return (new cljs.core.async.t_cljs$core$async15981(filter_GT___$1,p__$1,ch__$1,meta15982));
});

}

return (new cljs.core.async.t_cljs$core$async15981(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15984 = [];
var len__7123__auto___16028 = arguments.length;
var i__7124__auto___16029 = (0);
while(true){
if((i__7124__auto___16029 < len__7123__auto___16028)){
args15984.push((arguments[i__7124__auto___16029]));

var G__16030 = (i__7124__auto___16029 + (1));
i__7124__auto___16029 = G__16030;
continue;
} else {
}
break;
}

var G__15986 = args15984.length;
switch (G__15986) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15984.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___16032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___16032,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___16032,out){
return (function (state_16007){
var state_val_16008 = (state_16007[(1)]);
if((state_val_16008 === (7))){
var inst_16003 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
var statearr_16009_16033 = state_16007__$1;
(statearr_16009_16033[(2)] = inst_16003);

(statearr_16009_16033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (1))){
var state_16007__$1 = state_16007;
var statearr_16010_16034 = state_16007__$1;
(statearr_16010_16034[(2)] = null);

(statearr_16010_16034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (4))){
var inst_15989 = (state_16007[(7)]);
var inst_15989__$1 = (state_16007[(2)]);
var inst_15990 = (inst_15989__$1 == null);
var state_16007__$1 = (function (){var statearr_16011 = state_16007;
(statearr_16011[(7)] = inst_15989__$1);

return statearr_16011;
})();
if(cljs.core.truth_(inst_15990)){
var statearr_16012_16035 = state_16007__$1;
(statearr_16012_16035[(1)] = (5));

} else {
var statearr_16013_16036 = state_16007__$1;
(statearr_16013_16036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (6))){
var inst_15989 = (state_16007[(7)]);
var inst_15994 = p.call(null,inst_15989);
var state_16007__$1 = state_16007;
if(cljs.core.truth_(inst_15994)){
var statearr_16014_16037 = state_16007__$1;
(statearr_16014_16037[(1)] = (8));

} else {
var statearr_16015_16038 = state_16007__$1;
(statearr_16015_16038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (3))){
var inst_16005 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16007__$1,inst_16005);
} else {
if((state_val_16008 === (2))){
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16007__$1,(4),ch);
} else {
if((state_val_16008 === (11))){
var inst_15997 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
var statearr_16016_16039 = state_16007__$1;
(statearr_16016_16039[(2)] = inst_15997);

(statearr_16016_16039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (9))){
var state_16007__$1 = state_16007;
var statearr_16017_16040 = state_16007__$1;
(statearr_16017_16040[(2)] = null);

(statearr_16017_16040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (5))){
var inst_15992 = cljs.core.async.close_BANG_.call(null,out);
var state_16007__$1 = state_16007;
var statearr_16018_16041 = state_16007__$1;
(statearr_16018_16041[(2)] = inst_15992);

(statearr_16018_16041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (10))){
var inst_16000 = (state_16007[(2)]);
var state_16007__$1 = (function (){var statearr_16019 = state_16007;
(statearr_16019[(8)] = inst_16000);

return statearr_16019;
})();
var statearr_16020_16042 = state_16007__$1;
(statearr_16020_16042[(2)] = null);

(statearr_16020_16042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (8))){
var inst_15989 = (state_16007[(7)]);
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16007__$1,(11),out,inst_15989);
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
});})(c__13782__auto___16032,out))
;
return ((function (switch__13670__auto__,c__13782__auto___16032,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_16024 = [null,null,null,null,null,null,null,null,null];
(statearr_16024[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_16024[(1)] = (1));

return statearr_16024;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_16007){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16025){if((e16025 instanceof Object)){
var ex__13674__auto__ = e16025;
var statearr_16026_16043 = state_16007;
(statearr_16026_16043[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16044 = state_16007;
state_16007 = G__16044;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_16007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_16007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___16032,out))
})();
var state__13784__auto__ = (function (){var statearr_16027 = f__13783__auto__.call(null);
(statearr_16027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___16032);

return statearr_16027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___16032,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16045 = [];
var len__7123__auto___16048 = arguments.length;
var i__7124__auto___16049 = (0);
while(true){
if((i__7124__auto___16049 < len__7123__auto___16048)){
args16045.push((arguments[i__7124__auto___16049]));

var G__16050 = (i__7124__auto___16049 + (1));
i__7124__auto___16049 = G__16050;
continue;
} else {
}
break;
}

var G__16047 = args16045.length;
switch (G__16047) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16045.length)].join('')));

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
var c__13782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto__){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto__){
return (function (state_16217){
var state_val_16218 = (state_16217[(1)]);
if((state_val_16218 === (7))){
var inst_16213 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16219_16260 = state_16217__$1;
(statearr_16219_16260[(2)] = inst_16213);

(statearr_16219_16260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (20))){
var inst_16183 = (state_16217[(7)]);
var inst_16194 = (state_16217[(2)]);
var inst_16195 = cljs.core.next.call(null,inst_16183);
var inst_16169 = inst_16195;
var inst_16170 = null;
var inst_16171 = (0);
var inst_16172 = (0);
var state_16217__$1 = (function (){var statearr_16220 = state_16217;
(statearr_16220[(8)] = inst_16170);

(statearr_16220[(9)] = inst_16169);

(statearr_16220[(10)] = inst_16172);

(statearr_16220[(11)] = inst_16194);

(statearr_16220[(12)] = inst_16171);

return statearr_16220;
})();
var statearr_16221_16261 = state_16217__$1;
(statearr_16221_16261[(2)] = null);

(statearr_16221_16261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (1))){
var state_16217__$1 = state_16217;
var statearr_16222_16262 = state_16217__$1;
(statearr_16222_16262[(2)] = null);

(statearr_16222_16262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (4))){
var inst_16158 = (state_16217[(13)]);
var inst_16158__$1 = (state_16217[(2)]);
var inst_16159 = (inst_16158__$1 == null);
var state_16217__$1 = (function (){var statearr_16223 = state_16217;
(statearr_16223[(13)] = inst_16158__$1);

return statearr_16223;
})();
if(cljs.core.truth_(inst_16159)){
var statearr_16224_16263 = state_16217__$1;
(statearr_16224_16263[(1)] = (5));

} else {
var statearr_16225_16264 = state_16217__$1;
(statearr_16225_16264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (15))){
var state_16217__$1 = state_16217;
var statearr_16229_16265 = state_16217__$1;
(statearr_16229_16265[(2)] = null);

(statearr_16229_16265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (21))){
var state_16217__$1 = state_16217;
var statearr_16230_16266 = state_16217__$1;
(statearr_16230_16266[(2)] = null);

(statearr_16230_16266[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (13))){
var inst_16170 = (state_16217[(8)]);
var inst_16169 = (state_16217[(9)]);
var inst_16172 = (state_16217[(10)]);
var inst_16171 = (state_16217[(12)]);
var inst_16179 = (state_16217[(2)]);
var inst_16180 = (inst_16172 + (1));
var tmp16226 = inst_16170;
var tmp16227 = inst_16169;
var tmp16228 = inst_16171;
var inst_16169__$1 = tmp16227;
var inst_16170__$1 = tmp16226;
var inst_16171__$1 = tmp16228;
var inst_16172__$1 = inst_16180;
var state_16217__$1 = (function (){var statearr_16231 = state_16217;
(statearr_16231[(8)] = inst_16170__$1);

(statearr_16231[(14)] = inst_16179);

(statearr_16231[(9)] = inst_16169__$1);

(statearr_16231[(10)] = inst_16172__$1);

(statearr_16231[(12)] = inst_16171__$1);

return statearr_16231;
})();
var statearr_16232_16267 = state_16217__$1;
(statearr_16232_16267[(2)] = null);

(statearr_16232_16267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (22))){
var state_16217__$1 = state_16217;
var statearr_16233_16268 = state_16217__$1;
(statearr_16233_16268[(2)] = null);

(statearr_16233_16268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (6))){
var inst_16158 = (state_16217[(13)]);
var inst_16167 = f.call(null,inst_16158);
var inst_16168 = cljs.core.seq.call(null,inst_16167);
var inst_16169 = inst_16168;
var inst_16170 = null;
var inst_16171 = (0);
var inst_16172 = (0);
var state_16217__$1 = (function (){var statearr_16234 = state_16217;
(statearr_16234[(8)] = inst_16170);

(statearr_16234[(9)] = inst_16169);

(statearr_16234[(10)] = inst_16172);

(statearr_16234[(12)] = inst_16171);

return statearr_16234;
})();
var statearr_16235_16269 = state_16217__$1;
(statearr_16235_16269[(2)] = null);

(statearr_16235_16269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (17))){
var inst_16183 = (state_16217[(7)]);
var inst_16187 = cljs.core.chunk_first.call(null,inst_16183);
var inst_16188 = cljs.core.chunk_rest.call(null,inst_16183);
var inst_16189 = cljs.core.count.call(null,inst_16187);
var inst_16169 = inst_16188;
var inst_16170 = inst_16187;
var inst_16171 = inst_16189;
var inst_16172 = (0);
var state_16217__$1 = (function (){var statearr_16236 = state_16217;
(statearr_16236[(8)] = inst_16170);

(statearr_16236[(9)] = inst_16169);

(statearr_16236[(10)] = inst_16172);

(statearr_16236[(12)] = inst_16171);

return statearr_16236;
})();
var statearr_16237_16270 = state_16217__$1;
(statearr_16237_16270[(2)] = null);

(statearr_16237_16270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (3))){
var inst_16215 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16217__$1,inst_16215);
} else {
if((state_val_16218 === (12))){
var inst_16203 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16238_16271 = state_16217__$1;
(statearr_16238_16271[(2)] = inst_16203);

(statearr_16238_16271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (2))){
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16217__$1,(4),in$);
} else {
if((state_val_16218 === (23))){
var inst_16211 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16239_16272 = state_16217__$1;
(statearr_16239_16272[(2)] = inst_16211);

(statearr_16239_16272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (19))){
var inst_16198 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16240_16273 = state_16217__$1;
(statearr_16240_16273[(2)] = inst_16198);

(statearr_16240_16273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (11))){
var inst_16169 = (state_16217[(9)]);
var inst_16183 = (state_16217[(7)]);
var inst_16183__$1 = cljs.core.seq.call(null,inst_16169);
var state_16217__$1 = (function (){var statearr_16241 = state_16217;
(statearr_16241[(7)] = inst_16183__$1);

return statearr_16241;
})();
if(inst_16183__$1){
var statearr_16242_16274 = state_16217__$1;
(statearr_16242_16274[(1)] = (14));

} else {
var statearr_16243_16275 = state_16217__$1;
(statearr_16243_16275[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (9))){
var inst_16205 = (state_16217[(2)]);
var inst_16206 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16217__$1 = (function (){var statearr_16244 = state_16217;
(statearr_16244[(15)] = inst_16205);

return statearr_16244;
})();
if(cljs.core.truth_(inst_16206)){
var statearr_16245_16276 = state_16217__$1;
(statearr_16245_16276[(1)] = (21));

} else {
var statearr_16246_16277 = state_16217__$1;
(statearr_16246_16277[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (5))){
var inst_16161 = cljs.core.async.close_BANG_.call(null,out);
var state_16217__$1 = state_16217;
var statearr_16247_16278 = state_16217__$1;
(statearr_16247_16278[(2)] = inst_16161);

(statearr_16247_16278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (14))){
var inst_16183 = (state_16217[(7)]);
var inst_16185 = cljs.core.chunked_seq_QMARK_.call(null,inst_16183);
var state_16217__$1 = state_16217;
if(inst_16185){
var statearr_16248_16279 = state_16217__$1;
(statearr_16248_16279[(1)] = (17));

} else {
var statearr_16249_16280 = state_16217__$1;
(statearr_16249_16280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (16))){
var inst_16201 = (state_16217[(2)]);
var state_16217__$1 = state_16217;
var statearr_16250_16281 = state_16217__$1;
(statearr_16250_16281[(2)] = inst_16201);

(statearr_16250_16281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16218 === (10))){
var inst_16170 = (state_16217[(8)]);
var inst_16172 = (state_16217[(10)]);
var inst_16177 = cljs.core._nth.call(null,inst_16170,inst_16172);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16217__$1,(13),out,inst_16177);
} else {
if((state_val_16218 === (18))){
var inst_16183 = (state_16217[(7)]);
var inst_16192 = cljs.core.first.call(null,inst_16183);
var state_16217__$1 = state_16217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16217__$1,(20),out,inst_16192);
} else {
if((state_val_16218 === (8))){
var inst_16172 = (state_16217[(10)]);
var inst_16171 = (state_16217[(12)]);
var inst_16174 = (inst_16172 < inst_16171);
var inst_16175 = inst_16174;
var state_16217__$1 = state_16217;
if(cljs.core.truth_(inst_16175)){
var statearr_16251_16282 = state_16217__$1;
(statearr_16251_16282[(1)] = (10));

} else {
var statearr_16252_16283 = state_16217__$1;
(statearr_16252_16283[(1)] = (11));

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
});})(c__13782__auto__))
;
return ((function (switch__13670__auto__,c__13782__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____0 = (function (){
var statearr_16256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16256[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__);

(statearr_16256[(1)] = (1));

return statearr_16256;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____1 = (function (state_16217){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16257){if((e16257 instanceof Object)){
var ex__13674__auto__ = e16257;
var statearr_16258_16284 = state_16217;
(statearr_16258_16284[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16285 = state_16217;
state_16217 = G__16285;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__ = function(state_16217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____1.call(this,state_16217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13671__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto__))
})();
var state__13784__auto__ = (function (){var statearr_16259 = f__13783__auto__.call(null);
(statearr_16259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto__);

return statearr_16259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto__))
);

return c__13782__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16286 = [];
var len__7123__auto___16289 = arguments.length;
var i__7124__auto___16290 = (0);
while(true){
if((i__7124__auto___16290 < len__7123__auto___16289)){
args16286.push((arguments[i__7124__auto___16290]));

var G__16291 = (i__7124__auto___16290 + (1));
i__7124__auto___16290 = G__16291;
continue;
} else {
}
break;
}

var G__16288 = args16286.length;
switch (G__16288) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16286.length)].join('')));

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
var args16293 = [];
var len__7123__auto___16296 = arguments.length;
var i__7124__auto___16297 = (0);
while(true){
if((i__7124__auto___16297 < len__7123__auto___16296)){
args16293.push((arguments[i__7124__auto___16297]));

var G__16298 = (i__7124__auto___16297 + (1));
i__7124__auto___16297 = G__16298;
continue;
} else {
}
break;
}

var G__16295 = args16293.length;
switch (G__16295) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16293.length)].join('')));

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
var args16300 = [];
var len__7123__auto___16351 = arguments.length;
var i__7124__auto___16352 = (0);
while(true){
if((i__7124__auto___16352 < len__7123__auto___16351)){
args16300.push((arguments[i__7124__auto___16352]));

var G__16353 = (i__7124__auto___16352 + (1));
i__7124__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var G__16302 = args16300.length;
switch (G__16302) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16300.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___16355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___16355,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___16355,out){
return (function (state_16326){
var state_val_16327 = (state_16326[(1)]);
if((state_val_16327 === (7))){
var inst_16321 = (state_16326[(2)]);
var state_16326__$1 = state_16326;
var statearr_16328_16356 = state_16326__$1;
(statearr_16328_16356[(2)] = inst_16321);

(statearr_16328_16356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (1))){
var inst_16303 = null;
var state_16326__$1 = (function (){var statearr_16329 = state_16326;
(statearr_16329[(7)] = inst_16303);

return statearr_16329;
})();
var statearr_16330_16357 = state_16326__$1;
(statearr_16330_16357[(2)] = null);

(statearr_16330_16357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (4))){
var inst_16306 = (state_16326[(8)]);
var inst_16306__$1 = (state_16326[(2)]);
var inst_16307 = (inst_16306__$1 == null);
var inst_16308 = cljs.core.not.call(null,inst_16307);
var state_16326__$1 = (function (){var statearr_16331 = state_16326;
(statearr_16331[(8)] = inst_16306__$1);

return statearr_16331;
})();
if(inst_16308){
var statearr_16332_16358 = state_16326__$1;
(statearr_16332_16358[(1)] = (5));

} else {
var statearr_16333_16359 = state_16326__$1;
(statearr_16333_16359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (6))){
var state_16326__$1 = state_16326;
var statearr_16334_16360 = state_16326__$1;
(statearr_16334_16360[(2)] = null);

(statearr_16334_16360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (3))){
var inst_16323 = (state_16326[(2)]);
var inst_16324 = cljs.core.async.close_BANG_.call(null,out);
var state_16326__$1 = (function (){var statearr_16335 = state_16326;
(statearr_16335[(9)] = inst_16323);

return statearr_16335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16326__$1,inst_16324);
} else {
if((state_val_16327 === (2))){
var state_16326__$1 = state_16326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16326__$1,(4),ch);
} else {
if((state_val_16327 === (11))){
var inst_16306 = (state_16326[(8)]);
var inst_16315 = (state_16326[(2)]);
var inst_16303 = inst_16306;
var state_16326__$1 = (function (){var statearr_16336 = state_16326;
(statearr_16336[(7)] = inst_16303);

(statearr_16336[(10)] = inst_16315);

return statearr_16336;
})();
var statearr_16337_16361 = state_16326__$1;
(statearr_16337_16361[(2)] = null);

(statearr_16337_16361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (9))){
var inst_16306 = (state_16326[(8)]);
var state_16326__$1 = state_16326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16326__$1,(11),out,inst_16306);
} else {
if((state_val_16327 === (5))){
var inst_16303 = (state_16326[(7)]);
var inst_16306 = (state_16326[(8)]);
var inst_16310 = cljs.core._EQ_.call(null,inst_16306,inst_16303);
var state_16326__$1 = state_16326;
if(inst_16310){
var statearr_16339_16362 = state_16326__$1;
(statearr_16339_16362[(1)] = (8));

} else {
var statearr_16340_16363 = state_16326__$1;
(statearr_16340_16363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (10))){
var inst_16318 = (state_16326[(2)]);
var state_16326__$1 = state_16326;
var statearr_16341_16364 = state_16326__$1;
(statearr_16341_16364[(2)] = inst_16318);

(statearr_16341_16364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16327 === (8))){
var inst_16303 = (state_16326[(7)]);
var tmp16338 = inst_16303;
var inst_16303__$1 = tmp16338;
var state_16326__$1 = (function (){var statearr_16342 = state_16326;
(statearr_16342[(7)] = inst_16303__$1);

return statearr_16342;
})();
var statearr_16343_16365 = state_16326__$1;
(statearr_16343_16365[(2)] = null);

(statearr_16343_16365[(1)] = (2));


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
});})(c__13782__auto___16355,out))
;
return ((function (switch__13670__auto__,c__13782__auto___16355,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_16347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16347[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_16347[(1)] = (1));

return statearr_16347;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_16326){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16348){if((e16348 instanceof Object)){
var ex__13674__auto__ = e16348;
var statearr_16349_16366 = state_16326;
(statearr_16349_16366[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16367 = state_16326;
state_16326 = G__16367;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_16326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_16326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___16355,out))
})();
var state__13784__auto__ = (function (){var statearr_16350 = f__13783__auto__.call(null);
(statearr_16350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___16355);

return statearr_16350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___16355,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16368 = [];
var len__7123__auto___16438 = arguments.length;
var i__7124__auto___16439 = (0);
while(true){
if((i__7124__auto___16439 < len__7123__auto___16438)){
args16368.push((arguments[i__7124__auto___16439]));

var G__16440 = (i__7124__auto___16439 + (1));
i__7124__auto___16439 = G__16440;
continue;
} else {
}
break;
}

var G__16370 = args16368.length;
switch (G__16370) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16368.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___16442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___16442,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___16442,out){
return (function (state_16408){
var state_val_16409 = (state_16408[(1)]);
if((state_val_16409 === (7))){
var inst_16404 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
var statearr_16410_16443 = state_16408__$1;
(statearr_16410_16443[(2)] = inst_16404);

(statearr_16410_16443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (1))){
var inst_16371 = (new Array(n));
var inst_16372 = inst_16371;
var inst_16373 = (0);
var state_16408__$1 = (function (){var statearr_16411 = state_16408;
(statearr_16411[(7)] = inst_16372);

(statearr_16411[(8)] = inst_16373);

return statearr_16411;
})();
var statearr_16412_16444 = state_16408__$1;
(statearr_16412_16444[(2)] = null);

(statearr_16412_16444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (4))){
var inst_16376 = (state_16408[(9)]);
var inst_16376__$1 = (state_16408[(2)]);
var inst_16377 = (inst_16376__$1 == null);
var inst_16378 = cljs.core.not.call(null,inst_16377);
var state_16408__$1 = (function (){var statearr_16413 = state_16408;
(statearr_16413[(9)] = inst_16376__$1);

return statearr_16413;
})();
if(inst_16378){
var statearr_16414_16445 = state_16408__$1;
(statearr_16414_16445[(1)] = (5));

} else {
var statearr_16415_16446 = state_16408__$1;
(statearr_16415_16446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (15))){
var inst_16398 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
var statearr_16416_16447 = state_16408__$1;
(statearr_16416_16447[(2)] = inst_16398);

(statearr_16416_16447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (13))){
var state_16408__$1 = state_16408;
var statearr_16417_16448 = state_16408__$1;
(statearr_16417_16448[(2)] = null);

(statearr_16417_16448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (6))){
var inst_16373 = (state_16408[(8)]);
var inst_16394 = (inst_16373 > (0));
var state_16408__$1 = state_16408;
if(cljs.core.truth_(inst_16394)){
var statearr_16418_16449 = state_16408__$1;
(statearr_16418_16449[(1)] = (12));

} else {
var statearr_16419_16450 = state_16408__$1;
(statearr_16419_16450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (3))){
var inst_16406 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16408__$1,inst_16406);
} else {
if((state_val_16409 === (12))){
var inst_16372 = (state_16408[(7)]);
var inst_16396 = cljs.core.vec.call(null,inst_16372);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16408__$1,(15),out,inst_16396);
} else {
if((state_val_16409 === (2))){
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16408__$1,(4),ch);
} else {
if((state_val_16409 === (11))){
var inst_16388 = (state_16408[(2)]);
var inst_16389 = (new Array(n));
var inst_16372 = inst_16389;
var inst_16373 = (0);
var state_16408__$1 = (function (){var statearr_16420 = state_16408;
(statearr_16420[(7)] = inst_16372);

(statearr_16420[(10)] = inst_16388);

(statearr_16420[(8)] = inst_16373);

return statearr_16420;
})();
var statearr_16421_16451 = state_16408__$1;
(statearr_16421_16451[(2)] = null);

(statearr_16421_16451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (9))){
var inst_16372 = (state_16408[(7)]);
var inst_16386 = cljs.core.vec.call(null,inst_16372);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16408__$1,(11),out,inst_16386);
} else {
if((state_val_16409 === (5))){
var inst_16376 = (state_16408[(9)]);
var inst_16372 = (state_16408[(7)]);
var inst_16381 = (state_16408[(11)]);
var inst_16373 = (state_16408[(8)]);
var inst_16380 = (inst_16372[inst_16373] = inst_16376);
var inst_16381__$1 = (inst_16373 + (1));
var inst_16382 = (inst_16381__$1 < n);
var state_16408__$1 = (function (){var statearr_16422 = state_16408;
(statearr_16422[(12)] = inst_16380);

(statearr_16422[(11)] = inst_16381__$1);

return statearr_16422;
})();
if(cljs.core.truth_(inst_16382)){
var statearr_16423_16452 = state_16408__$1;
(statearr_16423_16452[(1)] = (8));

} else {
var statearr_16424_16453 = state_16408__$1;
(statearr_16424_16453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (14))){
var inst_16401 = (state_16408[(2)]);
var inst_16402 = cljs.core.async.close_BANG_.call(null,out);
var state_16408__$1 = (function (){var statearr_16426 = state_16408;
(statearr_16426[(13)] = inst_16401);

return statearr_16426;
})();
var statearr_16427_16454 = state_16408__$1;
(statearr_16427_16454[(2)] = inst_16402);

(statearr_16427_16454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (10))){
var inst_16392 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
var statearr_16428_16455 = state_16408__$1;
(statearr_16428_16455[(2)] = inst_16392);

(statearr_16428_16455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16409 === (8))){
var inst_16372 = (state_16408[(7)]);
var inst_16381 = (state_16408[(11)]);
var tmp16425 = inst_16372;
var inst_16372__$1 = tmp16425;
var inst_16373 = inst_16381;
var state_16408__$1 = (function (){var statearr_16429 = state_16408;
(statearr_16429[(7)] = inst_16372__$1);

(statearr_16429[(8)] = inst_16373);

return statearr_16429;
})();
var statearr_16430_16456 = state_16408__$1;
(statearr_16430_16456[(2)] = null);

(statearr_16430_16456[(1)] = (2));


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
});})(c__13782__auto___16442,out))
;
return ((function (switch__13670__auto__,c__13782__auto___16442,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_16434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16434[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_16434[(1)] = (1));

return statearr_16434;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_16408){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16435){if((e16435 instanceof Object)){
var ex__13674__auto__ = e16435;
var statearr_16436_16457 = state_16408;
(statearr_16436_16457[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16458 = state_16408;
state_16408 = G__16458;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___16442,out))
})();
var state__13784__auto__ = (function (){var statearr_16437 = f__13783__auto__.call(null);
(statearr_16437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___16442);

return statearr_16437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___16442,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16459 = [];
var len__7123__auto___16533 = arguments.length;
var i__7124__auto___16534 = (0);
while(true){
if((i__7124__auto___16534 < len__7123__auto___16533)){
args16459.push((arguments[i__7124__auto___16534]));

var G__16535 = (i__7124__auto___16534 + (1));
i__7124__auto___16534 = G__16535;
continue;
} else {
}
break;
}

var G__16461 = args16459.length;
switch (G__16461) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16459.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13782__auto___16537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___16537,out){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___16537,out){
return (function (state_16503){
var state_val_16504 = (state_16503[(1)]);
if((state_val_16504 === (7))){
var inst_16499 = (state_16503[(2)]);
var state_16503__$1 = state_16503;
var statearr_16505_16538 = state_16503__$1;
(statearr_16505_16538[(2)] = inst_16499);

(statearr_16505_16538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (1))){
var inst_16462 = [];
var inst_16463 = inst_16462;
var inst_16464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16503__$1 = (function (){var statearr_16506 = state_16503;
(statearr_16506[(7)] = inst_16463);

(statearr_16506[(8)] = inst_16464);

return statearr_16506;
})();
var statearr_16507_16539 = state_16503__$1;
(statearr_16507_16539[(2)] = null);

(statearr_16507_16539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (4))){
var inst_16467 = (state_16503[(9)]);
var inst_16467__$1 = (state_16503[(2)]);
var inst_16468 = (inst_16467__$1 == null);
var inst_16469 = cljs.core.not.call(null,inst_16468);
var state_16503__$1 = (function (){var statearr_16508 = state_16503;
(statearr_16508[(9)] = inst_16467__$1);

return statearr_16508;
})();
if(inst_16469){
var statearr_16509_16540 = state_16503__$1;
(statearr_16509_16540[(1)] = (5));

} else {
var statearr_16510_16541 = state_16503__$1;
(statearr_16510_16541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (15))){
var inst_16493 = (state_16503[(2)]);
var state_16503__$1 = state_16503;
var statearr_16511_16542 = state_16503__$1;
(statearr_16511_16542[(2)] = inst_16493);

(statearr_16511_16542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (13))){
var state_16503__$1 = state_16503;
var statearr_16512_16543 = state_16503__$1;
(statearr_16512_16543[(2)] = null);

(statearr_16512_16543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (6))){
var inst_16463 = (state_16503[(7)]);
var inst_16488 = inst_16463.length;
var inst_16489 = (inst_16488 > (0));
var state_16503__$1 = state_16503;
if(cljs.core.truth_(inst_16489)){
var statearr_16513_16544 = state_16503__$1;
(statearr_16513_16544[(1)] = (12));

} else {
var statearr_16514_16545 = state_16503__$1;
(statearr_16514_16545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (3))){
var inst_16501 = (state_16503[(2)]);
var state_16503__$1 = state_16503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16503__$1,inst_16501);
} else {
if((state_val_16504 === (12))){
var inst_16463 = (state_16503[(7)]);
var inst_16491 = cljs.core.vec.call(null,inst_16463);
var state_16503__$1 = state_16503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16503__$1,(15),out,inst_16491);
} else {
if((state_val_16504 === (2))){
var state_16503__$1 = state_16503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16503__$1,(4),ch);
} else {
if((state_val_16504 === (11))){
var inst_16471 = (state_16503[(10)]);
var inst_16467 = (state_16503[(9)]);
var inst_16481 = (state_16503[(2)]);
var inst_16482 = [];
var inst_16483 = inst_16482.push(inst_16467);
var inst_16463 = inst_16482;
var inst_16464 = inst_16471;
var state_16503__$1 = (function (){var statearr_16515 = state_16503;
(statearr_16515[(7)] = inst_16463);

(statearr_16515[(11)] = inst_16481);

(statearr_16515[(8)] = inst_16464);

(statearr_16515[(12)] = inst_16483);

return statearr_16515;
})();
var statearr_16516_16546 = state_16503__$1;
(statearr_16516_16546[(2)] = null);

(statearr_16516_16546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (9))){
var inst_16463 = (state_16503[(7)]);
var inst_16479 = cljs.core.vec.call(null,inst_16463);
var state_16503__$1 = state_16503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16503__$1,(11),out,inst_16479);
} else {
if((state_val_16504 === (5))){
var inst_16471 = (state_16503[(10)]);
var inst_16467 = (state_16503[(9)]);
var inst_16464 = (state_16503[(8)]);
var inst_16471__$1 = f.call(null,inst_16467);
var inst_16472 = cljs.core._EQ_.call(null,inst_16471__$1,inst_16464);
var inst_16473 = cljs.core.keyword_identical_QMARK_.call(null,inst_16464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16474 = (inst_16472) || (inst_16473);
var state_16503__$1 = (function (){var statearr_16517 = state_16503;
(statearr_16517[(10)] = inst_16471__$1);

return statearr_16517;
})();
if(cljs.core.truth_(inst_16474)){
var statearr_16518_16547 = state_16503__$1;
(statearr_16518_16547[(1)] = (8));

} else {
var statearr_16519_16548 = state_16503__$1;
(statearr_16519_16548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (14))){
var inst_16496 = (state_16503[(2)]);
var inst_16497 = cljs.core.async.close_BANG_.call(null,out);
var state_16503__$1 = (function (){var statearr_16521 = state_16503;
(statearr_16521[(13)] = inst_16496);

return statearr_16521;
})();
var statearr_16522_16549 = state_16503__$1;
(statearr_16522_16549[(2)] = inst_16497);

(statearr_16522_16549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (10))){
var inst_16486 = (state_16503[(2)]);
var state_16503__$1 = state_16503;
var statearr_16523_16550 = state_16503__$1;
(statearr_16523_16550[(2)] = inst_16486);

(statearr_16523_16550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16504 === (8))){
var inst_16463 = (state_16503[(7)]);
var inst_16471 = (state_16503[(10)]);
var inst_16467 = (state_16503[(9)]);
var inst_16476 = inst_16463.push(inst_16467);
var tmp16520 = inst_16463;
var inst_16463__$1 = tmp16520;
var inst_16464 = inst_16471;
var state_16503__$1 = (function (){var statearr_16524 = state_16503;
(statearr_16524[(14)] = inst_16476);

(statearr_16524[(7)] = inst_16463__$1);

(statearr_16524[(8)] = inst_16464);

return statearr_16524;
})();
var statearr_16525_16551 = state_16503__$1;
(statearr_16525_16551[(2)] = null);

(statearr_16525_16551[(1)] = (2));


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
});})(c__13782__auto___16537,out))
;
return ((function (switch__13670__auto__,c__13782__auto___16537,out){
return (function() {
var cljs$core$async$state_machine__13671__auto__ = null;
var cljs$core$async$state_machine__13671__auto____0 = (function (){
var statearr_16529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16529[(0)] = cljs$core$async$state_machine__13671__auto__);

(statearr_16529[(1)] = (1));

return statearr_16529;
});
var cljs$core$async$state_machine__13671__auto____1 = (function (state_16503){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16530){if((e16530 instanceof Object)){
var ex__13674__auto__ = e16530;
var statearr_16531_16552 = state_16503;
(statearr_16531_16552[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16553 = state_16503;
state_16503 = G__16553;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
cljs$core$async$state_machine__13671__auto__ = function(state_16503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13671__auto____1.call(this,state_16503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13671__auto____0;
cljs$core$async$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13671__auto____1;
return cljs$core$async$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___16537,out))
})();
var state__13784__auto__ = (function (){var statearr_16532 = f__13783__auto__.call(null);
(statearr_16532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___16537);

return statearr_16532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___16537,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
