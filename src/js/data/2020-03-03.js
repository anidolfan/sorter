dataSetVersion = "2020-03-03";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].characterData = [
      //animals
      {
        "name": "Morito Pon-chan",
        "img": "https://i.imgur.com/lVjtiH5.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Okamura Marin-chan",
        "img": "https://i.imgur.com/VzWEkX1.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Maeda Natsu",
        "img": "https://i.imgur.com/mH24DPW.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Satoyoshi Omochi-kun",
        "img": "https://i.imgur.com/3L3b7b2.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Kanazawa Sui-chan",
        "img": "https://i.imgur.com/rk7C1kO.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Hashisako Pon-chan",
        "img": "https://i.imgur.com/WhTwFIL.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Inoue Konatsu",
        "img": "https://i.imgur.com/9XCZXBd.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },
    {
        "name": "Shimakura Guu-chan",
        "img": "https://i.imgur.com/iFwcScN.jpg"
        , opts: {
            subkeyaki: ["animal"]
        }
    },

    //ex-animals
    {
        "name": "Dramatic Chipmunk",
        "img": "https://i.imgur.com/KM6o48H.jpg"
        , opts:{
            subkeyaki: ["ex-animal"]
        }
    }
    ,
    {
        "name": "Iikubo Rana-chan",
        "img": "https://i.imgur.com/ELZszPE.jpg"
        , opts:{
            subkeyaki: ["ex-animal"]
        }
    },
    {
        "name": "Nakajima  Luna-chan",
        "img": "https://i.imgur.com/f56aZnY.jpg"
        , opts:{
            subkeyaki: ["ex-animal"]
        }
    },
    {
        "name": "Tanaka Jack",
        "img": "https://i.imgur.com/25vdEA8.jpg"
        , opts:{
            subkeyaki: ["ex-animal"]
        }
    },
    {
        "name": "Tanaka Simba",
        "img": "https://i.imgur.com/Im8WUuk.jpg"
        , opts:{
            subkeyaki: ["ex-animal"]
        }
    }

];

dataSet[dataSetVersion].options = [
    {
        name: 'Filter by Group',
        key: 'subkeyaki',
        tooltip: 'Check this to restrict to certain group',
        checked: true,
        sub: [
      
            { name: 'H!P pets and other animals', key: 'animal' },
            { name: 'Ex-H!P pets and other animals', key: 'ex-animal' }
        ]
    }

];
