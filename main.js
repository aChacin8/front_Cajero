const usuarios = [
    {
        nombre: "Maria Sanchez",
        email: "maria27@gmail.com",
        password: "maria27",
        saldo: 2700
    },
    {
        nombre: "Juan Rivera",
        email: "juan_user@gmail.com",
        password: "Juan123",
        saldo: 6800
    },
    {
        nombre: "Raul Martinez",
        email: "raul777_raul@gmail.com",
        password: "raul777",
        saldo: 7000
    }
];

let log = document.querySelector("#login_form");

const verificarInicio = (email, password) => {   
    
    for (let i = 0; i < usuarios.length; i++) {
        if (email === usuarios[i].email && password === usuarios[i].password) {
            let change = document.querySelector("#login_div");
            change.innerHTML = `
            <div id ="content_div">
                <h2 id="content_h2">BIENVENIDO ${usuarios[i].nombre}</h2>
                <div id="content_opcion">
                    <form id="opcion_form">
                        <label for="content_select" id="content_label">Elige una opción:</label>
                        <select name="select" id="content_select">
                            <option value="Consultar Saldo">Consultar Saldo</option>
                            <option value="Depositar">Depositar</option>
                            <option value="Retirar">Retirar</option>
                            <option value= "Finalizar"> Finalizar </option>
                        </select>
                        <input type="submit" id="submit" value="Ejecutar">
                    </form>
                </div>
            </div>`;

            let form = document.querySelector("#opcion_form");
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                let selectValue = document.querySelector("#content_select").value;
                elegirOpcion(selectValue, usuarios[i]);
            });
            return;
        }
    }
    let change = document.querySelector("#login_div");
    change.innerHTML = `<h2>El usuario o la contraseña son incorrectos</h2>`;
}

const formHandler = (event) => {

    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    verificarInicio(email, password);
}

log.addEventListener("submit", formHandler);

const elegirOpcion = (opcion, usuario) => {

    switch (opcion) {
        case "Consultar Saldo":
            consultaSaldo(usuario);
            break;
        case "Depositar":
            depositaSaldo(usuario);
            break;
        case "Retirar":
            retiraSaldo(usuario);
            break;
        case "Finalizar":
            finalizaSaldo (usuario);
            break;
    }
}

const consultaSaldo = (usuario) => {
    alert(`El saldo de ${usuario.nombre} es: $${usuario.saldo}`);
}

const depositaSaldo = (usuario) => {
    let cantidad = parseFloat(prompt("¿Cuánto deseas depositar?"));
    if (cantidad > 0) {
        usuario.saldo += cantidad;
        alert(`Has depositado $${cantidad}. Tu nuevo saldo es $${usuario.saldo}`);
    } else {
        alert("Cantidad inválida.");
    }
}

const retiraSaldo = (usuario) => {
    let cantidad = parseFloat(prompt("¿Cuánto deseas retirar?"));
    if ( cantidad > 0 && cantidad <= usuario.saldo) {
        usuario.saldo -= cantidad;
        alert(`Has retirado $${cantidad}. Tu nuevo saldo es $${usuario.saldo}`);
    } else if (cantidad > usuario.saldo) {
        alert("No tienes suficiente saldo.");
    } else {
        alert("Cantidad inválida.");
    }
}

const finalizaSaldo = (usuario) => {
    let fin = document.querySelector("#login_div");

    fin.innerHTML = `
    <div id = "content_fin">
        <h2> Has finalizado sesion ${usuario.nombre} </h2>
        <p> Tienes un saldo de ${usuario.saldo}
    </div>`
}