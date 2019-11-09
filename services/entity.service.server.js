const entityDao = require('../dao/entity.dao.server');

module.exports = app => {

    const createEntityForProject = (req, res) => {
        entityDao.createEntityForProject(req.params['projectId'],req.body).then(
            result => {
                res.send(result)
            });
    };

    const getAllEntitiesOfProject = (req, res) => {
        entityDao.findAllEntitiesForProject(req.params['projectId']).then(
            result => {
                res.send(result)
            }
        )
    };

    const getEntityById = (req, res) => {
        entityDao.findEntityById(req.params['entityId']).then(
            result => {
                res.send(result);
            }
        )
    };

    const updateEntityById = (req, res) => {
        entityDao.updateEntityById(req.params['entityId'],req.body).then(
            result => {
                res.send(result);
            }
        )
    };

    const deleteEntityById = (req, res) => {
        entityDao.deleteEntityById(req.params['entityId']).then(
            result => {
                res.send(result);
            }
        )
    };

    app.post('/api/user/:userId/project/:projectId/entity', createEntityForProject);
    app.get('/api/user/:userId/project/:projectId/entity', getAllEntitiesOfProject);
    app.get('/api/user/:userId/project/:projectId/entity/:entityId', getEntityById);
    app.put('/api/user/:userId/project/:projectId/entity/:entityId', updateEntityById);
    app.delete('/api/user/:userId/project/:projectId/entity/:entityId', deleteEntityById);
};