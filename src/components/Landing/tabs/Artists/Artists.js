import React, {useState, useEffect} from 'react'

import styles from './Artists.module.css'

function Artists({topArtists}) {

    const [active, setActive] = useState('3')
    const [artists, setArtists] = useState(topArtists[2])
    const changeActive = (e) =>{
        setActive(e.target.id)
    }
    useEffect(()=>{
        const ar = topArtists[active-1]
        setArtists(ar)
    },[active])

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
                        artists.items.map((artist, index) =>(
                            <a  key={index} href={artist.external_urls.spotify} alt={artist.name} target='_blank' rel='noopener noreferrer' className={styles.Aartist}>
                                <div  className={styles.artist}>
                                    <img src={artist.images[0].url} alt={artist.name} className={styles.artistImage}/>
                                    <h5>{artist.name}</h5>
                                </div>
                            </a>
                            
                        ))
                    }
                
            </div>
        </div>
    )
}

export default Artists
