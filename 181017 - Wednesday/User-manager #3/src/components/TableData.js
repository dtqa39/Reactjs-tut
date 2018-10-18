import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


class TableData extends Component {
    mappingData = () => this.props.data.map((value, key) =>(
        <TableDataRow name={value.name} id={value.id} tel={value.tel} permission = {value.permission}></TableDataRow>
))
    render() {
        console.log(this.props.data);
        
        return (
            <div className="col">
            <table className="table table-striped table-hover table-inverse">
                <thead className="thead-inverse|thead-default">
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.mappingData()}
                </tbody>
            </table>
            </div>
        );
    }
}

export default TableData;