 let lang = 'my';
  let chatOpen = false;

  function setLang(l) {
    lang = l;
    document.getElementById('btn-my').classList.toggle('active', l === 'my');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.querySelectorAll('.my-text').forEach(el => el.style.display = l === 'my' ? '' : 'none');
    document.querySelectorAll('.en-text').forEach(el => el.style.display = l === 'en' ? '' : 'none');
  }

  function toggleChat() {
    chatOpen = !chatOpen;
    document.getElementById('chatBtns').style.display = chatOpen ? 'flex' : 'none';
    document.getElementById('chatBubble').style.display = chatOpen ? 'none' : 'block';
    document.getElementById('chatToggle').textContent = chatOpen ? '✕' : '💬';
  }

  function toggleFaq(el) {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Auto-show chat bubble after 3s
  setTimeout(() => {
    const bubble = document.getElementById('chatBubble');
    if (bubble) { bubble.style.animation = 'slideUp 0.5s ease'; }
  }, 3000);
