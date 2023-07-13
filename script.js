// объявляем переменную на открытие меню

let isOpen = false


// вызываем функцию на открытие мобильного меню

function openMenu () {


// находим элемент HTML по id (навигация из хэдера и иконка меню)

    const iconBurger = document.getElementById ('header_menu__mobile_burger')
    const iconClose = document.getElementById ('header_menu__mobile_close')
    const container = document.getElementById ('myMenu')

// Открытие мобильного меню по нажатию иконки

        if (isOpen) {
            container.style.display = 'none'
            iconBurger.style.display = 'flex'
            iconClose.style.display = 'none'
            isOpen = false
        }

         else {
            iconClose.style.display = 'flex'
            iconBurger.style.display = 'none'
            container.style.display = 'flex'
            isOpen = true
        }
}