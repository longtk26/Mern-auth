import { AppBar, Toolbar, Button } from "@mui/material";
import mearnLogo from "../../assets/mern_logo.png";

const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: "#333" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <img
                    src={mearnLogo}
                    alt="mern_logo"
                    style={{ width: "50px", height: "50px" }}
                />
                <div>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Sign up</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
