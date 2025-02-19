const navBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid"> 
            <a href="#" class="navbar-brand">Agencia de Viaje</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link active">Home</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">Alojamiento</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">Paquete</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">Asistencia al viajero</a>
                    </li>
                </ul>
                <button class="btn btn-danger ms-auto"><i class="bi bi-box-arrow-left"></i> Log Out</button>
            </div>
        </div>
    </nav>
`
let navContainer = document.querySelector('header');
window.addEventListener('load', () => {
    navContainer.innerHTML = navBar;
})