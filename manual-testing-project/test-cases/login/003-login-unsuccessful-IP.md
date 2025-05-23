# Caso de Prueba: Login Fallido - Usuario Inválido

**ID:** TC-003  
**Nombre:** Login con password inválido
**Funcionalidad:** Inicio de sesión  
**Prioridad:** Alta  
**Precondiciones:**
- El usuario debe tener una cuenta creada.
  
**Ambiente:** [https://www.demoblaze.com/](https://www.demoblaze.com/)


---

## Pasos

| Paso | Acción                        | Resultado esperado                  |
|------|-------------------------------|-------------------------------------|
| 1    | Navegar a la página de login  | Se carga la página correctamente   |
| 2    | Ingresar usuario válido       | Se muestra el texto ingresado      |
| 3    | Ingresar contraseña inválida  | Se muestra el texto enmascarado      |
| 4    | Hacer clic en “Login”         | Se muestra el mensaje `"Wrong password."`|

---

## Resultado:
- ✅ Esperado: El usuario no puede acceder al sitio.
- ❌ Alternativo: Si las credenciales son inválidas, se muestra mensaje de error.
