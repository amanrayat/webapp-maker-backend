const userDao = require('../dao/user.dao.server');

module.exports = app => {

    const createUser = (req, res) => {
        return userDao.createUser(req.body).then(result => {
            res.send(req.body)
        });
    };

    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const register = (req, res) => {
        return userDao.findDuplicateUser(req.body.email, req.body.username, req.body.phoneNo).then(result => {
            if (result && result.length > 0) return null;
            userDao.createUser(req.body);
            return 'Success';
        }).then(user => {
            if (user) {
                req.session['currentUser'] = user;
                res.send(user);
            } else {
                res.send(null);
            }
        })
    };

    const profile = (req, res) => {
        console.log("the session profile is " , req.session['currentUser']);
        res.send(req.session['currentUser']);
    };

    const login = (req, res) => {
        return userDao.findUserByCredentials(req.body.email, req.body.password).then(result => {
            console.log('the user is ', result);
            if (result && result.length > 0) {
                req.session['currentUser'] = result;
                console.log("the session is " , req.session['currentUser']);
                res.send(result);
            } else {
                res.send(null);
            }
        })
    };

    const getUser = (req, res) => {
        if(req.query.name){
            return userDao.findUserByUsername(req.query.name).then(result => {
                res.send(result)
            })
        }
        else{
            return userDao.findAllUsers().then(result => {
                res.send(result)
            })
        }

    };

    const deleteUserById = (req, res) =>
        userDao.deleteUserById(req.params['userId']).then(result => {
            res.send(result)
        });

    const updateUserById = (req, res) => {
        return userDao.updateUserById(req.params['userId'], req.body).then(result => {
            userDao.findUserById(req.params['userId']).then(res_1 => {
                req.session['currentUser'] = res_1;
                res.send(result)
            });
        })
    };

    const getUserById =(req , res ) =>{
        return userDao.findUserById(req.params['userId']).then(result=>{
            res.send(result)
        })
    };

    app.post('/api/register', register);
    app.get('/api/profile', profile);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.get('/api/user', getUser);
    app.get('/api/user/:userId', getUserById);
    app.delete('/api/user/:userId', deleteUserById);
    app.put('/api/user/:userId', updateUserById);
    app.post('/api/user', createUser);
};
