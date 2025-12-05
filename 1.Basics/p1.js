class Parent {
    constructor(name) {
        this.name = name
    }

    fullName = () => console.log(this.name)
 }

class child extends Parent {
    name = "Bharath Simha Reddy"
    age = 20;

    get_age = () => {
        console.log(age)
    }
 }
 const k = new Parent("Bharath Gangireddy");
 const c = new child()
 c.fullName();