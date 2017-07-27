(function(){

 function subtract(greater, lesser){
  var output = greater - lesser;
 return{
    out: output
 }
 }
  var alpha = subtract(5, 2);
  console.log(alpha);

  var beta = Object.create(alpha);//now beta inherting the property of alpha
  beta.out2=subtract(9, 1);

  console.log(beta)


})();