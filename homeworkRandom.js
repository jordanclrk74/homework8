// Problem 1 //

    const reversedInt = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// Problem 2 //

    function capitalizeWords(word) {
    const loweredCase = word.toLowerCase();
    return word[0].toUpperCase() + loweredCase.slice(1);
    }

// Problem 3 //

    const maxChar = str => {
    const strObj = {}
    let maxCount = 0
    let maxChar = ""
    for (let char of str) {
        strObj[char] = strObj[char] + 1 || 1
    }
    for (let key in strObj) {
        if (strObj[key] > maxCount) {
        maxCount = strObj[key]
        maxChar = key
        }
    }
    return maxChar
    }

// Problem 4 //

    function longestWord(str) {
    let strSplit = str.split(' ');
    let longestWordStore = 0;

    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWordStore){
        longestWordStore = strSplit[i].length;
        }
    }
    return longestWordStore; 
    }

// Problem 5 //

    function chunkArray(arr, size) {
    let myArray = [];
    for(let i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i+size));
    }
    return myArray;
    }

// Problem 6 //

    function flattenArray(arr, depth = 1) {
        if (depth <= 0) return arr;
    
        let result = [];
    
        for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item, depth - 1))
        } else {
            result.push(item);
        }
        }
    
        return result;
    }

// Problem 7 //

    function isAnagram(a, b) {
        let len1 = a.length;
        let len2 = b.length;
        if(len1 !== len2){
        console.log('Invalid');
        return
        }
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
        if(str1 === str2){
        console.log("True");
        } else { 
        console.log("False");
        }
    }

  
