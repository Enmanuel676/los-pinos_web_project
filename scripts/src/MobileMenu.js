/**
 * MobileMenu
 * Maneja el menú de navegación móvil (popup hamburguesa).
 * Es común a todas las páginas del sitio.
 */
export class MobileMenu {
    /** @type {HTMLElement} Botón hamburguesa */
    #btnMenu;
    /** @type {HTMLElement} Contenedor del menú popup */
    #mobileMenu;
    /** @type {HTMLElement} Navbar principal */
    #navBar;

    constructor() {
        this.#btnMenu    = document.querySelector(".menu-toggle");
        this.#mobileMenu = document.getElementById("mobile-menu");
        this.#navBar     = document.querySelector(".navbar");
    }

    /**
     * Inicializa el menú móvil.
     * Retorna false si los elementos requeridos no existen en el DOM.
     * @returns {boolean}
     */
    init() {
        if (!this.#btnMenu || !this.#mobileMenu) {
            console.warn("MobileMenu: botón o contenedor no encontrados en el DOM.");
            return false;
        }

        // Abrir / cerrar al hacer clic en el botón hamburguesa
        this.#btnMenu.addEventListener("click", () => this.#toggle());

        // Cerrar al hacer clic en el fondo oscuro (fuera del contenedor interno)
        this.#mobileMenu.addEventListener("click", (e) => {
            if (e.target === this.#mobileMenu) {
                this.#close();
            }
        });

        // Botones de navegación que cierran el menú al hacer clic
        this.#bindNavigationButtons();

        return true;
    }

    // ─── Métodos privados ────────────────────────────────────────────────────

    /**
     * Abre o cierra el menú alternando clases y el scroll del body.
     */
    #toggle() {
        this.#mobileMenu.classList.toggle("hidden");

        if (this.#navBar) {
            this.#navBar.className = this.#mobileMenu.classList.contains("hidden")
                ? "navbar"
                : "navbar__hidden";
        }

        document.body.style.overflow = this.#mobileMenu.classList.contains("hidden")
            ? "auto"
            : "hidden";
    }

    /**
     * Cierra el menú y restaura el scroll.
     */
    #close() {
        this.#mobileMenu.classList.add("hidden");
        if (this.#navBar) this.#navBar.className = "navbar";
        document.body.style.overflow = "auto";
    }

    /**
     * Vincula los botones de navegación dentro del popup para que
     * cierren el menú al hacer clic (solo si existen en la página actual).
     */
    #bindNavigationButtons() {
        // Todos los enlaces dentro del popup cierran el menú
        const popupLinks = this.#mobileMenu.querySelectorAll("a");
        popupLinks.forEach(link => {
            link.addEventListener("click", () => this.#close());
        });
    }
}
