const fieldDao = require('../dao/field.dao.server');

module.exports = app => {

    const createFieldForEntity = (req, res) => {
        fieldDao.createFieldForEntity(req.params['entityId'],req.body).then(
            result => {
                res.send(result)
            });
    };

    const getAllFieldsOfEntity = (req, res) => {
        fieldDao.findAllFieldsForEntity(req.params['entityId']).then(
            result => {
                res.send(result)
            }
        )
    };

    const getFieldById = (req, res) => {
        fieldDao.findFieldById(req.params['fieldId']).then(
            result => {
                res.send(result);
            }
        )
    };

    const updateFieldById = (req, res) => {
        fieldDao.updateFieldById(req.params['fieldId'],req.body).then(
            result => {
                res.send(result);
            }
        )
    };

    const deleteFieldById = (req, res) => {
        fieldDao.deleteFieldById(req.params['fieldId']).then(
            result => {
                res.send(result);
            }
        )
    };

    app.post('/api/user/:userId/project/:projectId/entity/:entityId/field', createFieldForEntity);
    app.get('/api/user/:userId/project/:projectId/entity/:entityId/field', getAllFieldsOfEntity);
    app.get('/api/user/:userId/project/:projectId/entity/:entityId/field/:fieldId', getFieldById);
    app.put('/api/user/:userId/project/:projectId/entity/:entityId/field/:fieldId', updateFieldById);
    app.delete('/api/user/:userId/project/:projectId/entity/:entityId/field/:fieldId', deleteFieldById);
};