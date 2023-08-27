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
            
                    <div class="d-flex mb-2">
                        <a href="#" class="btn py-1 w-100 btn-primary">Profile</a>
                    </div>
                </div>
            </div>
    `;
        cardContainer.appendChild(cardElement);
    });
}





function applyFilters() {
    const eventType = eventTypeSelect.value.toLowerCase();
    const location = locationInput.value.toLowerCase();

    console.log(location);
    console.log(eventType);

    const filteredCards = fakeData.filter(card => {
        const cardLocation = card.location.toLowerCase();
        const cardEventType = card.eventType.toLowerCase();
        
        console.log("Card Location:", cardLocation);
        console.log("Card Event Type:", cardEventType);

        return (location === '' || cardLocation.includes(location)) &&
            (eventType === '' || cardEventType === eventType);
    });
    console.log(filteredCards);
    renderCards(filteredCards);
}

filterEvent.addEventListener('click', applyFilters);


// Initial render

renderCards(fakeData);



