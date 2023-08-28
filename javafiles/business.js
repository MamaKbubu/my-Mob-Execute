document.addEventListener('DOMContentLoaded', function() {
    const descriptionTextarea = document.getElementById('description');

    // Add event listener for input event (when user types in the textarea)
    descriptionTextarea.addEventListener('input', function() {
        // Adjust the textarea's cols attribute based on its content length
        const contentLength = descriptionTextarea.value.length;
        const minWidth = 20; // Minimum number of columns
        const maxWidth = 100; // Maximum number of columns

        // Calculate the new number of columns
        const newCols = Math.min(Math.max(minWidth, contentLength + 2), maxWidth);

        descriptionTextarea.cols = newCols;
    });
});
