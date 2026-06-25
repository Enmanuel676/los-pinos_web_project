/**
 * main.js — Punto de entrada de la aplicación Los Pinos.
 *
 * Se encarga de detectar qué página está activa (mediante body#id)
 * e instanciar únicamente las clases necesarias para esa vista.
 *
 * Clases disponibles:
 *  · MobileMenu  → menú hamburguesa (común a todas las páginas)
 *  · Gallery     → lightbox de imágenes (solo en gallery.html)
 *  · OffersPage  → carrusel + modal de ingredientes (solo en offers.html)
 */

import { MobileMenu } from "./src/MobileMenu.js";
import { Gallery }    from "./src/Gallery.js";
import { OffersPage } from "./src/OffersPage.js";

document.addEventListener("DOMContentLoaded", () => {

    // ── Menú móvil: presente en todas las páginas ─────────────────────────
    new MobileMenu().init();

    // ── Módulos por página ────────────────────────────────────────────────
    const pageId = document.body.id; // 'home' | 'gallery' | 'offers'

    if (pageId === "gallery") {
        new Gallery().init();
    }

    if (pageId === "offers") {
        new OffersPage().init();
    }

});
