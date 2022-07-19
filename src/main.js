const express=require('express');
const app=express();
const routes=require('./routes');
const PORT=3000;
const {generateTemplate}=require('./services');

app.use(routes);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

generateTemplate();