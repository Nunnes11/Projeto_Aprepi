// script.js

// Função para formatar a data no formato brasileiro
function formatDate(date) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}

// Função para atualizar o tempo para cada card
function updateCardTime() {
    const cards = document.querySelectorAll('.card-footer small');
    cards.forEach((card, index) => {
        const updateTime = card.parentElement.parentElement.querySelector('.text-body-secondary');
        const lastUpdated = new Date(); // Substitua isso pela data real da última atualização
        const currentTime = new Date();
        const timeDifference = Math.floor((currentTime - lastUpdated) / 60000); // Diferença em minutos
        const formattedDate = formatDate(lastUpdated);
        updateTime.textContent = `Last updated ${timeDifference} mins ago on ${formattedDate}`;
    });
}

// Atualizar tempo inicial
updateCardTime();

// Simular atualização a cada 60 segundos
setInterval(updateCardTime, 60000);
