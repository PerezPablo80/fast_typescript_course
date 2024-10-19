import express, { Express, Request, Response } from "express";
const app: Express = express();
app.use(express.json());
app.get("/", (req: any, res: any) => {
	return res.send("hello world");
});

app.post("api/data", (req: any, res: any) => {
	console.log(req.body);
	return res.sendStatus(200);
});

app.listen(3000, () => {
	console.log("App listening to http://localhost:3000");
});
