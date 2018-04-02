var http =  require('http');
var dispatcher = require('httpdispatcher');

const PORT=8080;

function servidor(request, response){

    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.setStatic('resources');

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Funcionando!!');
}); 
  
dispatcher.onGet("/pagina1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Página 1');
}); 

 dispatcher.onPost("/post1", function(req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Post');
 });

var server = http.createServer(servidor);

server.listen(PORT, function(){
    console.log("Servidor rodando em: http://localhost:%s", PORT);
});