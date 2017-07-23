(function(){
//This class is now an object that can be reused any number of times
function x(){

this.firstName='Ramya',
this.lastName='Patibandla'
}
console.log(x());
//creating a new instance of x object(class x)
var y=new x();
y.firstName='Narendra',
y.lastName='Chowdary'
console.log(y);

var z=new x();
z.firstName='Tirumula',
z.lastName='Chowdar'
console.log(z);
})();