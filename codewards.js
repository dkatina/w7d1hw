function spinWords(string){
    let words = string.split(' ')
    let new_string = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5){
            let splitWord = words[i].split('')
            let reverseWord = splitWord.reverse()
            let newWord = reverseWord.join('')
            new_string.push(newWord)
        }else{
            new_string.push(words[i])
        }
    }
    return new_string.join(' ')
}

function persistence(num){
    
    let output = 0
    while (true){
        num = num.toString()
        x = 1
        if (num.length == 1){
            return output
        }else{
            for (let i = 0; i < num.length; i++) {
                x *= parseInt(num[i])
            }
        }
        num = x
        output += 1
    }
}

console.log(persistence(39))