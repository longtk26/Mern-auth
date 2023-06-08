import { AppBar, Toolbar, Button } from "@mui/material";

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign up</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
