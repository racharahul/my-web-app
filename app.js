const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Calculator</title>
        </head>
        <body>
            <h1>Calculator</h1>
            <form action="/calculate" method="post">
                <label for="num1">Number 1:</label>
                <input type="number" name="num1" id="num1" required><br><br>

                <label for="num2">Number 2:</label>
                <input type="number" name="num2" id="num2" required><br><br>

                <label for="operation">Operation:</label>
                <select name="operation" id="operation">
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="multiply">Multiply</option>
                    <option value="divide">Divide</option>
                </select><br><br>

                <button type="submit">Calculate</button>
            </form>
        </body>
        </html>
    `);
});

app.post("/calculate", (req, res) => {
  const { operation, num1, num2 } = req.body;
  let result;

  switch (operation) {
    case "add":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "subtract":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "divide":
      if (parseFloat(num2) === 0) {
        return res.status(400).send("Cannot divide by zero.");
      }
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return res.status(400).send("Invalid operation.");
  }

  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Calculator Result</title>
        </head>
        <body>
            <h1>Result: ${result}</h1>
            <a href="/">Back to Calculator</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
});
