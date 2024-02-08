function runCode() {
    const code = document.getElementById('code-editor').value;
    const resultFrame = document.getElementById('result-frame');
    const iframeDoc = resultFrame.contentDocument || resultFrame.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function submitCode() {
    const code = document.getElementById('code-editor').value;
    const resultFrame = document.getElementById('result-frame');
    const iframeDoc = resultFrame.contentDocument || resultFrame.contentWindow.document;

    try {
        // Attempt to execute the code
        eval(code);

        // If execution is successful, update the user's score
        updateUserScore(1);

        // Display the result in the iframe
        iframeDoc.open();
        iframeDoc.write('<p>Code executed successfully! You earned 1 point.</p>');
        iframeDoc.close();
    } catch (error) {
        // If there's an error during execution, update the user's score
        updateUserScore(0);

        // Display the error in the iframe
        iframeDoc.open();
        iframeDoc.write(`<p>Error during execution: ${error.message}</p>`);
        iframeDoc.close();
    }
}

function updateUserScore(score) {
    // Here, you would typically make a server request to update the user's score in a database
    // For simplicity, we'll just update the displayed score in the frontend
    const userScoreElement = document.getElementById('user-score');
    userScoreElement.textContent = score;
}
