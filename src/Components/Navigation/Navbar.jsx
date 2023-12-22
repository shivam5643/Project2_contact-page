import styles from './Navigation.module.css'
const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="logo.png" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Conatact</li>
        </ul>
    </nav>
  )
}

export default Navbar