import { k } from "./kaboomLoader.js";
import { room1 } from "./scenes/room1.js";
import { room2 } from "./scenes/room2.js";
import { setBackgroundColor } from "./scenes/roomUtils.js";

async function main() {
    const room1Data = await (await fetch("./maps/room1.json")).json();
    const room2Data = await (await fetch("./maps/room2.json")).json();
    k.scene("room1", (previousData) => {
        room1(k, room1Data);
    });
    k.scene("room2", (previousData) => {
        room2();
    });
}

main();

k.scene("intro", (previousData) => {
    setBackgroundColor(k, "#582eff")
    k.onKeyPress("enter", () => {
        k.go("room1");
    });
    k.add([
        k.pos(134, 130),
        k.text("Hello World, Press [ Enter ] if you dare!", {
            size: 98,
            width: 920,
            font: "glyphmesss",
        }),
    ]),
    k.add([
        k.pos(134, 630),
        k.text("Made by Atharv", {
            size: 58,
            width: 920,
            font: "glyphmesss",
        }),
    ])
    k.add([
        k.sprite("logo"),
        k.anchor("center"),
        k.scale(4),
        k.pos(800, 500)
      ])
      k.add([
        k.rect(20, 740),
        k.color(255,255,255),
        k.fixed(),
    ]);
    k.add([
        k.rect(2040, 20),
        k.color(255,255,255),
        k.fixed(),
    ]);
    k.add([
        k.pos(0, 700),
        k.rect(2040, 20),
        k.color(255,255,255),
        k.fixed(),
    ]);
    k.add([
        k.pos(1260, 0),
        k.rect(20, 740),
        k.color(255,255,255),
        k.fixed(),
    ]);
});
k.go("intro")