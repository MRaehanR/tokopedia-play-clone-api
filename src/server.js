import app from "./index.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port ${port}`);
});
