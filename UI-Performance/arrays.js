(function(){

 var alpha =
  [{
    firstName: 'Ramya',
    lastName: 'Patibandla'
  }, {

    firstName: 'Venu',
    lastName: 'Takkellapati'
  }];

  var beta = ['Srikar',33,false,null];
  var theta = ['Ramya', 'Narendra', 'Gopi', 'Tirumula']
   //console.log(alpha);
   //console.log(beta);
   console.log(theta[1]);
   //we can't mention more than one index if we are mentioned no.of index it takes last index to display output
   console.log(alpha[0].firstName);//it will display output Ramya
   theta[7] = 'Siva';
   console.log(theta);

   var omega = new Array();
   console.log(omega.concat);
   /*
   omega.concat means omega is object contact is property of object
   */
   /* function Array(){
      Arraty is function to convert to class we are using this keyword actually
   }
   here omega cloning the data of Array
  */
})();
