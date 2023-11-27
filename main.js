/*
* Backend:
* ollama run mistral
* */
/*
const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');
button.addEventListener("click", () => {
    fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "mistral",
            prompt: `The following is a list of dishes you can make with the following ingredients: ${input.value}`,
            stream: false
        })
    })
        .then(response => response.json())
        .then(data => {
            pTag.innerText = data.response;
            console.log(data.response);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});*/

const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');

button.addEventListener("click", () => {
    getGeneratedText(`The following is a list of 10 horror movies based on the prompt: Only show movies where prompt is relevant. The movies has to be showcased in a list. Dont repeat movie titles. Dont show the documentaries or tv-shows. Only show movies where prompt is very important to the story. If movies share name but are from different years, only show one of them. ${input.value}.`)

        .then(generatedText => {
            pTag.innerText = generatedText.replace("Only show movies where prompt is relevant. The movies has to be showcased in a list. Dont repeat movie titles. Dont show the documentaries or tv-shows. Only show movies where prompt is very important to the story. If movies share name but are from different years, only show one of them.", "");

        });
    })
    button.addEventListener("click", performSearch);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            // "Enter" key is pressed
            performSearch();
        }
});
