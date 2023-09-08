function formatDateString() {
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    // dd/mm/yyyy
    var dateFormat = dia + '/' + mes + '/' + ano;

    return dateFormat;
}

function handleNewNote(event) {
    event.preventDefault();
    // formata a data
    var date = formatDateString();

    // colors são as classes do nosso CSS
    var colors = [
        'color-purple',
        'color-red-light',
        'color-orange',
        'color-green-light',
        'color-blue-light',
    ];
    // pega um numero automatico e dinamico de acordo com a quantidade de colors
    var randomNumber = (Math.floor(Math.random() * colors.length));

    // recuperando a TAG INPUT
    var elementNote = document.querySelector('#note');

    // caso não tenha nenhum valor no input
    if (elementNote.value == '') {
        alert("Preencha o campo notas!")
        return;
    }

    // recuperando a TAG MAIN
    var elementNotes = document.querySelector('#notes');

    // criar um TAG HTML atraves do JavaScript
    // BEGIN CREATE ELEMENT
    // element = <div></div>
    var newElement = document.createElement('div');
    newElement.textContent = elementNote.value;
    // internal = <div></div>
    var newElementDivInternal = document.createElement('div');
    // <span></span>
    var newElementSpan = document.createElement('span');
    newElementSpan.textContent = date;
    // <img />
    var newElementImg = document.createElement('img');
    newElementImg.src = 'assets/trash-bin.png';
    // funcao de excluir a nota especifica
    newElementImg.addEventListener('click', function () {
        var resposta = confirm('Deseja realmente excluir?');

        if (resposta) {
            // Remove a DIV Vo da IMAGE de exclusao
            elementNotes.removeChild(newElement);
        }
    });
    // END CREATE ELEMENT

    //  internal = <div><span></span></div>
    newElementDivInternal.appendChild(newElementSpan);
    newElementDivInternal.appendChild(newElementImg);

    newElement.appendChild(newElementDivInternal);

    // Cor automática do nosso variavel COLOR
    newElement.classList.add(colors[randomNumber]);

    elementNotes.appendChild(newElement);

    elementNote.value = '';
}

function theme() {
    var elementImg = document.querySelector('#theme');
    var elementBody = document.querySelector('body');
    var elementInput = document.querySelector('#note');
    var elementH = document.querySelector('#tag-h');

    if(elementImg.alt === 'dark') {
        console.log('TROCOU DARK PARA LIGHT');
        elementBody.style.backgroundColor = '#FFFFFF';

        elementInput.style.border = '1px solid #252525';
        elementInput.style.color = '#252525';

        elementH.style.color = '#252525';

        elementImg.alt = 'light';
        elementImg.src = 'assets/light.png';
    } else {
        console.log('TROCOU LIGHT PARA DARK');
        elementBody.style.backgroundColor = '#252525';

        elementInput.style.border = '1px solid #FFFFFF';
        elementInput.style.color = '#FFFFFF';

        elementH.style.color = '#FFFFFF';

        elementImg.alt = 'dark';
        elementImg.src = 'assets/moon.png';
    }
}