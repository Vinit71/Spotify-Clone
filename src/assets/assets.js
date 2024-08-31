import homeIcon from './home-icon.svg'
import searchIcon from './search-icon.svg'
import libraryIcon from './library-icon.png'
import rightIcon from './right-icon.png'
import plusIcon from './plus-icon.svg'
import circularPlusIcon from './circularPlus-icon.svg'
import backwardIcon from './backward-icon.png'
import playIcon from './play-icon.png'
import forwardIcon from './forward-icon.png'
import repeatIcon from './repeat-icon.png'
import shuffleIcon from './shuffle-icon.png'
import playingViewIcon from './playingView-icon.png'
import micIcon from './mic-icon.png'
import queueIcon from './queue-icon.png'
import deviceIcon from './device-icon.png'
import speakerIcon from './speaker-icon.png'
import fullScreenIcon from './fullScreen-icon.png'
import leftArrowIcon from './leftArrow-icon.png'
import rightArrowIcon from './rightArrow-icon.png'

import Arijit from './arijit.jpg'
import KK from './KK.jpg'
import Eminem from './eminem.jpg'
import luisFonsi from './luisFonsiAlbum.jpeg'
import starBoy from './starBoyAlbum.jpeg'
import Lofi from './lofi.jpg'
import Music1 from './music1.jpg'
import Song1Image from './Song1Image.jpg'
import Top50 from './top50.jpg'
import Song1 from './song1.mp3'

import SatrangaSong from './satrangaSong.jpeg'
import AyeKhudaSong from './ayeKhudaSong.jpeg'
import UskaHiBanana from './uskaHiBananaSong.jpeg'

import pauseIcon from './pauseIcon.png'

import MockingBird from './Eminem-Img/eminemMockingBird.jpeg'
import WithoutMe from './Eminem-Img/eminemWithoutMe.jpeg'

export const assets = {
    Arijit,
    KK,
    Eminem,
    luisFonsi,
    starBoy,
    Lofi,

    SatrangaSong,
    AyeKhudaSong,
    UskaHiBanana,

    Music1,
    Song1,
    Top50,
    searchIcon,
    homeIcon,
    libraryIcon,
    rightIcon,
    plusIcon,
    circularPlusIcon,
    backwardIcon,
    forwardIcon,
    playIcon,
    playingViewIcon,
    micIcon,
    queueIcon,
    deviceIcon,
    speakerIcon,
    fullScreenIcon,
    shuffleIcon,
    repeatIcon,
    leftArrowIcon,
    rightArrowIcon,

    pauseIcon
}

export const albumData = [
    {
        id: 0,
        name: "Top 50 India",
        image: Top50,
        desc: "Most Listened Songs this Week",
        bgColor: "#742a2a"
    },
    {
        id: 1,
        name: "Arijit Singh",
        image: Arijit,
        desc: "Best of Arijit Singh",
        bgColor: "#742a2a"
    },
    {
        id: 2,
        name: "KK",
        image: KK,
        desc: "The KK Era through back",
        bgColor: "#742a2a"
    },
    {
        id: 3,
        name: "Eminem",
        image: Eminem,
        desc: "Fuel your Workouts",
        bgColor: "#742a2a"
    },
    {
        id: 4,
        name: "Luis Fonsi",
        image: luisFonsi,
        desc: "Go through Spain",
        bgColor: "#742a2a"
    },
    {
        id: 5,
        name: "StarBoy",
        image: starBoy,
        desc: "Fuel your Workouts",
        bgColor: "#742a2a"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Satranga",
        image: SatrangaSong,
        file: Song1,
        desc: "Animal",
        duration: "4:47"
    },
    {
        id: 1,
        name: "Aye Khuda",
        image: AyeKhudaSong,
        file: Song1,
        desc: "Murder 2",
        duration: "4:00"
    },
    {
        id: 2,
        name: "Uska hi banana",
        image: UskaHiBanana,
        file: Song1,
        desc: "1920",
        duration: "5:00"
    },
    {
        id: 3,
        name: "MockingBird",
        image: MockingBird,
        file: Song1,
        desc: "Fuel your workout",
        duration: "5:00"
    },
    {
        id: 4,
        name: "WithoutMe",
        image: WithoutMe,
        file: Song1,
        desc: "Above Best",
        duration: "5:00"
    },
    {
        id: 5,
        name: "HeartLess",
        image: Song1Image,
        file: Song1,
        desc: "Arijit Singh",
        duration: "5:00"
    }
]