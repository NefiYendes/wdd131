document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

<<<<<<< HEAD
const menuButton = document.getElementById('menu')
const navigation = document.getElementById('navigation')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("open")
    navigation.classList.toggle('open')
})
=======
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});
>>>>>>> b8c63d64d90f813434e617be8d095262e1a228ed
