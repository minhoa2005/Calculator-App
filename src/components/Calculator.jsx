import { Backspace } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Calculator = () => {

    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    //
    const [expression, setExpression] = useState("");
    const [currentInput, setCurrentInput] = useState("0");
    const getButton = () => {
        const buttons = [];
        for (let i = 0; i < 10; i++) {
            buttons.push(i);
        }
        buttons.push('+', '-', '×', '÷', '=');
        return buttons;
    }
    //su dung split de tach cac ky tu trong chuoi, split(expression), xong do se tinh toan 2 so va dua ra ket qua
    //cac ky tu nguoi dung nhap se luu vao currentInput, mot khi nhan vao mot nut, currentInput se duoc cap nhat
    //kiem tra xem currentInput co chua ky tu nao khong, neu co thi se thuc hien tinh toan, khong thi se cap nhat currentInput
    //neu nhan vao nut =, cap nhat ket qua
    const handleButtonClick = (value) => {
        setCurrentInput((prev) => {
            if (prev === "0") {
                return value;
            }
            return prev + value;
        });
    }
    const handleDelete = () => {
        if (currentInput.length === 0) {
            return;
        } else {
            setCurrentInput((prev) => prev.slice(0, prev.length - 1));
        }
    }
    return (
        <Box sx={{ display: 'flex', gap: 4, p: 4 }}>
            <Box>
                <TextField className="w-full text" variant="outlined" disabled={true} sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiOutlinedInput-input': {
                        height: 100,
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        textAlign: 'right',
                    },
                }}
                    value={currentInput || "0"}
                />
                <br />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
                    {getButton().map((button, index) => (
                        <Button key={index} variant="outlined" color="primary" sx={{
                            height: 64,
                            width: '30%',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}
                            value={button}
                            onClick={(e) => { handleButtonClick(e.target.value) }}
                        >
                            {button}
                        </Button>
                    ))}
                    <Button variant="outlined" color="primary" sx={{
                        height: 64,
                        width: '100',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                        onClick={() => handleDelete()}
                    >
                        <Backspace />
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', color: 'primary.main' }}>
                    History
                </Typography>
            </Box>
        </Box>
    )
}


export default Calculator;