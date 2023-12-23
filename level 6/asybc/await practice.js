function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseThree(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}
async function getPaid(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}


// simplifying a api request with async/await

async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}

// add a try/catch/block


// our first look at backend code

const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
    fs.readFile('demofile.html , (err, data') => {
        res.writeHead(200, {'Content-Typ' : 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8000)






fucntion houseFour(){
    setTimeout((resolve,reject) {
        resolve('the paper has been delivered to house 4')
    }, 2000)
}