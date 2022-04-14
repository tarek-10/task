const Joi = require('joi');


module.exports ={

    createUser:{
        body:Joi.object().required().keys({
            first_name:Joi.string().required(),
            last_name:Joi.string().required(),
            country_code:Joi.string().required(),
            phone_number:Joi.number().required(),
            gender:Joi.string().required(),
            birthdate:Joi.string().required(),
            email:Joi.string().required(),
            password:Joi.string().required()
        }),
        file:Joi.object().required()
    },
    siginUser:{
        password:Joi.string().required(),
        phone_number:Joi.number().required()
    }
}