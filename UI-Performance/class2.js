(function(){

   function subtract(greater, lesser){

  //to convert a function into a class, we use this keyword inside the function
    this.output = (greater - lesser);
}
//Her we can write multiple this below this.output
/* subtract = {
     output: (greater - lesser);
     result: (lesser - greater)
}
//By using this we can write multiple logics without using the return statement
*/

  var alpha = new subtract(5, 3); alpha.output = 66;
 console.log(alpha);
}) ();

