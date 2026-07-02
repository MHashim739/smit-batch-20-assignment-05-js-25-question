// Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), price (number with value 999.99), and inStock (boolean with value true). Console.log all three variables in a single statement.
const productName='laptop';
const price=999.99;
const inStock=true;
console.log(productName,price,inStock);

// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let value01=27;
let value02=4;
let valuesDevide=27 / 4;
let valuesRemainder=27 % 4;

let value03=12;
let value03Square=12**12;

let value04=8;
++value04;

let value05=15;
value05 -= 2;

// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.

let firstname='Alex';
let lastName='Smith';
let fullName=`${firstname} ${lastName}`;
let fullNameSaveLength=fullName.length;

// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.

let temperature01=30;
let temperature02=20;
let temperature03=30;
if (temperature01==30){
    console.log("Hot day");
    if(temperature02=20 || temperature03<30){
        console.log("Pleasant day");
    }
}else{
    console.log('cold day');
    
}







