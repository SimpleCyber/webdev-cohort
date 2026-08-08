// lets create the auth middleware

const jwt = require("jsonwebtoken")
const JWT_SECRET = "123467890"

function auth (req, res, next){
    const token =  req.headers.authorization?.split(" ")[1];



    if (!token) {
        return res.status(401).json({
            message: "Token missing"
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        req.userId = decodedData.userId;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET
}