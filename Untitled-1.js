function getFizzBuzz(num) {
  if ( num%3===0 && num%5===0){
    return 'FizzBazz';
  }else if(num%3===0){
    return 'Fizz';
  }else if(num%5===0){
    return 'Buzz'
  }else {
    return num;
  }
}


console.log(getFizzBuzz(2))
