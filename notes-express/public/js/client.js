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
                <button type="button" class="btn btn-outline-primary" id="btn-upd-${safeId}" onclick="updateNote('${note.title}','${safeId}')">Update</button>
                <button type="button" class="btn btn-outline-danger" id="btn-dng-${safeId}" onclick="deleteNote('${note.title}','${safeId}')" >Delete</button> <br> 
                </div>
                </div>
        </div>
        `; }).join(''); //.join('') concatenates all array elements into a single string with no separator:
    notesContainer.innerHTML = notesHTML
    
}
//deleteNote('${note.title}')" --> note.title is a string and pass it with quotes

const updateNote = (title, safeId) => {
     const noteElement = document.getElementById(`acc-item-${safeId}`);
    const description = noteElement.querySelector('.accordion-body strong').innerText;
    const details = noteElement.querySelector('.accordion-body p').innerText;

    // Fill modal fields
    document.getElementById('updateTitle').value = title;
    document.getElementById('updateDescription').value = description;
    document.getElementById('updateDetails').value = details;

    // Store current note id (for saving)
    window.currentNoteSafeId = safeId;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('updateNoteModal'));
    modal.show();
}

function saveUpdatedNote() {
    const title = document.getElementById('updateTitle').value;
    const description = document.getElementById('updateDescription').value;
    const details = document.getElementById('updateDetails').value;

    fetch(`http://localhost:3000/notes/${encodeURIComponent(title)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, details })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Updated:', data);

        // Update UI directly
        const safeId = window.currentNoteSafeId;
        const noteElement = document.getElementById(`acc-item-${safeId}`);
        noteElement.querySelector('.accordion-body strong').innerText = description;
        noteElement.querySelector('.accordion-body p').innerText = details;

        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('updateNoteModal'));
        modal.hide();
    })
    .catch(err => console.error('Error updating:', err));
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

const displayForm = () => {
    const addnote = document.getElementById('displayForm')
    addnote.style.display = 'block'
    document.getElementById('noteForm').reset();
}



const addNote = () => {
    console.log('ADDING new note')
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const details = document.getElementById('details').value.trim();

    // Log them to verify
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Details:", details);

    if (!title || !description || !details) {
        alert("Please fill in all fields before submitting!");
        return;
    }

    const note = {
        title,
        description,
        details
    }

    //sending to backend to save data
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => console.log("Note added:", data))
    .catch(err => console.error("Error:", err));

    //rendering to UI
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        displayData(data)
    })
    .catch((err) => {
        // Network or parsing error
        console.error('Fetch failed:', err.message);
    });
    document.getElementById('noteForm').reset();
    const addnote = document.getElementById('displayForm')
    addnote.style.display = 'none'
}

