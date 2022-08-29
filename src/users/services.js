var userModel = require('../models/users')
var bcrypt = require('bcrypt')

class UserService{
    constructor(){
    }
    async getUser(){
        try{
            const allUser = await userModel.findAll()
            return allUser
        }
        catch(e){
            this.logger.error(e);
            throw e;
        }
    }
    async addNewUser(user){
        if (
            user.firstname == null ||
            user.lastname == null ||
            user.email == null ||
            user.password == null
        ) {
           throw new Error('One of field is emtpy. Check again!!!!')
        }
        // try{
            console.log(user)
            const hashedPassword = bcrypt.hashSync(user.password, 10);
            const newUser = await userModel.create({firstname: user.firstname, lastname: user.lastname, email: user.email, password: hashedPassword})
            return newUser
        }
        // catch (e){
        //     this.logger.error(e);
        //     throw e;
        // }
    // }
    async updateUser(user){
        if(
            user.email == null,
            user.password == null,
            user.newpassword == null
        ){
            throw new Error('One of the field is empty. Check again!!!')
        }
        try
        {   
            const checkemail = await userModel.findOne({where: {email: user.email}})
            if (checkemail == null){
                throw new Error('No user found or wrong password')
            }
            var result = bcrypt.compareSync(user.password, checkemail.password);
            if (result) {
                const updatedHashedPassword = bcrypt.hashSync(user.newpassword, 10);
                const updateUser =  userModel.update({ password: updatedHashedPassword }, { where: { email: user.email, password: user.password } });
                return updateUser;
            }
        }
        catch(e){
            this.logger.error(e);
            throw e;
        }
    }
    async deleteUser(user){
        if(
            user.email == null,
            user.password == null
        ){
            throw new Error('One of the field is empty. Check again!!!')
        }
        try{
            const checkemail = await userModel.findOne({where: {email: user.email}})
            const delUser = await userModel.destroy({where: {email: checkemail.email}})
            return delUser
        }
        catch(e){

        }
    }
}

module.exports = UserService