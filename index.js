

const myEmojis = ["🧑‍💻", "🧘", "📷"]
const emojiContainer = document.getElementById("emoji-container")

function newEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        // console.log(myEmojis[i])
    const reneredEmojis = document.createElement("span")
    reneredEmojis.textContent = myEmojis[i]
    emojiContainer.append(reneredEmojis)
    
}
}

newEmojis()
// Hook an event listener up with the button, and log out the input field's value when it's clicked


const btnClick = document.getElementById("push-btn")

function handleButtonClick() {
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        newEmojis()
    }
    

}

btnClick.addEventListener("click", handleButtonClick) 


