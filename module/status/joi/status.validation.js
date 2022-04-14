const Joi = require('joi');

module.exports ={

    createStat:{
        body:Joi.object().required().keys({
            userId:Joi.string().required(),
            phone_number:Joi.number().required(),
            status:Joi.string().required()
        })
    }
}