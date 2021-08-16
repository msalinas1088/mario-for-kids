const spriteRoot = 'https://i.imgur.com/';
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
    //     // loadSprite('surprise', 'gesQ1KP.png')
    //     // '%': [sprite('surprise'), solid(), 'coin-surprise'],
    //     'name': 'block',
    //     'link': 'M6rwarW.png',
    //     'mapValue': '=',
    //     'config': () => { return [sprite('block'), 'coin'] }
    // },
    // {
    //     // loadSprite('surprise', 'gesQ1KP.png')
    //     // '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
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
    loadRoot(spriteRoot);

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        loadSprite(icon.name, icon.link);
    }
}