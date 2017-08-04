(function(){
//class matematics
//function name must start letter capital.
function Total(){
 var tot = this;




   function Mathematics(num1, num2){
    var math = this;
    math.sum = function(){
     return(num1 + num2);
 };

  math.difference = function(){
      return(num1 - num2);
  };

  math.multiplication = function(){
        return(num1 * num2);
  };

   math.division = function(){
          return(num1 / num2);
   };
}

    var operation = new Mathematics(100, 230);

    tot.addition = operation.sum();
    tot.subtraction = operation.difference();
    tot.product = operation.multiplication();
    tot.division = operation.division();
}
    var result = new Total();

    console.log(result);








})();