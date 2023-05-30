const express = require("express");
const cors = require("cors");
const { connection } = require("./connection/db");
const { userRouter } = require("./routes/user.routes");
const { todoRouter } = require("./routes/todo.route");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/user",userRouter)
app.use("/todo",todoRouter)

// Start the server
const port = process.env.PORT || 4800;
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
