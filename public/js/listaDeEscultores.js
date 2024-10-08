async function cargarListaDeEscultores() {
    listaEscultores= document.getElementById("listaEscultores")
    listaEscultores.innerHTML = "";

    apiResponse= await fetch(origin + "/api/voting")
    listaParaVotar= await apiResponse.json()

    listaParaVotar.forEach(element => {
        const {_id, nombre, votos}= element

        divEscultor= document.createElement("div")
        divEscultor.className= "escultor"
        divEscultor.id= _id

        nombreEscultor= document.createElement("a")
        nombreEscultor.innerHTML='<a class="propiedad">Nombre:</a>' + `<a class="valor">${nombre}</a>`
        
        votosEscultor= document.createElement("a")
        votosEscultor.innerHTML= '<a class="propiedad">Votos:</a>' + `<a class="valor">${votos}</a>`
        
        button= document.createElement("button")
        button.className= "button voteButton"
        button.addEventListener("click", () => {
            votar(_id, nombre)
        })

        divEscultor.appendChild(nombreEscultor)
        divEscultor.appendChild(votosEscultor)
        divEscultor.appendChild(button)
        listaEscultores.appendChild(divEscultor)
    });
}

async function votar(id, nombre) {
    usuarioVoto= Boolean(localStorage.getItem("usuarioVoto"))
    if (!usuarioVoto) {
        await fetch(origin + "/api/voting/" + id,
            {method: "post"})
        localStorage.setItem("usuarioVoto", true)
        alert("Usted votó a " + nombre)
        cargarListaDeEscultores()
    } else {
        alert("Usted ya voto")
    }
}

cargarListaDeEscultores()