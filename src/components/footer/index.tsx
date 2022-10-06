import "./styles.scss";
import websiteLogo from "../../assets/images/logo.png";

export const Footer = () => {
    return (
        <footer className="website-footer">
            <img src={websiteLogo} alt="website logo" />
            <span>All rights reserved</span>
        </footer>
    )
}