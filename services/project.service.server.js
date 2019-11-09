const projectDao = require('../dao/project.dao.server');

module.exports = app => {

    const createProjectForUser = (req, res) => {
        projectDao.createProjectForUser(req.params['userId'],req.body).then(
            result => {
            res.send(result)
        });
    };

    const getAllProjectsOfUser = (req, res) => {
        projectDao.findAllProjectsForUser(req.params['userId']).then(
            result => {
                res.send(result)
            }
        )
    };

    const getProjectById = (req, res) => {
        projectDao.findProjectById(req.params['projectId']).then(
            result => {
                res.send(result);
            }
        )
    };

    const updateProjectById = (req, res) => {
        projectDao.updateProjectById(req.params['projectId'],req.body).then(
            result => {
                res.send(result);
            }
        )
    };

    const deleteProjectById = (req, res) => {
        projectDao.deleteProjectById(req.params['projectId']).then(
            result => {
                res.send(result);
            }
        )
    };


    app.post('/api/user/:userId/project', createProjectForUser);
    app.get('/api/user/:userId/project', getAllProjectsOfUser);
    app.get('/api/user/:userId/project/:projectId', getProjectById);
    app.put('/api/user/:userId/project/:projectId', updateProjectById);
    app.delete('/api/user/:userId/project/:projectId', deleteProjectById);
};
