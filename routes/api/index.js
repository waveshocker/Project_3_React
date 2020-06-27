const router = require("express").Router();
const bookRoutes = require("./diner");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
