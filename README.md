# Backend del Proyecto de Gestión de Películas 🎥

Este es el backend del sistema de gestión de películas, que se conecta a la API de OMDb para obtener información de películas y las almacena en una base de datos. También proporciona una API para que el frontend consuma estos datos.

---

## Características ✨

- **Obtención de datos desde la API de OMDb:**
  - Recupera películas relacionadas con una palabra clave específica (como "Harry Potter").
- **Base de datos local:**
  - Almacena las películas con los datos clave como título, año, imagen y una valoración personal generada aleatoriamente.
- **API REST:**
  - Proporciona endpoints para listar, filtrar y gestionar las películas almacenadas.
- **Filtro por parámetros:**
  - Permite filtrar las películas por título, año y valoración personal.

---

## Tecnologías Utilizadas 🛠️

- **Node.js:** Entorno de ejecución de JavaScript.
- **Express:** Framework para la creación de la API REST.
- **Sequelize:** ORM para la interacción con la base de datos SQLite.
- **SQLite:** Base de datos ligera para almacenar películas.
- **Axios:** Para consumir la API de OMDb.
- **Dotenv:** Manejo de variables de entorno.
- **Nodemon:** Herramienta para desarrollo que reinicia automáticamente el servidor al detectar cambios.
