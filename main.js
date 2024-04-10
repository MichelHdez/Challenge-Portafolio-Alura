window.addEventListener('load', () => {
    const form = document.querySelector('#formulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const asuntoValor = asunto.value.trim();
        const mensajeValor = mensaje.value.trim();

        if (!nombreValor) {
            validaFalla(nombre, 'Campo Vacío')
        } else {
            validaOk(nombre)
        }

        if (!emailValor) {
            validaFalla(email, 'Campo Vacío')
        } else if(!validaEmail(emailValor)) {
            validaFalla(email, 'Email no valido')
        } else {
            validaOk(email)
        }

        if (!asuntoValor) {
            validaFalla(asunto, 'Campo Vacío')
        } else {
            validaOk(asunto)
        }

        if (!mensajeValor) {
            validaFalla(mensaje, 'Campo Vacío')
        } else {
            validaOk(mensaje)
        }
    }

    const validaFalla = (input, mensaje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = mensaje

        formControl.className = 'formControl falla'
    }

    const validaOk = (input, mensaje) => {
        const formControl = input.parentElement
        formControl.className = 'formControl ok'
    }

    const validaEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
});