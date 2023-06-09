import {
    FormControl,
    Input,
    InputAdornment,
    Stack,
    Box,
    Typography,
    Button,
} from "@mui/material";

import { Email, Lock } from "@mui/icons-material";

import { blue } from "@mui/material/colors";

const Form = () => {
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
                    width: "40%",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    px: 8,
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
                    Welcome to my mern project
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Enter your credentials to access your account
                </Typography>

                <FormControl
                    variant="standard"
                    sx={{ marginTop: 4, width: "100%" }}
                >
                    <Input
                        startAdornment={
                            <InputAdornment position="start">
                                <Email sx={{ color: blue[500] }} />
                            </InputAdornment>
                        }
                        placeholder="Enter your password"
                        sx={{ p: 2, pb: 1, px: 0 }}
                    />
                </FormControl>

                <FormControl variant="standard" sx={{ width: "100%" }}>
                    <Input
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock sx={{ color: blue[500] }} />
                            </InputAdornment>
                        }
                        placeholder="Enter your password"
                        sx={{ p: 2, pb: 1, px: 0 }}
                    />
                </FormControl>

                <Button sx={{ my: 4, width: "100%" }} variant="contained">
                    Sign in
                </Button>

                <Typography variant="subtitle2">
                    Don't have a account ?
                </Typography>

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
            </Stack>
        </Box>
    );
};

export default Form;
