User Manager
Học cách viết tương tác trong component và giữa các component với nhau

- Thiết lập 1 trang quản lý đơn giản có danh sách người dùng và các chức năng thêm người dùng mới.
- Viết 1 trang HTML thông thường, sau đó chuyển hết thành Component tương ứng như 181005 - Friday/git-html-to-react.
- Trang được chia thành 4 component gồm:
	+ Header
	+ 1 component tìm kiếm FormSearch: gồm 1 input và 1 button Search
	+ 1 component lưu danh sách dạng bảng TableData
	+ 1 component hiển thị form thêm người dùng mới AddUser, gồm 2 nút AddNew, Close Adding và một số input khác để điền thông tin người dùng.

1. Tương tác trong 1 component.
Trong component AddUser có 1 button Add user và 1 button Close adding.
- Điều khiển sao cho khi duyệt trang web, chỉ có button Add User hiện lên, khi click AddUser thì form AddUser hiển thị cũng nút Closing Adding, button AddUser ẩn đi
- Khi Click Closing Adding, button này cùng form sẽ bị ẩn đi, và button Add User hiển thị trở lại.

Cách xử lý:
- Lưu 1 biến vào state, khi biến nhận giá trị true thì return Add New jsx, khi biến nhận false thì return  Close button và form.
- Chỉ xử lý trong component AddUser

//Contructor
	this.state = {
            addUserForm : true
        }
//Component
	addUserFormShow = () => {
        	if(this.state.addUserForm === true){
            		return(//AddNew button);}
        	else{
            		return(
                		<div>
                    		//Close button and form jsx
                		</div>
            	);}
    		}

- Viết hàm thay đổi giá trị biến này mỗi lần Click vào mỗi button.
	changeAddUserForm = () => {
        	this.setState({addUserForm: !this.state.addUserForm});
    	}
và gán vào thuộc tính của 2 button
	<div className="btn btn-block btn-outline-info" onClick = {() => this.changeAddUserForm()}>Add new</div>

- Thực thi hàm tại render()
render() {
        return (
            <div className="col-3">
            	{this.addUserFormShow()}
            </div>
        );
    }


Chi tiết xem tại src/components/(App.js | AddUser.js | FormSearch.js)

