const express = require("express");
const app = express();
app.use("/", (req, res) => {
	try {
		//write some logic here
		res.status(200).send("Server is running");
	} catch (e) {
		res.status(500).send(e);
	}
});

app.listen(5000, console.log("Server started on PORT 5000"));
