// server/server.ts
import express from "express";
import * as Path2 from "node:path";

// server/routes/books.ts
import { Router } from "express";

// server/db/connection.ts
import knex from "knex";

// server/db/knexfile.js
import * as Path from "node:path";
import * as URL from "node:url";
var __filename = URL.fileURLToPath(import.meta.url);
var __dirname = Path.dirname(__filename);
var knexfile_default = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, "dev.sqlite3")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "/app/storage/prod.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  }
};

// server/db/connection.ts
var env = process.env.NODE_ENV || "development";
var connection = knex(knexfile_default[env]);
var connection_default = connection;

// server/db/index.ts
async function getAllBooks() {
  return connection_default("books").join("customers", "customers.id", "books.customer_id").select(
    "books.id as id",
    "customer_id as customerId",
    "title",
    "author",
    "is_available as isAvailable",
    "customers.name as customerName"
  );
}
async function checkOutBook(bookId, customerId) {
  return connection_default("books").where("id", bookId).update({ is_available: false, customer_id: customerId });
}

// server/routes/books.ts
var router = Router();
router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
router.patch("/:bookId", async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const customerId = req.body.customerId;
    console.log(customerId);
    await checkOutBook(Number(bookId), Number(customerId));
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
var books_default = router;

// server/server.ts
var server = express();
server.use(express.json());
server.use("/api/v1/books", books_default);
if (process.env.NODE_ENV === "production") {
  server.use(express.static(Path2.resolve("public")));
  server.use("/assets", express.static(Path2.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path2.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var PORT = process.env.PORT || 3e3;
server_default.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
