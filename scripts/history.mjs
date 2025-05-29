// Должно соответствовать HTML:
const historyList = document.getElementById('list'); // верно
document.getElementById('clearList'); // верно
document.getElementById('history-list'); // верно

function history(value) {
    const li_item = document.createElement('li');
    li_item.textContent = value;
    historyList.appendChild(li_item);
}

document.getElementById('clearList').addEventListener('click', function() {
    historyList.innerHTML = '';
});

document.getElementById('history-list').style.display = 'none';
document.getElementById('burger-menu').onclick = function() {
    if (document.getElementById('history-list').style.display === 'none') {
        document.getElementById('history-list').style.display = 'block';
    } else {
        document.getElementById('history-list').style.display = 'none';
    }
};

export { history };

