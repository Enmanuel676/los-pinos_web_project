export function popup(){
    const btnmenu = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const navBar= document.querySelector(".navbar")
    if (!btnmenu || !mobileMenu) {
        console.error("Menú móvil o botón no encontrados en el DOM");
        return;
    }


    // Mostrar u ocultar el menú al hacer clic en el botón de hamburguesa
    btnmenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        navBar.className= "navbar__hidden";
        
        // Bloquear o desbloquear el scroll
        if (mobileMenu.classList.contains("hidden")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    });

    // Cerrar el menú si hacen clic fuera del contenedor (en el fondo oscuro)
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add("hidden");
            navBar.className="navbar";
            document.body.style.overflow = "auto";
        }
    });

}