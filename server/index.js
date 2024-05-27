import express from 'express'
import cors from 'cors';

const app = new express();

app.use(cors())
app.use(express.json())




app.listen(process.env.PORT || 5000, () => {
    console.log("connected");
});