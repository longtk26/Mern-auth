import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Login, Header, Register } from "./components";

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Login title="Welcome to my mern project" />}
                />
                <Route path="/login" element={<Login title="Login" />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};

export default App;
