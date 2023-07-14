import React from 'react'

const KEYS = {
    employees: 'employees',
    employeeId: 'employeeID'
}

export const getDepartmentCollection=()=> ([
  {id:'1', title:'Development'},
  {id:'2', title:'Marketing'},
  {id:'3', title:'Accounting'},
  {id:'4', title:'Human Resources'},
])
export function insertEmployee(data){  
  let employees = getAllEmployees()
  if (data != null){
    data['id']=generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
  }
}

export function getAllEmployees(){
  if (localStorage.getItem(KEYS.employees)==null)
     localStorage.setItem(KEYS.employees,JSON.stringify([]))
  let employees = JSON.parse(localStorage.getItem(KEYS.employees))
  // map departmentId to department title
  let departments = getDepartmentCollection();
  return employees.map(x=>({ 
       ...x,
      department: departments[x.departmentId].title
    }))
}

function initStorage(key){
  if(key==KEYS.employees)
     if(localStorage.getItem(key)==null)
        localStorage.setItem(key,JSON.stringify([]))
  if(key==KEYS.employeeId)
    if(localStorage.getItem(key)==null)
        localStorage.setItem(key,'0')

}
function generateEmployeeId(){
    initStorage(KEYS.employeeId)
    var id =parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId,(++id).toString())
    return id
}