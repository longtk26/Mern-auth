import { useState } from "react";
import {
    InputAdornment,
    Stack,
    Box,
    Typography,
    Button,
    TextField,
} from "@mui/material";

import { Email, Lock, Person } from "@mui/icons-material";

import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f5f4f8",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
            }}
        >
            <Stack
                sx={{
                    width: {
                        xs: "60%",
                        md: "50%",
                        lg: "40%",
                    },
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    px: {
                        xs: 4,
                        md: 6,
                        lg: 8,
                    },
                    py: 4,
                }}
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ fontSize: "30px", mt: "12px" }}
                >
                    Register
                </Typography>

                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <Stack alignItems="center">
                        <TextField
                            fullWidth
                            placeholder="Enter your username"
                            required
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person sx={{ color: blue[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder="Enter your email"
                            required
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={{ color: blue[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder="Enter your password"
                            required
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: blue[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder="Confirm your password"
                            required
                            margin="normal"
                            type="password"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: blue[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            sx={{ my: 2, width: "100%" }}
                            variant="contained"
                            type="submit"
                        >
                            Sign up
                        </Button>
                        <Link to="/login" style={{ width: "100%" }}>
                            <Button
                                sx={{
                                    mt: 1,
                                    width: "100%",
                                    backgroundColor: "#333",
                                    "&:hover": { backgroundColor: "#de3e3e" },
                                }}
                                variant="contained"
                            >
                                Login
                            </Button>
                        </Link>
                    </Stack>
                </form>
            </Stack>
        </Box>
    );
};

export default Register;
