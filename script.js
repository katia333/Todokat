const playBtn= document.getElementById('play-btn');
const frame= document.getElementById('frame');
const interfacePrincipale = document.getElementById('interface_principale');
interfacePrincipale.classList.add('hidden');
playBtn.addEventListener('click', () => {frame.classList.add('hidden'); interfacePrincipale.classList.remove('hidden');});