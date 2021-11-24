const express = require('express');
const router = express.Router();
const Web3 = require('web3')
require('dotenv').config(); 
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')


router.post('/balance', async (req, res, next) => {
    const { account } = req.body;
    try {
        const balance = web3.utils.fromWei(
            await web3.eth.getBalance(account)
        );
        res.status(200).json({
            Message : 'Balance fetched successfully!',
            Account_Number : account,
            Balance : balance
        })
    } catch (Error) {
        res.status(404).json({ Message : 'Account not found!' })
        console.log(Error) 
    }
})

module.exports = router;