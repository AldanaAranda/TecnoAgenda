document.getElementById('formularioInicioSesion').addEventListener('submit', function (event) {
    event.preventDefault();

    // valores de los campos
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const errorCorreo = document.getElementById('errorCorreo');
    const errorContrasena = document.getElementById('errorContrasena');

    // Limpiar mensajes de error
    errorCorreo.textContent = '';
    errorContrasena.textContent = '';

    // Validación de correo y contraseña
    let esValido = true;

    if (!correo) {
        errorCorreo.textContent = 'El correo es obligatorio.';
        esValido = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        errorCorreo.textContent = 'Por favor, ingresa un correo válido.';
        esValido = false;
    }

    if (!contrasena) {
        errorContrasena.textContent = 'La contraseña es obligatoria.';
        esValido = false;
    } else if (contrasena.length < 6) {
        errorContrasena.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        esValido = false;
    }

    // Simulación de autenticación (reemplazar esto con una API real)
    const usuarioRegistrado = {
        email: 'usuario@ejemplo.com',
        password: '123456'
    };

    if (esValido) {
        if (correo === usuarioRegistrado.email && contrasena === usuarioRegistrado.password) {
            // Guarda en el Local Storage si se selecciona "Recordarme"
            if (document.getElementById('recordarme').checked) {
                localStorage.setItem('correo', correo);
            } else {
                localStorage.removeItem('correo');
            }

            // Redirigir al usuario o mostrar un mensaje de éxito
            window.location.href = "../pages/home.html"
            //sacarlo y concetarlo al home, lo mismo que abajo
            // window.location.href = 'pagina_principal.html'; // Redirigir a otra página
        } else {
            alert('Correo o contraseña incorrectos');
            //hacerlo en html
            //Si condice lo lleva a home.html, sino mostrar error al usuairo (no vale console.log)
        }
    }
});

// Cargar correo guardado en Local Storage al cargar la página
window.addEventListener('load', function () {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        document.getElementById('correo').value = correoGuardado;
        document.getElementById('recordarme').checked = true;
    }
});


//Verificar si el usuario ya está autenticado
const user = localStorage.getItem("tecnoagenda");
if (user) goHome();

function goHome() {
    window.location.href = '../pages/home.html';
}

function login() {
    localStorage.setItem("tecnoagenda", JSON.stringify({ name: 'tecnoagenda' }));
    goHome();
}

// ... existing code ...

//Manejador para mostrar/ocultar contraseña
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('contrasena');
    const icon = this.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});  