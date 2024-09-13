import { HeaderMenu } from "../styled";
import Logo from '../assets/Logo.png'

export default function Header() {
    return (
        <HeaderMenu>
            <div className="header">
                <img src={Logo} alt="Logo AutoProblems" />
            </div>
        </HeaderMenu>
    )
}