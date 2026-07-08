// ========================================================
// 🖥️ MOTOR MODULAR: MISIÓN 1 — FORTALEZAS DIGITALES
// ========================================================

/**
 * Maquetador visual para los escenarios de robustez de contraseñas.
 * Baraja las opciones dinámicamente utilizando el algoritmo global del index.
 */
function renderizarMision1(ejercicio, variante, contenedor) {
    const opcionesMezcladas = mezclarArray(variante.opciones.map((opcion, idx) => ({ ...opcion, idxOriginal: idx })));
    
    contenedor.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
                <h3 class="text-xl font-bold text-white">${ejercicio.titulo}</h3>
            </div>
            
            <div class="bg-slate-700/50 p-5 rounded-xl border border-slate-600 space-y-3">
                <p><strong>Identidad:</strong> ${variante.nombre}</p>
                <p class="text-slate-300 italic">"${variante.contexto}"</p>
                <p><strong>Clave Propuesta:</strong> <code class="bg-red-500/20 text-red-300 px-2 py-1 rounded font-mono text-sm">${variante.contrasenaPropuesta}</code></p>
            </div>
            
            <div class="grid grid-cols-1 gap-3">
                ${opcionesMezcladas.map(op => `
                    <button onclick="evaluarRespuestaM1(${op.idxOriginal})" class="w-full text-left bg-slate-700 hover:bg-slate-600 text-slate-100 p-4 rounded-xl border border-slate-600 transition flex justify-between items-center group cursor-pointer shadow-md">
                        <span>${op.texto}</span>
                        <span class="text-slate-500 group-hover:text-blue-400 transition text-lg">→</span>
                    </button>
                `).join('')}
            </div>
            
            <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
        </div>
    `;
}

/**
 * Evaluador analítico para Misión 1.
 * Calcula los aciertos y fallos en tiempo real y actualiza el estado global de telemetría.
 */
function evaluarRespuestaM1(indiceOpcion) {
    const variante = estadoJuego.varianteActiva;
    const opcionSeleccionada = variante.opciones[indiceOpcion];
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border";

    if (opcionSeleccionada.esCorrecta) {
        // Asignación matemática de aciertos en el índice de la misión correspondiente
        estadoJuego.puntuacion[1].puntos++;
        
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Análisis Correcto! 🛡️</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionError}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">
                Siguiente Caso →
            </button>
        `;
    } else {
        // Registro de desviaciones o fallas del aplicante
        estadoJuego.puntuacion[1].fallos++;
        
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-rose-400 font-bold text-lg">Veredicto Incorrecto ❌</h4>
            <p class="text-slate-300 mt-2">Esa decisión comprometería la cuenta institucional del colaborador. Revisa detalladamente los datos de su entorno en el expediente y vuelve a intentarlo.</p>
        `;
    }
};