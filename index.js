const express = require('express')
const app = express()
const PORT = 5000
const TransactionRouter = require('./api/routes/transactions')
const BalanceRouter = require('./api/routes/balances');
const ConfirmationRouter = require('./api/routes/Confirmation')
require('dotenv').config();
require('./config/database').connect() 


app.use(express.json())

app.use('/api', TransactionRouter);
app.use('/api', BalanceRouter);
app.use('/api', ConfirmationRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});