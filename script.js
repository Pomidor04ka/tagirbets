let bets = [];

function placeBet(team) {
    bets.push(team);
    updateBetList();
    alert(`Вы сделали ставку на команду: ${team}`);
}

function updateBetList() {
    const betList = document.getElementById('betList');
    betList.innerHTML = '';
    bets.forEach((bet, index) => {
        const li = document.createElement('li');
        li.textContent = `Ставка ${index + 1}: ${bet}`;
        betList.appendChild(li);
    });
}