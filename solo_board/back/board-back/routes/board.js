var express = require('express');
var router = require('express').Router();


const test = () =>{
  console.log('라우팅')
}

router.post('/todo', async (req, res, next)=>{
    await res
})  


module.exports = test;
