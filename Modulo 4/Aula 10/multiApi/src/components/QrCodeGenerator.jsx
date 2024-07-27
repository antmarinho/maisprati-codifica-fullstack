import React, { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Title = styled.h2 `

    color: #333;
    text-align: center;

`

const Input = styled.input `

    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;

`

const QRContainer = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const QrCodeGenerator = () => {

    const [text, setText] = useState('')

  return (
    <Container>
        <Title>QR Code Generator</Title>
        <Input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        {text && (
            <QRContainer>
                <QRCode value={text} size={256}/>
            </QRContainer>
        )}
    </Container>
  )
}

export default QrCodeGenerator