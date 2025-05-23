# Caso de Prueba: Login Fallido - Usuario Inexistente

**ID:** TC-002  
**Nombre:** Login con usuario inválido
**Funcionalidad:** Inicio de sesión  
**Prioridad:** Alta  
**Precondiciones:**
- El usuario **NO** debe tener una cuenta creada.
**Ambiente:** [https://www.demoblaze.com/](https://www.demoblaze.com/)


---

## Pasos

| Paso | Acción                        | Resultado esperado                  |
|------|-------------------------------|-------------------------------------|
| 1    | Navegar a la página de login  | Se carga la página correctamente   |
| 2    | Ingresar usuario inválido     | Se muestra el texto ingresado      |
| 3    | Ingresar contraseña           | Se muestra el texto enmascarado      |
| 4    | Hacer clic en “Login”         | Se redirige al dashboard            |

---

## Resultado:
- ✅ Esperado: El usuario no puede acceder al sitio.
- ❌ Alternativo: Si las credenciales son inválidas, se muestra mensaje de error.
