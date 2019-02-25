;
((d,c,w)=>{
    let navbar = d.getElementById('navbar')
    w.addEventListener('scroll', () => {
        if (pageYOffset > 300) {
            navbar.classList.add('scrollY')
        } else {
            navbar.classList.remove('scrollY')
        }
    })
    const showMenu = (toggle,menu) => {
        const navbarToggle = d.getElementById(toggle)
        const mainMenu = d.getElementById(menu)
        navbarToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('show')
            navbar.classList.toggle('back_theme')
        })
    }
    showMenu('navbar__toggle','main-navbar')
})(document,console.log,window)