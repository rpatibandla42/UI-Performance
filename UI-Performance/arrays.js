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

}) ();
