const searchInput = document.getElementById('categorySearch');
    const cards = [...document.querySelectorAll('.category-card')];
    const noResults = document.getElementById('noResults');
    function filterCategories(){
      const query = searchInput.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = (card.innerText + ' ' + card.dataset.terms).toLowerCase().includes(query);
        card.style.display = match ? 'flex' : 'none';
        if(match) visible++;
      });
      noResults.style.display = visible ? 'none' : 'block';
    }
    document.getElementById('searchBtn').addEventListener('click', filterCategories);
    searchInput.addEventListener('input', filterCategories);
    searchInput.addEventListener('keydown', event => { if(event.key === 'Enter') filterCategories(); });
    document.querySelectorAll('.enquiry').forEach(link => {
      link.addEventListener('click', () => {
        // The call link remains functional; this gives desktop users a useful prompt.
        if (!/Mobi|Android/i.test(navigator.userAgent)) {
          // No popup required: the phone link is the enquiry action.
        }
      });
    });
    document.getElementById('year').textContent = new Date().getFullYear();
