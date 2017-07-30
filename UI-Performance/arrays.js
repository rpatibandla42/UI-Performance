(function(){

var c = ['Neha', 'Harsha'];
c.unshift('Somu');
console.log(c);

var d = ['Tom', 'Paul', 'Leif', 'Nandigam'];
d.shift();
console.log(d);

var names = ['Venu', 'Tarun', 'srikanth', 'Gopi', 'Timmu'];
//names.splice(2, 1, 'Chowdary');//by using this we can replace chowdary name at srikanth then Srikanth automatically removes it
names.splice(1, 2);//here removes both tarun and srikanth
console.log(names);

var e = ['Tom', 'Paul', 'Leif', 'Nandigam'];
 //e.indexOf('Paul');

 console.log(e.indexOf('Leif'));

 var c = ['Neha', 'Harsha'];
 var d = ['Tom', 'Paul', 'Leif', 'Nandigam'];

 var f = c.concat(d);
 console.log(f);
 //The draw back of concat is simple merge that one but it not checks the duplicates
//this function will check for value if it is not equal to Tom then retrun true or else false

 function filterOut(value){
 //check value is not equal to Tom
  return (value !== 'Tom');
 }

var g = ['Tom', 'Tim', 'Tom', 'Paul', 'Nandigam'];
 var h = g.filter(filterOut);
 console.log(h);


}) ();
