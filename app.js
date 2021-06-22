const fs = require('fs');
const path = require('path');

let firstDir = path.join(__dirname, 'dir', '1800');
let secondDir = path.join(__dirname, 'dir', '2000');
//
// //console.log(firstDir)
//
// fs.readdir(firstDir, (err, files) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(files);
//
//
//     files.forEach(users => {
//         fs.rename(path.join(firstDir, users), path.join(secondDir, users), (err2) => {
//             if (err2) {
//                 console.log(err2)
//             }
//         })
//     })
// })
// fs.readdir(secondDir, (err, files) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     files.forEach(users => {
//         fs.rename(path.join(secondDir, users), path.join(firstDir, users), err => {
//             if(err){
//                 console.log(err)
//             }
//         })
//     })
// })
//
//


fs.readdir(firstDir, (err, files) => {
    if(err){
        console.log(err)
        return
    }
    files.forEach(users => {
        fs.readFile(path.join(firstDir, users), (err1, data) => {
            if(err1){
                console.log(err1)
                return;
            }
            const value = JSON.parse(data.toString());
            if(value.gender === 'male'){
                fs.rename(path.join(firstDir, users), path.join(secondDir, users), err2 => {
                    if(err2){
                        console.log(err2)
                    }
                })
            }
        })
    })
})
fs.readdir(secondDir, (err, files) => {
    if(err){
        console.log(err)
        return;
    }
    files.forEach(users => {
        fs.readFile(path.join(secondDir, users), (err1, data) => {
            if(err1){
                console.log(err1)
                return;
            }
            const value = JSON.parse(data.toString())
            if(value.gender === "female"){
                fs.rename(path.join(secondDir,users), path.join(firstDir, users), err2 => {
                    if(err2){
                        console.log(err2)
                    }
                })
            }
        })
    })
})
