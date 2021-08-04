import React, { useState, useEffect } from 'react'
import axios from "axios"
const TableInfo = () => {

    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/info").then(res => {
            console.log(res)
            setinfo(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (

        <table className="table">
            <thead>
                <tr>

                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>

                </tr>
            </thead>
            <tbody>{
                info.map((item, index) => <tr key={index}>

                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.City}</td>
                    <td><button className="btn btn-primary">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>)
            }



            </tbody>
        </table>
    )
}
export default TableInfo