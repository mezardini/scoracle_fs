document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // Function to fetch data from the endpoint
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/generaldata/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // Function to display data
    const displayData = (data) => {
        if (data.message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = data.message;
            dataContainer.appendChild(messageElement);
        }

        if (data.data) {
            const table = document.createElement('table');
            table.className = 'table';
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const nameHeader = document.createElement('th');
            nameHeader.textContent = 'Name';
            const scoreHeader = document.createElement('th');
            scoreHeader.textContent = 'Score';
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(scoreHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            data.data.forEach(item => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                const scoreCell = document.createElement('td');
                scoreCell.textContent = item.score;
                row.appendChild(nameCell);
                row.appendChild(scoreCell);
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            dataContainer.appendChild(table);
        }
    };

    // Fetch and display data on page load
    fetchData();
});
