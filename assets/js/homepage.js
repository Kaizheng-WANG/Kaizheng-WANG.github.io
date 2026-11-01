/* Homepage interactions: "Show more" lists (News, Awards) and the Featured / All publication switch. */
(function () {
  // "Show more": <button class="show-more" data-target="LIST_ID" hidden>.
  // Items with class "is-folded" in that list stay hidden until the button is pressed.
  // The button only appears when the list actually has folded items.
  document.querySelectorAll('.show-more').forEach(function (btn) {
    var list = document.getElementById(btn.getAttribute('data-target'));
    if (!list || !list.querySelector('.is-folded')) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var expanded = list.classList.toggle('is-expanded');
      btn.textContent = expanded ? 'Show less' : 'Show more';
      btn.setAttribute('aria-expanded', expanded);
      if (!expanded) btn.scrollIntoView({ block: 'nearest' });  // stay near the list after folding it
    });
  });

  // Publications: "Featured" shows items with class "is-featured", "All" shows every paper.
  var pubList = document.getElementById('pub-list');
  var pubButtons = document.querySelectorAll('.pub-toggle button');
  pubButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      pubList.classList.toggle('show-all', btn.getAttribute('data-filter') === 'all');
      pubButtons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
      });
    });
  });
})();
