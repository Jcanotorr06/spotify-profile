import React, {useEffect, useState} from 'react'
import { Person, MusicNote, QueueMusic,Replay,Album } from "@material-ui/icons";
import styles from './Landing.module.css';
import { ReactComponent as Spotify_logo } from  "../../images/spotify_brands.svg";
import { ReactComponent as Github_logo } from  "../../images/github_brands.svg";
import spinner from "../../images/716.gif";
import {Profile, Artists, Playlists, Recent, Tracks } from './tabs'
function Landing({spotify}) {

    const [active, setActive] = useState('1');
    const [profile, setProfile] = useState();
    const [playlists, setPlaylists] = useState();
    const [followed, setFollowed] = useState()
    const [topArtists, setTopArtists] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [recentTracks, setRecentTracks] = useState()

    const changeActive = (e) =>{
        if(e.target.tagName === 'DIV'){
            setActive(e.target.id)
        }else if(e.target.tagName === 'H5'){
            setActive(e.target.parentElement.id)
        }
        else if(e.target.parentElement.parentNode.id){
            setActive(e.target.parentElement.parentNode)
        }
    }

    useEffect(() =>{
        setActive('1')
    }, [])

    useEffect(() => {
        async function f(){
            await spotify.getMe()
                .then(user => {
                    setProfile(user);
                })
                .then(await spotify.getUserPlaylists()
                    .then(list => {
                        setPlaylists(list);
                        console.log(list)
                    }))
                .then(await spotify.getFollowedArtists()
                    .then(fartists => {
                        setFollowed(fartists)
                    }))
                .then(await spotify.getMyTopArtists({"limit": 50, "time_range": "short_term"})
                    .then(tartists => {
                        setTopArtists(topArtists => [...topArtists, tartists])
                    }))
                .then(await spotify.getMyTopArtists({"limit": 50, "time_range": "medium_term"})
                    .then(tartists => {
                        setTopArtists(topArtists => [...topArtists, tartists])
                    }))
                .then(await spotify.getMyTopArtists({"limit": 50, "time_range": "long_term"})
                    .then(tartists => {
                        setTopArtists(topArtists => [...topArtists, tartists])
                    }))
                    
                .then(await spotify.getMyTopTracks({"limit": 50, "time_range": "short_term"})
                    .then(ttracks => {
                        setTopTracks(topTracks => [...topTracks, ttracks])
                    }))
                .then(await spotify.getMyTopTracks({"limit": 50, "time_range": "medium_term"})
                    .then(ttracks => {
                        setTopTracks(topTracks => [...topTracks, ttracks])
                    }))
                .then(await spotify.getMyTopTracks({"limit": 50, "time_range": "long_term"})
                    .then(ttracks => {
                        setTopTracks(topTracks => [...topTracks, ttracks])
                    }))

                .then(await spotify.getMyRecentlyPlayedTracks({"limit":50})
                    .then(rtracks => {
                        setRecentTracks(rtracks)
                    }))

        }
        f();
    }, [spotify])


    return (
        <div className={styles.container} >
            <div className={styles.navbar} >
                <div className={styles.icon} ><a href="https://open.spotify.com/" target='_blank' rel='noopener noreferrer'><Spotify_logo /></a> </div>
                <div className={styles.tabs} >
                    <div id='1' onClick={(recentTracks)?changeActive:(()=>{return false})} className={(active === '1')? styles.active :''} > <Person/> <h5>Profile</h5></div>
                    <div id='2' onClick={(recentTracks)?changeActive:(()=>{return false})}  className={(active === '2')? styles.active :''} > <Album/> <h5>Top Artists</h5></div>
                    <div id='3' onClick={(recentTracks)?changeActive:(()=>{return false})} className={(active === '3')? styles.active :''} > <MusicNote/> <h5>Top Tracks</h5></div>
                    <div id='4' onClick={(recentTracks)?changeActive:(()=>{return false})} className={(active === '4')? styles.active :''} > <Replay/> <h5>Recent Tracks</h5></div>
                    <div id='5' onClick={(recentTracks)?changeActive:(()=>{return false})} className={(active === '5')? styles.active :''} > <QueueMusic/> <h5>Playlists</h5></div>
                </div>
                <div className={styles.icon2} ><a href="https://github.com"><Github_logo /></a> </div>
            </div>
            <div className={styles.content}>
                {
                    (active === '1' && topTracks.length === 3) ? <Profile profile={profile} playlists={playlists} followed={followed} topArtists={topArtists} topTracks={topTracks} setActive={setActive}/> 
                    :((active === '3' && topTracks)? <Tracks topTracks={topTracks} /> 
                    :((active === '2' && topArtists)? <Artists topArtists={topArtists} />
                    :((active === '4' && recentTracks)? <Recent recentTracks={recentTracks} /> 
                    :(( active === '5' && playlists)? <Playlists playlists={playlists} /> 
                    : <img src={spinner} alt="spinner"  className={styles.loading} style={{ width: '150px', margin:'auto', display:'block', position:'relative', lef:'50%' , top:'500%', opacity:'50%'}} />))))
                }
            </div>
        </div>
    )
}

export default Landing
