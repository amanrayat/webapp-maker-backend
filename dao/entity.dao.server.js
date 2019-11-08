const entityModel = require('../model/entity.model.server');

createEntity = (entity) => entityModel.findById(entity.id).then(
    result => {
        if(!result){
            return entityModel.create(entity)
        }
        return null
    }
);

findAllEntities = () => entityModel.find();
findEntityById = (id) => entityModel.find({_id:id});
updateEntityById = (id, entity) => entityModel.update({_id: id}, {$set: entity});
deleteEntityById = id => entityModel.remove({_id: id});



module.exports = {
    createEntity,
    findAllEntities,
    findEntityById,
    updateEntityById,
    deleteEntityById
};