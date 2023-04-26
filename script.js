


function createElement({
                           tag,
                           classList,
                           textContent,
                           parentElement
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

    return element;
}

let container = createElement({
    tag: 'div',
    classList: ['container'],
    parentElement: document.body
})

let screen = createElement({
    tag: 'div',
    classList: ['screen'],
    textContent: ' ',
    parentElement: container

})

let wrapper = createElement({
    tag: 'div',
    classList: ['wrapper'],
    parentElement: container
})




let symbols = ['~', '1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
              'Tab','Q','W','E','R','T','Y','U','I','O','P', '[',']','\\','Delete',
              'Cap Lock','A','S','D','F','G','H','J','K','L',';','\'', 'Enter',
              'Shift','\\','Z','X','C','V','B','N','M','.',',','/','▲','Shift',
              'Ctrl','Win','Alt',' ','Alt','Ctrl','◀','▼','▶']

let middleButtons = ['Ctrl', 'Tab']
let bigButtons = ['Cap Lock', 'Shift','Backspace', 'Enter' ]

function createButtonDescription() {

    for(let i = 0; i<symbols.length; i++){

        if(middleButtons.includes(symbols[i])){
            createElement({
                tag: 'div',
                classList: ['button-middle'],
                textContent: symbols[i],
                parentElement: wrapper
            })
        }else if(bigButtons.includes(symbols[i])){
            const buttonClass = symbols[i] === 'Shift' && i !== symbols.indexOf('Shift') ? 'button-small' : 'button-big';
            createElement({
                tag: 'div',
                classList: [buttonClass],
                textContent: symbols[i],
                parentElement: wrapper
            })
        } else if(symbols[i] === ' '){
            createElement({
                tag: 'div',
                classList: ['button-whitespace'],
                textContent: symbols[i],
                parentElement: wrapper
            })
        }else{
            createElement({
                tag: 'div',
                classList: ['button-small'],
                textContent: symbols[i],
                parentElement: wrapper
            })
        }
    }

}

createButtonDescription();




function clickedButton(event){
    console.log(event.target)
    if(event.target !== wrapper) {
        event.target.classList.add('click-effect')
        screen.innerHTML += event.target.textContent.toLowerCase()
    }
}

function deleteButtonStyle(event){
    event.target.classList.remove('click-effect');
}

function clickedButtonKey(event){
        console.log(event.code);
        console.log(event.key);
        if(symbols.includes(event.key.toUpperCase())){

        }
        screen.innerHTML += event.key;



}


wrapper.addEventListener('mousedown', clickedButton);
wrapper.addEventListener('mouseup', deleteButtonStyle);
document.addEventListener('keydown', clickedButtonKey);
document.addEventListener('keyup', deleteButtonStyle);