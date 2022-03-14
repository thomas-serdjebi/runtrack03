var x = 1;


function fizzbuzz(){

    for(var i= 1; i <= 151; i++) {
        x = i ;

        if ( (x%5) == 0 && (x%3) == 0 ) {
            x = 'FizzBuzz';
        } 

        if ( (x%3) == 0) {
            x = 'Fizz';
        } 

        if ( (x%5) == 0) {
            x = 'Fizz';
        } 



        console.log(x);
    }
    
}

fizzbuzz();

