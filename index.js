/*fetch('https://loisirs-web-backend.cleverapps.io/users')
.then(function(response){ return response.json();})
.then(function(data) {
  document.querySelector('table').innerHTML = data.map(function(d){return d.name + d.id})
})
.catch(error => console.error(error))*/

const getUsers = async function () { //fonction asynchrone
    try {
        let response = await fetch('https://loisirs-web-backend.cleverapps.io/users')
        if (response.ok) { //si la réponse est correct
            let data = await response.json() //coversion des données en json
            var tableau = document.getElementById("tableau"); //
            var string = ""

            data.forEach(element => {
                string += '<tr> <td>' + element.id + ' </td>' + '<td>' + element.name + ' </td>' + '<td>' + element.password + ' </td> </tr>'
            });
            tableau.innerHTML = string
            console.log(data)
        } else {
            console.error("Retour du serveur : ", response.status)//retour du serveur 404 (requete out)
        }
    } catch(e){
        console.log(e)
    }
}

const insertUsers = async function () {
    var nom = document.getElementById("name").value
    var pwd = document.getElementById("pwd").value

    let response = await fetch('https://loisirs-web-backend.cleverapps.io/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name: nom, password: pwd})
    })
    if(response.ok){
        let resdata = await response.json()
        console.log(resdata)
    }

}