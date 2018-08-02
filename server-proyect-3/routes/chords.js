const router = require('express').Router();
const Chords = require('../models/Chords')
const User = require('../models/User')

//get all chords
router.get('/',(req,res,next)=>{
    Chords.find()
    .then(chords=>{
        return res.status(200).json(chords)
    })
    .catch(e=>next(e))
})

//Get al user chords
router.get('/:userid',(req,res,next)=>{
    Chords.find({user:req.params.userid})
    .then(chords=>{
        return res.status(200).json(chords)
    })
    .catch(e=>next(e))
})

//Create new song
router.post('/', (req,res,next)=>{
    req.body.user = req.app.locals.user
    Chords.create(req.body)
    .then(chord=>{
       return User.findByIdAndUpdate(req.app.locals.user.id, {$push:{chords:chord._id}})
       .then(user=>{
        return res.status(200).json(user)  
       })       
    })
})

//Get one Song
router.get('/one/:id', (req,res,next)=>{
    Chords.findById(req.params.id)
    .then(chord=>{
        if(!chord) return res.status(404)
        return res.status(200).json(chord)
    })
    .catch(e=>next(e))
})

//Search song
router.post('/search/songs',(req,res,next)=>{
    Chords.find({ $or:  [ { title: { $regex: req.body.regex, $options: 'i' } }, { author: { $regex: req.body.regex, $options: 'i' } } ] })
    .then(chords=>{
        return res.status(200).json(chords)
    })
    .catch(e=>next(e))
})

//Edit song 
router.put("/:id", (req, res, next) => {
  Chords.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(chord => {
      return res.status(202).json(chord);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

//Delete song
router.delete('/:id', (req, res, next) => {
    Chords.findByIdAndRemove(req.params.id)
        .then(chord => {
            User.findByIdAndUpdate(req.app.locals.user.id, {$pull:{chords:chord._id}})
            .then(user=>{
                res.status(200).json(user)
            })
        })
        .catch(e=>{
            res.status(500).json({message:"algo falló"})
            next(e)
        });
});

module.exports = router;