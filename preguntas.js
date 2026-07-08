// preguntas.js
const bancoPreguntas = {
    1: [ 
        {
            id: "T1-E1",
            titulo: "Anatomía de una Clave Débil vs Longitud",
            variantes: [
                {
                    nombre: "Carlos Mendoza (Analista de Presupuesto)",
                    contexto: "En su oficina todos saben que es fanático del fútbol, tiene un perro llamado 'Bruno' y nació en 1988.",
                    contrasenaPropuesta: "Bruno1988*",
                    explicacionError: "Esta contraseña es vulnerable porque utiliza datos personales predecibles. Un atacante haciendo ingeniería social básica en redes sociales adivinaría los datos en minutos, rompiendo el mito de que añadir un asterisco (*) al final la hace segura. La longitud y la aleatoriedad importan más.",
                    opciones: [
                        { texto: "Aprobar contraseña (El carácter especial e inicial mayúscula cumplen con la norma estándar).", esCorrecta: false },
                        { texto: "Rechazar contraseña (Los datos personales y patrones predecibles la hacen vulnerable frente a ingeniería social).", esCorrecta: true },
                        { texto: "Aprobar contraseña (Tiene la estructura clásica recomendada de 9 caracteres).", esCorrecta: false }
                    ]
                },
                {
                    nombre: "Ana Rodríguez (Coordinadora de Recursos Humanos)",
                    contexto: "Maneja expedientes confidenciales. Cree que cambiar letras por números la hace indescifrable.",
                    contrasenaPropuesta: "4n4R0dr1gu3z!",
                    explicacionError: "Sustituir letras por números (leet speak) de forma básica es un patrón que los diccionarios de hacking automatizados descifran en milisegundos. Sigue siendo su propio nombre expuesto.",
                    opciones: [
                        { texto: "Aprobar contraseña (Es robusta porque mezcla números, letras y símbolos complejos).", esCorrecta: false },
                        { texto: "Aprobar contraseña (Al no tener palabras reales de diccionario, los ataques de fuerza bruta fallan).", esCorrecta: false },
                        { texto: "Rechazar contraseña (La sustitución básica de caracteres sobre nombres propios es fácilmente predecible por software de ataque).", esCorrecta: true }
                    ]
                },
                {
                    nombre: "Jorge Luis (Soporte Técnico Junior)",
                    contexto: "Es un colaborador nuevo que no quería complicarse la vida recordando claves en su primer día de trabajo.",
                    contrasenaPropuesta: "Password123#",
                    explicacionError: "Utiliza 'Password123', catalogada históricamente como la reina de las filtraciones globales. Añadir un '#' al final no mitiga en absoluto que esté en el top de diccionarios de ataque automatizados.",
                    opciones: [
                        { texto: "Rechazar contraseña (Es una variación directa de la clave más filtrada del mundo y predecible por defecto).", esCorrecta: true },
                        { texto: "Aprobar contraseña (El símbolo '#' rompe los patrones de búsqueda automatizada).", esCorrecta: false },
                        { texto: "Aprobar contraseña (Cumple perfectamente las reglas de longitud mínima institucional).", esCorrecta: false }
                    ]
                }
            ]
        },
        {
            id: "T1-E2",
            titulo: "El Guardaespalda Digital: 2FA y Almacenamiento",
            variantes: [
                {
                    nombre: "Sofía Vega (Directora de Finanzas)",
                    contexto: "Ha creado una passphrase excelente, pero para no olvidarla, la tiene anotada en un archivo de Excel llamado 'Claves_2026.xlsx' en su escritorio y usa SMS como segundo factor.",
                    contrasenaPropuesta: "gato-volador-espacial-azul",
                    explicacionError: "Aunque la frase es inexpugnable por su longitud, guardarla en un Excel expone todo el sistema. Además, el SMS es el eslabón de 2FA más débil debido a ataques de clonación de SIM (SIM Swapping). Debe migrar a un Gestor de Contraseñas y una App de Autenticación.",
                    opciones: [
                        { texto: "Aprobar protocolo (La contraseña es muy larga y el SMS añade la capa obligatoria suficiente).", esCorrecta: false },
                        { texto: "Rechazar protocolo (El almacenamiento en Excel es insecure y el SMS es vulnerable; debe usar Gestor de claves y App Autenticadora).", esCorrecta: true }
                    ]
                },
                {
                    nombre: "Ricardo Gómez (Auditor Interno)",
                    contexto: "Utiliza la misma clave fuerte en su correo corporativo, en su Facebook personal y en su cuenta de banco. No tiene activado el doble factor.",
                    contrasenaPropuesta: "Tengo-S3gu-r1d4d-2026!",
                    explicacionError: "El reciclaje de credenciales provoca que una brecha de datos en una plataforma externa (como un foro o red social) le dé acceso inmediato a los atacantes a la infraestructura de la empresa. El 2FA detendría el 99% de estos accesos automatizados.",
                    opciones: [
                        { texto: "Rechazar protocolo (Reutilizar claves expone la cuenta corporativa ante filtraciones externas; requiere implementar 2FA no negociable).", esCorrecta: true },
                        { texto: "Aprobar protocolo (Dado que la clave es compleja y usa guiones, el riesgo de filtración es nulo).", esCorrecta: false }
                    ]
                },
                {
                    nombre: "Elena Marín (Atención al Ciudadano)",
                    contexto: "Tiene 25 contraseñas distintas para sistemas públicos. Confiesa que usa Post-its pegados debajo de su teclado para no bloquearse diariamente.",
                    contrasenaPropuesta: "[Múltiples claves aleatorias]",
                    explicacionError: "El factor físico es un vector de riesgo crítico (visitas o personal no autorizado). El taller enseña a adoptar Gestores de Contraseñas como un 'cerebro externo' para simplificar la vida digital eliminando post-its.",
                    opciones: [
                        { texto: "Aprobar método (Es preferible que use post-its físicos ocultos a que repita una sola clave en todo).", esCorrecta: false },
                        { texto: "Rechazar método (El soporte físico compromete la seguridad del entorno de trabajo; debe migrar la custodia a un Gestor digital seguro).", esCorrecta: true }
                    ]
                }
            ]
        },
        {
            id: "T1-E3",
            titulo: "Mito de Complejidad vs. Longitud (Passphrase)",
            variantes: [
                {
                    nombre: "Mariana Silva (Directora de Comunicaciones)",
                    contexto: "Le han enseñado que las contraseñas deben ser raras, así que inventó una clave corta pero llena de símbolos institucionales difíciles de tipear.",
                    contrasenaPropuesta: "GoB*26!",
                    explicacionError: "Esta contraseña cae en el mito de los caracteres especiales obligatorios. Al tener solo 7 caracteres, los softwares modernos de cracking de tarjetas gráficas (GPUs) descifran todas las permutaciones posibles de esa longitud en segundos por fuerza bruta pura, sin importar los símbolos.",
                    opciones: [
                        { texto: "Aprobar veredicto (Posee una mezcla perfecta de mayúsculas, minúsculas, números y símbolos obligatorios).", esCorrecta: false },
                        { texto: "Rechazar veredicto (Es demasiado corta. La longitud matemática de una frase ofrece mayor resistencia al cracking que la complejidad de pocos caracteres).", esCorrecta: true }
                    ]
                },
                {
                    nombre: "Roberto Chang (Asesor Legal)",
                    contexto: "Aplicó el método de frases aleatorias del taller. Combinó cuatro palabras comunes que no guardan relación lógica entre sí, creando algo fácil de memorizar pero muy extenso.",
                    contrasenaPropuesta: "teclado-cable-nube-lluvia",
                    explicacionError: "¡Excelente aplicación! El método de frases aleatorias genera una longitud masiva (24 caracteres en este caso). Matemáticamente, la cantidad de combinaciones numéricas necesarias para adivinar esta longitud es inalcanzable para los atacantes actuales, siendo inexpugnable e imposible de descifrar en siglos.",
                    opciones: [
                        { texto: "Rechazar veredicto (Es insegura porque usa palabras de diccionario en minúsculas y carece de números).", esCorrecta: false },
                        { texto: "Aprobar veredicto (Es una Passphrase inexpugnable; su alta longitud compensa la falta de símbolos y es fácil de recordar).", esCorrecta: true }
                    ]
                },
                {
                    nombre: "Claudia Fuentes (Planificación Estratégica)",
                    contexto: "Utiliza un patrón secuencial de teclado y le agrega el nombre de la institución modificado para cumplir con los requisitos del sistema.",
                    contrasenaPropuesta: "Qwertyministerio2026",
                    explicacionError: "Aunque es larga, es altamente predecible. Las secuencias de teclado ('qwerty') y las palabras institucionales con el año actual son los primeros patrones que se incluyen en las listas de diccionarios optimizadas para atacar servidores públicos. No posee aleatoriedad real.",
                    opciones: [
                        { texto: "Rechazar veredicto (Usa una secuencia de teclado común y datos del entorno laboral que los atacantes automatizan en sus diccionarios).", esCorrecta: true },
                        { texto: "Aprobar veredicto (Cumple con una longitud superior a 15 caracteres y combina letras con números).", esCorrecta: false }
                    ]
                }
            ]
        },
        {
            id: "T1-E4",
            titulo: "Misión 2FA: El Escudo Innegociable",
            variantes: [
                {
                    nombre: "Diego Torres (Administrador de Infraestructura)",
                    contexto: "Activó el segundo factor en su cuenta de correo, pero configuró el sistema para que le envíe un mensaje de texto (SMS) a su celular personal cada vez que ingresa.",
                    contrasenaPropuesta: "[Clave Fuerte] + 2FA por SMS",
                    explicacionError: "El SMS es el eslabón más débil del ecosistema de identidad. Los ciberdelincuentes interceptan estos códigos redirigiendo las señales de red telefónica o mediante ingeniería social con la operadora (SIM Swapping). El protocolo exige usar aplicaciones de autenticación criptográfica.",
                    opciones: [
                        { texto: "Aprobar protocolo (El uso de SMS cumple con la normativa básica de doble canal de verificación).", esCorrecta: false },
                        { texto: "Rechazar protocolo (El SMS es interceptable y vulnerable; se debe exigir la migración a Apps de Autenticación como Microsoft o Google Authenticator).", esCorrecta: true }
                    ]
                },
                {
                    nombre: "Beatriz Peña (Gestión de Trámites)",
                    contexto: "Está realizando el taller de activación en vivo para blindar su cuenta corporativa, pero argumenta que el doble factor le quitará mucho tiempo en su rutina diaria.",
                    contrasenaPropuesta: "[Intento de omitir la configuración de 2FA]",
                    explicacionError: "El Segundo Factor de Autenticación (2FA) es una capa de seguridad no negociable. No se trata de trabajar más o hacer los procesos lentos, sino de navegar seguros, ya que este escudo detiene de inmediato el 99% de los ataques de identidad automatizados en el mundo.",
                    opciones: [
                        { texto: "Rechazar protocolo (El 2FA es obligatorio; omitirlo deja la cuenta expuesta a ataques automatizados masivos de identidad).", esCorrecta: true },
                        { texto: "Aprobar protocolo (Se puede eximir del 2FA a usuarios operativos para no afectar el rendimiento de los servicios públicos).", esCorrecta: false }
                    ]
                },
                {
                    nombre: "Fernando Ruiz (Analista de Datos)",
                    contexto: "Instaló Microsoft Authenticator en su celular institucional para el correo corporativo, pero no le configuró clave de bloqueo ni biometría al teléfono físico.",
                    contrasenaPropuesta: "[Clave Fuerte] + Authenticator sin bloqueo de dispositivo",
                    explicacionError: "El uso de la aplicación de autenticación es correcto, pero descuidar la seguridad del dispositivo físico rompe el protocolo de resiliencia. Si un tercero no autorizado accede al teléfono físicamente en la oficina, tendrá el control total de los accesos dinámicos.",
                    opciones: [
                        { texto: "Aprobar protocolo (La aplicación genera códigos temporales cifrados, lo que garantiza la protección del acceso).", esCorrecta: false },
                        { texto: "Rechazar protocolo (El entorno físico debe estar blindado; la app de autenticación requiere que el dispositivo móvil posea bloqueo de pantalla activo obligatoriamente).", esCorrecta: true }
                    ]
                }
            ]
        }
    ],
    // Añade esto dentro de preguntas.js, en la sección 2: []
2: [
        // --- EJERCICIO 1: CASO YA EXISTENTE ---
        {
            id: "T2-E1",
            titulo: "Análisis Clínico de Mensajes Sospechosos",
            contextoSuperior: "Estás en tu bandeja institucional y recibes una notificación del sistema central de actualizaciones. Debes evaluar si el mensaje es legítimo o un ataque quirúrgico.",
            variantes: [
                {
                    emisor: "Soporte Central <seguridad@presidenc1a.gob.pa>",
                    asunto: "¡URGENTE! Bloqueo de acceso por actividad inusual detectada",
                    mensajeCuerpo: `
                        <p>Estimado colaborador,</p>
                        <p>Hemos detectado un inicio de sesión sospechoso en su cuenta desde una dirección IP internacional. Si no fue usted, debe verificar su identidad inmediatamente para evitar la suspensión definitiva de sus credenciales.</p>
                        <p>Por favor, ingrese al portal de validación oficial en el siguiente enlace:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://login.presidenc1a.gob.pa/update-auth">Verificar mi Identidad Ahora</a></p>
                        <p class="mt-4 text-sm text-slate-400">Atentamente,<br>Departamento de Tecnología y Ciberseguridad.</p>
                    `,
                    metadatos: {
                        ipOrigen: "192.168.84.12 (Asignada a un servidor privado en el extranjero)",
                        returnPath: "bounce-attacker@evil-server.net",
                        spf: "FAIL (El dominio presidenc1a.gob.pa no autoriza esta IP)",
                        dkim: "FAIL (Firma digital no válida o ausente)"
                    },
                    esSeguro: false,
                    checklistRazones: [
                        { id: "r1", texto: "El dominio del emisor tiene una alteración ortográfica sutil utilizando un número uno en lugar de la i (Typosquatting).", esCorrecta: true },
                        { id: "r2", texto: "El cuerpo del mensaje utiliza disparadores psicológicos basados en la urgencia y el miedo al bloqueo.", esCorrecta: true },
                        { id: "r3", texto: "Al pasar el cursor sobre el enlace, la URL real revela un dominio falso que suplanta la identidad institucional.", esCorrecta: true },
                        { id: "r4", texto: "La auditoría de cabeceras técnicas muestra que tanto el SPF como el DKIM arrojaron un estado de FAIL.", esCorrecta: true },
                        { id: "r5", texto: "El formato de firma del correo electrónico carece del logotipo oficial e institucional en alta resolución.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Excelente investigación! Detectaste todas las señales de alerta (red flags). El dominio usaba un '1' en lugar de una 'i' (presidenc1a), el enlace simulaba el portal real, el lenguaje explotaba la urgencia y las cabeceras técnicas (SPF/DKIM) confirmaron el engaño. Activaste correctamente el protocolo SOS de reporte."
                }
            ]
        },
        // --- NUEVO EJERCICIO 2: LA TRAMPA DEL GUION EN EL DOMINIO ---
        {
            id: "T2-E2",
            titulo: "Verificación de Dominios Engañosos y Enlaces Modificados",
            contextoSuperior: "Llega una notificación masiva a tu correo institucional supuestamente enviada por el área de Recursos Humanos. Se te solicita una acción inmediata bajo advertencia de sanciones administrativas.",
            variantes: [
                {
                    emisor: "Recursos Humanos <rrhh@presidencia-gob.pa>",
                    asunto: "NOTIFICACIÓN OBLIGATORIA: Actualización del Expediente Digital de Colaboradores 2026",
                    mensajeCuerpo: `
                        <p>Estimado servidor público,</p>
                        <p>Se le informa que su expediente digital presenta inconsistencias de datos de carácter obligatorio. No realizar la respectiva corrección en las próximas 24 horas acarreará la retención temporal de sus haberes y la apertura de un proceso disciplinario.</p>
                        <p>Evite contratiempos y actualice su información en el sistema centralizado mediante el siguiente acceso:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://rrhh-actualizaciones-panama.net/formulario-evaluacion">Acceder al Formulario de Actualización</a></p>
                        <p class="mt-4 text-sm text-slate-400">Dirección Nacional de Recursos Humanos.<br>Gobierno de la República.</p>
                    `,
                    metadatos: {
                        ipOrigen: "104.244.42.1 (Alojado en una infraestructura en la nube no gubernamental)",
                        returnPath: "panel-rh@presidencia-gob.pa",
                        spf: "FAIL (La dirección IP de origen no coincide con las políticas autorizadas)",
                        dkim: "FAIL (La firma criptográfica no corresponde a la clave pública institucional)"
                    },
                    esSeguro: false,
                    checklistRazones: [
                        { id: "r2_1", texto: "El dominio del emisor reemplaza el punto por un guion engañoso (presidencia-gob.pa en lugar de presidencia.gob.pa).", esCorrecta: true },
                        { id: "r2_2", texto: "El mensaje manipula psicológicamente al usuario mediante el miedo a sanciones administrativas y retención salarial.", esCorrecta: true },
                        { id: "r2_3", texto: "La previsualización del enlace (Ojo de Halcón) revela un destino externo bajo el dominio no oficial '.net'.", esCorrecta: true },
                        { id: "r2_4", texto: "Los registros de validación técnica de cabeceras SPF y DKIM fallaron de manera absoluta.", esCorrecta: true },
                        { id: "r2_5", texto: "El correo fue enviado fuera del horario laboral establecido por la institución pública.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Análisis perfecto! Has dominado la técnica del 'Ojo del Halcón'. Identificaste que agregar un guion al dominio (presidencia-gob.pa) es un engaño clásico para suplantar la web legítima. Además, la previsualización del enlace apuntaba a un servidor externo .net y las pruebas SPF/DKIM confirmaron que el mensaje era ilegítimo."
                }
            ]
        },
        // --- NUEVO EJERCICIO 3: SPEAR PHISHING QUIRÚRGICO (CURIOSIDAD) ---
        {
            id: "T2-E3",
            titulo: "Spear Phishing Quirúrgico y Falsos Entornos Cloud",
            contextoSuperior: "Recibes un correo sumamente personalizado. No contiene faltas de ortografía y va dirigido directamente a ti, simulando ser una comunicación confidencial de la alta dirección sobre presupuestos de la institución.",
            variantes: [
                {
                    emisor: "Dirección General <direccion@presidencia.gob.pa.servicios-externos.com>",
                    asunto: "CONFIDENCIAL: Modificaciones al Presupuesto Anual y Ajustes Salariales 2026",
                    mensajeCuerpo: `
                        <p>Estimado analista,</p>
                        <p>Le escribo directamente para solicitar su revisión sobre el borrador final de la reestructuración presupuestaria y los ajustes en la escala de salarios de la institución programados para el presente periodo fiscal.</p>
                        <p>He cargado el informe completo en la plataforma institucional en la nube para resguardar su confidencialidad. Puede revisarlo aquí:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://onedrive-secure-viewer.click/file/doc84729">Abrir Documento Protegido en OneDrive</a></p>
                        <p class="mt-4 text-sm text-slate-400">Saludos cordiales,<br>Despacho de la Dirección General.</p>
                    `,
                    metadatos: {
                        ipOrigen: "45.227.254.5 (Origen localizado en una red residencial internacional)",
                        returnPath: "campaign@servicios-externos.com",
                        spf: "FAIL (El remitente real no está autorizado por el registro SPF de la organización)",
                        dkim: "NONE (El mensaje no cuenta con ninguna firma criptográfica DKIM instalada)"
                    },
                    esSeguro: false,
                    checklistRazones: [
                        { id: "r3_1", texto: "El correo utiliza un dominio de subnivel que aparenta ser real, pero el dominio base real es 'servicios-externos.com'.", esCorrecta: true },
                        { id: "r3_2", texto: "El ataque explota quirúrgicamente el disparador de la curiosidad mediante información de alta sensibilidad (ajustes salariales).", esCorrecta: true },
                        { id: "r3_3", texto: "El enlace simulado de OneDrive redirige en realidad a una URL maliciosa externa llamada 'onedrive-secure-viewer.click'.", esCorrecta: true },
                        { id: "r3_4", texto: "La cabecera técnica revela que no existe firma DKIM (NONE) y el registro SPF falló por suplantación.", esCorrecta: true },
                        { id: "r3_5", texto: "El correo electrónico presenta graves errores de ortografía, redacción y mala traducción gramatical.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Identificación brillante! Este caso demuestra que los ataques modernos son personalizados y quirúrgicos, sin faltas de ortografía vulgares. Supiste mirar bajo el capó de la cabecera para ver que el remitente real terminaba en 'servicios-externos.com' y que la firma DKIM brillaba por su ausencia[cite: 6, 14], bloqueando la fuga del control de accesos corporativos."
                }
            ]
        },
        // --- NUEVO EJERCICIO 4: PHISHING DE ONEDRIVE (DISPARADOR: MIEDO/URGENCIA) ---
        {
            id: "T2-E4",
            titulo: "Suplantación de Almacenamiento Cloud Institucional",
            contextoSuperior: "Recibes una notificación del sistema automatizado de la nube de la empresa. El sistema te advierte sobre la pérdida inminente de tus herramientas colaborativas de trabajo.",
            variantes: [
                {
                    emisor: "Servicios Cloud <onedrive@presidencia-gob-pa.cloud>",
                    asunto: "ALERTA DE SISTEMA: Bloqueo de cuenta OneDrive por exceso de almacenamiento",
                    mensajeCuerpo: `
                        <p>Estimado usuario,</p>
                        <p>Le informamos que su cuenta institucional de OneDrive ha superado el límite de almacenamiento permitido para su rol operativo. Si no libera espacio o valida sus credenciales de ampliación, sus archivos compartidos y enlaces dinámicos serán eliminados permanentemente en 12 horas.</p>
                        <p>Evite la pérdida de datos de su departamento gestionando su espacio aquí:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://storage-portal-verificacion.net/auth/login">Liberar Espacio y Validar Cuenta de Nube</a></p>
                        <p class="mt-4 text-sm text-slate-400">Soporte Técnico de Almacenamiento Centralizado.</p>
                    `,
                    metadatos: {
                        ipOrigen: "185.220.101.5 (IP registrada en un nodo de anonimización internacional)",
                        returnPath: "no-reply@presidencia-gob-pa.cloud",
                        spf: "FAIL (El dominio falso no posee registros SPF válidos para servidores del Estado)",
                        dkim: "FAIL (La firma no coincide con ninguna entidad certificadora oficial)"
                    },
                    esSeguro: false,
                    checklistRazones: [
                        { id: "r4_1", texto: "El remitente suplanta la identidad usando un dominio comercial '.cloud' en lugar del dominio oficial gubernamental.", esCorrecta: true },
                        { id: "r4_2", texto: "El cuerpo del mensaje presiona al colaborador utilizando un temporizador de miedo (borrado en 12 horas).", esCorrecta: true },
                        { id: "r4_3", texto: "La previsualización del enlace revela que el destino real es un servidor externo llamado 'storage-portal-verificacion.net'.", esCorrecta: true },
                        { id: "r4_4", texto: "Tanto el registro SPF como la verificación de firma digital DKIM fallaron en las cabeceras técnicas.", esCorrecta: true },
                        { id: "r4_5", texto: "El correo electrónico no fue enviado con copia oculta (CCO) a los jefes de departamento.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Excelente diagnóstico! Supiste identificar un ataque clásico que utiliza el miedo a perder herramientas de trabajo para forzar un clic apresurado. Notaste el dominio engañoso '.cloud', el enlace fraudulento y los contundentes fallos de SPF/DKIM en las cabeceras de comunicación."
                }
            ]
        },
        // --- NUEVO EJERCICIO 5: PHISHING DE INTELIGENCIA ARTIFICIAL (DISPARADOR: CURIOSIDAD) ---
        {
            id: "T2-E5",
            titulo: "La Trampa de la Innovación: Herramientas de IA Falsas",
            contextoSuperior: "Te llega una invitación sumamente atractiva para formar parte de un programa piloto tecnológico exclusivo dentro de la administración pública.",
            variantes: [
                {
                    emisor: "Innovación Digital <comite-ia@presidenc1a-gob.pa>",
                    asunto: "CONVOCATORIA: Acceso exclusivo a la nueva herramienta de Inteligencia Artificial Gubernamental",
                    mensajeCuerpo: `
                        <p>Hola de nuevo,</p>
                        <p>Hemos seleccionado tu perfil para probar antes que nadie el nuevo asistente de Inteligencia Artificial automatizado para la optimización de trámites y reportes estatales del periodo 2026.</p>
                        <p>Esta herramienta te permitirá procesar textos de forma confidencial. Activa tu licencia de prueba gratuita registrándote con tu correo institucional en el siguiente enlace:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://ia-institucional-panama.com/register">Activar mi Licencia Piloto de IA</a></p>
                        <p class="mt-4 text-sm text-slate-400">Comisión de Modernización Tecnológica.</p>
                    `,
                    metadatos: {
                        ipOrigen: "93.184.216.34 (Alojado en servidores de hosting masivo de bajo costo)",
                        returnPath: "bounce@presidenc1a-gob.pa",
                        spf: "FAIL (El dominio del remitente no autoriza la dirección IP de origen de este mensaje)",
                        dkim: "FAIL (Firma digital alterada o mal estructurada)"
                    },
                    esSeguro: false,
                    checklistRazones: [
                        { id: "r5_1", texto: "El emisor implementa Typosquatting mezclando un número '1' y un guion (presidenc1a-gob.pa) para imitar la marca del Estado.", esCorrecta: true },
                        { id: "r5_2", texto: "El ataque explota el disparador de la curiosidad y el beneficio personal (acceso exclusivo a software de vanguardia).", esCorrecta: true },
                        { id: "r5_3", texto: "El enlace dinámico redirige a una URL externa '.com' totalmente ajena a la infraestructura tecnológica gubernamental.", esCorrecta: true },
                        { id: "r5_4", texto: "Las pruebas de validación de autenticidad SPF y DKIM bajo el capó arrojaron un estado explícito de FAIL.", esCorrecta: true },
                        { id: "r5_5", texto: "El correo electrónico fue redactado omitiendo el saludo formal con tu título profesional completo.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Análisis impecable! Los ciberdelincuentes suelen utilizar temas de alta tendencia como la Inteligencia Artificial y la innovación para despertar curiosidad. Tu revisión minuciosa detectó el dominio manipulado con el número '1', el enlace flotante malicioso y las credenciales de autenticación técnica caídas."
                }
            ]
        },
        // --- NUEVO EJERCICIO 6: CORREO 100% LEGÍTIMO (CONTROL DE FALSOS POSITIVOS) ---
        {
            id: "T2-E6",
            titulo: "Auditoría Operativa: Boletín Oficial Institucional",
            contextoSuperior: "Recibes la circular mensual informativa rutinaria enviada por la Dirección de Comunicación Social de la institución. Debes validar si es completamente segura.",
            variantes: [
                {
                    emisor: "Comunicación Interna <boletin@presidencia.gob.pa>",
                    asunto: "Boletín Informativo Mensual - Resumen de Actividades y Talleres Disponibles",
                    mensajeCuerpo: `
                        <p>Estimados colaboradores,</p>
                        <p>Compartimos con ustedes el resumen de actividades institucionales correspondiente al presente mes, así como el calendario de los próximos talleres de concientización digital y actualización profesional.</p>
                        <p>Pueden consultar la agenda completa y los documentos oficiales centralizados directamente en nuestro portal web institucional:</p>
                        <p class="mt-4"><a href="#" class="preview-link text-blue-400 underline font-medium" data-real-url="https://www.presidencia.gob.pa/agenda">Consultar Calendario de Actividades</a></p>
                        <p class="mt-4 text-sm text-slate-400">Dirección Nacional de Comunicación Social.<br>Gobierno de la República.</p>
                    `,
                    metadatos: {
                        ipOrigen: "200.46.10.25 (Dirección IP oficial perteneciente al rango asignado a la institución estatal)",
                        returnPath: "boletin@presidencia.gob.pa",
                        spf: "PASS (La IP de origen está explícitamente autorizada en el registro SPF del dominio presidencia.gob.pa)",
                        dkim: "PASS (La firma criptográfica es completamente válida y fue verificada correctamente)"
                    },
                    esSeguro: true, // ESTE CORREO SÍ ES SEGURO
                    checklistRazones: [], // Al ser seguro, el usuario no necesita llenar razones de fallo
                    explicacionExito: "" // El motor maneja el mensaje genérico de éxito para correos seguros
                }
            ]
        }
    ],
   3: [
        // --- EJERCICIO 1: CASO YA EXISTENTE (MitM en HTTP) ---
        {
            id: "T3-E1",
            titulo: "El Aire Tiene Oídos: Ataques Man-in-the-Middle",
            contextoSuperior: "Te encuentras trabajando de forma remota en una cafetería pública. Al encender tu laptop corporativa, notas actividad extraña en las solicitudes de red. Debes auditar el entorno.",
            variantes: [
                {
                    entorno: "Café de la Esquina - Red Abierta",
                    redWifi: "Wifi_Gratis_Cafe",
                    urlSimulada: "http://intranet.presidencia.gob.pa/login-portal",
                    sslStatus: "⚠️ INSEGURO (HTTP sin cifrar) - Certificado No Válido o Autofirmado",
                    certificadoDetalles: "Emisor: Desconocido/AttackerCA | Algoritmo: SHA-1 Débil | Estado: No confiable",
                    traficoPlano: `[LOG]: DNS Query -> intranet.presidencia.gob.pa interceptado\n[LOG]: HTTP POST Request detectado desde tu IP\n[ALERTA - TRÁFICO EN CLARO]:\n  👤 Usuario: dtorres@presidencia.gob.pa\n  🔑 Password: ClaveInexpugnable2026!\n[ALERTA]: Tráfico interceptable por ataque Man-in-the-Middle / Gemelo Malvado.`,
                    traficoCifrado: `⚡ [TÚNEL PRIVADO VPN ACTIVO - INTEGRIDAD AL 100%]\n[CONEXIÓN]: Encapsulada mediante protocolo AES-256\n[DATA INTERCEPTADA POR EL ATACANTE]: \n  0x9F3A8B7C2E1D0F4A9B8C7D6E5F4A3B2C1D0F9E8D\n  (Los datos viajan totalmente indescifrables en la red pública).`,
                    checklistAcciones: [
                        { texto: "Encender la VPN institucional para crear un túnel seguro que blinde los datos desde el origen.", esCorrecta: true },
                        { texto: "Configurar DNS seguros (Cloudflare/Google) para evitar el secuestro de navegación (DNS Spoofing).", esCorrecta: true },
                        { texto: "Desactivar la reconexión automática en el dispositivo para evitar puntos de acceso suplantados.", esCorrecta: true },
                        { texto: "Ignorar la advertencia del candado del navegador ya que la interfaz visual de la intranet se ve idéntica a la real.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Excelente auditoría y blindaje! Al activar la VPN lograste mitigar el ataque Man-in-the-Middle cifrando el tráfico en tránsito. Con los DNS seguros bloqueaste el envenenamiento de rutas y recordaste desactivar la reconexión automática para no caer ante un 'Gemelo Malvado' en el futuro."
                }
            ]
        },
        // --- NUEVO EJERCICIO 2: LA TRAMPA DEL GEMELO MALVADO (EVIL TWIN) ---
        {
            id: "T3-E2",
            titulo: "Puntos de Acceso Suplantados (Gemelo Malvado)",
            contextoSuperior: "Te encuentras en la sala de espera del Aeropuerto Internacional. Tu computadora se conecta de forma automática a una red Wi-Fi que se llama exactamente igual que la del aeropuerto, pero notas que no te pidió aceptar términos y condiciones.",
            variantes: [
                {
                    entorno: "Terminal de Pasajeros - Zona de Embarque",
                    redWifi: "Aeropuerto_Oficial_Gratis",
                    urlSimulada: "http://tramites.gob.pa/dashboard",
                    sslStatus: "⚠️ ADVERTENCIA: Error en la Cadena de Confianza del Certificado SSL/TLS",
                    certificadoDetalles: "Emisor: FreeWiFi-Proxy-CA | Caducidad: Expirado | Estado: Alerta de suplantación de identidad",
                    traficoPlano: `[ALERTA TÉCNICA]: Tu dispositivo está conectado a un punto de acceso falso (Rogue AP).\n[MONITOR]: El atacante está clonando el tráfico legítimo.\n[PAQUETES EN CLARO]:\n  🌐 Sitio visitado: tramites.gob.pa\n  🍪 Session Token: session_id=7aF923Bcz... (¡Robo de sesión activo!)`,
                    traficoCifrado: `⚡ [TÚNEL VPN DE LA AGENCIA OPERANDO TIER-1]\n[ESTADO]: Cifrado de extremo a extremo ininterrumpido\n[CAPTURA DEL INTERCEPTOR]:\n  [Encrypted TLSv1.3 Packet: 443 -> 51042] \n  Data: d5a8e2f1c309... (El atacante del Gemelo Malvado solo ve basura informática).`,
                    checklistAcciones: [
                        { texto: "Apagar la reconexión automática a redes públicas en el sistema operativo para evitar conexiones involuntarias a puntos de acceso falsos.", esCorrecta: true },
                        { texto: "Activar el túnel seguro de la VPN institucional para neutralizar cualquier escucha maliciosa en el aire.", esCorrecta: true },
                        { texto: "Interrumpir la navegación si el navegador alerta sobre un certificado SSL/TLS no válido o autofirmado.", esCorrecta: true },
                        { texto: "Confiar plenamente en la conexión de red siempre y cuando la red Wi-Fi no requiera una contraseña de acceso físico.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Análisis con Ojo de Halcón! Reconociste el peligro de las redes 'gratis' donde los atacantes suplantan puntos de acceso legítimos. Al aplicar el protocolo de viaje y activar tus escudos de hardware (VPN), lograste volver invisibles tus tokens de sesión ante el Gemelo Malvado."
                }
            ]
        },
        // --- NUEVO EJERCICIO 3: ENVENENAMIENTO DE RUTAS (DNS SPOOFING) ---
        {
            id: "T3-E3",
            titulo: "Navegación Invisible: Mitigando DNS Spoofing",
            contextoSuperior: "Intentas ingresar al portal de correspondencia del Estado desde una red doméstica compartida. Notas que la página web carga de forma sospechosamente rápida, pero el icónico 'candado verde' de seguridad tiene una línea roja transversal en tu navegador.",
            variantes: [
                {
                    entorno: "Red Remota - Router Residencial Desactualizado",
                    redWifi: "Red_Hogar_Insegura",
                    urlSimulada: "http://correo.presidencia.gob.pa",
                    sslStatus: "❌ ALERTA CRÍTICA: El certificado digital no coincide con el nombre del sitio gubernamental",
                    certificadoDetalles: "Emisor: Let's Hack Inc. | Destinatario: phishing-state-portal.com | Estado: FALSO",
                    traficoPlano: `[LOG]: Solicitud de servidor DNS comprometida en el router local.\n[ALERTA]: DNS Spoofing activo. Fuiste redirigido a un servidor clonado.\n[RANGO DE RUTA]:\n  IP Esperada: 200.46.10.5 (Oficial)\n  IP Resuelta por el atacante: 66.249.92.104 (Falsa)`,
                    traficoCifrado: `⚡ [DNS SEGURO CLOUDFLARE/GOOGLE ACTIVADO - PORT: 853]\n[PROTOCOLO]: DNS over HTTPS (DoH) activo\n[RESOLUCIÓN BRINDADA]: Redirección maliciosa purgada.\n[LOG]: Conexión enrutada de forma segura al servidor oficial gubernamental del Estado.`,
                    checklistAcciones: [
                        { texto: "Configurar DNS seguros (como Cloudflare o Google) para encriptar las solicitudes de traducción de nombres y evitar el secuestro de navegación.", esCorrecta: true },
                        { texto: "Validar minuciosamente la 'cédula de identidad' del sitio inspeccionando que el certificado SSL corresponda a la institución pública.", esCorrecta: true },
                        { texto: "Utilizar la VPN para encapsular todas las peticiones desde el origen hasta el destino institucional.", esCorrecta: true },
                        { texto: "Limpiar únicamente las cookies del historial del navegador para solucionar el desvío de enrutamiento IP de la red.", esCorrecta: false }
                    ],
                    explicacionExito: "¡Espectacular resolución técnica! El rastro que dejamos en los servidores DNS convencionales es un vector crítico. Al activar el DNS Criptográfico y la VPN, limpiaste el secuestro de navegación (DNS Spoofing), garantizando que tu dispositivo consulte únicamente servidores de nombres íntegros y validados."
                }
            ]
        }
    ],
    4: [
        // --- CASO 1: EL CONFIGURADOR DE PERMISOS GRANULARES ---
        {
            id: "T4-E1",
            titulo: "El Virus del Adjunto: Sustitución por Enlaces Seguros",
            tipo: "configurador",
            contextoSuperior: "Un consultor de auditoría externa solicita urgentemente el Plan Presupuestario Institucional para validación. El protocolo de Control de Accesos prohíbe adjuntar archivos estáticos en correos tradicionales.",
            variantes: [
                {
                    solicitante: "Ing. Roberto Díaz (Auditor Externo)",
                    archivoNombre: "Plan_Financiero_2026.docx",
                    // El usuario debe activar exactamente estos escudos para ganar
                    solucionEsperada: {
                        soloLectura: true,
                        bloquearDescarga: true,
                        passwordActivo: true,
                        caducidadActiva: true
                    },
                    explicacionExito: "¡Configuración impecable! Al sustituir el viejo hábito del 'clip' por un enlace centralizado en OneDrive con contraseñas, bloqueo de descarga local y caducidad, mantienes el control total del ciclo de vida del dato, evitando fotocopias digitales ingobernables fuera de la institución."
                }
            ]
        },
        // --- CASO 2: EL BOTÓN DE PÁNICO (TEMPORIZADOR DE REVOCACIÓN) ---
        {
            id: "T4-E2",
            titulo: "Protocolo SOS: Revocación de Accesos en Tiempo Real",
            tipo: "temporizador",
            contextoSuperior: "¡ALERTA CRÍTICA DE FUGA! Un colaborador de tu área acaba de enviar por error un enlace con permisos de edición masiva hacia un correo externo equivocado. El cronómetro ha comenzado: un tercero no autorizado está a segundos de interceptar y descargar el archivo.",
            variantes: [
                {
                    archivoNombre: "Matriz_Planificacion_Confidencial.xlsx",
                    tiempoLimite: 15, // Segundos para reaccionar antes de que falle
                    explicacionExito: "¡Reacción quirúrgica! Ejecutaste el protocolo de emergencia a tiempo. Al revocar el enlace de forma instantánea, bloqueaste la pantalla del usuario simulado en el exterior de la organización, mitigando una filtración accidental inminente."
                }
            ]
        },
        // --- CASO 3: LA MÁQUINA DEL TIEMPO (HISTORIAL DE VERSIONES) ---
        {
            id: "T4-E3",
            titulo: "Tu Seguro de Vida Digital: Resiliencia contra Ransomware",
            tipo: "versiones",
            contextoSuperior: "¡SISTEMA COMPROMETIDO! Un malware del tipo Ransomware ha ingresado a la red local, secuestrando y cifrando los archivos del servidor compartido con la extensión '.locked'. No pagaremos el rescate; debes utilizar el Historial de Versiones en la nube para salvar la información.",
            variantes: [
                {
                    archivoNombre: "Reporte_Gestion_Gobierno.pdf",
                    // Listado de versiones en la línea de tiempo. El usuario debe elegir la fila correcta
                    tablaVersiones: [
                        { version: "v4", fecha: "Hace 2 minutos", autor: "Sistema (Malware)", detalle: "🔒 Modificado y Cifrado por Ransomware", esCorrecta: false },
                        { version: "v3", fecha: "Hace 5 minutos", autor: "Sistema (Malware)", detalle: "🔒 Modificado y Cifrado por Ransomware", esCorrecta: false },
                        { version: "v2", fecha: "Hace 30 minutos", autor: "Elena Marín", detalle: "📝 Modificación limpia - Estado original guardado", esCorrecta: true },
                        { version: "v1", fecha: "Hace 4 horas", autor: "Elena Marín", detalle: "🌱 Creación del documento base", esCorrecta: false }
                    ],
                    explicacionExito: "¡Viaje en el tiempo completado! Demostraste el verdadero poder de la resiliencia en la nube. En lugar de ceder al chantaje del cibercrimen, auditaste los cambios y restauraste el archivo al estado exacto anterior al ataque, garantizando la continuidad de las operaciones de la institución."
                }
            ]
        }
    ],
    5: [
        // --- CASO 1: REQUIERE ANONIMIZAR PII + ENTORNO SEGURO ---
        {
            id: "T5-E1",
            titulo: "Fuga de Identidad Ciudadana (PII)",
            tipo: "ia_governance",
            contextoSuperior: "Un colaborador necesita traducir una carta oficial dirigida a un ciudadano. El texto contiene datos personales sensibles. Configura los filtros DLP adecuados antes de procesar.",
            variantes: [
                {
                    promptOriginal: "Traduce al inglés de forma profesional: Estimado Juan Pérez (Cédula 8-888-888), se le notifica que su trámite de residencia ha sido aprobado satisfactoriamente por la dirección de migración.",
                    solucionEsperada: { anonimo: true, filtrado: false, seguro: true },
                    reemplazosAnonimo: [
                        { buscar: "Juan Pérez (Cédula 8-888-888)", reemplazar: "<span class='bg-blue-500/20 text-blue-300 px-1 rounded font-bold border border-blue-500/20'>[CIUDADANO_ANÓNIMO]</span>" }
                    ],
                    reemplazosFiltrado: [],
                    explicacionExito: "¡Excelente triaje de IA! Identificaste que el texto contenía Datos de Identificación Personal (PII), por lo que activaste la anonimización y el entorno seguro. No era necesario el filtro financiero ya que no se mencionaban fondos ni presupuestos."
                }
            ]
        },
        // --- CASO 2: REQUIERE FILTRADO FINANCIERO/TÉCNICO + ENTORNO SEGURO ---
        {
            id: "T5-E2",
            titulo: "Auditoría de Vulnerabilidades y Presupuestos",
            tipo: "ia_governance",
            contextoSuperior: "Se te solicita resumir un informe técnico de TI para la junta directiva. El documento detalla un fallo de seguridad interno y costos operativos críticos. No hay nombres de personas.",
            variantes: [
                {
                    promptOriginal: "Resume los puntos clave de este incidente: Se detectó una vulnerabilidad crítica en la IP interna del servidor web. El costo estimado de mitigación de daños es de $45,000, lo que agota el fondo de contingencia del departamento.",
                    solucionEsperada: { anonimo: false, filtrado: true, seguro: true },
                    reemplazosAnonimo: [],
                    reemplazosFiltrado: [
                        { buscar: "vulnerabilidad crítica en la IP interna del servidor web", reemplazar: "<span class='bg-yellow-500/20 text-yellow-300 px-1 rounded font-bold border border-yellow-500/20'>[ANOMALÍA_DE_INFRAESTRUCTURA_RESTRINGIDA]</span>" },
                        { buscar: "$45,000, lo que agota el fondo de contingencia del departamento", reemplazar: "<span class='bg-yellow-500/20 text-yellow-300 px-1 rounded font-bold border border-yellow-500/20'>[VALOR_FINANCIERO_AUDITADO]</span>" }
                    ],
                    explicacionExito: "¡Análisis quirúrgico! Forzaste el entorno seguro para proteger la propiedad intelectual del Estado y filtraste los datos de vulnerabilidad y costos. Evitaste sobre-sanitizar con el filtro de PII ya que no había nombres ni cédulas."
                }
            ]
        },
        // --- CASO 3: INFORMACIÓN PÚBLICA (SOLO ENTORNO SEGURO POR POLÍTICA) ---
        {
            id: "T5-E3",
            titulo: "Redacción de Comunicados Oficiales (Datos Abiertos)",
            tipo: "ia_governance",
            contextoSuperior: "El área de prensa te pide mejorar el estilo de una nota que será publicada en la web oficial de la institución en las próximas horas. No contiene datos confidenciales ni personales.",
            variantes: [
                {
                    promptOriginal: "Mejora la redacción y estilo de este anuncio: El Ministerio informa que el parque nacional abrirá sus puertas de forma totalmente gratuita para todo el público este fin de semana por motivos de celebración.",
                    solucionEsperada: { anonimo: false, filtrado: false, seguro: true },
                    reemplazosAnonimo: [],
                    reemplazosFiltrado: [],
                    explicacionExito: "¡Criterio profesional impecable! Como la nota de prensa es información 100% pública y abierta, no requería censurar data (activar filtros habría dañado el desempeño de la IA). Sin embargo, por estricta política institucional, toda consulta de trabajo debe procesarse en el entorno seguro corporativo."
                }
            ]
        }
    ]
};