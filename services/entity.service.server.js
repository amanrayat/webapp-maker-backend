const entityDao = require('../dao/entity.dao.server');

module.exports = app => {
    createEntity = (req, res) =>{
        entityDao.createEntity(req.body).then(
            result =>{
                res.send(result)
            }
        )
    };

    getAllEntities = (req, res) =>{
        entityDao.findAllEntities().then(
            result =>{
                res.send(result)
            }
        )
    };

    app.post('/api/entity', createEntity);
    app.get('/api/entity', getAllEntities);
};