;
((d,c,w)=>{
    let navbar = d.getElementById('navbar')
    w.addEventListener('scroll', () => {
        if (pageYOffset > 300) {
            navbar.style.background = 'rgba(222, 40, 204, 0.6)'
            navbar.style.paddingBottom = '0'
            navbar.style.fontWeight = '500'
        } else {
            navbar.style.background = 'none'
            navbar.style.paddingBottom = '1rem'
            navbar.style.fontWeight = '600'
        }
    })
})(document,console.log,window)


;
((d,c,w)=>{
    let navbar = d.getElementById('logo')
    w.addEventListener('scroll', () => {
        if (pageYOffset > 300) {
            logo.style.width = '150px'
            logo.style.transition = 'all ease .5s'
        } else {
            logo.style.width = '297px';
        }
    })
})(document,console.log,window)