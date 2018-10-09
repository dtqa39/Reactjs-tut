1. Props
Sử dụng props để linh động giá trị cho các thuộc tính của thẻ
VD:
Trong section.js:
	<p> {this.props.title} </p>
Trong app.js:
	<section title="gia tri muon truyen vao"></section>

2.Sử dụng function viết tương tác
Trong section.js
	thongbao = (x) => {alert(x)};
Trong hàm render() của class section
	<div className="btn" onClick = {() => this.thongbao("haha")}> Click </div>

3. State
- Là biến trung gian hoạt động trong suốt quá trình thao tác với component
- Nó lưu trữ các biến và tham số cần thiết
- Là kiểu object, lưu trữ không giới hạn

Chi tiết trong  src/app.js và src/Component/Section/Section1.js