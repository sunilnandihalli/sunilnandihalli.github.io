// Compiled by ClojureScript 1.7.228 {}
goog.provide('rubiks_cloact_webapp.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rubiks_cloact_webapp.solver');
goog.require('rubiks_cloact_webapp.cube');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
rubiks_cloact_webapp.core.abs = (function rubiks_cloact_webapp$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
rubiks_cloact_webapp.core.new_random_init_state = (function rubiks_cloact_webapp$core$new_random_init_state(){
var x = rubiks_cloact_webapp.cube.shuffle_rubiks_cube.call(null,rubiks_cloact_webapp.cube.rubiks_cube_nxnxn.call(null,(3)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shuffled-state","shuffled-state",1960848401),x,new cljs.core.Keyword(null,"current-state","current-state",1048284452),x,new cljs.core.Keyword(null,"solution","solution",-1727231491),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"last-move-applied","last-move-applied",-1654050677),(-1)], null);
});


rubiks_cloact_webapp.core.myaddnodes = (function rubiks_cloact_webapp$core$myaddnodes(var_args){
var args__7130__auto__ = [];
var len__7123__auto___16815 = arguments.length;
var i__7124__auto___16816 = (0);
while(true){
if((i__7124__auto___16816 < len__7123__auto___16815)){
args__7130__auto__.push((arguments[i__7124__auto___16816]));

var G__16817 = (i__7124__auto___16816 + (1));
i__7124__auto___16816 = G__16817;
continue;
} else {
}
break;
}

var argseq__7131__auto__ = ((((2) < args__7130__auto__.length))?(new cljs.core.IndexedSeq(args__7130__auto__.slice((2)),(0))):null);
return rubiks_cloact_webapp.core.myaddnodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7131__auto__);
});

rubiks_cloact_webapp.core.myaddnodes.cljs$core$IFn$_invoke$arity$variadic = (function (nd,children,markers){
return nd.addNodes(children);
});

rubiks_cloact_webapp.core.myaddnodes.cljs$lang$maxFixedArity = (2);

rubiks_cloact_webapp.core.myaddnodes.cljs$lang$applyTo = (function (seq16812){
var G__16813 = cljs.core.first.call(null,seq16812);
var seq16812__$1 = cljs.core.next.call(null,seq16812);
var G__16814 = cljs.core.first.call(null,seq16812__$1);
var seq16812__$2 = cljs.core.next.call(null,seq16812__$1);
return rubiks_cloact_webapp.core.myaddnodes.cljs$core$IFn$_invoke$arity$variadic(G__16813,G__16814,seq16812__$2);
});
rubiks_cloact_webapp.core.trf = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null)], null),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null)], null)], null)], null);
var clockwise_order_16829 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"nz","nz",961052908),new cljs.core.Keyword(null,"ny","ny",1701791641),new cljs.core.Keyword(null,"z","z",-789527183)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"nx","nx",-1996436366),new cljs.core.Keyword(null,"nz","nz",961052908)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ny","ny",1701791641),new cljs.core.Keyword(null,"nx","nx",-1996436366),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null);
rubiks_cloact_webapp.core.rotate = ((function (clockwise_order_16829){
return (function rubiks_cloact_webapp$core$rotate(p__16818,dir,ort){
var map__16824 = p__16818;
var map__16824__$1 = ((((!((map__16824 == null)))?((((map__16824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16824):map__16824);
var inp_props = map__16824__$1;
var x = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var nx = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"nx","nx",-1996436366));
var ny = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"ny","ny",1701791641));
var nz = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"nz","nz",961052908));
var t = cljs.core.mapv.call(null,cljs.core.vec,cljs.core.take.call(null,(4),cljs.core.partition.call(null,(2),(1),(function (){var t = clockwise_order_16829.call(null,dir);
return cljs.core.cycle.call(null,(function (){var G__16826 = (((ort instanceof cljs.core.Keyword))?ort.fqn:null);
switch (G__16826) {
case "clockwise":
return t;

break;
case "counter-clockwise":
return cljs.core.rseq.call(null,t);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(ort)].join('')));

}
})());
})())));
var ret = cljs.core.reduce.call(null,((function (t,map__16824,map__16824__$1,inp_props,x,y,z,nx,ny,nz,clockwise_order_16829){
return (function (out_props,p__16827){
var vec__16828 = p__16827;
var old = cljs.core.nth.call(null,vec__16828,(0),null);
var new$ = cljs.core.nth.call(null,vec__16828,(1),null);
return cljs.core.assoc.call(null,out_props,new$,inp_props.call(null,old));
});})(t,map__16824,map__16824__$1,inp_props,x,y,z,nx,ny,nz,clockwise_order_16829))
,inp_props,t);
return ret;
});})(clockwise_order_16829))
;
rubiks_cloact_webapp.core.spmult = (function rubiks_cloact_webapp$core$spmult(mat,pos,cube_size){
var ret = cljs.core.mapv.call(null,(function (row){
var p = cljs.core.map.call(null,cljs.core.vector,row,pos);
return cljs.core.first.call(null,cljs.core.keep.call(null,((function (p){
return (function (p__16834){
var vec__16835 = p__16834;
var xc = cljs.core.nth.call(null,vec__16835,(0),null);
var x = cljs.core.nth.call(null,vec__16835,(1),null);
var G__16836 = xc;
switch (G__16836) {
case (1):
return x;

break;
case (-1):
return ((cube_size - (1)) - x);

break;
case (0):
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(xc)].join('')));

}
});})(p))
,p));
}),mat);
return ret;
});
rubiks_cloact_webapp.core.instrument = (function rubiks_cloact_webapp$core$instrument(x,component_name){
var x_meta = cljs.core.meta.call(null,x);
var new_x_meta = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (x_meta){
return (function (p1__16838_SHARP_){
var f = p1__16838_SHARP_.call(null,x_meta);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16838_SHARP_,((function (f,x_meta){
return (function() { 
var G__16839__delegate = function (args){
cljs.core.println.call(null,cljs.core.PersistentArrayMap.fromArray([p1__16838_SHARP_,args,new cljs.core.Keyword(null,"component-name","component-name",-1318676056),component_name], true, false));

console.log(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([p1__16838_SHARP_,cljs.core.clj__GT_js.call(null,args)], true, false)));

if(cljs.core.truth_(f)){
return cljs.core.apply.call(null,f,args);
} else {
if(cljs.core._EQ_.call(null,p1__16838_SHARP_,new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163))){
return true;
} else {
return null;
}
}
};
var G__16839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16840__i = 0, G__16840__a = new Array(arguments.length -  0);
while (G__16840__i < G__16840__a.length) {G__16840__a[G__16840__i] = arguments[G__16840__i + 0]; ++G__16840__i;}
  args = new cljs.core.IndexedSeq(G__16840__a,0);
} 
return G__16839__delegate.call(this,args);};
G__16839.cljs$lang$maxFixedArity = 0;
G__16839.cljs$lang$applyTo = (function (arglist__16841){
var args = cljs.core.seq(arglist__16841);
return G__16839__delegate(args);
});
G__16839.cljs$core$IFn$_invoke$arity$variadic = G__16839__delegate;
return G__16839;
})()
;})(f,x_meta))
], null);
});})(x_meta))
,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),new cljs.core.Keyword(null,"should-component-update","should-component-update",2040868163),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698)], null)));
return cljs.core.with_meta.call(null,x,new_x_meta);
});
rubiks_cloact_webapp.core.sleep = (function rubiks_cloact_webapp$core$sleep(ms){
var now = (function (){
return (new Date()).getTime();
});
var delta = (5000);
var stime = now.call(null);
var time_spent = (0);
var last_print = (0);
while(true){
var ctime = now.call(null);
if(((time_spent - last_print) >= delta)){
cljs.core.println.call(null,"slept for ",time_spent);

var G__16842 = (ctime - stime);
var G__16843 = (last_print + delta);
time_spent = G__16842;
last_print = G__16843;
continue;
} else {
if((ms > time_spent)){
var G__16844 = (ctime - stime);
var G__16845 = last_print;
time_spent = G__16844;
last_print = G__16845;
continue;
} else {
return cljs.core.println.call(null,"finished sleeping for ",ms,"milliseconds");
}
}
break;
}
});
var x_17143 = rubiks_cloact_webapp.core.new_random_init_state.call(null);
var app_state_17144 = reagent.core.atom.call(null,x_17143);
var render_chan_17145 = cljs.core.async.chan.call(null);
var c__13782__auto___17146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145){
return (function (state_16859){
var state_val_16860 = (state_16859[(1)]);
if((state_val_16860 === (1))){
var inst_16852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16853 = new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(x_17143);
var inst_16854 = [new cljs.core.Keyword(null,"reset","reset",-800929946),inst_16853];
var inst_16855 = (new cljs.core.PersistentVector(null,2,(5),inst_16852,inst_16854,null));
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16859__$1,(2),render_chan_17145,inst_16855);
} else {
if((state_val_16860 === (2))){
var inst_16857 = (state_16859[(2)]);
var state_16859__$1 = state_16859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16859__$1,inst_16857);
} else {
return null;
}
}
});})(c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145))
;
return ((function (switch__13670__auto__,c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145){
return (function() {
var rubiks_cloact_webapp$core$state_machine__13671__auto__ = null;
var rubiks_cloact_webapp$core$state_machine__13671__auto____0 = (function (){
var statearr_16864 = [null,null,null,null,null,null,null];
(statearr_16864[(0)] = rubiks_cloact_webapp$core$state_machine__13671__auto__);

(statearr_16864[(1)] = (1));

return statearr_16864;
});
var rubiks_cloact_webapp$core$state_machine__13671__auto____1 = (function (state_16859){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16865){if((e16865 instanceof Object)){
var ex__13674__auto__ = e16865;
var statearr_16866_17147 = state_16859;
(statearr_16866_17147[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17148 = state_16859;
state_16859 = G__17148;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
rubiks_cloact_webapp$core$state_machine__13671__auto__ = function(state_16859){
switch(arguments.length){
case 0:
return rubiks_cloact_webapp$core$state_machine__13671__auto____0.call(this);
case 1:
return rubiks_cloact_webapp$core$state_machine__13671__auto____1.call(this,state_16859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rubiks_cloact_webapp$core$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = rubiks_cloact_webapp$core$state_machine__13671__auto____0;
rubiks_cloact_webapp$core$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = rubiks_cloact_webapp$core$state_machine__13671__auto____1;
return rubiks_cloact_webapp$core$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145))
})();
var state__13784__auto__ = (function (){var statearr_16867 = f__13783__auto__.call(null);
(statearr_16867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___17146);

return statearr_16867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___17146,x_17143,app_state_17144,render_chan_17145))
);


rubiks_cloact_webapp.core.current_state_updater = ((function (x_17143,app_state_17144,render_chan_17145){
return (function rubiks_cloact_webapp$core$current_state_updater(move_id){
return ((function (x_17143,app_state_17144,render_chan_17145){
return (function() { 
var G__17149__delegate = function (s){
var map__16888 = cljs.core.deref.call(null,app_state_17144);
var map__16888__$1 = ((((!((map__16888 == null)))?((((map__16888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16888):map__16888);
var app_state_val = map__16888__$1;
var current_state = cljs.core.get.call(null,map__16888__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var last_move_applied = cljs.core.get.call(null,map__16888__$1,new cljs.core.Keyword(null,"last-move-applied","last-move-applied",-1654050677));
var solution = cljs.core.get.call(null,map__16888__$1,new cljs.core.Keyword(null,"solution","solution",-1727231491));
return cljs.core.swap_BANG_.call(null,app_state_17144,((function (map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function (app_state_val__$1){
return cljs.core.assoc.call(null,app_state_val__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452),(function (){var moves = (((last_move_applied < move_id))?cljs.core.subvec.call(null,solution,(last_move_applied + (1)),(move_id + (1))):(((last_move_applied > move_id))?cljs.core.mapv.call(null,((function (map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function (p__16890){
var vec__16891 = p__16890;
var mid = cljs.core.nth.call(null,vec__16891,(0),null);
var vec__16892 = cljs.core.nth.call(null,vec__16891,(1),null);
var dir = cljs.core.nth.call(null,vec__16892,(0),null);
var crd = cljs.core.nth.call(null,vec__16892,(1),null);
var o = cljs.core.nth.call(null,vec__16892,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,crd,rubiks_cloact_webapp.solver.opposite_orientation.call(null,o)], null)], null);
});})(map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
,cljs.core.reverse.call(null,cljs.core.subvec.call(null,solution,(move_id + (1)),(last_move_applied + (1))))):cljs.core.PersistentVector.EMPTY
));
var new_current_state = rubiks_cloact_webapp.cube.apply_algorithm.call(null,current_state,cljs.core.map.call(null,cljs.core.second,moves));
var c__13782__auto___17150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function (state_16898){
var state_val_16899 = (state_16898[(1)]);
if((state_val_16899 === (1))){
var inst_16894 = (function (){return ((function (state_val_16899,c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function (p__16893){
var vec__16900 = p__16893;
var _ = cljs.core.nth.call(null,vec__16900,(0),null);
var op = cljs.core.nth.call(null,vec__16900,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),op], null)], null);
});
;})(state_val_16899,c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
})();
var inst_16895 = cljs.core.map.call(null,inst_16894,moves);
var inst_16896 = cljs.core.async.onto_chan.call(null,render_chan_17145,inst_16895,false);
var state_16898__$1 = state_16898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16898__$1,inst_16896);
} else {
return null;
}
});})(c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
;
return ((function (switch__13670__auto__,c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145){
return (function() {
var rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__ = null;
var rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____0 = (function (){
var statearr_16904 = [null,null,null,null,null,null,null];
(statearr_16904[(0)] = rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__);

(statearr_16904[(1)] = (1));

return statearr_16904;
});
var rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____1 = (function (state_16898){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16905){if((e16905 instanceof Object)){
var ex__13674__auto__ = e16905;
var statearr_16906_17151 = state_16898;
(statearr_16906_17151[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17152 = state_16898;
state_16898 = G__17152;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__ = function(state_16898){
switch(arguments.length){
case 0:
return rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____0.call(this);
case 1:
return rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____1.call(this,state_16898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____0;
rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto____1;
return rubiks_cloact_webapp$core$current_state_updater_$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
})();
var state__13784__auto__ = (function (){var statearr_16907 = f__13783__auto__.call(null);
(statearr_16907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___17150);

return statearr_16907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___17150,moves,new_current_state,map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
);


return new_current_state;
})(),new cljs.core.Keyword(null,"last-move-applied","last-move-applied",-1654050677),move_id);
});})(map__16888,map__16888__$1,app_state_val,current_state,last_move_applied,solution,x_17143,app_state_17144,render_chan_17145))
);
};
var G__17149 = function (var_args){
var s = null;
if (arguments.length > 0) {
var G__17153__i = 0, G__17153__a = new Array(arguments.length -  0);
while (G__17153__i < G__17153__a.length) {G__17153__a[G__17153__i] = arguments[G__17153__i + 0]; ++G__17153__i;}
  s = new cljs.core.IndexedSeq(G__17153__a,0);
} 
return G__17149__delegate.call(this,s);};
G__17149.cljs$lang$maxFixedArity = 0;
G__17149.cljs$lang$applyTo = (function (arglist__17154){
var s = cljs.core.seq(arglist__17154);
return G__17149__delegate(s);
});
G__17149.cljs$core$IFn$_invoke$arity$variadic = G__17149__delegate;
return G__17149;
})()
;
;})(x_17143,app_state_17144,render_chan_17145))
});})(x_17143,app_state_17144,render_chan_17145))
;

rubiks_cloact_webapp.core.solve_rubiks_cube = ((function (x_17143,app_state_17144,render_chan_17145){
return (function rubiks_cloact_webapp$core$solve_rubiks_cube(){
var map__16910 = cljs.core.deref.call(null,app_state_17144);
var map__16910__$1 = ((((!((map__16910 == null)))?((((map__16910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16910):map__16910);
var shuffled_state = cljs.core.get.call(null,map__16910__$1,new cljs.core.Keyword(null,"shuffled-state","shuffled-state",1960848401));
var solution = rubiks_cloact_webapp.solver.solve_rubiks_cube.call(null,shuffled_state);
return cljs.core.swap_BANG_.call(null,app_state_17144,((function (map__16910,map__16910__$1,shuffled_state,solution,x_17143,app_state_17144,render_chan_17145){
return (function (app_state_val){
return cljs.core.assoc.call(null,app_state_val,new cljs.core.Keyword(null,"solution","solution",-1727231491),solution,new cljs.core.Keyword(null,"last-move-applied","last-move-applied",-1654050677),(-1));
});})(map__16910,map__16910__$1,shuffled_state,solution,x_17143,app_state_17144,render_chan_17145))
);
});})(x_17143,app_state_17144,render_chan_17145))
;

rubiks_cloact_webapp.core.shuffle_rubiks_cube = ((function (x_17143,app_state_17144,render_chan_17145){
return (function rubiks_cloact_webapp$core$shuffle_rubiks_cube(){
var x__$1 = rubiks_cloact_webapp.core.new_random_init_state.call(null);
cljs.core.swap_BANG_.call(null,app_state_17144,((function (x__$1,x_17143,app_state_17144,render_chan_17145){
return (function() { 
var G__17155__delegate = function (_){
return x__$1;
};
var G__17155 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17156__i = 0, G__17156__a = new Array(arguments.length -  0);
while (G__17156__i < G__17156__a.length) {G__17156__a[G__17156__i] = arguments[G__17156__i + 0]; ++G__17156__i;}
  _ = new cljs.core.IndexedSeq(G__17156__a,0);
} 
return G__17155__delegate.call(this,_);};
G__17155.cljs$lang$maxFixedArity = 0;
G__17155.cljs$lang$applyTo = (function (arglist__17157){
var _ = cljs.core.seq(arglist__17157);
return G__17155__delegate(_);
});
G__17155.cljs$core$IFn$_invoke$arity$variadic = G__17155__delegate;
return G__17155;
})()
;})(x__$1,x_17143,app_state_17144,render_chan_17145))
);

var c__13782__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145){
return (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (1))){
var inst_16928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16929 = new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(x__$1);
var inst_16930 = [new cljs.core.Keyword(null,"reset","reset",-800929946),inst_16929];
var inst_16931 = (new cljs.core.PersistentVector(null,2,(5),inst_16928,inst_16930,null));
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16935__$1,(2),render_chan_17145,inst_16931);
} else {
if((state_val_16936 === (2))){
var inst_16933 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16935__$1,inst_16933);
} else {
return null;
}
}
});})(c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145))
;
return ((function (switch__13670__auto__,c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145){
return (function() {
var rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__ = null;
var rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null];
(statearr_16940[(0)] = rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____1 = (function (state_16935){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_16935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e16941){if((e16941 instanceof Object)){
var ex__13674__auto__ = e16941;
var statearr_16942_17158 = state_16935;
(statearr_16942_17158[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17159 = state_16935;
state_16935 = G__17159;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____0.call(this);
case 1:
return rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____0;
rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto____1;
return rubiks_cloact_webapp$core$shuffle_rubiks_cube_$_state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145))
})();
var state__13784__auto__ = (function (){var statearr_16943 = f__13783__auto__.call(null);
(statearr_16943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto__);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto__,x__$1,x_17143,app_state_17144,render_chan_17145))
);

return c__13782__auto__;
});})(x_17143,app_state_17144,render_chan_17145))
;

rubiks_cloact_webapp.core.main_page = ((function (x_17143,app_state_17144,render_chan_17145){
return (function rubiks_cloact_webapp$core$main_page(){
var map__16946 = cljs.core.deref.call(null,app_state_17144);
var map__16946__$1 = ((((!((map__16946 == null)))?((((map__16946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16946):map__16946);
var shuffled_state = cljs.core.get.call(null,map__16946__$1,new cljs.core.Keyword(null,"shuffled-state","shuffled-state",1960848401));
var current_state = cljs.core.get.call(null,map__16946__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var orientation = cljs.core.get.call(null,map__16946__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var solution = cljs.core.get.call(null,map__16946__$1,new cljs.core.Keyword(null,"solution","solution",-1727231491));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubiks_cloact_webapp.core.instrument.call(null,rubiks_cloact_webapp.core.rubiks_cube,"rubiks-cube"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rubiks-cube-state","rubiks-cube-state",203331487),current_state,new cljs.core.Keyword(null,"orientation","orientation",623557579),orientation,new cljs.core.Keyword(null,"canvas-id","canvas-id",993270450),"state-after-selected-move"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubiks_cloact_webapp.core.instrument.call(null,rubiks_cloact_webapp.core.show_solution,"show-solution"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solution","solution",-1727231491),solution], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rubiks_cloact_webapp.core.shuffle_rubiks_cube], null),"shuffle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rubiks_cloact_webapp.core.solve_rubiks_cube], null),"solve"], null)], null);
});})(x_17143,app_state_17144,render_chan_17145))
;

var c__13782__auto___17160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (){
var f__13783__auto__ = (function (){var switch__13670__auto__ = ((function (c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (state_17067){
var state_val_17068 = (state_17067[(1)]);
if((state_val_17068 === (7))){
var inst_16948 = (state_17067[(7)]);
var inst_16963 = (inst_16948 == null);
var inst_16964 = cljs.core.not.call(null,inst_16963);
var state_17067__$1 = state_17067;
if(inst_16964){
var statearr_17069_17161 = state_17067__$1;
(statearr_17069_17161[(1)] = (8));

} else {
var statearr_17070_17162 = state_17067__$1;
(statearr_17070_17162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (20))){
var state_17067__$1 = state_17067;
var statearr_17071_17163 = state_17067__$1;
(statearr_17071_17163[(2)] = true);

(statearr_17071_17163[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (27))){
var inst_17007 = (state_17067[(8)]);
var inst_17003 = (state_17067[(9)]);
var inst_17006 = (state_17067[(10)]);
var inst_16982 = (state_17067[(11)]);
var inst_16952 = (state_17067[(12)]);
var inst_16983 = (state_17067[(13)]);
var inst_16948 = (state_17067[(7)]);
var inst_17004 = (state_17067[(14)]);
var inst_16954 = (state_17067[(15)]);
var inst_17005 = (state_17067[(16)]);
var inst_16981 = (state_17067[(17)]);
var inst_17008 = (function (){var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var dir = inst_17005;
var map__16958 = inst_16981;
var n = inst_16982;
var orientation = inst_17007;
var val = inst_16954;
var op = inst_17004;
var map__16959 = inst_17003;
var vec__16960 = inst_17004;
return ((function (scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (p1__16846_SHARP_){
return p1__16846_SHARP_.getX();
});
;})(scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var state_17067__$1 = state_17067;
var statearr_17072_17164 = state_17067__$1;
(statearr_17072_17164[(2)] = inst_17008);

(statearr_17072_17164[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (1))){
var inst_16948 = null;
var state_17067__$1 = (function (){var statearr_17073 = state_17067;
(statearr_17073[(7)] = inst_16948);

return statearr_17073;
})();
var statearr_17074_17165 = state_17067__$1;
(statearr_17074_17165[(2)] = null);

(statearr_17074_17165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (24))){
var inst_16954 = (state_17067[(15)]);
var state_17067__$1 = state_17067;
var statearr_17075_17166 = state_17067__$1;
(statearr_17075_17166[(2)] = inst_16954);

(statearr_17075_17166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (39))){
var inst_17049 = (state_17067[(18)]);
var inst_17045 = (state_17067[(19)]);
var inst_17055 = (state_17067[(20)]);
var inst_16983 = (state_17067[(13)]);
var inst_17057 = (state_17067[(2)]);
var inst_17058 = inst_16983.off(inst_17055);
var inst_17059 = inst_17049.call(null);
var inst_16948 = inst_17045;
var state_17067__$1 = (function (){var statearr_17076 = state_17067;
(statearr_17076[(21)] = inst_17058);

(statearr_17076[(22)] = inst_17057);

(statearr_17076[(7)] = inst_16948);

(statearr_17076[(23)] = inst_17059);

return statearr_17076;
})();
var statearr_17077_17167 = state_17067__$1;
(statearr_17077_17167[(2)] = null);

(statearr_17077_17167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (4))){
var inst_16952 = (state_17067[(12)]);
var inst_16952__$1 = (state_17067[(2)]);
var inst_16953 = cljs.core.nth.call(null,inst_16952__$1,(0),null);
var inst_16954 = cljs.core.nth.call(null,inst_16952__$1,(1),null);
var state_17067__$1 = (function (){var statearr_17078 = state_17067;
(statearr_17078[(12)] = inst_16952__$1);

(statearr_17078[(15)] = inst_16954);

return statearr_17078;
})();
var G__17079_17168 = (((inst_16953 instanceof cljs.core.Keyword))?inst_16953.fqn:null);
switch (G__17079_17168) {
case "reset":
var statearr_17080_17170 = state_17067__$1;
(statearr_17080_17170[(1)] = (6));


break;
case "apply":
var statearr_17081_17171 = state_17067__$1;
(statearr_17081_17171[(1)] = (7));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_16953)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (15))){
var inst_16948 = (state_17067[(7)]);
var state_17067__$1 = state_17067;
var statearr_17082_17172 = state_17067__$1;
(statearr_17082_17172[(2)] = inst_16948);

(statearr_17082_17172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (21))){
var state_17067__$1 = state_17067;
var statearr_17083_17173 = state_17067__$1;
(statearr_17083_17173[(2)] = false);

(statearr_17083_17173[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (31))){
var state_17067__$1 = state_17067;
var statearr_17084_17174 = state_17067__$1;
(statearr_17084_17174[(2)] = false);

(statearr_17084_17174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (32))){
var inst_17034 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_17034)){
var statearr_17085_17175 = state_17067__$1;
(statearr_17085_17175[(1)] = (36));

} else {
var statearr_17086_17176 = state_17067__$1;
(statearr_17086_17176[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (33))){
var state_17067__$1 = state_17067;
var statearr_17087_17177 = state_17067__$1;
(statearr_17087_17177[(2)] = true);

(statearr_17087_17177[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (13))){
var inst_16973 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
var statearr_17088_17178 = state_17067__$1;
(statearr_17088_17178[(2)] = inst_16973);

(statearr_17088_17178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (22))){
var inst_16995 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
var statearr_17089_17179 = state_17067__$1;
(statearr_17089_17179[(2)] = inst_16995);

(statearr_17089_17179[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (36))){
var inst_17019 = (state_17067[(24)]);
var inst_17036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17019);
var state_17067__$1 = state_17067;
var statearr_17090_17180 = state_17067__$1;
(statearr_17090_17180[(2)] = inst_17036);

(statearr_17090_17180[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (29))){
var inst_17007 = (state_17067[(8)]);
var inst_17003 = (state_17067[(9)]);
var inst_17006 = (state_17067[(10)]);
var inst_16982 = (state_17067[(11)]);
var inst_16952 = (state_17067[(12)]);
var inst_16983 = (state_17067[(13)]);
var inst_16948 = (state_17067[(7)]);
var inst_17004 = (state_17067[(14)]);
var inst_16954 = (state_17067[(15)]);
var inst_17005 = (state_17067[(16)]);
var inst_16981 = (state_17067[(17)]);
var inst_17012 = (function (){var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var dir = inst_17005;
var map__16958 = inst_16981;
var n = inst_16982;
var orientation = inst_17007;
var val = inst_16954;
var op = inst_17004;
var map__16959 = inst_17003;
var vec__16960 = inst_17004;
return ((function (scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (p1__16848_SHARP_){
return p1__16848_SHARP_.getZ();
});
;})(scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var state_17067__$1 = state_17067;
var statearr_17091_17181 = state_17067__$1;
(statearr_17091_17181[(2)] = inst_17012);

(statearr_17091_17181[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (6))){
var inst_16954 = (state_17067[(15)]);
var inst_16955 = rubiks_cloact_webapp.core.render_rubiks_cube.call(null,"current-state",inst_16954);
var inst_16948 = inst_16954;
var state_17067__$1 = (function (){var statearr_17092 = state_17067;
(statearr_17092[(25)] = inst_16955);

(statearr_17092[(7)] = inst_16948);

return statearr_17092;
})();
var statearr_17093_17182 = state_17067__$1;
(statearr_17093_17182[(2)] = null);

(statearr_17093_17182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (28))){
var inst_17007 = (state_17067[(8)]);
var inst_17003 = (state_17067[(9)]);
var inst_17006 = (state_17067[(10)]);
var inst_16982 = (state_17067[(11)]);
var inst_16952 = (state_17067[(12)]);
var inst_16983 = (state_17067[(13)]);
var inst_16948 = (state_17067[(7)]);
var inst_17004 = (state_17067[(14)]);
var inst_16954 = (state_17067[(15)]);
var inst_17005 = (state_17067[(16)]);
var inst_16981 = (state_17067[(17)]);
var inst_17010 = (function (){var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var dir = inst_17005;
var map__16958 = inst_16981;
var n = inst_16982;
var orientation = inst_17007;
var val = inst_16954;
var op = inst_17004;
var map__16959 = inst_17003;
var vec__16960 = inst_17004;
return ((function (scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (p1__16847_SHARP_){
return p1__16847_SHARP_.getY();
});
;})(scene,rcs,coord,vec__16950,cube_size,dir,map__16958,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var state_17067__$1 = state_17067;
var statearr_17094_17183 = state_17067__$1;
(statearr_17094_17183[(2)] = inst_17010);

(statearr_17094_17183[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (25))){
var inst_17003 = (state_17067[(9)]);
var inst_17004 = (state_17067[(14)]);
var inst_17005 = (state_17067[(16)]);
var inst_17003__$1 = (state_17067[(2)]);
var inst_17004__$1 = cljs.core.get.call(null,inst_17003__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var inst_17005__$1 = cljs.core.nth.call(null,inst_17004__$1,(0),null);
var inst_17006 = cljs.core.nth.call(null,inst_17004__$1,(1),null);
var inst_17007 = cljs.core.nth.call(null,inst_17004__$1,(2),null);
var state_17067__$1 = (function (){var statearr_17095 = state_17067;
(statearr_17095[(8)] = inst_17007);

(statearr_17095[(9)] = inst_17003__$1);

(statearr_17095[(10)] = inst_17006);

(statearr_17095[(14)] = inst_17004__$1);

(statearr_17095[(16)] = inst_17005__$1);

return statearr_17095;
})();
var G__17096_17184 = (((inst_17005__$1 instanceof cljs.core.Keyword))?inst_17005__$1.fqn:null);
switch (G__17096_17184) {
case "x":
var statearr_17097_17186 = state_17067__$1;
(statearr_17097_17186[(1)] = (27));


break;
case "y":
var statearr_17098_17187 = state_17067__$1;
(statearr_17098_17187[(1)] = (28));


break;
case "z":
var statearr_17099_17188 = state_17067__$1;
(statearr_17099_17188[(1)] = (29));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_17005__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (34))){
var state_17067__$1 = state_17067;
var statearr_17100_17189 = state_17067__$1;
(statearr_17100_17189[(2)] = false);

(statearr_17100_17189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (17))){
var inst_16954 = (state_17067[(15)]);
var inst_16988 = inst_16954.cljs$lang$protocol_mask$partition0$;
var inst_16989 = (inst_16988 & (64));
var inst_16990 = inst_16954.cljs$core$ISeq$;
var inst_16991 = (inst_16989) || (inst_16990);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_16991)){
var statearr_17101_17190 = state_17067__$1;
(statearr_17101_17190[(1)] = (20));

} else {
var statearr_17102_17191 = state_17067__$1;
(statearr_17102_17191[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (3))){
var inst_17065 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17067__$1,inst_17065);
} else {
if((state_val_17068 === (12))){
var state_17067__$1 = state_17067;
var statearr_17103_17192 = state_17067__$1;
(statearr_17103_17192[(2)] = false);

(statearr_17103_17192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (2))){
var state_17067__$1 = state_17067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17067__$1,(4),render_chan_17145);
} else {
if((state_val_17068 === (23))){
var inst_16954 = (state_17067[(15)]);
var inst_17000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16954);
var state_17067__$1 = state_17067;
var statearr_17104_17193 = state_17067__$1;
(statearr_17104_17193[(2)] = inst_17000);

(statearr_17104_17193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (35))){
var inst_17031 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
var statearr_17105_17194 = state_17067__$1;
(statearr_17105_17194[(2)] = inst_17031);

(statearr_17105_17194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (19))){
var inst_16998 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_16998)){
var statearr_17106_17195 = state_17067__$1;
(statearr_17106_17195[(1)] = (23));

} else {
var statearr_17107_17196 = state_17067__$1;
(statearr_17107_17196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (11))){
var state_17067__$1 = state_17067;
var statearr_17108_17197 = state_17067__$1;
(statearr_17108_17197[(2)] = true);

(statearr_17108_17197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (9))){
var state_17067__$1 = state_17067;
var statearr_17109_17198 = state_17067__$1;
(statearr_17109_17198[(2)] = false);

(statearr_17109_17198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (5))){
var inst_17063 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
var statearr_17110_17199 = state_17067__$1;
(statearr_17110_17199[(2)] = inst_17063);

(statearr_17110_17199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (14))){
var inst_16948 = (state_17067[(7)]);
var inst_16978 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16948);
var state_17067__$1 = state_17067;
var statearr_17111_17200 = state_17067__$1;
(statearr_17111_17200[(2)] = inst_16978);

(statearr_17111_17200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (26))){
var inst_17007 = (state_17067[(8)]);
var inst_17003 = (state_17067[(9)]);
var inst_17006 = (state_17067[(10)]);
var inst_17015 = (state_17067[(26)]);
var inst_17017 = (state_17067[(27)]);
var inst_17016 = (state_17067[(28)]);
var inst_16982 = (state_17067[(11)]);
var inst_16952 = (state_17067[(12)]);
var inst_16983 = (state_17067[(13)]);
var inst_16948 = (state_17067[(7)]);
var inst_17004 = (state_17067[(14)]);
var inst_16954 = (state_17067[(15)]);
var inst_17005 = (state_17067[(16)]);
var inst_16981 = (state_17067[(17)]);
var inst_17019 = (state_17067[(24)]);
var inst_17015__$1 = (state_17067[(2)]);
var inst_17016__$1 = (function (){var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var dir = inst_17005;
var map__16958 = inst_16981;
var get_coord = inst_17015__$1;
var n = inst_16982;
var orientation = inst_17007;
var val = inst_16954;
var op = inst_17004;
var map__16959 = inst_17003;
var vec__16960 = inst_17004;
return ((function (scene,rcs,coord,vec__16950,cube_size,dir,map__16958,get_coord,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17019,inst_17015__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (p1__16849_SHARP_){
if(cljs.core._EQ_.call(null,get_coord.call(null,p1__16849_SHARP_),coord)){
return new cljs.core.Keyword(null,"to-be-rotated","to-be-rotated",1596933);
} else {
return new cljs.core.Keyword(null,"others","others",2084874583);
}
});
;})(scene,rcs,coord,vec__16950,cube_size,dir,map__16958,get_coord,n,orientation,val,op,map__16959,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17019,inst_17015__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17017__$1 = inst_16983.getNode("rubiks-cube-pieces");
var inst_17018 = inst_17017__$1.disconnectNodes();
var inst_17019__$1 = cljs.core.group_by.call(null,inst_17016__$1,inst_17018);
var inst_17021 = (inst_17019__$1 == null);
var inst_17022 = cljs.core.not.call(null,inst_17021);
var state_17067__$1 = (function (){var statearr_17112 = state_17067;
(statearr_17112[(26)] = inst_17015__$1);

(statearr_17112[(27)] = inst_17017__$1);

(statearr_17112[(28)] = inst_17016__$1);

(statearr_17112[(24)] = inst_17019__$1);

return statearr_17112;
})();
if(inst_17022){
var statearr_17113_17201 = state_17067__$1;
(statearr_17113_17201[(1)] = (30));

} else {
var statearr_17114_17202 = state_17067__$1;
(statearr_17114_17202[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (16))){
var inst_16954 = (state_17067[(15)]);
var inst_16981 = (state_17067[(17)]);
var inst_16981__$1 = (state_17067[(2)]);
var inst_16982 = cljs.core.get.call(null,inst_16981__$1,new cljs.core.Keyword(null,"n","n",562130025));
var inst_16983 = SceneJS.getScene();
var inst_16985 = (inst_16954 == null);
var inst_16986 = cljs.core.not.call(null,inst_16985);
var state_17067__$1 = (function (){var statearr_17115 = state_17067;
(statearr_17115[(11)] = inst_16982);

(statearr_17115[(13)] = inst_16983);

(statearr_17115[(17)] = inst_16981__$1);

return statearr_17115;
})();
if(inst_16986){
var statearr_17116_17203 = state_17067__$1;
(statearr_17116_17203[(1)] = (17));

} else {
var statearr_17117_17204 = state_17067__$1;
(statearr_17117_17204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (38))){
var inst_17007 = (state_17067[(8)]);
var inst_17003 = (state_17067[(9)]);
var inst_17006 = (state_17067[(10)]);
var inst_17015 = (state_17067[(26)]);
var inst_17049 = (state_17067[(18)]);
var inst_17045 = (state_17067[(19)]);
var inst_17017 = (state_17067[(27)]);
var inst_17016 = (state_17067[(28)]);
var inst_16982 = (state_17067[(11)]);
var inst_16952 = (state_17067[(12)]);
var inst_16983 = (state_17067[(13)]);
var inst_16948 = (state_17067[(7)]);
var inst_17004 = (state_17067[(14)]);
var inst_16954 = (state_17067[(15)]);
var inst_17005 = (state_17067[(16)]);
var inst_16981 = (state_17067[(17)]);
var inst_17039 = (state_17067[(2)]);
var inst_17040 = cljs.core.get.call(null,inst_17039,new cljs.core.Keyword(null,"to-be-rotated","to-be-rotated",1596933));
var inst_17041 = cljs.core.get.call(null,inst_17039,new cljs.core.Keyword(null,"others","others",2084874583));
var inst_17042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17043 = [inst_17004];
var inst_17044 = (new cljs.core.PersistentVector(null,1,(5),inst_17042,inst_17043,null));
var inst_17045__$1 = rubiks_cloact_webapp.cube.apply_algorithm.call(null,inst_16948,inst_17044);
var inst_17046 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var to_be_rotated = inst_17040;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,val,op,rcp_node,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (p1__16850_SHARP_,p2__16851_SHARP_){
return p1__16850_SHARP_.split(p2__16851_SHARP_);
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,val,op,rcp_node,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17047 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var to_be_rotated = inst_17040;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var mysplit = inst_17046;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (n__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,mysplit.call(null,n__$1.id,"-").pop()),n__$1.getColor()], null);
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17048 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var to_be_rotated = inst_17040;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var mysplit = inst_17046;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var get_face_color = inst_17047;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (new_colors){
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (nd_face){
var dir__$1 = cljs.core.keyword.call(null,mysplit.call(null,nd_face.id,"-").pop());
return nd_face.setColor(new_colors.call(null,dir__$1));
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17049__$1 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var to_be_rotated = inst_17040;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var mysplit = inst_17046;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var get_face_color = inst_17047;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var set_face_color = inst_17048;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (){
var trf = ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (pos,p__17118){
var vec__17119 = p__17118;
var dir__$1 = cljs.core.nth.call(null,vec__17119,(0),null);
var _ = cljs.core.nth.call(null,vec__17119,(1),null);
var ort = cljs.core.nth.call(null,vec__17119,(2),null);
var mat = dir__$1.call(null,ort.call(null,rubiks_cloact_webapp.core.trf));
return rubiks_cloact_webapp.core.spmult.call(null,mat,pos,cube_size);
});})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
;
var trf_node = ((function (trf,group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (nd){
var colors = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,get_face_color,nd.nodes));
var pos_in = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nd.getX(),nd.getY(),nd.getZ()], null);
var vec__17120 = trf.call(null,pos_in,op);
var x__$1 = cljs.core.nth.call(null,vec__17120,(0),null);
var y = cljs.core.nth.call(null,vec__17120,(1),null);
var z = cljs.core.nth.call(null,vec__17120,(2),null);
var pos_out = vec__17120;
var vec__17121 = op;
var dir__$1 = cljs.core.nth.call(null,vec__17121,(0),null);
var _ = cljs.core.nth.call(null,vec__17121,(1),null);
var ort = cljs.core.nth.call(null,vec__17121,(2),null);
var rotated_colors = rubiks_cloact_webapp.core.rotate.call(null,colors,dir__$1,ort);
var color_setter = set_face_color.call(null,rotated_colors);
nd.setXYZ(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null)));

return cljs.core.mapv.call(null,color_setter,nd.nodes);
});})(trf,group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
;
cljs.core.mapv.call(null,trf_node,to_be_rotated);

var seq__17122 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pre-rotate-translate-op","rotate-op","post-rotate-translate-op"], null));
var chunk__17123 = null;
var count__17124 = (0);
var i__17125 = (0);
while(true){
if((i__17125 < count__17124)){
var id = cljs.core._nth.call(null,chunk__17123,i__17125);
scene.getNode(id).splice();

var G__17205 = seq__17122;
var G__17206 = chunk__17123;
var G__17207 = count__17124;
var G__17208 = (i__17125 + (1));
seq__17122 = G__17205;
chunk__17123 = G__17206;
count__17124 = G__17207;
i__17125 = G__17208;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17122);
if(temp__4657__auto__){
var seq__17122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17122__$1)){
var c__6868__auto__ = cljs.core.chunk_first.call(null,seq__17122__$1);
var G__17209 = cljs.core.chunk_rest.call(null,seq__17122__$1);
var G__17210 = c__6868__auto__;
var G__17211 = cljs.core.count.call(null,c__6868__auto__);
var G__17212 = (0);
seq__17122 = G__17209;
chunk__17123 = G__17210;
count__17124 = G__17211;
i__17125 = G__17212;
continue;
} else {
var id = cljs.core.first.call(null,seq__17122__$1);
scene.getNode(id).splice();

var G__17213 = cljs.core.next.call(null,seq__17122__$1);
var G__17214 = null;
var G__17215 = (0);
var G__17216 = (0);
seq__17122 = G__17213;
chunk__17123 = G__17214;
count__17124 = G__17215;
i__17125 = G__17216;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17050 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var put_rcs_sg_in_non_rotating_cfg = inst_17049__$1;
var to_be_rotated = inst_17040;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var mysplit = inst_17046;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var get_face_color = inst_17047;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var set_face_color = inst_17048;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,put_rcs_sg_in_non_rotating_cfg,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,inst_17049__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (){
var nd = rcp_node;
nd.addNodes(cljs.core.clj__GT_js.call(null,others));

nd.addNode(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),1.5,new cljs.core.Keyword(null,"y","y",-1757859776),1.5,new cljs.core.Keyword(null,"z","z",-789527183),1.5], null),dir,(0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"translate",new cljs.core.Keyword(null,"id","id",-1388402092),"post-rotate-translate-op",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(0)], null),dir,(1)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"id","id",-1388402092),"rotate-op",new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),-1.5,new cljs.core.Keyword(null,"y","y",-1757859776),-1.5,new cljs.core.Keyword(null,"z","z",-789527183),-1.5], null),dir,(0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"translate",new cljs.core.Keyword(null,"id","id",-1388402092),"pre-rotate-translate-op"], null))], null)], null))], null)], null))));

return scene.getNode("pre-rotate-translate-op").addNodes(cljs.core.clj__GT_js.call(null,to_be_rotated));
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,put_rcs_sg_in_non_rotating_cfg,to_be_rotated,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,map__16961,map__16959,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,inst_17049__$1,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17051 = inst_17050.call(null);
var inst_17052 = inst_16983.getNode("rotate-op");
var inst_17053 = cljs.core.async.chan.call(null);
var inst_17054 = (function (){var group_fn = inst_17016;
var scene = inst_16983;
var rcs = inst_16948;
var coord = inst_17006;
var vec__16950 = inst_16952;
var cube_size = inst_16982;
var put_rcs_sg_in_non_rotating_cfg = inst_17049__$1;
var to_be_rotated = inst_17040;
var nd = inst_17052;
var dir = inst_17005;
var new_rcs = inst_17045__$1;
var map__16958 = inst_16981;
var get_coord = inst_17015;
var n = inst_16982;
var orientation = inst_17007;
var mysplit = inst_17046;
var val = inst_16954;
var op = inst_17004;
var rcp_node = inst_17017;
var get_face_color = inst_17047;
var put_rcs_sg_in_rotating_cfg = inst_17050;
var map__16961 = inst_17039;
var map__16959 = inst_17003;
var finished_current_rotate_op = inst_17053;
var set_face_color = inst_17048;
var others = inst_17041;
var vec__16960 = inst_17004;
return ((function (group_fn,scene,rcs,coord,vec__16950,cube_size,put_rcs_sg_in_non_rotating_cfg,to_be_rotated,nd,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,put_rcs_sg_in_rotating_cfg,map__16961,map__16959,finished_current_rotate_op,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,inst_17049__$1,inst_17050,inst_17051,inst_17052,inst_17053,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function (){
var angle = nd.getAngle();
if((rubiks_cloact_webapp.core.abs.call(null,angle) >= (90))){
return cljs.core.async.close_BANG_.call(null,finished_current_rotate_op);
} else {
return nd.setAngle((function (){var G__17126 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__17126) {
case "clockwise":
return cljs.core._;

break;
case "counter-clockwise":
return cljs.core._PLUS_;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})().call(null,angle,(5)));
}
});
;})(group_fn,scene,rcs,coord,vec__16950,cube_size,put_rcs_sg_in_non_rotating_cfg,to_be_rotated,nd,dir,new_rcs,map__16958,get_coord,n,orientation,mysplit,val,op,rcp_node,get_face_color,put_rcs_sg_in_rotating_cfg,map__16961,map__16959,finished_current_rotate_op,set_face_color,others,vec__16960,inst_17007,inst_17003,inst_17006,inst_17015,inst_17049,inst_17045,inst_17017,inst_17016,inst_16982,inst_16952,inst_16983,inst_16948,inst_17004,inst_16954,inst_17005,inst_16981,inst_17039,inst_17040,inst_17041,inst_17042,inst_17043,inst_17044,inst_17045__$1,inst_17046,inst_17047,inst_17048,inst_17049__$1,inst_17050,inst_17051,inst_17052,inst_17053,state_val_17068,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var inst_17055 = inst_16983.on("tick",inst_17054);
var state_17067__$1 = (function (){var statearr_17127 = state_17067;
(statearr_17127[(18)] = inst_17049__$1);

(statearr_17127[(19)] = inst_17045__$1);

(statearr_17127[(20)] = inst_17055);

(statearr_17127[(29)] = inst_17051);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17067__$1,(39),inst_17053);
} else {
if((state_val_17068 === (30))){
var inst_17019 = (state_17067[(24)]);
var inst_17024 = inst_17019.cljs$lang$protocol_mask$partition0$;
var inst_17025 = (inst_17024 & (64));
var inst_17026 = inst_17019.cljs$core$ISeq$;
var inst_17027 = (inst_17025) || (inst_17026);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_17027)){
var statearr_17128_17218 = state_17067__$1;
(statearr_17128_17218[(1)] = (33));

} else {
var statearr_17129_17219 = state_17067__$1;
(statearr_17129_17219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (10))){
var inst_16976 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_16976)){
var statearr_17130_17220 = state_17067__$1;
(statearr_17130_17220[(1)] = (14));

} else {
var statearr_17131_17221 = state_17067__$1;
(statearr_17131_17221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (18))){
var state_17067__$1 = state_17067;
var statearr_17132_17222 = state_17067__$1;
(statearr_17132_17222[(2)] = false);

(statearr_17132_17222[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (37))){
var inst_17019 = (state_17067[(24)]);
var state_17067__$1 = state_17067;
var statearr_17133_17223 = state_17067__$1;
(statearr_17133_17223[(2)] = inst_17019);

(statearr_17133_17223[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (8))){
var inst_16948 = (state_17067[(7)]);
var inst_16966 = inst_16948.cljs$lang$protocol_mask$partition0$;
var inst_16967 = (inst_16966 & (64));
var inst_16968 = inst_16948.cljs$core$ISeq$;
var inst_16969 = (inst_16967) || (inst_16968);
var state_17067__$1 = state_17067;
if(cljs.core.truth_(inst_16969)){
var statearr_17134_17224 = state_17067__$1;
(statearr_17134_17224[(1)] = (11));

} else {
var statearr_17135_17225 = state_17067__$1;
(statearr_17135_17225[(1)] = (12));

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
});})(c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
;
return ((function (switch__13670__auto__,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145){
return (function() {
var rubiks_cloact_webapp$core$state_machine__13671__auto__ = null;
var rubiks_cloact_webapp$core$state_machine__13671__auto____0 = (function (){
var statearr_17139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17139[(0)] = rubiks_cloact_webapp$core$state_machine__13671__auto__);

(statearr_17139[(1)] = (1));

return statearr_17139;
});
var rubiks_cloact_webapp$core$state_machine__13671__auto____1 = (function (state_17067){
while(true){
var ret_value__13672__auto__ = (function (){try{while(true){
var result__13673__auto__ = switch__13670__auto__.call(null,state_17067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13673__auto__;
}
break;
}
}catch (e17140){if((e17140 instanceof Object)){
var ex__13674__auto__ = e17140;
var statearr_17141_17226 = state_17067;
(statearr_17141_17226[(5)] = ex__13674__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17227 = state_17067;
state_17067 = G__17227;
continue;
} else {
return ret_value__13672__auto__;
}
break;
}
});
rubiks_cloact_webapp$core$state_machine__13671__auto__ = function(state_17067){
switch(arguments.length){
case 0:
return rubiks_cloact_webapp$core$state_machine__13671__auto____0.call(this);
case 1:
return rubiks_cloact_webapp$core$state_machine__13671__auto____1.call(this,state_17067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rubiks_cloact_webapp$core$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$0 = rubiks_cloact_webapp$core$state_machine__13671__auto____0;
rubiks_cloact_webapp$core$state_machine__13671__auto__.cljs$core$IFn$_invoke$arity$1 = rubiks_cloact_webapp$core$state_machine__13671__auto____1;
return rubiks_cloact_webapp$core$state_machine__13671__auto__;
})()
;})(switch__13670__auto__,c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
})();
var state__13784__auto__ = (function (){var statearr_17142 = f__13783__auto__.call(null);
(statearr_17142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13782__auto___17160);

return statearr_17142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13784__auto__);
});})(c__13782__auto___17160,x_17143,app_state_17144,render_chan_17145))
);

rubiks_cloact_webapp.core.square_color = (function rubiks_cloact_webapp$core$square_color(p__17228){
var map__17231 = p__17228;
var map__17231__$1 = ((((!((map__17231 == null)))?((((map__17231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17231):map__17231);
var color = cljs.core.get.call(null,map__17231__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"30px",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null);
});
rubiks_cloact_webapp.core.rubiks_cube_face = (function rubiks_cloact_webapp$core$rubiks_cube_face(p__17234){
var map__17237 = p__17234;
var map__17237__$1 = ((((!((map__17237 == null)))?((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17237):map__17237);
var face = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"face","face",-1356480717));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,((function (map__17237,map__17237__$1,face){
return (function (row){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,((function (map__17237,map__17237__$1,face){
return (function (p1__17233_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubiks_cloact_webapp.core.square_color,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),p1__17233_SHARP_], null)], null);
});})(map__17237,map__17237__$1,face))
,row));
});})(map__17237,map__17237__$1,face))
,face));
});
rubiks_cloact_webapp.core.layout = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"top","top",-1856271961),null,null], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,null], null)], null);
var rgb_17265 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(1),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"g","g",1738089905),(1),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(1),new cljs.core.Keyword(null,"g","g",1738089905),(1),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(1),new cljs.core.Keyword(null,"g","g",1738089905),0.4,new cljs.core.Keyword(null,"b","b",1482224470),(0)], null),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(1),new cljs.core.Keyword(null,"g","g",1738089905),(1),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"g","g",1738089905),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0)], null)], null);
var rgba_17266 = ((function (rgb_17265){
return (function rubiks_cloact_webapp$core$rgba(color){
var map__17241 = rgb_17265.call(null,color);
var map__17241__$1 = ((((!((map__17241 == null)))?((((map__17241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17241):map__17241);
var r = cljs.core.get.call(null,map__17241__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.call(null,map__17241__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.call(null,map__17241__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,1.0], null);
});})(rgb_17265))
;
var coords_17267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var cid_17268 = ((function (rgb_17265,rgba_17266,coords_17267){
return (function (x){
var vec__17243 = rubiks_cloact_webapp.cube.coord_map_to_coord_vec.call(null,x);
var i = cljs.core.nth.call(null,vec__17243,(0),null);
var j = cljs.core.nth.call(null,vec__17243,(1),null);
var k = cljs.core.nth.call(null,vec__17243,(2),null);
return (((2) * (((2) * i) + j)) + k);
});})(rgb_17265,rgba_17266,coords_17267))
;
var positions_17269 = (function (){var iter__6837__auto__ = ((function (rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function rubiks_cloact_webapp$core$iter__17244(s__17245){
return (new cljs.core.LazySeq(null,((function (rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function (){
var s__17245__$1 = s__17245;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17245__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6833__auto__ = ((function (s__17245__$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function rubiks_cloact_webapp$core$iter__17244_$_iter__17246(s__17247){
return (new cljs.core.LazySeq(null,((function (s__17245__$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function (){
var s__17247__$1 = s__17247;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__17247__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var j = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__6833__auto__ = ((function (s__17247__$1,s__17245__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function rubiks_cloact_webapp$core$iter__17244_$_iter__17246_$_iter__17248(s__17249){
return (new cljs.core.LazySeq(null,((function (s__17247__$1,s__17245__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268){
return (function (){
var s__17249__$1 = s__17249;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__17249__$1);
if(temp__4657__auto____$2){
var s__17249__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17249__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__17249__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__17251 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__17250 = (0);
while(true){
if((i__17250 < size__6836__auto__)){
var k = cljs.core._nth.call(null,c__6835__auto__,i__17250);
cljs.core.chunk_append.call(null,b__17251,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k], null));

var G__17271 = (i__17250 + (1));
i__17250 = G__17271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17251),rubiks_cloact_webapp$core$iter__17244_$_iter__17246_$_iter__17248.call(null,cljs.core.chunk_rest.call(null,s__17249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17251),null);
}
} else {
var k = cljs.core.first.call(null,s__17249__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k], null),rubiks_cloact_webapp$core$iter__17244_$_iter__17246_$_iter__17248.call(null,cljs.core.rest.call(null,s__17249__$2)));
}
} else {
return null;
}
break;
}
});})(s__17247__$1,s__17245__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268))
,null,null));
});})(s__17247__$1,s__17245__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,coords_17267));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$core$iter__17244_$_iter__17246.call(null,cljs.core.rest.call(null,s__17247__$1)));
} else {
var G__17272 = cljs.core.rest.call(null,s__17247__$1);
s__17247__$1 = G__17272;
continue;
}
} else {
return null;
}
break;
}
});})(s__17245__$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268))
,null,null));
});})(s__17245__$1,i,xs__5205__auto__,temp__4657__auto__,rgb_17265,rgba_17266,coords_17267,cid_17268))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,coords_17267));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$core$iter__17244.call(null,cljs.core.rest.call(null,s__17245__$1)));
} else {
var G__17273 = cljs.core.rest.call(null,s__17245__$1);
s__17245__$1 = G__17273;
continue;
}
} else {
return null;
}
break;
}
});})(rgb_17265,rgba_17266,coords_17267,cid_17268))
,null,null));
});})(rgb_17265,rgba_17266,coords_17267,cid_17268))
;
return iter__6837__auto__.call(null,coords_17267);
})();
var piece_sg_17270 = ((function (rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269){
return (function (piece_id,p__17252){
var map__17253 = p__17252;
var map__17253__$1 = ((((!((map__17253 == null)))?((((map__17253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17253):map__17253);
var piece = map__17253__$1;
var faces = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var position = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.into.call(null,position,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"translate",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("rubiks-piece-"),cljs.core.str(piece_id)].join(''),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.mapv.call(null,((function (map__17253,map__17253__$1,piece,faces,position,rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269){
return (function (p__17255){
var map__17256 = p__17255;
var map__17256__$1 = ((((!((map__17256 == null)))?((((map__17256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17256):map__17256);
var f = map__17256__$1;
var face = cljs.core.get.call(null,map__17256__$1,new cljs.core.Keyword(null,"face","face",-1356480717));
var color = cljs.core.get.call(null,map__17256__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647));
var normal = cljs.core.get.call(null,map__17256__$1,new cljs.core.Keyword(null,"normal","normal",-1519123858));
var face_id = [cljs.core.str("rubiks-piece-"),cljs.core.str(piece_id),cljs.core.str("-"),cljs.core.str((function (){var vec__17258 = cljs.core.first.call(null,normal);
var dir = cljs.core.nth.call(null,vec__17258,(0),null);
var val = cljs.core.nth.call(null,vec__17258,(1),null);
return [cljs.core.str(((cljs.core._EQ_.call(null,val,(-1)))?"n":"")),cljs.core.str(cljs.core.name.call(null,dir))].join('');
})())].join('');
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"material",new cljs.core.Keyword(null,"color","color",1011675173),rgb_17265.call(null,color),new cljs.core.Keyword(null,"id","id",-1388402092),face_id,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (){var vec__17259 = cljs.core.map.call(null,cid_17268,face);
var v0 = cljs.core.nth.call(null,vec__17259,(0),null);
var v1 = cljs.core.nth.call(null,vec__17259,(1),null);
var v2 = cljs.core.nth.call(null,vec__17259,(2),null);
var v3 = cljs.core.nth.call(null,vec__17259,(3),null);
var vertices = vec__17259;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"geometry",new cljs.core.Keyword(null,"primitive","primitive",1884541424),"triangles",new cljs.core.Keyword(null,"indices","indices",-1218138343),(new Float32Array(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1,v2,v0,v2,v3], null)))),new cljs.core.Keyword(null,"positions","positions",-1380538434),(new Float32Array(cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.concat,positions_17269))))], null)], null);
})()], null);
});})(map__17253,map__17253__$1,piece,faces,position,rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269))
,faces)], null));
});})(rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269))
;
rubiks_cloact_webapp.core.render_rubiks_cube = ((function (rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269,piece_sg_17270){
return (function rubiks_cloact_webapp$core$render_rubiks_cube(canvas_id,p__17260){
var map__17263 = p__17260;
var map__17263__$1 = ((((!((map__17263 == null)))?((((map__17263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17263):map__17263);
var rcs = map__17263__$1;
var n = cljs.core.get.call(null,map__17263__$1,new cljs.core.Keyword(null,"n","n",562130025));
var scene_id = [cljs.core.str("scene-"),cljs.core.str(canvas_id)].join('');
var scene = (function (){var temp__4655__auto__ = SceneJS.getScene(scene_id);
if(cljs.core.truth_(temp__4655__auto__)){
var scene_x = temp__4655__auto__;
scene_x.removeNodes();

return scene_x;
} else {
return SceneJS.createScene(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"scene",new cljs.core.Keyword(null,"id","id",-1388402092),scene_id,new cljs.core.Keyword(null,"canvasId","canvasId",-2110847084),canvas_id], null)));
}
})();
var camera_node = cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"eye","eye",-1788770007),new cljs.core.Keyword(null,"yaw","yaw",-1791898389),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pitch","pitch",1495126700),new cljs.core.Keyword(null,"zoomSensitivity","zoomSensitivity",1716747121),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)],[3.0,scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"z","z",-789527183),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"z","z",-789527183),(2)], null),(315),"cameras/orbit",(30),1.0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"translate",new cljs.core.Keyword(null,"x","x",2099068185),-0.5,new cljs.core.Keyword(null,"y","y",-1757859776),-0.5,new cljs.core.Keyword(null,"z","z",-789527183),-0.5,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var s = (1.0 / n);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"scale",new cljs.core.Keyword(null,"x","x",2099068185),s,new cljs.core.Keyword(null,"y","y",-1757859776),s,new cljs.core.Keyword(null,"z","z",-789527183),s,new cljs.core.Keyword(null,"id","id",-1388402092),"rubiks-cube-pieces",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.map_indexed.call(null,piece_sg_17270,rubiks_cloact_webapp.cube.rubiks_cube_geometry.call(null,rcs))], null);
})()], null)], null)], null)]));
return scene.addNode(camera_node);
});})(rgb_17265,rgba_17266,coords_17267,cid_17268,positions_17269,piece_sg_17270))
;
rubiks_cloact_webapp.core.rubiks_cube = (function rubiks_cloact_webapp$core$rubiks_cube(p__17274){
var map__17279 = p__17274;
var map__17279__$1 = ((((!((map__17279 == null)))?((((map__17279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17279):map__17279);
var rubiks_cube_state = cljs.core.get.call(null,map__17279__$1,new cljs.core.Keyword(null,"rubiks-cube-state","rubiks-cube-state",203331487));
var orientation = cljs.core.get.call(null,map__17279__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var canvas_id = cljs.core.get.call(null,map__17279__$1,new cljs.core.Keyword(null,"canvas-id","canvas-id",993270450));
var map__17281 = rubiks_cloact_webapp.cube.face_representation.call(null,rubiks_cube_state);
var map__17281__$1 = ((((!((map__17281 == null)))?((((map__17281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17281):map__17281);
var frcs = cljs.core.get.call(null,map__17281__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], null)], null),cljs.core.map.call(null,((function (map__17281,map__17281__$1,frcs,map__17279,map__17279__$1,rubiks_cube_state,orientation,canvas_id){
return (function (table_row){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.mapv.call(null,((function (map__17281,map__17281__$1,frcs,map__17279,map__17279__$1,rubiks_cube_state,orientation,canvas_id){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(x)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubiks_cloact_webapp.core.rubiks_cube_face,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"face","face",-1356480717),frcs.call(null,x)], null)], null):null)], null);
});})(map__17281,map__17281__$1,frcs,map__17279,map__17279__$1,rubiks_cube_state,orientation,canvas_id))
,table_row));
});})(map__17281,map__17281__$1,frcs,map__17279,map__17279__$1,rubiks_cube_state,orientation,canvas_id))
,rubiks_cloact_webapp.core.layout))], null);
});
rubiks_cloact_webapp.core.show_solution = (function rubiks_cloact_webapp$core$show_solution(p__17283){
var map__17289 = p__17283;
var map__17289__$1 = ((((!((map__17289 == null)))?((((map__17289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17289):map__17289);
var solution = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"solution","solution",-1727231491));
var orientation = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var color = new cljs.core.Keyword(null,"blue","blue",-622100620);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"click to see the state of the cube after applying all the transformations up-to and including clicked transformation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null),cljs.core.map.call(null,((function (color,map__17289,map__17289__$1,solution,orientation){
return (function (p__17291){
var vec__17292 = p__17291;
var move_id = cljs.core.nth.call(null,vec__17292,(0),null);
var vec__17293 = cljs.core.nth.call(null,vec__17292,(1),null);
var dir = cljs.core.nth.call(null,vec__17293,(0),null);
var coord = cljs.core.nth.call(null,vec__17293,(1),null);
var orientation__$1 = cljs.core.nth.call(null,vec__17293,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),move_id,new cljs.core.Keyword(null,"title","title",636505583),(((move_id < (0)))?"start":[cljs.core.str(move_id),cljs.core.str(" [ "),cljs.core.str(cljs.core.name.call(null,dir)),cljs.core.str(" "),cljs.core.str(coord),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,orientation__$1)),cljs.core.str(" ]")].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rubiks_cloact_webapp.core.current_state_updater.call(null,move_id),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622)],["16pt","5px","3px","3em","2px",new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),"5px",[cljs.core.str("10px solid "),cljs.core.str(cljs.core.name.call(null,color))].join(''),"3px","1em"])], null),(((move_id < (0)))?"start":[cljs.core.str(cljs.core.name.call(null,dir)),cljs.core.str(" "),cljs.core.str(coord),cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,orientation__$1,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918)))?"\u21BB":"\u21BA"))].join(''))], null);
});})(color,map__17289,map__17289__$1,solution,orientation))
,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),solution)));
});
rubiks_cloact_webapp.core.run = (function rubiks_cloact_webapp$core$run(){
SceneJS.setDebugConfigs(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shading","shading",-637548494),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitewash","whitewash",-1828774546),true,new cljs.core.Keyword(null,"logScripts","logScripts",-780288293),true], null),new cljs.core.Keyword(null,"webgl","webgl",1974307887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logTrace","logTrace",461475479),true], null),new cljs.core.Keyword(null,"pluginPath","pluginPath",-560287844),"js/scenejs/plugins"], null)));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rubiks_cloact_webapp.core.main_page], null),document.getElementById("reactjs-content"));
});
goog.exportSymbol('rubiks_cloact_webapp.core.run', rubiks_cloact_webapp.core.run);
