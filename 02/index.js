const  express =  require("express")
const server = express()

// http:localhost:3000/hello/:nome?nome=Kayo&idade=19
// Query params= ?nome=Kayo&idade=19
server.get("/hello",(req ,res) => {
    const {nome,idade} = req.query
    return res.json({
        title:"Hello world",
        message: `Olá ${nome}, tudo bem com você?`,
        idade: idade
    })
})


// Route params = /hello/:nome
// http:localhost:3000/hello/Kayo
server.get("/hello/:nome/:idade",(req,res)=>{
    const {nome,idade} = req.params
    return res.json({
        title:"Hello world",
        message: `Olá ${nome}, tudo bem?`,
        idade:idade
    })
})


// json["title"]
// ->"Hello world"
server.listen(3000)

