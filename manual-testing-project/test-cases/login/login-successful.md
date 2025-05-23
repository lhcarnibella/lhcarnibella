# Caso de prueba: Login exitoso

**ID:** TC-001  
**Nombre:** Login con credenciales válidas  
**Funcionalidad:** Inicio de sesión  
**Prioridad:** Alta  
**Precondiciones:**
- El usuario debe tener una cuenta creada previamente.

---

## Pasos

| Paso | Acción                        | Resultado esperado                  |
|------|-------------------------------|-------------------------------------|
| 1    | Navegar a la página de login  | Se carga la página correctamente   |
| 2    | Ingresar usuario válido       | Se muestra el texto ingresado      |
| 3    | Ingresar contraseña válida    | Se muestra el texto ingresado      |
| 4    | Hacer clic en “Login”         | Se redirige al dashboard            |

---

## Resultado:
- ✅ Esperado: El usuario accede correctamente al sistema y visualiza el dashboard.
- ❌ Alternativo: Si las credenciales son inválidas, se muestra mensaje de error.
