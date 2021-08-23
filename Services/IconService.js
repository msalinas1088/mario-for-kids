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
        'config': () => { return [sprite('block'), solid()] }
    },
    {
        'name': 'mario',
        'link': 'Wb1qfhK.png',
    },
    {
        'name': 'surprise',
        'link': 'gesQ1KP.png',
        'mapValue': '%',
        'config': () => { return [sprite('surprise'), solid(), 'coin-surprise'] }
    },
    {
        'name': 'surprise',
        'link': 'gesQ1KP.png',
        'mapValue': '*',
        'config': () => { return [sprite('surprise'), solid(), 'mushroom-surprise'] }
    },
    {
        'name': 'evil-shroom',
        'link': 'KPO3fR9.png',
        'mapValue': '^',
        'config': () => { return [sprite('evil-shroom'), 'dangerous'] }
    },
    {
        'name': 'brick',
        'link': 'pogC9x5.png',
        // 'mapValue': '=',
        // 'config': () => { return [sprite('block'), 'coin'] }
    },
    {
        'name': 'mushroom',
        'link': '0wMd92p.png',
        'mapValue': '#',
        'config': () => { return [sprite('mushroom'), solid(), 'mushroom', body()] }
    },
    {
        'name': 'unboxed',
        'link': 'bdrLpi6.png',
        'mapValue': '}',
        'config': () => { return [sprite('unboxed'), solid()] }
    },
    {
        'name': 'pipe-top-left',
        'link': 'ReTPiWY.png',
        'mapValue': '(',
        'config': () => { return [sprite('pipe-bottom-left'), solid(), scale(0.5)] }
    },
    {
        'name': 'pipe-top-right',
        'link': 'hj2GK4n.png',
        'mapValue': ')',
        'config': () => { return [sprite('pipe-bottom-right'), solid(), scale(0.5)] }
    },
    {
        'name': 'pipe-bottom-left',
        'link': 'c1cYSbt.png',
        'mapValue': '-',
        'config': () => { return [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'] }
    },
    {
        'name': 'pipe-bottom-right',
        'link': 'nqQ79eI.png',
        'mapValue': '+',
        'config': () => { return [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'] }
    },
    {
        'name': 'blue-block',
        'link': 'fVscIbn.png',
        'mapValue': '!',
        'config': () => { return [sprite('blue-block'), solid(), scale(0.5)] }
    },
    {
        'name': 'blue-brick',
        'link': '3e5YRQd.png',
        'mapValue': '£',
        'config': () => { return [sprite('blue-brick'), solid(), scale(0.5)] }
    },
    {
        'name': 'blue-steel',
        'link': 'gqVoI2b.png',
        'mapValue': 'x',
        'config': () => { return [sprite('blue-steel'), solid(), scale(0.5)] }
    },
    {
        'name': 'blue-evil-shroom',
        'link': 'SvV4ueD.png',
        'mapValue': 'z',
        'config': () => { return [sprite('blue-evil-shroom'), scale(0.5), 'dangerous'] }
    },
    {
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

    console.log('icons loaded');
}

function getIconToMapConfig() {
    var config = {
        width: 20,
        height: 20
    };

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        if (icon.config) {
            var iconValue = icon.mapValue;
            var iconConfig = icon.config();
            config[iconValue] = iconConfig;
        }
    }

    return config;
}