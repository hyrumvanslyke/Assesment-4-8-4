const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, deleteToDoListItem } = require('./controller')
const { getFortune } = require('./controller')
const { getToDoList } = require('./controller')
const { postToDo } = require('./controller')
const { updateListItem } = require('./controller')
const { deleteToDoItem } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/toDoList", getToDoList);
app.post("/api/toDo", postToDo);
app.put("/api/toDoList/:id", updateListItem);
app.delete("/api/toDoList/:id", deleteToDoListItem);

app.listen(4000, () => console.log("Server running on 4000"));
