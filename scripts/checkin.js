// ════════════════════════════════════════════════════════
//  CONFIGURACIÓN
// ════════════════════════════════════════════════════════
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxO7AfJTNerfuYpkYXsAup0w5_MCA9A1j81vrwYmJ02yq66Uu3ttY9GCcomWJUo2BRL/exec';

// ════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════
document.getElementById('cedula-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') hacerCheckin();
});

// ════════════════════════════════════════════════════════
//  CHECK-IN
// ════════════════════════════════════════════════════════
async function hacerCheckin() {
  const cedula  = document.getElementById('cedula-input').value.replace(/\D/g, '');
  const errEl   = document.getElementById('msg-error');
  const inputEl = document.getElementById('cedula-input');

  errEl.classList.remove('checkin-msg-error--show');
  inputEl.classList.remove('checkin-input--error');

  if (cedula.length < 5) {
    inputEl.classList.add('checkin-input--error');
    errEl.textContent = 'Ingresa un número de cédula válido.';
    errEl.classList.add('checkin-msg-error--show');
    return;
  }

  const btn = document.getElementById('btn-checkin');
  btn.disabled  = true;
  btn.innerHTML = '<span class="checkin-spinner-inline"></span> Verificando...';
  document.getElementById('overlay').classList.add('checkin-overlay--visible');

  try {
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body  : JSON.stringify({ action: 'checkin', cedula }),
    });
    const data = await resp.json();

    if (!data.ok) {
      const mensajes = {
        'no_encontrado': '❌ No encontramos ninguna inscripción con esa cédula.<br><span style="font-size:12px;opacity:0.8;">Si deseas asistir, por favor consulta con el equipo de protocolo.</span>',
        'no_validado'  : '⚠️ Tu inscripción existe pero el pago aún no ha sido validado.<br><span style="font-size:12px;opacity:0.8;">Por favor contáctate con el equipo de protocolo para regularizar tu situación.</span>',
      };
      errEl.innerHTML = mensajes[data.codigo] || data.mensaje || 'Error al verificar la cédula. Consulta con protocolo.';
      errEl.classList.add('checkin-msg-error--show');
      inputEl.classList.add('checkin-input--error');
      return;
    }

    // Mismo display para primer ingreso y reingresos.
    // Si ya registró antes, muestra la hora original de entrada.
    document.getElementById('w-nombre').textContent    = data.nombre;
    document.getElementById('w-cedula').textContent    = data.cedula;
    document.getElementById('w-categoria').textContent = data.categoria;
    document.getElementById('w-hora').textContent      = data.yaRegistrado
      ? data.horaAnterior
      : data.horaCheckin;
    document.getElementById('w-sub').textContent       = '¡Bienvenido/a a la Jornada!';

    // Asiento
    const asientoRow = document.getElementById('w-asiento-row');
    const asientoVal = document.getElementById('w-asiento');

    asientoRow.classList.remove('checkin-info-row--ok', 'checkin-info-row--warn');
    asientoVal.classList.remove('checkin-info-row__value--ok', 'checkin-info-row__value--warn');

    if (data.asiento) {
      const m = data.asiento.match(/M(\d+)S(\d+)/);
      asientoVal.textContent = m ? `Mesón ${m[1]} · Silla ${m[2]}` : data.asiento;
      asientoRow.classList.add('checkin-info-row--ok');
      asientoVal.classList.add('checkin-info-row__value--ok');
    } else {
      asientoVal.textContent = 'Sin asiento asignado — Por favor comuníquese con el equipo de protocolo';
      asientoRow.classList.add('checkin-info-row--warn');
      asientoVal.classList.add('checkin-info-row__value--warn');
    }

    mostrarScreen('screen-bienvenida');

  } catch (e) {
    errEl.textContent = 'Error de conexión. Verifica la señal e intenta de nuevo.';
    errEl.classList.add('checkin-msg-error--show');
  } finally {
    btn.disabled  = false;
    btn.innerHTML = 'Registrar asistencia →';
    document.getElementById('overlay').classList.remove('checkin-overlay--visible');
  }
}

// ════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════
function mostrarScreen(id) {
  document.querySelectorAll('.checkin-screen')
          .forEach(s => s.classList.remove('checkin-screen--active'));
  document.getElementById(id).classList.add('checkin-screen--active');
}

function resetear() {
  const input = document.getElementById('cedula-input');
  input.value = '';
  input.classList.remove('checkin-input--error');
  document.getElementById('msg-error').classList.remove('checkin-msg-error--show');
  mostrarScreen('screen-login');
  setTimeout(() => input.focus(), 100);
}