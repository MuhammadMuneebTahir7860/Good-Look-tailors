import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doAdd, doDelete, doUpdate, doGet } from '../Redux/slices/counterSlice';
export default function CounterComponent() {
    const crud = useSelector((state) => state.crud.todos);
    console.log(crud);
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('')
    const [newClass, setNewClass] = useState('')
    const [newSemester, setNewSemester] = useState('')
    const [id, setId] = useState('')
    const [flag, setFlag] = useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    // function addHandler(params) {
    //     if (title && description) {
    //         const data = {
    //             title,
    //             description,
    //         }
    //         dispatch(doAdd({ data }))
    //         setTitle('')
    //         setDescription('')

    //     }
    // }

    function editHandler(item) {
        setId(item?._id)
        setFlag(true)
        setTitle(item.title)
        setDescription(item.description)
    }

    function updateHandler(params) {
        if (title && description != '') {
            const data = {
                title,
                description,
                _id:id,
            }
            dispatch(doUpdate({ data}))
            setTitle('')
            setDescription('')
            setFlag(false)


        }
    }

    function addHandler(params) {
        if (title&&description!='') {
           const data={
            title,
            description,
           }
           dispatch(doAdd({data}));
           setTitle('')
           setDescription('')
        }
    }
    useEffect(() => {
        dispatch(doGet())
    }, [])
    return (
        <div>
            <input
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <input
                placeholder='Enter semester'
                value={newSemester}
                onChange={(e) => setNewSemester(e.target.value)}
                required
            />

            {
                flag ? <button onClick={() => updateHandler()}>Update</button> :
                    <button onClick={() => addHandler()}>Add</button>

            }
            {
                crud?.map((item, index) => {
                    return <div key={index}>
                        <p>{index + 1}:{item?.title}</p>
                        <p>{index + 1}:{item?.description}</p>
                        {/* <p>{index + 1}:{item.semester}</p> */}
                        <button onClick={() => dispatch(doDelete({ _id:item?._id }))}>Delete</button>
                        <button onClick={() => editHandler(item)}>Edit</button>
                    </div>

                })
            }

        </div>
    )
}
