
// #-----------Question 1
// #Write a function to print "hello_USERNAME!" USERNAME is the input of the function.

function hello_USERNAME(username) {
    console.log(`hello_${username.toUpperCase()}`);
}

hello_USERNAME('username')

// #-----------Question 2
// #Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing    

function firstOdds(){
    for (let i=1; i<=100; i+=2){
        console.log(i)
    }
}

firstOdds()

// #-----------Question 3
// #Please write a Python function, max_num_in_list to return the max number of a given list.

function maxNumInList(aList){
    max = Math.max(...aList)
    return max
}

my_list = [1,3,4,14,85,25,35,42]
console.log(maxNumInList(my_list))

// #-----------Question 4
// #Write a function to return if the given year is a leap year. 

function isLeapYear(year){
    return year % 100 != 0 || year % 400 == 0 && year % 4 == 0 ? true:false;
}

console.log(isLeapYear(2000))

// #-----------Question 5
// #Write a function to check to see if all numbers in list are consecutive numbers.

function isConsecutive(aList){
    let nums = []
    for (let i=0; i < aList.length; i++)
        if (i == 0){
            nums.push(aList[i])
        }else if (aList[i] - nums.pop() != 1){
            return false;
        }else{
            nums.push(aList[i])
        }
    return true;
}

test_list = [1,2,3,4,5,6,7,8]
console.log(isConsecutive(test_list))


