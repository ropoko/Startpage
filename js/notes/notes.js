function createNote(data) {

    let quantityNotes = document.getElementsByClassName('note').length;
    if (quantityNotes >= 5) {
        alert('Se você teve que anotar mais de 5 tarefas, chegou a hora de parar de anotar e começar a fazer! bora!')
        return;
    }
    else {
        if (data == 'text') {
            console.log('text');
        }

        let note = document.createElement('div');
        note.style.top = data.top;
        note.style.left = data.left;
        note.className = 'note';
        note.setAttribute('contenteditable', 'true');

        document.getElementById('notes').appendChild(note);

        let note_text = document.createElement('p');
        note_text.className = 'note_text';

        let header = document.createElement('header');
        header.className = 'note_header';
        header.id = 'note_header';
        header.setAttribute('contenteditable', false);
        header.setAttribute('onclick', 'HeaderClick()');

        let excluir = document.createElement('button');
        excluir.className = 'btn_excluir';
        excluir.textContent = 'x';
        excluir.setAttribute('onclick', 'removeOnClick()');

        let line = document.createElement('hr');

        header.appendChild(excluir);
        header.appendChild(line);

        note.appendChild(header);
        note.appendChild(note_text);

        if (data.text == null) {
            note_text.innerText = 'text';
        }
        else {
            note_text.innerText = data.text;
        }
    }
}

function removeAll() {
    window.localStorage.clear();
}

function saveNotes(id, text, left, top) {
    obj = {
        text,
        left,
        top
    };

    window.localStorage.setItem(id, JSON.stringify(obj));
    console.log('saved');
}

function getNotes() {
    for (let i = 0; i <= 5; i++) {
        let notes = window.localStorage.getItem(i);
        if (notes == null || notes == '<br>') {
            console.log('');
        }
        else {
            createNote(JSON.parse(notes));
        }
    }
}

function remove(id) {
    window.localStorage.removeItem(id);

    let note = document.getElementsByClassName('note')[id];
    document.getElementById('notes').removeChild(note);
}

function removeOnClick() {
    var arrayNotes = document.getElementsByClassName('note');

    for (let i = 0; i < arrayNotes.length; i++) {
        [arrayNotes].forEach((it) => {
            it.item(i).addEventListener('click', () => {
                let note = document.getElementsByClassName('note')[i];
                document.getElementById('notes').removeChild(note);
            })
        })
    }
}

function HeaderClick() {
    var arrayNotes = document.getElementsByClassName('note');

    for (let i = 0; i < arrayNotes.length; i++) {
        [arrayNotes].forEach((it) => {
            it.item(i).addEventListener('click', () => {
                Drag(i)
            })
        })
    }
}

function Drag(id) {
    var element = document.getElementsByClassName('note')[id];
    
    if (element == undefined || element == null) {
        return;
    }

    element.style.position = "absolute";

    let dragElement = null;

    element.onmousedown = function () {
        dragElement = element;
    }

    document.onmouseup = function () {
        dragElement = null;
    };

    document.onmousemove = function (e) {
        var x = e.pageX;
        var y = e.pageY;

        if (dragElement == null)
            return;

        dragElement.style.left = x + "px";
        dragElement.style.top = y + "px";
    };
}
