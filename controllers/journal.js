const express = require('express'),
router = express.Router(),

router.get('/', (req, res) => {
   res.redirect('/journal')
})
   
router.get('/journal', (req, res) => {
   res.render('index)
})

router.post('/journal', (req, res) => {
   res.redirect('/journal')
})
   
router.get('/journal/new', (req, res) => {
   res.render('new')
})
   
router.get('/journal/:id', (req, res) => {
   res.render('show')
})

router.get('/journal/:id/edit', (req, res) => {
   res.render('edit')
})
   
router.put('/journal/:id', (req, res) => {
   res.redirect('/journal' + req.params.id)
})
  
router.delete('/journal/:id', (req, res) => {
   res.redirect('/journal)
})
   
module.export = router
