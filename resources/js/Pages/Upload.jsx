import React, { useState } from "react";
import {
    Box,
    TextField,
    MenuItem,
    FormControl,
    Select,
    Button,
    Snackbar
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const styles = {
    margin: "10px",
};

export default function Upload2({ auth }) {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [updateMessage, setUpdateMessage] = useState("");
    const { flash } = usePage().props;

    // CREATE AN ARRAY OF VALUES FROM INPUTS
    const [values, setValues] = useState({
        filegroup: "SETUP", // default value if nothing is selected
        filename: "",
        description: "",
        location: "",
    });

    // SET VALUES
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    // SUBMIT/SAVE DATA
    const handleSubmit =(e, message)=> {
        const api = "http://127.0.0.1:8000/api/save";
        e.preventDefault();
        setOpenSnackBar(true);
        setUpdateMessage('Save Success');
        router.post(api, values); // inertia router.post to send data to mysql
    }
    const handleClose = (event, reason) => {
        setOpenSnackBar(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Upload" />

            <Box sx={style}>
                <FormControl>
                    <Select
                        sx={styles}
                        id="filegroup"
                        name="filegroup"
                        value={values.filegroup}
                        onChange={handleChange}
                    >
                        <MenuItem value="SETUP">SETUP</MenuItem>
                        <MenuItem value="GIA">GIA</MenuItem>
                        <MenuItem value="OTHERS">OTHERS</MenuItem>
                    </Select>
                    <TextField
                        sx={styles}
                        type="text"
                        id="filename"
                        name="filename"
                        label="Filename"
                        placeholder="Filename"
                        value={values.filename}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={styles}
                        id="description"
                        name="description"
                        label="Description"
                        value={values.description}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <TextField
                        sx={styles}
                        id="location"
                        name="location"
                        label="Location"
                        value={values.location}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />
                    <Button
                        sx={styles}
                        onClick={handleSubmit}
                        variant="contained"
                    >
                        SAVE
                    </Button>
                </FormControl>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackBar}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {updateMessage}
                </Alert>
            </Snackbar>
        </AuthenticatedLayout>
    );
}
