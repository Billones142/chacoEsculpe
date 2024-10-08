(async () => {
    listaEscultores= document.getElementById("listaEscultores")
    apiResponse= await fetch(origin + "/api/voting")
    listaParaVotar= await apiResponse.json()
    listaParaVotar.forEach(element => {
        divEscultor= document.createElement("div")
        divEscultor.class= "escultor"
        divEscultor.id= element._id 

        nombreEscultor= document.createElement("a")
        nombreEscultor.innerHTML="Nombre: " + element.nombre
        
        votosEscultor= document.createElement("a")
        votosEscultor.innerHTML= "Votos: " + element.votos
        
        button= document.createElement("button")
        button.id= "votar"

        divEscultor.appendChild(nombreEscultor)
        divEscultor.appendChild(votosEscultor)
        divEscultor.appendChild(button)
        listaEscultores.appendChild(divEscultor)
    });
})()