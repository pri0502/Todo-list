const express = require("express");
const cors = require("cors");
const User = require('./config');
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});
app.post("/create", async (req, res) => {
    const data = req.body;
    console.log("data of user", data);
    await User.add(data);
    res.send({ msg: "Task Added" });
});
app.post("/update", async (req, res) => {
    const id = req.body.id;
    console.log("Before updating", req.body);
    delete req.body.id;
    console.log("After updating", req.body);
    const data = req.body;
    await User.doc(id).update(data);
    res.send({ msg: "Task Updated" });
});
app.post("/delete", async (req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({ msg: "Deleted" });
});

app.listen(1000, () => console.log("Running at 3000"));

