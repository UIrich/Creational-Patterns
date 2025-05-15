class Admin {
    constructor(name) {
        this.name = name;
        this.role = 'admin';
    }
}

class Guest {
    constructor(name) {
        this.name = name;
        this.role = 'guest';
    }
}

class UserFactory {
    static createUser(type, name) {
        switch(type) {
            case 'admin':
                return new Admin(name);
            case 'guest':
                return new Guest(name);
            default :
                throw new Error('Tipo de usuário inválido');
        }
    }
}

module.exports = UserFactory;