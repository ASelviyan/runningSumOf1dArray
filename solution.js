//PROBLEM
//we are given an array of nums 
//we need to add up the numbers that came before the index that is next in line

//CONSTRAINTS
//the length of the numbers array will be bigger or equal to 1 and smaller or equal to 1000
//the numbers inside the array will be bigger or equal to -10^6 or bigger or equal to 10^6

var runningSum = function (nums) {
    //create a new array to pass the new numbers in
    const runningArray = []
    //add the first number in the array to the new array 
    runningArray.push(nums[0])
    //we make a for loop that goes through the array 
    for (let i = 1; i < nums.length; i++) {
        let runningSum = 0
        //then make another for loop that will loop through the array to that first loops index
        for (let j = 0; j <= i; j++) {
            // while the second index is going through the array it will be adding up the numbers
            runningSum += nums[j]
        }
        runningArray.push(runningSum)
    }
    //return the array of new numbers
    return runningArray
}
