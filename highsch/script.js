document.getElementById('about-more-btn').addEventListener('click', () => {
    document.getElementById('about-main-div').style.display = 'none'
    document.getElementById('about-sub-div').style.display = 'flex'


})

const button = document.getElementById('more-button')
button.addEventListener('click', () => {

    document.getElementsByClassName('hidden-img-div')[0].style.display = "flex"
    button.style.display = "none"


})
