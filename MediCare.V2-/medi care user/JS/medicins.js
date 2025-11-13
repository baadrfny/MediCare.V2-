

/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});


/*------------------search bar--------------*/
// 1️⃣ Get the input element from the HTML
  const searchInput = document.getElementById('search');
  const storedValue = localStorage.getItem('uservalue');
if (storedValue) {
  searchInput.value = storedValue;
}

  


  const doctors_container = document.getElementById('doctors-container');
  const cards = doctors_container.querySelectorAll('.doctor-card');
  const noresults = document.getElementById('no-results');

  searchInput.addEventListener('input', () => {
    const tmp = searchInput.value.toLowerCase().trim();;
    localStorage.setItem('searchvalue',tmp);

    let found = false;

    cards.forEach(card => {
      const name = card.querySelector('.doctor-name').textContent.toLowerCase();
      if (name.includes(tmp)) {
        card.classList.remove('hidden');
        found=true;
      }else {
        card.classList.add('hidden');
      }
    });
    noresults.classList.toggle('hidden',found);
  })
  
  function external() {
  const test = localStorage.getItem('uservalue'); // ✅ get saved search value

  if (test !== null) { // ✅ check if something exists
    let found = false; // ✅ declare found variable
    const tmp = test.toLowerCase().trim(); // ✅ prepare value for comparison

    cards.forEach(card => {
      const nameElement = card.querySelector('.doctor-name');
      if (!nameElement) return; // ✅ avoid null errors

      const name = nameElement.textContent.toLowerCase();

      if (name.includes(tmp)) {
        card.classList.remove('hidden');
        found = true;
      } else {
        card.classList.add('hidden');
      }
    });

    // ✅ toggle “no results” message
    noresults.classList.toggle('hidden', found);
  }
}
window.addEventListener('load', external);
  
function saveDoctorSpecialites() {
  const specs = [];
  cards.forEach(card => {
    const badge = card.querySelector('.text-primary');
    if (badge) {
      specs.push(badge.textContent.trim());
    }
  });
  localStorage.setItem('medecinsSpecialites', JSON.stringify(specs));
}

saveDoctorSpecialites();
  
  
  
