const router = require('express').Router();
const List = require('../models/List')
const User = require('../models/User')

//get my lists of user
router.get('/:id',(req,res,next)=>{
    List.find({user:req.params.userid})
    .then(lists=>{
        return res.status(200).json(lists)
    })
    .catch(e=>next(e))
})

//get saved lists
router.get('/savedLists/:id', (req,res,next)=>{
    User.findById(req.params.id)
    .populate('lists')
    .then(user=>{
        return res.status(200).json(user)
    })
    .catch(e=>next(e));
})

//create list
router.post('/', (req,res,next)=>{
    req.body.user = req.app.locals.user
    List.create(req.body)
    .then(list=>{
        return User.findByIdAndUpdate(req.app.locals.user.id, {$push:{myLists:list._id}})
        .then(user=>{
            return res.status(200).json(user)
        })
    })
})

//get one list
router.get('/one/:id', (req,res,next)=>{
    List.findById(req.params.id)
    .then(list=>{
        if(!list) return res.status(404)
        return res.status(200).json(list)
    })
    .catch(e=>next(e))
})

//edit one list
router.put("/:id", (req, res, next) => {
  List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(list => {
      return res.status(202).json(list);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});


//Delete list
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