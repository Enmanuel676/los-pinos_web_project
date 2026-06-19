export function popup(){
    const btnmenu = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const navBar= document.querySelector(".navbar")
    const home= document.querySelector(".popup__option_home")
    const contact= document.querySelector(".popup__option_contact")
    const gallery=document.querySelector(".gallery__body")
    console.log(gallery)
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
    function comeBack(){
 mobileMenu.classList.toggle("hidden");
        navBar.className= "navbar";
        document.body.style.overflow = "auto";
    }

contact.addEventListener("click", ()=>{
      comeBack()
        
})
home.addEventListener("click", ()=>{
      comeBack()
        
})
    // Cerrar el menú si hacen clic fuera del contenedor (en el fondo oscuro)
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add("hidden");
            navBar.className="navbar";
            document.body.style.overflow = "auto";
        }
    });

}