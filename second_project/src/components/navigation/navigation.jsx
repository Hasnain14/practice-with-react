import style from "./navigation.module.css"

const Navigation = () => {
    return (
        <nav className={style.navigation}>
        <div className={style.logo_image}>
        <img src="./images/logo.jpg" alt="Logo" />
        </div>

        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        
      </nav>
    )
}

export default Navigation;