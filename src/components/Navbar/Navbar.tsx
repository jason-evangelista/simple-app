import { FC } from 'react'
import styles from '@styles/navbar.module.css'

import Link from 'next/link'

type NavLinkProps = {
  link: string
  title: string
}

const navList: NavLinkProps[] = [
  {
    link: '/center-hello-world',
    title: 'Center Hello World',
  },
  {
    link: '/counter',
    title: 'Counter',
  },
  {
    link: '/simple-calculator',
    title: 'Simple Calculator',
  },
  {
    link: '/stop-button',
    title: 'Stop Button',
  },
  {
    link: '/todo',
    title: 'Todo',
  },
]

const Navbar: FC = () => {
  return (
    <div className={styles['navbar-container']}>
      <nav>
        <ul className={styles['nav-ul']}>
          {navList.map((item) => (
            <li key={item.title}>
              <Link href={item.link} passHref>
                <a className={styles['nav-li']}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
