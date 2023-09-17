# javascript_project2
I created this Pig Game using the DOM Manipulation of Java Script.

# You can play the Game online at
https://sushantanandy.github.io/javascript_project2/

Warning: It is a very addictive game. Play at your own risk. 😅

# Rule of playing the Game
1. There are two players (Player 1 and Player 2).
2. The maximum score is 100.
3. Each player will get their term for rolling their dice.
4. If Player1 rolls the dice and gets 1 the control will move to Player2 and whatever score Player1 had made by rolling the dice will sum up to 0.
5. To win this game the maximum score needed by any player is 100.
6. Whoever scoring 100 or more than 100 will win the game.

Imagine the DOM (Document Object Model) as your playground, and JavaScript as your magic wand to make things happen. 🪄✨

### The DOM Playground

🏰 **Welcome to the DOM Playground!** It's a magical place where you can change anything on a web page using JavaScript. Think of it like editing a digital coloring book, but for websites.

### 1. Selecting Elements

🎯 **Bullseye Targeting!** To start, you need to pick elements on the webpage. It's like aiming at targets. You can use:

- `document.getElementById('elementId')`: A sniper for a single element by its unique ID.
- `document.getElementsByClassName('className')`: A fishing net for elements with the same class.
- `document.getElementsByTagName('tagName')`: A magnet for elements of the same type.
- `document.querySelector('selector')`: A laser pointer for a specific element using CSS selectors.
- `document.querySelectorAll('selector')`: A super-magnet for all matching elements.

### 2. Changing Elements

🌟 **Magical Transformations!** Once you've got your target, you can change it:

- `.textContent`: Change the text inside an element.
- `.innerHTML`: Rewrite the entire content (HTML) of an element.
- `.setAttribute('attributeName', 'attributeValue')`: Modify attributes like `src`, `href`, or `class`.
- `.classList.add('newClass')`: Add a new CSS class for instant styling magic.
- `.style.property = 'value'`: Alter the element's style, e.g., `.style.color = 'blue'`.

### 3. Creating Elements

🚀 **Element Factory!** You can even create brand new elements and add them to the webpage:

```javascript
const newElement = document.createElement('tagName');
newElement.textContent = 'New Element Content';
document.body.appendChild(newElement); // Put it somewhere!
```

### 4. Responding to Events

🎉 **Party Time!** JavaScript can also throw a party by responding to user interactions:

```javascript
element.addEventListener('click', function() {
    // Do something fun when the element is clicked!
});
```

### 5. Removing Elements

🗑️ **Cleaning Up!** If you ever want to tidy up the playground:

```javascript
const elementToRemove = document.getElementById('elementToRemove');
elementToRemove.parentNode.removeChild(elementToRemove); // Poof! It's gone!
```

### Conclusion

So, there you have it! DOM manipulation is like having a magical adventure in the digital world. With JavaScript, you're not just a user; you're the wizard of your webpage, making it do tricks, dance, and entertain your visitors. Remember, with great power comes great responsibility. So, go ahead and create some web magic! 🪄✨🌟
