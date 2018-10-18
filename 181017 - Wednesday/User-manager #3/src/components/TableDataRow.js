import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionCheck = () => {
        if(this.props.permission === 1){return("Admin");}
        else if(this.props.permission === 2){return("Moderator");}
        else{return("User");}
    }
    render() {
        return (
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>
                {this.permissionCheck()}
            </td>
            <td>
            <div className="btn btn-warning edit"><i className="fa fa-edit " /> Edit</div>
            <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
            </td>
        </tr>
        );
    }
}

export default TableDataRow;