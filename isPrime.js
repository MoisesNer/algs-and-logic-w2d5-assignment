// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  for(let m = 2; m < num; m++) {
    if(num % m === 0) {
      console.log(num + " is dibiisle by " + m);
      return false;
    }
  }
  return true;
}
console.log(isPrime(101));