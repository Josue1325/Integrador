fetch('url_de_tu_api')
    .then(response => response.json())
    .then(data => {
        let tbody = document.getElementById("tabla-body");
        tbody.innerHTML = "";
        data.forEach(registro => {
            let fila = `<tr>
                <td>${registro.id}</td>
                <td>${registro.uid}</td>
                <td>${registro.nombre}</td>
                <td>${registro.acceso ? '✅' : '❌'}</td>
                <td>${registro.fecha_registro}</td>
            </tr>`;
            tbody.innerHTML += fila;
        });
    })
    .catch(error => console.error("Error al obtener datos:", error));