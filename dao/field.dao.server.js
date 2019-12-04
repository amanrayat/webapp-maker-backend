const fieldModel = require('../model/field.model.server');

getFieldForRelation = (relation) => {
  if(relation === 'OneToMany') {
      return 'ManyToOne';
  } else if(relation === 'ManyToOne') {
      return 'OneToMany'
  } else if(relation === 'ManyToMany') {
      return 'ManyToMany'
  }
  return 'OneToOne'
};

createFieldForEntity = (entityId, field) => fieldModel.findById(field.id).then(
    result => {
        if(!result){
            return newField =  fieldModel.create({
                _id : field.id,
                entityId : entityId,
                name : field.name,
                label : field.label,
                relation: field.relation || null ,
                relationEntity: field.relationEntity || null,
                relationField: field.relationField || null,
                type : field.type})
        }
        return null
    }
);

findAllFieldsForEntity = entityId => fieldModel.find({entityId : entityId});
findFieldById = (id) => fieldModel.find({$and: [{_id: id}]});
deleteFieldById = (id) => fieldModel.remove({_id: id});
updateFieldById = (entityId, id, field) => fieldModel.update({_id: id}, {$set: field}).then(result2 => {
    if(field.relation) {
        console.log(result2);
        fieldModel.findOneAndUpdate({_id: field.relationField}, {$set:{relation:getFieldForRelation(field.relation),relationEntity:entityId , relationField: id}}, {new: true}, (err, doc) => {
            console.log('the doc is', doc);
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });
    }
});



module.exports = {
    createFieldForEntity,
    findAllFieldsForEntity,
    findFieldById,
    updateFieldById,
    deleteFieldById
};
