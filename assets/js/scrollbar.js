;
((d,c,w)=>{
    let navbar = d.getElementById('navbar')
    w.addEventListener('scroll', () => {
        if (pageYOffset > 300) {
            navbar.style.background = 'rgba(255,255,255,.5)'
            navbar.style.paddingBottom = '0'
            navbar.style.fontWeight = '500'
        } else {
            navbar.style.background = 'none'
            navbar.style.paddingBottom = '1rem'
            navbar.style.fontWeight = '600'
        }
    })
})(document,console.log,window)