const express = require('express')
const server = express()


// Passando a porta a ser utilizada
const PORT = 3333

// Configurando express para usar a pasta public
server.use(express.static("public"))
// Configurando express para usar a pasta dos estilos materialize
server.use(express.static('node_modules/materialize-css/dist'))

server.get("/", (req, resp) => {
	// Passando arquivo a ser mostrado no caminho "/"
	return resp.sendFile(__dirname + "/views/index.html")
	
})

// Ligando servidor
server.listen(PORT)