kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

const MOVE_SPEED = 120;
const COIN_SPEED = 50;
const JUMP_FORCE = 400;
const BIG_JUMP_FORCE = 550;
const FALL_DEATH = 400;
const ENEMY_SPEED = 20;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;
let CURRENT_JUMP_FORCE = JUMP_FORCE;
let isJumping = true;
let level = 0;
let score = 0;

let scoreLabel;
let gameLevel;
let player;

loadIcons();

scene("game", ({ level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj');

    const levelCfg = getIconToMapConfig();
    scoreLabel = add([
        text(score),
        pos(30, 6),
        layer('ui'),
        {
            value: score,
        }
    ]);
    add([text(' World ' + parseInt(level + 1)), pos(40, 6)]);

    gameLevel = addLevel(maps[level], levelCfg);
    player = add(getPlayer());
    getPlayerBindings();

    // action('mushroom', (m) => {
    //     m.move(20, 0);
    // });

    // action('dangerous', (d) => {
    //     d.move(-ENEMY_SPEED, 0);
    // });

    // action('coin', (d) => {
    //     d.angle += dt();
    // });
});

scene('lose', ({ score }) => {
    // add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)]);
});

start("game", { level: level, score: score });