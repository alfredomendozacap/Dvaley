;
((d,c,w)=>{
    const showMenu = (toggle, menu) => {
        const navbarToggle = d.getElementById(toggle)
        const mainMenu = d.getElementById(menu)
        let navbar = d.getElementById('navbar')
        let logo = d.getElementById('logo')
        navbarToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('show')
            navbar.classList.toggle('back_theme')
        })
        
        w.addEventListener('scroll', () => {
            if (pageYOffset > 300) {
                navbar.classList.add('scrollY')
                logo.classList.add('logo_width')
                logo.style.transition = 'all ease .5s'
                mainMenu.classList.add('scrollY-top')
            } else {
                navbar.classList.remove('scrollY')
                logo.classList.remove('logo_width')
                mainMenu.classList.remove('scrollY-top')
            }
        })
        
    }
    showMenu('navbar__toggle','main-navbar')
})(document,console.log,window)