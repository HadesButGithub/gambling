function pickRandomItems() {
    var items = ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple", "Strawberry"];
    var randomItems = [];

    // Pick 3 random items
    for (var i = 0; i < 3; i++) {
      var randomIndex = Math.floor(Math.random() * items.length);
      var randomItem = items[randomIndex];
      randomItems.push(randomItem);
    }

    // Display the random items on the HTML page
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Random Items: " + randomItems.join(", ");

    // Check if all items are the same
    if (randomItems[0] === randomItems[1] && randomItems[1] === randomItems[2]) {
      resultElement.innerHTML += "<br>Congratulations! You won big!!!";
      playAudio("wonbig.mp3");
    }
    // Check if two items are the same
    else if (randomItems[0] === randomItems[1] || randomItems[1] === randomItems[2] || randomItems[0] === randomItems[2]) {
      resultElement.innerHTML += "<br>You're getting closer!";
      playAudio("lostbig.mp3");
    }
    // No items are the same
    else {
      resultElement.innerHTML += "<br>You're one try away from winning.";
      playAudio("lostbig.mp3");
    }
  }

// function that stops the audio
function stopAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.pause();
}

  function playAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}