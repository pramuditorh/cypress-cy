const express=require('express');
const {runCypressSvc, testSvc}=require('./services');
const router=express.Router();

router.get('/', testSvc);

router.get('/run', runCypressSvc);

module.exports=router;