import Project from "../model/project.js";

// getAll
export const getAllproject = async (req, res) => {
    try {
        const project = await Project.find()
        res.json(project)
    } catch (err) {
        res.status(400).json({ message: "NO file is there" })
    }
}

// getbyid
export const getByIDproject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        if (!project)
            return res.status(400).json({ message: "Project not found" })
        res.json(project)
    }
    catch (err) {
        res.status(500).json({ message: "Faild to load" })
    }
}

// update
export const updatePro = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(project)
    } catch (err) {
        res.status(400).json({ message: "Cant update the project" })
    }
}

// delete
export const delPro = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id)
        res.json(project)
    } catch (err) {
        res.status(400).json({ message: "some thing went wrong" })
    }
}

// create
export const createPro = async (req, res) => {
    try {
        const project = await Project.create(req.body)
        res.status(200).json(project)

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Faild to add data" })
    }
}
