// settings display

const settingsBtn = document.querySelector('.device__headerProfil--settings'),
      backBtn = document.querySelector('.device__settingsHeader--back'),
      settingsContainer = document.querySelector('.device__settings')

settingsBtn.addEventListener('click', (e) => {
    settingsContainer.classList.add('active')    
});

backBtn.addEventListener('click', (e) => {
    settingsContainer.classList.remove('active')    
});