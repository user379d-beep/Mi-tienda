document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const estado = document.getElementById("estado");
    estado.textContent = "Enviando pedido...";

    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbx0fz6_F6iir4_-h5C3BVhHZCSGt5FPVDQOHarCOCKPiYvEQPE0DpA86rAKdW8O5aU/exec", {
        method: "POST",
        body: formData
    })
    .then(r => r.text())
    .then(resp => {
        estado.textContent = "Pedido enviado correctamente ✔";
        document.getElementById("pedidoForm").reset();
    })
    .catch(err => {
        estado.textContent = "Error enviando pedido ❌";
    });

});
