let from = document.querySelector('#formulaire');

from.addEventListener("submit", (e)=>{
    e.preventDefault();

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    const user = {
        nom : nom,
        prenom : prenom,
        username : username,
        password :password
    }
    let json = JSON.stringify(user)
    localStorage.setItem("username", json);
    console.log(user)


    
});

let formul = document.querySelector('#form');

formul.addEventListener("submit",(e)=>{
    e.preventDefault();

    var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

    var user = localStorage.getItem("username");
    alert('ok',user)
    
});

