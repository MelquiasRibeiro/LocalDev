const Dev = require('../models/Dev');
const parseArryAsString = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response){
        const{latitude, longitude, techs}= request.query

        const techsArray= parseArryAsString(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray
            },
            location: {
                $near:{
                $geometry:{
                        type: 'point',
                        coordinates:[longitude,latitude],
                },
                $maxDistance: 10000,
            },
        },
        });

        return response.json({devs: []});

    }
}