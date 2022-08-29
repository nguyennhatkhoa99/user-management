var validator = require('validate.js')

var constraint = {
    username: {
        presence: true,
        exclusion: {
          within: ["nicklas"],
          message: "'%{value}' is not allowed"
        }
      },
    password: {
        presence: true,
        length: {
          minimum: 6,
          message: "must be at least 6 characters"
        }
      }
}
class validateUser{
    async checkValidUser(req){
        result = validator(req, constraint)
        console.log(result)
        return result
    }
}
module.export = validateUser