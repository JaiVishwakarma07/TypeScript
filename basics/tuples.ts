// const user: (string | number)[] = ["jai"]
//upper array can have any index eithr no. of string but tuple can define what type should come first
let user: [string, number, boolean]

user = ["jai", 112, true]
//not appicale
// user = [true,"jai",123]
const rgb: [number, number, number] = [255, 255, 255];
//not applicable
//  const rgb : [number ,number,number] = [255,255,255,07];

type User = [number, string]

const newUser: User = [122, "jai"]

//problem is these value can be changed
newUser[1] = "ihaoi"
