React.js + Socket.io

Antonio Sandoval

Conecta

Full Stack Developer

####

Aplicación del lado del server:
  - mongoDB
  - express
  - jade

####

Vista

```
  include ../mixins
  extends ../layout

  block content
    h1 Tareas #{counterTasks}

    a.create(href="/new-task") Nueva tarea
    ul
      li.task Tarea 1 <button class="delete">Eliminar</button>
      li Tarea 2 <button class="delete">Eliminar</button>


  block javascript
    $('.delete').on('click', function () {
      // Eliminar la tarea en el backend
      // Eliminar del html la tarea
      // Actualizar el contador de tareas
    });
```


####

Aplicación del lado del cliente:
  - angular
  - ember
  - backbone


+ socket.io
  backend:
    - express
    - socket.io

  frontend:
    - socket.io
