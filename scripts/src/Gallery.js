/**
 * Gallery
 * Maneja el lightbox (modal de imagen ampliada) en la página de galería.
 */
export class Gallery {
    /** @type {NodeList} Ítems de la galería */
    #galleryItems;
    /** @type {HTMLDialogElement} Modal de imagen */
    #modal;
    /** @type {HTMLImageElement} Imagen dentro del modal */
    #modalImg;
    /** @type {HTMLElement} Caption del modal */
    #modalCaption;
    /** @type {HTMLElement} Botón para cerrar el modal */
    #closeBtn;

    constructor() {
        this.#galleryItems  = document.querySelectorAll(".gallery-item");
        this.#modal         = document.getElementById("imageModal");
        this.#modalImg      = document.getElementById("modalImage");
        this.#modalCaption  = document.getElementById("modalCaption");
        this.#closeBtn      = document.querySelector(".close-modal");
    }

    /**
     * Inicializa todos los event listeners de la galería.
     * Retorna false si los elementos del modal no existen en el DOM.
     * @returns {boolean}
     */
    init() {
        if (!this.#modal || !this.#modalImg || !this.#closeBtn) {
            console.warn("Gallery: elementos del modal no encontrados en el DOM.");
            return false;
        }

        // Abrir modal al hacer clic en un ítem
        this.#galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                const img     = item.querySelector("img");
                if (img) {
                    const caption = item.querySelector(".gallery-overlay span")?.textContent ?? "";
                    this.#openModal(img.src, caption);
                }
            });
        });

        // Cerrar con el botón X
        this.#closeBtn.addEventListener("click", () => this.#closeModal());

        // Cerrar al hacer clic en el fondo del modal (fuera de la imagen)
        this.#modal.addEventListener("click", (e) => {
            if (e.target === this.#modal) {
                this.#closeModal();
            }
        });

        // Asegurar que al cerrar el modal (por ejemplo, con Escape) se restaure el scroll
        this.#modal.addEventListener("close", () => {
            document.body.style.overflow = "";
        });

        return true;
    }

    // ─── Métodos privados ────────────────────────────────────────────────────

    /**
     * Abre el modal con la imagen y el caption proporcionados.
     * @param {string} src     - URL de la imagen a mostrar
     * @param {string} caption - Texto del caption
     */
    #openModal(src, caption) {
        this.#modalImg.src             = src;
        this.#modalCaption.textContent = caption;
        this.#modal.showModal();
        document.body.style.overflow = "hidden";
    }

    /**
     * Cierra el modal y restaura el scroll del body.
     */
    #closeModal() {
        this.#modal.close();
        // Nota: document.body.style.overflow = "" se ejecutará a través del evento 'close' del modal
    }
}