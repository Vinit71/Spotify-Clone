import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props)=>{

    const audioRef = useRef()
    const seekBg = useRef();
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])

    // to manage player status
    const [playerStatus, setPlayerStatus] = useState(false)

    // for song duration
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    })

    const play = ()=>{
        audioRef.current.play();
        setPlayerStatus(true)
    }

    const pause = () =>{
        audioRef.current.pause();
        setPlayerStatus(false);
    }

    //play any song by click
    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true)
    }

    //to jump over previous and next songs
    const previous = async () => {
        if(track.id>0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play();
            setPlayerStatus(true)
        }
    }

    const next = async () => {
        if(track.id<songsData.length-1){
            await setTrack(songsData[track.id+1])
            await audioRef.current.play();
            setPlayerStatus(true)
        }
    }

    //SeekBar control
    const seekSong = async (e) => {
        // console.log(e);
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    // SeekBar and Time
    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                //SeekBar
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

                //current and total time
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    })
    // whatever i write within this will be accesiable to all components
    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playerStatus,setPlayerStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,
        next,
        seekSong
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;