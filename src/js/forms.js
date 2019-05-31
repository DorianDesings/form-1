const links = document.getElementById('links')
const forms = document.getElementById('forms')

const registerLink = document.getElementById('register')
const loginLink = document.getElementById('login')

if (links) {
    links.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            const linksItem = [...document.querySelectorAll('.links__item')]
            linksItem.map(link => link.classList.remove('links__item--active'))
            e.target.classList.add('links__item--active')
            if (e.target.textContent == 'sign in') forms.classList.remove('forms--move')
            else forms.classList.add('forms--move')

        }
    })
}

if (registerLink && loginLink) {
    registerLink.addEventListener('click', () => links.children[1].click())
    loginLink.addEventListener('click', () => links.children[0].click())
}