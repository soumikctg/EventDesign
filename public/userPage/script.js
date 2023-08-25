import fakeData from './data.js';

const cardContainer = document.getElementById('cardContainer');

const taskContainer = document.getElementById('taskContainer');

const eventContainer = document.getElementById('eventContainer');


function renderCards(cards) {
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card me-4 shadow rounded-3';
        cardElement.style='max-width: 25rem;'
        cardElement.innerHTML = `
            
                <div class="mt-3">
                    <h5 class="card-title text-center fs-5 fw-bold">${card.eventName}</h5>
                </div>
                <div class="card-body row px-4">
                    <div class="col-md-12">
                        <p>${card.Description} </p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-2">
                        <a href="#" class="btn btn-dark w-100">Details</a>
                    </div>
                </div>
            
    `;
        cardContainer.appendChild(cardElement);
    });
}


function renderTaskCards(tasks) {
    taskContainer.innerHTML = `<h3 class="text-center mt-3 mb-4">Pending Event Requests</h3>`;

    tasks.forEach(task => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card shadow rounded-3 mb-3';
        cardElement.innerHTML = `
            
        <div class="mt-3">
            <h5 class="card-title text-center fs-5 fw-bold">${task.eventName}</h5>
        </div>
        <div class="card-body row ">
            <div class="col-md-12">
                <p>${task.Description}</p>
            </div>
            <div class="d-flex justify-content-evenly mt-2 mb-2">
                <a href="#" class="me-3 btn btn-success w-100">Accept</a>
                <a href="#" class="btn btn-danger w-100">Reject</a>
            </div>
        </div>
            
    `;
        taskContainer.appendChild(cardElement);
    });
}


function renderEventCards(events) {
    eventContainer.innerHTML = `<h3 class="text-center mt-3 mb-4">Upcoming Events</h3>`;

    events.forEach(event => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card shadow rounded-3 mb-3';
        cardElement.innerHTML = `
            
        <div class="mt-3">
            <h5 class="card-title text-center fs-5 fw-bold">${event.eventName}</h5>
        </div>
        <div class="card-body row ">
            <div class="col-md-12">
                <p>${event.Description}</p>
            </div>
            <div class="d-flex justify-content-evenly mt-2 mb-2">
                <a href="#" class="btn btn-secondary w-100">Details</a>
            </div>
        </div>
            
    `;
        eventContainer.appendChild(cardElement);
    });
}



// Initial render
renderTaskCards(fakeData);
renderEventCards(fakeData);
renderCards(fakeData);



