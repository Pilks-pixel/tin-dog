import { dogs } from "./data.js";
import { Dog } from "./dogs.js";


function shuffle(arr) {

	for (let i = arr.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * i + 1);
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr
	
}

let currentPuppy,
	shuffledDogs
const swipedDogs = new Map();



// Event functions
function nextDog(result) {
	if (shuffledDogs.length <= 1) { 
		return gameOver();
	}

	shuffledDogs.shift();
	currentPuppy = shuffledDogs[0];
	console.log({ shuffledDogs }, currentPuppy, { swipedDogs });
	return render(result);
}

// ToDo
// buttons not clickable if all dogs swiped

function handleSwipe(e) {
	let result = e.currentTarget.id == "like";

	currentPuppy.setSwiped();
	render(result);

	if (currentPuppy.hasBeenLiked && currentPuppy.hasBeenSwiped) {
		!swipedDogs.has(currentPuppy.name) ?
		swipedDogs.set(currentPuppy.name, currentPuppy)
		: "";
	}

	setTimeout(nextDog, 2000, result);
}

// Event Listeners

document.querySelector(".btn--reset").addEventListener("click", newGame);
document.querySelector(".btn--reject").addEventListener("click", handleSwipe);
document.querySelector(".btn--heart").addEventListener("click", handleSwipe);

// HTML render functions
function render(result) {
	document.getElementById("profile").innerHTML =
		currentPuppy.getDogHtml(result);
}

function newGame() {
	const dogDataArr = dogs.map(dog => new Dog(dog));
	shuffledDogs = shuffle(dogDataArr);
	console.log({shuffledDogs})
	currentPuppy = shuffledDogs[0];
	render();
}

function gameOver() {
	console.log(Array.from(swipedDogs))
	return (document.getElementById("profile").innerHTML = ` 
            <div class='gameOverContainer'>
				<h3 class='gameOver__title'>Your Matched Dogs:</h3>
				<ul gameOver__list>
				${Array.from(swipedDogs).map(([key, value]) => 
					`
    				<li class='gameOverList__matched'>${value.name}</li>
					`).join('')}

				</ul>
            </div>
        `);
}

newGame();

