API REST - Sistema de Biblioteca

Este proyecto consiste en el desarrollo de una API RESTful para la gestión de una biblioteca, implementada con NestJS, TypeORM y MySQL.  
La API permite operaciones completas (CRUD) sobre las siguientes entidades: usuarios, libros, préstamos y administradores.

Características principales
•	Arquitectura modular con buenas prácticas de desarrollo.
•	Validaciones robustas mediante `class-validator`.
•	Relaciones entre entidades bien definidas.
•	Organización clara de carpetas (DTOs, entities, servicios, controladores, etc).
•	Documentación y pruebas con Postman.

Entidades del sistema
•	Usuarios: Personas registradas que pueden tomar libros en préstamo.
•	Libros: Material disponible para préstamo.
•	Préstamos: Registro de libros prestados a usuarios.
•	Administradores: Encargados de la gestión del sistema.

 Relaciones entre entidades
•	Un usuario puede tener muchos préstamos (`@OneToMany`).
•	Un libro puede estar en muchos préstamos (`@OneToMany`).
•	Cada préstamo pertenece a un usuario y un libro (`@ManyToOne`).

Tecnologías utilizadas
•	[NestJS](https://nestjs.com/) - Framework backend para Node.js (TypeScript)
•	[TypeORM](https://typeorm.io/) - ORM para bases de datos relacionales
•	[MySQL](https://www.mysql.com/) - Motor de base de datos
•	[Class-validator](https://github.com/typestack/class-validator) - Validación de DTOs
•	 [Postman](https://www.postman.com/) - Herramienta para pruebas y documentación de API

Requisitos previos
•	Node.js (v18 o superior)
•	npm
•	MySQL
•	Postman

 Estructura del proyecto

src/
├── biblioteca/
│ ├── administradores/
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── administrador.controller.ts
│ │ ├── administrador.module.ts
│ │ └── administrador.service.ts
│ ├── libros/
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── libro.controller.ts
│ │ ├── libro.module.ts
│ │ └── libro.service.ts
│ ├── prestamos/
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── prestamo.controller.ts
│ │ ├── prestamo.module.ts
│ │ └── prestamo.service.ts
│ └── usuarios/
│ ├── dto/
│ ├── entities/
│ ├── usuario.controller.ts
│ ├── usuario.module.ts
│ └── usuario.service.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts

 Autor: Xiodanny Vásquez Holguín

