

import { doesUserWin } from '../utils.js';

const test = QUnit.test;

test('if user inputs rock and CPU inputs scissor, should return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    console.log();
    
    const actual = doesUserWin('rock', 'scissors');
    //console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    
    expect.equal(actual, expected);
});
