import { Application, Loader, Sprite, Texture } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

// Load assets
loader
  .add("img1", "./assets/1.png")
  .add("img2", "./assets/2.png")
  .load((l) => {
    // Convert to texture
    const texture = Texture.from("img1");
    const texture2 = Texture.from("img2");
    console.log(texture, texture2);

    // Convert to Sprites
    const sprite = new Sprite(texture);
    console.log(sprite);

    sprite.position.set(100, 100);
    sprite.width = 100;
    sprite.height = 100;

    app.stage.addChild(sprite);

    const sprite2 = new Sprite(texture2);
    sprite2.position.set(200, 200);
    sprite2.width = 100;
    sprite2.height = 100;

    app.stage.addChild(sprite2);
  });

// const graphics = new Graphics();
// graphics.beginFill(0xffffff); // 1st step
// graphics.drawRect(20, 50, 100, 80); //2nd step
// graphics.endFill(); // 3rd step

// // Another Graphic
// const graphic2 = new Graphics();
// graphic2.beginFill(0xff0000);
// graphic2.drawCircle(50, 100, 30);
// graphic2.endFill();

// app.stage.addChild(graphics);
// app.stage.addChild(graphic2);
