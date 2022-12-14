function setup() {
    createCanvas(400, 400);
}

function draw() {
    strokeWeight(5);
    x = [
      0,
      0,
      0,
      0,
      75,
      0,
      0,
      0,
      0,
      25,
      375,
      200,
      350,
      100,
      50,
      0,
      100,
      375,
      0,
      200,
      75,
      0,
      100,
      350,
      350,
      100,
    ];
    y = [
      0,
      0,
      0,
      150,
      150,
      175,
      300,
      385,
      300,
      300,
      0,
      250,
      0,
      385,
      25,
      300,
      325,
      175,
      325,
      25,
      175,
      385,
      150,
      0,
      175,
      300,
    ];
    w = [
      400,
      200,
      400,
      200,
      25,
      25,
      400,
      400,
      25,
      75,
      25,
      200,
      25,
      275,
      25,
      25,
      275,
      25,
      25,
      150,
      25,
      25,
      100,
      25,
      25,
      275,
    ];
    h = [
      400,
      300,
      25,
      25,
      175,
      175,
      25,
      25,
      100,
      100,
      400,
      50,
      250,
      15,
      125,
      25,
      60,
      75,
      60,
      50,
      125,
      20,
      25,
      25,
      75,
      25,
    ];
    colors = [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "blue",
      "blue",
      "blue",
      "blue",
      "yellow",
      "yellow",
      "yellow",
      "red",
      "red",
      "red",
      "red",
      "red",
    ];
  
    for (let i = 0; i < x.length; i++) {
      fill(colors[i]);
      rect(x[i], y[i], w[i], h[i]);
    }
}