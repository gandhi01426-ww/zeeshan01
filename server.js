import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function resolvePath(url) {
  const requested = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const filePath = requested === "/" ? "index.html" : requested.replace(/^\/+/, "");
  return normalize(join(root, filePath));
}

createServer(async (req, res) => {
  try {
    let filePath = resolvePath(req.url || "/");
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    let body;
    try {
      body = await readFile(filePath);
    } catch {
      filePath = join(root, "index.html");
      body = await readFile(filePath);
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": filePath.includes("\\public\\images\\") ? "public, max-age=31536000" : "no-store"
    });
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(error instanceof Error ? error.message : "Server error");
  }
}).listen(port, () => {
  console.log(`Zeeshan Restaurant site running at http://localhost:${port}`);
});
