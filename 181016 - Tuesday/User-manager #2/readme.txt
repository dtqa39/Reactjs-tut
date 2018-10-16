<tiếp>

2.Tương tác giữa các component ngang cấp

2 button Add New và Closing Add không nằm ở component AddNew nữa mà nằm ở component FormSearch.
Muốn sử dụng 2 button này điều khiển form ở AddUser, phải thông qua component cấp cao hơn của cả 2. Ở đây là App.js
Nhắc lại:
- Tương tác giữa app và các component, sử dụng props.
	VD: Ở app.js render()
	<Component foo="value">
	Ở Component.js
		this.state = {
             	bar: foo
        	}
	console.log(this.state.bar);//value

Cách xử lý bài toán:
- Giữa app và form: Lưu 1 biến addUserForm ở state của app.js, truyển giá trị của biến qua props, form nhận và truyền vào 1 hàm hiển thị form, giá trị false thì form sẽ được hiển thị (không còn button ở đây, chỉ điều khiến form)
- Giữa app và 2 button: 
	+ Cũng truyền giá trị của addUserForm sang FormSearch qua props, FormSearch nhận giá trị và điều khiển xem sẽ hiển thị nút nào (hàm showButton)
	showButton = () => {
        	if(this.props.addUserForm){
            	return(<div className="btn btn-block btn-outline-info" onClick = {() => 						this.props.changeAddUserForm()}>Add new</div>);   
        	}
        	else{
            	return(<div className="btn btn-block btn-outline-secondary" onClick = {() => 						this.props.changeAddUserForm()}>Close Adding</div>);
        	}
    	}
	+ Trong mỗi nút đều có 1 thuộc tính onClick, hàm ở thuộc tính này sẽ truyền ngược lại qua props đến app để thực thi hàm thay đổi giá trị biến tại app.
	//Trong app.js
 	render() {
    	return (
      		<div className="App">
        	<Header></Header>
        	<div className="container">
        	<div className="row">
          	<FormSearch1 changeAddUserForm = {() => this.changeAddUserForm()} addUserForm=						{this.state.addUserForm}></FormSearch1>
          	<TableData></TableData>
          	<AddUser1 addUserForm={this.state.addUserForm}></AddUser1>
        	</div>
      		</div>
      		</div>
    	);
  	}

Flow chạy của chương trình:
- Biến addUserForm nhận giá trị ban đầu true, truyền đến FormSearch qua props.addUserForm, component này nhận giá trị và hiển thị nút AddUser qua hàm showButton.
- Khi nút AddNew được click, FormSearch truyền props.changeAddUserForm quay lại app.js, app.js thực thi hàm changeAddUserForm() tại app, làm thay đổi giá trị biến addUserForm thành false.

- Biến addUserForm lại qua props.addUserForm truyền đến component AddUser, component này nhận được giá trị false, so sánh trong hàm addUserFormShow rồi render ra phần form.

- Cùng lúc đó, biến addUserForm cũng qua props.addUserForm truyền ngược về FormSearch, hàm showButton thực thi, ẩn button AddNew và hiển thị button Close Adding.

Chi tiết xem tại src/components/(App1.js | AddUser1.js | FormSearch1.js)
	
