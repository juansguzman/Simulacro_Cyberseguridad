// ========================================================
// 🖥️ MOTOR MODULAR: MISIÓN 3 — TÚNELES Y CANDADOS
// ========================================================

/**
 * Maquetador visual de la consola de auditoría de redes.
 * Inicializa los interruptores físicos y baraja las acciones de mitigación.
 */
function renderizarMision3(ejercicio, variante, contenedor) {
    m3Shields = { vpn: false, dns: false }; // Reset forzado de hardware al cargar escenario
    const accionesMezcladas = mezclarArray((variante.checklistAcciones || variante.checklistRazones).map((accion, idx) => ({ ...accion, idxOriginal: idx })));

    contenedor.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="bg-blue-600/10 p-4 rounded-lg border border-blue-500/20">
                <span class="text-xs font-bold text-blue-400 uppercase tracking-widest">ID Ejercicio: ${ejercicio.id} — Auditoría de Redes</span>
                <p class="text-slate-300 text-sm mt-1"><strong>Entorno Operativo:</strong> ${variante.entorno}. ${ejercicio.contextoSuperior}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-4">
                    <h4 class="text-sm font-bold text-blue-400 uppercase tracking-wider border-b border-slate-800 pb-2">Hardware Toggles</h4>
                    
                    <div class="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <div>
                            <p class="text-xs font-bold text-white">VPN Institucional</p>
                            <p id="lbl-vpn-status" class="text-[10px] text-red-400 font-semibold font-mono">ESTADO: APAGADO</p>
                        </div>
                        <button id="btn-toggle-vpn" onclick="toggleM3Shield('vpn')" class="bg-red-950 hover:bg-red-900 text-red-300 border border-red-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer">
                            ENCENDER
                        </button>
                    </div>

                    <div class="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <div>
                            <p class="text-xs font-bold text-white">DNS Criptográfico</p>
                            <p id="lbl-dns-status" class="text-[10px] text-red-400 font-semibold font-mono">MODO: POR DEFECTO</p>
                        </div>
                        <button id="btn-toggle-dns" onclick="toggleM3Shield('dns')" class="bg-red-950 hover:bg-red-900 text-red-300 border border-red-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer">
                            PROTEGER
                        </button>
                    </div>
                </div>

                <div class="md:col-span-2 space-y-4">
                    <div class="bg-slate-950 rounded-xl border border-slate-700 p-3 flex items-center space-x-2">
                        <div id="status-lock-icon" class="text-red-400 text-sm">🔓</div>
                        <div class="bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-xs font-mono text-slate-400 flex-1 overflow-hidden" id="browser-address-bar">
                            ${variante.urlSimulada}
                        </div>
                        <button onclick="alert('📋 Detalles del Certificado SSL:\\n${variante.certificadoDetalles}')" class="bg-slate-800 hover:bg-slate-700 text-[10px] font-bold px-2.5 py-1 rounded border border-slate-600 transition cursor-pointer">
                            🔍 Inspeccionar SSL
                        </button>
                    </div>

                    <div class="bg-black border border-slate-800 rounded-xl p-4 font-mono text-[11px] leading-relaxed shadow-inner">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2 mb-2">
                            <span class="text-slate-500 font-bold uppercase tracking-wider">📡 LIVE PACKET INSPECTOR (Wireshark Mock)</span>
                            <span class="animate-pulse text-red-500 font-black">● LIVE</span>
                        </div>
                        <pre id="sniffer-terminal-text" class="text-red-400 whitespace-pre-wrap font-mono">${variante.traficoPlano}</pre>
                    </div>
                </div>
            </div>

            <div id="panel-auditoria-redes" class="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4 shadow-inner">
                <h4 class="text-md font-bold text-yellow-400 flex items-center gap-2">
                    🛠️ Plan de Mitigación: Aplica los toggles físicos arriba y marca las casillas de remediación correctas:
                </h4>
                <div class="space-y-2">
                    ${accionesMezcladas.map((accion) => `
                        <label class="flex items-start gap-3 p-3 bg-slate-900/60 rounded-lg hover:bg-slate-900 border border-slate-800 cursor-pointer transition select-none">
                            <input type="checkbox" data-index="${accion.idxOriginal}" class="checkbox-m3 mt-1 w-4 h-4 text-blue-600 rounded bg-slate-700 border-slate-600 focus:ring-blue-500">
                            <span class="text-slate-300 text-sm">${accion.texto}</span>
                        </label>
                    `).join('')}
                </div>
                <button onclick="validarMitigacionRed()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm cursor-pointer shadow-md">
                    Emitir Certificado de Conexión Segura
                </button>
            </div>

            <div id="feedback-container" class="hidden p-5 rounded-xl border"></div>
        </div>
    `;
}

/**
 * Gestor de Toggles de Red.
 * Modifica en caliente la respuesta visual de la consola según los niveles de protección activos.
 */
function toggleM3Shield(tipo) {
    const variante = estadoJuego.varianteActiva;
    const term = document.getElementById('sniffer-terminal-text');
    const lock = document.getElementById('status-lock-icon');
    const urlBar = document.getElementById('browser-address-bar');
    
    m3Shields[tipo] = !m3Shields[tipo];

    if (tipo === 'vpn') {
        const btn = document.getElementById('btn-toggle-vpn');
        const lbl = document.getElementById('lbl-vpn-status');
        if (m3Shields.vpn) {
            btn.className = "bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer";
            btn.innerText = "APAGAR";
            lbl.className = "text-[10px] text-emerald-400 font-semibold font-mono";
            lbl.innerText = "ESTADO: PROTEGIDO";
        } else {
            btn.className = "bg-red-950 hover:bg-red-900 text-red-300 border border-red-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer";
            btn.innerText = "ENCENDER";
            lbl.className = "text-[10px] text-red-400 font-semibold font-mono";
            lbl.innerText = "ESTADO: APAGADO";
        }
    }

    if (tipo === 'dns') {
        const btn = document.getElementById('btn-toggle-dns');
        const lbl = document.getElementById('lbl-dns-status');
        if (m3Shields.dns) {
            btn.className = "bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer";
            btn.innerText = "REVERTIR";
            lbl.className = "text-[10px] text-emerald-400 font-semibold font-mono";
            lbl.innerText = "MODO: ENCRIPTADO";
        } else {
            btn.className = "bg-red-950 hover:bg-red-900 text-red-300 border border-red-700/50 text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer";
            btn.innerText = "PROTEGER";
            lbl.className = "text-[10px] text-red-400 font-semibold font-mono";
            lbl.innerText = "MODO: POR DEFECTO";
        }
    }

    // Lógica combinada para el comportamiento dinámico de la terminal
    if (m3Shields.vpn && m3Shields.dns) {
        term.className = "text-emerald-400 whitespace-pre-wrap font-mono text-[11px]";
        term.innerText = `🛡️ [ENTORNO TOTALMENTE BLINDADO]\n` + variante.traficoCifrado;
        lock.innerText = "🔒";
        urlBar.innerText = variante.urlSimulada.replace('http://', 'https://');
        urlBar.className = "bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-xs font-mono text-emerald-400 flex-1 overflow-hidden";
    } 
    else if (m3Shields.vpn && !m3Shields.dns) {
        term.className = "text-yellow-400 whitespace-pre-wrap font-mono text-[11px]";
        term.innerText = `⚠️ [TÚNEL VPN ACTIVO]\nTráfico web cifrado con éxito, pero la resolución de nombres local sigue vulnerable (¡Activa el DNS Criptográfico!).\n\n` + variante.traficoCifrado;
        lock.innerText = "🔒";
        urlBar.innerText = variante.urlSimulada.replace('http://', 'https://');
        urlBar.className = "bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-xs font-mono text-yellow-400 flex-1 overflow-hidden";
    } 
    else if (!m3Shields.vpn && m3Shields.dns) {
        term.className = "text-yellow-400 whitespace-pre-wrap font-mono text-[11px]";
        term.innerText = `⚠️ [DNS OVER HTTPS (DoH) ACTIVO]\nTu navegación está protegida contra suplantación de rutas (Spoofing), pero tus paquetes de datos siguen viajando EN CLARO por el aire (¡Activa la VPN corporativa!).\n\n` + variante.traficoPlano;
        lock.innerText = "🔓";
        urlBar.innerText = variante.urlSimulada;
        urlBar.className = "bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-xs font-mono text-yellow-400 flex-1 overflow-hidden";
    } 
    else {
        term.className = "text-red-400 whitespace-pre-wrap font-mono text-[11px]";
        term.innerText = variante.traficoPlano;
        lock.innerText = "🔓";
        urlBar.innerText = variante.urlSimulada;
        urlBar.className = "bg-slate-900 border border-slate-800 rounded-md px-3 py-1 text-xs font-mono text-slate-400 flex-1 overflow-hidden";
    }
}

/**
 * Auditor analítico final de la Misión 3.
 * Compara las casillas marcadas y los toggles físicos contra las directrices de remediación.
 */
function validarMitigacionRed() {
    const variante = estadoJuego.varianteActiva;
    const checkboxes = document.querySelectorAll('.checkbox-m3');
    const feedbackContainer = document.getElementById('feedback-container');
    
    if (!feedbackContainer) return;
    feedbackContainer.className = "hidden p-5 rounded-xl border";
    
    const listaCriterios = variante.checklistAcciones || variante.checklistRazones || [];
    let checklistPerfecto = true;

    checkboxes.forEach(cb => {
        const idx = parseInt(cb.getAttribute('data-index'));
        if (listaCriterios[idx]) {
            const esCorrecto = listaCriterios[idx].esCorrecta;
            const estaMarcado = cb.checked;
            if ((esCorrecto && !estaMarcado) || (!esCorrecto && estaMarcado)) {
                checklistPerfecto = false;
            }
        }
    });

    if (checklistPerfecto && m3Shields.vpn && m3Shields.dns) {
        estadoJuego.puntuacion[3].puntos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 block animate-fade-in";
        feedbackContainer.innerHTML = `
            <h4 class="text-emerald-400 font-bold text-lg">¡Conexión Blindada con Éxito! 🚀</h4>
            <p class="text-slate-300 mt-2">${variante.explicacionExito}</p>
            <button onclick="avanzarEjercicio()" class="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm cursor-pointer shadow-md">Siguiente Caso →</button>
        `;
    } else {
        estadoJuego.puntuacion[3].fallos++;
        feedbackContainer.className = "p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 block animate-fade-in";
        let mensaje = "Análisis de Red Incorrecto. Revisa si seleccionaste casillas erróneas o si te faltó aplicar alguna medida de contención técnica en el hardware.";
        if (!m3Shields.vpn || !m3Shields.dns) {
            mensaje += "<br><br><strong class='text-yellow-400'>Pista de Auditoría:</strong> Tus terminales e interruptores físicos de protección siguen apagados o incompletos. ¡Activa los escudos de hardware (VPN y DNS) a la izquierda de la pantalla!";
        }
        feedbackContainer.innerHTML = `<h4 class="text-rose-400 font-bold text-lg">Remediación Fallida ❌</h4><p class="text-slate-300 mt-2 text-sm leading-relaxed">${mensaje}</p>`;
    }
}