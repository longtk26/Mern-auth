import { useState } from "react";
import {
    InputAdornment,
    Stack,
    Box,
    Typography,
    Button,
    TextField,
} from "@mui/material";

import { Email, Lock } from "@mui/icons-material";

import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Login = ({ title }: { title: string }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    {title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Enter your credentials to access your account
                </Typography>

                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <Stack alignItems="center">
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
                        <Button
                            sx={{ my: 2, width: "100%" }}
                            variant="contained"
                            type="submit"
                        >
                            Sign in
                        </Button>

                        <Typography variant="subtitle2">
                            Don't have a account ?
                        </Typography>

                        <Link to="/register" style={{ width: "100%" }}>
                            <Button
                                sx={{
                                    mt: 1,
                                    width: "100%",
                                    backgroundColor: "#333",
                                    "&:hover": { backgroundColor: "#de3e3e" },
                                }}
                                variant="contained"
                            >
                                Create a new account
                            </Button>
                        </Link>
                    </Stack>
                </form>
            </Stack>
        </Box>
    );
};

export default Login;
