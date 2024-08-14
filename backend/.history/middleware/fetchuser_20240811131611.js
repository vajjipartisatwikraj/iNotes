var jwt = require('jsonwebtoken'); //importing  JASON WEBTOKEN
const JWT_SECRET = '1234567890';


const fetchuser = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Access denied"})
    }
    const string = jwt.verify(token, JWT_SECRET )
    next()
}

exports = fetchuser;
