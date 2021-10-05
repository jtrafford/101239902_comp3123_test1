// QUESTION THREE

//import fs module
import fs from 'fs'

// import path module
import path from 'path'

// check if Log directory exists
// if exists, get a list of all files
if(fs.existsSync("Logs")){
    fs.readdir("Logs", (err, files) => {
        // if theres an error
        if (err) throw err
        for (const file of files) {
            // create complete path with join() function then delete it
            const filepath = path.join("Logs", file)
            fs.unlink(filepath, err => {
                // if theres any errors
                if (err) throw err
            })
            // print out file names and message to console
            console.log(`Deleting Files... ${file}`)
        }
        // delete from Logs directory
        fs.rmdirSync("Logs")
    })
} 