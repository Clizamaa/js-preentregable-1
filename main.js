alert("Modelos de automóviles");

const marcas = ["Toyota", "Nissan", "Mazda", "Honda"];
const modelos = {
    Toyota: [],
    Nissan: [],
    Mazda: [],
    Honda: []
};

function mostrarModelos(marca) {
    let resultado = modelos[marca].join("\n");
    alert(`Modelos de automóviles ${marca}:\n${resultado}`);
}

for (let i = 0; i < marcas.length; i++) {
    let opcion = parseInt(prompt(`Seleccione una marca de automóvil (intento: ${i+1} de ${marcas.length}):\n` + "1. Toyota\n" + "2. Nissan\n" + "3. Mazda\n" + "4. Honda\n" + "5. Salir"));

    if (opcion >= 1 && opcion <= 4) {
        let marca = marcas[opcion - 1];
        let modelo = prompt(`Ingrese el modelo del automóvil ${marca}`);
        modelos[marca].push(modelo);
        mostrarModelos(marca);
    } else if (opcion === 5) {
        alert("Gracias por utilizar mi programa");
        break;
    } else {
        alert("Ingrese una opción válida");
    }
}

alert("Gracias por agregar modelos de automóviles");



