const increaseBtn = document.getElementById("increase");
const remove = document.querySelector(".remove");

increaseBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = '') {
  console.log("here");
  const note = document.createElement('div');
  note.classList.add("note");

  note.innerHTML = ` <div class="toolbox">
                <button class="edit"><i class="fas fa-pen"></i></button>
                <button class="decrease"><i class="fas fa-minus"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`;

    document.body.appendChild(note);

    const main = note.querySelector('.main')
    const editBtn = note.querySelector('.edit')
    const decreaseBtn = note.querySelector('.decrease')
    const textArea = note.querySelector('textarea')

    console.log(main, "main", textArea, "textArea");
    
      textArea.value = text
    main.innerHTML = marked(text)

    remove.addEventListener("click", ()=>{
        note.remove();

        updateList();
    })

    decreaseBtn.addEventListener("click", ()=>{
        note.remove();

        updateList();
    })

    editBtn.addEventListener("click", ()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener("input", (e)=>{
        const { value } = e.target

        main.innerHTML = marked(value)

    })
}

function updateList() {
    const notesText = document.querySelectorAll('textarea');

    console.log(notesText, "text-area-count");

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
    
}
