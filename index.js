//Navbar
const navElements = [
    {title:'Home',link:'./home.html'},
    {title:'Alojamiento',link:'./home.html'},
    {title:'Paquete',link:'./home.html'},
    {title:'Asistencia al viajero',link:'./home.html'},
]

const navBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid"> 
            <a href="#" class="navbar-brand">Agencia de Viaje</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                   
${navElements.map(e =>{
    return ` <li class="nav-item">
                    <a class="nav-link" href=${e.link}>${e.title}</a>  
                    </li>
    `
}).join('')}
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

//Footer
const footerContent = `
    <footer class="text-start py-3" style="background-color: #ff6f91; color: white;">
        <p>Alumna: María Florencia Hernández <br><br>
        Examen Final Libre Aplicaciones Web I <br><br>
        IES - Análisis de Sistemas de Computación <br>
        Docente: Angel Magaquian <br>
        </p>
    </footer>
`;

let footerContainer = document.querySelector('footer');
window.addEventListener('load', () => {
    footerContainer.innerHTML = footerContent;
});