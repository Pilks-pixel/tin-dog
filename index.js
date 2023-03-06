import { dogs } from "./data.js";
import { Dog } from "./dogs.js";


// To Do 

//add onClick event listener and function to handle dog click states
// implement logic for adding like or nope image
    

const puppy = new Dog(dogs[0]);

function render () {
     document.getElementById('profile').innerHTML = puppy.getDogHtml()
}

render();



