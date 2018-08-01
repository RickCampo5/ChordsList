const router = require('express').Router();
const Chords = require('../models/Chords')
const User = require('../models/User')

router.get('/',(req,res,next)=>{
    Chords.find()
    .then(chords=>{
        return res.status(200).json(chords)
    })
    .catch(e=>next(e))
})

router.get('/:userid',(req,res,next)=>{
    Chords.find({user:req.params.userid})
    .then(chords=>{
        return res.status(200).json(chords)
    })
    .catch(e=>next(e))
})

router.post('/', (req,res,next)=>{
    req.body.user = req.app.locals.user
    Chords.create(req.body)
    .then(chord=>{
        User.findByIdAndUpdate(req.app.locals.user.id, {$push:{chords:chord.id}})
        return res.status(200).json(chord)        
    })
})

router.get('/one/:id', (req,res,next)=>{
    Chords.findById(req.params.id)
    .then(chord=>{
        if(!chord) return res.status(404)
        return res.status(200).json(chord)
    })
    .catch(e=>next(e))
})

router.put("/:id", (req, res, next) => {
  Phone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(chord => {
      return res.status(202).json(chord);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.delete('/:id', (req, res, next) => {
    Phone.findByIdAndRemove(req.params.id)
        .then(chord => {
            res.status(200).json(chord)
        })
        .catch(e=>{
            res.status(500).json({message:"algo falló"})
            next(e)
        });
});

module.exports = router;