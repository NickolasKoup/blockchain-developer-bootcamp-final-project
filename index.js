// index.js
var Web3 = require('web3');
var Eth = require('web3-eth')
var eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
// acc = async () =>  await web3.eth.getaccounts(console.log)
acc1 = global.window

/**
 * Required External Modules
 */
const express = require("express")

const path  = require("path")
// const { default: Web3 } = require("web3")
/**
 * App Variables
 */
const app = express()

const port = process.env.PORT || "8000"
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"))

app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json({limit: '1mb'}))
/**
 * Routes Definitions
 */
 app.get("/", (req, res) => {
    res.render("index", { title: "Home", MetaAcc: `${web3.eth.accounts}` })
  });

  app.post("/", (req, res) => {
    console.log("i got the req")
    console.log(req.body.metamaskAcc)
  })
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log("Server up and running")
})