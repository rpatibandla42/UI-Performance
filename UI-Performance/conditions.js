(function(){
//To access an element H1 we can use a in build object call, named as 'getElementById'

  //console.log(document.getElementById('Heading'));
   //var x = getElementById('Heading');
   console.log(document.getElementById('Heading'));
   console.log(document.getElementsByClassName('test')[2]);
   //by using index 3 here we can access only 3rd line
   console.log(document.getElementsByTagName('p'));
   //This is for select all p tags
   console.log(document.getElementsByTagName('p')[1]);
   //In tags also we can mention index also

   console.log(document.querySelector('.test'));
   //This is for selecting a class elemnt by using .
   console.log(document.querySelector('p'));
   //By using this we can select html elemnt # and also we can select tag also



})();

