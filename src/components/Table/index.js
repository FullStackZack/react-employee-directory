import React from 'react';
import "./style.css";
import API from '../../utils/API';


class Table extends React.Component {

    state = {
        search: "",
        employees: [],
        sort: [],
        order: "ascend"
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                this.setState({
                    employees: res.data.results
                })
            })
            .catch(err => console.log(err));
    }

    handleFilter(e) {
        this.setState({ search: e.target.value })
    }

    sortFirst(a, b) {
        if (a.name.first < b.name.first) {
            return -1;
        }
        if (a.name.first > b.name.first) {
            return 1;
        }
    }

    onClickFirstName = () => {
        if(this.state.order === "ascend") {
            this.setState({
                sort: this.state.employees.sort(this.sortFirst),
                order: "descend "
            })
        } else {
            this.setState({
                sort: this.state.employees.reverse(),
                order: "ascend"
            })
        }
    }

    sortLast(a, b) {
        if (a.name.last < b.name.last) {
            return -1;
        }
        if (a.name.last > b.name.last) {
            return 1;
        }
    }

    onClickLastName = () => {
        if(this.state.order === "ascend") {
            this.setState({
                sort: this.state.employees.sort(this.sortLast),
                order: "descend "
            })
        } else {
            this.setState({
                sort: this.state.employees.reverse(),
                order: "ascend"
            })
        }
    }

    render() {

        let filterEmployees = this.state.employees.filter(
            (employee) => {
                  {
                    return employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
                    employee.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
                } 
            }

        );
        console.log(filterEmployees);

        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td>
                                <h6>Search Directory</h6>
                                <div className="input-group input-group-default">
                                    <input type="text" placeholder="Find an employee" className="form-control" aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                        value={this.state.search} onChange={this.handleFilter.bind(this)} />
                                </div>

                            </td>
                            <td>
                                

                            </td>
                            <td>
                                <h6>Sort By:</h6>
                                <button type="button" className="btn btn-outline-warning"
                                    onClick={this.onClickFirstName}>First Name
                                </button> <button type="button" className="btn btn-outline-warning"
                                    onClick={this.onClickLastName}>Last Name
                                </button>
                            </td>
                        </tr>
                    </thead>


                        {filterEmployees.map((employee, i) => (
                            <tr key={i}>
                                <td>
                                    <img alt={employee.name.first} src={employee.picture.large} />
                                </td>
                                <td>
                                    <h5>{employee.name.first} {employee.name.last}</h5>
                                            Employee ID: {employee.id.value}
                                </td>
                                <td>
                                    <h5>Contact</h5>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                    </svg>
                                    <a href="#" className="link">
                                        {employee.email}
                                    </a><br></br>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    {employee.cell}
                                </td>
                            </tr>
                        ))}


                </table>
            </div>
        )
    }
}

export default Table;