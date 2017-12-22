// settings display

const settingsBtn = document.querySelector('.device__headerProfil--settings'),
      backBtn = document.querySelector('.device__settingsHeader--back'),
      settingsContainer = document.querySelector('.device__settings'),
      settingsVol = document.querySelector('.device__settingsAudioContent--vol'),
      settingsVolIcon = document.querySelector('.device__settingsAudioContent--vol div'),
      audioNotif = document.querySelector('.notif'),
      audioSent = document.querySelector('.send')

settingsBtn.addEventListener('click', (e) => {
    settingsContainer.classList.add('active')    
});

backBtn.addEventListener('click', (e) => {
    settingsContainer.classList.remove('active')    
});

settingsVol.addEventListener('click', (e) => {
    if (audioNotif.muted)
    {
        audioNotif.muted = false
        audioSent.muted = false
        settingsVolIcon.classList.remove('icon-no-sound')
        settingsVolIcon.classList.add('icon-volume')
    }
    else 
    {
        audioNotif.muted = true
        audioSent.muted = true
        settingsVolIcon.classList.remove('icon-volume')
        settingsVolIcon.classList.add('icon-no-sound')
    }
});