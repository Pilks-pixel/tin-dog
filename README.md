# Tindog

![Tindog screenshot](./assets/screenshot.png)
:rocket: **Deployed** with Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bd2ceba-c82b-4c02-ad39-a5f0bd210cdf/deploy-status)](https://app.netlify.com/sites/roaring-starburst-e3170c/deploys)


## About

Dog dating app made in vanilla javascript. The app demonstrates my knowledge of classes in JS, as well as DOM manipulation, events, maps and timeouts.

## Significant code
```javascript
// Uses classes to create dogs with methods that set html in the game, depending on the users input

class Dog {
	constructor(dog) {
		Object.assign(this, dog);
	}

	getDogHtml(result) {
		const { avatar, name, age, bio, hasBeenSwiped } = this;
		const status = hasBeenSwiped ? this.setLikedStatus(result) : "";

		return ` 
            <div class='profile__card'>
            <img class='card__image' src='../${avatar}' alt='a dog' height="250px" width="auto" />
            ${status}
			<div class='card__bio'>
            	<p class='card__heading'>${name} ${age}</p>
            	<p>${bio}</p>
			</div>
            </div>
        `; 
	}

	setLikedStatus(result) {
		let status;

		if (result == true) {
			this.hasBeenLiked = true;
			status = "like-image.png";
		} else {
			this.hasBeenLiked = false;
			status = "nope-image.png";
		}

		return `
        <img class='card__status' src='../assets/${status}' alt='status' height="250px" width="auto" >
        `;
	}
  ```
