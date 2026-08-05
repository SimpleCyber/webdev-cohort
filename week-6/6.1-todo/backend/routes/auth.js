import jwt from "jsonwebtoken";
const JWT_SECRET = "#Satyam123";

const users = [];

export async function logger(req, res, next) {
    console.log(req.method);
    next();
}

export async function verifyUser(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            message: "Token missing",
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            let foundUser = null;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === decodedData.username) {
                    foundUser = users[i];
                }
            }

            res.json({
                username: foundUser.username,
            });
        }
    } catch (err) {
        res.status(401).json({
            message: "Token is invalid",
        });
        return;
    }

    next();
}

// signup
export async function signup(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    // Insted of inline we should have the db
    users.push({
        username: username,
        password: password,
    });

    // we should check the user with this name is already exists

    res.json({
        message: "You are signed in",
    });
}

// signin
export async function signin(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Credential are incorrect",
        });
        return;
    } else {
        // now user is present then create the jwt token
        const token = jwt.sign(
            {
                username,
            },
            JWT_SECRET,
        );
        res.json({
            token: token,
        });
    }
}

// me
export async function me(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            message: "Token missing",
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            let foundUser = null;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === decodedData.username) {
                    foundUser = users[i];
                }
            }

            res.json({
                username: foundUser.username,
                password: foundUser.password,
            });
        }
    } catch (err) {
        res.status(401).json({
            message: "Token is invalid",
        });
        return;
    }
}
