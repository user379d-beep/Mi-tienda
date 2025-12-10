document.getElementById("btnEnviar").addEventListener("click", async () => {
  const estado = document.getElementById("estado");
  estado.textContent = "Enviando pedido...";

  const data = {
    cliente: document.getElementById("cliente").value,
    producto: document.getElementById("producto").value,
    cantidad: Number(document.getElementById("cantidad").value),
    precio: Number(document.getElementById("precio").value),
    total: Number(document.getElementById("cantidad").value) * Number(document.getElementById("precio").value)
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
  } 
  catch (err) {
    estado.textContent = "Error enviando pedido ❌";
  }
});
