import  Worker from "../models/Worker";

export const createWorker = async(req, res) => {
    
    const {name, lastname, age, profession, role_company} = req.body

    const newWorker = new Worker({name, lastname, age, profession, role_company})

    const workerSaved = await newWorker.save()

    res.status(201).json(workerSaved)
}

export const getWorkers = async(req, res) => {
    const workers = await Worker.find();
    res.status(200).json(workers)
}

export const getWorkerById = async(req, res) => {
    const worker = await Worker.findById(req.params.workerId);
    res.status(200).json(worker)
}

export const updateWorkerById = async(req, res) => {
    const updatedWorker = await Worker.findOneAndUpdate(req.params.workerId, req.body, {new: true});
    res.status(200).json(updatedWorker)
}

export const deleteWorkerById = async(req, res) => {
    const {workerId} = req.params
    await Worker.findByIdAndDelete(workerId);
    res.status(204).json()
}