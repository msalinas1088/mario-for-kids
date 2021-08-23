kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

const MOVE_SPEED = 120;
const JUMP_FORCE = 360;
const BIG_JUMP_FORCE = 550;
const FALL_DEATH = 400;
const ENEMY_SPEED = 20;
const SPRITE_WIDTH = 20;
const SPRITE_HEIGHT = 20;
let CURRENT_JUMP_FORCE = JUMP_FORCE;
let isJumping = true;

const maps = getMaps();

function getConfig() {
    var config = {
        width: 20,
        height: 20
    };

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        config[icon.mapValue] = icon.config();
    }

    return config;
}

function getPlayer() {
    return [
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        origin('bot')
    ];
}

loadIcons();
scene("game", (/*{ level, score }*/) => {
    layers(['bg', 'obj', 'ui'], 'obj')


    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        '!': [sprite('blue-block'), solid(), scale(0.5)],
        '£': [sprite('blue-brick'), solid(), scale(0.5)],
        'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        'x': [sprite('blue-steel'), solid(), scale(0.5)],
    };

    const gameLevel = addLevel(maps[0], levelCfg);
    //const gameLevel = addLevel(maps[level], levelCfg);

    const player = add(getPlayer());
    getPlayerBindings(player);
});

start("game"/*, { level: 0, score: 0 }*/);