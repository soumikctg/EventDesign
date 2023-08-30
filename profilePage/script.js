import fakeData from './data.js';

const cardContainer = document.getElementById('cardContainer');



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





// Initial render
renderCards(fakeData);



