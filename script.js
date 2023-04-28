function createElement({
                           tag,
                           classList,
                           textContent,
                           parentElement,
                           data
                       }) {
    const element = document.createElement(tag);

    if (classList?.length) {
        element.classList.add(...classList);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (parentElement) {
        parentElement.append(element);
    }

    if (data) {
        if (element.textContent === '▶') {
            element.setAttribute('data', 'ArrowRight')
        } else if (element.textContent === '◀') {
            element.setAttribute('data', 'ArrowLeft')
        } else if (element.textContent === '▲') {
            element.setAttribute('data', 'ArrowUp')
        } else if (element.textContent === '▼') {
            element.setAttribute('data', 'ArrowDown')
        } else {
            element.setAttribute('data', element.textContent)
        }
    }

    return element;
}

let FLAG = false

let container = createElement({
    tag: 'div',
    classList: ['container'],
    parentElement: document.body
})

let screen = createElement({
    tag: 'textarea',
    classList: ['screen'],
    textContent: ' ',
    parentElement: container

})

let wrapper = createElement({
    tag: 'div',
    classList: ['wrapper'],
    parentElement: container
})



let symbolsEn = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◀', '▼', '▶']

let symbolsRu = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◀', '▼', '▶']

let symbols = symbolsEn;


let textValues = ['CapsLock', 'Shift', 'Backspace', 'Enter', 'Ctrl', 'Tab', 'Delete', 'Alt', 'AltRight',
    'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown']

let middleButtons = ['Ctrl', 'Tab']
let bigButtons = ['CapsLock', 'Shift', 'Backspace', 'Enter']

function createButtonDescription() {

    for (let i = 0; i < symbols.length; i++) {

        if (middleButtons.includes(symbols[i])) {
            createElement({
                tag: 'div',
                classList: ['button-middle'],
                textContent: symbols[i],
                parentElement: wrapper,
                data: symbols[i]
            })
        } else if (bigButtons.includes(symbols[i])) {
            const buttonClass = symbols[i] === 'Shift' && i !== symbols.indexOf('Shift') ? 'button-small' : 'button-big';
            createElement({
                tag: 'div',
                classList: [buttonClass],
                textContent: symbols[i],
                parentElement: wrapper,
                data: symbols[i]
            })
        } else if (symbols[i] === ' ') {
            createElement({
                tag: 'div',
                classList: ['button-whitespace'],
                textContent: symbols[i],
                parentElement: wrapper,
                data: symbols[i]
            })
        } else {
            createElement({
                tag: 'div',
                classList: ['button-small'],
                textContent: symbols[i],
                parentElement: wrapper,
                data: symbols[i]
            })
        }
    }

}

createButtonDescription();


function clickedButton(event) {
    console.log(event.target)
    if (event.target !== wrapper) {
        event.target.classList.add('click-effect');
        if (textValues.includes(event.target.textContent)) {
            return;
        }
        screen.innerHTML += event.target.textContent.toLowerCase();
    }
}

function deleteButtonStyle(event) {
    event.target.classList.remove('click-effect');
}

function clickedButtonOnKeyboard(event) {
    console.log(event.code);
    console.log(event.key);
    console.log(event.location);

    if (event.code === 'AltRight') {
        document.querySelectorAll(`[data="Ctrl"]`)[0].classList.remove('click-effect');
        document.querySelectorAll(`[data="Alt"]`)[1].classList.add('click-effect');
        return;
    }
    if (event.code === 'ControlRight') {
        document.querySelectorAll(`[data="Ctrl"]`)[1].classList.add('click-effect');
        return;
    }
    if (event.code === 'ControlLeft') {
        document.querySelectorAll(`[data="Ctrl"]`)[0].classList.add('click-effect');
        return;
    }
    if (event.code === 'CapsLock') {
        console.log(event.getModifierState('CapsLock'))
        if(event.getModifierState('CapsLock')){
            document.querySelector(`[data="${event.key}"]`).classList.add('click-effect');
        }else{
            document.querySelector(`[data="${event.key}"]`).classList.remove('click-effect');
        }

    } else if ((!textValues.includes(event.key))) {
        document.querySelector(`[data="${event.key.toUpperCase()}"]`).classList.add('click-effect');
        screen.innerHTML += event.key;
    } else if (event.location === 2) {
        let modifierKeysRight = document.querySelectorAll(`[data="${event.key}"]`)
        modifierKeysRight[modifierKeysRight.length - 1].classList.add('click-effect')
    } else {
        document.querySelector(`[data="${event.key}"]`).classList.add('click-effect');
    }

}

function deleteButtonStyleOnKeyboard(event) {
    if (event.code === 'ControlRight') {
        document.querySelectorAll(`[data="Ctrl"]`)[1].classList.remove('click-effect');
        return;
    }
    if (event.code === 'AltRight') {
        document.querySelectorAll(`[data="Alt"]`)[1].classList.remove('click-effect');
        return;
    } else if (event.code === 'ControlLeft') {
        document.querySelectorAll(`[data="Ctrl"]`)[0].classList.remove('click-effect');
        return;
    }
    if (!textValues.includes(event.key)) {
        document.querySelector(`[data="${event.key.toUpperCase()}"]`).classList.remove('click-effect');
    } else if (event.location === 2) {
        let modifierKeysRight = document.querySelectorAll(`[data="${event.key}"]`)
        modifierKeysRight[modifierKeysRight.length - 1].classList.remove('click-effect')
    } else if(event.code !== 'CapsLock') {
        document.querySelector(`[data="${event.key}"]`).classList.remove('click-effect');
    }
}

function changeLang(event){

    if(event.ctrlKey && event.shiftKey && FLAG === false){
        FLAG = true

       symbols = symbolsRu;
       wrapper.innerHTML = '';
       createButtonDescription()
    }else if(event.ctrlKey && event.shiftKey && FLAG === true){
        FLAG = false
        symbols = symbolsEn
        wrapper.innerHTML = '';
        createButtonDescription()
    }
}


wrapper.addEventListener('mousedown', clickedButton);
wrapper.addEventListener('mouseup', deleteButtonStyle);
document.addEventListener('keydown', clickedButtonOnKeyboard);
document.addEventListener('keyup', deleteButtonStyleOnKeyboard);

document.addEventListener('keydown', changeLang);