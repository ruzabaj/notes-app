const increaseBtn = document.getElementById("increase");
const remove = document.querySelector(".remove");

increaseBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = '') {
  console.log("here");
  const note = document.createElement('div');
  note.classList.add("note");

  note.innerHTML = ` <div class="toolbox">
                <button id="increase"><i class="fas fa-plus"></i></button>
                <button id="decrease"><i class="fas fa-minus"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea></textarea>`;

    document.body.appendChild(note);

    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    console.log(main, "main", textArea, "textArea");
    
    textArea.value = text
    main.innerHTML = marked(text)

    remove.addEventListener("click", ()=>{
        note.remove();

        updateList();
    })
}

function updateList() {
    const notesText = document.querySelectorAll('textarea');

    console.log(notesText, "text-area-count");
    
}
