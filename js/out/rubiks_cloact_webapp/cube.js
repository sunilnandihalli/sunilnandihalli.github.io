// Compiled by ClojureScript 1.7.228 {}
goog.provide('rubiks_cloact_webapp.cube');
goog.require('cljs.core');
goog.require('clojure.set');
rubiks_cloact_webapp.cube.cartesian_product = (function rubiks_cloact_webapp$cube$cartesian_product(var_args){
var args11793 = [];
var len__7123__auto___11814 = arguments.length;
var i__7124__auto___11815 = (0);
while(true){
if((i__7124__auto___11815 < len__7123__auto___11814)){
args11793.push((arguments[i__7124__auto___11815]));

var G__11816 = (i__7124__auto___11815 + (1));
i__7124__auto___11815 = G__11816;
continue;
} else {
}
break;
}

var G__11795 = args11793.length;
switch (G__11795) {
case 0:
return rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11793.length)].join('')));

}
});

rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$1 = (function (x){
var iter__6837__auto__ = (function rubiks_cloact_webapp$cube$iter__11796(s__11797){
return (new cljs.core.LazySeq(null,(function (){
var s__11797__$1 = s__11797;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11797__$1);
if(temp__4657__auto__){
var s__11797__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11797__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__11797__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__11799 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__11798 = (0);
while(true){
if((i__11798 < size__6836__auto__)){
var xi = cljs.core._nth.call(null,c__6835__auto__,i__11798);
cljs.core.chunk_append.call(null,b__11799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi], null));

var G__11818 = (i__11798 + (1));
i__11798 = G__11818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11799),rubiks_cloact_webapp$cube$iter__11796.call(null,cljs.core.chunk_rest.call(null,s__11797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11799),null);
}
} else {
var xi = cljs.core.first.call(null,s__11797__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi], null),rubiks_cloact_webapp$cube$iter__11796.call(null,cljs.core.rest.call(null,s__11797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6837__auto__.call(null,x);
});

rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var iter__6837__auto__ = (function rubiks_cloact_webapp$cube$iter__11800(s__11801){
return (new cljs.core.LazySeq(null,(function (){
var s__11801__$1 = s__11801;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11801__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var xi = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6833__auto__ = ((function (s__11801__$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function rubiks_cloact_webapp$cube$iter__11800_$_iter__11802(s__11803){
return (new cljs.core.LazySeq(null,((function (s__11801__$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__11803__$1 = s__11803;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11803__$1);
if(temp__4657__auto____$1){
var s__11803__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11803__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__11803__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__11805 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__11804 = (0);
while(true){
if((i__11804 < size__6836__auto__)){
var yi = cljs.core._nth.call(null,c__6835__auto__,i__11804);
cljs.core.chunk_append.call(null,b__11805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi,yi], null));

var G__11819 = (i__11804 + (1));
i__11804 = G__11819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11805),rubiks_cloact_webapp$cube$iter__11800_$_iter__11802.call(null,cljs.core.chunk_rest.call(null,s__11803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11805),null);
}
} else {
var yi = cljs.core.first.call(null,s__11803__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi,yi], null),rubiks_cloact_webapp$cube$iter__11800_$_iter__11802.call(null,cljs.core.rest.call(null,s__11803__$2)));
}
} else {
return null;
}
break;
}
});})(s__11801__$1,xi,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__11801__$1,xi,xs__5205__auto__,temp__4657__auto__))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,y));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$cube$iter__11800.call(null,cljs.core.rest.call(null,s__11801__$1)));
} else {
var G__11820 = cljs.core.rest.call(null,s__11801__$1);
s__11801__$1 = G__11820;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6837__auto__.call(null,x);
});

rubiks_cloact_webapp.cube.cartesian_product.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var iter__6837__auto__ = (function rubiks_cloact_webapp$cube$iter__11806(s__11807){
return (new cljs.core.LazySeq(null,(function (){
var s__11807__$1 = s__11807;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11807__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var xi = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6833__auto__ = ((function (s__11807__$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function rubiks_cloact_webapp$cube$iter__11806_$_iter__11808(s__11809){
return (new cljs.core.LazySeq(null,((function (s__11807__$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__11809__$1 = s__11809;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11809__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var yi = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__6833__auto__ = ((function (s__11809__$1,s__11807__$1,yi,xs__5205__auto____$1,temp__4657__auto____$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function rubiks_cloact_webapp$cube$iter__11806_$_iter__11808_$_iter__11810(s__11811){
return (new cljs.core.LazySeq(null,((function (s__11809__$1,s__11807__$1,yi,xs__5205__auto____$1,temp__4657__auto____$1,xi,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__11811__$1 = s__11811;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__11811__$1);
if(temp__4657__auto____$2){
var s__11811__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11811__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__11811__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__11813 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__11812 = (0);
while(true){
if((i__11812 < size__6836__auto__)){
var zi = cljs.core._nth.call(null,c__6835__auto__,i__11812);
cljs.core.chunk_append.call(null,b__11813,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi,yi,zi], null));

var G__11821 = (i__11812 + (1));
i__11812 = G__11821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11813),rubiks_cloact_webapp$cube$iter__11806_$_iter__11808_$_iter__11810.call(null,cljs.core.chunk_rest.call(null,s__11811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11813),null);
}
} else {
var zi = cljs.core.first.call(null,s__11811__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi,yi,zi], null),rubiks_cloact_webapp$cube$iter__11806_$_iter__11808_$_iter__11810.call(null,cljs.core.rest.call(null,s__11811__$2)));
}
} else {
return null;
}
break;
}
});})(s__11809__$1,s__11807__$1,yi,xs__5205__auto____$1,temp__4657__auto____$1,xi,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__11809__$1,s__11807__$1,yi,xs__5205__auto____$1,temp__4657__auto____$1,xi,xs__5205__auto__,temp__4657__auto__))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,z));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$cube$iter__11806_$_iter__11808.call(null,cljs.core.rest.call(null,s__11809__$1)));
} else {
var G__11822 = cljs.core.rest.call(null,s__11809__$1);
s__11809__$1 = G__11822;
continue;
}
} else {
return null;
}
break;
}
});})(s__11807__$1,xi,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__11807__$1,xi,xs__5205__auto__,temp__4657__auto__))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,y));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$cube$iter__11806.call(null,cljs.core.rest.call(null,s__11807__$1)));
} else {
var G__11823 = cljs.core.rest.call(null,s__11807__$1);
s__11807__$1 = G__11823;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6837__auto__.call(null,x);
});

rubiks_cloact_webapp.cube.cartesian_product.cljs$lang$maxFixedArity = 3;
rubiks_cloact_webapp.cube.combinations = (function rubiks_cloact_webapp$cube$combinations(p__11825,n){
var vec__11827 = p__11825;
var x = cljs.core.nth.call(null,vec__11827,(0),null);
var xs = cljs.core.nthnext.call(null,vec__11827,(1));
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__11827,x,xs){
return (function (p1__11824_SHARP_){
return cljs.core.cons.call(null,x,p1__11824_SHARP_);
});})(vec__11827,x,xs))
,rubiks_cloact_webapp$cube$combinations.call(null,xs,(n - (1)))),rubiks_cloact_webapp$cube$combinations.call(null,xs,n));

}
}
});
rubiks_cloact_webapp.cube.coord_map_to_coord_vec = (function rubiks_cloact_webapp$cube$coord_map_to_coord_vec(p__11828){
var map__11831 = p__11828;
var map__11831__$1 = ((((!((map__11831 == null)))?((((map__11831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11831):map__11831);
var x = cljs.core.get.call(null,map__11831__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.call(null,map__11831__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var z = cljs.core.get.call(null,map__11831__$1,new cljs.core.Keyword(null,"z","z",-789527183),(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
rubiks_cloact_webapp.cube.cube_geometry = (function rubiks_cloact_webapp$cube$cube_geometry(){
var dirs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null);
var dir_pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),new cljs.core.Keyword(null,"z","z",-789527183)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null);
var cvals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var dir_faces = ((function (dirs,dir_pairs,cvals){
return (function (p__11845){
var vec__11846 = p__11845;
var vec__11847 = cljs.core.nth.call(null,vec__11846,(0),null);
var d1 = cljs.core.nth.call(null,vec__11847,(0),null);
var d2 = cljs.core.nth.call(null,vec__11847,(1),null);
var d3 = cljs.core.nth.call(null,vec__11846,(1),null);
var vec__11848 = (function (){var iter__6837__auto__ = ((function (vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function rubiks_cloact_webapp$cube$cube_geometry_$_iter__11849(s__11850){
return (new cljs.core.LazySeq(null,((function (vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function (){
var s__11850__$1 = s__11850;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11850__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var c_v1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6833__auto__ = ((function (s__11850__$1,c_v1,xs__5205__auto__,temp__4657__auto__,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function rubiks_cloact_webapp$cube$cube_geometry_$_iter__11849_$_iter__11851(s__11852){
return (new cljs.core.LazySeq(null,((function (s__11850__$1,c_v1,xs__5205__auto__,temp__4657__auto__,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function (){
var s__11852__$1 = s__11852;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11852__$1);
if(temp__4657__auto____$1){
var s__11852__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11852__$2)){
var c__6835__auto__ = cljs.core.chunk_first.call(null,s__11852__$2);
var size__6836__auto__ = cljs.core.count.call(null,c__6835__auto__);
var b__11854 = cljs.core.chunk_buffer.call(null,size__6836__auto__);
if((function (){var i__11853 = (0);
while(true){
if((i__11853 < size__6836__auto__)){
var c_v2 = cljs.core._nth.call(null,c__6835__auto__,i__11853);
cljs.core.chunk_append.call(null,b__11854,cljs.core.PersistentArrayMap.fromArray([d1,c_v1,d2,c_v2], true, false));

var G__11855 = (i__11853 + (1));
i__11853 = G__11855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11854),rubiks_cloact_webapp$cube$cube_geometry_$_iter__11849_$_iter__11851.call(null,cljs.core.chunk_rest.call(null,s__11852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11854),null);
}
} else {
var c_v2 = cljs.core.first.call(null,s__11852__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([d1,c_v1,d2,c_v2], true, false),rubiks_cloact_webapp$cube$cube_geometry_$_iter__11849_$_iter__11851.call(null,cljs.core.rest.call(null,s__11852__$2)));
}
} else {
return null;
}
break;
}
});})(s__11850__$1,c_v1,xs__5205__auto__,temp__4657__auto__,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
,null,null));
});})(s__11850__$1,c_v1,xs__5205__auto__,temp__4657__auto__,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
;
var fs__6834__auto__ = cljs.core.seq.call(null,iterys__6833__auto__.call(null,cvals));
if(fs__6834__auto__){
return cljs.core.concat.call(null,fs__6834__auto__,rubiks_cloact_webapp$cube$cube_geometry_$_iter__11849.call(null,cljs.core.rest.call(null,s__11850__$1)));
} else {
var G__11856 = cljs.core.rest.call(null,s__11850__$1);
s__11850__$1 = G__11856;
continue;
}
} else {
return null;
}
break;
}
});})(vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
,null,null));
});})(vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
;
return iter__6837__auto__.call(null,cvals);
})();
var v00 = cljs.core.nth.call(null,vec__11848,(0),null);
var v01 = cljs.core.nth.call(null,vec__11848,(1),null);
var v10 = cljs.core.nth.call(null,vec__11848,(2),null);
var v11 = cljs.core.nth.call(null,vec__11848,(3),null);
var f_coords = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v00,v10,v11,v01], null);
var positive_face = cljs.core.mapv.call(null,((function (vec__11848,v00,v01,v10,v11,f_coords,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function (p1__11833_SHARP_){
return cljs.core.assoc.call(null,p1__11833_SHARP_,d3,cvals.call(null,(1)));
});})(vec__11848,v00,v01,v10,v11,f_coords,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
,cljs.core.rseq.call(null,f_coords));
var negative_face = cljs.core.mapv.call(null,((function (vec__11848,v00,v01,v10,v11,f_coords,positive_face,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals){
return (function (p1__11834_SHARP_){
return cljs.core.assoc.call(null,p1__11834_SHARP_,d3,cvals.call(null,(0)));
});})(vec__11848,v00,v01,v10,v11,f_coords,positive_face,vec__11846,vec__11847,d1,d2,d3,dirs,dir_pairs,cvals))
,f_coords);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"positive-face","positive-face",-624708142),positive_face,new cljs.core.Keyword(null,"negative-face","negative-face",-1493473753),negative_face], null)], null);
});})(dirs,dir_pairs,cvals))
;
var faces = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,dir_faces,dir_pairs));
return faces;
});
rubiks_cloact_webapp.cube._STAR_rotation_op_STAR_ = null;
rubiks_cloact_webapp.cube.cube_piece = (function rubiks_cloact_webapp$cube$cube_piece(var_args){
var args11857 = [];
var len__7123__auto___11875 = arguments.length;
var i__7124__auto___11876 = (0);
while(true){
if((i__7124__auto___11876 < len__7123__auto___11875)){
args11857.push((arguments[i__7124__auto___11876]));

var G__11877 = (i__7124__auto___11876 + (1));
i__7124__auto___11876 = G__11877;
continue;
} else {
}
break;
}

var G__11859 = args11857.length;
switch (G__11859) {
case 0:
return rubiks_cloact_webapp.cube.cube_piece.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return rubiks_cloact_webapp.cube.cube_piece.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11857.length)].join('')));

}
});

rubiks_cloact_webapp.cube.cube_piece.cljs$core$IFn$_invoke$arity$0 = (function (){
var cgeom = rubiks_cloact_webapp.cube.cube_geometry.call(null);
var color = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.mapcat.call(null,((function (cgeom,color){
return (function (dir){
var map__11860 = cgeom.call(null,dir);
var map__11860__$1 = ((((!((map__11860 == null)))?((((map__11860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860):map__11860);
var positive_face = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"positive-face","positive-face",-624708142));
var negative_face = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"negative-face","negative-face",-1493473753));
var map__11861 = color.call(null,dir);
var map__11861__$1 = ((((!((map__11861 == null)))?((((map__11861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11861):map__11861);
var min = cljs.core.get.call(null,map__11861__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__11861__$1,new cljs.core.Keyword(null,"max","max",61366548));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"face","face",-1356480717),positive_face,new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.PersistentArrayMap.fromArray([dir,(1)], true, false),new cljs.core.Keyword(null,"color","color",1011675173),max], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"face","face",-1356480717),negative_face,new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.PersistentArrayMap.fromArray([dir,(-1)], true, false),new cljs.core.Keyword(null,"color","color",1011675173),min], null)], null);
});})(cgeom,color))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null))], null);
});

rubiks_cloact_webapp.cube.cube_piece.cljs$core$IFn$_invoke$arity$2 = (function (p__11864,n){
var map__11865 = p__11864;
var map__11865__$1 = ((((!((map__11865 == null)))?((((map__11865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11865):map__11865);
var p = map__11865__$1;
var vec__11866 = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x = cljs.core.nth.call(null,vec__11866,(0),null);
var vec__11867 = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var y = cljs.core.nth.call(null,vec__11867,(0),null);
var vec__11868 = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var z = cljs.core.nth.call(null,vec__11868,(0),null);
var n_1 = (n - (1));
var cgeom = rubiks_cloact_webapp.cube.cube_geometry.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null),new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.mapcat.call(null,((function (n_1,cgeom,map__11865,map__11865__$1,p,vec__11866,x,vec__11867,y,vec__11868,z){
return (function (p__11870){
var vec__11871 = p__11870;
var dir = cljs.core.nth.call(null,vec__11871,(0),null);
var vec__11872 = cljs.core.nth.call(null,vec__11871,(1),null);
var dir_coord = cljs.core.nth.call(null,vec__11872,(0),null);
var dir_color = cljs.core.nth.call(null,vec__11872,(1),null);
var map__11873 = cgeom.call(null,dir);
var map__11873__$1 = ((((!((map__11873 == null)))?((((map__11873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11873):map__11873);
var positive_face = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"positive-face","positive-face",-624708142));
var negative_face = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"negative-face","negative-face",-1493473753));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),positive_face,new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.PersistentArrayMap.fromArray([dir,(1)], true, false)], null),((cljs.core._EQ_.call(null,dir_coord,n_1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),dir_color], null)], null):null)),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),negative_face,new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.PersistentArrayMap.fromArray([dir,(-1)], true, false)], null),((cljs.core._EQ_.call(null,dir_coord,(0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),dir_color], null)], null):null))], null);
});})(n_1,cgeom,map__11865,map__11865__$1,p,vec__11866,x,vec__11867,y,vec__11868,z))
,p)], null);
});

rubiks_cloact_webapp.cube.cube_piece.cljs$lang$maxFixedArity = 2;
rubiks_cloact_webapp.cube.rubiks_cube_geometry = (function rubiks_cloact_webapp$cube$rubiks_cube_geometry(p__11880){
var map__11883 = p__11880;
var map__11883__$1 = ((((!((map__11883 == null)))?((((map__11883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11883):map__11883);
var rcs = map__11883__$1;
var pieces = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n = cljs.core.get.call(null,map__11883__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.mapv.call(null,((function (map__11883,map__11883__$1,rcs,pieces,n){
return (function (p1__11879_SHARP_){
return rubiks_cloact_webapp.cube.cube_piece.call(null,p1__11879_SHARP_,n);
});})(map__11883,map__11883__$1,rcs,pieces,n))
,pieces);
});
rubiks_cloact_webapp.cube.dirs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null);
rubiks_cloact_webapp.cube.sides = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386)], null)], null);
rubiks_cloact_webapp.cube.rubiks_cube_nxnxn = (function rubiks_cloact_webapp$cube$rubiks_cube_nxnxn(n){
var pairs_to_map = (function (p1__11885_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__11885_SHARP_);
});
var boundary_sides = cljs.core.map.call(null,((function (pairs_to_map){
return (function (dir,p__11891){
var vec__11892 = p__11891;
var neg_color = cljs.core.nth.call(null,vec__11892,(0),null);
var pos_color = cljs.core.nth.call(null,vec__11892,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),neg_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(n - (1)),pos_color], null)], null)], null);
});})(pairs_to_map))
,rubiks_cloact_webapp.cube.dirs,rubiks_cloact_webapp.cube.sides);
var corner_pieces = cljs.core.apply.call(null,rubiks_cloact_webapp.cube.cartesian_product,boundary_sides);
var edge_pieces = (((n > (2)))?cljs.core.mapcat.call(null,((function (pairs_to_map,boundary_sides,corner_pieces){
return (function (p1__11886_SHARP_){
return cljs.core.apply.call(null,rubiks_cloact_webapp.cube.cartesian_product,p1__11886_SHARP_);
});})(pairs_to_map,boundary_sides,corner_pieces))
,rubiks_cloact_webapp.cube.combinations.call(null,boundary_sides,(2))):null);
var face_pieces = (((n > (2)))?cljs.core.map.call(null,cljs.core.vector,cljs.core.apply.call(null,cljs.core.concat,boundary_sides)):null);
var dirs_set = cljs.core.set.call(null,rubiks_cloact_webapp.cube.dirs);
var general_pieces = cljs.core.concat.call(null,corner_pieces,edge_pieces,face_pieces);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.mapcat.call(null,((function (pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces){
return (function (general_piece){
var bound_dirs = cljs.core.map.call(null,cljs.core.first,general_piece);
var dirs_to_iter = cljs.core.apply.call(null,cljs.core.disj,dirs_set,bound_dirs);
var vec_range = cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(1),(n - (1))));
var general_piece_map = pairs_to_map.call(null,general_piece);
var piece_variables_before_cp = cljs.core.map.call(null,((function (bound_dirs,dirs_to_iter,vec_range,general_piece_map,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces){
return (function (dir){
return cljs.core.mapv.call(null,((function (bound_dirs,dirs_to_iter,vec_range,general_piece_map,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces){
return (function (p1__11887_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dir,p1__11887_SHARP_],null));
});})(bound_dirs,dirs_to_iter,vec_range,general_piece_map,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces))
,vec_range);
});})(bound_dirs,dirs_to_iter,vec_range,general_piece_map,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces))
,dirs_to_iter);
var piece_variables = (function (){var or__6065__auto__ = cljs.core.seq.call(null,cljs.core.apply.call(null,rubiks_cloact_webapp.cube.cartesian_product,piece_variables_before_cp));
if(or__6065__auto__){
return or__6065__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
}
})();
var ret = cljs.core.map.call(null,((function (bound_dirs,dirs_to_iter,vec_range,general_piece_map,piece_variables_before_cp,piece_variables,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces){
return (function (p1__11888_SHARP_){
return cljs.core.into.call(null,general_piece_map,p1__11888_SHARP_);
});})(bound_dirs,dirs_to_iter,vec_range,general_piece_map,piece_variables_before_cp,piece_variables,pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces))
,piece_variables);
return ret;
});})(pairs_to_map,boundary_sides,corner_pieces,edge_pieces,face_pieces,dirs_set,general_pieces))
,general_pieces)], null);
});
var transformer_11924 = (function rubiks_cloact_webapp$cube$transformer(dir,ort,n){
var trf = (function (){var n_1 = (n - (1));
var same = cljs.core.identity;
var negate = ((function (n_1,same){
return (function (p1__11893_SHARP_){
return (n_1 - p1__11893_SHARP_);
});})(n_1,same))
;
var dirs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null);
var vec__11897 = cljs.core.drop_while.call(null,((function (n_1,same,negate,dirs){
return (function (p1__11894_SHARP_){
return cljs.core.not_EQ_.call(null,dir,p1__11894_SHARP_);
});})(n_1,same,negate,dirs))
,cljs.core.cycle.call(null,((cljs.core._EQ_.call(null,ort,new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408)))?dirs:cljs.core.rseq.call(null,dirs))));
var _ = cljs.core.nth.call(null,vec__11897,(0),null);
var d1 = cljs.core.nth.call(null,vec__11897,(1),null);
var d2 = cljs.core.nth.call(null,vec__11897,(2),null);
return cljs.core.PersistentArrayMap.fromArray([dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,same], null),d1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,same], null),d2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d1,negate], null)], true, false);
})();
return ((function (trf){
return (function (rp_dir,rp_coord){
var vec__11898 = trf.call(null,rp_dir);
var n_rp_dir = cljs.core.nth.call(null,vec__11898,(0),null);
var n_rp_coord_fn = cljs.core.nth.call(null,vec__11898,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_rp_dir,n_rp_coord_fn.call(null,rp_coord)], null);
});
;})(trf))
});
rubiks_cloact_webapp.cube.apply_algorithm = ((function (transformer_11924){
return (function rubiks_cloact_webapp$cube$apply_algorithm(p__11899,ops){
var map__11912 = p__11899;
var map__11912__$1 = ((((!((map__11912 == null)))?((((map__11912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11912):map__11912);
var rcs = map__11912__$1;
var pieces = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n = cljs.core.get.call(null,map__11912__$1,new cljs.core.Keyword(null,"n","n",562130025));
var rotate = ((function (map__11912,map__11912__$1,rcs,pieces,n,transformer_11924){
return (function rubiks_cloact_webapp$cube$apply_algorithm_$_rotate(cur_pieces,op){
var vec__11919 = op;
var dir = cljs.core.nth.call(null,vec__11919,(0),null);
var coord = cljs.core.nth.call(null,vec__11919,(1),null);
var ort = cljs.core.nth.call(null,vec__11919,(2),null);
var trf = transformer_11924.call(null,dir,ort,n);
return cljs.core.map.call(null,((function (vec__11919,dir,coord,ort,trf,map__11912,map__11912__$1,rcs,pieces,n,transformer_11924){
return (function (rubiks_piece){
if(!(cljs.core._EQ_.call(null,coord,cljs.core.first.call(null,rubiks_piece.call(null,dir))))){
return rubiks_piece;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__11919,dir,coord,ort,trf,map__11912,map__11912__$1,rcs,pieces,n,transformer_11924){
return (function (p__11920){
var vec__11921 = p__11920;
var rp_dir = cljs.core.nth.call(null,vec__11921,(0),null);
var vec__11922 = cljs.core.nth.call(null,vec__11921,(1),null);
var rp_coord = cljs.core.nth.call(null,vec__11922,(0),null);
var rp_color = cljs.core.nth.call(null,vec__11922,(1),null);
var orig = vec__11921;
var vec__11923 = trf.call(null,rp_dir,rp_coord);
var trfed_rp_dir = cljs.core.nth.call(null,vec__11923,(0),null);
var trfed_rp_coord = cljs.core.nth.call(null,vec__11923,(1),null);
if(cljs.core.not.call(null,rp_color)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trfed_rp_dir,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trfed_rp_coord], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trfed_rp_dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trfed_rp_coord,rp_color], null)], null);
}
});})(vec__11919,dir,coord,ort,trf,map__11912,map__11912__$1,rcs,pieces,n,transformer_11924))
,rubiks_piece));
}
});})(vec__11919,dir,coord,ort,trf,map__11912,map__11912__$1,rcs,pieces,n,transformer_11924))
,cur_pieces);
});})(map__11912,map__11912__$1,rcs,pieces,n,transformer_11924))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.reduce.call(null,rotate,pieces,ops)], null);
});})(transformer_11924))
;
rubiks_cloact_webapp.cube.shuffle_rubiks_cube = (function rubiks_cloact_webapp$cube$shuffle_rubiks_cube(var_args){
var args__7130__auto__ = [];
var len__7123__auto___11933 = arguments.length;
var i__7124__auto___11934 = (0);
while(true){
if((i__7124__auto___11934 < len__7123__auto___11933)){
args__7130__auto__.push((arguments[i__7124__auto___11934]));

var G__11935 = (i__7124__auto___11934 + (1));
i__7124__auto___11934 = G__11935;
continue;
} else {
}
break;
}

var argseq__7131__auto__ = ((((1) < args__7130__auto__.length))?(new cljs.core.IndexedSeq(args__7130__auto__.slice((1)),(0))):null);
return rubiks_cloact_webapp.cube.shuffle_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7131__auto__);
});

rubiks_cloact_webapp.cube.shuffle_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic = (function (p__11927,p__11928){
var map__11929 = p__11927;
var map__11929__$1 = ((((!((map__11929 == null)))?((((map__11929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11929):map__11929);
var rcs = map__11929__$1;
var pieces = cljs.core.get.call(null,map__11929__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n = cljs.core.get.call(null,map__11929__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__11930 = p__11928;
var map__11930__$1 = ((((!((map__11930 == null)))?((((map__11930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11930):map__11930);
var num_shuffles = cljs.core.get.call(null,map__11930__$1,new cljs.core.Keyword(null,"num-shuffles","num-shuffles",-116512213),(100));
return rubiks_cloact_webapp.cube.apply_algorithm.call(null,rcs,cljs.core.repeatedly.call(null,num_shuffles,((function (map__11929,map__11929__$1,rcs,pieces,n,map__11930,map__11930__$1,num_shuffles){
return (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null)),cljs.core.rand_int.call(null,n),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"counter-clockwise","counter-clockwise",-1354602408)], null))],null));
});})(map__11929,map__11929__$1,rcs,pieces,n,map__11930,map__11930__$1,num_shuffles))
));
});

rubiks_cloact_webapp.cube.shuffle_rubiks_cube.cljs$lang$maxFixedArity = (1);

rubiks_cloact_webapp.cube.shuffle_rubiks_cube.cljs$lang$applyTo = (function (seq11925){
var G__11926 = cljs.core.first.call(null,seq11925);
var seq11925__$1 = cljs.core.next.call(null,seq11925);
return rubiks_cloact_webapp.cube.shuffle_rubiks_cube.cljs$core$IFn$_invoke$arity$variadic(G__11926,seq11925__$1);
});
var faces_11983 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)], null);
rubiks_cloact_webapp.cube.face_representation = ((function (faces_11983){
return (function rubiks_cloact_webapp$cube$face_representation(p__11939){
var map__11954 = p__11939;
var map__11954__$1 = ((((!((map__11954 == null)))?((((map__11954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11954):map__11954);
var rcs = map__11954__$1;
var n = cljs.core.get.call(null,map__11954__$1,new cljs.core.Keyword(null,"n","n",562130025));
var pieces = cljs.core.get.call(null,map__11954__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var n_1 = (n - (1));
var map__11956 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"front","front",-1523508988),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"front","front",-1523508988),(n_1 - y),x], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
,new cljs.core.Keyword(null,"back","back",-417520012),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"back","back",-417520012),(n_1 - y),(n_1 - x)], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
,new cljs.core.Keyword(null,"right","right",-452581833),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),(n_1 - y),(n_1 - z)], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
,new cljs.core.Keyword(null,"left","left",-399115937),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(n_1 - y),z], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
,new cljs.core.Keyword(null,"top","top",-1856271961),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),z,x], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((function (n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(n_1 - z),x], null);
});})(n_1,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
], null);
var map__11956__$1 = ((((!((map__11956 == null)))?((((map__11956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11956):map__11956);
var front = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var right = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.call(null,map__11956__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var nxn_array = cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,new cljs.core.Keyword(null,"none","none",1333468478)))));
var initial_face_representation = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,faces_11983,cljs.core.repeat.call(null,nxn_array)));
var fchoice = ((function (n_1,map__11956,map__11956__$1,front,back,right,left,top,bottom,nxn_array,initial_face_representation,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function (v,min_fn,max_fn){
if(cljs.core._EQ_.call(null,v,(0))){
return min_fn;
} else {
if(cljs.core._EQ_.call(null,v,n_1)){
return max_fn;
} else {
return null;
}
}
});})(n_1,map__11956,map__11956__$1,front,back,right,left,top,bottom,nxn_array,initial_face_representation,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
;
var update_face_representation = ((function (n_1,map__11956,map__11956__$1,front,back,right,left,top,bottom,nxn_array,initial_face_representation,fchoice,map__11954,map__11954__$1,rcs,n,pieces,faces_11983){
return (function rubiks_cloact_webapp$cube$face_representation_$_update_face_representation(cds,piece){
var map__11963 = piece;
var map__11963__$1 = ((((!((map__11963 == null)))?((((map__11963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11963):map__11963);
var vec__11964 = cljs.core.get.call(null,map__11963__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x = cljs.core.nth.call(null,vec__11964,(0),null);
var x_color = cljs.core.nth.call(null,vec__11964,(1),null);
var vec__11965 = cljs.core.get.call(null,map__11963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var y = cljs.core.nth.call(null,vec__11965,(0),null);
var y_color = cljs.core.nth.call(null,vec__11965,(1),null);
var vec__11966 = cljs.core.get.call(null,map__11963__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var z = cljs.core.nth.call(null,vec__11966,(0),null);
var z_color = cljs.core.nth.call(null,vec__11966,(1),null);
var ncds = cds;
var ncds__$1 = ((cljs.core.not.call(null,x_color))?ncds:cljs.core.assoc_in.call(null,ncds,fchoice.call(null,x,left,right).call(null,x,y,z),x_color));
var ncds__$2 = ((cljs.core.not.call(null,y_color))?ncds__$1:cljs.core.assoc_in.call(null,ncds__$1,fchoice.call(null,y,bottom,top).call(null,x,y,z),y_color));
if(cljs.core.not.call(null,z_color)){
return ncds__$2;
} else {
return cljs.core.assoc_in.call(null,ncds__$2,fchoice.call(null,z,back,front).call(null,x,y,z),z_color);
}
});})(n_1,map__11956,map__11956__$1,front,back,right,left,top,bottom,nxn_array,initial_face_representation,fchoice,map__11954,map__11954__$1,rcs,n,pieces,faces_11983))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.reduce.call(null,update_face_representation,initial_face_representation,pieces)], null);
});})(faces_11983))
;

rubiks_cloact_webapp.cube.display = ((function (faces_11983){
return (function rubiks_cloact_webapp$cube$display(p__11968){
var map__11976 = p__11968;
var map__11976__$1 = ((((!((map__11976 == null)))?((((map__11976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11976):map__11976);
var rcs = map__11976__$1;
var n = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"n","n",562130025),(3));
var pieces = cljs.core.get.call(null,map__11976__$1,new cljs.core.Keyword(null,"pieces","pieces",-1436634023));
var map__11978 = rubiks_cloact_webapp.cube.face_representation.call(null,rcs);
var map__11978__$1 = ((((!((map__11978 == null)))?((((map__11978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11978):map__11978);
var map__11979 = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var map__11979__$1 = ((((!((map__11979 == null)))?((((map__11979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11979):map__11979);
var frcs = map__11979__$1;
var front = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var right = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var empty = cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n," "))));
var sub_color_keys_with_chars = ((function (map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983){
return (function (face){
return cljs.core.mapv.call(null,((function (map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983){
return (function (p1__11936_SHARP_){
return cljs.core.mapv.call(null,((function (map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983){
return (function (x){
return cljs.core.first.call(null,cljs.core.name.call(null,x));
});})(map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983))
,p1__11936_SHARP_);
});})(map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983))
,face);
});})(map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,map__11976,map__11976__$1,rcs,n,pieces,faces_11983))
;
var vec__11980 = cljs.core.mapv.call(null,sub_color_keys_with_chars,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [front,back,right,left,top,bottom], null));
var front__$1 = cljs.core.nth.call(null,vec__11980,(0),null);
var back__$1 = cljs.core.nth.call(null,vec__11980,(1),null);
var right__$1 = cljs.core.nth.call(null,vec__11980,(2),null);
var left__$1 = cljs.core.nth.call(null,vec__11980,(3),null);
var top__$1 = cljs.core.nth.call(null,vec__11980,(4),null);
var bottom__$1 = cljs.core.nth.call(null,vec__11980,(5),null);
var layout = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty,top__$1,empty,empty], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [left__$1,front__$1,right__$1,back__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [empty,bottom__$1,empty,empty], null)], null);
var merged = cljs.core.mapcat.call(null,((function (map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,sub_color_keys_with_chars,vec__11980,front__$1,back__$1,right__$1,left__$1,top__$1,bottom__$1,layout,map__11976,map__11976__$1,rcs,n,pieces,faces_11983){
return (function (p1__11937_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.concat),p1__11937_SHARP_);
});})(map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,sub_color_keys_with_chars,vec__11980,front__$1,back__$1,right__$1,left__$1,top__$1,bottom__$1,layout,map__11976,map__11976__$1,rcs,n,pieces,faces_11983))
,layout);
var str_rep = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,((function (map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,sub_color_keys_with_chars,vec__11980,front__$1,back__$1,right__$1,left__$1,top__$1,bottom__$1,layout,merged,map__11976,map__11976__$1,rcs,n,pieces,faces_11983){
return (function (p1__11938_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",p1__11938_SHARP_));
});})(map__11978,map__11978__$1,map__11979,map__11979__$1,frcs,front,back,right,left,top,bottom,empty,sub_color_keys_with_chars,vec__11980,front__$1,back__$1,right__$1,left__$1,top__$1,bottom__$1,layout,merged,map__11976,map__11976__$1,rcs,n,pieces,faces_11983))
,merged)));
return cljs.core.println.call(null,str_rep);
});})(faces_11983))
;
