Caso de Prueba - Login Fallido - Campos con espacios en blanco

**Funcionalidad:** Login  
**Prioridad:** Media  
**Precondición:** N/A  
**Ambiente:** [https://www.demoblaze.com/](https://www.demoblaze.com/)

## 🔢 Pasos para ejecutar
1. Ingresar a la página principal de Demoblaze.
2. Hacer clic en el botón **"Log in"**.
3. En el campo "Username", ingresar espacios en blanco (por ejemplo: `"   "`).
4. En el campo "Password", ingresar espacios en blanco (por ejemplo: `"   "`).
5. Hacer clic en el botón **"Log in"**.

## Criterios de Aceptación
- Aparece una alerta indicando que los campos son inválidos o vacíos.
- El usuario **no** inicia sesión.
- El botón **"Log in"** sigue visible.
