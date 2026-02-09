#!/usr/bin/env node

// >> $ curl -sSL https://example.com/ | ./index.js

import open from "open";
import { stdin, argv } from "zx";
import express from "express";

if (process.stdin.isTTY) {
	process.exit(1);
}

const html = await stdin();
if (!html) {
	process.exit(1);
}

const port = argv.port || 3000;

const app = express();
const server = app.listen(port, async () => {
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
