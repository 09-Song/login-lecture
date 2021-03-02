"use strict";

class UserStorage {
     static #users = {
        id: ["song", "kim1"],
        psword: ["123", "1234"],
        name: ["송", "김일"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }
}

module.exports = UserStorage;