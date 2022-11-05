require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get('/calcquery/:num1/:num2', (request, response) => {

    const numOne = parseInt(request.params.num1)
    const numTwo = parseInt(request.params.num2)
    const operation = request.query.operation
   
    if(operation === 'add'){
      let  res = numOne + numTwo
        response.send('the resoult is ' + res)
    } else if(operation === 'multiply') {
       let res = numOne * numTwo
        response.send('the resoult is ' + res)
    } else if(operation === 'subtraction') {
       let res =numOne - numTwo
        response.send('the resoult is ' + res)
    }else if(operation === 'division') {
       let res = numOne / numTwo
        response.send('the resoult is ' + res)
    }else if(operation === 'exponents') {
       let res = numOne ** numTwo
        response.send('the resoult is ' + res)
    } else {
        response.send('no operation')
    }
    
     
})

app.get('/someroute', (req, res) => {
    console.log('req.query: ', req.query);
    res.send('someroute accessed');
  });

app.listen(PORT, () => {
	console.log('Express is listening on port: ', PORT);
});