const projectModel = require('../model/project.model.server');

createProjectForUser = (userId, project) => projectModel.findById(project.id).then(
    result => {
        if(!result){
            return projectModel.create({_id : project.id, userId : userId, projectName : project.projectName})
        }
        return null
    }
);

findAllProjectsForUser = userId => projectModel.find({userId : userId}).populate('userId').exec();
findProjectById = (id) => projectModel.find({$and: [{_id: id}]});
deleteProjectById = (id) => projectModel.remove({_id: id});
updateProjectById = (id, project) => projectModel.update({_id: id}, {$set: project});

module.exports = {
    createProjectForUser,
    findAllProjectsForUser,
    findProjectById,
    deleteProjectById,
    updateProjectById
};
