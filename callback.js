// QUESTION TWO

// resolves the promise
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message' : 'resolved promise!'})
        }, 500)
    })
}

// reject the promise
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error' : 'rejected promise!'})
        }, 500)
    })
}

// calling promises 
// display output to console
resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(err => console.log(err))