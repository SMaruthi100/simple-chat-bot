function getBotResponse(input) {
  if (input == "India") {
    return "Delhi";
  } else if (input == "America") {
    return "Washington";
  } else if (input == "Canada") {
    return "Ottawa";
  } else if (input == "Hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "How are you?") {
    return "I am fine.What about you?";
  } else {
    return "Try asking something else!";
  }
}
