// Ejecuta la función para ingresar nombre , si hay espacio en blanco, sale el alert 

function solicitarNombre() {
    let nombre;
    while (true) {
        nombre = prompt("Por favor, ingrese su nombre:");
        if (nombre) {
            return nombre;
        } else {
            alert("Debe ingresar su nombre para continuar.");
        }
    }
}


// Ejecuta la función para ingresar apellido , si hay espacio en blanco, sale el alert 

function solicitarApellido() {
    let apellido;
    while (true) {
        apellido = prompt("Por favor, ingrese su apellido:");
        if (apellido) {
            return apellido;
        } else {
            alert("Debe ingresar su apellido para continuar.");
        }
    }
}

// Ejecuta la función para ingresar edad , si la edad es menor a 18 , no deja usar el simulador


function solicitarEdad() {
    let edad, edadNum;
    while (true) {
        edad = prompt("Por favor, ingrese su edad:");
        edadNum = parseInt(edad);
        if (!isNaN(edadNum) && edadNum >= 18) {
            return edadNum;
        } else if (isNaN(edadNum)) {
            alert("Debe ingresar una edad válida.");
        } else if (edadNum < 18) {
            alert("Debe ser mayor de edad para utilizar este simulador.");
        }
    }
}

// Ejecuta la función para ingresar Destino entre 3 continentes 


function solicitarDestino() {
    let destino;

    while (true) {
        destino = prompt("Por favor, ingrese el continente que desea viajar (Europa, Asia y America):");

        if (!destino) {
            alert("Debe ingresar un destino para continuar.");
            continue;
        }

        destino = destino.toLowerCase();

        if (destino === "europa" || destino === "asia" || destino === "america") {
            let pais = solicitarPais(destino);
            if (pais) {
                alert(`Gracias por elegir su destino: ${pais}`);
                return;
            }
        } else if (destino === "oceania" || destino === "africa") {
            alert("Por el momento no contamos con estos destinos. Por favor, ingrese un continente válido.");
        } else {
            alert("Por favor ingrese un destino válido.");
        }
    }
}


//Ejecuta la función para ingresar pais del continente, da 3 opciones por continente, si se elije otra que no esta en el listado no deja continuar y pide volver a ingresar

function solicitarPais(destino) {
    let pais;
    let opciones = [];

    switch (destino) {
        case "europa":
            opciones = ["España", "Londres", "Italia"];
            break;
        case "america":
            opciones = ["Argentina", "Brasil", "EEUU"];
            break;
        case "asia":
            opciones = ["China", "Corea del Sur", "Japon"];
            break;
    }

    while (true) {
        pais = prompt(`Por favor, elija un país en ${destino.charAt(0).toUpperCase() + destino.slice(1)}: ${opciones.join(", ")}`);

        if (!pais) {
            alert("Debe ingresar un país para continuar.");
            continue;
        }

        pais = pais.toLowerCase();
        let paisValido = opciones.find(opcion => opcion.toLowerCase() === pais);

        if (paisValido) {
            return paisValido;
        } else {
            alert("Por favor ingrese un país válido.");
        }
    }
}



function calcularCuotas() {
    const nombre = solicitarNombre();
    const apellido = solicitarApellido();
    const edadNum = solicitarEdad();

    // Ejecuta la función para iniciar el proceso de solicitud de destino
    solicitarDestino();

    // Solicitar valor a financiar
    const valor = prompt("Por favor, ingrese el valor a financiar:");
    const valorNum = parseFloat(valor);

    if (isNaN(valorNum) || valorNum <= 0) {
        return alert("Debe ingresar un valor válido y mayor a 0.");
    }

    // Calcular cuotas con IVA
    const cuotas3 = ((valorNum / 3) * 1.21).toFixed(2);
    const cuotas6 = ((valorNum / 6) * 1.21).toFixed(2);
    const cuotas12 = ((valorNum / 12) * 1.21).toFixed(2);

    // Mostrar resultados
    alert(`Sus datos son:\nNombre: ${nombre} ${apellido}\nEdad: ${edadNum}\n\nMonto: ${valorNum.toFixed(2)}\n\nCuotas con IVA incluido:\n3 meses: ${cuotas3}\n6 meses: ${cuotas6}\n12 meses: ${cuotas12}`);
}

// Ejecuta la función para iniciar el simulador de cuotas
calcularCuotas();
