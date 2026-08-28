# Caso de Prueba: Login Fallido - Intento de SQL Injection

**ID:** TC-006
**Funcionalidad:** Login  
**Prioridad:** Alta (Seguridad)  
**Precondición:** N/A  
**Ambiente:** [https://www.demoblaze.com/](https://www.demoblaze.com/)

## 🔢 Pasos para ejecutar
1. Ingresar a la página principal de Demoblaze.
2. Hacer clic en el botón **"Log in"**.
3. En el campo "Username", ingresar: `admin' OR '1'='1`
4. En el campo "Password", ingresar cualquier valor (por ejemplo: `123456`)
5. Hacer clic en el botón **"Log in"**.

## Criterios de aceptación
- El sistema **rechaza el intento** con un mensaje de error, como si las credenciales fueran incorrectas.
- El usuario **no** accede al sistema.
- No se muestra ninguna información sensible.
- No se produce comportamiento inesperado en la aplicación.
