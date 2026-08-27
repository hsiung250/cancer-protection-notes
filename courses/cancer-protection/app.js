(() => {
  const key = 'cancer-notes-progress';
  const buttons = [...document.querySelectorAll('[data-check]')];
  const count = document.querySelector('#progress-count');
  const bar = document.querySelector('#progress-bar');
  const status = document.querySelector('#check-status');

  let done = Array(buttons.length).fill(false);
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (Array.isArray(saved) && saved.length === buttons.length) done = saved.map(Boolean);
  } catch (_) {
    localStorage.removeItem(key);
  }

  function render() {
    const completed = done.filter(Boolean).length;
    count.textContent = `${completed}/${done.length}`;
    bar.style.width = `${completed / done.length * 100}%`;
    status.textContent = completed === done.length ? '準備好了，可以開始演練。' : `還有 ${done.length - completed} 項待完成`;
    buttons.forEach((button, index) => {
      button.classList.toggle('checked', done[index]);
      button.setAttribute('aria-pressed', String(done[index]));
      button.querySelector('i').textContent = done[index] ? '✓' : '';
    });
  }

  buttons.forEach((button, index) => button.addEventListener('click', () => {
    done[index] = !done[index];
    localStorage.setItem(key, JSON.stringify(done));
    render();
  }));

  render();
})();
