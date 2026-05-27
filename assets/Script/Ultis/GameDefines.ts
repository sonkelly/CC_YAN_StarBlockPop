export enum GameMode {
    SINGLE = 0,
    MULTIPLAYER = 2,
}

export enum GameDataType {
    MIDI = 0,
    JSON = 1,
}

export enum GamePlatform {
    YANDEX = 0,
    POKI = 1,
    CRAZYGAMES = 2,
    COOLMATHGAMES = 3,
    Y8 = 4,
    GAMEDISTRIBUTION = 5,
    FACEBOOK = 6,
    LOCAL = 7
}

export enum Tracking {
    USE_TRACKING = 0,
    BLOCK_TRACKING = 1
}

export enum BuildType {
    LITTLE = 0,
    FULL = 1,
    RESTRICT = 2,
}

export enum BoxesOption {
    USE_BOX = 0,
    HOME_ONLY = 1
}

export enum GameScene {
    HOME = 0,
    GAMEPLAY = 1,
}

export enum GameStatus {
    ONLOAD,
    LOADED,
    PLAYING,
    PAUSED,
    DIED,
    WIN,
    REVIVE,
    WAITNEXTLOOP,
    FTUE
}


export interface ItemRewardData {
    index: number,
    titleKey: string,
    countReward: number,
    spr_icon: string
    type: string,
    song: any,
    theme: any
}

export interface TabData {
    id: number,
    x: number,
    width: number,
    name: string
}

export enum GemShopType {
    BUY,
    ADS,
    ALL
}

export interface BoxShop {
    id: number,
    reward: Array<any>,
    name: string,
    price: number,
    sale: number,
    icon: string
    bg: string,
    type: string
}

export interface GemShop {
    id: number,
    reward: number,
    price: number,
    sale: number,
    icon: string,
    typeReward: number
}

export interface SongPlayedCount {
    songId: number,
    count: number
}


const GameDefines = {
    GameMode: {
        SINGLE: 0, QUICK_PLAY: 1, MULTIPLAYER: 2
    },
    GameScene: {
        HOME: 0, GAMEPLAY: 1
    },
    GameDataType: {
        MIDI: 0, JSON: 1
    },
    GamePlatform: {
        YANDEX: 0, POKI: 1, CRAZYGAMES: 2, COOLMATHGAMES: 3, Y8: 4, GAMEDISTRIBUTION: 5, FACEBOOK: 6, LOCAL: 7
    },

    Tracking: {
        USE_TRACKING: 0, BLOCK_TRACKING: 1
    },

    BuildType: {
        LITTLE: 0, FULL: 1, RESTRICT: 2
    },
    BoxesOption: {
        USE_BOX: 0, HOME_ONLY: 1
    },
    QuickPlayState: {
        NONE: 0, INIT: 1, START: 2, SYNC_TIME: 3, NEXT_LOOP: 4, EXIT: 5, FINISH: 6
    },
    MultiPlayerState: {
        NONE: 0, PLAYING: 1, READY: 2, STARTGAME: 3, DEAD: 4, UPDATE_SCORE: 5, DISCONNECT: 6, FINISH: 7, START_COUNT_DOWN: 8
    },
    PlayerState: {
        NONE: 0, PLAYING: 1, DEAD: 2
    },
    TileType: {
        SHORT: 1,
        LONG: 2,
    },
    HitTileReponseData: function () {
        this.userId = 0;
        this.score = 0;
    },
    SongData: function (t, e, i, o, n, r) {
        this.songId = "";
        this.mp3Url = "";
        this.levelUrl = ""
        this.title = "";
        this.artist = "";
        this.duration = 0;
        this.songId = t;
        this.mp3Url = e;
        this.levelUrl = i;
        this.title = o;
        this.artist = n;
        this.duration = r;

        this.update = function (t) {
            this.songId = t.songId;
            this.mp3Url = t.mp3Url;
            this.levelUrl = t.levelUrl;
            this.title = t.title;
            this.artist = t.artist;
            this.duration = t.duration;
        }
    },
    countDiamondRewardDay0: 100,
    diamondRevivePay: 100,
    dailyReward: [
        {
            index: 0,
            titleKey: "daily_day_1",
            countReward: 100,
            spr_icon: "daily_gem_01",
            type: "diamond"
        },
        {
            index: 1,
            titleKey: "daily_day_2",
            countReward: 200,
            spr_icon: "daily_gem_02",
            type: "diamond"
        },
        {
            index: 2,
            titleKey: "daily_day_3",
            countReward: 300,
            spr_icon: "daily_gem_03",
            type: "song"
        },
        {
            index: 3,
            titleKey: "daily_day_4",
            countReward: 400,
            spr_icon: "daily_gem_04",
            type: "diamond"
        },
        {
            index: 4,
            titleKey: "daily_day_5",
            countReward: 500,
            spr_icon: "daily_gem_05",
            type: "theme"
        },
        {
            index: 5,
            titleKey: "daily_day_6",
            countReward: 1000,
            spr_icon: "daily_gem_06",
            type: "diamond"
        },
    ],
    themes: [
        {
            id: "default",
            type: "ads"
        },
        {
            id: "PT_16",
            type: "ads"
        },
        {
            id: "PT_1",
            type: "ads"
        },

        {
            id: "PT_2",
            type: "ads"
        },
        {
            id: "PT_3",
            type: "ads"
        },
        {
            id: "PT_4",
            type: "ads"
        },
        {
            id: "PT_5",
            type: "diamond",
            price: 500
        },
        {
            id: "PT_6",
            type: "ads"
        }
        ,
        {
            id: "PT_8",
            type: "ads"
        }
        ,
        {
            id: "PT_9",
            type: "diamond",
            price: 500
        }
        ,
        {
            id: "PT_10",
            type: "ads"
        }
        ,
        {
            id: "PT_11",
            type: "ads"
        }
        ,
        {
            id: "PT_12",
            type: "diamond",
            price: 500
        }
        ,
        {
            id: "PT_13",
            type: "ads"
        },
        {
            id: "PT_14",
            type: "ads"
        },
        {
            id: "PT_15",
            type: "diamond",
            price: 500
        }
    ],
    languages: [
        {
            index: 0,
            name: "English",
            key: "en"
        },
        {
            index: 0,
            name: "Russia",
            key: "ru"
        },
        {
            index: 0,
            name: "English",
            key: "tr"
        },
        {
            index: 0,
            name: "Korean",
            key: "ko"
        },
        {
            index: 0,
            name: "English",
            key: "zh"
        },
        {
            index: 0,
            name: "Japan",
            key: "ja"
        },
    ],
    gems: {
        type: GemShopType.ADS, // set to ADS for show only item ads get gem
        items: [
            {
                id: 1,
                reward: 100,
                price: 2.99,
                sale: 0,
                icon: "gem_01",
                typeReward: GemShopType.ADS,
            },
            {
                id: 2,
                reward: 200,
                price: 2.99,
                sale: 0,
                icon: "gem_02",
                typeReward: GemShopType.BUY,
            },
            {
                id: 3,
                reward: 300,
                price: 3.99,
                sale: 0,
                icon: "gem_03",
                typeReward: GemShopType.BUY,
            },
            {
                id: 4,
                reward: 400,
                price: 4.99,
                sale: 0,
                icon: "gem_04",
                typeReward: GemShopType.BUY,
            },
            {
                id: 5,
                reward: 500,
                price: 5.99,
                sale: 0,
                icon: "gem_05",
                typeReward: GemShopType.BUY,
            },
            {
                id: 6,
                reward: 1000,
                price: 6.99,
                sale: 0,
                icon: "gem_06",
                typeReward: GemShopType.BUY,
            },

        ]
    },
    popupRewardDay0: "popup-reward-day-0",
    popupDailyReward: "popup-daily-reward",
    popupMainSetting: "popup-main-setting",
    popupShopGems: "popup-shop-gems",
    popupFastShopGems: "popup-fast-shop-gems",
    popupBoxInfo: "popup-box-info",
    popupWhatNext: "popup-what-next",
    popupAudioSync: "popup-audio-sync",
    popupVIP: "popup-vip",
    popupStarter: "popup-starter-pack",
    keyOptions: [
        // { name: "Space", keyCode: cc.macro.KEY.space },
        // { name: "Enter", keyCode: cc.macro.KEY.enter },
        { name: "Arrow Up", keyCode: cc.macro.KEY.up },
        { name: "Arrow Down", keyCode: cc.macro.KEY.down },
        { name: "Arrow Left", keyCode: cc.macro.KEY.left },
        { name: "Arrow Right", keyCode: cc.macro.KEY.right },
        // { name: "Shift", keyCode: cc.macro.KEY.shift },
        // { name: "Ctrl", keyCode: cc.macro.KEY.ctrl },
        // { name: "Alt", keyCode: cc.macro.KEY.alt },
        // { name: "Pause", keyCode: cc.macro.KEY.pause },
        // { name: "Capslock", keyCode: cc.macro.KEY.capslock },
        // { name: "ESC", keyCode: cc.macro.KEY.escape },
        // { name: "End", keyCode: cc.macro.KEY.end },
        // { name: "Home", keyCode: cc.macro.KEY.home },
        // { name: "Select", keyCode: cc.macro.KEY.select },
        // { name: "Insert", keyCode: cc.macro.KEY.insert },
        // { name: "Delete", keyCode: cc.macro.KEY.Delete },
        { name: "A", keyCode: cc.macro.KEY.a },
        { name: "B", keyCode: cc.macro.KEY.b },
        { name: "C", keyCode: cc.macro.KEY.c },
        { name: "D", keyCode: cc.macro.KEY.d },
        { name: "E", keyCode: cc.macro.KEY.e },
        { name: "F", keyCode: cc.macro.KEY.f },
        { name: "G", keyCode: cc.macro.KEY.g },
        { name: "H", keyCode: cc.macro.KEY.h },
        { name: "I", keyCode: cc.macro.KEY.i },
        { name: "J", keyCode: cc.macro.KEY.j },
        { name: "K", keyCode: cc.macro.KEY.k },
        { name: "L", keyCode: cc.macro.KEY.l },
        { name: "M", keyCode: cc.macro.KEY.m },
        { name: "N", keyCode: cc.macro.KEY.n },
        { name: "O", keyCode: cc.macro.KEY.o },
        { name: "P", keyCode: cc.macro.KEY.p },
        { name: "Q", keyCode: cc.macro.KEY.q },
        { name: "R", keyCode: cc.macro.KEY.r },
        { name: "S", keyCode: cc.macro.KEY.s },
        { name: "T", keyCode: cc.macro.KEY.t },
        { name: "U", keyCode: cc.macro.KEY.u },
        { name: "V", keyCode: cc.macro.KEY.v },
        { name: "W", keyCode: cc.macro.KEY.w },
        { name: "X", keyCode: cc.macro.KEY.x },
        { name: "Y", keyCode: cc.macro.KEY.y },
        { name: "Z", keyCode: cc.macro.KEY.z },
        { name: "Num 1", keyCode: cc.macro.KEY.num1 },
        { name: "Num 2", keyCode: cc.macro.KEY.num2 },
        { name: "Num 3", keyCode: cc.macro.KEY.num3 },
        { name: "Num 4", keyCode: cc.macro.KEY.num4 },
        { name: "Num 5", keyCode: cc.macro.KEY.num5 },
        { name: "Num 6", keyCode: cc.macro.KEY.num6 },
        { name: "Num 7", keyCode: cc.macro.KEY.num7 },
        { name: "Num 8", keyCode: cc.macro.KEY.num8 },
        { name: "Num 9", keyCode: cc.macro.KEY.num9 },
        { name: "Num 0", keyCode: cc.macro.KEY.num0 },

    ],
    PAY_MENT_KEY: "vip",
    PAY_MENT_KEY_STARTER: "starter",
    useEffectTransBackground: true,
    showDifficalty: true,
    showRewardDay0: false,
    isHideTutorialSongList: true,
    isShowIntertialAds: true,
    HEATH_COUNT: 3,
    SONG_RESULT_COUNT: 6,
    PERFECT_POW: 0.1,
    GREAT_POW: 0.05,
    COOL_POW: -0.15,
    MISS_POW: -2.6,
    MAX_TIME_MISS: 10,
    TIME_DELAY_FIRST_TILE: 3,

    useShield: true,
    TIME_SHIELD: 4,

    isAutoPlayPreview: false,
    restrictContent: true,
    maxGemReward: 100,
    useSliderTile: false,
    useAudioSync: true,
    useLanguageSetting: true,
    server: "",
    EVENT_NAME: {
        EPT_GAME_INIT: "game_init",                         // player_gem
        EPT_OPEN_BOX: "open_box",                           // boxType, boxPrice, player_gem, isUnlocked
        EPT_UNLOCK_BOX: "unlock_box",                       // boxType, boxPrice, player_gem, local
        EPT_UNLOCK_FAILD: "unlock_box_faild",               // boxType, boxPrice, player_gem, local
        EPT_SONG_PREVIVEW_START: "song_preview_start",      // song_name, song_id, local, type_play, player_gem
        EPT_SONG_PREVIVEW_STOP: "song_preview_stop",        // song_name, song_id, local, player_gem
        EPT_SONG_CLICK: "song_click",                       // song_name, song_id, tab, player_gem
        EPT_SONG_UNLOCK: "song_unlock",                     // song_name, song_id, tab, player_gem
        EPT_SONG_UNLOCK_DIAMOND: "song_unlock_diamond",     // song_name, song_id, tab, player_gem
        EPT_SONG_START: "song_start",                       // song_name, song_id, theme, player_gem
        EPT_SONG_FAILD: "song_faild",                       // song_name, song_id, player_gem
        EPT_SONG_REVIVE: "song_revive",                     // song_name, song_id, player_gem
        EPT_SONG_RESULT: "song_result",                     // song_name, song_id, player_gem
        EPT_SHOP_THEME_OPEN: "shop_theme_open",             // song_name, song_id, player_gem
        EPT_SELECTED_THEME: "selected_theme",               // song_name, song_id, theme_id, player_gem
        EPT_DAILY_REWARD_CLAIM: "daily_reward_claim",       // reward_day, reward, player_gem
        EPT_CLAIM_FIRST_REWARD: "claim_first_reward",       // reward, player_gem
        EPT_TUTORIAL_COMPLETE: "tutorial_complete",         // player_gem
    },

    POPUP_NAME: {
        PO_SETTING: "po_setting",
        PO_SHOP: "po_shop"
    }
};

export default GameDefines;