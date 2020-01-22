// Set up server 💻
const server = require("./api/server");

// Enable .env 💬
require("dotenv").config();

// Made port dynamic for deployment 🚀
const port = process.env.PORT;

// Let dev know server is listening 👂
server.listen(port, () => {
  console.log(`\n* Server running on http://localhost:${port} *\n`);
});
