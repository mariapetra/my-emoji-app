

const myEmojis = ["🧑‍💻", "🧘", "📷"]
const emojiContainer = document.getElementById("emoji-container")

for (let i = 0; i < myEmojis.length; i++) {
        // console.log(myEmojis[i])
    const reneredEmojis = document.createElement("span")
    reneredEmojis.textContent = myEmojis[i]
    emojiContainer.append(reneredEmojis)
    
}

// Hook an event listener up with the button, and log out the input field's value when it's clicked


const btnClick = document.getElementById("push-btn")

function handleButtonClick() {
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
    }
    

}

btnClick.addEventListener("click", handleButtonClick) 


