// QUESTION THREE

// import fs module
import fs from 'fs'

// create Logs directory if it doesnt already exist
if(!fs.existsSync("Logs")){
    fs.mkdirSync("Logs")
}

// chsnge current process to new Logs directory
process.chdir("Logs")

// create 10 log files 
// name files
for(let i = 0; i < 10; i++){
    const filename = `log${i}.txt`
    fs.writeFile(filename, 'some text', (err) => {
        if (err) {
            throw err
        }
    })

    // output file name 
    console.log(filename)
}
