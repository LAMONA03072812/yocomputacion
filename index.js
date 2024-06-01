// CONSTANTE = NO MUTUABLE O QUE TENGA UN CONTENIDO QUE NO CAMBIE
// LET Y VAR = MUTABLES ES DECIR QUE PUEDEN CAMBIAR SU CONTENIDO
function successAlert(){
    let userNameInput = document.getElementById('userNameInput');
    if( !userNameInput.value || userNameInput.value === '' ){
        alert('PON TU NOMBRE')
        return
    }
    alert('Gracias por tu visita '+' '+userNameInput.value);  
}

   // Import the necessary modules for creating a server, handling file operation
    const http = require('http')
    const fs = require('fs')
    const path = require('path');

  // Import the Pokedex module and create a new instance of the Pokedex 
     const Pokedex = require('pokedex');
     const pokedex = new Pokedex();

 // Log the information of a specific Pokemon using its name and Pokedex
console.log(pokedex.pokemon(garbodor));
console.log(pokedex.pokemon(90));

//Create a server that handles incoming requests and sends appropiate

const server= http.createServer((req,res)=> {
    if (req.url=== '/'){
        // Server the index.html file when the root path is accessed
        fs.readFile(path.join(__dirname,'index.html'), (err,data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the file');
                return;

            res.writeHead(200, {'Content-Type': 'text/html'} );
            res.end(data);
               
            });
    else if (req.url.startsWith('/pokemon'))  {

    // Handle the request to retrieve information about Pokemon
    const pokemonName = req.url,split('/')[2]; // Get the Pokemon name
    const pokemon =  pokedex.pokemon(pokemonName.toLocaleLowerCase());

    //Create an HTML responsive whith information about the Pokemon
    
    const pokemonHTML ='
        <!DOCTYPE html>
        <html>
        <head>
            <title>${pokemon.name}</title>
        <head>
        <body>
            <h1>${pokemon.name.toLocaleLowerCase()} </h1>
            <img src="${pokemon.sprites.normal}" alt="${pokemon.name}"> </img>
            <p>Height:${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>            
          
        </body>    
        <html>´
    ;
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(pokemonHTML); 

    } else {
        // Respond with 404 if the path is not recognized
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Not Found");
    }
 });
 const PORT = 300;
 server.listen(PORT,() => {
    console.log("Server is running on http://localhost:${PORT}");
 });

            </html>



            </title>

        </head>


        </html>


    }


        }    

    }

}
    



