function sum(){

 var _sum = this;//always create alias for this keyword
 _sum.a = 1;

  _sum.difference = function(){

   var _self = this;
   _self.a = 5;
   _sum.a = 6;
  }
 }
var result = new sum();
console.log(result.a);