const req = require('request')
const  request  = require('request')
var {done} = require('./bash')
console.log(typeof done)



module.exports = function (url) {

    
    request.get(url, (err, resp,body) => {
        if (err) throw err
        done(body)
    })


}