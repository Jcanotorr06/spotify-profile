import React from 'react'
import styles from './Login.module.css'

import {loginUrl} from '../../api/spotify'

function Login() {
    return (
        <div className={styles.container} >
            <h1 className={styles.title} >Spotify Profile</h1>
            <a className={styles.login} href={loginUrl} >LOG IN TO SPOTIFY</a>
        </div>
    )
}

export default Login
