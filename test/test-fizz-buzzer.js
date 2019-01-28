// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return fizz-buzz, buzz, or fizz if number is divisible 15 or 5 or 3, respectively', function() {
        // range of normal inputs, including
        const normalCases = [
        {num: 15, expected: 'fizz-buzz'},
        {num: 5, expected: 'buzz'},
        {num: 9, expected: 'fizz'}
        ];
        // for each input (num), `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.num);
        expect(answer).to.equal(input.expected);
        });
    });



    it('should raise error if arg not number', function() {
        // range of bad inputs where num is not a  number
        const badInputs = [
          ['a'],
          ['b'],
          [false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input[0], input[1]);
          }).to.throw(Error);
        });
      });


});