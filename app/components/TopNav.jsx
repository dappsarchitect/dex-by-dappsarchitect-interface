"use client"

import { useEffect } from "react"
import { useState } from "react"

import { useSDK } from "@metamask/sdk-react"
import { ethers } from "ethers"

function TopNav() {
    const [account, setAccount] = useState("")
    const [balance, setBalance] = useState("")

    const { sdk } = useSDK()

    async function getAccountInfo() {
        const ethereum = sdk.getProvider()
        const provider = new ethers.BrowserProvider(ethereum)
        const account = await provider.getSigner()
        const balance = await provider.getBalance(account)
        console.log(account)
        console.log(account.address, balance)
    }

    useEffect(() => {
        // connect to the blockchain here
        // setAccount("0x0...123")
        // setBalance("7000 ETH")
        if(sdk) {
            getAccountInfo()
        }
    })

    return(
        <nav className="topnav">
            <p>My Account: {account}</p>
            <p>My Balance: {balance}</p>
        </nav>
    )
}

export default TopNav
