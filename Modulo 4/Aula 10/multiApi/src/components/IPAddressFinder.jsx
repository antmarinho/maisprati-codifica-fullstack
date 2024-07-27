import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

const ResultsContainer = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Button = styled.button `

    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {

        background-color: #0056b3;
    }

`

const IPAddressFinder = () => {

    const [ip, setIp] = useState('')
    const [ipData, setIpData] = useState(null)

    const findIp = async () => {

        try {

                const url = `https://ipinfo.io/${ip}/json`
                const response = await axios.get(url)

                setIpData(response.data)
            
        } catch (error) {
            
            console.log(error)
        }
    }

  return (
    <Container>
        <Title>Ip Address Finder</Title>
        <Input type='text' value={ip} onChange={(e) => setIp(e.target.value)} placeholder='Enter ip address' />
        <Button onClick={findIp}>Find IP</Button>
        {ipData && (
            <ResultsContainer>
                <p><strong>IP</strong> {ipData.ip}</p>
                <p><strong>Location</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
                <p><strong>ISP</strong> {ipData.org}</p>
            </ResultsContainer>
        )}
    </Container>
  )

}

export default IPAddressFinder