// Compiled by ClojureScript 1.7.228 {}
goog.provide('rubiks_cloact_webapp.solver');
goog.require('cljs.core');
goog.require('clojure.set');
rubiks_cloact_webapp.solver.sides = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null);
rubiks_cloact_webapp.solver.human_comprehendible_sides = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"back","back",-417520012)], null);
var opp_color_16558 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,rubiks_cloact_webapp.solver.sides,cljs.core.map.call(null,(function (p__16556){
var vec__16557 = p__16556;
var x = cljs.core.nth.call(null,vec__16557,(0),null);
var y = cljs.core.nth.call(null,vec__16557,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
}),rubiks_cloact_webapp.solver.sides)));
rubiks_cloact_webapp.solver.opposite = ((function (opp_color_16558){
return (function rubiks_cloact_webapp$solver$opposite(color){
return opp_color_16558.call(null,color);
});})(opp_color_16558))
;
var x_16559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408)], null);
var opp_dir_16560 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16559,cljs.core.vec.call(null,cljs.core.reverse.call(null,x_16559))], null));
rubiks_cloact_webapp.solver.opposite_orientation = ((function (x_16559,opp_dir_16560){
return (function rubiks_cloact_webapp$solver$opposite_orientation(orientation){
return opp_dir_16560.call(null,orientation);
});})(x_16559,opp_dir_16560))
;
var start_colors_16568 = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,rubiks_cloact_webapp.solver.sides));
rubiks_cloact_webapp.solver.orientation_colors = ((function (start_colors_16568){
return (function rubiks_cloact_webapp$solver$orientation_colors(var_args){
var args16562 = [];
var len__7123__auto___16569 = arguments.length;
var i__7124__auto___16570 = (0);
while(true){
if((i__7124__auto___16570 < len__7123__auto___16569)){
args16562.push((arguments[i__7124__auto___16570]));

var G__16571 = (i__7124__auto___16570 + (1));
i__7124__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var G__16564 = args16562.length;
switch (G__16564) {
case 1:
return rubiks_cloact_webapp.solver.orientation_colors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rubiks_cloact_webapp.solver.orientation_colors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16562.length)].join('')));

}
});})(start_colors_16568))
;

rubiks_cloact_webapp.solver.orientation_colors.cljs$core$IFn$_invoke$arity$1 = ((function (start_colors_16568){
return (function (color){
return cljs.core.vec.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,color,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918)));
});})(start_colors_16568))
;

rubiks_cloact_webapp.solver.orientation_colors.cljs$core$IFn$_invoke$arity$2 = ((function (start_colors_16568){
return (function (color,orientation){
return cljs.core.vec.call(null,(cljs.core.truth_(start_colors_16568.call(null,color))?((cljs.core.not_EQ_.call(null,orientation,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918)))?cljs.core.reverse.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,color,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918))):(function (){var vec__16565 = cljs.core.take.call(null,(2),cljs.core.drop.call(null,(1),cljs.core.drop_while.call(null,((function (start_colors_16568){
return (function (p1__16561_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__16561_SHARP_),color);
});})(start_colors_16568))
,cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.sides))));
var vec__16566 = cljs.core.nth.call(null,vec__16565,(0),null);
var a = cljs.core.nth.call(null,vec__16566,(0),null);
var b = cljs.core.nth.call(null,vec__16566,(1),null);
var vec__16567 = cljs.core.nth.call(null,vec__16565,(1),null);
var c = cljs.core.nth.call(null,vec__16567,(0),null);
var d = cljs.core.nth.call(null,vec__16567,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,d], null);
})()):rubiks_cloact_webapp.solver.orientation_colors.call(null,rubiks_cloact_webapp.solver.opposite.call(null,color),rubiks_cloact_webapp.solver.opposite_orientation.call(null,orientation))));
});})(start_colors_16568))
;

rubiks_cloact_webapp.solver.orientation_colors.cljs$lang$maxFixedArity = 2;
rubiks_cloact_webapp.solver.next_color = (function rubiks_cloact_webapp$solver$next_color(var_args){
var args16574 = [];
var len__7123__auto___16577 = arguments.length;
var i__7124__auto___16578 = (0);
while(true){
if((i__7124__auto___16578 < len__7123__auto___16577)){
args16574.push((arguments[i__7124__auto___16578]));

var G__16579 = (i__7124__auto___16578 + (1));
i__7124__auto___16578 = G__16579;
continue;
} else {
}
break;
}

var G__16576 = args16574.length;
switch (G__16576) {
case 2:
return rubiks_cloact_webapp.solver.next_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rubiks_cloact_webapp.solver.next_color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16574.length)].join('')));

}
});

rubiks_cloact_webapp.solver.next_color.cljs$core$IFn$_invoke$arity$2 = (function (rot_color,cur_color){
return rubiks_cloact_webapp.solver.next_color.call(null,rot_color,cur_color,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));
});

rubiks_cloact_webapp.solver.next_color.cljs$core$IFn$_invoke$arity$3 = (function (rot_color,cur_color,rot_dir){
return cljs.core.second.call(null,cljs.core.drop_while.call(null,(function (p1__16573_SHARP_){
return cljs.core.not_EQ_.call(null,cur_color,p1__16573_SHARP_);
}),cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,rot_color,rot_dir))));
});

rubiks_cloact_webapp.solver.next_color.cljs$lang$maxFixedArity = 3;
var transition_map_16597 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6837__auto__ = (function rubiks_cloact_webapp$solver$iter__16581(s__16582){
return (new cljs.core.LazySeq(null,(function (){
var s__16582__$1 = s__16582;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16582__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6833__auto__ = ((function (s__16582__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function rubiks_cloact_webapp$solver$iter__16581_$_iter__16583(s__16584){
return (new cljs.core.LazySeq(null,((function (s__16582__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__16584__$1 = s__16584;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__16584__$1);
if(temp__4657__auto____$1){
var s__16584__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16584__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__16584__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__16586 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__16585 = (0);
while(true){
if((i__16585 < size__6836__auto__)){
var y = cljs.core._nth.call(null,c__6835__auto__,i__16585);
cljs.core.chunk_append.call(null,b__16586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),(function (){var oclrs = rubiks_cloact_webapp.solver.orientation_colors.call(null,x,y);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([x,x], true, false),cljs.core.map.call(null,cljs.core.vector,oclrs,cljs.core.drop.call(null,(1),cljs.core.cycle.call(null,oclrs))));
})()], null));

var G__16598 = (i__16585 + (1));
i__16585 = G__16598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16586),rubiks_cloact_webapp$solver$iter__16581_$_iter__16583.call(null,cljs.core.chunk_rest.call(null,s__16584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16586),null);
}
} else {
var y = cljs.core.first.call(null,s__16584__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),(function (){var oclrs = rubiks_cloact_webapp.solver.orientation_colors.call(null,x,y);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([x,x], true, false),cljs.core.map.call(null,cljs.core.vector,oclrs,cljs.core.drop.call(null,(1),cljs.core.cycle.call(null,oclrs))));
})()], null),rubiks_cloact_webapp$solver$iter__16581_$_iter__16583.call(null,cljs.core.rest.call(null,s__16584__$2)));
}
} else {
return null;
}
break;
}
});})(s__16582__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__16582__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408)], null)));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$solver$iter__16581.call(null,cljs.core.rest.call(null,s__16582__$1)));
} else {
var G__16599 = cljs.core.rest.call(null,s__16582__$1);
s__16582__$1 = G__16599;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6837__auto__.call(null,cljs.core.apply.call(null,cljs.core.concat,rubiks_cloact_webapp.solver.sides));
})());
rubiks_cloact_webapp.solver.rotate_rubiks_cube = ((function (transition_map_16597){
return (function rubiks_cloact_webapp$solver$rotate_rubiks_cube(var_args){
var args__7130__auto__ = [];
var len__7123__auto___16600 = arguments.length;
var i__7124__auto___16601 = (0);
while(true){
if((i__7124__auto___16601 < len__7123__auto___16600)){
args__7130__auto__.push((arguments[i__7124__auto___16601]));

var G__16602 = (i__7124__auto___16601 + (1));
i__7124__auto___16601 = G__16602;
continue;
} else {
}
break;
}

var argseq__7131__auto__ = ((((1) < args__7130__auto__.length))?(new cljs.core.IndexedSeq(args__7130__auto__.slice((1)),(0))):null);
return rubiks_cloact_webapp.solver.rotate_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7131__auto__);
});})(transition_map_16597))
;

rubiks_cloact_webapp.solver.rotate_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic = ((function (transition_map_16597){
return (function (rubiks_cube_state,p__16589){
var vec__16590 = p__16589;
var color = cljs.core.nth.call(null,vec__16590,(0),null);
var orientation = cljs.core.nth.call(null,vec__16590,(1),null);
var move = vec__16590;
var map__16591 = cljs.core.meta.call(null,rubiks_cube_state);
var map__16591__$1 = ((((!((map__16591 == null)))?((((map__16591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16591):map__16591);
var m = map__16591__$1;
var original_cube = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"original-cube","original-cube",-1453300115));
var cur_transition_map = transition_map_16597.call(null,move);
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__16591,map__16591__$1,m,original_cube,cur_transition_map,vec__16590,color,orientation,move,transition_map_16597){
return (function (p__16593){
var vec__16594 = p__16593;
var k = cljs.core.nth.call(null,vec__16594,(0),null);
var v = cljs.core.nth.call(null,vec__16594,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(v.call(null,color))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__16594,k,v,map__16591,map__16591__$1,m,original_cube,cur_transition_map,vec__16590,color,orientation,move,transition_map_16597){
return (function (p__16595){
var vec__16596 = p__16595;
var side_color = cljs.core.nth.call(null,vec__16596,(0),null);
var actual_color = cljs.core.nth.call(null,vec__16596,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_transition_map.call(null,side_color),actual_color], null);
});})(vec__16594,k,v,map__16591,map__16591__$1,m,original_cube,cur_transition_map,vec__16590,color,orientation,move,transition_map_16597))
,v)):v)], null);
});})(map__16591,map__16591__$1,m,original_cube,cur_transition_map,vec__16590,color,orientation,move,transition_map_16597))
,rubiks_cube_state)),cljs.core.update_in.call(null,(cljs.core.truth_(original_cube)?m:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"original-cube","original-cube",-1453300115),rubiks_cube_state,new cljs.core.Keyword(null,"moves-applied","moves-applied",-1941579955),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves-applied","moves-applied",-1941579955)], null),cljs.core.conj,move));
});})(transition_map_16597))
;

rubiks_cloact_webapp.solver.rotate_rubiks_cube.cljs$lang$maxFixedArity = (1);

rubiks_cloact_webapp.solver.rotate_rubiks_cube.cljs$lang$applyTo = ((function (transition_map_16597){
return (function (seq16587){
var G__16588 = cljs.core.first.call(null,seq16587);
var seq16587__$1 = cljs.core.next.call(null,seq16587);
return rubiks_cloact_webapp.solver.rotate_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic(G__16588,seq16587__$1);
});})(transition_map_16597))
;
rubiks_cloact_webapp.solver.full_orientation = (function rubiks_cloact_webapp$solver$full_orientation(ormp){
var G__16613 = ormp;
var map__16614 = G__16613;
var map__16614__$1 = ((((!((map__16614 == null)))?((((map__16614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);
var fr = map__16614__$1;
var top = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var front = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var bottom = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var right = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var back = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var G__16613__$1 = G__16613;
while(true){
var map__16616 = G__16613__$1;
var map__16616__$1 = ((((!((map__16616 == null)))?((((map__16616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16616):map__16616);
var fr__$1 = map__16616__$1;
var top__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var front__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var bottom__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var right__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var back__$1 = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"back","back",-417520012));
if(cljs.core.truth_((function (){var and__6053__auto__ = top__$1;
if(cljs.core.truth_(and__6053__auto__)){
var and__6053__auto____$1 = front__$1;
if(cljs.core.truth_(and__6053__auto____$1)){
var and__6053__auto____$2 = bottom__$1;
if(cljs.core.truth_(and__6053__auto____$2)){
var and__6053__auto____$3 = right__$1;
if(cljs.core.truth_(and__6053__auto____$3)){
var and__6053__auto____$4 = left__$1;
if(cljs.core.truth_(and__6053__auto____$4)){
return back__$1;
} else {
return and__6053__auto____$4;
}
} else {
return and__6053__auto____$3;
}
} else {
return and__6053__auto____$2;
}
} else {
return and__6053__auto____$1;
}
} else {
return and__6053__auto__;
}
})())){
return fr__$1;
} else {
var G__16618 = cljs.core.apply.call(null,cljs.core.assoc,fr__$1,(cljs.core.truth_((function (){var and__6053__auto__ = front__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (back__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012),rubiks_cloact_webapp.solver.opposite.call(null,front__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = back__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (front__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),rubiks_cloact_webapp.solver.opposite.call(null,back__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = right__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (left__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),rubiks_cloact_webapp.solver.opposite.call(null,right__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = left__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (right__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),rubiks_cloact_webapp.solver.opposite.call(null,left__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = top__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (bottom__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rubiks_cloact_webapp.solver.opposite.call(null,top__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = bottom__$1;
if(cljs.core.truth_(and__6053__auto__)){
return (top__$1 == null);
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),rubiks_cloact_webapp.solver.opposite.call(null,bottom__$1)], null):(cljs.core.truth_((function (){var and__6053__auto__ = front__$1;
if(cljs.core.truth_(and__6053__auto__)){
return right__$1;
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back){
return (function (p1__16603_SHARP_){
return cljs.core.not_EQ_.call(null,left__$1,p1__16603_SHARP_);
});})(G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back))
,cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,front__$1))))], null):(cljs.core.truth_((function (){var and__6053__auto__ = front__$1;
if(cljs.core.truth_(and__6053__auto__)){
return bottom__$1;
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back){
return (function (p1__16604_SHARP_){
return cljs.core.not_EQ_.call(null,top__$1,p1__16604_SHARP_);
});})(G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back))
,cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,front__$1))))], null):(cljs.core.truth_((function (){var and__6053__auto__ = right__$1;
if(cljs.core.truth_(and__6053__auto__)){
return bottom__$1;
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back){
return (function (p1__16605_SHARP_){
return cljs.core.not_EQ_.call(null,bottom__$1,p1__16605_SHARP_);
});})(G__16613__$1,map__16616,map__16616__$1,fr__$1,top__$1,front__$1,bottom__$1,right__$1,left__$1,back__$1,G__16613,map__16614,map__16614__$1,fr,top,front,bottom,right,left,back))
,cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,right__$1))))], null):(cljs.core.truth_((function (){var and__6053__auto__ = front__$1;
if(cljs.core.truth_(and__6053__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [top__$1,right__$1], null));
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.first.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,front__$1))], null):(cljs.core.truth_((function (){var and__6053__auto__ = right__$1;
if(cljs.core.truth_(and__6053__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [top__$1,front__$1], null));
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.first.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,right__$1))], null):(cljs.core.truth_((function (){var and__6053__auto__ = top__$1;
if(cljs.core.truth_(and__6053__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right__$1,front__$1], null));
} else {
return and__6053__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.first.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,top__$1))], null):(((front__$1 == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"green","green",-945526839)], null):null))))))))))))));
G__16613__$1 = G__16618;
continue;
}
break;
}
});
var dir_ort_map_16663 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"front","front",-1523508988)], null)], null);
rubiks_cloact_webapp.solver.from_generic_state = ((function (dir_ort_map_16663){
return (function rubiks_cloact_webapp$solver$from_generic_state(p__16619){
var map__16634 = p__16619;
var map__16634__$1 = ((((!((map__16634 == null)))?((((map__16634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16634):map__16634);
var pieces = cljs.core.get.call(null,map__16634__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n = cljs.core.get.call(null,map__16634__$1,new cljs.core.Keyword(null,"n","n",562130025));
if(cljs.core._EQ_.call(null,n,(3))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),(3))))].join('')));
}

var ormp = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,((function (map__16634,map__16634__$1,pieces,n,dir_ort_map_16663){
return (function (p__16636){
var map__16637 = p__16636;
var map__16637__$1 = ((((!((map__16637 == null)))?((((map__16637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16637):map__16637);
var piece = map__16637__$1;
var vec__16638 = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x = cljs.core.nth.call(null,vec__16638,(0),null);
var xc = cljs.core.nth.call(null,vec__16638,(1),null);
var vec__16639 = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var y = cljs.core.nth.call(null,vec__16639,(0),null);
var yc = cljs.core.nth.call(null,vec__16639,(1),null);
var vec__16640 = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var z = cljs.core.nth.call(null,vec__16640,(0),null);
var zc = cljs.core.nth.call(null,vec__16640,(1),null);
var G__16642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),xc], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),xc], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),yc], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),yc], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012),zc], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),G__16642)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),zc], null);
} else {
return null;

}
}
}
}
}
}
});})(map__16634,map__16634__$1,pieces,n,dir_ort_map_16663))
,pieces));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orientation","orientation",623557579),ormp,new cljs.core.Keyword(null,"rubiks-cube-state","rubiks-cube-state",203331487),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ormp,map__16634,map__16634__$1,pieces,n,dir_ort_map_16663){
return (function (general_piece){
var c = cljs.core.keep.call(null,((function (ormp,map__16634,map__16634__$1,pieces,n,dir_ort_map_16663){
return (function (p__16643){
var vec__16644 = p__16643;
var dir = cljs.core.nth.call(null,vec__16644,(0),null);
var vec__16645 = cljs.core.nth.call(null,vec__16644,(1),null);
var coord = cljs.core.nth.call(null,vec__16645,(0),null);
var color = cljs.core.nth.call(null,vec__16645,(1),null);
if(cljs.core.truth_(color)){
var vec__16646 = dir_ort_map_16663.call(null,dir);
var min = cljs.core.nth.call(null,vec__16646,(0),null);
var max = cljs.core.nth.call(null,vec__16646,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ormp.call(null,(function (){var G__16647 = coord;
switch (G__16647) {
case (0):
return min;

break;
case (2):
return max;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(coord)].join('')));

}
})()),color], null);
} else {
return null;
}
});})(ormp,map__16634,map__16634__$1,pieces,n,dir_ort_map_16663))
,general_piece);
var piece = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.second,c));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,c)], null);
});})(ormp,map__16634,map__16634__$1,pieces,n,dir_ort_map_16663))
,pieces))], null);
});})(dir_ort_map_16663))
;

rubiks_cloact_webapp.solver.to_generic_state = ((function (dir_ort_map_16663){
return (function rubiks_cloact_webapp$solver$to_generic_state(var_args){
var args16648 = [];
var len__7123__auto___16665 = arguments.length;
var i__7124__auto___16666 = (0);
while(true){
if((i__7124__auto___16666 < len__7123__auto___16665)){
args16648.push((arguments[i__7124__auto___16666]));

var G__16667 = (i__7124__auto___16666 + (1));
i__7124__auto___16666 = G__16667;
continue;
} else {
}
break;
}

var G__16650 = args16648.length;
switch (G__16650) {
case 2:
return rubiks_cloact_webapp.solver.to_generic_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rubiks_cloact_webapp.solver.to_generic_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16648.length)].join('')));

}
});})(dir_ort_map_16663))
;

rubiks_cloact_webapp.solver.to_generic_state.cljs$core$IFn$_invoke$arity$2 = ((function (dir_ort_map_16663){
return (function (rcs,ormp){
var default_generic_piece = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null);
var dir_to_generic_coord = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null),new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null)], null);
var color_to_generic_coord = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (default_generic_piece,dir_to_generic_coord,dir_ort_map_16663){
return (function (p__16651){
var vec__16652 = p__16651;
var k = cljs.core.nth.call(null,vec__16652,(0),null);
var v = cljs.core.nth.call(null,vec__16652,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ormp.call(null,k),v], null);
});})(default_generic_piece,dir_to_generic_coord,dir_ort_map_16663))
,dir_to_generic_coord));
var center_face_pieces = cljs.core.map.call(null,((function (default_generic_piece,dir_to_generic_coord,color_to_generic_coord,dir_ort_map_16663){
return (function (p__16653){
var vec__16654 = p__16653;
var color = cljs.core.nth.call(null,vec__16654,(0),null);
var vec__16655 = cljs.core.nth.call(null,vec__16654,(1),null);
var dir = cljs.core.nth.call(null,vec__16655,(0),null);
var vec__16656 = cljs.core.nth.call(null,vec__16655,(1),null);
var coord = cljs.core.nth.call(null,vec__16656,(0),null);
return cljs.core.assoc.call(null,default_generic_piece,dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,color], null));
});})(default_generic_piece,dir_to_generic_coord,color_to_generic_coord,dir_ort_map_16663))
,color_to_generic_coord);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),(3),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.map.call(null,((function (default_generic_piece,dir_to_generic_coord,color_to_generic_coord,center_face_pieces,dir_ort_map_16663){
return (function (p__16657){
var vec__16658 = p__16657;
var piece = cljs.core.nth.call(null,vec__16658,(0),null);
var dir_color_map = cljs.core.nth.call(null,vec__16658,(1),null);
return cljs.core.reduce.call(null,((function (vec__16658,piece,dir_color_map,default_generic_piece,dir_to_generic_coord,color_to_generic_coord,center_face_pieces,dir_ort_map_16663){
return (function (cur_generic_piece,p__16659){
var vec__16660 = p__16659;
var dir_color = cljs.core.nth.call(null,vec__16660,(0),null);
var actual_color = cljs.core.nth.call(null,vec__16660,(1),null);
var vec__16661 = color_to_generic_coord.call(null,dir_color);
var dir = cljs.core.nth.call(null,vec__16661,(0),null);
var vec__16662 = cljs.core.nth.call(null,vec__16661,(1),null);
var coord = cljs.core.nth.call(null,vec__16662,(0),null);
return cljs.core.assoc.call(null,cur_generic_piece,dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,actual_color], null));
});})(vec__16658,piece,dir_color_map,default_generic_piece,dir_to_generic_coord,color_to_generic_coord,center_face_pieces,dir_ort_map_16663))
,default_generic_piece,dir_color_map);
});})(default_generic_piece,dir_to_generic_coord,color_to_generic_coord,center_face_pieces,dir_ort_map_16663))
,rcs)], null);
});})(dir_ort_map_16663))
;

rubiks_cloact_webapp.solver.to_generic_state.cljs$core$IFn$_invoke$arity$1 = ((function (dir_ort_map_16663){
return (function (rcs){
return rubiks_cloact_webapp.solver.to_generic_state.call(null,rcs,rubiks_cloact_webapp.solver.full_orientation.call(null,cljs.core.PersistentArrayMap.EMPTY));
});})(dir_ort_map_16663))
;

rubiks_cloact_webapp.solver.to_generic_state.cljs$lang$maxFixedArity = 2;
var char_orientation_map_16688 = new cljs.core.PersistentArrayMap(null, 6, ["U",new cljs.core.Keyword(null,"top","top",-1856271961),"R",new cljs.core.Keyword(null,"right","right",-452581833),"L",new cljs.core.Keyword(null,"left","left",-399115937),"F",new cljs.core.Keyword(null,"front","front",-1523508988),"D",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"B",new cljs.core.Keyword(null,"back","back",-417520012)], null);
rubiks_cloact_webapp.solver.ops_to_string = ((function (char_orientation_map_16688){
return (function rubiks_cloact_webapp$solver$ops_to_string(ops,ormp){
var cm = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (char_orientation_map_16688){
return (function (p__16674){
var vec__16675 = p__16674;
var c = cljs.core.nth.call(null,vec__16675,(0),null);
var ort = cljs.core.nth.call(null,vec__16675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ormp.call(null,ort),c], null);
});})(char_orientation_map_16688))
,char_orientation_map_16688));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,((function (cm,char_orientation_map_16688){
return (function (p__16676){
var vec__16677 = p__16676;
var c = cljs.core.nth.call(null,vec__16677,(0),null);
var rot_dir = cljs.core.nth.call(null,vec__16677,(1),null);
return [cljs.core.str(cm.call(null,c)),cljs.core.str((function (){var G__16678 = (((rot_dir instanceof cljs.core.Keyword))?rot_dir.fqn:null);
switch (G__16678) {
case "clockwise":
return "";

break;
case "counter-clockwise":
return "i";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(rot_dir)].join('')));

}
})())].join('');
});})(cm,char_orientation_map_16688))
,ops)));
});})(char_orientation_map_16688))
;

rubiks_cloact_webapp.solver.string_to_ops = ((function (char_orientation_map_16688){
return (function rubiks_cloact_webapp$solver$string_to_ops(algo_string,ormp){
return cljs.core.map.call(null,((function (char_orientation_map_16688){
return (function (p__16681){
var vec__16682 = p__16681;
var a = cljs.core.nth.call(null,vec__16682,(0),null);
var b = cljs.core.nth.call(null,vec__16682,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ormp.call(null,char_orientation_map_16688.call(null,a)),(cljs.core.truth_(b)?new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408):new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918))], null);
});})(char_orientation_map_16688))
,clojure.string.split.call(null,algo_string,/\s+/));
});})(char_orientation_map_16688))
;

rubiks_cloact_webapp.solver.apply_algorithm = ((function (char_orientation_map_16688){
return (function rubiks_cloact_webapp$solver$apply_algorithm(var_args){
var args16683 = [];
var len__7123__auto___16690 = arguments.length;
var i__7124__auto___16691 = (0);
while(true){
if((i__7124__auto___16691 < len__7123__auto___16690)){
args16683.push((arguments[i__7124__auto___16691]));

var G__16692 = (i__7124__auto___16691 + (1));
i__7124__auto___16691 = G__16692;
continue;
} else {
}
break;
}

var G__16685 = args16683.length;
switch (G__16685) {
case 3:
return rubiks_cloact_webapp.solver.apply_algorithm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return rubiks_cloact_webapp.solver.apply_algorithm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16683.length)].join('')));

}
});})(char_orientation_map_16688))
;

rubiks_cloact_webapp.solver.apply_algorithm.cljs$core$IFn$_invoke$arity$3 = ((function (char_orientation_map_16688){
return (function (rubiks_cube_state,algo_string,orientation_map){
var ormp = rubiks_cloact_webapp.solver.full_orientation.call(null,orientation_map);
var ops = rubiks_cloact_webapp.solver.string_to_ops.call(null,algo_string,ormp);
return rubiks_cloact_webapp.solver.apply_algorithm.call(null,rubiks_cube_state,ops);
});})(char_orientation_map_16688))
;

rubiks_cloact_webapp.solver.apply_algorithm.cljs$core$IFn$_invoke$arity$2 = ((function (char_orientation_map_16688){
return (function (rubiks_cube_state,ops){
return cljs.core.reduce.call(null,((function (char_orientation_map_16688){
return (function (s,p__16686){
var vec__16687 = p__16686;
var c = cljs.core.nth.call(null,vec__16687,(0),null);
var o = cljs.core.nth.call(null,vec__16687,(1),null);
return rubiks_cloact_webapp.solver.rotate_rubiks_cube.call(null,s,c,o);
});})(char_orientation_map_16688))
,rubiks_cube_state,ops);
});})(char_orientation_map_16688))
;

rubiks_cloact_webapp.solver.apply_algorithm.cljs$lang$maxFixedArity = 3;
rubiks_cloact_webapp.solver.transform_rubiks_cube = (function rubiks_cloact_webapp$solver$transform_rubiks_cube(rubiks_cube_state,p__16697){
var map__16701 = p__16697;
var map__16701__$1 = ((((!((map__16701 == null)))?((((map__16701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16701):map__16701);
var piece = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"piece","piece",1396691784));
var f_pos = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"f-pos","f-pos",828333011));
var i_pos = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"i-pos","i-pos",-209412816));
var rot_dir = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"rot-dir","rot-dir",-2126241500));
if(cljs.core._EQ_.call(null,i_pos,f_pos)){
return rubiks_cube_state;
} else {
var i_pos__$1 = (cljs.core.truth_(i_pos)?i_pos:cljs.core.set.call(null,cljs.core.keys.call(null,rubiks_cube_state.call(null,piece))));
var rot_dir__$1 = (function (){var x = clojure.set.intersection.call(null,i_pos__$1,f_pos);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,x))){
return cljs.core.first.call(null,x);
} else {
if(cljs.core.truth_(rot_dir)){
return rot_dir;
} else {
return cljs.core.print.call(null,"please specify rot-dir : ",rot_dir," x : ",x," f-pos : ",f_pos," i-pos : ",i_pos__$1);
}
}
})();
var vec__16703 = cljs.core.map.call(null,((function (i_pos__$1,rot_dir__$1,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir){
return (function (p1__16694_SHARP_){
return cljs.core.disj.call(null,p1__16694_SHARP_,rot_dir__$1);
});})(i_pos__$1,rot_dir__$1,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_pos__$1,f_pos], null));
var i_pos_r = cljs.core.nth.call(null,vec__16703,(0),null);
var f_pos_r = cljs.core.nth.call(null,vec__16703,(1),null);
var dist = cljs.core.count.call(null,cljs.core.take_while.call(null,((function (i_pos__$1,rot_dir__$1,vec__16703,i_pos_r,f_pos_r,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir){
return (function (p1__16696_SHARP_){
return cljs.core.not_EQ_.call(null,p1__16696_SHARP_,f_pos_r);
});})(i_pos__$1,rot_dir__$1,vec__16703,i_pos_r,f_pos_r,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir))
,cljs.core.drop_while.call(null,((function (i_pos__$1,rot_dir__$1,vec__16703,i_pos_r,f_pos_r,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir){
return (function (p1__16695_SHARP_){
return cljs.core.not_EQ_.call(null,p1__16695_SHARP_,i_pos_r);
});})(i_pos__$1,rot_dir__$1,vec__16703,i_pos_r,f_pos_r,map__16701,map__16701__$1,piece,f_pos,i_pos,rot_dir))
,cljs.core.map.call(null,cljs.core.set,cljs.core.partition.call(null,cljs.core.count.call(null,i_pos_r),(1),cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,rot_dir__$1)))))));
return rubiks_cloact_webapp.solver.apply_algorithm.call(null,rubiks_cube_state,cljs.core.repeat.call(null,dist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rot_dir__$1,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918)], null)));
}
});
rubiks_cloact_webapp.solver.current_location = (function rubiks_cloact_webapp$solver$current_location(rubiks_cube_state,piece){
return cljs.core.set.call(null,cljs.core.keys.call(null,rubiks_cube_state.call(null,piece)));
});
rubiks_cloact_webapp.solver.solve_first_layer_cross = (function rubiks_cloact_webapp$solver$solve_first_layer_cross(rubiks_cube_state,c,s_c){
var vec__16706 = cljs.core.map.call(null,rubiks_cloact_webapp.solver.opposite,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,s_c], null));
var o_c = cljs.core.nth.call(null,vec__16706,(0),null);
var o_s_c = cljs.core.nth.call(null,vec__16706,(1),null);
var vec__16707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([s_c,c], true),cljs.core.PersistentHashSet.fromArray([o_c,s_c], true)], null);
var piece = cljs.core.nth.call(null,vec__16707,(0),null);
var opp_loc = cljs.core.nth.call(null,vec__16707,(1),null);
var r_c_s = rubiks_cube_state;
while(true){
var cur_loc = rubiks_cloact_webapp.solver.current_location.call(null,r_c_s,piece);
if(cljs.core._EQ_.call(null,cur_loc,piece)){
return r_c_s;
} else {
var temp__4655__auto__ = ((cljs.core._EQ_.call(null,opp_loc,cur_loc))?piece:(cljs.core.truth_(cur_loc.call(null,o_c))?opp_loc:(cljs.core.truth_(cur_loc.call(null,c))?cljs.core.conj.call(null,cljs.core.disj.call(null,cur_loc,c),o_c):(cljs.core.truth_(cur_loc.call(null,s_c))?piece:null
))));
if(cljs.core.truth_(temp__4655__auto__)){
var f_pos = temp__4655__auto__;
var G__16708 = rubiks_cloact_webapp.solver.transform_rubiks_cube.call(null,r_c_s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i-pos","i-pos",-209412816),cur_loc,new cljs.core.Keyword(null,"f-pos","f-pos",828333011),f_pos], null));
r_c_s = G__16708;
continue;
} else {
if(cljs.core.truth_(cur_loc.call(null,o_s_c))){
var other_dir = cljs.core.first.call(null,cljs.core.disj.call(null,cur_loc,o_s_c));
var nxt_clr = rubiks_cloact_webapp.solver.next_color.call(null,o_s_c,other_dir,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));
var algo_str = ((cljs.core._EQ_.call(null,c,nxt_clr))?"U U F U U":"U U Fi U U");
var G__16709 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,algo_str,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),c,new cljs.core.Keyword(null,"front","front",-1523508988),o_s_c], null));
r_c_s = G__16709;
continue;
} else {
throw new cljs.core.Keyword(null,"should-not-come-here","should-not-come-here",-1453027223);
}
}
}
break;
}
});
rubiks_cloact_webapp.solver.is_piece_correctly_placed_and_oriented = (function rubiks_cloact_webapp$solver$is_piece_correctly_placed_and_oriented(rubiks_cube_state,piece){
var cur_loc = rubiks_cloact_webapp.solver.current_location.call(null,rubiks_cube_state,piece);
return (cljs.core._EQ_.call(null,cur_loc,piece)) && (cljs.core.every_QMARK_.call(null,((function (cur_loc){
return (function (p1__16710_SHARP_){
return cljs.core.apply.call(null,cljs.core._EQ_,p1__16710_SHARP_);
});})(cur_loc))
,rubiks_cube_state.call(null,piece)));
});
rubiks_cloact_webapp.solver.is_piece_correctly_placed = (function rubiks_cloact_webapp$solver$is_piece_correctly_placed(r_c_s,piece){
return cljs.core._EQ_.call(null,rubiks_cloact_webapp.solver.current_location.call(null,r_c_s,piece),piece);
});
rubiks_cloact_webapp.solver.orientation_color_pairs = (function rubiks_cloact_webapp$solver$orientation_color_pairs(var_args){
var args16711 = [];
var len__7123__auto___16714 = arguments.length;
var i__7124__auto___16715 = (0);
while(true){
if((i__7124__auto___16715 < len__7123__auto___16714)){
args16711.push((arguments[i__7124__auto___16715]));

var G__16716 = (i__7124__auto___16715 + (1));
i__7124__auto___16715 = G__16716;
continue;
} else {
}
break;
}

var G__16713 = args16711.length;
switch (G__16713) {
case 1:
return rubiks_cloact_webapp.solver.orientation_color_pairs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rubiks_cloact_webapp.solver.orientation_color_pairs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16711.length)].join('')));

}
});

rubiks_cloact_webapp.solver.orientation_color_pairs.cljs$core$IFn$_invoke$arity$1 = (function (c){
return rubiks_cloact_webapp.solver.orientation_color_pairs.call(null,c,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));
});

rubiks_cloact_webapp.solver.orientation_color_pairs.cljs$core$IFn$_invoke$arity$2 = (function (c,ort_dir){
return cljs.core.take.call(null,(4),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,rubiks_cloact_webapp.solver.orientation_colors.call(null,c,ort_dir))));
});

rubiks_cloact_webapp.solver.orientation_color_pairs.cljs$lang$maxFixedArity = 2;
rubiks_cloact_webapp.solver.first_layer_cross = (function rubiks_cloact_webapp$solver$first_layer_cross(c){
return cljs.core.map.call(null,(function (p1__16718_SHARP_){
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p1__16718_SHARP_], null));
}),rubiks_cloact_webapp.solver.orientation_colors.call(null,c));
});
rubiks_cloact_webapp.solver.first_layer_corner = (function rubiks_cloact_webapp$solver$first_layer_corner(c){
return cljs.core.map.call(null,(function (p1__16719_SHARP_){
return cljs.core.set.call(null,cljs.core.conj.call(null,p1__16719_SHARP_,c));
}),rubiks_cloact_webapp.solver.orientation_color_pairs.call(null,c));
});
rubiks_cloact_webapp.solver.second_layer_corner = (function rubiks_cloact_webapp$solver$second_layer_corner(c){
return cljs.core.map.call(null,cljs.core.set,rubiks_cloact_webapp.solver.orientation_color_pairs.call(null,c));
});
rubiks_cloact_webapp.solver.third_layer_cross = (function rubiks_cloact_webapp$solver$third_layer_cross(c){
var o_c = rubiks_cloact_webapp.solver.opposite.call(null,c);
return cljs.core.map.call(null,((function (o_c){
return (function (p1__16720_SHARP_){
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_c,p1__16720_SHARP_], null));
});})(o_c))
,rubiks_cloact_webapp.solver.orientation_colors.call(null,c));
});
rubiks_cloact_webapp.solver.third_layer_corner = (function rubiks_cloact_webapp$solver$third_layer_corner(c){
var o_c = rubiks_cloact_webapp.solver.opposite.call(null,c);
return cljs.core.map.call(null,((function (o_c){
return (function (p1__16721_SHARP_){
return cljs.core.set.call(null,cljs.core.conj.call(null,p1__16721_SHARP_,o_c));
});})(o_c))
,rubiks_cloact_webapp.solver.orientation_color_pairs.call(null,c));
});
rubiks_cloact_webapp.solver.verify = (function rubiks_cloact_webapp$solver$verify(locs,locs_and_orts,r_c_s,c){
if((cljs.core.every_QMARK_.call(null,(function (p1__16722_SHARP_){
return rubiks_cloact_webapp.solver.is_piece_correctly_placed_and_oriented.call(null,r_c_s,p1__16722_SHARP_);
}),cljs.core.mapcat.call(null,(function (p1__16723_SHARP_){
return p1__16723_SHARP_.call(null,c);
}),locs_and_orts))) && (cljs.core.every_QMARK_.call(null,(function (p1__16724_SHARP_){
return rubiks_cloact_webapp.solver.is_piece_correctly_placed.call(null,r_c_s,p1__16724_SHARP_);
}),cljs.core.mapcat.call(null,(function (p1__16725_SHARP_){
return p1__16725_SHARP_.call(null,c);
}),locs)))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"locs : ",locs)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"locs-and-orts : ",locs_and_orts))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

}
});
rubiks_cloact_webapp.solver.solve_first_layer_corner = (function rubiks_cloact_webapp$solver$solve_first_layer_corner(rubiks_cube_state,top,p__16727){
var vec__16731 = p__16727;
var right = cljs.core.nth.call(null,vec__16731,(0),null);
var front = cljs.core.nth.call(null,vec__16731,(1),null);
var piece = cljs.core.PersistentHashSet.fromArray([front,top,right], true);
var opp_piece = cljs.core.PersistentHashSet.fromArray([front,rubiks_cloact_webapp.solver.opposite.call(null,top),right], true);
var cur_loc = rubiks_cloact_webapp.solver.current_location.call(null,rubiks_cube_state,piece);
var map__16732 = rubiks_cloact_webapp.solver.full_orientation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"right","right",-452581833),right], null));
var map__16732__$1 = ((((!((map__16732 == null)))?((((map__16732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16732):map__16732);
var ormp = map__16732__$1;
var top__$1 = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var right__$1 = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var front__$1 = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var left = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var back = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var bottom = cljs.core.get.call(null,map__16732__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var correct_or_opposite_to_correct_state = (function (){var r_c_s = rubiks_cube_state;
while(true){
var cur_loc__$1 = rubiks_cloact_webapp.solver.current_location.call(null,r_c_s,piece);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([piece,opp_piece], true).call(null,cur_loc__$1))){
return r_c_s;
} else {
if(cljs.core.truth_(cur_loc__$1.call(null,top__$1))){
var G__16734 = (function (){var ort = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top__$1,new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.some.call(null,((function (r_c_s,cur_loc__$1,piece,opp_piece,cur_loc,map__16732,map__16732__$1,ormp,top__$1,right__$1,front__$1,left,back,bottom,vec__16731,right,front){
return (function (p1__16726_SHARP_){
return cur_loc__$1.call(null,rubiks_cloact_webapp.solver.next_color.call(null,top__$1,p1__16726_SHARP_));
});})(r_c_s,cur_loc__$1,piece,opp_piece,cur_loc,map__16732,map__16732__$1,ormp,top__$1,right__$1,front__$1,left,back,bottom,vec__16731,right,front))
,cljs.core.disj.call(null,cur_loc__$1,top__$1))], null);
return rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"Ri Di R",ort);
})();
r_c_s = G__16734;
continue;
} else {
var trf_param = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"i-pos","i-pos",-209412816),cur_loc__$1,new cljs.core.Keyword(null,"f-pos","f-pos",828333011),opp_piece,new cljs.core.Keyword(null,"rot-dir","rot-dir",-2126241500),bottom], null);
return rubiks_cloact_webapp.solver.transform_rubiks_cube.call(null,r_c_s,trf_param);

}
}
break;
}
})();
var r_c_s = correct_or_opposite_to_correct_state;
while(true){
if(cljs.core.truth_(rubiks_cloact_webapp.solver.is_piece_correctly_placed_and_oriented.call(null,r_c_s,piece))){
return r_c_s;
} else {
var G__16735 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"Ri Di R D",ormp);
r_c_s = G__16735;
continue;
}
break;
}
});
rubiks_cloact_webapp.solver.solve = (function rubiks_cloact_webapp$solver$solve(var_args){
var args16754 = [];
var len__7123__auto___16777 = arguments.length;
var i__7124__auto___16778 = (0);
while(true){
if((i__7124__auto___16778 < len__7123__auto___16777)){
args16754.push((arguments[i__7124__auto___16778]));

var G__16779 = (i__7124__auto___16778 + (1));
i__7124__auto___16778 = G__16779;
continue;
} else {
}
break;
}

var G__16756 = args16754.length;
switch (G__16756) {
case 1:
return rubiks_cloact_webapp.solver.solve.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rubiks_cloact_webapp.solver.solve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16754.length)].join('')));

}
});

rubiks_cloact_webapp.solver.solve.cljs$core$IFn$_invoke$arity$1 = (function (rubiks_cube_state){
return rubiks_cloact_webapp.solver.solve.call(null,rubiks_cube_state,new cljs.core.Keyword(null,"green","green",-945526839));
});

rubiks_cloact_webapp.solver.solve.cljs$core$IFn$_invoke$arity$2 = (function (rubiks_cube_state,c){
var oclrs = rubiks_cloact_webapp.solver.orientation_colors.call(null,c);
var o_c = rubiks_cloact_webapp.solver.opposite.call(null,c);
var dir_pairs = rubiks_cloact_webapp.solver.orientation_color_pairs.call(null,c);
var unoriented_correct_first_layer_cross = cljs.core.reduce.call(null,((function (oclrs,o_c,dir_pairs){
return (function (p1__16736_SHARP_,p2__16737_SHARP_){
return rubiks_cloact_webapp.solver.solve_first_layer_cross.call(null,p1__16736_SHARP_,c,p2__16737_SHARP_);
});})(oclrs,o_c,dir_pairs))
,rubiks_cube_state,oclrs);
var re_orient_first_layer_cross_tips = ((function (oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross){
return (function (r_c_s,side){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.first.call(null,r_c_s.call(null,cljs.core.PersistentHashSet.fromArray([c,side], true)))))){
return r_c_s;
} else {
return rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"Fi U Li Ui",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),side,new cljs.core.Keyword(null,"top","top",-1856271961),c], null));
}
});})(oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross))
;
var correct_first_layer_cross_tips = cljs.core.reduce.call(null,re_orient_first_layer_cross_tips,unoriented_correct_first_layer_cross,oclrs);
var top_layer_correct = cljs.core.reduce.call(null,((function (oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips){
return (function (p1__16738_SHARP_,p2__16739_SHARP_){
return rubiks_cloact_webapp.solver.solve_first_layer_corner.call(null,p1__16738_SHARP_,c,p2__16739_SHARP_);
});})(oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips))
,correct_first_layer_cross_tips,dir_pairs);
var fix_middle_layer = ((function (oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct){
return (function (r_c_s,piece){
while(true){
var ort = r_c_s.call(null,piece);
if(cljs.core.truth_(ort.call(null,o_c))){
var vec__16757 = cljs.core.first.call(null,cljs.core.dissoc.call(null,ort,o_c));
var cur_color = cljs.core.nth.call(null,vec__16757,(0),null);
var to_color = cljs.core.nth.call(null,vec__16757,(1),null);
var r_c_s_1 = rubiks_cloact_webapp.solver.transform_rubiks_cube.call(null,r_c_s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i-pos","i-pos",-209412816),cljs.core.PersistentHashSet.fromArray([cur_color,o_c], true),new cljs.core.Keyword(null,"f-pos","f-pos",828333011),cljs.core.PersistentHashSet.fromArray([to_color,o_c], true)], null));
var vec__16758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_color,r_c_s_1.call(null,piece).call(null,o_c)], null);
var matched_color = cljs.core.nth.call(null,vec__16758,(0),null);
var tobe_matched_color = cljs.core.nth.call(null,vec__16758,(1),null);
var vec__16759 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (r_c_s,piece,vec__16757,cur_color,to_color,r_c_s_1,vec__16758,matched_color,tobe_matched_color,ort,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct){
return (function (p1__16740_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__16740_SHARP_),matched_color);
});})(r_c_s,piece,vec__16757,cur_color,to_color,r_c_s_1,vec__16758,matched_color,tobe_matched_color,ort,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct))
,cljs.core.partition.call(null,(3),(1),cljs.core.cycle.call(null,cljs.core.reverse.call(null,oclrs)))));
var R = cljs.core.nth.call(null,vec__16759,(0),null);
var _ = cljs.core.nth.call(null,vec__16759,(1),null);
var L = cljs.core.nth.call(null,vec__16759,(2),null);
var rotation_algo = ((cljs.core._EQ_.call(null,R,tobe_matched_color))?"U R Ui Ri Ui Fi U F":((cljs.core._EQ_.call(null,L,tobe_matched_color))?"Ui Li U L U F Ui Fi":(function(){throw new cljs.core.Keyword(null,"should-not-come-here","should-not-come-here",-1453027223)})()
));
return rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s_1,rotation_algo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),matched_color,new cljs.core.Keyword(null,"top","top",-1856271961),o_c], null));
} else {
var loc = cljs.core.set.call(null,cljs.core.keys.call(null,ort));
var front = cljs.core.some.call(null,((function (r_c_s,piece,loc,ort,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct){
return (function (p1__16741_SHARP_){
return loc.call(null,rubiks_cloact_webapp.solver.next_color.call(null,o_c,p1__16741_SHARP_));
});})(r_c_s,piece,loc,ort,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct))
,loc);
var G__16781 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"U R Ui Ri Ui Fi U F",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"front","front",-1523508988),front,new cljs.core.Keyword(null,"top","top",-1856271961),o_c], null));
var G__16782 = piece;
r_c_s = G__16781;
piece = G__16782;
continue;
}
break;
}
});})(oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct))
;
var correct_middle_layer = cljs.core.reduce.call(null,fix_middle_layer,top_layer_correct,cljs.core.map.call(null,cljs.core.set,dir_pairs));
var correct_top_layer_cross = (function (){var r_c_s = correct_middle_layer;
while(true){
var correct_top_face_dirs = cljs.core.keep.call(null,((function (r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer){
return (function (p1__16742_SHARP_){
var ort = r_c_s.call(null,cljs.core.PersistentHashSet.fromArray([o_c,p1__16742_SHARP_], true));
if(cljs.core._EQ_.call(null,ort.call(null,o_c),o_c)){
return cljs.core.ffirst.call(null,cljs.core.dissoc.call(null,ort,o_c));
} else {
return null;
}
});})(r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer))
,cljs.core.rseq.call(null,oclrs));
var dir_set = cljs.core.set.call(null,correct_top_face_dirs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,dir_set),(4))){
return r_c_s;
} else {
var temp__4655__auto__ = cljs.core.some.call(null,((function (r_c_s,correct_top_face_dirs,dir_set,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer){
return (function (p1__16743_SHARP_){
if(cljs.core.truth_(dir_set.call(null,rubiks_cloact_webapp.solver.opposite.call(null,p1__16743_SHARP_)))){
return rubiks_cloact_webapp.solver.next_color.call(null,o_c,p1__16743_SHARP_);
} else {
return null;
}
});})(r_c_s,correct_top_face_dirs,dir_set,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer))
,dir_set);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
var G__16783 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"F R U Ri Ui Fi",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),o_c,new cljs.core.Keyword(null,"front","front",-1523508988),f], null));
r_c_s = G__16783;
continue;
} else {
var f = cljs.core.some.call(null,((function (r_c_s,temp__4655__auto__,correct_top_face_dirs,dir_set,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer){
return (function (p1__16744_SHARP_){
var temp__4655__auto____$1 = dir_set.call(null,rubiks_cloact_webapp.solver.next_color.call(null,o_c,p1__16744_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var x = temp__4655__auto____$1;
return rubiks_cloact_webapp.solver.opposite.call(null,x);
} else {
return null;
}
});})(r_c_s,temp__4655__auto__,correct_top_face_dirs,dir_set,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer))
,dir_set);
var G__16784 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"F U R Ui Ri Fi",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),o_c,new cljs.core.Keyword(null,"front","front",-1523508988),f], null));
r_c_s = G__16784;
continue;
}
}
break;
}
})();
var correct_top_layer_cross_rightly_aligned = (function (){var r_c_s = correct_top_layer_cross;
while(true){
var top_cross_colors = cljs.core.map.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross){
return (function (p1__16745_SHARP_){
return cljs.core.first.call(null,cljs.core.dissoc.call(null,r_c_s.call(null,cljs.core.PersistentHashSet.fromArray([o_c,p1__16745_SHARP_], true)),o_c));
});})(r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross))
,cljs.core.rseq.call(null,oclrs))),cljs.core.rseq.call(null,oclrs));
var to_back = cljs.core.ffirst.call(null,(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (r_c_s,top_cross_colors,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross){
return (function (p__16764){
var vec__16765 = p__16764;
var back = cljs.core.nth.call(null,vec__16765,(0),null);
var right = cljs.core.nth.call(null,vec__16765,(1),null);
return cljs.core._EQ_.call(null,rubiks_cloact_webapp.solver.next_color.call(null,o_c,back),right);
});})(r_c_s,top_cross_colors,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross))
,cljs.core.take.call(null,(4),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,top_cross_colors)))))) || (cljs.core.seq.call(null,cljs.core.filter.call(null,((function (r_c_s,top_cross_colors,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross){
return (function (p__16766){
var vec__16767 = p__16766;
var back = cljs.core.nth.call(null,vec__16767,(0),null);
var _ = cljs.core.nth.call(null,vec__16767,(1),null);
var front = cljs.core.nth.call(null,vec__16767,(2),null);
return cljs.core._EQ_.call(null,rubiks_cloact_webapp.solver.opposite.call(null,back),front);
});})(r_c_s,top_cross_colors,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross))
,cljs.core.take.call(null,(4),cljs.core.partition.call(null,(3),(1),cljs.core.cycle.call(null,top_cross_colors)))))));
var r_c_s_1 = rubiks_cloact_webapp.solver.transform_rubiks_cube.call(null,r_c_s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i-pos","i-pos",-209412816),rubiks_cloact_webapp.solver.current_location.call(null,r_c_s,cljs.core.PersistentHashSet.fromArray([to_back,o_c], true)),new cljs.core.Keyword(null,"f-pos","f-pos",828333011),cljs.core.PersistentHashSet.fromArray([to_back,o_c], true)], null));
if(cljs.core.every_QMARK_.call(null,((function (r_c_s,top_cross_colors,to_back,r_c_s_1,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross){
return (function (p1__16746_SHARP_){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.first.call(null,cljs.core.dissoc.call(null,r_c_s_1.call(null,cljs.core.PersistentHashSet.fromArray([o_c,p1__16746_SHARP_], true)),o_c)));
});})(r_c_s,top_cross_colors,to_back,r_c_s_1,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross))
,cljs.core.rseq.call(null,oclrs))){
return r_c_s_1;
} else {
var G__16785 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s_1,"R U Ri U R U U Ri",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"back","back",-417520012),to_back,new cljs.core.Keyword(null,"top","top",-1856271961),o_c], null));
r_c_s = G__16785;
continue;
}
break;
}
})();
var top_layer_corner_pieces = cljs.core.map.call(null,((function (oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned){
return (function (p1__16747_SHARP_){
return cljs.core.set.call(null,cljs.core.cons.call(null,o_c,p1__16747_SHARP_));
});})(oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned))
,dir_pairs);
var correct_top_layer_corner_rightly_placed = (function (){var r_c_s = correct_top_layer_cross_rightly_aligned;
while(true){
if(cljs.core.every_QMARK_.call(null,((function (r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces){
return (function (p1__16748_SHARP_){
return rubiks_cloact_webapp.solver.is_piece_correctly_placed.call(null,r_c_s,p1__16748_SHARP_);
});})(r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces))
,top_layer_corner_pieces)){
return r_c_s;
} else {
var correct_top_corner_piece = cljs.core.some.call(null,((function (r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces){
return (function (p1__16749_SHARP_){
if(cljs.core.truth_(rubiks_cloact_webapp.solver.is_piece_correctly_placed.call(null,r_c_s,p1__16749_SHARP_))){
return p1__16749_SHARP_;
} else {
return null;
}
});})(r_c_s,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces))
,top_layer_corner_pieces);
var ormp = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),o_c,new cljs.core.Keyword(null,"front","front",-1523508988),cljs.core.some.call(null,((function (r_c_s,correct_top_corner_piece,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces){
return (function (p1__16750_SHARP_){
return correct_top_corner_piece.call(null,rubiks_cloact_webapp.solver.next_color.call(null,o_c,p1__16750_SHARP_));
});})(r_c_s,correct_top_corner_piece,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces))
,cljs.core.disj.call(null,correct_top_corner_piece,o_c))], null);
var G__16786 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s,"U R Ui Li U Ri Ui L",ormp);
r_c_s = G__16786;
continue;
}
break;
}
})();
var solved_cube = (function (){var temp__4655__auto__ = cljs.core.some.call(null,((function (oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed){
return (function (p1__16751_SHARP_){
if(cljs.core.not.call(null,rubiks_cloact_webapp.solver.is_piece_correctly_placed_and_oriented.call(null,correct_top_layer_corner_rightly_placed,p1__16751_SHARP_))){
return p1__16751_SHARP_;
} else {
return null;
}
});})(oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed))
,top_layer_corner_pieces);
if(cljs.core.truth_(temp__4655__auto__)){
var incorrect_piece = temp__4655__auto__;
var front = cljs.core.some.call(null,((function (incorrect_piece,temp__4655__auto__,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed){
return (function (p1__16752_SHARP_){
return incorrect_piece.call(null,rubiks_cloact_webapp.solver.next_color.call(null,o_c,p1__16752_SHARP_));
});})(incorrect_piece,temp__4655__auto__,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed))
,cljs.core.disj.call(null,incorrect_piece,o_c));
var map__16768 = rubiks_cloact_webapp.solver.full_orientation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),o_c,new cljs.core.Keyword(null,"front","front",-1523508988),front], null));
var map__16768__$1 = ((((!((map__16768 == null)))?((((map__16768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16768):map__16768);
var ormp = map__16768__$1;
var top = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var right = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var front__$1 = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var left = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var bottom = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var back = cljs.core.get.call(null,map__16768__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var incorrect_right_left = cljs.core.disj.call(null,incorrect_piece,o_c);
var sequence_of_right_front_colors = cljs.core.take.call(null,(4),cljs.core.drop_while.call(null,((function (front,map__16768,map__16768__$1,ormp,top,right,front__$1,left,bottom,back,incorrect_right_left,incorrect_piece,temp__4655__auto__,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed){
return (function (p1__16753_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.set.call(null,p1__16753_SHARP_),incorrect_right_left);
});})(front,map__16768,map__16768__$1,ormp,top,right,front__$1,left,bottom,back,incorrect_right_left,incorrect_piece,temp__4655__auto__,oclrs,o_c,dir_pairs,unoriented_correct_first_layer_cross,re_orient_first_layer_cross_tips,correct_first_layer_cross_tips,top_layer_correct,fix_middle_layer,correct_middle_layer,correct_top_layer_cross,correct_top_layer_cross_rightly_aligned,top_layer_corner_pieces,correct_top_layer_corner_rightly_placed))
,cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,cljs.core.rseq.call(null,oclrs)))));
var r_c_s = correct_top_layer_corner_rightly_placed;
var G__16772 = sequence_of_right_front_colors;
var vec__16773 = G__16772;
var vec__16774 = cljs.core.nth.call(null,vec__16773,(0),null);
var right_color = cljs.core.nth.call(null,vec__16774,(0),null);
var front_color = cljs.core.nth.call(null,vec__16774,(1),null);
var rf = vec__16774;
var rest_of_rf_clrs = cljs.core.nthnext.call(null,vec__16773,(1));
var whole_rf_clrs = vec__16773;
var r_c_s__$1 = r_c_s;
var G__16772__$1 = G__16772;
while(true){
var r_c_s__$2 = r_c_s__$1;
var vec__16775 = G__16772__$1;
var vec__16776 = cljs.core.nth.call(null,vec__16775,(0),null);
var right_color__$1 = cljs.core.nth.call(null,vec__16776,(0),null);
var front_color__$1 = cljs.core.nth.call(null,vec__16776,(1),null);
var rf__$1 = vec__16776;
var rest_of_rf_clrs__$1 = cljs.core.nthnext.call(null,vec__16775,(1));
var whole_rf_clrs__$1 = vec__16775;
if(cljs.core.not.call(null,rf__$1)){
return r_c_s__$2;
} else {
var p = cljs.core.set.call(null,cljs.core.cons.call(null,o_c,rf__$1));
if((function (){var ort = r_c_s__$2.call(null,p);
return (cljs.core._EQ_.call(null,ort.call(null,o_c),o_c)) && (cljs.core._EQ_.call(null,ort.call(null,right),right_color__$1)) && (cljs.core._EQ_.call(null,ort.call(null,front__$1),front_color__$1));
})()){
var G__16787 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s__$2,"Ui",ormp);
var G__16788 = rest_of_rf_clrs__$1;
r_c_s__$1 = G__16787;
G__16772__$1 = G__16788;
continue;
} else {
var G__16789 = rubiks_cloact_webapp.solver.apply_algorithm.call(null,r_c_s__$2,"Ri Di R D",ormp);
var G__16790 = whole_rf_clrs__$1;
r_c_s__$1 = G__16789;
G__16772__$1 = G__16790;
continue;
}
}
break;
}
} else {
return correct_top_layer_corner_rightly_placed;
}
})();
return solved_cube;
});

rubiks_cloact_webapp.solver.solve.cljs$lang$maxFixedArity = 2;
rubiks_cloact_webapp.solver.rev_algo = (function rubiks_cloact_webapp$solver$rev_algo(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,(function (p__16793){
var vec__16794 = p__16793;
var a = cljs.core.nth.call(null,vec__16794,(0),null);
var b = cljs.core.nth.call(null,vec__16794,(1),null);
if(cljs.core.truth_(b)){
return [cljs.core.str(a)].join('');
} else {
return [cljs.core.str(a),cljs.core.str("i")].join('');
}
}),cljs.core.rseq.call(null,clojure.string.split.call(null,s,/\s+/)))));
});
rubiks_cloact_webapp.solver.solve_rubiks_cube = (function rubiks_cloact_webapp$solver$solve_rubiks_cube(grcs){
var map__16802 = grcs;
var map__16802__$1 = ((((!((map__16802 == null)))?((((map__16802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16802):map__16802);
var pieces = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n = cljs.core.get.call(null,map__16802__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__16803 = rubiks_cloact_webapp.solver.from_generic_state.call(null,grcs);
var map__16803__$1 = ((((!((map__16803 == null)))?((((map__16803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16803):map__16803);
var rcs = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"rubiks-cube-state","rubiks-cube-state",203331487));
var ormp = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var color_ort_to_dir_coord_ort = (function (){var rev_ormp = clojure.set.map_invert.call(null,ormp);
return ((function (rev_ormp,map__16802,map__16802__$1,pieces,n,map__16803,map__16803__$1,rcs,ormp){
return (function (p__16806){
var vec__16807 = p__16806;
var clr = cljs.core.nth.call(null,vec__16807,(0),null);
var ort = cljs.core.nth.call(null,vec__16807,(1),null);
var G__16808 = (((rev_ormp.call(null,clr) instanceof cljs.core.Keyword))?rev_ormp.call(null,clr).fqn:null);
switch (G__16808) {
case "left":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(0),rubiks_cloact_webapp.solver.opposite_orientation.call(null,ort)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),(2),ort], null);

break;
case "bottom":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(0),rubiks_cloact_webapp.solver.opposite_orientation.call(null,ort)], null);

break;
case "top":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),(2),ort], null);

break;
case "back":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),(0),rubiks_cloact_webapp.solver.opposite_orientation.call(null,ort)], null);

break;
case "front":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),(2),ort], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(rev_ormp.call(null,clr))].join('')));

}
});
;})(rev_ormp,map__16802,map__16802__$1,pieces,n,map__16803,map__16803__$1,rcs,ormp))
})();
var solution = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (map__16802,map__16802__$1,pieces,n,map__16803,map__16803__$1,rcs,ormp,color_ort_to_dir_coord_ort){
return (function (move_id,clr_ort){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move_id,color_ort_to_dir_coord_ort.call(null,clr_ort)], null);
});})(map__16802,map__16802__$1,pieces,n,map__16803,map__16803__$1,rcs,ormp,color_ort_to_dir_coord_ort))
,new cljs.core.Keyword(null,"moves-applied","moves-applied",-1941579955).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rubiks_cloact_webapp.solver.solve.call(null,rcs)))));
return solution;
});
