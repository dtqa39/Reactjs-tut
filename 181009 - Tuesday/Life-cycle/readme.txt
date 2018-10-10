Life Cycle
- Là vòng đời của 1 component
- Có 4 phần tương ứng với quá trình hoạt động
	+ init: Khởi tạo, đặt biến, lấy props, khai báo state
	+ mounting: Kết nối và hiển thị component ra trình duyệt
	+ update: thao tác với giá trị
	+ unmounting: hủy bỏ gắn kết
- React đã dựng sẵn các hàm tương ứng để ta sử dụng:
	+ mouting: componentWillMount(), componentDidMount()
	+ update: shouldComponentUpdate(nextProps, nextState) //return true or false,
		  componentWillUpdate(nextProps, nextState),
		  componentDidUpdate(prevProps, prevState),
		  render(), componentWillReceiveProps(nextProps)
	+ unmounting: componentWillUnmount()
- Thứ tự chạy các hàm
  * Chưa có update:
	1. componentWillMount()
	2. app render()
	3. component render()
	4. componentDidMount()
  * Có update
	1. shouldComponentUpdate(nextProps, nextState)//app
	2. nếu 1 false thì dừng, nếu 1 true thì sẽ chạy app render()
	3. componentWillReceiveProps(nextProps)//
	4. shouldComponentUpdate(nextProps, nextState)//component
	5. nếu 4 false thì dừng, 4 true thì componentWillUpdate(nextProps, nextState)//component
	6. render() //component
	7. componentDidUpdate(prevProps, prevState)//component
	8. componentDidUpdate(prevProps, prevState)//app

Phần phụ: 
     	Cách lấy giá trị thuộc tính của các thẻ bằng ref
		<input ref = {(data) => {this.middle = data}}/>
	Sử dụng:
		click = () => {console.log(this.middle.value);}

Chi tiết xem trong src/app.js và src/Example/Ex1.js

P/s: Phần react routing em có học được 1 phần nhưng em để gộp vào bài sau luôn cho gọn ạ, hì
	