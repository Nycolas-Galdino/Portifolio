document.addEventListener('load', loadingScreen, true)

function loadingScreen() {
    setTimeout(() => {
        let loadingContainer = document.querySelector('body .loadingContainer')
        
        loadingContainer.classList.toggle('fade')
        
        setTimeout(() => {
            loadingContainer.style.display = 'none'
            
            loadingContainer.remove()

            document.querySelector('body .container').style.display = 'block';
        },950)
    },1000)
}