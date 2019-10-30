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


module.exports = {
    createEntity,
    findAllEntities
};