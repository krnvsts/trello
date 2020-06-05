import elements from '../components/elements/elements';

import 'normalize.css';
import '../style/main.scss';
import './index.scss';

// differents
// .column = .item
// spanAction_addNote = actionAddNote

// variables
let noteIdCounter = 10
let columnIdCounter = 3
console.log("Следующяя заметка - " + noteIdCounter)
console.log("Следующяя колонка - " + columnIdCounter)


document
    .querySelectorAll('.item')
    .forEach(columnElement => {
        const actionAddNote = columnElement.querySelector('[data-action-addnote]')

        if (actionAddNote !== null) {
            actionAddNote.addEventListener('click', function (event) {
                const noteElement = document.createElement('div')
                noteElement.classList.add('item__todo')
                noteElement.setAttribute('draggable', 'true')
                noteElement.setAttribute('data-note-id', noteIdCounter)
                noteIdCounter++
                console.log(this)

                columnElement.querySelector('[data-notes]').append(noteElement)
                // <div class="item__todo" draggable="true" data-note-id="2">Lorem, ipsum dolor.</div>
            })
        }
    })

//33:48