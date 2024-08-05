const socialPlaceholder = document.getElementById('social-media-placeholder');
const buttonShare = document.querySelector('.content-button');


buttonShare.addEventListener('click', function() {
    /* socialPlaceholder.classList.remove('display-none'); */
    socialPlaceholder.classList.toggle('social-media-placeholder');
});