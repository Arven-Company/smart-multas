/* Smart Multas — mock do app de recurso (client-side, nenhum dado é enviado) */
(function () {
  'use strict';

  var DATA = window.SM_MULTAS || [];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var state = { step: 1, fine: null, answers: {}, theses: [], plan: { name: 'Petição', price: '39,90' }, pay: 'pix', dados: {} };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function wait(ms) { return reduceMotion ? 0 : ms; }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function sevClass(g) { return 'sev sev-' + norm(g); }

  /* ---------- toast ---------- */
  var toastEl = $('#toast'), toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, 2800);
  }

  /* ---------- navegação entre passos ---------- */
  function goTo(n) {
    state.step = n;
    $$('.app-card').forEach(function (c) { c.classList.toggle('active', +c.dataset.step === n); });
    $$('.step-item').forEach(function (s) {
      var k = +s.dataset.step;
      s.classList.toggle('active', k === n);
      s.classList.toggle('done', k < n);
    });
    if (history.replaceState) history.replaceState(null, '', '#passo-' + n);
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    if (n === 3) runAnalysis();
    if (n === 6) renderPetition();
  }
  $$('[data-back]').forEach(function (b) { b.addEventListener('click', function () { goTo(Math.max(1, state.step - 1)); }); });

  /* ---------- passo 1: infração ---------- */
  var codeInput = $('#code'), fineCard = $('#fine-card'), fineNone = $('#fine-none'), next1 = $('#next-1');

  function findFine(q) {
    var t = norm(q.trim());
    if (!t) return null;
    var digits = t.replace(/[^0-9]/g, '');
    var hit = null;
    if (digits) {
      hit = DATA.find(function (m) { return m.c === digits; }) ||
            DATA.find(function (m) { return m.c.indexOf(digits) === 0 && digits.length >= 3; }) ||
            DATA.find(function (m) { return m.c.indexOf(digits) >= 0 && digits.length >= 4; });
    }
    if (!hit && t.length >= 4) {
      hit = DATA.find(function (m) { return norm(m.n).indexOf(t) >= 0 || norm(m.s).indexOf(t) >= 0; });
    }
    return hit || null;
  }

  function showFine(f) {
    state.fine = f;
    fineNone.classList.remove('on');
    if (!f) { fineCard.classList.remove('on'); next1.disabled = true; return; }
    $('#fc-code').textContent = 'Cód. ' + f.c;
    $('#fc-sev').className = sevClass(f.g);
    $('#fc-sev').textContent = f.g;
    $('#fc-cat').textContent = f.k;
    $('#fc-name').textContent = f.n;
    $('#fc-value').textContent = f.v;
    $('#fc-points').textContent = f.p + ' pontos';
    $('#fc-art').textContent = f.a.replace(' do CTB', '');
    $('#fc-warn').textContent = f.w ? 'Cabe (Art. 267)' : 'Não cabe';
    $('#fc-warn').className = f.w ? 'green' : '';
    fineCard.classList.add('on');
    next1.disabled = false;
    $$('#code-chips button').forEach(function (b) { b.classList.toggle('active', b.dataset.code === f.c); });
  }

  var typeTimer;
  codeInput.addEventListener('input', function () {
    clearTimeout(typeTimer);
    typeTimer = setTimeout(function () {
      var v = codeInput.value;
      if (!v.trim()) { showFine(null); return; }
      var f = findFine(v);
      if (f) showFine(f); else { showFine(null); fineNone.classList.add('on'); }
    }, 180);
  });
  $$('#code-chips button').forEach(function (b) {
    b.addEventListener('click', function () {
      codeInput.value = b.dataset.code;
      showFine(findFine(b.dataset.code));
    });
  });

  // OCR simulado
  var ocr = $('#ocr'), ocrBar = $('#ocr-bar'), ocrMsg = $('#ocr-msg'), dropzone = $('#dropzone'), fileInput = $('#file');
  function runOcr(label) {
    ocr.classList.remove('finished');
    ocr.classList.add('on');
    ocrMsg.textContent = label || 'Lendo a notificação…';
    ocrBar.style.width = '0';
    requestAnimationFrame(function () { ocrBar.style.width = '100%'; });
    setTimeout(function () { ocrMsg.textContent = 'Identificando código, auto e datas…'; }, wait(600));
    setTimeout(function () {
      ocr.classList.add('finished');
      ocrMsg.textContent = 'Leitura concluída';
      codeInput.value = '7455';
      showFine(findFine('7455'));
      state.dados.auto = 'AB01234567';
      state.dados.placa = 'ABC1D23';
      toast('Notificação lida: código 745-5 preenchido');
      fineCard.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }, wait(1500));
  }
  $('#btn-scan').addEventListener('click', function () { fileInput.click(); });
  fileInput.addEventListener('change', function () { if (fileInput.files.length) runOcr('Lendo ' + fileInput.files[0].name + '…'); });
  $('#dz-example').addEventListener('click', function () { runOcr('Lendo notificação de exemplo…'); });
  ['dragenter', 'dragover'].forEach(function (ev) { dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.add('drag'); }); });
  ['dragleave', 'drop'].forEach(function (ev) { dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.remove('drag'); }); });
  dropzone.addEventListener('drop', function (e) { var f = e.dataTransfer && e.dataTransfer.files[0]; runOcr(f ? 'Lendo ' + f.name + '…' : undefined); });

  next1.addEventListener('click', function () { if (state.fine) goTo(2); });

  /* ---------- passo 2: perguntas ---------- */
  var next2 = $('#next-2');
  var qNames = ['q_notif', 'q_prior', 'q_radar', 'q_sign'];
  function checkAnswers() {
    var ok = qNames.every(function (n) { return !!$('input[name="' + n + '"]:checked'); });
    next2.disabled = !ok;
    return ok;
  }
  $$('.app-card[data-step="2"] input[type="radio"]').forEach(function (r) { r.addEventListener('change', checkAnswers); });
  next2.addEventListener('click', function () {
    if (!checkAnswers()) return;
    qNames.forEach(function (n) { state.answers[n] = $('input[name="' + n + '"]:checked').value; });
    goTo(3);
  });

  /* ---------- passo 3: análise ---------- */
  var analysisTimers = [];
  function buildTheses() {
    var a = state.answers, f = state.fine, t = [];
    if (a.q_notif === 'nao') t.push({ law: 'Art. 281, II do CTB', title: 'Decadência do prazo de notificação', desc: 'A notificação de autuação foi expedida após 30 dias da infração. O CTB determina o arquivamento do auto e o cancelamento da penalidade.' });
    else if (a.q_notif === 'ns') t.push({ law: 'Art. 281, II do CTB', title: 'Verificação do prazo de notificação', desc: 'A petição exige a comprovação da data de expedição da notificação; se ultrapassados 30 dias, o auto é nulo.' });
    if (a.q_prior === 'nao' && f && f.w) t.push({ law: 'Art. 267 do CTB', title: 'Conversão em advertência por escrito', desc: 'Infração ' + norm(f.g) + ' sem reincidência nos últimos 12 meses: pedido de conversão da multa de ' + f.v + ' em advertência, sem pontos.' });
    if (a.q_radar === 'fixo' || a.q_radar === 'movel') t.push({ law: 'Resolução CONTRAN 798/20', title: 'Aferição do radar pelo INMETRO', desc: 'Pedido de juntada do laudo de verificação metrológica válido nos últimos 12 meses e da margem de erro aplicada. Sem laudo, a medição é nula.' });
    if (a.q_sign === 'nao' || a.q_sign === 'ns') t.push({ law: 'Art. 280 do CTB', title: 'Sinalização irregular ou ausente', desc: 'A autuação depende de sinalização regulamentar visível no local. Pedido de comprovação da sinalização e de anulação na sua falta.' });
    t.push({ law: 'Art. 280 do CTB', title: 'Requisitos formais do auto de infração', desc: 'Verificação de local, data e hora, identificação do veículo, do agente e do órgão. Vício insanável anula o procedimento.' });
    t.push({ law: 'Arts. 284 e 286 do CTB · CF, art. 5º, LV', title: 'Defesa sem pagamento prévio', desc: 'Garantia do contraditório e da ampla defesa: o recurso não exige a quitação da multa; a pontuação depende da decisão do órgão.' });
    return t;
  }
  function runAnalysis() {
    analysisTimers.forEach(clearTimeout); analysisTimers = [];
    var rows = $$('#analysis .an-row');
    rows.forEach(function (r) { r.classList.remove('run', 'ok'); });
    $('#result').classList.remove('on');
    $('#next-3').disabled = true;
    rows.forEach(function (r, i) {
      analysisTimers.push(setTimeout(function () { r.classList.add('run'); }, wait(200 + i * 650)));
      analysisTimers.push(setTimeout(function () { r.classList.remove('run'); r.classList.add('ok'); }, wait(750 + i * 650)));
    });
    analysisTimers.push(setTimeout(function () {
      state.theses = buildTheses();
      $('#result-title').textContent = state.theses.length + ' teses aplicáveis ao seu caso';
      $('#result-sub').textContent = state.fine.n + ' · ' + state.fine.a + ' · ' + state.fine.g + ' · ' + state.fine.p + ' pontos';
      $('#theses').innerHTML = state.theses.map(function (t) {
        return '<div class="thesis"><div class="mc-law">' + esc(t.law) + '</div><h4>' + esc(t.title) + '</h4><p>' + esc(t.desc) + '</p></div>';
      }).join('');
      $('#result').classList.add('on');
      $('#next-3').disabled = false;
    }, wait(900 + rows.length * 650)));
  }
  $('#next-3').addEventListener('click', function () { goTo(4); });

  /* ---------- passo 4: dados ---------- */
  var form = $('#form-dados');
  $('#next-4').addEventListener('click', function () {
    if (state.dados.auto && !$('#d-auto').value) $('#d-auto').value = state.dados.auto;
    if (state.dados.placa && !$('#d-placa').value) $('#d-placa').value = state.dados.placa;
    if (!form.reportValidity()) return;
    var fd = new FormData(form);
    fd.forEach(function (v, k) { state.dados[k] = String(v).trim(); });
    goTo(5);
  });

  /* ---------- passo 5: plano e pagamento ---------- */
  function updateTotal() {
    var r = $('input[name="plan"]:checked');
    state.plan = { name: r.dataset.name, price: r.value.replace('.', ',').replace(/,00$/, '') };
    $('#ps-plan').textContent = state.plan.name;
    $('#ps-total').textContent = state.plan.price;
  }
  $$('input[name="plan"]').forEach(function (r) { r.addEventListener('change', updateTotal); });
  updateTotal();
  $$('.pay-tabs button').forEach(function (b) {
    b.addEventListener('click', function () {
      state.pay = b.dataset.pay;
      $$('.pay-tabs button').forEach(function (x) { x.classList.toggle('active', x === b); });
      $$('.pay-view').forEach(function (v) { v.classList.toggle('active', v.dataset.pay === state.pay); });
    });
  });
  $('#pix-copy').addEventListener('click', function () {
    var inp = $('#pix-code');
    inp.select();
    try { document.execCommand('copy'); } catch (e) {}
    toast('Código PIX copiado (ilustrativo)');
  });
  // QR ilustrativo: padrão determinístico com localizadores
  (function drawQr() {
    var svg = $('#qr'), n = 25, seed = 7, out = '';
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    function finder(x, y) {
      out += '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#0F172A"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" fill="#fff"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" fill="#0F172A"/>';
    }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var inFinder = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
      if (!inFinder && rnd() > 0.55) out += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="#0F172A"/>';
    }
    finder(0, 0); finder(n - 7, 0); finder(0, n - 7);
    svg.innerHTML = out;
  })();
  $('#pay-btn').addEventListener('click', function () {
    var btn = this;
    btn.disabled = true;
    $('#pay-wait').classList.add('on');
    setTimeout(function () {
      $('#pay-wait').classList.remove('on');
      btn.disabled = false;
      toast('Pagamento aprovado (simulação)');
      goTo(6);
    }, wait(1700));
  });

  /* ---------- passo 6: petição ---------- */
  function renderPetition() {
    var f = state.fine, d = state.dados, t = state.theses;
    var orgao = d.orgao || 'DETRAN', uf = d.uf || 'MG';
    $('#doc-to').textContent = 'Ilmo. Sr. Diretor Presidente da JARI · ' + orgao.split(' · ')[0] + '/' + uf;
    $('#doc-ref').textContent = 'Defesa prévia · Auto de Infração nº ' + (d.auto || '—') + ' · Cód. ' + f.c + ' · Placa ' + (d.placa || '—').toUpperCase();
    $('#doc-fatos').textContent = (d.nome || 'O condutor') + ', CPF ' + (d.cpf || '—') + ', foi autuado por "' + f.n + '" (' + f.a + '), infração ' + norm(f.g) + ', com penalidade de ' + f.v + ' e ' + f.p + ' pontos na CNH' + (d.data ? ', em ' + d.data.split('-').reverse().join('/') : '') + '. Vem apresentar defesa pelos fundamentos a seguir.';
    $('#doc-teses').innerHTML = t.map(function (x) { return '<div class="doc-thesis"><svg class="ic" width="13" height="13"><use href="#i-check"/></svg> ' + esc(x.law) + ' · ' + esc(x.title) + '</div>'; }).join('');
    $('#doc-sign').textContent = 'Assinatura de ' + (d.nome || 'condutor') + ' · PDF A4 pronto para protocolo';
    $('#s-inf').textContent = f.c + ' · ' + f.a.replace(' do CTB', '');
    $('#s-grav').textContent = f.g + ' · ' + f.p + ' pontos';
    $('#s-val').textContent = f.v;
    $('#s-teses').textContent = t.length;
    $('#s-plano').textContent = state.plan.name;
    $('#s-pago').textContent = 'R$ ' + state.plan.price + ' · ' + (state.pay === 'pix' ? 'PIX' : 'cartão');
    var steps = state.plan.name === 'Protocolo e acompanhamento'
      ? ['Nossa equipe protocola o recurso no ' + orgao.split(' · ')[0] + ' em até 2 dias úteis.', 'Um advogado acompanha o andamento e responde exigências.', 'Você acompanha o status aqui, em "Minhas petições".']
      : ['Imprima e assine a petição.', 'Anexe cópia da CNH, do CRLV e da notificação.', 'Protocole no ' + orgao.split(' · ')[0] + ': presencial, portal ou Correios com AR, dentro do prazo da notificação.', 'Guarde o comprovante de protocolo e acompanhe a decisão da JARI.'];
    $('#next-steps').innerHTML = steps.map(function (s, i) { return '<li><b>' + (i + 1) + '</b><span>' + esc(s) + '</span></li>'; }).join('');
  }
  $('#btn-pdf').addEventListener('click', function () { toast('Demonstração: no app real o PDF é baixado aqui'); });
  $('#restart').addEventListener('click', function () {
    state = { step: 1, fine: null, answers: {}, theses: [], plan: state.plan, pay: 'pix', dados: {} };
    codeInput.value = ''; showFine(null); ocr.classList.remove('on', 'finished');
    $$('.app-card[data-step="2"] input[type="radio"]').forEach(function (r) { r.checked = false; }); checkAnswers();
    form.reset();
    goTo(1);
  });

  /* ---------- início: ?codigo= e hash ---------- */
  var params = new URLSearchParams(location.search);
  var pre = params.get('codigo');
  if (pre) {
    var f0 = findFine(pre);
    if (f0) { codeInput.value = f0.c; showFine(f0); }
  }
  goTo(1);
})();
