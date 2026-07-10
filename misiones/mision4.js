// ========================================================
// 🖥️ MOTOR MODULAR: MISIÓN 4 — COLABORACIÓN SEGURA
// ========================================================

/**
 * Maquetador maestro de la Misión 4.
 * Evalúa el tipo de ejercicio (configurador, temporizador o versiones) 
 * y despliega la interfaz reactiva correspondiente limpiando hilos de tiempo previos.
 */
function renderizarMision4(ejercicio, variante, contenedor) {
    if (m4IntervaloReloj) clearInterval(m4IntervaloReloj);

    // ESCENARIO A: ASISTENTE DE CONFIGURACIÓN DE ENLACES GRANULARES (PERMISOS)
    if (ejercicio.tipo === "configurador" || ejercicio.type === "configurador") {
        contenedor.innerHTML = `
            <div class="space-y-6 animate-fade-in">
                <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20 space-y-2">
                    <div>
                        <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">${ejercicio.id} — ${ejercicio.titulo}</span>
                        <p class="text-slate-300 text-sm mt-1"><strong>Situación:</strong> ${ejercicio.contextoSuperior}</p>
                    </div>
                    <div class="text-xs text-slate-400 border-t border-blue-500/10 pt-2">
                        <strong>Destinatario:</strong> ${variante.solicitante} | <strong>Archivo:</strong> ${variante.archivoNombre}
                    </div>
                </div>

                <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md mx-auto space-y-4 shadow-xl">
                    <h4 class="text-sm font-bold text-white border-b border-slate-800 pb-2">⚙️ Configuración de Caja Fuerte OneDrive</h4>
                    
                    <label class="block">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Nivel de Acceso</span>
                        <select id="m4-select-lectura" class="w-full bg-slate-800 border border-slate-700 p-2.5 rounded-xl text-xs font-semibold text-blue-400 focus:outline-none focus:border-blue-500">
                            <option value="editar">✏️ Puede Editar</option>
                            <option value="lectura">👁️ Solo Lectura</option>
                        </select>
                    </label>
                    
                    <label class="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                        <div>
                            <p class="text-xs font-bold text-white">Bloquear Descarga Local</p>
                            <p class="text-[10px] text-slate-400">Evita la generación de fotocopias externas.</p>
                        </div>
                        <input type="checkbox" id="m4-check-descarga" class="w-4 h-4 text-blue-600 rounded bg-slate-700 border-slate-600 focus:ring-blue-500">
                    </label>

                    <label class="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                        <div>
                            <p class="text-xs font-bold text-white">Contraseña Obligatoria</p>
                            <p class="text-[10px] text-slate-400">Exige clave de validación al receptor.</p>
                        </div>
                        <input type="checkbox" id="m4-check-password" class="w-4 h-4 text-blue-600 rounded bg-slate-700 border-slate-600 focus:ring-blue-500">
                    </label>

                    <label class="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer select-none">
                        <div>
                            <p class="text-xs font-bold text-white">Fecha de Expiración</p>
                            <p class="text-[10px] text-slate-400">El acceso muere al concluir el proyecto.</p>
                        </div>
                        <input type="checkbox" id="m4-check-caducidad" class="w-4 h-4 text-blue-600 rounded bg-slate-700 border-slate-600 focus:ring-blue-500">
                    </label>

                    <button onclick="validarM4Configurador()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs tracking-wider transition cursor-pointer shadow-md">
                        GENERAR ENLACE CORPORATIVO SEGURO
                    </button>
                </div>
                <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
            </div>
        `;
    }
    
    // ESCENARIO B: TRIAJE DE CONTENCION ANTE FUGA CON TEMPORIZADOR CONTINUO
    else if (ejercicio.tipo === "temporizador" || ejercicio.type === "temporizador") {
        let tiempoRestante = variante.tiempoLimite;
        const opcionesEmergencia = [
            { accion: 'revocar', texto: "🛑 Revocar los permisos del enlace inmediatamente (Protocolo SOS)" },
            { accion: 'eliminar', texto: "🗑️ Eliminar el archivo original de tu espacio de OneDrive corporativo" },
            { accion: 'correo', texto: "✉️ Enviar un correo urgente al destinatario pidiendo que ignore el enlace" }
        ];
        const opcionesMezcladas = mezclarArray(opcionesEmergencia);

        contenedor.innerHTML = `
            <div class="space-y-6 text-center animate-fade-in">
                <div class="bg-red-950/30 border border-red-700/30 p-4 rounded-xl max-w-2xl mx-auto text-left">
                    <h3 class="text-lg font-bold text-red-400 uppercase tracking-wider">🚨 INCIDENTE EN PROGRESO 🚨</h3>
                    <p class="text-slate-300 text-sm mt-1">${ejercicio.contextoSuperior}</p>
                    <p class="text-slate-400 font-mono text-xs mt-2"><strong>Archivo Comprometido:</strong> ${variante.archivoNombre}</p>
                </div>

                <div class="py-4">
                    <div class="inline-flex flex-col items-center justify-center bg-slate-950 border-4 border-red-600 w-28 h-28 rounded-full shadow-2xl animate-pulse">
                        <span id="m4-cronometro-num" class="text-2xl font-black text-red-500 font-mono">${tiempoRestante}</span>
                        <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">Segundos</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-3 max-w-xl mx-auto">
                    ${opcionesMezcladas.map(op => `
                        <button onclick="validarM4Temporizador('${op.accion}')" class="w-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-bold py-3 px-6 rounded-xl text-sm transition text-left hover:bg-slate-800 cursor-pointer shadow-md">
                            <span>${op.texto}</span>
                        </button>
                    `).join('')}
                </div>
                <div id="feedback-container" class="hidden p-5 rounded-xl border max-w-xl mx-auto text-left"></div>
            </div>
        `;

        m4IntervaloReloj = setInterval(() => {
            tiempoRestante--;
            const cNum = document.getElementById('m4-cronometro-num');
            if (cNum) cNum.innerText = tiempoRestante;
            if (tiempoRestante <= 0) { 
                clearInterval(m4IntervaloReloj); 
                validarM4Temporizador('tiempo'); 
            }
        }, 1000);
    }
    
    // ESCENARIO C: HISTORIAL DE VERSIONES (MÁQUINA DEL TIEMPO CONTRA RANSOMWARE)
    else if (ejercicio.tipo === "versiones" || ejercicio.type === "versiones") {
        contenedor.innerHTML = `
            <div class="space-y-6 animate-fade-in">
                <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20 space-y-2">
                    <div>
                        <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">${ejercicio.id} — ${ejercicio.titulo}</span>
                        <p class="text-slate-300 text-sm mt-1"><strong>Caso:</strong> ${ejercicio.contextoSuperior}</p>
                    </div>
                    <div class="text-xs text-slate-400 border-t border-blue-500/10 pt-2">
                        <strong>Archivo Secuestrado:</strong> ${variante.archivoNombre}
                    </div>
                </div>

                <div class="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                    <div class="bg-slate-900 p-4 border-b border-slate-800">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">📅 HISTORIAL DE VERSIONES EN LA NUBE</span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr class="bg-slate-900/50 text-slate-400 border-b border-slate-800">
                                    <th class="p-3">Versión</th>
                                    <th class="p-3">Marca de Tiempo</th>
                                    <th class="p-3">Modificado Por</th>
                                    <th class="p-3">Detalle Técnico / Estado del Archivo</th>
                                    <th class="p-3 text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 font-mono text-slate-300">
                                ${variante.tablaVersiones.map(v => `
                                    <tr class="hover:bg-slate-900/40 transition">
                                        <td class="p-3 font-bold text-blue-400">${v.version}</td>
                                        <td class="p-3">${v.fecha}</td>
                                        <td class="p-3 font-sans">${v.autor}</td>
                                        <td class="p-3 font-sans text-slate-400">${v.detalle}</td>
                                        <td class="p-3 text-right">
                                            <button onclick="validarM4Versiones(${v.esCorrecta})" class="bg-slate-800 border border-slate-700 text-blue-400 px-3 py-1 rounded text-[10px] font-sans cursor-pointer hover:bg-blue-600 hover:text-white transition">
                                                Restaurar
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
            </div>
        `;
    }
}

/**
 * Validador para el Caso A: Permisos granulares de OneDrive.
 */
function validarM4Configurador() {
    const variante = estadoJuego.varianteActiva;
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border";

    const checkLectura = document.getElementById('m4-select-lectura').value === 'lectura';
    const checkDescarga = document.getElementById('m4-check-descarga').checked;
    const checkPassword = document.getElementById('m4-check-password').checked;
    const checkCaducidad = document.getElementById('m4-check-caducidad').checked;

    if (checkLectura === variante.solucionEsperada.soloLectura && 
        checkDescarga === variante.solucionEsperada.bloquearDescarga && 
        checkPassword === variante.solucionEsperada.passwordActivo && 
        checkCaducidad === variante.solucionEsperada.caducidadActiva) {
        
        estadoJuego.puntuacion[4].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Enlace Validado con Éxito! 🛡️</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    } else {
        estadoJuego.puntuacion[4].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-rose-400 font-bold text-lg">Configuración Insegura ❌</h4>
            <p class="text-slate-300 mt-2 text-sm">Tu enlace sigue expuesto. Si dejas libre la edición o permites la descarga local del archivo, el consultor externo generará copias ingobernables fuera de las defensas de la organización, provocando una filtración accidental. ¡Ajusta los candados corporativos!</p>
        `;
    }
}

/**
 * Validador para el Caso B: Mitigación de fugas bajo estrés.
 */
function validarM4Temporizador(accion) {
    if (m4IntervaloReloj) clearInterval(m4IntervaloReloj);
    const variante = estadoJuego.varianteActiva;
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";

    if (accion === 'revocar') {
        estadoJuego.puntuacion[4].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block text-left animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Enlace Revocado con Éxito! 🛑</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    } 
    else if (accion === 'eliminar') {
        estadoJuego.puntuacion[4].fallos++;
        feedbackContainer.innerHTML = `<h4 class="text-rose-400 font-bold text-lg">¡ERROR OPERATIVO CRÍTICO! 🗑️</h4><p class="text-slate-300 mt-2 text-sm">Eliminar el archivo original de tu nube <strong>no destruye el token del enlace dinámico que ya viaja por los servidores externos</strong>. Si el receptor malicioso ya lo tenía cargado, podrá seguir extrayendo los datos. Destruiste tu trabajo sin contener la fuga. Reintenta de inmediato.</p>`;
    } 
    else if (accion === 'correo') {
        estadoJuego.puntuacion[4].fallos++;
        feedbackContainer.innerHTML = `<h4 class="text-rose-400 font-bold text-lg">¡REMEDIACIÓN TOTALMENTE INEFICAZ! ✉️</h4><p class="text-slate-300 mt-2 text-sm">Enviar un correo pidiendo 'por favor ignorar el link enviado' alerta de inmediato al atacante de que los datos recibidos son altamente sensibles y confidenciales, acelerando su descarga local. Los accesos se cortan de raíz con tecnología, no con apelaciones éticas.</p>`;
    } 
    else {
        estadoJuego.puntuacion[4].fallos++;
        feedbackContainer.innerHTML = `<h4 class="text-rose-400 font-bold text-lg">¡FUGA DE INFORMACIÓN CONFIRMADA! 💥</h4><p class="text-slate-300 mt-2 text-sm">El tiempo límite de contención expiró. El receptor externo no autorizado logró abrir la matriz estática e interceptó toda la base de datos de manera irreversible por falta de reacción ágil de tu terminal.</p>`;
    }
}

/**
 * Validador para el Caso C: Historial de versiones y recuperación de malware.
 */
function validarM4Versiones(esCorrecto) {
    const variante = estadoJuego.varianteActiva;
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border";

    if (esCorrecto) {
        estadoJuego.puntuacion[4].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Restauración Exitosa de Resiliencia! 🏆</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    } else {
        estadoJuego.puntuacion[4].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `<h4 class="text-rose-400 font-bold text-lg">Error de Restauración de Resguardo ❌</h4><p class="text-slate-300 mt-2 text-sm">Intentas restaurar un estado de cambio temporal que ya se encontraba infectado o cifrado por las rutinas criptográficas del Ransomware, perpetuando el secuestro de la información estatal. ¡Identifica la versión limpia de Elena Marín anterior al ataque!</p>`;
    }
}