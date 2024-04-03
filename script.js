// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let formid = document.getElementById("addForm")

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE

formid.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let extension = document.getElementById("extension").value
    let email = document.getElementById("email").value
    let d = document.getElementById("department")
    let department = d.options[d.selectedIndex].text

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let selectedTable = document.getElementById("employees")
    let row = selectedTable.insertRow()


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDel = row.insertCell()


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let empID = document.createTextNode(id)
    cellID.appendChild(empID)

    let empName = document.createTextNode(name)
    cellName.appendChild(empName)

    let empExt = document.createTextNode(extension)
    cellExt.appendChild(empExt)

    let empEmail = document.createTextNode(email)
    cellEmail.appendChild(empEmail)

    let empDept = document.createTextNode(department)
    cellDept.appendChild(empDept)



    // CREATE THE DELETE BUTTON

    const delButton = document.createElement('button')

    delButton.textContent = 'x';
    delButton.className = "btn btn-danger"
    delButton.addEventListener('click', deleteEmp)
    cellDel.appendChild(delButton);


    // RESET THE FORM
    formid.reset();


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count = count + 1
    let countid = document.getElementById("empCount");
    countid.textContent = "(" + count + ")"

})

// DELETE EMPLOYEE

function deleteEmp(e) {
    let choice = confirm("Are you sure you want to delete this employee record?")
    if (choice == true) {
        document.getElementById("employees").deleteRow(e.target.parentNode.parentNode.rowIndex)
        let countid = document.getElementById("empCount");
        count = count - 1
        countid.textContent = `( ${count} )`
    }
}

