// const User = {
//     name: "jai",
//     email: "jai@123",
//     isPaid: true
// }

// function createuser({ name: string, isPaid: boolean }) {

// }

// //this will only allow limited parameters which are defined 
// // createuser({ name: "jai", isPaid: false })

// //this will allow additional parameters to pass
// createuser(User)

// //returning objects
// function createCourse(): { name: string, price: number } {
//     return { name: "next", price: 0 }
// }

//type is the keyword in ts which is kind of structure in class
type User = {
    //readonly will lock the value and nobody will able to chnge it
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    //optional
    creditcardDetails?: number
}
//type is useful when we have to use same type of variable in numerious functions

// function createuser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }
// createuser({ name: "", email: "", isActive: true })

let myUser: User = {
    _id: "1234",
    name: "j",
    email: "jhi",
    isActive: false
}

myUser.name = "h";
//not applicable
// myUser._id = "1"

//inheriting properties of the other card

type cardnumber = {
    cardnum: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardDate & cardnumber & {
    cvv: string
}

export { }