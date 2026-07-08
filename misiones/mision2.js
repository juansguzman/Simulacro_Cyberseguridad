// ========================================================
// 🖥️ MOTOR MODULAR: MISIÓN 2 — CAZADORES DE PHISHING
// ========================================================

/**
 * Maquetador visual de la bandeja de correo interactiva.
 * Configura las cabeceras ocultas y baraja los criterios del laboratorio.
 */
function renderizarMision2(ejercicio, variante, contenedor) {
    const razonesMezcladas = mezclarArray(variante.checklistRazones.map((razon, idx) => ({ ...razon, idxOriginal: idx })));
    
    contenedor.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
                <p class="text-slate-300 text-sm"><strong>Contexto de Operación:</strong> ${ejercicio.contextoSuperior}</p>
            </div>
            
            <div class="bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                <div class="bg-slate-900 p-4 border-b border-slate-800 space-y-2">
                    <div><span class="text-slate-500 font-medium">De:</span> <span class="text-red-400 font-mono font-semibold">${variante.emisor}</span></div>
                    <div><span class="text-slate-500 font-medium">Asunto:</span> <span class="text-white font-bold">${variante.asunto}</span></div>
                    
                    <button onclick="toggleCabeceras()" class="text-xs bg-slate-800 text-blue-400 mt-2 px-3 py-1 rounded transition hover:bg-slate-700 cursor-pointer">
                        ▶ Ver Cabeceras Técnicas (Código Oculto)
                    </button>
                    
                    <div id="bloque-metadatos" class="hidden mt-3 bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 space-y-1 border border-slate-800">
                        <p><span class="text-yellow-500">X-Originating-IP:</span> ${variante.metadatos.ipOrigen}</p>
                        <p><span class="text-yellow-500">Return-Path:</span> ${variante.metadatos.returnPath}</p>
                        <p><span class="text-yellow-500">Authentication-Results (SPF):</span> <span class="font-bold text-red-400">${variante.metadatos.spf}</span></p>
                        <p><span class="text-yellow-500">Authentication-Results (DKIM):</span> <span class="font-bold text-red-400">${variante.metadatos.dkim}</span></p>
                    </div>
                </div>
                
                <div class="p-6 bg-slate-900/40 text-slate-200 text-sm leading-relaxed space-y-4" id="cuerpo-mail-interactivo">
                    ${variante.mensajeCuerpo}
                </div>
            </div>
            
            <div class="flex flex-wrap gap-4 items-center justify-center pt-2" id="bloque-decisiones-iniciales">
                <p class="text-slate-300 font-medium w-full text-center mb-1">Tras evaluar la estructura, ¿cuál es tu veredicto inicial?</p>
                <button onclick="evaluarVeredictoMail(true)" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl cursor-pointer transition shadow-md">
                    🟢 Es un Correo Seguro / Legítimo
                </button>
                <button onclick="evaluarVeredictoMail(false)" class="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-xl cursor-pointer transition shadow-md">
                    🔴 Es un Ataque / Phishing
                </button>
            </div>
            
            <div id="panel-casillas-analisis" class="hidden bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4 shadow-inner">
                <h4 class="text-md font-bold text-yellow-400 flex items-center gap-2">
                    🔍 Laboratorio del Investigador: Selecciona las casillas que justifican los fallos del correo:
                </h4>
                <div class="space-y-2">
                    ${razonesMezcladas.map((razon) => `
                        <label class="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg hover:bg-slate-900 border border-slate-800 cursor-pointer transition select-none">
                            <input type="checkbox" data-index="${razon.idxOriginal}" class="checkbox-razon mt-1 w-4 h-4 text-blue-600 rounded bg-slate-700 border-slate-600 focus:ring-blue-500">
                            <span class="text-slate-300 text-sm">${razon.texto}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="pt-2">
                    <button onclick="validarCasillasAnalisis()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm cursor-pointer shadow-md">
                        Verificar Análisis Técnico
                    </button>
                </div>
            </div>

            <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
        </div>
    `;

    // Inicializar listeners de rastreo para URLs sospechosas
    configurarHoverEnlaces();
}

/**
 * Procesa el triaje inicial del aplicante.
 * Desbloquea el laboratorio si la amenaza fue descubierta o reporta el incidente si falló.
 */
function evaluarVeredictoMail(marcóSeguro) {
    const variante = estadoJuego.varianteActiva;
    const feedbackContainer = document.getElementById('feedback-container');
    const panelCasillas = document.getElementById('panel-casillas-analisis');
    
    if (!feedbackContainer || !panelCasillas) return;
    
    feedbackContainer.className = "hidden p-5 rounded-xl border";
    panelCasillas.classList.add('hidden');
    document.getElementById('bloque-decisiones-iniciales').classList.remove('opacity-40', 'pointer-events-none');

    // CASO A: Identificó correctamente la trampa. Desplegar laboratorio de evidencias.
    if (marcóSeguro === false && variante.esSeguro === false) {
        panelCasillas.classList.remove('hidden');
        document.getElementById('bloque-decisiones-iniciales').classList.add('opacity-40', 'pointer-events-none');
    }
    // CASO B: El correo es legítimo (M4-E6 Control de falsos positivos) y pasó limpio
    else if (marcóSeguro === true && variante.esSeguro === true) {
        estadoJuego.puntuacion[2].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Excelente decisión! 🛡️</h4>
            <p class="text-slate-300 mt-2">Efectivamente, tras la auditoría confirmamos que este mensaje es 100% legítimo e institucional. No presenta anomalías técnicas ni manipulación psicológica.</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    }
    // CASO C: Se confió y cayó en la trampa del atacante (Incidente)
    else if (marcóSeguro === true && variante.esSeguro === false) {
        estadoJuego.puntuacion[2].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-rose-400 font-bold text-lg">¡ALERTA DE INCIDENTE! 💥</h4>
            <p class="text-slate-300 mt-2">Confiar en este mensaje ha comprometido tus credenciales institucionales o infectado el equipo mediante el enlace simulado. Analiza detalladamente el remitente, los disparadores de urgencia y despliega las cabeceras técnicas para encontrar los fallos.</p>
        `;
    }
    // CASO D: Bloqueó un correo real e institucional (Falso Positivo operativo)
    else if (marcóSeguro === false && variante.esSeguro === true) {
        estadoJuego.puntuacion[2].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-yellow-500/10 border-yellow-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-yellow-400 font-bold text-lg">Falso Positivo Detectado ⚠️</h4>
            <p class="text-slate-300 mt-2">Has clasificado este correo como una amenaza, pero es una notificación segura y real de la organización. Bloquear este tipo de mensajes interrumpe los procesos operativos institucionales. Revisa con más atención.</p>
        `;
    }
}

/**
 * Valida de forma estricta las casillas de evidencias.
 * Castiga omisiones o selecciones erróneas (distractores).
 */
function validarCasillasAnalisis() {
    const variante = estadoJuego.varianteActiva;
    const checkboxes = document.querySelectorAll('.checkbox-razon');
    const feedbackContainer = document.getElementById('feedback-container');
    let analisisPerfecto = true;

    checkboxes.forEach(cb => {
        const idx = parseInt(cb.getAttribute('data-index'));
        if ((variante.checklistRazones[idx].esCorrecta && !cb.checked) || (!variante.checklistRazones[idx].esCorrecta && cb.checked)) {
            analisisPerfecto = false;
        }
    });

    if (analisisPerfecto) {
        estadoJuego.puntuacion[2].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Análisis Técnico Completado! 🔎</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    } else {
        estadoJuego.puntuacion[2].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-rose-400 font-bold text-lg">Análisis de Laboratorio Erróneo ❌</h4>
            <p class="text-slate-300 mt-2">Has fallado en identificar todos los vectores de riesgo reales del correo, o seleccionaste un distractor que no aplica a este expediente. ¡Vuelve a revisar bajo el capó!</p>
        `;
    }
}

/**
 * Conmutador de visibilidad para las cabeceras técnicas.
 */
function toggleCabeceras() {
    const bloque = document.getElementById('bloque-metadatos');
    if (bloque) intentToggle = bloque.classList.toggle('hidden');
}

/**
 * Despliega un falso tooltip de barra de estado inferior para
 * emular la técnica preventiva de previsualización (Ojo de Halcón).
 */
function configurarHoverEnlaces() {
    const enlaces = document.querySelectorAll('.preview-link');
    const tooltip = document.getElementById('url-tooltip');
    if (!tooltip) return;
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseover', (e) => {
            const realUrl = e.target.getAttribute('data-real-url');
            tooltip.innerText = `🔍 Enlace real apunta a: ${realUrl}`;
            tooltip.classList.remove('hidden');
            tooltip.style.left = `${e.target.offsetLeft}px`;
            tooltip.style.top = `${e.target.offsetTop + 28}px`;
        });

        enlace.addEventListener('mouseout', () => {
            tooltip.classList.add('hidden');
        });
    });
}