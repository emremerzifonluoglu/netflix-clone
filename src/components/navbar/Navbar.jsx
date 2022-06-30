import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.css"

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }
    return (
        <div className={isScrolled ? "n scrolled" : "n"}>
            <div className="n-container">
                <div className="n-c-left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
                    <span className="l-span">Home Page</span>
                    <span className="l-span">Series</span>
                    <span className="l-span">Movies</span>
                    <span className="l-span">New and Popular</span>
                    <span className="l-span">My List</span>
                </div>
                <div className="n-c-right">
                    <Search className="r-icon" />
                    <span>EMRE</span>
                    <Notifications className="r-icon" />
                    <img className="pf" src="https://occ-0-778-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABf4hOxJ8_NSJPpwN-v5K4Jqhg4HWb4sNmjj1Lz9rT-IipDAcW130wF5BBtuFJYLriUeMcA3i6yTCNbcCs_qraEndPV5525_C8z1K.png?r=51d" alt="" />
                    <div className="r-profile">
                        <ArrowDropDown className="r-icon" />
                        <div className="r-p-options">
                            <span className="r-p-span">Settings</span>
                            <span className="r-p-span">Logout</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar