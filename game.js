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
let moveLeftBindings = ['left', 'a'];
let moveRightBindings = ['right', 'd'];
let icons = [
    {
        'name': 'coin',
        'link': 'wbKxhcd.png',
        'mapValue': '$',
        'config': () => { return [sprite('coin'), 'coin'] }
    },
    {
        'name': 'block',
        'link': 'M6rwarW.png',
        'mapValue': '=',
        'config': () => { return [sprite('block'), 'coin'] }
    },
    {
        'name': 'mario',
        'link': 'Wb1qfhK.png',
        // 'mapValue': '=',
        // 'config': () => { return [sprite('block'), 'coin'] }
    },
    {
        // loadSprite('surprise', 'gesQ1KP.png')
        // '%': [sprite('surprise'), solid(), 'coin-surprise'],
        'name': 'surprise',
        'link': 'gesQ1KP.png',
        'mapValue': '%',
        'config': () => { return [sprite('surprise'), solid(), 'coin-surprise'] }
    },
    {
        // loadSprite('surprise', 'gesQ1KP.png')
        // '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        'name': 'surprise',
        'link': 'gesQ1KP.png',
        'mapValue': '*',
        'config': () => { return [sprite('surprise'), solid(), 'mushroom-surprise'] }
    },
    // {
    //     // loadSprite('evil-shroom', 'KPO3fR9.png')
    //     // '^': [sprite('evil-shroom'), solid(), 'dangerous'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('brick', 'pogC9x5.png')
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('mushroom', '0wMd92p.png')
    //     // '#': [sprite('mushroom'), solid(), 'mushroom', body()],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('unboxed', 'bdrLpi6.png')
    //     // '}': [sprite('unboxed'), solid()],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('pipe-top-left', 'ReTPiWY.png')
    //     // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('pipe-top-right', 'hj2GK4n.png')
    //     // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('pipe-bottom-left', 'c1cYSbt.png')
    //     // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('pipe-bottom-right', 'nqQ79eI.png')
    //     // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('blue-block', 'fVscIbn.png')
    //     // '!': [sprite('blue-block'), solid(), scale(0.5)],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('blue-brick', '3e5YRQd.png')
    //     // '£': [sprite('blue-brick'), solid(), scale(0.5)],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('blue-steel', 'gqVoI2b.png')
    //     // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('blue-evil-shroom', 'SvV4ueD.png')
    //     // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('blue-surprise', 'RMqCc1G.png')
    //     // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
];


function loadIcons() {
    loadRoot('https://i.imgur.com/');

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        loadSprite(icon.name, icon.link);
    }
}

function getMaps() {
    return [
        [
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '     %   =*=%=                        ',
            '                                      ',
            '                            -+        ',
            '                    ^   ^   ()        ',
            '==============================   =====',
        ],
        [
            '£                                       £',
            '£                                       £',
            '£                                       £',
            '£                                       £',
            '£                                       £',
            '£        @@@@@@              x x        £',
            '£                          x x x        £',
            '£                        x x x x  x   -+£',
            '£               z   z  x x x x x  x   ()£',
            '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        ]
    ];
}

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

    /*
    return {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        // '%': [sprite('surprise'), solid(), 'coin-surprise'],
        // '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        // '}': [sprite('unboxed'), solid()],
        // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        // '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        // '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        // '!': [sprite('blue-block'), solid(), scale(0.5)],
        // '£': [sprite('blue-brick'), solid(), scale(0.5)],
        // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
    };
    */
}

function getPlayer() {
    return [
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        origin('bot')
    ];
}

function getPlayerBindings(player) {
    // keyDown('left', () => {
    //     //player.move(-, 0)
    // });

    // keyDown('right', () => {
    //     player.move(, 0)
    // });

    // player.action(() => {
    //     if (player.grounded()) {
    //         // isJumping = false
    //     }
    // });

    // keyPress('space', () => {
    //     if (player.grounded()) {
    //         isJumping = true
    //         // player.jump(CURRENT_JUMP_FORCE)
    //     }
    // });
}

loadIcons();
scene("game", (/*{ level, score }*/) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [
        [
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '     %   =*=%=                        ',
            '                                      ',
            '                            -+        ',
            '                    ^   ^   ()        ',
            '==============================   =====',
        ],
        // [
        //     '£                                       £',
        //     '£                                       £',
        //     '£                                       £',
        //     '£                                       £',
        //     '£                                       £',
        //     '£        @@@@@@              x x        £',
        //     '£                          x x x        £',
        //     '£                        x x x x  x   -+£',
        //     '£               z   z  x x x x x  x   ()£',
        //     '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        // ]
    ];

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        // '}': [sprite('unboxed'), solid()],
        // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        // '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        // '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        // '!': [sprite('blue-block'), solid(), scale(0.5)],
        // '£': [sprite('blue-brick'), solid(), scale(0.5)],
        // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
    };

    const gameLevel = addLevel(maps[0], levelCfg);
    //const gameLevel = addLevel(maps[level], levelCfg);

    const player = add(getPlayer());
    getPlayerBindings(player);
});

start("game"/*, { level: 0, score: 0 }*/);