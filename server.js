const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./dist"));

app.use('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server listening on port ${PORT}`);
});