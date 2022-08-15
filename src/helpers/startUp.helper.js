const User = require('../models/user.model')
const encrypt = require('./bcrypt.helper')

const startUp = {}

startUp.createAdmin = async () => {
    try {
        const user = await User.findOne({ email: "admin.webstore@store.com" })
        if (!user) {
            await User.create({
                completeName: "Administrador WebStore",
                email: "admin.webstore@store.com",
                password: await encrypt.encryptPassword("4dM1n-W3b$t0re"),
                imageUrl: "https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png",
                role: 'admin'
            });
            console.log('Admin User Created!')
        }
    } catch (error) {
        throw error
    }
}

module.exports = startUp