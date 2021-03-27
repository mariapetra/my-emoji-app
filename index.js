

const myEmojis = ["🧑‍💻", "🧘", "📷"]

function newEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
        for (let i = 0; i < myEmojis.length; i++) {
        const reneredEmojis = document.createElement("span")
        reneredEmojis.textContent = myEmojis[i]
        emojiContainer.append(reneredEmojis)
    
    }
}

newEmojis()
// Hook an event listener up with the button, and log out the input field's value when it's clicked


const pushBtn = document.getElementById("push-btn")

    function handlePushBtn() {
        const emojiInput = document.getElementById("emoji-input")
            if (emojiInput.value) {
            myEmojis.push(emojiInput.value)
            emojiInput.value = ""
            newEmojis()
    }  
}
    pushBtn.addEventListener("click", handlePushBtn) 

const unshiftBtn = document.getElementById("unshift-btn")
    
    function handleUnshiftBtnClick() {   
        const emojiInput = document.getElementById("emoji-input")   
            if (emojiInput.value) {
            myEmojis.unshift(emojiInput.value)
            emojiInput.value = ""           
            newEmojis()
        }
    }
    unshiftBtn.addEventListener("click", handleUnshiftBtnClick) 

const popBtn = document.getElementById("pop-btn")

    function handlePopBtn() {
        const emojiInput = document.getElementById("emoji-input")
            {myEmojis.pop(emojiInput.value)
            emojiInput.value = ""
            newEmojis()
        }  
    }
    popBtn.addEventListener("click", handlePopBtn) 

const shiftBtn = document.getElementById("shift-btn")
    
    function handleShiftBtn() {   
        const emojiInput = document.getElementById("emoji-input")   
            { myEmojis.shift(emojiInput.value)
            emojiInput.value = ""           
            newEmojis()
        }
    }
    shiftBtn.addEventListener("click", handleShiftBtn) 
