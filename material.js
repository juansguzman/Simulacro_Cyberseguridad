// material.js — Base de Conocimiento Extendida y Casos de Éxito
const materialEstudio = {
    1: {
        titulo: "Fortalezas Digitales 🔒",
        teoria: `
            <p class="mb-2">La identidad digital es el primer vector de ataque explotado por los ciberdelincuentes. Para blindarla, debemos derribar viejos mitos de configuración:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>El Mito de la Complejidad Corta:</strong> Una clave de 7 u 8 caracteres, por más símbolos raros que tenga (ej. <code class="bg-black/40 px-1 rounded text-yellow-400">GoB*26!</code>), puede ser descifrada en segundos mediante tarjetas gráficas modernas (GPUs) que realizan miles de millones de intentos por fuerza bruta.</li>
                <li><strong>El Poder de la Longitud (Passphrases):</strong> La resistencia matemática contra el descifrado aumenta exponencialmente con la longitud. Combinar 4 o más palabras comunes e inconexas genera frases de acceso inexpugnables, fáciles de memorizar pero imposibles de romper en siglos.</li>
                <li><strong>Leet Speak y Patrones de Diccionario:</strong> Reemplazar letras por números comunes (como <code class="bg-black/40 px-1 rounded text-yellow-400">4n4</code> o usar <code class="bg-black/40 px-1 rounded text-yellow-400">2026!</code> al final) está completamente automatizado en los diccionarios de hacking orientados a servidores públicos.</li>
                <li><strong>Higiene de Credenciales:</strong> Reutilizar contraseñas corporativas en cuentas personales (Facebook, bancos) provoca un efecto dominó; si la plataforma externa sufre una brecha, los atacantes ganan acceso inmediato a la red del Estado.</li>
                <li><strong>Vulnerabilidad del SMS en 2FA:</strong> Los códigos enviados por mensaje de texto son interceptables mediante redirección de señales o duplicación de líneas (<span class="text-blue-400 font-semibold">SIM Swapping</span>). Es mandatorio usar aplicaciones de autenticación criptográfica (Microsoft/Google Authenticator) protegidas por biometría en el dispositivo físico.</li>
            </ul>
        `,
        ejemplos: `
            <div class="space-y-2">
                <p class="text-xs font-bold text-red-400 uppercase tracking-wide">⚠️ Patrones Inseguros Detectados:</p>
                <div class="bg-black/30 p-2.5 rounded border border-red-500/10 font-mono text-xs text-slate-400">
                    • Bruno1988* <span class="text-red-400">(Usa datos personales predecibles mediante ingeniería social)</span><br>
                    • Qwertyministerio2026 <span class="text-red-400">(Usa secuencias de teclado y el entorno laboral de la institución)</span>
                </div>
                <p class="text-xs font-bold text-emerald-400 uppercase tracking-wide">🟢 Estándar Avanzado Institucional:</p>
                <div class="bg-black/30 p-2.5 rounded border border-emerald-500/10 font-mono text-xs text-slate-300">
                    • teclado-cable-nube-lluvia <span class="text-emerald-400">(26 caracteres aleatorios, alta entropía matemática, custodia en Gestor Digital)</span>
                </div>
            </div>
        `
    },
    2: {
        titulo: "Cazadores de Phishing 🕵️‍♂️",
        teoria: `
            <p class="mb-2">El Phishing moderno ya no se limita a correos con mala ortografía; hoy en día es altamente personalizado (<span class="text-blue-400 font-semibold">Spear Phishing</span>). Debes auditar tres capas críticas en cada mensaje:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>Ingeniería Social Psicológica:</strong> Los atacantes manipulan tus emociones usando disparadores de <em>Urgencia</em> (miedo a bloqueos en 12 horas o sanciones administrativas) o <em>Curiosidad</em> (supuestos informes confidenciales de ajustes salariales o software exclusivo).</li>
                <li><strong>Suplantación de Identidad de Dominios:</strong> Implementan <span class="text-yellow-400">Typosquatting</span> para alterar la ortografía de un dominio legítimo (usar un número '1' en lugar de la letra 'i', o reemplazar puntos estructurales por guiones comerciales, ej. <code class="bg-black/40 px-1 rounded text-red-300">presidencia-gob.pa</code>).</li>
                <li><strong>Descomposición de URLs:</strong> Debes mirar el dominio base al final de la cadena de subniveles. Si lees <code class="bg-black/40 px-1 rounded text-red-300">gob.pa.servicios-externos.com</code>, el servidor de destino es un sitio comercial ajeno al Estado.</li>
                <li><strong>Cabeceras Técnicas (Auditoría Criptográfica):</strong> El análisis forense requiere revisar el registro <span class="font-semibold">SPF</span> (que valida si la IP emisora está autorizada por la organización) y la firma <span class="font-semibold">DKIM</span>. Si arrojan <code class="bg-red-500/20 text-red-300 px-1 rounded font-mono">FAIL</code> o <code class="bg-red-500/20 text-red-300 px-1 rounded font-mono">NONE</code>, el correo es una falsificación matemática.</li>
            </ul>
        `,
        ejemplos: `
            <div class="space-y-3">
                <div class="border-l-2 border-red-500 pl-3">
                    <p class="text-xs font-bold text-red-400 uppercase">🚨 Alertas Rojas (Red Flags):</p>
                    <p class="text-xs text-slate-400 mt-0.5">Remitente: <span class="text-red-300 font-mono">onedrive@presidencia-gob-pa.cloud</span> (Dominio comercial falso)</p>
                    <p class="text-xs text-slate-400">Enlace Destino: <span class="text-red-300 font-mono">https://storage-portal-verificacion.net/login</span> (Suplanta almacenamiento oficial)</p>
                </div>
                <div class="border-l-2 border-emerald-500 pl-3">
                    <p class="text-xs font-bold text-emerald-400 uppercase">✅ Indicadores de Correo Legítimo:</p>
                    <p class="text-xs text-slate-400 mt-0.5">Remitente: <span class="text-emerald-300 font-mono">boletin@presidencia.gob.pa</span> (Estructura estatal exacta)</p>
                    <p class="text-xs text-slate-400">Cabeceras: <span class="text-emerald-400 font-mono">SPF: PASS | DKIM: PASS</span> (IP institucional y firmas validadas)</p>
                </div>
            </div>
        `
    },
    3: {
        titulo: "Túneles y Candados 📡",
        teoria: `
            <p class="mb-2">Cuando trabajas fuera de la oficina, las ondas de radio de las redes Wi-Fi públicas pueden ser interceptadas por cualquier antena cercana. Los atacantes explotan este medio mediante las siguientes técnicas:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>Ataque Man-in-the-Middle (MitM):</strong> El agresor se posiciona de forma invisible entre tu computadora y el sitio web, permitiéndole leer, registrar o alterar todo el tráfico que viaja sin protección.</li>
                <li><strong>Gemelo Malvado (Evil Twin / Rogue AP):</strong> Creación de un punto de acceso Wi-Fi sin contraseña que se llama exactamente igual que la red del lugar (ej. la del aeropuerto o cafetería) para forzar la conexión automática de dispositivos desconfigurados y capturar sus tokens de sesión.</li>
                <li><strong>Secuestro de Navegación (DNS Spoofing):</strong> Envenenamiento de las tablas de enrutamiento del router. Cuando escribes una dirección web válida, la red comprometida te desvía en milisegundos hacia una dirección IP falsa controlada por el atacante.</li>
                <li><strong>Escudos Obligatorios:</strong> El protocolo exige encender la <span class="text-blue-400 font-semibold">VPN Institucional</span> (para encapsular los datos bajo cifrado AES-256 de extremo a extremo) y activar <span class="text-blue-400 font-semibold">DNS Criptográficos</span> (DNS over HTTPS / DoH) en el puerto 853 para garantizar traducciones de nombre íntegras.</li>
            </ul>
        `,
        ejemplos: `
            <div class="space-y-2 text-xs">
                <p class="font-bold text-yellow-400 uppercase tracking-wide">⚠️ Diagnóstico de Red Comprometida:</p>
                <div class="bg-black/40 p-3 rounded border border-yellow-500/20 font-mono text-slate-400 space-y-1">
                    <p>• Estado SSL: <span class="text-red-400 font-bold">Certificado Autofirmado / No Válido</span></p>
                    <p>• Emisor de Cadena: <span class="text-red-400">FreeWiFi-Proxy-CA</span> (Alerta de interceptación)</p>
                    <p>• Tráfico en Claro: Interceptor captura cookies de autenticación legítimas.</p>
                </div>
                <p class="font-bold text-emerald-400 uppercase tracking-wide">🛡️ Diagnóstico bajo Protección:</p>
                <div class="bg-black/40 p-3 rounded border border-emerald-500/20 font-mono text-slate-300">
                    <p>• Túnel Seguro: <span class="text-emerald-400 font-bold">[VPN AES-256 ACTIVA]</span></p>
                    <p>• Resolución DNS: <span class="text-emerald-400">Encriptada vía Cloudflare/Google DoH</span></p>
                    <p>• Visibilidad externa: Todo el tráfico de red viaja como código cifrado e indescifrable.</p>
                </div>
            </div>
        `
    },
    4: {
        titulo: "Colaboración Segura ⚙️",
        teoria: `
            <p class="mb-2">El control de accesos moderno se rige bajo la filosofía de protección del ciclo de vida del dato compartido, evitando brechas de seguridad internas:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>El Peligro del Clip Tradicional:</strong> Adjuntar archivos estáticos en correos tradicionales destruye la gobernanza de la información corporativa. Una vez enviado, pierdes la capacidad de borrarlo, auditar quién lo abre o impedir que se generen copias ingobernables fuera de los servidores estatales.</li>
                <li><strong>Configuración de Enlaces Granulares:</strong> Al usar OneDrive institucional, debes aplicar el principio de mínimo privilegio: establecer permisos de "Solo Lectura", forzar la casilla de "Bloquear Descarga Local" (para impedir fotocopias externas), asignar contraseñas obligatorias de validación y definir fechas de expiración automáticas.</li>
                <li><strong>Protocolo SOS ante Filtraciones Accidentales:</strong> Si envías un enlace masivo con permisos de edición a un correo equivocado, la contención exige **Revocar los permisos del enlace inmediatamente en la nube**. Eliminar el archivo original destruye tu propio trabajo pero no rompe el token de red del receptor.</li>
                <li><strong>Resiliencia contra Ransomware:</strong> Ante un malware criptográfico que secuestra tus servidores locales y añade extensiones dañinas (ej. <code class="bg-black/40 px-1 rounded text-red-300">.locked</code>), la solución no es pagar el rescate, sino usar la *Máquina del Tiempo* del historial de versiones en la nube para restaurar de raíz el archivo al estado limpio anterior al ataque.</li>
            </ul>
        `,
        ejemplos: `
            <div class="bg-slate-950 p-3 rounded border border-slate-800 text-xs space-y-2">
                <p class="font-bold text-blue-400 uppercase border-b border-slate-800 pb-1">📊 Matriz de Remediciación Técnica:</p>
                <p class="text-slate-400 font-mono"><span class="text-red-400 font-bold">🗑️ Eliminar archivo original:</span> <strong>INCORRECTO.</strong> Los servidores de caché externos mantienen el acceso y destruyes tu documentación.</p>
                <p class="text-slate-400 font-mono"><span class="text-red-400 font-bold">✉️ Correo de disculpas:</span> <strong>INCORRECTO.</strong> Alerta al atacante del alto valor y confidencialidad de la data filtrada.</p>
                <p class="text-slate-400 font-mono"><span class="text-emerald-400 font-bold">🛑 Revocación de permisos:</span> <strong>CORRECTO.</strong> Destruye de forma fulminante el token dinámico de acceso en la red pública.</p>
            </div>
        `
    },
    5: {
        titulo: "IA con Ética y Seguridad 🤖",
        teoria: `
            <p class="mb-2">Las herramientas de Inteligencia Artificial públicas y comerciales utilizan de forma predeterminada los textos e información de las consultas (prompts) ingresadas por los usuarios para reentrenar activamente sus modelos globales de aprendizaje:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>Fuga de Privacidad Ciudadana (PII):</strong> Enviar cartas o expedientes con nombres reales, números de cédula o historiales de ciudadanos a una IA comercial abierta viola las leyes de protección de datos personales.</li>
                <li><strong>Exposición de Vulnerabilidades y Finanzas:</strong> Procesar borradores de auditorías que detallen costos exactos, presupuestos restringidos o direcciones IP de infraestructura crítica expone activos informáticos de la institución frente a filtraciones.</li>
                <li><strong>Políticas de Sanitización DLP:</strong> Los prompts deben pasar por filtros de control de fuga de datos para anonimizar la información restringida sustituyéndola por etiquetas genéricas antes del envío.</li>
                <li><strong>Equilibrio Operativo:</strong> Se debe evitar la <em>infra-sanitización</em> (fuga de secretos), pero también la <em>sobre-sanitización</em> (censurar palabras que no vulneran la confidencialidad, restándole contexto y utilidad al modelo de IA).</li>
                <li><strong>Ecosistema y Canal Obligatorio:</strong> Por estricta normativa, toda consulta del sector público debe procesarse forzosamente dentro de una **Instancia Privada Gubernamental** bajo contratos Enterprise con privacidad garantizada.</li>
            </ul>
        `,
        ejemplos: `
            <div class="space-y-2 text-xs font-mono">
                <div class="bg-red-500/10 p-2.5 rounded border border-red-500/20 text-slate-400">
                    <span class="text-red-400 font-bold">❌ PROMPT EXPUESTO (INSEGURO):</span><br>
                    "Traduce al inglés: Estimado Juan Pérez (Cédula 8-888-888), se le notifica que..."
                </div>
                <div class="bg-emerald-500/10 p-2.5 rounded border border-emerald-500/20 text-slate-300">
                    <span class="text-emerald-400 font-bold">🟢 PROMPT SANITIZADO (CUMPLIMIENTO DLP):</span><br>
                    "Traduce al inglés: Estimado [CIUDADANO_ANÓNIMO], se le notifica que..."
                </div>
            </div>
        `
    }
};