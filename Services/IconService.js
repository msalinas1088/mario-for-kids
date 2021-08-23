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
    {
        // loadSprite('evil-shroom', 'KPO3fR9.png')
        // '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        'name': 'evil-shroom',
        'link': 'KPO3fR9.png',
        'mapValue': '^',
        'config': () => { return [sprite('evil-shroom'), solid(), 'dangerous'] }
    },
    {
        // loadSprite('brick', 'pogC9x5.png')
        'name': 'brick',
        'link': 'pogC9x5.png',
        // 'mapValue': '=',
        // 'config': () => { return [sprite('block'), 'coin'] }
    },
    {
        // loadSprite('mushroom', '0wMd92p.png')
        // '#':         [sprite('mushroom'), solid(), 'mushroom', body()],
        'name': 'mushroom',
        'link': '0wMd92p.png',
        'mapValue': '#',
        'config': () => { return [sprite('mushroom'), solid(), 'mushroom', body()] }
    },
    {
        // loadSprite('unboxed', 'bdrLpi6.png')
        // '}':  [sprite('unboxed'), solid()],
        'name': 'unboxed',
        'link': 'bdrLpi6.png',
        'mapValue': '}',
        'config': () => { return [sprite('unboxed'), solid()] }
    },
    {
        // loadSprite('pipe-top-left', 'ReTPiWY.png')
        // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        'name': 'pipe-top-left',
        'link': 'ReTPiWY.png',
        'mapValue': '(',
        'config': () => { return [sprite('pipe-bottom-left'), solid(), scale(0.5)] }
    },
    {
        // loadSprite('pipe-top-right', 'hj2GK4n.png')
        // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        'name': 'pipe-top-right',
        'link': 'hj2GK4n.png',
        'mapValue': ')',
        'config': () => { return [sprite('pipe-bottom-right'), solid(), scale(0.5)] }
    },
    {
        // loadSprite('pipe-bottom-left', 'c1cYSbt.png')
        // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        'name': 'pipe-bottom-left',
        'link': 'c1cYSbt.png',
        'mapValue': '-',
        'config': () => { return [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'] }
    },
    {
        // loadSprite('pipe-bottom-right', 'nqQ79eI.png')
        // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        'name': 'pipe-bottom-right',
        'link': 'nqQ79eI.png',
        'mapValue': '+',
        'config': () => { return [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'] }
    },
    {
        // loadSprite('blue-block', 'fVscIbn.png')
        // '!': [sprite('blue-block'), solid(), scale(0.5)],
        'name': 'blue-block',
        'link': 'fVscIbn.png',
        'mapValue': '!',
        'config': () => { return [sprite('blue-block'), solid(), scale(0.5)] }
    },
    {
        // loadSprite('blue-brick', '3e5YRQd.png')
        // '£': [sprite('blue-brick'), solid(), scale(0.5)],
        'name': 'blue-brick',
        'link': '3e5YRQd.png',
        'mapValue': '£',
        'config': () => { return [sprite('blue-brick'), solid(), scale(0.5)] }
    },
    {
        // loadSprite('blue-steel', 'gqVoI2b.png')
        // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
        'name': 'blue-steel',
        'link': 'gqVoI2b.png',
        'mapValue': 'x',
        'config': () => { return [sprite('blue-steel'), solid(), scale(0.5)] }
    },
    {
        // loadSprite('blue-evil-shroom', 'SvV4ueD.png')
        // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        'name': 'blue-evil-shroom',
        'link': 'SvV4ueD.png',
        'mapValue': 'z',
        'config': () => { return [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'] }
    },
    {
        // loadSprite('blue-surprise', 'RMqCc1G.png')
        // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        'name': 'blue-surprise',
        'link': 'RMqCc1G.png',
        'mapValue': '@',
        'config': () => { return [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'] }
    },
];

function loadIcons() {
    loadRoot(spriteRoot);

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        loadSprite(icon.name, icon.link);
    }
}