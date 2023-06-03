//this function nwill only return number 
function addtwo(num: number): number {
    return num + 2
}
addtwo(5)

let signin = (name: string, email: string, phone: number) => { }
//default value
let login = (name: string, email: string, paid: boolean = false) => { }

const hello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman"]


heros.map(hero => {
    return `hero is here ${hero}`
})
//or
heros.map((hero): string => {
    return `hero is here ${hero}`
})




export { }