const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
    document.getElementById('username').innerText = user.first_name;
    document.getElementById('avatar').innerText = user.first_name.charAt(0).toUpperCase();

    document.getElementById('prof-name').innerText = `${user.first_name} ${user.last_name || ''}`;
    document.getElementById('prof-user').innerText = user.username || 'tidak_ada';
    document.getElementById('prof-id').innerText = user.id;
}

function gantiTab(tabName, elemenNav) {
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }

    const semuaKonten = document.querySelectorAll('.tab-content');
    semuaKonten.forEach(konten => konten.classList.remove('active'));

    const semuaNav = document.querySelectorAll('.nav-item');
    semuaNav.forEach(nav => nav.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.add('active');
    elemenNav.classList.add('active');
}

function jalankanJam() {
    const sekarang = new Date();
    
    const jam = String(sekarang.getHours()).padStart(2, '0');
    const menit = String(sekarang.getMinutes()).padStart(2, '0');
    const detik = String(sekarang.getSeconds()).padStart(2, '0');
    document.getElementById('jam-digital').innerText = `${jam}:${menit}:${detik}`;
    
    const opsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('tanggal-kalender').innerText = sekarang.toLocaleDateString('id-ID', opsi);
}

setInterval(jalankanJam, 1000);
jalankanJam();
