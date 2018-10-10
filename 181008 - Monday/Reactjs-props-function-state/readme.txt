1. Props
Sử dụng props để linh động nội dung thẻ và giá trị các thuộc tính của thẻ
VD:
Trong section.js:
	<p> Day la {this.props.title} </p>
Trong app.js:
	<section title="gia tri muon truyen vao"></section>
Kết quả: 
	Day la gia tri muon truyen vao

2.Sử dụng function viết tương tác
Trong section.js
	thongbao = (x) => {alert(x)};
Trong hàm render() của class section
	<div className="btn" onClick = {() => this.thongbao("haha")}> Click </div>
Kết quả:
	Khi Click vào button, message "haha" sẽ được hiển thị ra

3. State
- Là biến trung gian hoạt động trong suốt quá trình thao tác với component
- Nó lưu trữ các biến và tham số cần thiết
- Là kiểu object, lưu trữ không giới hạn

Chi tiết trong  src/app.js và src/Component/Section/Section1.js