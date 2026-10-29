# Práctica de Tecnologías - Changemakers API & Frontend 🚀

Este es un proyecto Full-Stack diseñado como una práctica integral de tecnologías modernas para la gestión de tareas (Tasks). Está construido con un backend en **Spring Boot (Java 21)** y un frontend en **Angular (v17+)**, incluyendo pruebas automatizadas E2E con **Selenium**.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Java 21, Spring Boot 3.4.0, Maven.
- **Frontend:** Angular (Standalone Components, Signals), TypeScript, CSS.
- **Testing E2E:** Node.js, Selenium WebDriver.

## 📂 Estructura del Proyecto

- `changemakers-api/`: Código fuente del Backend (API REST).
- `changemakers-frontend/`: Código fuente de la interfaz de usuario.
- `e2e-test/`: Scripts de pruebas automatizadas con Selenium.

---

## 🚀 Cómo ejecutar el proyecto

Para probar este proyecto en tu entorno local, debes levantar tanto el backend como el frontend.

### 1. Requisitos previos

- Java 21 (JDK)
- Node.js (v18 o superior) y npm
- Google Chrome instalado (para Selenium)

### 2. Levantar el Backend (Spring Boot)

Abre una terminal y navega a la carpeta del backend:

```bash
cd changemakers-api
./mvnw spring-boot:run
```

_El servidor se iniciará en `http://localhost:8080`._

### 3. Levantar el Frontend (Angular)

Abre **otra** terminal y navega a la carpeta del frontend:

```bash
cd changemakers-frontend
npm install
npm start
```

_La aplicación web estará disponible en `http://localhost:4200`._

### 4. Ejecutar las Pruebas E2E (Selenium)

Asegúrate de que el Backend y el Frontend sigan corriendo. Abre una **tercera** terminal y navega a la carpeta de pruebas:

```bash
cd e2e-test
npm install
node test.js
```

_El script abrirá una ventana de Chrome, navegará al frontend, creará una tarea y verificará que se guarde correctamente en la base de datos en memoria del backend._

---

## 📡 Endpoints de la API

El backend expone los siguientes endpoints para gestionar las tareas:

| Método   | Endpoint          | Descripción                                                                         |
| -------- | ----------------- | ----------------------------------------------------------------------------------- |
| `GET`    | `/api/tasks`      | Obtiene la lista de todas las tareas.                                               |
| `POST`   | `/api/tasks`      | Crea una nueva tarea. Ejemplo de body: `{"title": "Nueva tarea", "status": "TODO"}` |
| `PUT`    | `/api/tasks/{id}` | (Pendiente) Actualiza una tarea existente.                                          |
| `DELETE` | `/api/tasks/{id}` | (Pendiente) Elimina una tarea.                                                      |

_(Nota: Los datos están en memoria en el backend. Si reinicias el servidor, se reiniciarán a su estado inicial)._

---

## 💡 Características Implementadas

- **Frontend Moderno:** Uso de la nueva sintaxis de plantillas (`@for`, `@if`), Signals para el manejo del estado y `inject()` para inyección de dependencias.
- **CORS configurado:** El backend permite peticiones cruzadas (`@CrossOrigin`) para facilitar la comunicación con el frontend en el puerto 4200.
- **Manejo de errores:** Prevención de envíos de tareas vacías en la interfaz.

---

## 👨‍💻 Autor

- Nicolas Mantilla Gelves
- Práctica de desarrollo Full-Stack / Automatización de pruebas.
