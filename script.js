document.addEventListener("DOMContentLoaded", function () {
    const existingChats = document.querySelector(".existing-chats");
    const messageDisplay = document.querySelector(".message-display");
    const messageInputBox = document.querySelector(".message-input-box");
    const sendButton = document.querySelector(".send-button");
    const newChatButton = document.querySelector(".chat-button");
    const hidePaneButton = document.querySelector(".hide-bar-button");
    const floatingButtons = document.querySelectorAll(".floating-button");
    const leftPane = document.querySelector(".left-pane");

    // Function to create a new chat with the text "CHAT"
    function createNewChat() {
        const chatElement = document.createElement("div");
        chatElement.classList.add("chat");
        chatElement.textContent = "New Chat";
        existingChats.appendChild(chatElement);
    }
    


    // Event listener for creating a new chat with the text "CHAT"
    newChatButton.addEventListener("click", createNewChat);

    // Event listener for hiding/showing the left pane
    hidePaneButton.addEventListener("click", function () {
        leftPane.classList.toggle("hidden");
    });

    // Event listener to change the button color on click
    floatingButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.backgroundColor = "#0056b3"; // Darker color on click
        });
    });

    // Initially hide the left pane
    leftPane.classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    const leftPane = document.querySelector(".left-pane");
    const hideBarButton = document.querySelector(".hide-bar-button");
    const openBarButton = document.querySelector(".open-bar-button");

    // Function to hide the left pane
    function hideLeftPane() {
        leftPane.style.display = "none";
        openBarButton.style.display = "block";
        hideBarButton.style.display = "none";
    }

    // Function to show the left pane
    function showLeftPane() {
        leftPane.style.display = "block";
        openBarButton.style.display = "none";
        hideBarButton.style.display = "block";
    }

    // Event listener for the hide button
    hideBarButton.addEventListener("click", hideLeftPane);

    // Event listener for the open button
    openBarButton.addEventListener("click", showLeftPane);

    // Initially hide the left pane
    hideLeftPane();
});
document.addEventListener("DOMContentLoaded", function () {
    const leftPane = document.querySelector(".left-pane");
    const hideBarButton = document.querySelector(".hide-bar-button");
    const topHideButton = document.querySelector(".top-left-button button");
    const openBarButton = document.querySelector(".open-bar-button");

  
   
    // Event listener for the hide button
    hideBarButton.addEventListener("click", hideLeftPane);

    // Event listener for the top-left button
    topHideButton.addEventListener("click", showLeftPane);

    // Initially hide the left pane
    showLeftPane();
});
// Function to hide the left pane
function hideLeftPane() {
    leftPane.style.display = "none";
    openBarButton.style.display = "block";
}


// Function to show the left pane
function showLeftPane() {
    leftPane.style.display = "block";
    openBarButton.style.display = "block";
    topHideButton.style.display = "none"; // Hide the top-left button
}
// JavaScript to handle sending messages
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageDisplay = document.querySelector('.message-display');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        // Create a new message element
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;

        // Append the message to the message display area
        messageDisplay.appendChild(message);

        // Clear the message input
        messageInput.value = '';
    }
});

