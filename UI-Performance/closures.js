function sum(){
 this.a = 2;
 this.b = 3;
 this.c = this.a + this.b;

 }
 var result = new sum();
 console.log(result.c);