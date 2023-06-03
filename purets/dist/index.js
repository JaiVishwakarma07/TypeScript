"use strict";
//classes
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    //getter
    get getemail() {
        return `apple${this.email}`;
    }
    //setter it do not hve return type
    set setemail(email) {
        this.email = email;
    }
}
const jai = new User("habsc", "jai");
