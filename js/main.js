/* Smart Multas — interações da landing page */
(function () {
  'use strict';

  var APP_URL = 'app/';

  /* ---------- header ---------- */
  var header = document.querySelector('.header');
  var onScroll = function () {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('nav-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- tabs do painel demo ---------- */
  var tabs = document.querySelectorAll('.demo-tab');
  var views = document.querySelectorAll('.demo-view');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      views.forEach(function (v) {
        v.classList.toggle('active', v.dataset.view === tab.dataset.view);
      });
    });
  });

  /* ---------- demo de análise da multa ---------- */
  var chatBody = document.getElementById('chat-body');
  var chatQuick = document.getElementById('chat-quick');
  var replayBtn = document.getElementById('chat-replay');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var script = [
    { who: 'in',  text: 'Recebi uma multa com o código 7455. Dá para recorrer?' },
    { who: 'out', text: 'Dá sim. Código 745-5: velocidade até 20% acima do limite (Art. 218, I do CTB). Infração média, 4 pontos, R$ 130,16. Vou verificar as brechas. A notificação chegou mais de 30 dias depois da data da infração?' },
    { who: 'in',  text: 'Sim, chegou com 42 dias.' },
    { who: 'out', text: 'Então o auto é nulo por decadência: o Art. 281, II do CTB exige a notificação em até 30 dias. Você teve outra multa nos últimos 12 meses?', event: 3 },
    { who: 'in',  text: 'Não, foi a primeira.' },
    { who: 'out', text: 'Ótimo. Também cabe a conversão em advertência por escrito (Art. 267). Vou incluir as duas teses e o pedido do laudo de aferição do radar (Resolução CONTRAN 798/20).', event: 5 },
    { who: 'sys', text: 'Petição gerada · PDF pronto para download', event: 6 }
  ];

  var quickReplies = [
    { q: 'E se o radar não tiver laudo?', a: 'Sem laudo de verificação do INMETRO válido nos últimos 12 meses, a medição é nula. A petição pede a juntada do laudo e a anulação em caso de ausência.' },
    { q: 'Preciso pagar a multa antes?', a: 'Não. Os Arts. 284 e 286 do CTB garantem a defesa prévia e o recurso à JARI sem pagamento prévio da penalidade.' },
    { q: 'Quanto custa?', a: 'R$ 39,90 pela petição em PDF. Com exames e laudos anexados, R$ 69,90. Protocolo e acompanhamento por advogado, R$ 690.' }
  ];

  var chatTimers = [];
  var chatStarted = false;

  function wait(ms) { return reduceMotion ? 0 : ms; }

  function later(fn, ms) {
    var t = setTimeout(fn, wait(ms));
    chatTimers.push(t);
  }

  function scrollChat() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function addMsg(who, text) {
    var el = document.createElement('div');
    if (who === 'sys') {
      el.className = 'msg-sys';
      el.innerHTML = '<svg width="13" height="13"><use href="#i-check"/></svg> ' + text;
    } else {
      el.className = 'msg msg-' + who;
      el.innerHTML = who === 'out' ? '<span class="msg-tag">IA Smart Multas</span>' + text : text;
    }
    chatBody.appendChild(el);
    scrollChat();
  }

  function showTyping() {
    var t = document.createElement('div');
    t.className = 'typing';
    t.innerHTML = '<i></i><i></i><i></i>';
    chatBody.appendChild(t);
    scrollChat();
    return t;
  }

  function fireEvent(step) {
    var ev = document.querySelector('.side-event[data-step="' + step + '"]');
    if (ev) ev.classList.add('on');
  }

  function playStep(i) {
    if (i >= script.length) { showQuickReplies(); return; }
    var m = script[i];
    if (m.who === 'out') {
      var typing = showTyping();
      later(function () {
        typing.remove();
        addMsg(m.who, m.text);
        if (m.event) fireEvent(m.event);
        later(function () { playStep(i + 1); }, 700);
      }, 1100);
    } else {
      addMsg(m.who, m.text);
      if (m.event) fireEvent(m.event);
      later(function () { playStep(i + 1); }, m.who === 'sys' ? 500 : 800);
    }
  }

  function showQuickReplies() {
    chatQuick.innerHTML = '';
    quickReplies.forEach(function (qr) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = qr.q;
      b.addEventListener('click', function () {
        b.remove();
        addMsg('in', qr.q);
        var typing = showTyping();
        later(function () {
          typing.remove();
          addMsg('out', qr.a);
        }, 900);
      });
      chatQuick.appendChild(b);
    });
  }

  function resetChat() {
    chatTimers.forEach(clearTimeout);
    chatTimers = [];
    chatBody.innerHTML = '';
    chatQuick.innerHTML = '';
    document.querySelectorAll('.side-event').forEach(function (e) { e.classList.remove('on'); });
  }

  function startChat() {
    resetChat();
    later(function () { playStep(0); }, 400);
  }

  if (chatBody) {
    replayBtn.addEventListener('click', startChat);
    var demo = document.getElementById('demo');
    var demoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !chatStarted) {
          chatStarted = true;
          startChat();
          demoObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });
    demoObserver.observe(demo);
  }

  /* ---------- faq ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- reveal on scroll ---------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  /* ---------- contadores ---------- */
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var decimals = parseInt(el.dataset.decimal || '0', 10);
    var duration = 1300;
    var start = null;

    function format(v) {
      var s = Math.abs(v).toFixed(decimals);
      if (decimals === 0) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      else s = s.replace('.', ',');
      return (el.dataset.prefix || '') + s + suffix;
    }
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(target * eased);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = format(target);
    }
    if (reduceMotion) { el.textContent = format(target); return; }
    requestAnimationFrame(frame);
  }
  var statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-val[data-count]').forEach(function (el) { statObserver.observe(el); });

  /* ---------- busca de código → app ---------- */
  var search = document.getElementById('code-search');
  if (search) {
    search.addEventListener('submit', function (e) {
      e.preventDefault();
      var code = (search.querySelector('input').value || '').replace(/[^0-9]/g, '');
      window.location.href = APP_URL + (code ? '?codigo=' + code : '');
    });
  }

  /* ---------- modal glass: tipos de multa ---------- */
  var modal = document.getElementById('modal-multas');
  if (modal) {
    var list = document.getElementById('modal-list');
    var cats = document.getElementById('modal-cats');
    var count = document.getElementById('modal-count');
    var q = document.getElementById('modal-q');
    var activeCat = 'Todas';
    var lastFocus = null;
    var dataLoading = false;

    function norm(s) {
      return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    function sevClass(g) {
      return 'sev sev-' + norm(g);
    }
    function esc(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function renderCats() {
      var all = ['Todas'].concat(window.SM_MULTAS.reduce(function (acc, m) { if (acc.indexOf(m.k) < 0) acc.push(m.k); return acc; }, []));
      cats.innerHTML = all.map(function (c) {
        return '<button type="button" class="' + (c === activeCat ? 'active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
      }).join('');
    }

    function renderList() {
      var term = norm(q.value.trim());
      var termDigits = term.replace(/[^0-9]/g, '');
      var items = window.SM_MULTAS.filter(function (m) {
        if (activeCat !== 'Todas' && m.k !== activeCat) return false;
        if (!term) return true;
        if (termDigits && (m.c.indexOf(termDigits) === 0 || norm(m.a).indexOf(termDigits) >= 0)) return true;
        return norm(m.n).indexOf(term) >= 0 || norm(m.a).indexOf(term) >= 0 || norm(m.s).indexOf(term) >= 0;
      });
      count.textContent = items.length === window.SM_MULTAS.length
        ? 'Exibindo todas as ' + items.length + ' infrações'
        : items.length + ' de ' + window.SM_MULTAS.length + ' infrações';
      if (!items.length) {
        list.innerHTML = '<div class="mult-empty">Nenhuma infração encontrada. Tente o código com 4 ou 5 dígitos, o artigo do CTB ou uma palavra da descrição.</div>';
        return;
      }
      list.innerHTML = items.map(function (m) {
        return '<div class="mult">' +
          '<div>' +
            '<div class="mult-top"><span class="mult-code">Cód. ' + esc(m.c) + '</span><span class="' + sevClass(m.g) + '">' + esc(m.g) + '</span><span class="mult-cat">' + esc(m.k) + '</span></div>' +
            '<div class="mult-name">' + esc(m.n) + '</div>' +
            '<div class="mult-meta">' + esc(m.a) + ' · ' + m.p + ' pontos · <b>' + esc(m.v) + '</b>' + (m.w ? ' · cabe advertência' : '') + '</div>' +
          '</div>' +
          '<div class="mult-actions">' +
            '<a class="btn btn-outline btn-sm" href="https://smartmultas.com.br/multas/' + esc(m.s) + '">Ver guia</a>' +
            '<a class="btn btn-primary btn-sm" href="' + APP_URL + '?codigo=' + esc(m.c) + '">Recorrer</a>' +
          '</div>' +
        '</div>';
      }).join('');
      list.scrollTop = 0;
    }

    function ready() {
      renderCats();
      renderList();
      q.focus();
    }

    function loadData() {
      if (window.SM_MULTAS) { ready(); return; }
      if (dataLoading) return;
      dataLoading = true;
      var s = document.createElement('script');
      s.src = 'js/multas-data.js';
      s.onload = ready;
      s.onerror = function () { list.innerHTML = '<div class="mult-empty">Não foi possível carregar o catálogo.</div>'; };
      document.head.appendChild(s);
    }

    function openModal() {
      lastFocus = document.activeElement;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      loadData();
    }
    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('[data-modal="multas"]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
    });
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', function (e) { if (e.target === el || el.classList.contains('modal-close')) closeModal(); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
    q.addEventListener('input', function () { if (window.SM_MULTAS) renderList(); });
    cats.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-cat]');
      if (!b) return;
      activeCat = b.dataset.cat;
      renderCats();
      renderList();
    });
  }
})();
