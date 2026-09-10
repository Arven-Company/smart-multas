/* Smart Multas — interações da landing page */
(function () {
  'use strict';

  var APP_URL = 'https://smartmultas.com.br/define-violation';

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
      window.location.href = APP_URL;
    });
  }
})();
