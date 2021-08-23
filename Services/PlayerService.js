let moveLeftBindings = ['left', 'a'];
let moveRightBindings = ['right', 'd'];
let jumpBindings = ['up', 'space'];

function getPlayer() {
    return [
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        big(),
        origin('bot')
    ];
}

function getPlayerBindings() {

    for (var i = 0; i < moveLeftBindings.length; i++) {
        var binding = moveLeftBindings[i];
        keyDown(binding, () => {
            player.move(-MOVE_SPEED, 0);
        });
    }

    for (var i = 0; i < moveRightBindings.length; i++) {
        var binding = moveRightBindings[i];
        keyDown(binding, () => {
            player.move(MOVE_SPEED, 0);
        });
    }

    for (var i = 0; i < jumpBindings.length; i++) {
        var binding = jumpBindings[i];
        keyPress(binding, () => {
            if (player.grounded()) {
                isJumping = true;
                player.jump(CURRENT_JUMP_FORCE);
                console.log('jump');
            }
        });
    }

    player.action(() => {
        if (player.grounded() && isJumping) {
            isJumping = false;
            console.log('ground');
        }
    });

    // player.on("headbump", (obj) => {
    //     if (obj.is('coin-surprise')) {
    //         gameLevel.spawn('$', obj.gridPos.sub(0, 1));
    //         destroy(obj);
    //         gameLevel.spawn('}', obj.gridPos.sub(0, 0));
    //     }
    //     if (obj.is('mushroom-surprise')) {
    //         gameLevel.spawn('#', obj.gridPos.sub(0, 1));
    //         destroy(obj);
    //         gameLevel.spawn('}', obj.gridPos.sub(0, 0));
    //     }
    // });

    // player.collides('mushroom', (m) => {
    //     destroy(m);
    //     player.biggify(6);
    // });

    // player.collides('coin', (c) => {
    //     destroy(c);
    //     scoreLabel.value++;
    //     scoreLabel.text = scoreLabel.value;
    // });

    // player.collides('dangerous', (d) => {
    //     if (isJumping) {
    //         console.log('hit ' + isJumping);

    //         destroy(d);
    //     } else {
    //         console.log('dead ' + isJumping);
    //         go('lose', { score: scoreLabel.value });
    //     }
    // });

    // player.action(() => {
    //     camPos(player.pos);
    //     if (player.pos.y >= FALL_DEATH) {
    //         go('lose', { score: scoreLabel.value });
    //     }
    // });

    // player.collides('pipe', () => {
    //     keyPress('down', () => {
    //         go('game', {
    //             level: (level + 1) % maps.length,
    //             score: scoreLabel.value
    //         });
    //     })
    // });
}


function big() {
    let timer = 0
    let isBig = false
    return {
        update() {
            if (isBig) {
                CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
                timer -= dt()
                if (timer <= 0) {
                    this.smallify()
                }
            }
        },
        isBig() {
            return isBig
        },
        smallify() {
            this.scale = vec2(1)
            CURRENT_JUMP_FORCE = JUMP_FORCE
            timer = 0
            isBig = false
        },
        biggify(time) {
            this.scale = vec2(2)
            timer = time
            isBig = true
        }
    }
}