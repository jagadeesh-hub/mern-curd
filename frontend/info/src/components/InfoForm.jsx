import React from "react"
class InfoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            _id: "",
            Name: "",
            City: "",
            Age: "",
            isEdit: false
        }
    }

    infonchange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    infosubmit = (event) => {

        if (!this.state.isEdit) {
            const data = {
                isEdit: this.state.isEdit,
                Name: this.state.Name,
                City: this.state.City,
                Age: this.state.Age
            }
            this.props.mydata(data)
        } else {

            const data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                Name: this.state.Name,
                City: this.state.City,
                Age: this.state.Age
            }
            this.props.mydata(data)

        }
    }
    componentWillReceiveProps(props) {
        console.log(props.setform)
        if (props.setform._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setform._id,
                Name: props.setform.Name,
                City: props.setform.City,
                Age: props.setform.Age
            })

        }

    }

    render() {
        return (
            <form  onSubmit={this.infosubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name"
                        name="Name" value={this.state.Name} onChange={this.infonchange} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City"
                        name="City" value={this.state.City} onChange={this.infonchange} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="Number" className="form-control" placeholder="Enter Age"
                        name="Age" value={this.state.Age} onChange={this.infonchange} />
                </div>

                <button type="submit" className="btn btn-primary">{this.state.isEdit ? "Update" : "Create"}</button>
            </form >
        )
    }
}
export default InfoForm