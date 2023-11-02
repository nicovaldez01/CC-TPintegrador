 function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
     document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "estudiante"; 
    document.getElementById("total").value = "";
}


function resumen() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const cantidadInput = document.getElementById('cantidad');
    const cantidad = parseInt(cantidadInput.value);
    const categoria = document.getElementById('categoria').value;
    let porcentaje;

    if (!nombre || !apellido || !correo || cantidad <= 0 || isNaN(cantidad)) {
        alert('Por favor complete todos los campos y asegúrese de que la cantidad sea válida y mayor que 0');
        cantidadInput.value = "";
        return;
    }

    const valorTicket = 200;

    if (categoria === 'estudiante') {
        porcentaje = 0.8;
    } else if (categoria === 'trainee') {
        porcentaje = 0.5;   
    } else if (categoria === 'junior') {
        porcentaje = 0.15;
    }

    const descuento = 200 - (200 * porcentaje);

    const total = descuento * cantidad;
    document.getElementById('total').value = "Total: $" + total;
}
