const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/dogradar", (req, res) => {
  res.send(dogs);
});

let dogs = [
  {
    id: 0,
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Max"
  }
  // {
  //   id: 1,
  //   image:
  //     "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   name: "Ruffle"
  // },
  // {
  //   id: 2,
  //   image:
  //     "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   name: "Flash"
  // }
];
