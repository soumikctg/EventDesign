import fakeData from './fake-data/data.js';

const cardContainer = document.getElementById('cardContainer');
const eventTypeSelect = document.getElementById('eventType');
const locationInput = document.getElementById('location');
const filterEvent = document.getElementById('filterEvent');

function renderCards(cards) {
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-lg-4 col-md-6 col-sm-12 mb-3';
        cardElement.innerHTML = `
        <div class="card border-0 shadow container pt-3">
        <img src="homepage/images/room2.png" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${card.eventName}</h5>
            <p>${card.location}</p>
            <p>${card.eventType}</p>
            <p>${card.Description}</p>
    
            <div class="d-flex justify-content-between mb-2">
            <a href="#" class="btn btn-dark">Profile</a>
            </div>
        </div>
    </div>
    `;
        cardContainer.appendChild(cardElement);
    });
}

function applyFilters() {
    const eventType = eventTypeSelect.value;
    const location = locationInput.value.toLowerCase();

    const filteredCards = fakeData.filter(card => {
        return (location === '' || card.location.includes(location)) &&
            (eventType === '' || card.eventType === eventType);
    });

    renderCards(filteredCards);
}

filterEvent.addEventListener('click', applyFilters);


// Initial render
renderCards(fakeData);
