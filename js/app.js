// Espera a que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener("DOMContentLoaded", () => {
    const devOrDesigner = new DevOrDesigner("#occupation"); // Instancia la clase DevOrDesigner y la asocia al botón
});

class DevOrDesigner {
    button = null; // Variable para almacenar el botón

    /**
     * Constructor de la clase
     * @param {string} buttonEl - Selector CSS del botón a utilizar
     */
    constructor(buttonEl) {
        this.button = document.querySelector(buttonEl); // Encuentra el botón en el DOM
        if (this.button) {
            this.button.addEventListener("click", this.occupationToggle.bind(this)); // Asocia el evento click al botón
        }
    }

    /** 
     * @type {"developer" | "designer"} 
     * Variable para almacenar la ocupación seleccionada
     */
    _occupation = "developer";

    /** 
     * Obtiene la ocupación actual
     * @returns {string} La ocupación actual (developer o designer)
     */
    get occupation() {
        return this._occupation;
    }

    /**
     * Establece la ocupación y actualiza el botón en consecuencia
     * @param {string} value - Nueva ocupación
     */
    set occupation(value) {
        this._occupation = value;
        if (this.button) {
            this.button.setAttribute("aria-labelledby", this._occupation); // Actualiza el atributo aria del botón
        }
    }

    /** 
     * Alterna la ocupación entre "developer" y "designer"
     * También cambia el color de fondo a blanco cuando se presiona el botón
     */
    occupationToggle() {
        this.occupation = this.occupation === "developer" ? "designer" : "developer"; // Alterna la ocupación
        document.body.classList.toggle("background-white"); // Cambia el color de fondo a blanco
    }
}
