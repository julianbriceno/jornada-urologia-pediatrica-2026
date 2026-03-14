// ══════════════════════════════════════════════════
// CONFIGURACIÓN
// ══════════════════════════════════════════════════
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxO7AfJTNerfuYpkYXsAup0w5_MCA9A1j81vrwYmJ02yq66Uu3ttY9GCcomWJUo2BRL/exec';

// Valores por categoría — deben coincidir con la config del Apps Script
const VALORES_CATEGORIA = {
  'Médico General'            : 300,
  'Médico Especialista'       : 500,
  'Residente / Interno'       : 200,
  'Estudiante de Medicina'    : 100,
  'Otro profesional de salud' : 100,
};

// ══════════════════════════════════════════════════
// NAV — clase scrolled
// ══════════════════════════════════════════════════
(function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ══════════════════════════════════════════════════
// TABS
// ══════════════════════════════════════════════════
function switchTab(tab) {
  document.querySelectorAll('.insc-tab').forEach(t => t.classList.remove('insc-tab--active'));
  document.querySelectorAll('.insc-panel').forEach(p => p.classList.remove('insc-panel--active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('insc-tab--active');
  document.getElementById(`panel-${tab}`).classList.add('insc-panel--active');
}

// ══════════════════════════════════════════════════
// FILE UPLOAD — Formulario nuevo
// ══════════════════════════════════════════════════
const comprobanteInput = document.getElementById('comprobanteFile');
const fileDrop         = document.getElementById('fileDrop');

comprobanteInput.addEventListener('change', function () {
  handleFile(this.files[0], 'filePreview', 'fileName', 'fileDrop');
});

fileDrop.addEventListener('dragover',  e => { e.preventDefault(); fileDrop.classList.add('insc-filedrop--dragover'); });
fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('insc-filedrop--dragover'));
fileDrop.addEventListener('drop', e => {
  e.preventDefault();
  fileDrop.classList.remove('insc-filedrop--dragover');
  const file = e.dataTransfer.files[0];
  if (file) { comprobanteInput.files = e.dataTransfer.files; handleFile(file, 'filePreview', 'fileName', 'fileDrop'); }
});

function handleFile(file, previewId, nameId, dropId) {
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    alert('El archivo supera el límite de 5 MB. Por favor comprime la imagen.');
    return;
  }
  document.getElementById(nameId).textContent = file.name;
  document.getElementById(previewId).classList.add('insc-filepreview--show');
  document.getElementById(dropId).style.display = 'none';
  clearError('comprobante');
}

function removeFile(e) {
  e.stopPropagation();
  comprobanteInput.value = '';
  document.getElementById('filePreview').classList.remove('insc-filepreview--show');
  document.getElementById('fileDrop').style.display = '';
}

// FILE UPLOAD — Complemento pago
const comprobanteAdicional = document.getElementById('comprobanteAdicional');
const fileDrop2            = document.getElementById('fileDrop2');

comprobanteAdicional.addEventListener('change', function () {
  handleFile(this.files[0], 'filePreview2', 'fileName2', 'fileDrop2');
});

fileDrop2.addEventListener('dragover',  e => { e.preventDefault(); fileDrop2.classList.add('insc-filedrop--dragover'); });
fileDrop2.addEventListener('dragleave', () => fileDrop2.classList.remove('insc-filedrop--dragover'));
fileDrop2.addEventListener('drop', e => {
  e.preventDefault();
  fileDrop2.classList.remove('insc-filedrop--dragover');
  const file = e.dataTransfer.files[0];
  if (file) { comprobanteAdicional.files = e.dataTransfer.files; handleFile(file, 'filePreview2', 'fileName2', 'fileDrop2'); }
});

function removeFile2(e) {
  e.stopPropagation();
  comprobanteAdicional.value = '';
  document.getElementById('filePreview2').classList.remove('insc-filepreview--show');
  document.getElementById('fileDrop2').style.display = '';
}

// ══════════════════════════════════════════════════
// NOTA PAGO PARCIAL
// ══════════════════════════════════════════════════
function evaluarNotaParcial() {
  const raw           = document.getElementById('monto').value.replace(/[^0-9]/g, '');
  const monto         = parseInt(raw || '0');
  const categoria     = document.getElementById('categoria').value;
  const valorEsperado = VALORES_CATEGORIA[categoria] || 0;
  const esParcial     = monto > 0 && valorEsperado > 0 && monto < valorEsperado;
  document.getElementById('partialNote').classList.toggle('insc-partial-note--show', esParcial);
}

document.getElementById('monto').addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
  evaluarNotaParcial();
  clearError('monto');
});

document.getElementById('monto').addEventListener('blur', function () {
  const raw = this.value.replace(/[^0-9]/g, '');
  if (raw && parseInt(raw) > 0) this.value = parseInt(raw).toLocaleString('es-VE');
  evaluarNotaParcial();
});

document.getElementById('categoria').addEventListener('change', evaluarNotaParcial);

// ══════════════════════════════════════════════════
// VALIDACIÓN
// ══════════════════════════════════════════════════
function clearError(field) {
  const input = document.getElementById(field);
  const err   = document.getElementById('err-' + field);
  if (input) input.classList.remove('insc-input--error');
  if (err)   err.classList.remove('insc-error--show');
}

function showError(field, msg) {
  const input = document.getElementById(field);
  const err   = document.getElementById('err-' + field);
  if (input) input.classList.add('insc-input--error');
  if (err)   { if (msg) err.textContent = msg; err.classList.add('insc-error--show'); }
}

['nombre','cedula','telefono','correo','categoria','monto'].forEach(f => {
  const el = document.getElementById(f);
  if (el) el.addEventListener('input', () => clearError(f));
});

function validateForm() {
  let valid = true;

  if (document.getElementById('nombre').value.trim().length < 3)
    { showError('nombre'); valid = false; }

  if (document.getElementById('cedula').value.replace(/\D/g,'').length < 5)
    { showError('cedula'); valid = false; }

  if (document.getElementById('telefono').value.replace(/\D/g,'').length < 7)
    { showError('telefono'); valid = false; }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('correo').value.trim()))
    { showError('correo'); valid = false; }

  if (!document.getElementById('categoria').value)
    { showError('categoria'); valid = false; }

  const montoRaw = document.getElementById('monto').value.replace(/[^0-9]/g, '');
  if (!montoRaw || parseInt(montoRaw) <= 0)
    { showError('monto', 'Ingresa el monto pagado.'); valid = false; }

  if (!comprobanteInput.files || !comprobanteInput.files[0]) {
    showError('comprobante');
    document.getElementById('fileDrop').classList.add('insc-filedrop--dragover');
    valid = false;
  }

  if (!document.getElementById('terminos').checked) {
    document.getElementById('err-terminos').classList.add('insc-error--show');
    valid = false;
  }

  return valid;
}

// ══════════════════════════════════════════════════
// SUBMIT — NUEVO INSCRITO
// ══════════════════════════════════════════════════
document.getElementById('formNuevo').addEventListener('submit', async function (e) {
  e.preventDefault();
  document.getElementById('errorBanner').classList.remove('insc-banner--show');

  if (!validateForm()) {
    const firstErr = document.querySelector('.insc-input--error, .insc-error--show');
    if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const btn = document.getElementById('btnSubmit');
  btn.disabled = true;
  btn.classList.add('loading');
  btn.querySelector('.btn-text').textContent = 'Enviando...';

  document.getElementById('ps1').classList.replace('insc-step--active', 'insc-step--done');
  document.getElementById('pl1').classList.add('insc-progress__line--done');
  document.getElementById('ps2').classList.add('insc-step--active');

  try {
    const file   = comprobanteInput.files[0];
    const base64 = await fileToBase64(file);

    const payload = {
      action   : 'nuevo',
      nombre   : document.getElementById('nombre').value.trim(),
      cedula   : document.getElementById('cedula').value.replace(/\D/g,''),
      telefono : document.getElementById('telefono').value.trim(),
      correo   : document.getElementById('correo').value.trim().toLowerCase(),
      categoria: document.getElementById('categoria').value,
      monto    : document.getElementById('monto').value.replace(/[^0-9]/g, ''),
      fileName : file.name,
      fileType : file.type,
      fileData : base64,
    };

    const resp = await fetch(APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
    const data = await resp.json();

    if (data.success) {
      document.getElementById('ps2').classList.replace('insc-step--active', 'insc-step--done');
      document.getElementById('pl2').classList.add('insc-progress__line--done');
      document.getElementById('ps3').classList.add('insc-step--active', 'insc-step--done');
      document.getElementById('successCode').textContent = data.codigo || '—';
      showSuccess('¡Tu registro fue enviado! El equipo revisará tu comprobante y te contactará pronto.');
    } else {
      throw new Error(data.message || 'Error desconocido');
    }

  } catch (err) {
    console.error(err);
    const banner = document.getElementById('errorBanner');
    banner.textContent = '⚠️ ' + (err.message || 'Error al enviar. Intenta de nuevo o contacta a los organizadores.');
    banner.classList.add('insc-banner--show');
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.querySelector('.btn-text').textContent = 'Enviar inscripción →';
    document.getElementById('ps1').classList.replace('insc-step--done', 'insc-step--active');
    document.getElementById('pl1').classList.remove('insc-progress__line--done');
    document.getElementById('ps2').classList.remove('insc-step--active');
  }
});

// ══════════════════════════════════════════════════
// BUSCAR INSCRIPCIÓN
// ══════════════════════════════════════════════════
async function buscarInscripcion() {
  const cedula    = document.getElementById('cedulaBuscar').value.replace(/\D/g,'');
  const errBanner = document.getElementById('errorBanner2');
  errBanner.classList.remove('insc-banner--show');

  if (cedula.length < 5) {
    errBanner.textContent = '⚠️ Ingresa un número de cédula válido.';
    errBanner.classList.add('insc-banner--show');
    return;
  }

  const btn = document.getElementById('btnBuscar');
  btn.disabled    = true;
  btn.textContent = 'Buscando...';

  try {
    const resp = await fetch(`${APPS_SCRIPT_URL}?action=buscar&cedula=${cedula}`);
    const data = await resp.json();

    if (data.found) {
      mostrarEstado(data);
    } else {
      errBanner.textContent = '⚠️ No encontramos ninguna inscripción con esa cédula. ¿Quieres registrarte como nuevo inscrito?';
      errBanner.classList.add('insc-banner--show');
    }
  } catch (err) {
    errBanner.textContent = '⚠️ Error al conectar. Por favor intenta de nuevo.';
    errBanner.classList.add('insc-banner--show');
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Buscar →';
  }
}

function mostrarEstado(data) {
  document.getElementById('statusNombre').textContent = data.nombre;
  document.getElementById('statusCodigo').textContent = 'Código: ' + data.codigo;

  const badge = document.getElementById('statusBadge');
  badge.className = 'insc-badge';
  const estados = {
    'PENDIENTE': { cls: 'insc-badge--pendiente', txt: '⏳ Pendiente' },
    'PARCIAL'  : { cls: 'insc-badge--parcial',   txt: '💳 Parcial'   },
    'VALIDADO' : { cls: 'insc-badge--validado',  txt: '✅ Validado'  },
    'RECHAZADO': { cls: 'insc-badge--rechazado', txt: '❌ Rechazado' },
  };
  const est = estados[data.estado] || estados['PENDIENTE'];
  badge.classList.add(est.cls);
  badge.textContent = est.txt;

  const detalles = {
    'PENDIENTE': `Tu comprobante fue recibido el <strong>${data.fecha || '—'}</strong> y está siendo revisado por el equipo.`,
    'PARCIAL'  : `Registramos un pago de <strong>$${formatNum(data.monto)}</strong>. Puedes enviar un comprobante adicional para completar tu inscripción.`,
    'VALIDADO' : `¡Tu pago fue confirmado! Tu acceso al congreso está <strong>habilitado</strong>. Revisa tu correo con las instrucciones de acceso.`,
    'RECHAZADO': `Tu comprobante no pudo ser verificado. <strong>Motivo:</strong> ${data.motivo || 'No especificado'}. Por favor sube un comprobante corregido.`,
  };
  document.getElementById('statusDetail').innerHTML = detalles[data.estado] || detalles['PENDIENTE'];

  document.getElementById('complementoPago').style.display = data.estado !== 'VALIDADO' ? 'block' : 'none';

  // Botón de asientos (solo si VALIDADO)
  const btnExistente = document.getElementById('btnSeleccionarAsiento');
  if (btnExistente) btnExistente.remove();

  if (data.estado === 'VALIDADO') {
    const linkAsiento = '../asientos/index.html?action=asientos&cedula=' + data.cedula + '&codigo=' + data.codigo;
    const div = document.createElement('div');
    div.id = 'btnSeleccionarAsiento';
    div.style.cssText = 'margin-top:16px;text-align:center;';
    div.innerHTML =
      `<a href="${linkAsiento}" target="_blank" class="btn-primary" style="font-size:13px;padding:12px 24px;text-decoration:none;">
         🎟 Seleccionar mi asiento →
       </a>
       <p style="font-size:12px;color:var(--color-muted);margin-top:8px;">Elige tu lugar en el congreso</p>`;
    document.getElementById('statusCard').appendChild(div);
  }

  const titulo = document.getElementById('tituloComplemento');
  const btnTxt = document.querySelector('#btnComplemento .btn-text');
  if (data.estado === 'RECHAZADO') {
    titulo.textContent = 'Subir comprobante corregido';
    btnTxt.textContent = 'Enviar comprobante corregido →';
  } else if (data.estado === 'PENDIENTE') {
    titulo.textContent = 'Agregar comprobante adicional';
    btnTxt.textContent = 'Enviar comprobante adicional →';
  } else {
    titulo.textContent = 'Completar pago';
    btnTxt.textContent = 'Enviar pago adicional →';
  }

  document.getElementById('statusCard').dataset.codigo = data.codigo;
  document.getElementById('statusCard').dataset.cedula  = data.cedula;
  document.getElementById('statusCard').classList.add('insc-status--visible');
}

// ══════════════════════════════════════════════════
// ENVIAR COMPLEMENTO
// ══════════════════════════════════════════════════
async function enviarComplemento() {
  const btn       = document.getElementById('btnComplemento');
  const errBanner = document.getElementById('errorBanner2');
  errBanner.classList.remove('insc-banner--show');

  const monto  = document.getElementById('montoAdicional').value.replace(/\D/g,'');
  const file   = comprobanteAdicional.files[0];
  const codigo = document.getElementById('statusCard').dataset.codigo;
  const cedula = document.getElementById('statusCard').dataset.cedula;

  if (!monto) { errBanner.textContent = '⚠️ Ingresa el monto del pago adicional.'; errBanner.classList.add('insc-banner--show'); return; }
  if (!file)  { errBanner.textContent = '⚠️ Adjunta el comprobante.';              errBanner.classList.add('insc-banner--show'); return; }

  btn.disabled = true;
  btn.classList.add('loading');
  btn.querySelector('.btn-text').textContent = 'Enviando...';

  try {
    const base64 = await fileToBase64(file);
    const payload = { action: 'complemento', codigo, cedula, monto, fileName: file.name, fileType: file.type, fileData: base64 };
    const resp    = await fetch(APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(payload) });
    const data    = await resp.json();

    if (data.success) {
      document.getElementById('successCode').textContent = codigo;
      showSuccess('Tu pago adicional fue registrado. El equipo lo revisará y te contactará pronto.');
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    errBanner.textContent = '⚠️ ' + (err.message || 'Error al enviar. Intenta de nuevo.');
    errBanner.classList.add('insc-banner--show');
    btn.disabled = false;
    btn.classList.remove('loading');
    btn.querySelector('.btn-text').textContent = 'Enviar pago adicional →';
  }
}

// ══════════════════════════════════════════════════
// MOSTRAR ÉXITO
// ══════════════════════════════════════════════════
function showSuccess(msg) {
  document.getElementById('successMsg').textContent = msg;
  document.querySelectorAll('.insc-panel').forEach(p => p.style.display = 'none');
  document.querySelector('.insc-tabs').style.display = 'none';
  document.getElementById('successScreen').classList.add('insc-success--show');
}

// ══════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatNum(n) {
  return parseInt(n || 0).toLocaleString('es-VE');
}

document.getElementById('cedulaBuscar').addEventListener('keydown', e => {
  if (e.key === 'Enter') buscarInscripcion();
});

document.getElementById('cedula').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g,'');
});