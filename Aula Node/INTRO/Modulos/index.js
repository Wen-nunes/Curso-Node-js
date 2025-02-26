const fs = require('fs') //file system

fs.readFile('arquivo.txt', 'utf8', (err, data)=> {

    if(err){
        console.log(err)
    
    }

    console.log(data)

});

//caso ele não encontre o arquivo ou o arquivo seja informado errado, ele apresenta o erro