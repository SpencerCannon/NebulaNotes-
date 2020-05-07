//If or ir/else statements (Conditional Statements)
// - If something is true do something
// - If something is false do something else 
// - Directly tied into boolean
// Potential Conditions 
// - >, Greater than
// - <, Less than
// - >==, Greater than or equal to
// - <==, Less than or equal to 
// - ===, strict comparison
// - !==, not strictly equal 
//  - ==, Abstract comparison
// - !=, not abstractly equal 

// - A condition can include and statements and or statements 
//   - An and statement is defind with two ampersand signs 
//      - Example: if(x === true && y === true){then do this}
//   - An or statement is defined with two bars (||)
//      - Example: if(x === true || y === true){then do this}
//  - true && true === true
//   - true && false === false 
//  - true || true === true 
//  - true || false === true 
//  - false || false === false 
// - Triples:
//      - true && true && true === true 
//      - true && true && false === false 
//          - if ANY statement in all 'and' 

// ! is called bang

// undefined is falsy
//an empty string is falsy
// 0 is falsy
// null is falsy 
// any number other than 0 is true 

var x = 25;
if (x > 24){
    console.log('x is larger than 24')
}