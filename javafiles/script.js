// Simulated data (replace this with actual data from your database)
const agentProfiles = [
    { name: 'Agent 1', keywords: ['keyword1', 'keyword2', 'keyword3'] },
    { name: 'Agent 2', keywords: ['keyword2', 'keyword4', 'keyword5'] },
    { name: 'Agent 3', keywords: ['keyword1', 'keyword3', 'keyword6'] },
    // Add more agent profiles as needed
];

// Function to perform search and display results
function search() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Clear previous results

    const filteredProfiles = agentProfiles.filter(agent => {
        // Check if any of the agent's keywords match the search input
        return agent.keywords.some(keyword => keyword.includes(searchInput));
    });

    if (filteredProfiles.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        filteredProfiles.forEach(agent => {
            const agentElement = document.createElement('div');
            agentElement.innerHTML = `<h2>${agent.name}</h2>`;
            searchResults.appendChild(agentElement);
        });
    }
}

// Attach the search function to the input field's change event
document.getElementById('search-bar').addEventListener('input', search);
