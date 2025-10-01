console.log('Client notes')

const url = 'http://localhost:3000/notes'

fetch(url)
    .then(res => res.json())
    .then((data) => {
        displayData(data)
    })
    .catch((err) => {
        // Network or parsing error
        console.error('Fetch failed:', err.message);
    });

const displayData = (data) => {
    //console.log(data)
    const notesContainer = document.getElementById('accordionExample')
    const notesHTML = data.map(note => {
        const safeId = note.title.replace(/\s+/g, '-').toLowerCase();

        return `
        <div class="accordion-item" id="acc-item-${safeId}">
            <h2 class="accordion-header" id="heading-${safeId}">
                <button class="accordion-button collapsed" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse-${safeId}" 
                    aria-expanded="false" 
                    aria-controls="collapse-${safeId}">
                    ${note.title}
                </button>
            </h2>
            <div id="collapse-${safeId}" class="accordion-collapse collapse" 
                aria-labelledby="heading-${safeId}" 
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${note.description}</strong>
                    <p>${note.details}</p>
                </div>
                <button type="button" class="btn btn-outline-primary" id="btn-upd-${safeId}" onclick="updateNote('${note.title}','${safeId}')">Update</button>
                <button type="button" class="btn btn-outline-danger" id="btn-dng-${safeId}" onclick="deleteNote('${note.title}','${safeId}')" >Delete</button> <br> 
            </div>
        </div>
        `; }).join(''); //.join('') concatenates all array elements into a single string with no separator:
    notesContainer.innerHTML = notesHTML
}
//deleteNote('${note.title}')" --> note.title is a string and pass it with quotes

const updateNote = (title, safeId) => {
    
    const noteAcc = document.getElementById(`acc-item-${safeId}`)
    console.log(noteAcc)
    console.log('Listening to update event', title)
}

const deleteNote = (title, safeId) => {
    
    fetch(`http://localhost:3000/notes/${encodeURIComponent(title)}`, {
        method:'DELETE'
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to delete note');
        return response.json();
    })
    .then(data => {
        console.log(data.message)
        const noteAcc = document.getElementById(`acc-item-${safeId}`)
        noteAcc.remove()
    })
    .catch(err => console.log('Error:', err))
}

const addNote = () => {
    console.log('ADDING new note')
}

