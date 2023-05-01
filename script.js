let FLAG = false
let capsFlag = false;

let symbols = [

    {
        en: '\`', ru: 'ё', code: 'Backquote'
    }, {
        en: '1', ru: '1', code: 'Digit1'
    }, {
        en: '2', ru: '2', code: 'Digit2'
    }, {
        en: '3', ru: '3', code: 'Digit3'
    }, {
        en: '4', ru: '4', code: 'Digit4'
    }, {
        en: '5', ru: '5', code: 'Digit5'
    }, {
        en: '6', ru: '6', code: 'Digit6'
    }, {
        en: '7', ru: '7', code: 'Digit7'
    }, {
        en: '8', ru: '8', code: 'Digit8'
    }, {
        en: '9', ru: '9', code: 'Digit9'
    }, {
        en: '0', ru: '0', code: 'Digit0'
    }, {
        en: '-', ru: '-', code: 'Minus'
    }, {
        en: '=', ru: '=', code: 'Equal'
    }, {
        en: 'Backspace', ru: 'Backspace', code: 'Backspace'
    }, {
        en: 'Tab', ru: 'Tab', code: 'Tab'
    }, {
        en: 'Q', ru: 'Й', code: 'KeyQ'
    }, {
        en: 'W', ru: 'Ц', code: 'KeyW'
    }, {
        en: 'E', ru: 'У', code: 'KeyE'
    }, {
        en: 'R', ru: 'К', code: 'KeyR'
    }, {
        en: 'T', ru: 'Е', code: 'KeyT'
    }, {
        en: 'Y', ru: 'Н', code: 'KeyY'
    }, {
        en: 'U', ru: 'Г', code: 'KeyU'
    }, {
        en: 'I', ru: 'Ш', code: 'KeyI'
    }, {
        en: 'O', ru: 'Щ', code: 'KeyO'
    }, {
        en: 'P', ru: 'З', code: 'KeyP'
    }, {
        en: '[', ru: 'Х', code: 'BracketLeft'
    }, {
        en: ']', ru: 'Ъ', code: 'BracketRight'
    }, {
        en: '\\', ru: '\\', code: 'Backslash'
    }, {
        en: 'Delete', ru: 'Delete', code: 'Delete'
    }, {
        en: 'CapsLock', ru: 'CapsLock', code: 'CapsLock'
    }, {
        en: 'A', ru: 'Ф', code: 'KeyA'
    }, {
        en: 'S', ru: 'Ы', code: 'KeyS'
    }, {
        en: 'D', ru: 'В', code: 'KeyD'
    }, {
        en: 'F', ru: 'А', code: 'KeyF'
    }, {
        en: 'G', ru: 'П', code: 'KeyG'
    }, {
        en: 'H', ru: 'Р', code: 'KeyH'
    }, {
        en: 'J', ru: 'О', code: 'KeyJ'
    }, {
        en: 'K', ru: 'Л', code: 'KeyK'
    }, {
        en: 'L', ru: 'Д', code: 'KeyL'
    }, {
        en: ';', ru: 'Ж', code: 'Semicolon'
    }, {
        en: "'", ru: 'Э', code: 'Quote'
    }, {
        en: 'Enter', ru: 'Enter', code: 'Enter'
    }, {
        en: 'Shift', ru: 'Shift', code: 'ShiftLeft'
    }, {
        en: '\\', ru: 'Я', code: 'IntlBackslash'
    }, {
        en: 'Z', ru: 'Ч', code: 'KeyZ'
    }, {
        en: 'X', ru: 'С', code: 'KeyX'
    }, {
        en: 'C', ru: 'М', code: 'KeyC'
    }, {
        en: 'V', ru: 'И', code: 'KeyV'
    }, {
        en: 'B', ru: 'Т', code: 'KeyB'
    }, {
        en: 'N', ru: 'Ь', code: 'KeyN'
    }, {
        en: 'M', ru: 'Б', code: 'KeyM'
    }, {
        en: '.', ru: 'Ю', code: 'Comma'
    }, {
        en: ',', ru: '.', code: 'Period'
    }, {
        en: '/', ru: '/', code: 'Slash'
    }, {
        en: '▲', ru: '▲', code: 'ArrowUp'
    }, {
        en: 'Shift', ru: 'Shift', code: 'ShiftRight'
    }, {
        en: 'Ctrl', ru: 'Ctrl', code: 'ControlLeft'
    }, {
        en: 'Win', ru: 'Win', code: 'MetaLeft'
    }, {
        en: 'Alt', ru: 'Alt', code: 'AltLeft'
    }, {
        en: ' ', ru: ' ', code: 'Space'
    }, {
        en: 'Alt', ru: 'Alt', code: 'AltRight'
    }, {
        en: 'Ctrl', ru: 'Ctrl', code: 'ControlRight'
    }, {
        en: '◀', ru: '◀', code: 'ArrowLeft'
    }, {
        en: '▼', ru: '▼', code: 'ArrowDown'
    }, {
        en: '▶', ru: '▶', code: 'ArrowRight'
    }]

let screenValue = []
let cursorPosition

let textValues = ['CapsLock', 'Shift', 'Backspace', 'Enter', 'Ctrl', 'Tab', 'Delete', 'Alt', 'AltRight', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Win']

let middleButtons = ['Ctrl', 'Tab']
let bigButtons = ['CapsLock', 'Shift', 'Backspace', 'Enter']

function createElement({
                           tag, classList, textContent, parentElement, dataIndex,
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

    if (dataIndex !== undefined) {
        const symbol = symbols[dataIndex];
        element.setAttribute('data', symbol.code);
    }

    return element;
}


let container = createElement({
    tag: 'div',
    classList: ['container'],
    parentElement: document.body
})

let screen = createElement(
    {
        tag: 'textarea',
        classList: ['screen'],
        textContent: null,
        parentElement: container

    })

let wrapper = createElement({
    tag: 'div',
    classList: ['wrapper'],
    parentElement: container
})


function createButtonDescription() {
    let language;
    for (let i = 0; i < symbols.length; i++) {
        if (FLAG === false) {
            language = symbols[i].en
        } else {
            language = symbols[i].ru
        }
        if (middleButtons.includes(language)) {
            createElement({
                tag: 'div',
                classList: ['button-middle'],
                textContent: language,
                parentElement: wrapper,
                dataIndex: i,
            })
        } else if (bigButtons.includes(language)) {
            const buttonClass = language === 'Shift' && symbols[i].code === 'ShiftRight' ? 'button-small' : 'button-big';
            createElement({
                tag: 'div',
                classList: [buttonClass],
                textContent: language,
                parentElement: wrapper,
                dataIndex: i,
            })
        } else if (language === ' ') {
            createElement({
                tag: 'div',
                classList: ['button-whitespace'],
                textContent: language,
                parentElement: wrapper,
                dataIndex: i,
            })
        } else {
            createElement({
                tag: 'div',
                classList: textValues.includes(language) ? ['button-small'] : ['button-small', 'not-meta-values'],
                textContent: textValues.includes(language) ? language : language.toLowerCase(),
                parentElement: wrapper,
                dataIndex: i,
            })
        }
    }

}

createButtonDescription();


function clickedButton(event) {
    const notMetaValues = document.querySelectorAll('.not-meta-values');
    if (event.target.textContent === 'CapsLock') {
        event.target.classList.toggle('click-effect');
        notMetaValues.forEach(e => {
            e.classList.toggle('to-upper-case');
        });
        capsFlag = !capsFlag;
    } else if (event.target !== wrapper) {
        event.target.classList.add('click-effect');
        if (textValues.includes(event.target.textContent)) {
            return;
        }
        if (capsFlag || (event.getModifierState('CapsLock'))) {
            screenValue.push(event.target.textContent.toUpperCase());
        } else {
            screenValue.push(event.target.textContent.toLowerCase());
        }
        screen.innerHTML = screenValue.join("");
        console.log(screenValue);
    }

}

function deleteButtonStyle(event) {
    if (event.target.textContent !== 'CapsLock') {
        event.target.classList.remove('click-effect');
    }
}

function clickedButtonOnKeyboard(event) {
    event.preventDefault();
    if (!textValues.includes(document.querySelector(`[data="${event.code}"]`).textContent) && (!event.getModifierState('CapsLock'))) {
        screenValue.push(document.querySelector(`[data="${event.code}"]`).textContent)
        screen.innerHTML = ''
        screen.innerHTML += screenValue.join("")
        console.log(screenValue)
    } else if (!textValues.includes(document.querySelector(`[data="${event.code}"]`).textContent)) {
        screenValue.push(document.querySelector(`[data="${event.code}"]`).textContent.toUpperCase())
        screen.innerHTML = ''
        screen.innerHTML += screenValue.join("")
        console.log(screenValue)
    }
    if (document.querySelector(`[data="AltRight"]`)) {
        document.querySelector(`[data="ControlLeft"]`).classList.remove('click-effect');
        document.querySelector(`[data="${event.code}"]`).classList.add('click-effect');
    }
    if (event.getModifierState('CapsLock')) {
        console.log(event.getModifierState('CapsLock'))
        document.querySelector(`[data="${event.code}"]`).classList.add('click-effect');

    } else if (!event.getModifierState('CapsLock')) {
        document.querySelector(`[data="${event.code}"]`).classList.remove('click-effect');
    } else {
        document.querySelector(`[data="${event.code}"]`).classList.add('click-effect');
    }
}

function deleteButtonStyleOnKeyboard(event) {
    if (event.code !== 'CapsLock') {
        document.querySelector(`[data="${event.code}"]`).classList.remove('click-effect');
    }

}

function changeLang(event) {
    if (event.ctrlKey && event.shiftKey && FLAG === false) {
        FLAG = true
        wrapper.innerHTML = '';
        createButtonDescription()
    } else if (event.ctrlKey && event.shiftKey && FLAG === true) {
        FLAG = false
        wrapper.innerHTML = '';
        createButtonDescription()
    }
}

function deleteLastSymbol(event) {
    if (event.code === 'Backspace' || event.target.textContent === 'Backspace') {
        cursorPosition = screen.selectionStart;
        event.preventDefault()
        screenValue.splice(cursorPosition - 1, 1);
        cursorPosition--;
        screen.innerHTML = ''
        screen.innerHTML += screenValue.join("")
        screen.selectionStart = cursorPosition
    }
}

function addTabulation(event) {
    if (event.code === 'Tab' || event.target.textContent === 'Tab') {
        event.preventDefault()
        screenValue.push(' ', ' ', ' ', ' ')
        screen.innerHTML = ''
        screen.innerHTML += screenValue.join("")
    }
}

function addNewString(event) {
    if (event.code === 'Enter' || event.target.textContent === 'Enter') {
        event.preventDefault()
        screen.innerHTML += '\n'
        screenValue.push('\n')
    }
}

function deleteAfterCursor(event) {
    if (event.code === 'Delete' || event.target.textContent === 'Delete') {
        cursorPosition = screen.selectionStart;
        event.preventDefault()
        screenValue.splice(cursorPosition, 1);
        screen.innerHTML = ''
        screen.innerHTML += screenValue.join("")
        screen.selectionStart = cursorPosition
        console.log(cursorPosition)
    }
}


function toUpperCase(event) {
    const notMetaValues = document.querySelectorAll('.not-meta-values');
    if (event.getModifierState('CapsLock')) {
        notMetaValues.forEach(e => {
            e.classList.add('to-upper-case')
        })
    } else {
        notMetaValues.forEach(e => {
            e.classList.remove('to-upper-case')
        })
    }
}

wrapper.addEventListener('mousedown', clickedButton);
wrapper.addEventListener('mouseup', deleteButtonStyle);
wrapper.addEventListener('mousedown', deleteLastSymbol);
wrapper.addEventListener('mousedown', addTabulation);
wrapper.addEventListener('mousedown', addNewString);
wrapper.addEventListener('mousedown', deleteAfterCursor);


document.addEventListener('keydown', toUpperCase);
document.addEventListener('keydown', clickedButtonOnKeyboard);
document.addEventListener('keyup', deleteButtonStyleOnKeyboard);
document.addEventListener('keydown', changeLang);
document.addEventListener('keydown', deleteLastSymbol);
document.addEventListener('keydown', addTabulation);
document.addEventListener('keydown', addNewString);
document.addEventListener('keydown', deleteAfterCursor);

