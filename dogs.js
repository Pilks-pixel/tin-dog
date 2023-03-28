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

	setSwiped() {
		return (this.hasBeenSwiped = true);
	}
}

export { Dog };
