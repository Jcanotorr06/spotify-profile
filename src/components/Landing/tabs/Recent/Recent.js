import React from 'react'
import styles from '../Tracks/Tracks.module.css'

function Recent({recentTracks}) {

    const msToMinutes = (ms) =>{
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <div className={styles.container} >
            <div className={styles.header} >
                <div className={styles.title} >
                    <h1>Recently Played Tracks</h1>
                </div>
            </div>

            <div className={styles.body} >
                    {
                        recentTracks.items.map((track, index) =>(
                            <a key={index} href={track.track.external_urls.spotify}  target='_blank'  rel='noopener noreferrer' alt={track.name} className={styles.track} >
                                <div  className={styles.topTracks} >
                                    <div className={styles.trackImage} >
                                        <img src={track.track.album.images[0].url} alt={track.name} className={styles.albumCover}  />
                                    </div>
                                    <div className={styles.trackData} >
                                        <div className={styles.trackInfo} >
                                            <h5>{track.track.name}</h5>
                                            <div className={styles.albumDetails} >
                                                <p>
                                                {
                                                    track.track.artists.map((author, jindex) =>
                                                        <span key={jindex}  className={styles.author} >{author.name} &nbsp;</span>
                                                    )
                                                }
                                                 ● {track.track.album.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.duration} >
                                            <p>{msToMinutes(track.track.duration_ms)}</p>
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

export default Recent
