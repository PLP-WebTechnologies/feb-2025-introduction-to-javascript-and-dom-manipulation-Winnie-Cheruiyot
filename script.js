// 1. Change text content dynamically
const changeTextButton = document.getElementById('changeTextButton');
const textElement = document.getElementById('text');

changeTextButton.addEventListener('click', function() {
  textElement.textContent = 'The order can be changed dynamically!';
});

// 2. Modify CSS styles dynamically
const toggleStyleButton = document.getElementById('toggleStyleButton');
const styledText = document.getElementById('styledText');

toggleStyleButton.addEventListener('click', function() {
  // Toggle a highlight class to change the text style
  styledText.classList.toggle('highlight');
});

// 3. Add or remove an element when a button is clicked
const addElementButton = document.getElementById('addElementButton');
const dynamicContainer = document.getElementById('dynamicContainer');

addElementButton.addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'you can type whatever you want here!';
  dynamicContainer.appendChild(newElement);
});

// 4. Remove an element when a button is clicked
const removeMessageButton = document.getElementById('removeMessageButton');
const messageText = document.getElementById('messageText');

removeMessageButton.addEventListener('click', function() {
  messageText.remove();
});


