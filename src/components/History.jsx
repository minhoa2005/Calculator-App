import { Box, Typography } from '@mui/material'
import React from 'react'

export default function History({ history }) {

    return (
        <div>
            {history.length !== 0 ? history.map((h) => (
                <Box key={h.id} sx={{ width: '100', marginBottom: '5px' }} >
                    <Typography fontSize={'20px'} fontWeight={'bold'}>{h.currentInput} = {h.result}</Typography>
                </Box>
            )) : (
                <div>
                    <Typography>No history available</Typography>
                </div>
            )}
        </div>
    )
}
