const router = require('express').Router();
const List = require('../models/List')

router.get('/',(req,res,next)=>{
    List.find()
    .then(lists=>{
        return res.status(200).json(lists)
    })
    .catch(e=>next(e))
})

router.post('/', (req,res,next)=>{
    List.create(req.body)
    .then(list=>{
        return res.status(200).json(list)
    })
})

router.get('/:id', (req,res,next)=>{
    List.findById(req.params.id)
    .then(list=>{
        if(!chord) return res.status(404)
        return res.status(200).json(list)
    })
    .catch(e=>next(e))
})

router.put("/:id", (req, res, next) => {
  List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(list => {
      return res.status(202).json(list);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.delete('/:id', (req, res, next) => {
    List.findByIdAndRemove(req.params.id)
        .then(list => {
            res.status(200).json(list)
        })
        .catch(e=>{
            res.status(500).json({message:"algo falló"})
            next(e)
        });
});

module.exports = router;