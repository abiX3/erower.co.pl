// HAMBURGER
window.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.uil.uil-bars')
    const menuItems = document.querySelectorAll('.gd-blue-menu-item')
    const menuLang = document.querySelector('.gd-menu-search-and-lang')

    if ($(window).width() < 576) {
        menuButton.addEventListener('click', () => {
            menuLang.classList.toggle('d-none')
            menuItems.forEach(e=>{
                index = e.dataset.indexNumber
                if(index > 1){
                    e.classList.toggle('d-block')
                }
            })
        })
    }else{
        menuButton.addEventListener('click', () => {
            menuLang.classList.toggle('d-none')
            menuItems.forEach(e=>{
                index = e.dataset.indexNumber
                if(index > 2){
                    e.classList.toggle('d-block')
                }
            })
        })
    }

    $('#menu-item-3').click(function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        window.location.href = $(this).find('a').eq(0).attr('href');
    });
});

//DROPDOWN MENU
window.addEventListener('DOMContentLoaded', (event) => {
    const dropdownMenu = document.querySelectorAll('.submenu-new')
    const menuButtons = document.querySelectorAll('.gd-blue-menu-item')
    const subMenu = document.querySelectorAll('.gd-blue-submenu')

    function clickChecker(i) {
        if (document.querySelector('.gd-blue-submenu-active')) {
            document.querySelector('.gd-blue-submenu-active').classList.remove('gd-blue-submenu-active')
        }

        if (document.querySelector('.gd-blue-menu-item.active')) {
            document.querySelector('.gd-blue-menu-item.active').classList.remove('active')
        }

        if(document.querySelectorAll('.gd-blue-submenu-active .gd-blue-submenu.d-inline-block')){
            document.querySelectorAll('.gd-blue-submenu.d-inline-block').forEach(e=>{
                e.classList.remove('d-inline-block')
            })
        }

        dropdownMenu[i].classList.add('gd-blue-submenu-active')
        menuButtons[i].classList.add('active')
        document.querySelectorAll('.gd-blue-submenu-active .gd-blue-submenu').forEach(e=>{
            e.classList.add('d-inline-block')
        })

    }

    menuButtons.forEach(e => {
        e.addEventListener('click', el => {
            index = e.dataset.indexNumber
            clickChecker(index)
            activeMenu = document.querySelector('.gd-blue-menu-item.active')
            activeSubMenu = document.querySelector('.gd-blue-submenu-active')
            subMenus = document.querySelectorAll('.gd-blue-submenu-active .gd-blue-submenu.d-inline-block')
            activeMenu.addEventListener('click', e => {
                activeMenu.classList.toggle('active')
                activeSubMenu.classList.toggle('gd-blue-submenu-active')
                subMenus.forEach(e=>{
                    e.classList.toggle('d-inline-block')
                })
            })
        })
    })

    // let name = document.querySelectorAll('a')

    // function nameTitles(i){
    //     name.forEach(e=>{
    //         console.log(name[i].textContent)
    //         // Titles = name[i].textContent
    //         // e.title = Titles
    //     })
    // }

    // count = 0

    // while(count < name.length){
    //     nameTitles(count)
    //     count++
    // }

    // console.log(nameTitles(count))

    //$( "a[target='_blank']" ).each(function( ) { var title = $(this).attr('title'); if (typeof title !== 'undefined' && title !== null) { $(this).attr('title','Otwiera nową kartę: '+ nameTitles(count)); } else { $(this).attr('title','Otwiera nową kartę'); } });

});


window.addEventListener('DOMContentLoaded', (event) => {
    let galleryBlocks = document.querySelectorAll('.gd-news-slider-gallery-content')
    let galleryButtonNext = document.querySelector('.slide-next')
    let galleryButtonPrev = document.querySelector('.slide-prev')
    let galleryBlocksThumbnails = document.querySelectorAll(
        '.gd-news-slider-gallery-thumbnails img')


    function changeSlider() {
        if (document.querySelector('.gd-news-slider-gallery-content.is-active')) {
            document.querySelector('.gd-news-slider-gallery-content.is-active').classList
                .remove('gd-news-slider-gallery-content.is-active')
        }

        if (document.querySelector('.is-active-thumbnail')) {
            document.querySelector('.is-active-thumbnail').classList
                .remove('is-active-thumbnail')
        }
    }

    galleryBlocksThumbnails.forEach(e => {
        e.addEventListener('click', () => {
            index = e.dataset.indexNumber
            changeSlider()
            galleryBlocks.forEach(el => {
                index2 = el.dataset.indexNumber
                el.classList.remove('is-active')
                if (index == index2) {
                    el.classList.toggle('is-active')
                    e.classList.toggle('is-active-thumbnail')
                }
            })
        })
    })

    galleryButtonNext && galleryButtonNext.addEventListener('click', () => {
        let galleryBlockActive = document.querySelector(
            '.gd-news-slider-gallery-content.is-active')
        let galleryBlockThumbnailActive = document.querySelector('.is-active-thumbnail')
        indexBlockActive = galleryBlockActive.dataset.indexNumber
        indexThumbnailActive = galleryBlockThumbnailActive.dataset.indexNumber
        indexBlockActive++
        indexThumbnailActive++
        changeSlider()
        if (indexBlockActive < galleryBlocks.length && indexThumbnailActive < galleryBlocksThumbnails.length) {
            blockIndex = galleryBlocks[indexBlockActive].dataset.indexNumber
            thumbnailIndex = galleryBlocksThumbnails[indexThumbnailActive].dataset.indexNumber
        }

        if (blockIndex == indexBlockActive) {
            galleryBlockActive.classList.remove('is-active')
            galleryBlocks[blockIndex].classList.add('is-active')
        } else {
            galleryBlockActive.classList.remove('is-active')
            galleryBlocks[0].classList.add('is-active')
        }

        if (thumbnailIndex == indexThumbnailActive) {
            galleryBlockThumbnailActive.classList.remove('is-active-thumbnail')
            galleryBlocksThumbnails[thumbnailIndex].classList.add('is-active-thumbnail')
        } else {
            galleryBlockThumbnailActive.classList.remove('is-active-thumbnail')
            galleryBlocksThumbnails[0].classList.add('is-active-thumbnail')
        }
    })



    galleryButtonPrev && galleryButtonPrev.addEventListener('click', () => {
        let galleryBlockActive = document.querySelector(
            '.gd-news-slider-gallery-content.is-active')
        let galleryBlockThumbnailActive = document.querySelector('.is-active-thumbnail')
        indexBlockActive = galleryBlockActive.dataset.indexNumber
        indexThumbnailActive = galleryBlockThumbnailActive.dataset.indexNumber
        indexBlockActive--
        indexThumbnailActive--
        changeSlider()

        if (indexBlockActive < 0 && indexThumbnailActive < 0) {
            indexBlockActive++
            indexThumbnailActive++
        }

        if (indexBlockActive < galleryBlocks.length && indexThumbnailActive < galleryBlocksThumbnails.length) {
            blockIndex = galleryBlocks[indexBlockActive].dataset.indexNumber
            thumbnailIndex = galleryBlocksThumbnails[indexThumbnailActive].dataset.indexNumber
        }

        if (blockIndex == indexBlockActive) {
            galleryBlockActive.classList.remove('is-active')
            galleryBlocks[blockIndex].classList.add('is-active')
        } else {
            galleryBlockActive.classList.remove('is-active')
            galleryBlocks[0].classList.add('is-active')
        }

        if (thumbnailIndex == indexThumbnailActive) {
            galleryBlockThumbnailActive.classList.remove('is-active-thumbnail')
            galleryBlocksThumbnails[thumbnailIndex].classList.add('is-active-thumbnail')
        } else {
            galleryBlockThumbnailActive.classList.remove('is-active-thumbnail')
            galleryBlocksThumbnails[0].classList.add('is-active-thumbnail')
        }
    })
})

jQuery(document).on('click', '.gd-newsletter-btn-modal', (ev) => {
    ev.preventDefault();
    const newsletterModal = document.querySelector('.gd-newsletter-modal')
    newsletterModal.classList.toggle('d-none')

})

jQuery(document).on('click', '.gd-newsletter-modal-wrapper', (ev) => {
    const newsletterModal = document.querySelector('.gd-newsletter-modal')
    newsletterModal.classList.toggle('d-none')

})

jQuery(document).on('click', '.gd-newsletter-close-btn', (ev) => {
    const newsletterModal = document.querySelector('.gd-newsletter-modal')
    newsletterModal.classList.toggle('d-none')

})



// CONTRAST

window.addEventListener('DOMContentLoaded', (event) => {
    const changeContrastBtn = document.querySelectorAll('button.change-contrast')
    const images = document.querySelectorAll('img')
    const darkWeater = document.querySelector('.dark-theme-meteoprog')
    const lightWeater = document.querySelector('.light-theme-meteoprog')

    if (localStorage.getItem('contrast_') === '1'){
        document.body.classList.add('contrast')
        if(darkWeater){darkWeater.classList.remove('d-none')}
        if(lightWeater){lightWeater.classList.add('d-none')}
        images.forEach(e=>{
            if(e.src == document.location.origin + '/assets/2.0/frontend/img/arr_left.png'){
                e.src = '/assets/2.0/frontend/img/lewo_kontrast.svg'
            }

            // if(jQuery('img').attr('src') == document.location.origin + '/assets/2.0/frontend/img/arr_left.png'){
            //     jQuery('img').attr('src', '/assets/2.0/frontend/img/lewo_kontrast.svg')
            // }

            if(e.src == document.location.origin + '/assets/2.0/frontend/img/arr_right_f.png'){
                e.src = '/assets/2.0/frontend/img/prawo_kontrast.svg'
            }

            if(e.src == document.location.origin + '/assets/2.0/frontend/img/read_more.png'){
                e.src = '/assets/2.0/frontend/img/read_more_white.svg'
            }

            if(e.src == document.location.origin + '/assets/2.0/frontend/img/plan_podrozy.png'){
                e.src = '/assets/2.0/frontend/img/planer.png'
            }

            if(e.src == document.location.origin + '/assets/2.0/frontend/img/download.png'){
                e.src = '/assets/2.0/frontend/img/pobierz.png'
            }
        })
    }

        changeContrastBtn[0].addEventListener('click', ()=>{
            localStorage.setItem('contrast_', '1')
            if(localStorage.getItem('contrast_') === '1'){
                document.body.classList.add('contrast')
                if(darkWeater){darkWeater.classList.remove('d-none')}
                if(lightWeater){lightWeater.classList.add('d-none')}
                images.forEach(e=>{
                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/arr_left.png'){
                        e.src = '/assets/2.0/frontend/img/lewo_kontrast.svg'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/arr_right_f.png'){
                        e.src = '/assets/2.0/frontend/img/prawo_kontrast.svg'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/read_more.png'){
                        e.src = '/assets/2.0/frontend/img/read_more_white.svg'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/plan_podrozy.png'){
                        e.src = '/assets/2.0/frontend/img/planer.png'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/download.png'){
                        e.src = '/assets/2.0/frontend/img/pobierz.png'
                    }
                })
            }
        })

        changeContrastBtn[1].addEventListener('click',()=>{
            localStorage.setItem('contrast_', '0')
            if(localStorage.getItem('contrast_') === '0'){
                document.body.classList.remove('contrast')
                if(darkWeater){darkWeater.classList.add('d-none')}
                if(lightWeater){lightWeater.classList.remove('d-none')}
                images.forEach(e=>{
                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/lewo_kontrast.svg'){
                        e.src = '/assets/2.0/frontend/img/arr_left.png'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/prawo_kontrast.svg'){
                        e.src = '/assets/2.0/frontend/img/arr_right_f.png'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/read_more_white.svg'){
                        e.src = '/assets/2.0/frontend/img/read_more.png'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/planer.png'){
                        e.src = '/assets/2.0/frontend/img/plan_podrozy.png'
                    }

                    if(e.src == document.location.origin + '/assets/2.0/frontend/img/pobierz.png'){
                        e.src = '/assets/2.0/frontend/img/download.png'
                    }
                })
            }
        })

})


// KALENDARIUM
window.addEventListener('DOMContentLoaded', (event) => {
    const calendariumDate = document.querySelectorAll('.article-list-wtih-odd-bg li span')
    const calendariumBtns = document.querySelectorAll('.gd-article-news .gd-grey-banner')


    calendariumBtns[0] && calendariumBtns[0].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date < 1900){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

    calendariumBtns[1] && calendariumBtns[1].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date > 1900 && date < 1950){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

    calendariumBtns[2] && calendariumBtns[2].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date > 1950 && date < 2000){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

    calendariumBtns[3] && calendariumBtns[3].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date > 2000 && date < 2010){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

    calendariumBtns[4] && calendariumBtns[4].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date > 2010 && date < 2020){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

    calendariumBtns[5] && calendariumBtns[5].addEventListener('click',(e)=>{
        document.querySelectorAll('.gd-article-news .gd-grey-banner').forEach(ev=>{
            ev.classList.remove('fw-bold')
        })
        e.target.classList.toggle('fw-bold')
        document.querySelectorAll('.article-list-wtih-odd-bg li').forEach(el=>{
            el.classList.remove('d-none')
        })
        calendariumDate.forEach(e=>{
            date = e.textContent
            if(date > 2020){

            }else{
                e.parentElement.classList.toggle('d-none')
            }
        })
    })

})