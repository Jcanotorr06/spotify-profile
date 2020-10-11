import React from 'react'
import styles from './Playlists.module.css'


function Playlists({playlists}) {
    return (
            <div className={styles.container} >
                <div className={styles.header} >
                    <div className={styles.title} >
                        <h1>Your Playlists</h1>
                    </div>
                </div>

                <div className={styles.body} >
                        {
                            playlists.items.map((playlist, index) =>(
                                <a  key={index} href={playlist.external_urls.spotify} alt={playlist.name} target='_blank' rel='noopener noreferrer' className={styles.Aplaylist}>
                                    <div  className={styles.playlist}>
                                        <img src={playlist.images[0].url} alt={playlist.name} className={styles.playlistImage}/>
                                        <h4>{playlist.name}</h4>
                                        <p>{playlist.tracks.total} TRACKS </p>
                                    </div>
                                </a>
                                
                            ))
                        }
                    
                </div>
        </div>
        
    )
}

export default Playlists
