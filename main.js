const btn = document.querySelector('.contact-button');
if (btn) {
  const link = btn.closest('a');
  let navigating = false;
  const ANIM_MS = 300;
  const NAV_DELAY = ANIM_MS + 300;

  const triggerTiltAndMaybeNavigate = () => {
    if (navigating) return;
    navigating = true;
    btn.classList.add('tilt');
    setTimeout(() => btn.classList.remove('tilt'), ANIM_MS);

    if (link && link.href) {
      setTimeout(() => {
        window.location.assign(link.href);
      }, NAV_DELAY);
    } else {
      setTimeout(() => {
        navigating = false;
      }, NAV_DELAY);
    }
  };

  btn.addEventListener('click', (e) => {
    if (link) e.preventDefault();
    triggerTiltAndMaybeNavigate();
  });
}