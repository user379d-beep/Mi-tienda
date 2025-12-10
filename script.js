// Actualiza el precio según el producto
document.getElementById("producto").addEventListener("change", () => {
  const precio = document.getElementById("producto").selectedOptions[0].dataset.precio;
  document.getElementById("precio").value = precio;
});

// Enviar pedido
document.getElementById("btnEnviar").addEventListener("click", async () => {
  const estado = document.getElementById("estado");
  estado.textContent = "Enviando pedido...";

  const precioUnit = Number(document.getElementById("precio").value);
  const cantidadNum = Number(document.getElementById("cantidad").value);

  const data = {
    cliente: document.getElementById("cliente").value,
    producto: document.getElementById("producto").value,
    cantidad: cantidadNum,
    precio: precioUnit,
    total: precioUnit * cantidadNum
  };

  const url = "https://script.google.com/macros/s/AKfycbx0fz6_F6iir4_-h5C3BVhHZCSGt5FPVDQOHarCOCKPiYvEQPE0DpA86rAKdW8O5aU/exec";

  try {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "text/plain" }
    });

    const json = await respuesta.json();

    estado.textContent = "Pedido enviado correctamente ✔";
    document.getElementById("pedidoForm").reset();
    document.getElementById("precio").value = "";
  } 
  catch (err) {
    estado.textContent = "Error enviando pedido ❌";
  }
});
