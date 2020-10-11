import React, {useState, useEffect} from 'react'
import styles from './Tracks.module.css'

function Tracks({topTracks}) {
    const [active, setActive] = useState('3')
    const [tracks, setTracks] = useState(topTracks[2])
    const changeActive = (e) =>{
        setActive(e.target.id)
    }
    useEffect(()=>{
        const ar = topTracks[active-1]
        setTracks(ar)
    },[active])

    const msToMinutes = (ms) =>{
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <div className={styles.container} >
            <div className={styles.header} >
                <div className={styles.title} >
                    <h1>Top Artists</h1>
                </div>
                <div className={styles.timeRanges} >
                    <h5 id='3' onClick={changeActive} className={(active === '3')?styles.active:''} >All Time</h5>
                    <h5 id='2' onClick={changeActive} className={(active === '2')?styles.active:''} >Last 6 Months</h5>
                    <h5 id='1' onClick={changeActive} className={(active === '1')?styles.active:''} >Last 4 Weeks</h5>
                </div>
            </div>

            <div className={styles.body} >
                    {
                        tracks.items.map((track, index) =>(
                            <a key={index} href={track.external_urls.spotify}  target='_blank'  rel='noopener noreferrer' alt={track.name} className={styles.track} >
                                <div  className={styles.topTracks} >
                                    <div className={styles.trackImage} >
                                        <img src={track.album.images[0].url} alt={track.album.name} className={styles.albumCover}  />
                                    </div>
                                    <div className={styles.trackData} >
                                        <div className={styles.trackInfo} >
                                            <h5>{track.name}</h5>
                                            <div className={styles.albumDetails} >
                                                <p>
                                                {
                                                    track.artists.map((author, jindex) =>
                                                        <span key={jindex}  className={styles.author} >{author.name} &nbsp;</span>
                                                    )
                                                }
                                                 ● {track.album.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.duration} >
                                            <p>{msToMinutes(track.duration_ms)}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </a>
                            
                        ))
                    }
                
            </div>
        </div>
    )
}

export default Tracks
