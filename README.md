# Magic Match Game

## Overview
This project is a memory card matching game built with React. The goal of the game is to match pairs of cards with the same image. It features card shuffling, turn tracking, and a stylish user interface. The project serves as a practice exercise for React development and includes basic game logic and styling.

<br>
<img width="200" alt="1" src="https://github.com/Imasha-Senadheera/Magic-Memory/assets/121493197/8945b119-dc5b-4722-9970-af29dca03c58" >

<img width="200" alt="1" src="https://github.com/Imasha-Senadheera/Magic-Memory/assets/121493197/08a76804-7528-49df-8794-c5734067db2c" >

<img width="200" alt="1" src="https://github.com/Imasha-Senadheera/Magic-Memory/assets/121493197/654bb995-3979-42f4-b7a2-0feb7d65c835" >
<br><br>

## Technologies Used
- React : A JavaScript library for building user interfaces.
- HTML : Standard markup language for creating web pages.
- CSS : Styling and animations for an enhanced user experience.
- Google Fonts : External font library for custom typography.

<br>

## Game Features
- **Card Matching:** Flip two cards at a time and try to match pairs with the same image.
- **Turn Tracking:** Keep track of the number of turns taken to complete the game.
- **New Game Button:** Start a new game by shuffling the cards.
- **Stylish UI:** Stylish and responsive user interface with custom styling.

<br>

## Game Rules
1. Click on a card to reveal the image.
2. Click on another card to check if it matches the first one.
3. If the cards match, they stay flipped. If not, they flip back after a brief delay.
4. Continue until all pairs are matched.

<br>

## Key Components:

#### 1. App Component (App.js):

- Manages the game state using React Hooks (useState, useEffect).
- Initializes and shuffles cards for a new game.
- Handles user choices and compares selected cards.
- Implements game logic, such as tracking turns and disabling cards during comparisons.
- Utilizes the SingleCard component to render individual cards.

#### 2. SingleCard Component (SingleCard.js):

- Represents a single card in the game.
- Contains a clickable area that users interact with to make a card selection.
- Applies flipping animations to reveal card images.
- Sends user choices back to the App component for processing.
- Utilizes CSS for styling and animations.

<br>

## Functionality:

#### 1. New Game Button:

- Resets the game by shuffling the cards.
- Starts a new game automatically when the component mounts.

#### 3. Card Flipping:

- Allows users to click on cards to reveal images.
- Applies flipping animations to enhance user experience.
- Disables card clicks during certain game states.

#### 4. Game Logic:

- Tracks the number of turns taken.
- Compares selected cards and checks for matches.
- Updates the game state accordingly.

#### 5. CSS Styling:

- Utilizes CSS for card styling and animations.
- Implements responsive design for a visually appealing interface.

<br>

## Explanation:

#### 1. React Knowledge:
- <b> React Hooks Usage: </b> I utilized React Hooks, such as <b>'useState'</b> and <b>'useEffect'</b>, to manage the application's state and handle side effects. For instance, <b>'useState'</b> was crucial for dynamically updating the game state, keeping track of turns, and managing user choices.
  
- <b> Component-Based Structure: </b> The project follows a component-based structure, dividing the application logic into reusable components. This modular approach enhances maintainability and allows for easy scalability. Each component has a specific responsibility, contributing to a clear and organized codebase.

#### 2. Game Logic:

- <b>Card Shuffling Mechanism:</b> To ensure an engaging user experience, I implemented a card shuffling mechanism using the Fisher-Yates algorithm. This randomness adds an element of challenge to the game, making each session unique.
  
- <b>User Choices and Comparisons:</b> The application effectively handles user choices and comparisons between selected cards. React's state management, particularly the use of <b>'useState'</b>, plays a crucial role in tracking and updating the chosen cards. The game logic, including turn tracking, is efficiently implemented.
  
- <b>useEffect for Side Effects:</b> I employed the <b>'useEffect'</b> hook to manage side effects, particularly in scenarios where asynchronous operations were required. For example, after users make their card choices, <b>'useEffect'</b> is used to trigger the comparison logic and update the game state accordingly.

#### 3. CSS Styling:

- <b>Styling and Animations:</b> CSS was employed for styling and animations, contributing to the overall visual appeal of the application. The flipping animations for card reveal, along with custom styling, enhance the user interface, providing a more dynamic and interactive experience.

#### 4. Responsive Design:

- <b>Device Compatibility:</b> To ensure a consistent experience across various devices, I implemented responsive design practices. This means the application is optimized for different screen sizes and resolutions, adapting its layout and styling accordingly.

#### 5. Automated Game Start:

- <b>useEffect for Automatic Game Start:</b> Leveraging the <b>'useEffect'</b> hook, the application automatically initiates a new game when the component mounts. This feature enhances user convenience by eliminating the need for manual intervention to start a new game.

<br> 

## Additional Notes
- This project is a practice exercise for React development and incorporates basic game logic and styling.
- Feel free to customize and expand the game based on your preferences.
