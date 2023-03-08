class Dog {
	constructor(dog) {
		Object.assign(this, dog);
	}

	speak() {
		console.log(`Hello my name is ${this.name}`);
	}

	getDogHtml(result) {
		const { avatar, name, age, bio, hasBeenSwiped } = this;
		const status = hasBeenSwiped ? this.setLikedStatus(result) : "";

		return ` 
            <div class='profile__card'>
            <img class='card__avatar' src='../${avatar}' alt='a dog' height="250px" width="auto" >
            ${status}
            <p class='card__heading'>${name} ${age}</p>
            <p class='card__bio'>${bio}</p>
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
        <img class='card__avatar' src='../assets/${status}' alt='status' height="250px" width="auto" >
        `;
	}

	setSwiped() {
		return (this.hasBeenSwiped = true);
	}
}

export { Dog };
