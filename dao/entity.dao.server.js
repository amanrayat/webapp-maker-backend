const entityModel = require('../model/entity.model.server');

createEntityForProject = (projectId, entity) => entityModel.findById(entity.id).then(
    result => {
        if(!result){
            return entityModel.create({_id : entity.id, projectId : projectId, name : entity.name, label : entity.label})
        }
        return null
    }
);

findAllEntitiesForProject = projectId => entityModel.find({projectId : projectId});
findEntityById = (id) => entityModel.find({$and: [{_id: id}]});
deleteEntityById = (id) => entityModel.remove({_id: id});
updateEntityById = (id, entity) => entityModel.update({_id: id}, {$set: entity});



module.exports = {
    createEntityForProject,
    findAllEntitiesForProject,
    findEntityById,
    updateEntityById,
    deleteEntityById
};