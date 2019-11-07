const userModel = require('../model/user.model.server');

createUser = (user) => userModel.create(user);
findAllUsers = () => userModel.find().populate('customer.cId').exec();
findUserById = (id) => userModel.find({$and: [{_id: id}]});
deleteUserById = (id) => userModel.remove({_id: id});
updateUserById = (uid, user) => userModel.update({_id: uid}, {$set: user});
findUserByUsername = username => userModel.find({username : username});
findDuplicateUser = (emailId, username, phoneNo) => userModel.find({
    $or: [
        {'email': emailId},
        {'username': username},
        {'phoneNo': phoneNo}]
});
findUserByCredentials = (emailId, password, role) => userModel.find({email: emailId, password: password, type: role});


module.exports = {
    findDuplicateUser,
    updateUserById,
    deleteUserById,
    createUser,
    findUserById,
    findUserByCredentials,
    findAllUsers,
    findUserByUsername
};
