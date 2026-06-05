/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// we have to test how much times it takes to do the computation

function calculateTime(n) {
    let startTime = Date.now()

    for(let i = 0 ; i < n ; i++) continue;

    let endTime =  Date.now();

    return (startTime - endTime ) /1000;
}