// Write your solution in this file!
const employee ={
    name: 'zohir',
    streetadresss: 'Babasaad' ,
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newobj = {
        ...employee,
        [key]:value
    }
    return newobj
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }