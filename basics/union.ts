//union is when we can combine 2 or more type of data
//instead of any use union

let score: number | string = 33

score = 44;
score = "jai"

type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let jai: User | Admin = { name: "jai", id: 1223 }

jai = { username: "jj", id: 894 }

function getId(id: number | string) {
    console.log(`DB id is : ${id}`)
}

getId(3)
getId("3")

//array

const data: (number | string)[] = [1, 2, 3, "u"]

//value specification
let seat: "aisle" | "middle" | "window"

seat = "aisle"
//not allowed
// seat = "crew"