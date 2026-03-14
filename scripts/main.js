const CONFIG = {
      evento: {
        nombre       : 'Jornada UP 2026',
        organizacion : 'Sociedad Venezolana de Urología Pediátrica',
        titulo       : 'III Jornada Oriental de Urología Pediátrica',
        fechaCorta   : '17 Oct · Puerto Ordaz',
        fechaLarga   : '17 de Octubre del 2026',
        ciudad       : 'Puerto Ordaz, Estado Bolívar',
        stats: [
          { label: 'Fecha',            valor: '17 Oct 2026' },
          { label: 'Sede',             valor: 'Puerto Ordaz' },
          { label: 'Ponentes',         valor: '9 expertos'  },
          { label: 'Horas académicas', valor: '8 horas'      },
        ],
      },

      ponentes: [
        { nombre: 'Dr. Hermes Pérez',           especialidad: 'Urología Pediátrica',          institucion: 'Hospital de Niños J.M. de los Ríos · Caracas',    rol: 'Conferencia',   foto: 'img/ponentes/dr.jpg',    iniciales: 'HP', avatarColor: 'linear-gradient(135deg,#c9a84c,#e8c97a)' },
        { nombre: 'Dra. Florangélica Gonzales', especialidad: 'Urología Pediátrica',          institucion: 'Instituto Médico La Floresta · Caracas',          rol: 'Conferencia',   foto: 'img/ponentes/dra.jpg',   iniciales: 'FG', avatarColor: 'linear-gradient(135deg,#23a89f,#1a7f7a)' },
        { nombre: 'Dra. Jenny Coa',             especialidad: 'Urología Pediátrica',          institucion: 'Hospital Universitario de Maracaibo',             rol: 'Conferencia',   foto: 'img/ponentes/dra2.jpg',  iniciales: 'JC', avatarColor: 'linear-gradient(135deg,#9b59b6,#7b2d8b)' },
        { nombre: 'Dr. Rafael Wong',            especialidad: 'Infectología Pediática',       institucion: 'Centro Médico Docente La Trinidad',               rol: 'Conferencia',   foto: 'img/ponentes/dr2.jpg',   iniciales: 'RW', avatarColor: 'linear-gradient(135deg,#3db87a,#1a6644)' },
        { nombre: 'Dr. Jorys Rosas',            especialidad: 'Cirugía y Urología Pediátrica',       institucion: 'Hospital Universitario de Caracas',        rol: 'Conferencia',   foto: 'img/ponentes/dr3.jpg',   iniciales: 'JR', avatarColor: 'linear-gradient(135deg,#e8c97a,#c9a84c)' },
        { nombre: 'Dra. Marling Brito',         especialidad: 'Urología Pediátrica',          institucion: 'Hospital de Niños Gilberto Rodríguez',            rol: 'Conferencia',   foto: 'img/ponentes/dra3.jpg',  iniciales: 'MB', avatarColor: 'linear-gradient(135deg,#e05c5c,#c0392b)' },
        { nombre: 'Dr. Pedro Unshelm',          especialidad: 'Radiología',                   institucion: 'Clínica El Ávila · Caracas',                      rol: 'Conferencia',   foto: 'img/ponentes/dr4.jpg',   iniciales: 'PU', avatarColor: 'linear-gradient(135deg,#60a5fa,#2563eb)' },
        { nombre: 'Dra. Josileth Sierra',       especialidad: 'Nefrología Pediátrica',        institucion: 'Hospital Domingo Luciani · Caracas',              rol: 'Conferencia',   foto: 'img/ponentes/dra4.jpg',  iniciales: 'JS', avatarColor: 'linear-gradient(135deg,#34d399,#059669)' },
        { nombre: 'Dr. Javier Latan',           especialidad: 'Ginecología y Obstetricia',    institucion: 'Hospital Domingo Luciani · Caracas',              rol: 'Conferencia',   foto: 'img/ponentes/dr5.jpg',   iniciales: 'JL', avatarColor: 'linear-gradient(135deg,#34d399,#059669)' },
      ],

      programa: [
        { hora: '08:00 AM - 08:25 AM', tipo: 'registro',    tipoBadge: 'Verificación de datos',     titulo: 'Verificación de datos',                                descripcion: 'Verificaremos sus datos de la inscripción y guiaremos para que pueda participar de la jornada.', ponente: { iniciales: 'UP', color: 'linear-gradient(135deg,#c9a84c,#e8c97a)', nombre: '',    cargo: '' } },
        { hora: '08:30 AM - 08:50 AM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Historia de la Urología Peiátrica en Venezuela',       descripcion: 'Revisión e historia de la Urología Pedíatrica en Venezuela.',                                    ponente: { iniciales: 'HP', color: 'linear-gradient(135deg,#9b59b6,#7b2d8b)', nombre: 'Dr. Hermes Pérez',     cargo: 'Urólogo Pediatra · Univ. Maracaibo' } },
        { hora: '08:55 AM - 09:15 AM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Actualización de Criptoquidia',                        descripcion: 'Actualización de Criptoquidia...',              ponente: { iniciales: 'FG', color: 'linear-gradient(135deg,#3db87a,#1a6644)', nombre: 'Dra. Florangélica Gonzales',     cargo: 'Urólogo Pediatra · C.M. La Trinidad' } },
        { hora: '09:30 AM - 09:50 AM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Diferencia entre fimosis fisiológica y fimosis patológica',       descripcion: 'Diferencia entre fimosis fisiológica y fimosis patológica...',                    ponente: { iniciales: 'JC', color: 'linear-gradient(135deg,#60a5fa,#2563eb)', nombre: 'Dra. Jenny Coa',  cargo: 'Urólogo Pediatra · Clínica El Ávila' } },
        { hora: '10:05 AM - 10:30 AM', tipo: 'break',       tipoBadge: 'Break',                     titulo: 'Coffe Break',                                          descripcion: '',   ponente: { iniciales: 'BK', color: 'linear-gradient(135deg,#e8c97a,#c9a84c)', nombre: '',   cargo: '' } },
        { hora: '10:35 AM - 10:55 AM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Nuevos protocolos de profilaxis y manejo de infecciones urinarias recurrentes',                descripcion: 'Principios técnicos de la uretroplastia en pacientes pediátricos. Presentación de casos clínicos con seguimiento a largo plazo. Selección del injerto, técnica quirúrgica y manejo de complicaciones.',                  ponente: { iniciales: 'RW', color: 'linear-gradient(135deg,#34d399,#059669)', nombre: 'Dr. Rafael Wong',  cargo: 'Infectologo Pediatra · H. Domingo Luciani' } },
        { hora: '11:10 AM - 11:30 AM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Tendencias en el manejo del reflujo vesicoureteral en niños',              descripcion: 'Debate abierto entre los ponentes sobre los puntos de controversia en el tratamiento conservador versus quirúrgico. Cateterismo limpio intermitente, toxina botulínica y derivaciones urinarias.',                      ponente: { iniciales: 'JR', color: 'linear-gradient(135deg,#23a89f,#1a7f7a)', nombre: 'Dr. Jorys Rosas', cargo: 'Cirujano y Urólogolo Pediatra · H. Raúl Leoni Otero' } },
        { hora: '11:45 AM - 01:50 PM', tipo: 'break',       tipoBadge: 'Break',                     titulo: 'Almuerzo',                                             descripcion: '',   ponente: { iniciales: 'BK', color: 'linear-gradient(135deg,#e05c5c,#c0392b)', nombre: '', cargo: '' } },
        { hora: '02:00 PM - 02:20 PM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Manejo de transtornos en la micción y sindrome de la vejiga hiperactiva',  descripcion: 'Revisión de los últimos avances en el manejo de transtornos en la micción y el síndrome de la vejiga hiperactiva en niños.',  ponente: { iniciales: 'MB', color: 'linear-gradient(135deg,#23a89f,#1a7f7a)', nombre: 'Dra. Marling Brito', cargo: 'Urólogolo Pediatra · H. Raúl Leoni Otero' } },
        { hora: '02:35 PM - 03:20 PM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Ultrasonido de la patología renal en pediatría',       descripcion: 'Revisión de los últimos avances en el ultrasonido de la patología renal en pediatría.', ponente: { iniciales: 'PU', color: 'linear-gradient(135deg,#23a89f,#1a7f7a)', nombre: 'Dr. Pedro Unshelm', cargo: 'Radiólogo · H Raúl Leoni Otero' } },
        { hora: '03:35 PM - 03:55 PM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Diágnostico y manejo actual de cristalurias',          descripcion: 'Revisión de los últimos avances en el diagnóstico y manejo de cristalurias en pediatría.', ponente: { iniciales: 'JS', color: 'linear-gradient(135deg,#23a89f,#1a7f7a)', nombre: 'Dra. Josileth Sierra', cargo: 'Nefrólogo Pediatra · H. Raúl Leoni Otero' } },
        { hora: '04:10 PM - 04:30 PM', tipo: 'conferencia', tipoBadge: 'Conferencia',               titulo: 'Acances en seguimiento en hidronefrosis prenatala',    descripcion: 'Revisión de los últimos avances en el seguimiento de la hidronefrosis prenatala en pediatría.', ponente: { iniciales: 'JL', color: 'linear-gradient(135deg,#23a89f,#1a7f7a)', nombre: 'Dr. Javier Latan', cargo: 'Médico Materno Fetal · H Raúl Leoni Otero' } },
        { hora: '04:40 PM - 05:30 PM', tipo: 'break',       tipoBadge: 'Cierre',                    titulo: 'Cierre y Brindis',                                     descripcion: 'Palabras de clausura y brindis.', ponente: { iniciales: 'BK', color: 'linear-gradient(135deg,#e05c5c,#c0392b)', nombre: '', cargo: '' } },
      ],

      patrocinantes: {
        oro: [
          { nombre: 'Sociedad Venezolana de Urología',                  logo: 'img/sociedades/sociedad-1.jpg'   },
          { nombre: 'Sociedad Venezolana de Puericultura y Pediatría',  logo: 'img/sociedades/sociedad-2.jpg'   },
          { nombre: 'Sociedad Venezolana de Ultrasonido en Medicina',   logo: 'img/sociedades/sociedad-3.jpg'   },
        ],
        plata: [
          { nombre: 'Dra. Malvy Maldonado',       logo: 'img/patrocinantes/sponsor-1.jpg' },
          { nombre: 'H. General Dr. Raúl Leoni',  logo: 'img/patrocinantes/sponsor-2.jpg' },
          { nombre: 'Mc Donald´s',                logo: 'img/patrocinantes/sponsor-3.jpg' },
          { nombre: 'Krosfy LLC',                 logo: 'img/patrocinantes/sponsor-4.jpg' },
        ],
      },

      contacto: {
        canales: [
          { tipo: 'email',     icono: '📧', claseIcono: 'icon-email',     titulo: 'Correo electrónico',    href: 'mailto:congreso@urologiapediatrica.com.ve', linea1: 'congreso@urologiapediatrica.com.ve', linea2: 'Respuesta en menos de 24 horas' },
          { tipo: 'whatsapp',  icono: '📱', claseIcono: 'icon-phone',     titulo: 'WhatsApp / Teléfono',   href: 'tel:+584241234567',                         linea1: '+58 424 123 4567',                   linea2: 'Lunes a viernes · 8:00 AM – 5:00 PM' },
          { tipo: 'instagram', icono: '📸', claseIcono: 'icon-instagram', titulo: 'Instagram',             href: 'https://instagram.com/uropediatraguayana',  linea1: '@uropediatraguayana',               linea2: 'Actualizaciones en tiempo real' },
          { tipo: 'twitter',   icono: '🐦', claseIcono: 'icon-twitter',  titulo: 'X (Twitter)',           href: 'https://twitter.com/urologiapedve',         linea1: '@urologiapedve',                     linea2: 'Novedades científicas' },
          { tipo: 'facebook',  icono: '👥', claseIcono: 'icon-facebook', titulo: 'Facebook',              href: 'https://facebook.com/urologiapediatricavzla', linea1: 'Urología Pediátrica Venezuela',     linea2: 'Comunidad de profesionales' },
          { tipo: 'youtube',   icono: '▶️', claseIcono: 'icon-youtube',  titulo: 'YouTube',               href: 'https://youtube.com/@urologiapedve',        linea1: '@urologiapedve',                     linea2: 'Transmisión en vivo y grabaciones' },
        ],
        sede: {
          nombre   : 'Hotel Venetur Puerto Ordaz',
          direccion: 'Av. Las Américas, Parroquia Unare<br>Puerto Ordaz, Estado Bolívar',
          detalles : 'Salón Principal · 200 personas<br>Estacionamiento disponible',
          etiquetas: ['🗓 12 Oct 2026', '🕗 08:00 AM', '🎓 8 h académicas', '📜 Certificado'],
          mapUrl   : 'https://maps.google.com/?q=Hotel+Venetur+Puerto+Ordaz',
        },
        inscripcion: {
          titulo: '📋 Inscripciones',
          texto : 'Cupos limitados. El pago se confirma mediante comprobante de transferencia o depósito bancario. Respuesta en menos de 48 h hábiles.',
          url   : 'inscripcion.html',
          boton : 'Inscríbete ahora →',
        },
      },
    };

    /* ----------------------------------------------------------
       RENDER — Hero stats
    ---------------------------------------------------------- */
    function renderHeroStats() {
      const el = document.getElementById('heroCards');
      if (!el) return;
      el.innerHTML = CONFIG.evento.stats.map(s => `
        <div class="info-card" role="listitem">
          <span class="info-card__label">${s.label}</span>
          <span class="info-card__value">${s.valor}</span>
        </div>`).join('');
    }

    /* ----------------------------------------------------------
       RENDER — Ponentes (banda de scroll infinito + botones prev/next)
       Las tarjetas se duplican para el loop continuo.
       Los botones prev/next seleccionan una tarjeta lógica (índice 0-7),
       le aplican la clase .is-selected (réplica visual del hover) y
       pausan la banda. Al volver a pulsar o al mover el mouse fuera,
       se limpia la selección y la banda retoma el scroll.
    ---------------------------------------------------------- */
    function renderSpeakers() {
      const track = document.getElementById('speakersTrack');
      const band  = track ? track.closest('.speakers-band') : null;
      if (!track || !band) return;

      const cardHtml = (p) => {
        const img = p.foto
          ? `<img src="${p.foto}" alt="Fotografía de ${p.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
             <div class="speaker-card__initials" style="display:none;" aria-hidden="true">${p.iniciales}</div>`
          : `<div class="speaker-card__initials" aria-hidden="true">${p.iniciales}</div>`;

        return `
          <article class="speaker-card" role="listitem" aria-label="${p.nombre}, ${p.especialidad}">
            <div class="speaker-card__image">${img}</div>
            <div class="speaker-card__body">
              <h3 class="speaker-card__name">${p.nombre}</h3>
              <p class="speaker-card__specialty">${p.especialidad}</p>
              <p class="speaker-card__institution">${p.institucion}</p>
              <span class="speaker-card__tag">${p.rol}</span>
            </div>
          </article>`;
      };

      // Duplicamos para el loop infinito; cada mitad tiene N tarjetas
      const N   = CONFIG.ponentes.length;
      const all = [...CONFIG.ponentes, ...CONFIG.ponentes];
      track.innerHTML = all.map(cardHtml).join('');

      // ── Lógica de selección ──────────────────────────────────
      const prevBtn = document.getElementById('speakersPrev');
      const nextBtn = document.getElementById('speakersNext');
      if (!prevBtn || !nextBtn) return;

      // Lee el translateX actual que la animación CSS aplicó al track
      const getTrackX = () => {
        const m = new DOMMatrixReadOnly(window.getComputedStyle(track).transform);
        return m.m41; // valor en px, negativo
      };

      // Congela la animación en su posición actual y devuelve el offset
      const freezeTrack = () => {
        const x = getTrackX();
        track.style.animation = 'none';
        track.style.transform = `translateX(${x}px)`;
        band.classList.add('has-selection');
        return x;
      };

      // Reanuda el scroll infinito desde el offset actual
      const resumeTrack = () => {
        const x   = getTrackX();
        const hw  = track.scrollWidth / 2;
        // Normalizar offset al rango [-hw, 0]
        const norm = -(((Math.abs(x)) % hw));
        const pct  = Math.abs(norm) / hw;
        const rem  = 40000 * (1 - pct);
        track.style.transform = `translateX(${norm}px)`;
        void track.offsetWidth; // reflow
        track.style.animation = `anim-scroll-left ${rem}ms linear forwards`;
        track.addEventListener('animationend', () => {
          track.style.transform = '';
          track.style.animation = 'anim-scroll-left 40000ms linear infinite';
        }, { once: true });
      };

      // Centra la tarjeta destino moviendo el track con transición suave
      const centerCard = (cardEl) => {
        const bandRect  = band.getBoundingClientRect();
        const bandMid   = bandRect.width / 2;

        // offsetLeft de la tarjeta dentro del track
        const cardMid   = cardEl.offsetLeft + cardEl.offsetWidth / 2;

        // El track debe estar en x = bandMid - cardMid
        const targetX   = bandMid - cardMid;

        track.style.transition = 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)';
        track.style.transform  = `translateX(${targetX}px)`;

        track.addEventListener('transitionend', () => {
          track.style.transition = '';
        }, { once: true });
      };

      // Encuentra la tarjeta más centrada en la banda en este momento
      const findCenteredCard = () => {
        const cards    = Array.from(track.querySelectorAll('.speaker-card'));
        const bandMid  = band.getBoundingClientRect().left + band.offsetWidth / 2;
        let   best = 0, minDist = Infinity;
        cards.forEach((c, i) => {
          const r    = c.getBoundingClientRect();
          const dist = Math.abs(r.left + r.width / 2 - bandMid);
          if (dist < minDist) { minDist = dist; best = i; }
        });
        return best;
      };

      // Estado: ¿hay selección activa por botón? ¿está el mouse dentro?
      let isSelected = false;
      let isHovered  = false;

      const pauseAnim  = () => { track.style.animationPlayState = 'paused'; };
      const resumeAnim = () => { track.style.animationPlayState = 'running'; };

      const clearSelection = () => {
        isSelected = false;
        track.querySelectorAll('.speaker-card.is-selected')
             .forEach(c => c.classList.remove('is-selected'));
        band.classList.remove('has-selection');
        // Solo reanudar animación completa si el mouse también salió
        if (!isHovered) resumeTrack();
      };

      const selectCard = (cardEl) => {
        // Primera pulsación con botón: congelar animación CSS
        if (!isSelected) freezeTrack();
        isSelected = true;

        track.querySelectorAll('.speaker-card.is-selected')
             .forEach(c => c.classList.remove('is-selected'));
        cardEl.classList.add('is-selected');
        band.classList.add('has-selection');
        centerCard(cardEl);
      };

      prevBtn.addEventListener('click', () => {
        const cards     = Array.from(track.querySelectorAll('.speaker-card'));
        const centerIdx = findCenteredCard();
        selectCard(cards[(centerIdx - 1 + cards.length) % cards.length]);
      });

      nextBtn.addEventListener('click', () => {
        const cards     = Array.from(track.querySelectorAll('.speaker-card'));
        const centerIdx = findCenteredCard();
        selectCard(cards[(centerIdx + 1) % cards.length]);
      });

      // Hover sobre la banda: pausa/reanuda sin tocar la selección
      band.addEventListener('mouseenter', () => {
        isHovered = true;
        if (!isSelected) pauseAnim();
      });

      band.addEventListener('mouseleave', () => {
        isHovered = false;
        if (isSelected) {
          // Salió el mouse pero hay selección activa → limpiar y reanudar
          clearSelection();
        } else {
          resumeAnim();
        }
      });
    }

    /* ----------------------------------------------------------
       RENDER — Programa
    ---------------------------------------------------------- */
    function renderPrograma() {
      const track = document.getElementById('progTrack');
      if (!track) return;

      const items   = CONFIG.programa;
      const listaHtml = items.map((item, idx) => `
        <div class="prog-list-item${idx === 0 ? ' is-active' : ''}" data-slide="${idx}" role="tab" tabindex="0" aria-selected="${idx === 0}" aria-label="Ir a: ${item.titulo}">
          <span class="prog-list-item__time">${item.hora.split('–')[0].trim()}</span>
          <span class="prog-list-item__title">${item.titulo}</span>
          <span class="prog-list-item__arrow" aria-hidden="true">→</span>
        </div>`).join('');

      track.innerHTML = items.map((item, idx) => `
        <div class="prog-slide" role="tabpanel" aria-label="Sesión ${idx + 1}: ${item.titulo}">
          <div class="prog-main-card">
            <span class="prog-slide-num" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
            <span class="prog-time">${item.hora}</span>
            <span class="prog-type-badge ${item.tipo}">${item.tipoBadge}</span>
            <h4>${item.titulo}</h4>
            <p class="prog-desc">${item.descripcion}</p>
            <div class="prog-speaker-row">
              <div class="prog-speaker-avatar" style="background:${item.ponente.color}" aria-hidden="true">${item.ponente.iniciales}</div>
              <div>
                <p class="prog-speaker-name">${item.ponente.nombre}</p>
                <p class="prog-speaker-cat">${item.ponente.cargo}</p>
              </div>
            </div>
          </div>
          <div class="prog-list" role="tablist" aria-label="Agenda del día">${listaHtml}</div>
        </div>`).join('');
    }

    /* ----------------------------------------------------------
       RENDER — Patrocinantes
    ---------------------------------------------------------- */
    function renderPatrocinantes() {
      const container = document.getElementById('sponsorTiers');
      if (!container) return;

      const banda = (logos, nivel, reversed) => {
        const doble = [...logos, ...logos];
        const items = doble.map(s => {
          const img = s.logo ? `<img src="${s.logo}" alt="Logo de ${s.nombre}" loading="lazy" onerror="this.parentElement.style.display='none';">` : '';
          return `
            <div class="sponsor-logo is-${nivel}" aria-label="${s.nombre}">
              ${img ? `<div class="sponsor-logo__img-wrapper">${img}</div>` : ''}
              <span class="sponsor-logo__name">${s.nombre}</span>
            </div>`;
        }).join('');

        return `
          <div class="sponsor-tier">
            <span class="sponsor-tier__label">— ${nivel.charAt(0).toUpperCase() + nivel.slice(1)} —</span>
            <div class="logos-band" aria-label="Logos de patrocinantes ${nivel}">
              <div class="logos-track${reversed ? ' is-reversed' : ''}" aria-hidden="true">${items}</div>
            </div>
          </div>`;
      };

      container.innerHTML =
        banda(CONFIG.patrocinantes.oro,   'Sociedades',   false) +
        banda(CONFIG.patrocinantes.plata, 'Patrocinantes', true);
    }

    /* ----------------------------------------------------------
       RENDER — Contacto
    ---------------------------------------------------------- */
    function renderContacto() {
      const lista = document.getElementById('contactList');
      if (lista) {
        lista.innerHTML = CONFIG.contacto.canales.map(c => `
          <a class="contact-item reveal" href="${c.href}"
             ${c.tipo !== 'email' && c.tipo !== 'whatsapp' ? 'target="_blank" rel="noopener noreferrer"' : ''}
             aria-label="${c.titulo}: ${c.linea1}">
            <div class="contact-item__icon ${c.claseIcono}" aria-hidden="true">${c.icono}</div>
            <div><h5>${c.titulo}</h5><p>${c.linea1}<br>${c.linea2}</p></div>
          </a>`).join('');
      }

      const sede     = CONFIG.contacto.sede;
      const sedeCard = document.getElementById('sedeCard');
      if (sedeCard) {
        sedeCard.innerHTML = `
          <div class="lugar-map">
            <div class="map-pin">
              <span class="map-pin__emoji" aria-hidden="true">📍</span>
              <p class="map-pin__label">${CONFIG.evento.ciudad}</p>
            </div>
          </div>
          <div class="lugar-body">
            <h4>${sede.nombre}</h4>
            <p>${sede.direccion}<br><br>${sede.detalles}</p>
            <div class="lugar-tags">${sede.etiquetas.map(e => `<span class="lugar-tag">${e}</span>`).join('')}</div>
          </div>`;
      }

      const insc     = CONFIG.contacto.inscripcion;
      const inscTitle = document.getElementById('inscripcionTitle');
      const inscDesc  = document.getElementById('inscripcionDesc');
      const inscBtn   = document.getElementById('inscripcionBtn');
      if (inscTitle) inscTitle.textContent = insc.titulo;
      if (inscDesc)  inscDesc.textContent  = insc.texto;
      if (inscBtn)   { inscBtn.href = insc.url; inscBtn.textContent = insc.boton; }
    }

    /* ----------------------------------------------------------
       RENDER — Textos estáticos del hero / footer
    ---------------------------------------------------------- */
    function renderStaticText() {
      const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      const setHtml = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML   = v; };

      setText('hero-org-full', CONFIG.evento.organizacion);
      setHtml('hero-date-city', `<strong>${CONFIG.evento.fechaLarga}</strong>&nbsp;·&nbsp;${CONFIG.evento.ciudad}`);
      setHtml('prog-label',    `${CONFIG.evento.fechaLarga} · ${CONFIG.evento.ciudad}`);
      setText('footerTitle',   `${CONFIG.evento.titulo} ${CONFIG.evento.nombre.split(' ').pop()}`);
      setHtml('footerMeta',    `${CONFIG.evento.fechaLarga} · ${CONFIG.evento.ciudad}`);
      setText('footerOrg',     `${CONFIG.evento.organizacion} · Todos los derechos reservados`);

      const badge = document.querySelector('.nav-date-badge');
      if (badge) badge.textContent = CONFIG.evento.fechaCorta;
    }

    /* ----------------------------------------------------------
       CARRUSEL — Programa científico
    ---------------------------------------------------------- */
    (function initProgramaCarousel() {
      const track    = document.getElementById('progTrack');
      const dotsWrap = document.getElementById('progDots');
      const prevBtn  = document.getElementById('progPrev');
      const nextBtn  = document.getElementById('progNext');
      if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

      const slides    = () => track.querySelectorAll('.prog-slide');
      let   current   = 0;
      let   touchStartX = 0;

      const goTo = (idx) => {
        const total = slides().length;
        current = Math.max(0, Math.min(idx, total - 1));
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsWrap.querySelectorAll('.prog-dot').forEach((d, i) => {
          d.classList.toggle('is-active', i === current);
          d.setAttribute('aria-selected', i === current);
        });
        document.querySelectorAll('.prog-list-item').forEach(el => {
          const active = parseInt(el.dataset.slide) === current;
          el.classList.toggle('is-active', active);
          el.setAttribute('aria-selected', active);
        });
      };

      const buildDots = () => {
        dotsWrap.innerHTML = '';
        slides().forEach((_, i) => {
          const d = document.createElement('div');
          d.className = 'prog-dot' + (i === 0 ? ' is-active' : '');
          d.setAttribute('role', 'tab');
          d.setAttribute('aria-label', `Sesión ${i + 1}`);
          d.addEventListener('click', () => goTo(i));
          dotsWrap.appendChild(d);
        });
      };

      prevBtn.addEventListener('click', () => goTo(current - 1));
      nextBtn.addEventListener('click', () => goTo(current + 1));

      track.addEventListener('click', e => {
        const item = e.target.closest('.prog-list-item');
        if (item) goTo(parseInt(item.dataset.slide));
      });
      track.addEventListener('keydown', e => {
        const item = e.target.closest('.prog-list-item');
        if (item && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); goTo(parseInt(item.dataset.slide)); }
      });
      track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend',   e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
      }, { passive: true });

      buildDots();
      goTo(0);
    })();

    /* ----------------------------------------------------------
       NAV — clase "scrolled"
    ---------------------------------------------------------- */
    (function initNav() {
      const nav = document.getElementById('mainNav');
      if (!nav) return;
      const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
      window.addEventListener('scroll', update, { passive: true });
      update();
    })();

    /* ----------------------------------------------------------
       REVEAL — IntersectionObserver
    ---------------------------------------------------------- */
    (function initReveal() {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });

      const observeAll = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => obs.observe(el));
      setTimeout(observeAll, 50);
      window.addEventListener('scroll', observeAll, { passive: true, once: true });
    })();

    /* ----------------------------------------------------------
       PUNTO DE ENTRADA
    ---------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
      renderStaticText();
      renderHeroStats();
      renderSpeakers();
      renderPrograma();
      renderPatrocinantes();
      renderContacto();

      setTimeout(() => {
        document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
          new IntersectionObserver(([entry], o) => {
            if (entry.isIntersecting) { entry.target.classList.add('is-visible'); o.unobserve(entry.target); }
          }, { threshold: 0.1 }).observe(el);
        });
      }, 100);
    });