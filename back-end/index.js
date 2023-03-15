const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors({origin: 'http://localhost:1200'}))
app.listen(8080);

app.get(("/api/v1/main/getStudentById/:id"), (req, res) => {
    res.status(200).json(
        {
            id: req.params.id,
            name: "Jack",
            age: 23,
            sex: 1
        }
    );
})
