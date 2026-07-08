// ========================================================
// 🖥️ MAQUETADOR DINÁMICO DE INTERFAZ: MISIÓN 5 (IA GOVERNANCE)
// ========================================================
function renderizarMision5(ejercicio, variante, contenedor) {
    // Resetear por completo las directrices DLP al inicializar el escenario
    m5Escudos = { anonimo: false, seguro: false, filtrado: false };

    contenedor.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
                <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">${ejercicio.id} — Gobernanza Tecnológica</span>
                <p class="text-slate-300 text-sm mt-1"><strong>Desafío Técnico:</strong> ${ejercicio.contextoSuperior}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-4 flex flex-col justify-between">
                    <div class="space-y-4">
                        <h4 class="text-sm font-bold text-blue-400 uppercase tracking-wider border-b border-slate-800 pb-2">Filtros de Seguridad</h4>
                        
                        <label class="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                            <input type="checkbox" id="m5-toggle-anonimo" onchange="actualizarPromptIA()" class="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500">
                            <div>
                                <p class="text-xs font-bold text-white">Anonimizar PII</p>
                                <p class="text-[10px] text-slate-400">Ofuscar automáticamente nombres y cédulas de identidad.</p>
                            </div>
                        </label>

                        <label class="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                            <input type="checkbox" id="m5-toggle-filtrado" onchange="actualizarPromptIA()" class="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500">
                            <div>
                                <p class="text-xs font-bold text-white">Ocultar Logística/Costos</p>
                                <p class="text-[10px] text-slate-400">Eliminar montos exactos y brechas operativas internas.</p>
                            </div>
                        </label>

                        <label class="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                            <input type="checkbox" id="m5-toggle-seguro" onchange="actualizarPromptIA()" class="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500">
                            <div>
                                <p class="text-xs font-bold text-white">Forzar Entorno Privado</p>
                                <p class="text-[10px] text-slate-400">Migrar la consulta a servidores con contrato de confidencialidad estatal.</p>
                            </div>
                        </label>
                    </div>

                    <button onclick="validarM5Sanitizer()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs tracking-wider transition cursor-pointer shadow-md">
                        🚀 PROCESAR EN IA SEGURO
                    </button>
                </div>

                <div class="md:col-span-2 bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden flex flex-col min-h-[300px]">
                    <div id="m5-ai-banner" class="bg-red-950 border-b border-red-800 p-3 text-red-400 font-bold text-xs animate-pulse font-mono">
                        ⚠️ NUBE PÚBLICA EXPUESTA (APRENDIZAJE ACTIVO)
                    </div>

                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div class="bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 rounded-xl shadow-inner">
                            <p id="m5-prompt-display" class="whitespace-pre-wrap select-none">${variante.promptOriginal}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
        </div>
    `;
}

/**
 * Filtro DLP dinámico en caliente.
 * Reemplaza de manera automática las cadenas sensibles basándose en los mapas de preguntas.js.
 */
function actualizarPromptIA() {
    const variante = estadoJuego.varianteActiva;
    const textoPrompt = document.getElementById('m5-prompt-display');
    const banner = document.getElementById('m5-ai-banner');
    
    if (!variante || !textoPrompt) return;
    
    let textoModificado = variante.promptOriginal;
    
    // Capturar estados de los conmutadores en tiempo real
    m5Escudos.anonimo = document.getElementById('m5-toggle-anonimo').checked;
    m5Escudos.filtrado = document.getElementById('m5-toggle-filtrado').checked;
    m5Escudos.seguro = document.getElementById('m5-toggle-seguro').checked;
    
    // Aplicar reemplazos dinámicos si el escudo correspondiente está encendido
    if (m5Escudos.anonimo && variante.reemplazosAnonimo) {
        variante.reemplazosAnonimo.forEach(r => {
            textoModificado = textoModificado.replaceAll(r.buscar, r.reemplazar);
        });
    }
    
    if (m5Escudos.filtrado && variante.reemplazosFiltrado) {
        variante.reemplazosFiltrado.forEach(r => {
            textoModificado = textoModificado.replaceAll(r.buscar, r.reemplazar);
        });
    }
    
    textoPrompt.innerHTML = textoModificado;
    
    // Modificar el ecosistema del chatbot según el entorno de red
    if (banner) {
        if (m5Escudos.seguro) {
            banner.className = "bg-emerald-950 border-b border-emerald-800 p-3 text-emerald-400 text-xs font-bold font-mono animate-fade-in";
            banner.innerText = "🛡️ INSTANCIA PRIVADA GUBERNAMENTAL ACTIVA";
        } else {
            banner.className = "bg-red-950 border-b border-red-800 p-3 text-red-400 text-xs font-bold font-mono animate-pulse";
            banner.innerText = "⚠️ NUBE PÚBLICA EXPUESTA (APRENDIZAJE ACTIVO)";
        }
    }
}

/**
 * Auditor de Cumplimiento Normativo de IA.
 * Detecta tanto la infra-sanitización como la sobre-sanitización innecesaria.
 */
function validarM5Sanitizer() {
    const variante = estadoJuego.varianteActiva;
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer || !variante) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border";

    let erroresAnotados = [];
    const sol = variante.solucionEsperada;

    // 1. Auditoría del Filtro de Anonimización (PII)
    if (m5Escudos.anonimo !== sol.anonimo) {
        if (sol.anonimo) erroresAnotados.push("❌ <strong>Infra-sanitización PII:</strong> El texto contiene nombres o cédulas reales de ciudadanos. Enviarlo así viola la Ley de Protección de Datos Personales.");
        else erroresAnotados.push("⚠️ <strong>Sobre-sanitización PII:</strong> Activaste el filtro de anonimización en un texto que ya viene limpio de datos personales, reduciendo la efectividad del análisis del modelo.");
    }

    // 2. Auditoría del Filtro de Logística y Finanzas
    if (m5Escudos.filtrado !== sol.filtrado) {
        if (sol.filtrado) erroresAnotados.push("❌ <strong>Infra-sanitización Financiera:</strong> Estás exponiendo presupuestos confidenciales o brechas vulnerables del departamento en servidores de IA comerciales.");
        else erroresAnotados.push("⚠️ <strong>Sobre-sanitización Financiera:</strong> Ocultaste términos que no vulneran la confidencialidad, lo que restará contexto útil para la respuesta de la IA.");
    }

    // 3. Auditoría de Ecosistema y Canal
    if (m5Escudos.seguro !== sol.seguro) {
        if (sol.seguro) erroresAnotados.push("❌ <strong>Violación de entorno seguro corporativo:</strong> La política institucional prohíbe el procesamiento de tareas del Estado en IA públicas abiertas sin contratos de privacidad Tier-1.");
    }

    // RESOLUCIÓN DE VERDICTO
    if (erroresAnotados.length === 0) {
        estadoJuego.puntuacion[5].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Gobernanza de IA Aprobada! 🏆</h4>
            <p class="text-slate-300 text-sm mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg text-xs cursor-pointer shadow-md">
                Siguiente Caso →
            </button>
        `;
    } else {
        estadoJuego.puntuacion[5].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-rose-400 font-bold text-lg">Fallo de Gobernanza de Datos ❌</h4>
            <p class="text-slate-300 text-xs mt-1 font-medium">Se han detectado las siguientes desviaciones normativas:</p>
            <ul class="text-xs text-slate-400 list-disc pl-5 mt-2 space-y-1">
                ${erroresAnotados.map(e => `<li>${e}</li>`).join('')}
            </ul>
        `;
    }
}