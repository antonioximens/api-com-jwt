// gerenciar usaurios 

let users = [
    { id: '1', name: 'John Doe', email: 'johndoe@gmail.com', password: '123456', role: 'admin'}
]

// crud
module.exports = {
    // retorna todos os usuarios
    findAll: () => users,

    // retorna um usuario pelo id
    findById: (id) => users.find(user => user.id === id),

    // retorna um usuario pelo email
    findByEmail: (email) => users.find(user => user.email === email),

    // cria um usuario
    registerUser: (name, email, password) => {
        const userIsAlready = users.find(user => user.email === email)

        if(userIsAlready) return null

        const newUser = {
            id: Math.floor(Math.random() * 999999).toString(),
            name, 
            email,
            password,
            role: 'standard'
        }

        users.push(newUser)
        return newUser
    },

    createUser: (name, email, password) => {
        const userIsAlready = users.find(user => user.email === email)

        if(userIsAlready) return null

        const newUser = {
            id: Math.floor(Math.random() * 999999).toString(),
            name, 
            email,
            password,
            role
        }

        users.push(newUser)
        return newUser
    },
    
    deleteUser: (id) => {
        const userIndex = users.findIndex(user => user.id === id)

        if(userIndex === -1) return null

        const [userDelete] = users.splice(userIndex, 1)

        return userDelete
    }
}