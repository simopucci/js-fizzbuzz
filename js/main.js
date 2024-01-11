const cardsRow = document.getElementById('cards-row');


// * for loop
for (let i = 1; i <= 100; i++) {
    let cardText = '';
    let cardClass = '';

    if (i % 15 == 0) {
        cardText = 'fizzbuzz';
        cardClass = 'bg-success';
    } else if (i % 5 == 0) {
        cardText = 'buzz';
        cardClass = 'bg-danger';
    } else if (i % 3 == 0) {
        cardText = 'fizz';
        cardClass = 'bg-primary';
    } else {
        cardText = i;
    }
    
    // * add cards
    cardsRow.innerHTML += `
    <div class="col-2 g-3">
        <div class="card ${cardClass}">
            <h3>${cardText}</h3>
        </div>
    </div>
    `;
}