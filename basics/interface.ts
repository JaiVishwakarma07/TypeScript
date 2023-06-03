//kind of loose kind of class
//for example os is interface for the hardware is just like that while
//using members of interface we dont know how it internally works how its written
//but only know kow to use it

interface User {
    readonly dbid: number
    email: string,
    userId: number,
    googleid?: string,
    //fns can be made inside interface
    // start : ()=>string
    start(): string,
    getCoupon(cname: string): number
}

//we can write the interface again this is reopening of interface .. also type cannot be changed
interface User {
    gitToken: string
}

//inheritance of interface
interface Admin extends User {
    role?: "admin" | "ta" | "learner"
}

const jai: User = {
    dbid: 12, email: "jai", userId: 12,
    start: () => {
        return "started"
    },
    getCoupon: (name: "jai") => {
        return 1;
    },
    gitToken: "124"
}






