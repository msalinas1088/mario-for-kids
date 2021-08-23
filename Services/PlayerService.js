let moveLeftBindings = ['left', 'a'];
let moveRightBindings = ['right', 'd'];
let jumpBindings = ['up', 'space'];

function getPlayerBindings(player) {

    for (var i = 0; i < moveLeftBindings.length; i++) {
        var binding = moveLeftBindings[i];
        keyDown(binding, () => {
            player.move(-MOVE_SPEED, 0)
        });
    }

    for (var i = 0; i < moveRightBindings.length; i++) {
        var binding = moveRightBindings[i];
        keyDown(binding, () => {
            player.move(MOVE_SPEED, 0)
        });
    }

    for (var i = 0; i < jumpBindings.length; i++) {
        var binding = jumpBindings[i];
        keyPress(binding, () => {
            if (player.grounded()) {
                isJumping = true
                player.jump(CURRENT_JUMP_FORCE)
            }
        });
    }

    player.action(() => {
        if (player.grounded()) {
            isJumping = false
        }
    });
}