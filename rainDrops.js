function rainDrops(number){
    let primeChecker = {3: 'Pling', 5: 'Plang', 7: 'Plong'};
    let primeCheckerKeys = Object.keys(primeChecker);
    let result = '';

    // These are for inputs that are not numeric, i.e Array, Objects, Alphanumeric
    if ( isNaN( number) ){
        return "Not a number";

     // This are for floating point or decimal number i.e 3.5 % 1 => 0.5
    }else if ( number % 1 !== 0 ){
        return "Not a whole number";

        // This are for negative and numbers lesser than 0
    }else if( number <= 0 ){
        return "Number must be greater than 0";
    }else if( number == "" ){
        return "empty string is Invalid";

        // This is for a number that is equal to 1
    }else if ( number === 1){
        return "Number must be greater than 1";
    }

    let primeDivisor = (primeCheckerKeys) =>{
        number % Number(primeCheckerKeys) === 0 ? result +=primeChecker[primeCheckerKeys] : '';
        
    }

    // If inputs are valid but do not have a prime factor in primeCheckerKeys
    primeCheckerKeys.map(primeDivisor);
    if (result !== '') {
        return result;
    }else{
        return number;
    }
    
}

export default rainDrops;