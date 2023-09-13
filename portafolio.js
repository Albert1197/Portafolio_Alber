let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="nav-responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Constante para definir la distancia de desplazamiento necesaria
const DISTANCIA_DESEADA = 300;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementsByClassName("progreso");
    const distanciaSkills = window.innerHeight - skills[0].getBoundingClientRect().top;

    if (distanciaSkills >= DISTANCIA_DESEADA) {
        const habilidades = ["javascript", "htmlcss", "wordpress", "microsoftoffice", "comunicacion", "trabajo", "creatividad", "dedicacion"];

        for (let i = 0; i < habilidades.length; i++) {
            skills[i].classList.add(habilidades[i]);
        }
    }
}

// Detectar el scrolling para aplicar la animación de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);
