import "./App.css";
import React from "react";
import axios from "axios";
import InfoForm from "./components/InfoForm";
import InfoTable from "./components/InfoTable";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editdata: [],
    };
  }

  createData = data => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/info", data).then(res => {
        this.getall();
      });
    } else {
      axios.put("http://localhost:5000/info/update", data).then(res => {
        this.getall();
      });
    }
  };
  componentDidMount() {
    this.getall();
  }

  getall = () => {
    axios
      .get("http://localhost:5000/info")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  update = data => {
    this.setState({ editdata: data });
  };
  del = data => {
    const option = window.confirm(`Do u want to delete  :${data.Name}`);
    if (option) {
      axios
        .delete(`http://localhost:5000/info/delete/${data._id}`, data)
        .then(res => {
          console.log(res);
          this.getall();
        });
    }
  };
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <InfoForm mydata={this.createData} setform={this.state.editdata} />
          </div>
          <div className="col-6">
            <InfoTable
              data={this.state.data}
              setdata={this.update}
              del={this.del}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
