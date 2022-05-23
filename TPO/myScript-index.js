function myFunction(){
    let linkList = document.getElementById('linkId')
    let mainMobile = document.getElementById('mainId')
    let logoMobile = document.getElementById('logoId')
    let iconMobile = document.getElementById('navBarIcon')

    if (linkList.classList.contains('linkList')){

        linkList.classList.replace('linkList','linkListMobile')
        mainMobile.classList.replace('mainContent','hidden')
        logoMobile.classList.replace('logo','hidden')

        iconMobile.classList.replace('fa-bars','fa-xmark')
    }
    else if ((linkList.classList.contains('linkListMobile'))){

        linkList.classList.replace('linkListMobile','linkList')
        mainMobile.classList.replace('hidden','mainContent')
        logoMobile.classList.replace('hidden','logo')
        iconMobile.classList.replace('fa-xmark','fa-bars')
    }
    
}
