# Caso de Prueba: Login - Campos vacíos

**ID:** TC_LOGIN_001  
**Título:** Validar mensaje de error al dejar el campo de usuario o contraseña vacío  
**Funcionalidad:** Login  
**Prioridad:** Alta  
**Precondición:** Estar en la página de login  
**Ambiente:** [https://www.demoblaze.com/](https://www.demoblaze.com/)
---

## Escenarios

### Escenario 1: Campo usuario vacío

| Paso | Acción                                  | Resultado Esperado                                |
|------|------------------------------------------|---------------------------------------------------|
| 1    | Navegar a la página de login             | Se muestra el formulario de login                 |
| 2    | Ingresar contraseña válida               | El campo contraseña se completa correctamente     |
| 3    | Dejar el campo usuario vacío             | -                                                 |
| 4    | Hacer clic en el botón "Iniciar sesión" | Se muestra mensaje de error: "Usuario requerido"  |

---

### Escenario 2: Campo contraseña vacío

| Paso | Acción                                  | Resultado Esperado                                  |
|------|------------------------------------------|-----------------------------------------------------|
| 1    | Navegar a la página de login             | Se muestra el formulario de login                   |
| 2    | Ingresar usuario válido                  | El campo usuario se completa correctamente          |
| 3    | Dejar el campo contraseña vacío          | -                                                   |
| 4    | Hacer clic en el botón "Iniciar sesión" | Se muestra mensaje de error: "Contraseña requerida" |

---

### Escenario 3: Ambos campos vacíos

| Paso | Acción                                  | Resultado Esperado                                          |
|------|------------------------------------------|-------------------------------------------------------------|
| 1    | Navegar a la página de login             | Se muestra el formulario de login                           |
| 2    | No completar ningún campo                | -                                                           |
| 3    | Hacer clic en el botón "Iniciar sesión" | Se muestran mensajes de error: "Usuario requerido" y "Contraseña requerida" |

---

## Criterios de Aceptación

- Se deben mostrar mensajes claros cuando los campos estén vacíos.
- No debe enviarse el formulario si falta alguno de los campos requeridos.
