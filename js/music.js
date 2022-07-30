const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "枫",
            artist: "周杰伦",
            url: "../music/url/枫 - 周杰伦.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000",
            lrc: "../music/lrc/枫 - 周杰伦.lrc",
            theme: "#171513"
        },
        {
            name: "空心",
            artist: "光泽",
            url: "../music/url/空心 - 光泽.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001vjIoV01nThA.jpg?max_age=2592000",
            lrc: "../music/lrc/空心 - 光泽.lrc",
            theme: "#b7daff"
        },
        {
            name: "蒲公英的约定",
            artist: "周杰伦",
            url: "../music/url/蒲公英的约定 - 周杰伦.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg?max_age=2592000",
            lrc: "../music/lrc/蒲公英的约定 - 周杰伦.lrc",
            theme: "#b7daff"
        },
        {
            name: "清明雨上",
            artist: "许嵩",
            url: "../music/url/清明雨上 - 许嵩.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002KSDg90IaScI.jpg?max_age=2592000",
            lrc: "../music/lrc/清明雨上 - 许嵩.lrc",
            theme: "#b7daff"
        },
        {
            name: "八小时时差",
            artist: "郑鱼",
            url: "../music/url/八小时时差 - 郑鱼.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000004UnhxH4dmAyM.jpg?max_age=2592000",
            lrc: "../music/lrc/八小时时差 - 郑鱼.lrc",
            theme: "#b7daff"
        },
        {
            name: "花海",
            artist: "周杰伦",
            url: "../music/url/花海 - 周杰伦.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg?max_age=2592000",
            lrc: "../music/lrc/花海 - 周杰伦.lrc",
            theme: "#b7daff"
        },
        {
            name: "单相思",
            artist: "Aimer",
            url: "../music/url/カタオモイ - Aimer.mp3",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001Dos6E4bRsRx.jpg?max_age=2592000",
            lrc: "../music/lrc/カタオモイ - Aimer.lrc",
            theme: "#b7daff"
        },
    ]
});