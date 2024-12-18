import { ModeToggle } from "@/theme/mode-toggle"

const Header = () => {

    return (
        <header>
            <div>Logo</div>

            <div>Menu(dark/light - sign up OR user logo)</div>
            <div><ModeToggle /></div>
        </header>
    )

}

export default Header