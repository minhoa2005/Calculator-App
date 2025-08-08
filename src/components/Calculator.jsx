import { Backspace } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import evaluate from "../logic/logic";

const Calculator = () => {

    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);
    const [expression, setExpression] = useState("");
    const [currentInput, setCurrentInput] = useState("");
    const getButton = () => {
        const buttons = [];
        for (let i = 0; i < 10; i++) {
            buttons.push(i);
        }
        buttons.push('+', '-', '×', '÷', '=');
        return buttons;
    }
    //1. su dung split de tach cac ky tu trong chuoi, split(expression), xong do se tinh toan 2 so va dua ra ket qua
    //cac ky tu nguoi dung nhap se luu vao currentInput, mot khi nhan vao mot nut, currentInput se duoc cap nhat
    //kiem tra xem currentInput co chua ky tu nao khong, neu co thi se thuc hien tinh toan, khong thi se cap nhat currentInput
    //neu nhan vao nut =, cap nhat ket qua ()


    //2. kiem tra xem value co phai la 1 dau khong, neu khong phai thi xe tinh toan lai voi so moi nhap vao. Neu la mot dau thi
    // se lau result de tinh toan.
    const handleButtonClick = (value) => {
        setCurrentInput((prev) => {
            let newInput = prev;
            if (prev.length === 0 || prev === "0" || !isNaN(value)) {
                if (value === '=') {
                    return prev;
                }
                else if (value === '+' || value === '×' || value === '÷') {
                    setExpression(value);
                    newInput = "0" + value;
                } else {
                    newInput = prev + value;
                }
            }
            else if (['+', '×', '÷', '-'].includes(value)) {
                setExpression(value);
                if (prev.endsWith('+') || prev.endsWith('×') || prev.endsWith('÷') || prev.endsWith('-')) {
                    newInput = prev.slice(0, prev.length - 1) + value;
                } else {
                    newInput = prev + value;
                }
            } else {
                newInput = prev + value;

            }
            if (!newInput.endsWith('+') && !newInput.endsWith('×') && !newInput.endsWith('÷') && !newInput.endsWith('-')) {
                const result = evaluate.calculate(newInput);
                setResult(result);
            }
            console.log(result)
            return newInput;
        });

    }
    const handleDelete = () => {
        setCurrentInput((prev) => {
            const newInput = prev.slice(0, prev.length - 1);
            if (newInput.endsWith('+') || newInput.endsWith('-') || newInput.endsWith('×') || newInput.endsWith('÷')) {

                setExpression('');
            }
            else {
                const res = evaluate.calculate(newInput, expression);
                setResult(res);
            }
            return newInput;
        });
        if (currentInput.length <= 1) {
            setResult();
            return;
        }
    }
    return (
        <Box sx={{ display: 'flex', gap: 4, p: 4 }}>
            <Box>
                <Typography align="right" fontSize={result ? 30 : 64} fontWeight={'bold'} color={result ? "textDisabled" : ''}>
                    {currentInput || '0'}
                </Typography>
                {(result && !result.includes('NaN')) && (
                    <Typography align="right" fontSize={64} fontWeight={'bold'}>
                        {result || '0'}
                    </Typography>
                )}
                { }
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
                            onClick={(e) => {
                                handleButtonClick(e.target.value);
                            }}
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
        </Box >
    )
}


export default Calculator;