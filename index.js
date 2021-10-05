// QUESTION ONE

// arrow function taking mixedArray as input
let lowerCaseWords = (mixedArray) => {
    // create promise
    let promise = new Promise((resolve, reject) => {
        // checking if array is valid 
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)){
            // filter out values that are not string  using filter method
            let stringArr = mixedArray.filter((element) => typeof element == "string")

            // map the filtered out values to a lowercase array
            let mapArrayLC = stringArr.map((filteredElement) => {
                return filteredElement.toLowerCase()
            })  
            // resolve having lowercase strings 
            resolve(mapArrayLC)         
        }
        // reject promise if invalid type
        else{
            reject("ERROR: Invalid Array Input")
        }
    })
    // returning the promise
    return promise
}

// define the mixedArray
let mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

// call the function and print log when resolved or rejected
lowerCaseWords(mixedArray).then(value => console.log(value))
lowerCaseWords(mixedArray).catch(error => console.log(error))