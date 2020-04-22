var a = [];
for(var i = 0; i < 100; i++){
	a[i] = i+1;
}

for(var i=0; i < 100; i++){
	var tmp = '';
  
	if ( a[i] % 3 == 0){
  	tmp = "Fizz";
  }
  if (a[i] % 5 == 0){
  	tmp = "Buzz";
  }
  if (a[i] % 3 == 0  && a[i] % 5 == 0){
  	tmp = "FizzBuzz";
  }
  if (tmp != ''){
  	a[i] = tmp;
  }
}
console.log(a);