

const myEmojis = ["🧑‍💻", "🧘", "📷"]
const emojiContainer = document.getElementById("emojiContainer")
console.log(emojiContainer)


for (let i = 0; i < myEmojis.length; i++) {
        // console.log(myEmojis[i])
    const reneredEmojis = document.createElement("span")
    reneredEmojis.textContent = myEmojis[i]
    emojiContainer.append(reneredEmojis)
}


 