const entityDao = require('../dao/entity.dao.server');

module.exports = app => {
    createEntity = (req, res) =>{
        entityDao.createEntity(req.body).then(
            result => {
                res.send(result)
            }
        )
    };

    getAllEntities = (req, res) =>{
        entityDao.findAllEntities().then(
            result => {
                res.send(result)
            }
        )
    };

    getEntityById = (req, res) => {
        entityDao.findEntityById(req.params['entityId']).then(
            result => {
                res.send(result);
            }
        )
    };

    updateEntityById = (req, res) => {
        entityDao.updateEntityById(req.params['entityId'],req.body).then(
            result => {
                res.send(result);
            }
        )
    };

    deleteEntityById = (req, res) => {
        entityDao.deleteEntityById(req.params['entityId']).then(
            result => {
                res.send(result);
            }
        )
    };

    app.post('/api/entity', createEntity);
    app.get('/api/entity', getAllEntities);
    app.get('/api/entity/:entityId', getEntityById);
    app.put('/api/entity/:entityId', updateEntityById);
    app.delete('/api/entity/:entityId', deleteEntityById);
};