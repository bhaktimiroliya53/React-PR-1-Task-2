import { Component } from "react";

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allemp: this.props.emp
        }
    }

    render() {
        return (
            <>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>PHONE</td>
                            <td>COUNTRY</td>
                            <td>STATE</td>
                            <td>CITY</td>
                            <td>AREA</td>
                            <td>DEG</td>
                            <td>SALARY</td>
                            <td>DEPARMENT</td>
                        </tr>
                    </thead>
                    <tbody>    
                        {
                            this.state.allemp.map((val) => 
                                <tr key={val.empid}>
                                    <td>{val.empid}</td>
                                    <td>{val.empname}</td>
                                    <td>{val.empemail}</td>
                                    <td>{val.empphone}</td>
                                    <td>{val.empaddress.country}</td> 
                                    <td>{val.empaddress.state}</td>
                                    <td>{val.empaddress.city}</td>
                                    <td>{val.empaddress.area}</td>
                                    <td>{val.empdeg}</td>
                                    <td>{val.empsalary}</td>
                                    <td>{val.empdepartment}</td>

                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </>
        )
    }
}

export default View;