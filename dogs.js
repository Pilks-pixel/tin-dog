
class Dog {
    constructor(dog) {
        Object.assign(this, dog)
    }

    speak() {
        console.log(`Hello my name is ${this.name}`)
    }

    getDogHtml() {

        const {avatar, name, age, bio} = this;

        return ` 
            <div>
            <img class='profile__avatar' src='../${avatar}' alt='a dog' height="250px" width="auto" >
            <p class='profile__heading'>${name} ${age}</p>
            <p class='profile__bio'>${bio}</p>
            </div>
        `
    }

    setLiked() {
        return this.hasBeenLiked = true
    }


    
}

export { Dog }