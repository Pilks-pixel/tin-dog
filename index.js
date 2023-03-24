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
	shuffledDogs,
	swipedDogs = [];



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

function handleSwipe(e) {
	let result = e.currentTarget.id == "like";

	currentPuppy.setSwiped();
	render(result);

	currentPuppy.hasBeenLiked && currentPuppy.hasBeenSwiped
		? (swipedDogs = [...swipedDogs, currentPuppy])
		: "";

	setTimeout(nextDog, 1000, result);
}

document.querySelector(".btn--reset").addEventListener("click", newGame);
document.querySelector(".btn--reject").addEventListener("click", handleSwipe);
document.querySelector(".btn--heart").addEventListener("click", handleSwipe);

// HTML render functions
function newGame() {
	const dogDataArr = dogs.map(dog => new Dog(dog));
	shuffledDogs = shuffle(dogDataArr);
	currentPuppy = shuffledDogs[0];
	render();
}


function render(result) {
	document.getElementById("profile").innerHTML =
		currentPuppy.getDogHtml(result);
}

function gameOver() {
	return (document.getElementById("profile").innerHTML = ` 
            <div class='gameOverContainer'>
            	<p class='gameOver__message'>No more dogs!</p>
				<h3>Matched</h3>
				<ul>
				${swipedDogs.map(dog => `<li>${dog.name}</li>`)}
				</ul>
            </div>
        `);
}

newGame();

