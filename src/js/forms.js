const links = document.getElementById('links')
const forms = document.getElementById('forms')

if (links) {
    links.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            const linksItem = [...document.querySelectorAll('.links__item')]
            linksItem.map(link => link.classList.remove('links__item--active'))
            e.target.classList.add('links__item--active')
            forms.classList.toggle('forms--move')

        }
    })
}