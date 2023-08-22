import fakeData from './fake.js';

const cardContainer = document.getElementById('cardContainer');
const maxPriceInput = document.getElementById('maxPrice');
const eventTypeSelect = document.getElementById('eventType');
const locationInput = document.getElementById('location');
const filterButton = document.getElementById('filterButton');

function renderCards(cards) {
  cardContainer.innerHTML = '';

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <h3>${card.eventName}</h3>
      <p>Location: ${card.location}</p>
      <p>Price: $${card.price}</p>
    `;
    cardContainer.appendChild(cardElement);
  });
}

function applyFilters() {
  const maxPrice = parseInt(maxPriceInput.value) || Infinity;
  const eventType = eventTypeSelect.value;
  const location = locationInput.value.toLowerCase();

  const filteredCards = fakeData.filter(card => {
    return card.price <= maxPrice &&
      (eventType === '' || card.eventName === eventType) &&
      (location === '' || card.location.toLowerCase().includes(location));
  });

  renderCards(filteredCards);
}

filterButton.addEventListener('click', applyFilters);

// Initial render
renderCards(fakeData);



