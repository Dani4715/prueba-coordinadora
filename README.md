# Prueba Técnica: Coordinadora

Este proyecto implementa pruebas automatizadas de una API utilizando **Playwright** como framework de pruebas y el **patrón Screenplay** con **Serenity/JS**.

# Objetivo:

Este proyecto tiene como objetivo automatizar la validación de una API de guías, verificando tanto casos exitosos (crear y consultar guías) como validaciones de error (por ejemplo, datos faltantes o referencias duplicadas). Se implementa usando el patrón Screenplay para lograr pruebas más legibles, mantenibles y reutilizables.

## Descripción General

### Dependencias Principales

- **@playwright/test**: Framework de pruebas.
- **Serenity/JS**: 
  - `@serenity-js/core`
  - `@serenity-js/rest`
---

- **actors/**: Define los actores (por ejemplo, `Usuario.ts`) que representan a los usuarios y sus habilidades.
- **tasks/**: Contiene las tareas o acciones que los actores realizan (por ejemplo, crear o consultar guías).
- **questions/**: Contiene las preguntas que permiten extraer y validar datos de las respuestas de la API.
- **utils/**: Archivos de configuración, como `configuracionApi.ts`.
- **test/**: Scripts de prueba que orquestan la ejecución de las tareas y validan resultados.

---
## Requisitos 

El proyecto requiere:

- Node.js (versión 14 o superior recomendada)
- Playwright (con `@playwright/test`)
- Serenity/JS (por ejemplo, `@serenity-js/core` y `@serenity-js/rest`)
  
## 🧪 Pruebas

Para ejecutar las pruebas automatizadas, utiliza:

```bash
npx playwright test
```

## ✍️ Autor

- **Daniela Guevara**
  - [GitHub](https://github.com/Dani4715)
  - [LinkedIn](https://www.linkedin.com/in/daniela-guevara-54b4a9248)

---
