import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
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
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Moderator</td>
                    <td>
                    <div className="btn btn-warning edit"><i className="fa fa-edit " /> Edit</div>
                    <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Moderator</td>
                    <td>
                    <div className="btn btn-warning edit"><i className="fa fa-edit" /> Edit</div>
                    <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Moderator</td>
                    <td>
                    <div className="btn btn-warning edit"><i className="fa fa-edit" /> Edit</div>
                    <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Moderator</td>
                    <td>
                    <div className="btn btn-warning edit"><i className="fa fa-edit    " /> Edit</div>
                    <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>John Doe</td>
                    <td>123456789</td>
                    <td>Moderator</td>
                    <td>
                    <div className="btn btn-warning edit"><i className="fa fa-edit    " /> Edit</div>
                    <div className="btn btn-danger delete"><i className="fa fa-remove" />Delete</div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default TableData;