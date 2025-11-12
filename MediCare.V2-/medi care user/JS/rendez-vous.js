/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});
const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const telephone_input = document.getElementById('telephone');
const date_input = document.getElementById('date');
const time_input = document.getElementById('time');
const raison_input = document.getElementById('raison');
const submit_button = document.getElementById('submit');

const medicin_select = document.getElementById('medicins_input');


let doctors = JSON.parse(localStorage.getItem('doctors info')) || [];
//<div class="flex items-center  h-7 hover:bg-blue-500 hover:text-white">
                        //<p class="pl-2 text-sm">John Stewart</p>
                   // </div>
if (doctors) {
    doctors.forEach(doctor => {
        const doctor_option = document.createElement('option');
        doctor_option.className ="pl-2 text-sm";
        doctor_option.value = doctor.nom;
        doctor_option.textContent = doctor.nom;

        medicin_select.appendChild(doctor_option);
        // const doctor_name = document.createElement('option') ;
        // doctor_name.className = "pl-2 text-sm";
        // doctor_name.textContent = doctor.nom;
        // doctor_choise.appendChild(doctor_name);
    });
    
}

let clicked = false;
medicin_choisi.addEventListener('click',()=>{
    if (clicked) {
        medicin_liste.classList.add('hidden');
        clicked = false;
        return ;
    }
    medicin_liste.classList.remove('hidden');
    clicked = true;
})

submit_button.addEventListener('click',() =>{
    console.log('clicked')
    if (name_input.value == "" || email_input.value == "" || telephone_input.value == "" || date_input.value == "" || time_input.value == "") {
        alert('entrez tous les informations');
        return;
    }
})


