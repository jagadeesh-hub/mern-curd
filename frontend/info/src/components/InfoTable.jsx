import React from 'react'

const InfoTable = (props) => {
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
                {
                    props.data.map((item, index) => <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.City}</td>
                        <td><button className="btn btn-primary" onClick={e => props.setdata(item)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={e => props.del(item)}>Delete</button></td>



                    </tr>)
                }
            </thead>

        </table>
    )
}

export default InfoTable
