// Write your solution in this file!
const employee= {
    name: "Annie Grace Luna",
    streetAddress: "69 ur mom's house"
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
     employee[key]= value;
     return employee;
}
function deleteFromEmployeeByKey(employee,key) {
      const newEmployee={...employee}
      delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key]
    return employee
}