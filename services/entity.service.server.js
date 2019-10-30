const entityDao = require('../dao/entity.dao.server');

module.exports = app => {
    createEntity = (req, res) =>{
        entityDao.createEntity(req.body).then(
            result =>{
                res.send(result)
            }
        )
    };

    app.post('/api/entity', createEntity);
};