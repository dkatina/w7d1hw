//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// for loop and if statement
function findWords(string, names){
    let matches = ''
    for(let i = 0; i < names.length; i++) {
        let dog = names[i]
        if (string.includes(dog)){
            matches += ` ${dog}`
        }
    }  
    return matches ? `Matched:${matches}`: 'No matches'
}

console.log(findWords(dog_string, dog_names))

//filter
function findWords2(string, names){
    let matches=names.filter(
        dogName=> string.includes(dogName)
    )
    return matches ? `Matched: ${matches.join(' ')}`: 'No matches'
}

console.log(findWords2(dog_string, dog_names))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//for loop
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i<arr.length; i+=2){
        arr.splice(i,1,'even index')
    }
    return arr
}

console.log(replaceEvens(arr))

//map
function replaceEvens2(arr){
    evenIndex=arr.map(
        (item)=>{
            return arr.indexOf(item)%2==0 ? 'even index':item
        }
    )
    return evenIndex
}

console.log(replaceEvens2(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

