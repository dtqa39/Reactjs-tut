	React router (tiếp)

5. URL redirect
- Dùng để thiết lập chuyển trang, ví dụ trang sẽ chuyển đi đâu sau khi đăng nhập, vv
Tham khảo: https://reacttraining.com/react-router/web/example/auth-workflow

	#1. Tạo biến lưu trạng thái chuyển trang isRedirect trong contructor của trang cần thiết lập chuyển trang.
		constructor(props) {
        		super(props);
        		this.state = {
            		   isRedirect: false
        		  };
    			}
	#2. Điều khiển biến isRedicrect
	Khi biến isRedirect === true thì trang sẽ chuyển hướng sang 1 URL khác.
		if(this.state.isRedirect === true){
            		return <Redirect to="/duong_dan_moi" />;
        	}//ham them vao render()
	Lưu ý: import redirect
		import {
  			BrowserRouter as Router,Route,Link,Redirect,withRouter
		} from "react-router-dom";

	#3. Để thay đổi được giá trị của biến thì ta cần setState sau khi một sự kiện nào đấy xảy ra, vid dụ submit form, đăng nhập, vv
	//Ham trong component
		submitForm = (event) => {
        		event.preventDefault();
        		this.setState({isRedirect: true});
    		}
	//Goi ham rong render()
		<button type="submit" onClick = {(event) => this.submitForm(event)}>Send</button>

	//hàm event.preventDefault() dùng để chặn các thao tác mặc định, ví dụ như chuyển trang ngay khi bấm Submit

	#4. Lấy dữ liệu từ Form
	
		//Trong render()
		<input name="name" type="text" onChange = {(event) => this.isChange(event)}/>
		<input name="email" type="text" onChange = {(event) => this.isChange(event)}/>
	
		//Trong class của Component
		isChange = (event) => {
        		const name = event.target.name;
        		const value = event.target.value;
    		}
		//name và value sẽ tự động cập nhật mỗi lần giá trị của thẻ input thay đổi.

	#5. Lưu dữ liệu vào state
		Sử dụng Handling Muptiple Input
		Tức là xử lý đồng loạt khi các giá trị input thay đổi
		isChange = (event) => {
        		const name = event.target.name;
        		const value = event.target.value;
        		this.setState({
            			[name]: value
        		  })
    			}
		//Các giá trị nhận được khi thay đổi input sẽ được lưu vào state theo cú pháp mặc định:
			gia_tri_name_cua_input : gia_tri_value_cua_input

	#6. Lấy giá trị:
		//Lay gia tri tu input voi name = "email"
		console.log(this.state.email);

Chi tiết xem trong src/components/Contact.js

=> Hoàn thành router cơ bản bằng Reactjs