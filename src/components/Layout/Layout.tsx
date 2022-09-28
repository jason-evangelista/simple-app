import { FC, PropsWithChildren } from 'react'
import Navbar from '@components/Navbar'
import styles from '@styles/center.module.css'

type Props = PropsWithChildren

const Layout: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
