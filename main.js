const usuarios = [
    
    {
        nombre: "Maria",
        email: "maria27@gmail.com",
        password: "maria27",
        saldo: 2700
    },
    {
        nombre: "Juan",
        email: "juan_user@gmail.com",
        password: "Juan123",
        saldo: 6800
    },
    {
        nombre: "Raul",
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
                <h2 id="content_h2">Bienvenido ${usuarios[i].nombre}</h2>
                <div id="content_opcion">
                    <form id="opcion_form">
                        <label for="content_select">Elige una opción:</label>
                        <select name="select" id="content_select">
                            <option value="Consultar Saldo">Consultar Saldo</option>
                            <option value="Depositar">Depositar</option>
                            <option value="Retirar">Retirar</option>
                        </select>
                        <input type="submit" id="submit2" value="Ejecutar">
                    </form>
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
        default:
            console.log("Opción no válida");
    }
}

const consultaSaldo = (usuario) => {
    alert(`El saldo de ${usuario.nombre} es: $${usuario.saldo}`);
}

const depositaSaldo = (usuario) => {
    let cantidad = parseFloat(prompt("¿Cuánto deseas depositar?"));
    if (!isNaN(cantidad) && cantidad > 0) {
        usuario.saldo += cantidad;
        alert(`Has depositado $${cantidad}. Tu nuevo saldo es $${usuario.saldo}`);
    } else {
        alert("Cantidad inválida.");
    }
}

const retiraSaldo = (usuario) => {
    let cantidad = parseFloat(prompt("¿Cuánto deseas retirar?"));
    if (!isNaN(cantidad) && cantidad > 0 && cantidad <= usuario.saldo) {
        usuario.saldo -= cantidad;
        alert(`Has retirado $${cantidad}. Tu nuevo saldo es $${usuario.saldo}`);
    } else if (cantidad > usuario.saldo) {
        alert("No tienes suficiente saldo.");
    } else {
        alert("Cantidad inválida.");
    }
}
