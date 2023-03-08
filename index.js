import { dogs } from "./data.js";
import { Dog } from "./dogs.js";


// To Do 
// Render dogs from an Array
// On click change to next Dog
// Handle end of dogs

const puppy = new Dog(dogs[0]);




function handleSwipe(e) {
     let result = e.currentTarget.id == 'like'
     puppy.setSwiped()
     console.log({result}, puppy, document.body)
     render(result)

}

document.querySelector('.btn--reject').addEventListener('click', handleSwipe )
document.querySelector('.btn--heart').addEventListener('click', handleSwipe )


function render (result) {
     document.getElementById('profile').innerHTML = puppy.getDogHtml(result)
}

render();




