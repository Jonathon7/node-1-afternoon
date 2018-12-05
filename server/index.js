const express = require("express");
const { json } = require("body-parser");
const controller = require("./controllers/messages_controller");

const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages/", controller.read);
app.put("/api/messages/:id", controller.update);
app.post("/api/messages/", controller.create);
app.delete("/api/messages/:id", controller.deleted);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
