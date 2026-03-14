// ════════════════════════════════════════════════════════
//  CONFIGURACIÓN
// ════════════════════════════════════════════════════════
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/TU_URL_AQUI/exec';

const MESONES = 8;
const SILLAS  = 10;

// ════════════════════════════════════════════════════════
//  ESTADO
// ════════════════════════════════════════════════════════
let usuario   = null;   // { cedula, nombre, codigo }
let asientos  = {};     // { 'M1S3': { nombre, cedula } }
let miAsiento = null;   // 'M1S3'
let seleccion = null;   // 'M2S5' (pendiente de confirmar)

// ════════════════════════════════════════════════════════
//  NAV — clase scrolled
// ════════════════════════════════════════════════════════
(function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ════════════════════════════════════════════════════════
//  INICIO
// ════════════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const cedula = params.get('cedula');
  const codigo = params.get('codigo');

  if (!cedula || !codigo) {
    mostrarError();
    return;
  }

  mostrarOverlay(true);

  try {
    const res  = await fetch(`${APPS_SCRIPT_URL}?action=asientos&cedula=${cedula}&codigo=${codigo}`);
    const data = await res.json();

    if (!data.ok) { mostrarError(); return; }

    usuario   = { cedula: data.cedula, nombre: data.nombre, codigo: data.codigo };
    asientos  = data.asientos  || {};
    miAsiento = data.miAsiento || null;

    iniciarUI();
  } catch (e) {
    mostrarError('Error al conectar con el servidor. Intenta de nuevo.');
  } finally {
    mostrarOverlay(false);
  }
});

// ════════════════════════════════════════════════════════
//  UI
// ════════════════════════════════════════════════════════
function iniciarUI() {
  document.getElementById('user-badge').style.display = 'flex';
  document.getElementById('badge-nombre').textContent = usuario.nombre;
  document.getElementById('badge-cedula').textContent = 'C.I. ' + usuario.cedula;
  document.getElementById('avatar-initials').textContent =
    usuario.nombre.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  if (miAsiento) {
    document.getElementById('asiento-actual').style.display = 'flex';
    document.getElementById('asiento-actual-valor').textContent = formatAsiento(miAsiento);
  }

  document.getElementById('contenido').style.display = 'block';
  renderizarSala();
}

function renderizarSala() {
  const sala = document.getElementById('sala');
  sala.innerHTML = '';

  for (let m = 1; m <= MESONES; m++) {
    const esPonentes = (m === 1);

    const wrap = document.createElement('div');
    wrap.className = 'seat-meson-wrap';

    const label = document.createElement('div');
    label.className = 'seat-meson-label';
    label.innerHTML = esPonentes
      ? `Mesón ${m} <span class="seat-meson-label__tag">🎤 Ponentes</span>`
      : `Mesón ${m}`;
    wrap.appendChild(label);

    const meson = document.createElement('div');
    meson.className = 'seat-meson' + (esPonentes ? ' seat-meson--ponentes' : '');
    meson.setAttribute('role', 'row');

    for (let s = 1; s <= SILLAS; s++) {
      const key      = `M${m}S${s}`;
      const ocupante = asientos[key];
      const esMio    = miAsiento === key;
      const esSel    = seleccion === key;

      const silla = document.createElement('div');
      silla.setAttribute('role', 'gridcell');

      if (esPonentes) {
        silla.className = 'seat-silla seat-silla--ocupado';
        silla.setAttribute('aria-label', `Mesón ${m} silla ${s} — reservado ponentes`);
        silla.innerHTML = `
          <span class="seat-silla__num">${s}</span>
          <span class="seat-silla__sub">M${m}</span>
          <div class="seat-tooltip">Reservado para ponentes</div>`;
      } else {
        let estado = 'libre';
        if (esMio) estado = 'mio';
        else if (esSel) estado = 'seleccionado';
        else if (ocupante) estado = 'ocupado';

        silla.className = `seat-silla seat-silla--${estado}`;
        silla.dataset.key = key;

        const tooltipTxt = esMio
          ? '✓ Tu asiento'
          : ocupante ? ocupante.nombre : '';

        silla.setAttribute('aria-label',
          `Mesón ${m} silla ${s} — ${estado === 'libre' ? 'disponible' : estado === 'mio' ? 'tu asiento' : estado === 'ocupado' ? 'ocupado' : 'seleccionado'}`);

        silla.innerHTML = `
          <span class="seat-silla__num">${s}</span>
          <span class="seat-silla__sub">M${m}</span>
          ${tooltipTxt ? `<div class="seat-tooltip">${tooltipTxt}</div>` : ''}`;

        if (!ocupante || esMio) {
          silla.addEventListener('click', () => seleccionarSilla(key, silla));
        }
      }

      meson.appendChild(silla);
    }

    wrap.appendChild(meson);
    sala.appendChild(wrap);
  }
}

function seleccionarSilla(key, el) {
  if (key === miAsiento) return;

  // Deseleccionar anterior
  if (seleccion) {
    const prev = document.querySelector(`.seat-silla[data-key="${seleccion}"]`);
    if (prev) {
      const eraOcupado = asientos[seleccion] && asientos[seleccion].cedula !== usuario.cedula;
      prev.className = `seat-silla seat-silla--${eraOcupado ? 'ocupado' : 'libre'}`;
    }
  }

  seleccion    = key;
  el.className = 'seat-silla seat-silla--seleccionado';

  document.getElementById('sel-label').textContent = formatAsiento(key);
  document.getElementById('panel-confirmar').classList.add('seat-confirm-panel--visible');
}

function formatAsiento(key) {
  const m = key.match(/M(\d+)S(\d+)/);
  return m ? `Mesón ${m[1]} · Silla ${m[2]}` : key;
}

// ════════════════════════════════════════════════════════
//  CONFIRMAR
// ════════════════════════════════════════════════════════
async function confirmarAsiento() {
  if (!seleccion) return;

  const btn = document.getElementById('btn-confirmar');
  btn.disabled    = true;
  btn.textContent = 'Guardando...';
  mostrarOverlay(true);

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body  : JSON.stringify({
        action : 'guardar_asiento',
        cedula : usuario.cedula,
        codigo : usuario.codigo,
        asiento: seleccion,
      }),
    });
    const data = await res.json();

    if (data.ok) {
      if (miAsiento && miAsiento !== seleccion) delete asientos[miAsiento];

      miAsiento            = seleccion;
      asientos[seleccion]  = { nombre: usuario.nombre, cedula: usuario.cedula };
      seleccion            = null;

      document.getElementById('panel-confirmar').classList.remove('seat-confirm-panel--visible');
      document.getElementById('asiento-actual').style.display = 'flex';
      document.getElementById('asiento-actual-valor').textContent = formatAsiento(miAsiento);

      mostrarToast('✅ ¡Asiento confirmado! ' + formatAsiento(miAsiento), 'success');
      renderizarSala();
    } else {
      await recargarAsientos();
      mostrarToast('❌ ' + (data.mensaje || 'El asiento pudo haber sido tomado.'), 'error');
    }
  } catch (e) {
    mostrarToast('❌ Error de conexión. Intenta de nuevo.', 'error');
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Confirmar asiento →';
    mostrarOverlay(false);
  }
}

async function recargarAsientos() {
  const params = new URLSearchParams(window.location.search);
  try {
    const res  = await fetch(`${APPS_SCRIPT_URL}?action=asientos&cedula=${params.get('cedula')}&codigo=${params.get('codigo')}`);
    const data = await res.json();
    if (data.ok) {
      asientos  = data.asientos  || {};
      miAsiento = data.miAsiento || null;
      seleccion = null;
      renderizarSala();
    }
  } catch (e) { /* silencioso */ }
}

// ════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════
function mostrarToast(msg, tipo) {
  const el = document.getElementById('estado');
  el.textContent = msg;
  el.className   = `seat-toast seat-toast--${tipo}`;
  el.style.display = 'block';
  el.getBoundingClientRect(); // reflow
  el.classList.add('seat-toast--visible');

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    el.classList.remove('seat-toast--visible');
    setTimeout(() => { el.style.display = 'none'; }, 300);
  }, tipo === 'error' ? 8000 : 5000);
}

function mostrarError(msg) {
  document.getElementById('login-screen').style.display = 'flex';
  if (msg) document.getElementById('login-msg').textContent = msg;
  mostrarOverlay(false);
}

function mostrarOverlay(visible) {
  document.getElementById('overlay').classList.toggle('seat-overlay--visible', visible);
}