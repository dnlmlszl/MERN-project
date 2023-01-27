const createJob = async (req, res) => {
    res.send("Create a job")
}
const deleteJob = async (req, res) => {
    res.send("Delete a job")
}
const getAllJobs = async (req, res) => {
    res.send("Get all jobs")
}
const updateJob = async (req, res) => {
    res.send("Update a job")
}
const showStats = async (req, res) => {
    res.send("Show job stats")
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats };