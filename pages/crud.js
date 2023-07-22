import React, { useState } from 'react';



// export default function crud() {
//     const [todos, setTodos] = useState([{ name: "umair", class: "Bs", rollNo: "531" }])
//     const [newTodos, setNewTodos] = useState('')
//     const [newClass, setNewClass] = useState('')
//     const [newRollNo, setNewRollNo] = useState('')
//     const [flag, setFlag] = useState('')
//     const [ind, setInd] = useState('');
//     function addHandler(params) {
//         if (newTodos && newClass && newRollNo !== "") {
//             const data = {
//                 name: newTodos,
//                 class: newClass,
//                 rollNo: newRollNo
//             }
//             setTodos([...todos, data])
//             setNewTodos('')
//             setNewClass('')
//             setNewRollNo('')
//         }


//     }
//     function deleteHandler(index) {
//         const newArray = todos.filter((item, i) => {
//             if (index != i) {
//                 return item
//             }
//         })
//         setTodos(newArray)
//     }

//     function editHandler(item, index) {
//         setInd(index);
//         setNewTodos(item.name)
//         setNewClass(item.class)
//         setNewRollNo(item.rollNo)
//         setFlag(true)
//     }

//     function updateHandler() {
//         if (newTodos && newClass && newRollNo !== "") {
//             const data = {
//                 name: newTodos,
//                 class: newClass,
//                 rollNo: newRollNo
//             }
//             const newArray = todos.map((item, i) => {
//                 if (i == ind) {
//                     return data;
//                 }
//                 else {
//                     return item
//                 }
//             })
//             setTodos(newArray);
//             setFlag(false);
//             setNewTodos('')
//             setNewClass('')
//             setNewRollNo('')
//         }
//     }

//     return (
//         <div>
//             <input
//                 placeholder='Enter name'
//                 value={newTodos}
//                 onChange={(e) => setNewTodos(e.target.value)}
//             />
//             <input
//                 placeholder='Enter Class'
//                 value={newClass}
//                 onChange={(e) => setNewClass(e.target.value)}
//             />
//             <input
//                 placeholder='Enter Roll No'
//                 value={newRollNo}
//                 onChange={(e) => setNewRollNo(e.target.value)}
//             />
//             {
//                 flag ?
//                     <button onClick={updateHandler}>Update Task</button>
//                     :
//                     <button onClick={addHandler}>Add Task</button>
//             }
//             {
//                 todos.map((item, index) => {
//                     return (
//                         <div>
//                             <p>{index + 1} : {item.name}</p>
//                             <p>{index + 1} : {item.class}</p>
//                             <p>{index + 1} : {item.rollNo}</p>
//                             <button onClick={() => deleteHandler(index)}>Delete</button>
//                             <button onClick={() => editHandler(item, index)}>Edit</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }



export default function crud() {
    const [todos, setTodos] = useState([{ name: 'umair', class: 'bs', rollNo: '531' }])
    const [newName, setNewName] = useState('')
    const [newClass, setNewClass] = useState('')
    const [newRollNo, setNewRollNo] = useState('')
    const [flag, setFlag] = useState('')
    const [ind, setInd] = useState('')
    function editHandler(item, index) {
        setInd(index),
            setNewName(item.name)
        setNewClass(item.class)
        setNewRollNo(item.rollNo)
        setFlag(true)
    }
    function updateHandler() {
        if (newName && newClass && newRollNo != '') {
            const data = {
                name: newName,
                class: newClass,
                rollNo: newRollNo
            }
            const newArray=todos.map((item,i)=>{
if (ind==i) {
    re
}
            })
            setTodos([...todos,newName])
            setFlag(false),
            setNewName('')
            setNewClass('')
            setNewRollNo('')
        }
    }
    return (
        <div></div>
    )
}
