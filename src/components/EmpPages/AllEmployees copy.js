import React,{ useState } from 'react'
import { Paper,Toolbar, makeStyles, InputAdornment, TableCell, TableRow, TableBody } from '@material-ui/core';
import Controls from "../EmpComponents/controls/Controls";
//import { Search } from "@material-ui/icons";
import Search from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PageHeader from '../EmpComponents/PageHeader';
//import AddIcon from '@material-ui/icons/Add';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import EmployeeForm from './EmployeeForm';
import Popup from '../EmpComponents/Popup';
import useTable from '../EmpComponents/useTable';
import * as employeeService from '../EmpServices/employeeService'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


export default function AllEmployees() {
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [openPopup, setOpenPopup] = useState(false)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const headCells = [
    {id:'fullName', label:'Full Name'},
    {id:'email', label:'Email address'},
    {id:'mobile', label:'Mobile number'},
    {id:'deparment', label:'Department', disableSorting: true},
  ]

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
    })
}
  const {
            TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting
         } = useTable(records, headCells, filterFn)

  const classes = useStyles();
  
  return (
  <>
    <PageHeader
    title="New Employee"
    subTitle="Form design with validation"
    icon={<PeopleOutlineIcon fontSize="large" />}  />

    {/* <Paper className={classes.pageContent}>
        <EmployeeForm />
    </Paper> */}


   <Paper className={classes.pageContent}>
    <Toolbar>
        <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
                startAdornment: (<InputAdornment position="start">
                    <Search />
                </InputAdornment>)
            }}
            onChange={handleSearch}
        />
        <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
        />
    </Toolbar>
     <TblContainer>
        <TblHead />
        <TableBody>{
            recordsAfterPagingAndSorting().map(record =>(<TableRow key={record.id}> 
                                    <TableCell>{record.fullName}</TableCell>
                                    <TableCell>{record.email}</TableCell>
                                    <TableCell>{record.mobile}</TableCell>
                                    <TableCell>{record.department}</TableCell>
                                  </TableRow> ))}
        </TableBody>
     </TblContainer>
     <TblPagination />
    </Paper> 
     <Popup title='Employee Form' openPopup={openPopup} setOpenPopup={setOpenPopup}>
       <EmployeeForm />
     </Popup>
  </>
  )
}