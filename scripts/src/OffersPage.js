/**
 * OffersPage
 * Maneja la lógica interactiva de la página de Ofertas:
 *  1. Carruseles de productos (scroll con botones prev/next)
 *  2. Modal de ingredientes (abrir, cerrar con botón y click fuera)
 */
export class OffersPage {
    /** @type {NodeList} Todos los contenedores de carrusel */
    #carousels;
    /** @type {HTMLDialogElement} Modal de ingredientes */
    #modal;
    /** @type {HTMLElement} Párrafo de texto dentro del modal */
    #modalText;
    /** @type {HTMLElement} Botón para cerrar el modal */
    #closeBtn;
    /** @type {NodeList} Botones "Ver Ingredientes" de cada producto */
    #infoBtns;
    /** Cantidad de píxeles a desplazar por clic (aprox. un card + gap) */
    static #SCROLL_AMOUNT = 300;

    constructor() {
        this.#carousels = document.querySelectorAll(".carousel-container");
        this.#modal     = document.getElementById("ingredientsModal");
        this.#modalText = document.getElementById("modalIngredientsText");
        this.#closeBtn  = document.getElementById("closeModalBtn");
        this.#infoBtns  = document.querySelectorAll(".info-btn");
    }

    /**
     * Inicializa los carruseles y el modal de ingredientes.
     * @returns {boolean}
     */
    init() {
        this.#initCarousels();
        this.#initIngredientsModal();
        return true;
    }

    // ─── Métodos privados ────────────────────────────────────────────────────

    /**
     * Conecta los botones prev/next a cada carrusel encontrado en el DOM.
     */
    #initCarousels() {
        this.#carousels.forEach(carousel => {
            const track   = carousel.querySelector(".carousel-track");
            const prevBtn = carousel.querySelector(".prev-btn");
            const nextBtn = carousel.querySelector(".next-btn");

            if (!track || !prevBtn || !nextBtn) return;

            prevBtn.addEventListener("click", () => {
                track.scrollBy({ left: -OffersPage.#SCROLL_AMOUNT, behavior: "smooth" });
            });

            nextBtn.addEventListener("click", () => {
                track.scrollBy({ left: OffersPage.#SCROLL_AMOUNT, behavior: "smooth" });
            });
        });
    }

    /**
     * Inicializa el modal de ingredientes: abrir, cerrar con botón
     * y cerrar al hacer clic fuera del cuadro de diálogo.
     */
    #initIngredientsModal() {
        if (!this.#modal || !this.#modalText || !this.#closeBtn) {
            console.warn("OffersPage: elementos del modal de ingredientes no encontrados.");
            return;
        }

        // Abrir modal al hacer clic en cualquier botón de info
        this.#infoBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const ingredients = e.currentTarget.getAttribute("data-ingredients");
                if (ingredients) {
                    this.#openModal(ingredients);
                }
            });
        });

        // Cerrar con el botón X
        this.#closeBtn.addEventListener("click", () => this.#closeModal());

        // Cerrar al hacer clic fuera del cuadro del dialog
        this.#modal.addEventListener("click", (e) => {
            const rect = this.#modal.getBoundingClientRect();
            const clickedOutside =
                e.clientX < rect.left  ||
                e.clientX > rect.right ||
                e.clientY < rect.top   ||
                e.clientY > rect.bottom;

            if (clickedOutside) this.#closeModal();
        });
    }

    /**
     * Muestra el modal con el texto de ingredientes.
     * @param {string} ingredients - Texto a mostrar
     */
    #openModal(ingredients) {
        this.#modalText.textContent = ingredients;
        this.#modal.showModal();
    }

    /**
     * Cierra el modal de ingredientes.
     */
    #closeModal() {
        this.#modal.close();
    }
}
