    var timestampMicroServ = require('./src/integration.js')
    var express = require("express")
    var path = require("path")

    var app = express()

    //Serve react app when requested the index page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '/TMS-Front-End/assets/index.html'))
    })
    
    app.get("/app.js", (req, res) => {
        res.sendFile(path.join(__dirname, '/TMS-Front-End/assets/app.js'))
    })
    
    app.get("/:input", (req, res) => {
        //Assign headerVal to Access-Control-Allow-Origin response header
        res.set('Access-Control-Allow-Origin', "*")

        //Send response data
        var convertedData = timestampMicroServ(req.params.input)
        res.end(convertedData)
    })

    //Find out what port will be listened on
    app.listen(process.env.PORT)