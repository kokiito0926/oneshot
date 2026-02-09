#!/usr/bin/env node

// >> $ curl -sSL https://example.com/ | ./index.js

import open from "open";
import { stdin } from "zx";
import express from "express";

if (process.stdin.isTTY) {
	process.exit(1);
}

const html = await stdin();
if (!html) {
	process.exit(1);
}

const app = express();
const server = app.listen(3000, async () => {
	const port = server.address().port;
	const url = `http://localhost:${port}`;

	app.get("/", (req, res) => {
		res.on("finish", () => {
			server.close(() => {
				process.exit(0);
			});
		});

		res.send(html);
	});

	await open(url);
});
