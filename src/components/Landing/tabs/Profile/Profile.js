import React from 'react'
import { ReactComponent as User_Default } from  '../../../../images/user.svg'
import styles from './Profile.module.css';

const Profile = ({profile,playlists,followed,topArtists,topTracks, setActive}) => {

    return (
        <div className={styles.container} >
            <div className={styles.header} >
                <div className={styles.profilePicture}>
                    {
                        (profile.images[0])? <img src={profile.images[0].href} alt='profile' className={styles.defaultProfile} />
                        : <User_Default  className={styles.defaultProfile}  />
                    }
                </div>
                <div className={styles.username} >
                    <a href={profile.external_urls.spotify} target='_blank' rel='noopener noreferrer' >{profile.display_name}</a>
                </div>
                <div className={styles.statistics} >
                    <div className={styles.stat} >
                    <h4> {profile.followers.total}</h4>
                        <p>Followers</p>
                    </div>
                    <div className={styles.stat} >
                        <h4> {playlists.total}</h4>
                        <p>Playlists</p>
                    </div>
                    <div className={styles.stat} >
                        <h4> {followed.artists.total}</h4>
                        <p>Following</p>
                    </div>        
                </div>
                <div className={styles.logout} >
                    <button onClick={(e) => {window.location.reload()}} >Logout</button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.artists}>
                    <div className={styles.bhead}>
                        <h3>Top Artists of All Time</h3>
                        <button onClick={(e) => {setActive('2')}} >See More</button>
                    </div>
                    <div className={styles.artCont} >
                        <ul>
                            {
                                topArtists[2].items.slice(0,10).map((artist, index) =>(  
                                    <li key={index} className={styles.art}>
                                        <a href={artist.external_urls.spotify} alt={artist.name} target='_blank' rel='noopener noreferrer' >
                                            <div  className={styles.artist}>
                                                <img src={artist.images[0].url} alt={artist.name} className={styles.artistImage}/>
                                                <h5>{artist.name}</h5>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className={styles.tracks} >
                    <div className={styles.bhead}>
                        <h3>Top Tracks of All Time</h3>
                        <button onClick={(e) => {setActive('3')}} >See More</button>
                    </div>
                    <div className={styles.trackCont} >
                        <ul>
                            {
                                topTracks[2].items.slice(0,10).map((track, index) =>(
                                        <li key={index} className={styles.tra} >
                                            <a href={track.external_urls.spotify}  target='_blank'  rel='noopener noreferrer' alt={track.name}  >
                                                <div  className={styles.topTracks} >
                                                    <div className={styles.trackImage} >
                                                        <img src={track.album.images[0].url} alt={track.album.name} className={styles.albumCover}  />
                                                    </div>
                                                    <div>
                                                    <h5>{track.name}</h5>
                                                        <div className={styles.albumDetails} >
                                                            {
                                                                track.artists.map((author, jindex) =>
                                                                    <p key={jindex}  className={styles.author} >{author.name} &nbsp;</p>
                                                                )
                                                            }
                                                            <p className={styles.albumName} > ● {track.album.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </a>
                                            
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
