function navReveal () {

    const navMenu = document.querySelector('.nav-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    let menuActive = false

    hamburgerBtn.classList.add('fa-bars')


    hamburgerBtn.addEventListener('click', () => {

        navMenu.classList.toggle('active')
        menuActive = !menuActive

        if (menuActive) {

            hamburgerBtn.classList.remove('fa-bars')
            hamburgerBtn.classList.add('fa-times')

        } else {

            hamburgerBtn.classList.add('fa-bars')
            hamburgerBtn.classList.remove('fa-times')

        }


    })



}

navReveal();