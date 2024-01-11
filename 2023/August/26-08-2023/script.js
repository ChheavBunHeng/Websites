const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
        img.src = GetImg();
});

function GetImg() {
    const URL = `https://flagcdn.com/256x192/${input.value}.png`;
    // https://flagcdn.com/256x192/gb.png
    return URL;
}
