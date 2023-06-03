//classes
class User {
    email: string;
    name: string
    city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
    //getter
    get getemail(): string {
        return `apple${this.email}`
    }
    //setter it do not hve return type
    set setemail(email: string) {
        this.email = email
    }
}


const jai = new User("habsc", "jai")  