const hamburgerMenuBtn = document.querySelector('.hamburgerMenuBtn .hamburger');
const  logo = document.querySelector('.MobileNavHomePage .logo img');
const header = document.querySelector('.header')
const MobileOpenMenu = document.querySelector('.MobileOpenMenu')
let logoform = 'disactive';
hamburgerMenuBtn.addEventListener('click' , () => {
    hamburgerMenuBtn.classList.toggle('is-active');
    header.classList.toggle('active');
    MobileOpenMenu.classList.toggle('active')
    if(logoform == 'disactive'){
        logo.src = 'assets/images/easypoint_logo_big 2.png' ;
        logoform = 'active';
    }
    else if(logoform = 'active'){
        logo.src = "assets/images/Frame.png";
        logoform = 'disactive';
    }
});