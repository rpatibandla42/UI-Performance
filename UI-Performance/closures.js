function globalFunc(){
  var global = 'Ramya';
  function localFunc(){
  // var global = 'Patibandla';
   console.log(global);

  }

localFunc()

}
globalFunc();