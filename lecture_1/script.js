const Picture = document.getElementById('bcg');
function closePicture() {
    Picture.style.display = 'none';
}
function showPicture() {
    Picture.style.display = "block";
}

const Button = document.getElementById('btn_1');
const Button_1 = document.getElementById('btn_2');

Button.addEventListener('click', closePicture);
Button_1.addEventListener('click', showPicture);

