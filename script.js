const socialPlaceholder = document.getElementById('social-media-placeholder');
const buttonShare = document.querySelector('.content-button');
const contentButton = document.querySelector('.content-button');


buttonShare.addEventListener('click', function() {
    /* socialPlaceholder.classList.remove('display-none'); */
    socialPlaceholder.classList.toggle('social-media-placeholder');
    contentButton.classList.toggle('content-button-open');
    buttonShare.classList.toggle('shape-button-open');
});