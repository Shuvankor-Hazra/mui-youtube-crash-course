import { Add as AddIcon } from "@mui/icons-material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 250, sm: 400 },
    bgcolor: "background.default",
    color: "text.primary",
    border: "1px solid #000",
    boxShadow: 24,
    p: 3,
    borderRadius: 3,
    textAlign: "center",
};

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Create Post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 30px)", sm: 20 },
                }}>
                <Fab color="primary">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open} onClose={(e) => setOpen(false)}>
                <Box sx={style}>
                    <Typography variant="h5" color="gray">
                        Create Post
                    </Typography>

                    {/* User Box */}
                    <UserBox>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://i.ibb.co.com/YdMJvjX/prothomalo-english-2024-09-26-to3kv893-GYQARW4-WEAAMRr-T.jpg"
                        />
                        <Typography fontWeight={500} variant="span">
                            Johnny Depp
                        </Typography>
                    </UserBox>

                    {/* Text Field */}
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />

                    {/* Emoji */}
                    <Stack direction="row" spacing={1.5} mt={2} mb={4}>
                        <EmojiEmotionsIcon color="primary" sx={{ cursor: "pointer" }} />
                        <VideoCameraFrontIcon color="secondary" sx={{ cursor: "pointer" }} />
                        <ImageIcon color="success" sx={{ cursor: "pointer" }} />
                        <PersonAddIcon color="error" sx={{ cursor: "pointer" }} />
                    </Stack>

                    {/* Button Group */}
                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    );
};

export default Add;
