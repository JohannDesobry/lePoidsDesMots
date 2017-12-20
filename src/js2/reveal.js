
// SCROLL

window.sr = ScrollReveal({ reset:false, viewFactor  : 0.4, 
    easing:'cubic-bezier(0.560, 0.005, 0.225, 1.150)'
});

// Home Header

sr.reveal('.home__headerContent--intro',{
origin: 'bottom',
distance: '10rem',
duration: 900,
});

sr.reveal('.home__headerContent--phone',{
origin: 'bottom',
distance: '20rem',
duration: 1800,
});

// Conversation section

sr.reveal('.home__conversationContent--title, .home__conversationContent--title2',{
origin: 'left',
distance: '20rem',
duration: 900,
});

sr.reveal('.home__conversationContent p',{
origin: 'left',
distance: '20rem',
duration: 1800,
});

sr.reveal('.home__conversationPicture',{
origin: 'right',
distance: '20rem',
duration: 1800,
});

// Presentation section

sr.reveal('.home__presentationContent--title, .home__presentationContent--title2',{
origin: 'right',
distance: '20rem',
duration: 900,
});

sr.reveal('.home__presentationContent p',{
origin: 'right',
distance: '20rem',
duration: 1800,
});

sr.reveal('.home__presentationPicture',{
origin: 'left',
distance: '20rem',
duration: 1800,
});

if (window.matchMedia("(min-width: 1140px)").matches)
{
    
} 

if (window.matchMedia("(max-width: 1140px)").matches)
{
    sr.reveal('.home__headerContent--intro p',{
    origin: 'bottom',
    distance: '10rem',
    duration: 900,
    });

    sr.reveal('.home__presentationContent--title, .home__presentationContent--title2',{
    origin: 'left',
    distance: '20rem',
    duration: 900,
    });
    
    sr.reveal('.home__presentationContent p',{
    origin: 'left',
    distance: '20rem',
    duration: 1800,
    });
    
    sr.reveal('.home__presentationPicture',{
    origin: 'bottom',
    distance: '20rem',
    duration: 1800,
    });
} 