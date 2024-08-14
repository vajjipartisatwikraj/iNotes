var jwt = require("jsonwebtoken"); // importing JSON Web Token
const JWT_SECRET = "1234567890";

const fetchuser = (req, res, next) => {
  // Get the token from the header
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Access denied" }); // Ensure to return here
  }

  try {
    // Verify the token
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // Attach the user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).send({ error: "Access denied" });
  }
};

module.exports = fetchuser;
