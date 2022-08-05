const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader){
        //I'm spliting and grabing the first index of authHeader because I sent it in the header as jwt TOKEN, so I just need to grab the TOKEN
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err) return res.status(403).json('token is not valid')
            req.user = user
            next()
        })
    }else {
        return res.status(401).json('you are not authenticated')
    }
}

const verifyTokenAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else {
            return res.status(403).json('you are not allowed to do that')
        }
    })
}

const verifyTokenAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json('you are not an admin.')
        }
    })
}


module.exports ={ verifyToken, verifyTokenAuthorization, verifyTokenAdmin }