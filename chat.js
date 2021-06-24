const coll = document.getElementsByClassName("collapsible")[0];

coll.addEventListener("click", function () {
  let content = this.nextElementSibling;
  // console.log(content.scrollHeight);
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let time = `${hours}:${minutes}`;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hi,How can I help you?";
  let p = document.createElement("p");
  p.setAttribute("class", "botText");
  let span = document.createElement("span");
  span.append(firstMessage);
  p.append(span);
  document.getElementById("botStarterMessage").appendChild(p);

  let time = getTime();

  document.getElementById("chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Receives the response from the bot
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let p = document.createElement("p");
  p.setAttribute("class", "botText");
  let span = document.createElement("span");
  span.append(botResponse);
  p.append(span);
  document.getElementById("chatbox").append(p);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box
function getResponse() {
  let userText = document.getElementById("textInput").value;

  if (userText == "") {
    userText = "Type something!";
  }
  let p = document.createElement("p");
  p.setAttribute("class", "userText");
  let span = document.createElement("span");
  p.append(span);
  let text = userText;
  span.append(text);

  document.getElementById("textInput").value = "";
  document.getElementById("chatbox").appendChild(p);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Sends text when the send button is clicked
function buttonSendText(sampleText) {
  let p = document.createElement("p");
  p.setAttribute("class", "userText");
  let span = document.createElement("span");
  p.append(span);
  let text = sampleText;
  span.append(text);

  document.getElementById("textInput").value = "";
  document.getElementById("chatbox").appendChild(p);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}
