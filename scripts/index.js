document.addEventListener('load', loadingScreen, true)

function loadingScreen() {
    setTimeout(() => {
        let loadingContainer = document.querySelector('body .loadingContainer')
        
        loadingContainer.classList.toggle('fade')
        
        setTimeout(() => {
            loadingContainer.style.display = 'none'
            document.querySelector('body').classList.remove('loadingContainer');
            document.querySelector('body .container').style.display = 'block';
        },1050)
        
        /* Removing the class `loadingContainer` from the body. */

    },1000)
}