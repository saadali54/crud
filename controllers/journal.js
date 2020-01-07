const express = require('express'),
router = express.Router(),
Journal = require('./models/journal')

//Root Route
router.get('/', (req, res) => {
   res.redirect('/journal')
})

//Index Route
router.get('/journal', (req, res) => {
   Journal.find({},  (err, result)   => {
      if(err){
         res.status(404).send(err.message)         
      }else{
         res.render('index, {journal:result})
      }
   }
})

//Create Route         
router.post('/journal', (req, res) => {
   Journal.create(req.body.journal,(err,result) => {
      if(err){
         res.status(404).send(err.message)         
      }else{
         res.redirect('/journal')
      }
   }
})

//New Route   
router.get('/journal/new', (req, res) => {
   res.render('new')
})

//Show Route   
router.get('/journal/:id', (req, res) => {
   Journal.findById(req.params.id,(err,result) => {
      if(err){
         res.status(404).send(err.message)         
      }else{
         res.render('show', {journal:result})
   } 
})

//Edit Route   
router.get('/journal/:id/edit', (req, res) => {
   Journal.findById(req.params.id,(err,result) => {
      if(err){
         res.status(404).send(err.message)     
      }else{
         res.render('edit', {journal:result})
      }
   }
})
 
//Update Route   
router.put('/journal/:id', (req, res) => {
   Journal.findByIdAndUpdate(req.params.id,(err,result) => {
      if(err){
         res.status(404).send(err.message)     
      }else{
         res.redirect('/journal/'+ req.params.id)
      }
   }
})
  
//Delete Route   
router.delete('/journal/:id', (req, res) => {
   Journal.findByIdAndDelete(req.params.id,(err,result) => {
      if(err){
         res.status(404).send(err.message)     
      }else{
         res.redirect('/journal')
      }
   }
})
   
module.export = router
