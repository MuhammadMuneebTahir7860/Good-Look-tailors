import React, { useState } from 'react';
// export default function crud() {
//     const [todos, setTodos] = useState([
//         {
//             name: "umair",
//             class: "Bs",
//             semester: "8th"
//         }
//     ])
//     const [newtodos, setNewtodos] = useState("")
//     const [newClass, setNewClass] = useState("")
//     const [newSemester, setNewSemester] = useState("")

//     function addHandler(params) {
//         if (newtodos && newClass && newSemester !== '') {
//             const data = {
//                 name: newtodos,
//                 class: newClass,
//                 semester: newSemester,
//             }
//             setTodos([...todos, data])
//             setNewtodos('')
//             setNewClass('')
//             setNewSemester('')
//         }
//     }

//     function deleteHandler(index) {
//         const newArray=todos?.filter((item,i)=>{
//             if(index!=i){
//                 return item;
//             }
//         })
//         setTodos(newArray)
//     }
//     return (
//         <div style={{ width: "100%" }}>

//             <input
//                 style={{ width: "150px", }}
//                 placeholder='Enter Name'
//                 value={newtodos}
//                 onChange={(e) => setNewtodos(e.target.value)}
//             />
//             <input
//                 style={{ width: "150px", }}
//                 placeholder='Enter Class'
//                 value={newClass}
//                 onChange={(e) => setNewClass(e.target.value)}
//             />
//             <input
//                 style={{ width: "150px", }}
//                 placeholder='Enter Semester'
//                 value={newSemester}
//                 onChange={(e) => setNewSemester(e.target.value)}
//             />
//             <button style={{ width: "150px", }} onClick={addHandler}>Add</button>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name :</th>
//                         <th>Class :</th>
//                         <th> Semester :</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         todos.map((item, index) => {
//                             return (

//                                 <tr>
//                                     <td>{index + 1} : {item.name}</td>
//                                     <td>{index + 1} : {item.class}</td>
//                                     <td>{index + 1} : {item.semester}</td>
//                                     <td><button onClick={()=>deleteHandler(index)}>Delete</button></td>
//                                 </tr>

//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }


export default function crud() {
    const [todos, setTodos] = useState([{
        name: "umair",
        class: "12th"
    }])
    const [newTodos, setNewTodos] = useState('')
    const [newClass, setNewClass] = useState('')
    function addHandler(params) {
        if (newTodos && newClass !== '') {
            const data = {
                name: newTodos,
                class: newClass
            }
            setTodos([...todos, data])
            setNewTodos('')
            setNewClass('')
        }
    }
    function deleteHandler(index) {
        const newArray=todos.filter((item,i)=>{
            if (index!=i) {
                return item
            }
        })
        setTodos(newArray)

    }
    return (
        <div>
            <input

                placeholder='Enter Name'
                value={newTodos}
                onChange={(e) => setNewTodos(e.target.value)}
            />
            <input

                placeholder='Enter Class'
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
            />
            <button onClick={addHandler}>Add</button>

            {
                todos?.map(( item,index) => {
                    return (
                        <div key={index}>
                            <p>{index + 1} : {item.name}</p>
                            <p>{index + 1} : {item.class}</p>
                            <button onClick={()=>deleteHandler(index)}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}
