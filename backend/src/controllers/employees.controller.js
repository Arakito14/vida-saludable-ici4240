const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save()
    res.send({message: 'employee created'})
}
employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'employee updated'})
}
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'employee deleted'})
}

module.exports = employeeCtrl;