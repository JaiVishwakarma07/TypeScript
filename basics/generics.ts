// its like template in cpp
const score: Array<number> = []

function id1(val: boolean | number): boolean | number {
    return val
}

function id2(val: any): any {
    return val
}

//this one locks the value type
function id3<Type>(val: Type): Type {
    return val
}
//below is the same
function id4<T>(val: T): T {
    return val
}

//this uses default ds
id3(3)

//for custom ds
interface Bottle {
    brand: string,
    type: number
}
id4<Bottle>({
    brand: "Jia",
    type: 22
})

///arrow functions with generics and array as a parameter
const id5 = <T>(pro: T[]): T => {
    return pro[3]
}
