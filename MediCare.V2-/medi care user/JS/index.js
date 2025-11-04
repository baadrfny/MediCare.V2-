
  // 1️⃣ Get the input element from the HTML
  const searchInput = document.getElementById('search');

  // 2️⃣ Listen for when the user types in the input
  searchInput.addEventListener('input', () => {
    
    // 3️⃣ Save the text the user typed into localStorage
    localStorage.setItem('searchValue', searchInput.value);
    
    // 4️⃣ Show it in the console (just for testing)
    console.log(searchInput.value);
  });

  // 5️⃣ When the page loads, get the saved value
  const storedValue = localStorage.getItem('searchValue');

  // 6️⃣ If something was stored before, show it back in the input
  if (storedValue) {
    searchInput.value = storedValue;
  }

  /*------------CAROUSEL--------------*/
    const image = document.getElementById('image');       // the carousel image
    const title = document.getElementById('title');       // the carousel title
    const paragraph = document.getElementById('paragraph');
    const liftarrow = document.getElementById('left1');
    const rightarrow = document.getElementById('right1');
    
    const slides = [
        {image: image.src, title: title.textContent, paragraph: paragraph.textContent},
        {image:"ressources/carousel/water.png",title:"Hydratation",paragraph:"Buvez au moins 8 verres d'eau par jour pour rester hydraté et maintenir votre énergie."},
        {image:"ressources/carousel/heart-care.png",title:"Exercice Régulier",paragraph:"30 minutes d'activité physique par jour réduisent les risques de maladies cardiovasculaires."}
    ];

    let currentindex = 0;

    liftarrow.addEventListener('click',() => {
        currentindex--;
        if (currentindex<0) {
            currentindex = slides.length-1
        }
        showslide(currentindex);
    
    });
    rightarrow.addEventListener('click',() => {
        currentindex++;
        if (currentindex>=slides.length) {
            currentindex = 0;
        }
        showslide(currentindex);
    
    });

    function showslide(index) {
        image.src =slides[index].image;
        title.textContent = slides[index].title;
        paragraph.textContent = slides[index].paragraph;
    };
    showslide(currentindex);
    setInterval (() => {
        currentindex++;
        if (currentindex>=slides.length) {
            currentindex = 0;
        }
        showslide(currentindex);
    },5000);


    const userclick = document.getElementById('recherche');
    const userinput = document.getElementById('search');
    userclick.addEventListener('click',()=>{
        const temp = userinput.value;
        localStorage.setItem('uservalue',temp);
         window.location.href = 'medicins.html';
    })