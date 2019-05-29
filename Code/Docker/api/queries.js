const finishes2 = require('./finishes2.json');
const finishes3 = require('./finishes3.json');

const getFinishes = (req, res) => {
    var {type, score} = req.params;
    console.log(req.params);

    if(type == 3){
        res.json(finishes3[score]);
    }
    else if(type == 2){
        res.json(finishes2[score]);
    }
}

module.exports = {

    getFinishes
}