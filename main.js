// toggle menu
const menu = document.querySelector('.menu');
const links = document.querySelector('ul');
let displayMenu = false;

function toggleMenu() {
    const lines = document.querySelectorAll('.line');
    if (!displayMenu) {
        links.classList.remove('hide');
        links.classList.add('show');
        lines.forEach(l => l.classList.add('transformMenu'));
        displayMenu = true;
    } else {
        links.classList.remove('show');
        links.classList.add('hide');
        lines.forEach(l => l.classList.remove('transformMenu'));
        displayMenu = false;
    }
}
menu.addEventListener('click', toggleMenu);

function mediaLinks() {
    if (window.innerWidth > 767) {
        links.classList.remove('hide');
        links.classList.add('flex');
    } else {
        links.classList.add('hide');
        links.classList.remove('flex');
    }
}
window.addEventListener('load', mediaLinks);
window.addEventListener('resize', mediaLinks);

// phone details
let image = '';
let text = '';
let output = '';

const displayDetails = (image, text) => {
    output = `<div class="img">${image}</div><div class="text">${text}</div>`;
    document.querySelector('.phone-content').innerHTML = output;
}

const toggleActive = (element, color) => {
    document.querySelectorAll('.icons>div').forEach(ic => ic.classList.remove('activeIcon'));
    element.classList.add('activeIcon');
    document.querySelector('.products').style.backgroundColor = color;
}

const baterija = () => {
    toggleActive(document.querySelector('#baterija'), '#00052f');
    image = `<img src="assets/smartphone-baterija.png" alt="baterija">`;
    text = `<p>Tesla Smartphone 9.2 ima poboljšanu bateriju kapaciteta 3000 mAh, koja će vam biti prijatelj u svim aktivnostima u toku dana. Brzo punjenje omogućava da za samo 30 minuta napunite telefon do 30% što će vam produžiti korišćenje za nekoliko sati. Uz to, Reverse Charging omogućava da ovaj telefon koristite kao prenosivu bateriju za punjenje drugih uređaja.</p>`;
    displayDetails(image, text);
}
document.querySelector('#baterija').addEventListener('click', baterija);

const boja = () => {
    toggleActive(document.querySelector('#boja'), '#722705');
    image = `<img src="assets/smartphone-slider.png" alt="boja">`;
    text = `<p>Sve ove pogodnosti su spakovane u telefon debljine samo 7.9 mm koji dolazi u srebrnoj i crnoj boji.</p>`;
    displayDetails(image, text);
}
document.querySelector('#boja').addEventListener('click', boja);

const display = () => {
    toggleActive(document.querySelector('#display'), '#5b5e5f');
    image = `<img src="assets/smartphone-kamera-prednja.png" alt="display">`;
    text = `<p>Prvi Tesla telefon sa notch ekranom pruža potpuno novi doživljaj u odnosu na svoje prethodnike. Notifikacioni bar se krije u ovom dodatnom prostoru ekrana što vam pruža više prostora za sve ostalo. Dijagonala ekrana je 5.86" što je naša najveća dijagonala do sada. HD+ i 16 miliona boja učiniće da svaki detalj na ovom velikom ekranu oživi.</p>`;
    displayDetails(image, text);
}
document.querySelector('#display').addEventListener('click', display);

const camera = () => {
    toggleActive(document.querySelector('#kamera'), '#333');
    image = `<img src="assets/smartphone-kamera-pro.png" alt="camera">`;
    text = `<p>Dual kamera sa zadnje strane pravi jasnije fotografije širokog kadra, u rezoluciji do 4672x3504px, pomoću optike od 16MP + 5MP koja ima 4X digitalni zoom, a uz to i snima video u Full HD-u.</p>
    <p>Prednja kamera od 16MP takođe pravi fotografije u rezoluciji do 4672x3504px. Ima blic i opciju za slikanje širokog selfija koja omogućava da u kadar uključite što više prijatelja. Kao i zadnja, i prednja kamera snima video u Full HD-u.</p>`;
    displayDetails(image, text);
}
document.querySelector('#kamera').addEventListener('click', camera);

const oreo = () => {
    toggleActive(document.querySelector('#oreo'), '#279ff2');
    image = `<img src="assets/smartphone-android-oreo.png" alt="oreo">`;
    text = `<p>Sve funkcionalnosti optimizovanog Android 8.1 Oreo operativnog sistema, savršeno se uklapaju sa Tesla Smartphone 9.2 konfiguracijom i pružaju neuporedivo korisničko iskustvo. Oreo je prilagodljiv i u potpunosti se može podesiti – od pozicioniranja virtuelnih tastera, do toga da se oni u potpunosti zamene „svajpovanjem“.</p>`;
    displayDetails(image, text);
}
document.querySelector('#oreo').addEventListener('click', oreo);

const processor = () => {
    toggleActive(document.querySelector('#processor'), '#00052f');
    image = `<img src="assets/smartphone-performanse.png" alt="processor">`;
    text = `<p>Novi unapređeni procesor MediaTek Helio P22 MTK6762 sa osam jezgara (4* A53 Cortex@2.0 GHz + 4* A53 Cortex@1.5 GHz) i radna memorija koju ovaj telefon poseduje, izazivaće vas da pokrećete veliki broj zahtevnih aplikacija i brzo surfujete po netu, a optimizovan je da troši manje baterije.</p>`;
    displayDetails(image, text);
}
document.querySelector('#processor').addEventListener('click', processor);

const ram = () => {
    toggleActive(document.querySelector('#ram'), '#022ca5');
    image = `<img src="assets/smartphone-memorija.png" alt="ram">`;
    text = `<p>Podršku procesoru daje radna memorija od 4GB koja omogućava neometan rad zahtevnih aplikacija. Tesla Smartphone 9.2 dolazi sa 32GB interne memorije i mogućnošću proširenja do 256GB uz memorijsku karticu. Uz takvo povećanje imaćete prostora da čuvate mnoštvo slika, video snimaka i muzike.</p>`;
    displayDetails(image, text);
}
document.querySelector('#ram').addEventListener('click', ram);

const sim = () => {
    toggleActive(document.querySelector('#sim'), '#a9473a');
    image = `<img src="assets/smartphone-sim.png" alt="sim">`;
    text = `<p>Hybrid SIM slot omogućava da koristite dve SIM kartice istovremeno, od kojih je jedna Micro SIM a druga Nano SIM (obe sa 4G tehnologijom) ili kombinaciju Micro SIM kartice i Micro SD memorijske kartice.</p>`;
    displayDetails(image, text);
}
document.querySelector('#sim').addEventListener('click', sim);