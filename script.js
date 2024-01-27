document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn');
    const outputDiv = document.getElementById('output');

    async function fetchData(callback) {
        try {
            // API URL
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

            // Fetch data from the API using async/await
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Call the callback function with the result (title in this case)
            callback(null, data.title);
        } catch (error) {
            // Handle errors if any
            callback(error, null);
        }
    }

    // Callback function to display the title on the webpage
    function displayTitle(error, title) {
        const messageElement = document.createElement('p');
        if (error) {
            messageElement.textContent = `Error: ${error.message}`;
        } else {
            messageElement.textContent = `Title: ${title}`;
        }

        outputDiv.appendChild(messageElement);
    }

    // Add click event listener to the button
    btn.addEventListener('click', () => {
        // Using the async function to fetch data and display the title
        fetchData(displayTitle);
    });
});