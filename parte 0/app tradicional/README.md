# App Tradicional

![App tradicional](app-tradicional.png.png)

- Navegador->Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
- Servidor-->Navegador: Obtiene el codigo HTML
- Navegador->Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
- Servidor-->Navegador: Obtiene el codigo CSS
- Navegador->Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
- Servidor-->Navegador: Obtiene el Codigo JS

- note over Navegador: El Navegador ejecuta el codigo JS que solicita los datos JSON del servidor nota final

- Navegador->Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
- Servidor-->Navegador: [{"content": "test spa", "date": "2023-10-11T13:22:03.396Z"}]

- note over Navegador: El navegador ejecuta el controlador de eventos. Que muestra las notas obtenidas del formulario para mostrarla en el display final