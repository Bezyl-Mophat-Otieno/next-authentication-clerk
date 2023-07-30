import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { auth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
function Header() {
  const {userId} = auth();
  return (
    <>
    <div className={styles.nav} >
    <div className={styles.brand}>
        Clerk Authentication
    </div>

    {  !userId && <button className={styles.signInBtn}> 
    <Link href="/sign-up" className={styles.link}>SignUp</Link>
    </button>}
    { !userId &&<button className={styles.signUpBtn}>
    <Link href="/sign-up" className={styles.link}>SignUp</Link>
    </button>}
    {userId &&  <Link href={'/profile'} className={styles.link}>Profile</Link>}
    <UserButton afterSignOutUrl='/'/>
    </div>
    </>
  )
}

export default Header
