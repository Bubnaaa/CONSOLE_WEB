const input = document.getElementById("command-input");
const output = document.getElementById("console-output")

input.addEventListener('keydown', function (udalost) {
    if (udalost.key === 'Enter') {
        const text = input.value;
        console.log("User_Input: " + text);

        if (text.trim() !== "") {
            const newRow = document.createElement("div");
            newRow.textContent = "> " + text;
            output.appendChild(newRow);
            output.scrollTop = output.scrollHeight;
        }
        input.value = "";
    }
});



