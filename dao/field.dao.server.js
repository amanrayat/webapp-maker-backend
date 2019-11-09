const fieldModel = require('../model/field.model.server');

createFieldForEntity = (entityId, field) => fieldModel.findById(field.id).then(
    result => {
        if(!result){
            return fieldModel.create({
                _id : field.id,
                entityId : entityId,
                name : field.name,
                label : field.label,
                type : field.type})
        }
        return null
    }
);

findAllFieldsForEntity = entityId => fieldModel.find({entityId : entityId});
findFieldById = (id) => fieldModel.find({$and: [{_id: id}]});
deleteFieldById = (id) => fieldModel.remove({_id: id});
updateFieldById = (id, field) => fieldModel.update({_id: id}, {$set: field});



module.exports = {
    createFieldForEntity,
    findAllFieldsForEntity,
    findFieldById,
    updateFieldById,
    deleteFieldById
};