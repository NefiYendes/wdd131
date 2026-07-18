document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const menuButton = document.getElementById('menu')
const navigation = document.getElementById('navigation')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("open")
    navigation.classList.toggle('open')
})