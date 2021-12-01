// -----------Scroll header-----------
window.onscroll = () => {
    var searchForm = document.querySelector('.search-form');
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector(".header .header-two").classList.add('active');
    }else{
        document.querySelector(".header .header-two").classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-two").classList.add('active');
    }else{
        document.querySelector(".header .header-two").classList.remove('active');
    }
}




