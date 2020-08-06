const AppError = require('errors-handler/appError');
const catchAsync = require('./catchAsync')


exports.createOne = Model => {
    return catchAsync(async (req, res, next) => {
        const newDoc = await Model.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newDoc
        })
    })
}

exports.getAll = (Model) => {
    return catchAsync(async (req, res, next) => {
        const docs = await Model.find()
        res.status(200).json({
            status: 'success',
            results: docs.length,
            data: docs
        })
    })
}

exports.getOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        let doc = await Model.findById(req.params.id)

        if (!doc) return next(new AppError('Invalid document id !', 404))

        res.status(200).json({
            status: 'success',
            data: doc
        })
    })
}


exports.updateOne = Model => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        // let doc = await Model.findById(req.params.id)
        // doc = { ...req.body }
        // await doc.save() 

        if (!doc) return next(new AppError('Invalid document id !', 404))

        res.status(201).json({
            status: 'success',
            data: doc
        })
    })
}

exports.deleteOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) return next(new AppError('Invalid document id !', 404))

        res.status(204).json({
            status: 'success',
            data: 'document deleted succesfully'
        })
    })
}
