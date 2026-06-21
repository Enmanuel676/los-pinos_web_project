export function popup(){
    const btnmenu = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const navBar= document.querySelector(".navbar")
    const home= document.querySelector(".popup__option_home")
    const contact= document.querySelector(".popup__option_contact")
    const gallery=document.querySelector(".gallery__body")
    const contactBtn= document.getElementById("option-contact")
    const homeBtn= document.getElementById("option-home")
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


   

    // Cerrar el menú si hacen clic fuera del contenedor (en el fondo oscuro)
   mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.toggle("hidden");
            comeBack(gallery)
            comeBack(home)
            
        }
    });

    function exitInHome(){
mobileMenu.classList.toggle("hidden");
    navBar.className= "navbar";
    document.body.style.overflow = "auto";
    }
   contactBtn.addEventListener('click', ()=>{
    exitInHome()
   })
   homeBtn.addEventListener("click", ()=>{
  exitInHome()
   })

}