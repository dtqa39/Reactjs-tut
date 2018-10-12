React-router <tiếp>

	Hàm map() trong React
	- Tương đương hàm foreach, duyệt từng phần tử và xử lý từng phần tử ấy.
		VD: var arr=[1,2,3,4];
			var arr2 = arr.map((value, key) => "Gia tri nhan doi la " + value*2 + "voi chi so la " + key);
			//(value, key) có thể thay bằng (x, y),(a,b)...
			//Thứ tự truyền: (Giá trị phần tử, chỉ sổ của phần tử đó)
			console.log(arr2);
			//Gia tri nhan doi la 2 voi chi so la 0
			//Gia tri nhan doi la 4 voi chi so la 1
			//Gia tri nhan doi la 6 voi chi so la 2
			//Gia tri nhan doi la 8 voi chi so la 3
	- Đây là hàm thường xuyên được sử dụng khi xử lý dữ liệu trong react

Tiếp phần react router

3. Truyền tham số
	#1. Những phần tử có cấu trúc HTML giống nhau được import lại theo kiểu component.
	#2. Tạo file .json để chứa dữ liệu cần truyền vào
	#3. Import file .json vào component cần render() dữ liệu
		VD: file data.json
		import data from './data.json';
	#4. Truyền dữ liệu
		- Cách thông thường:
			<p>{data[1].icon}</p>// lấy giá trị của icon trong phần tử thứ nhất của data
		- Cách xét duyệt tất cả phần tử:
		{data.map((value, key) => (<p>{value.icon}</p>)} 
		
4. Dựng slug cho URL
- slug: hiểu đơn giản là đường dẫn thân thiện
- tạo slug tức là chuyển đường dẫn thành kiểu dễ đọc và dễ tìm kiếm trên google
VD:
https://stackabuse.com/day-la-mot-duong-dan-kieu-slug.123/
https://stackabuse.com/đây%là%đường%dẫn%rất%khó%nhìn/

Để dựng slug cho URL, ta dùng hàm chuyển đổi (hàm tự viết)
VD:
toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
        
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
	kết quả:
	toSlug("tên tiêu để bài báo"); //ten-tieu-de-bai-bao
	
Sau khi dựng được slug, ta có thể lấy ID của URL , để truyền nội dung từ file .json theo ID tương ưungs
Tham khảo: https://reacttraining.com/react-router/web/example/url-params
	#1. Ở file RoutingURL, thay đổi path của Route mà ta muốn dựng slug:
		VD: "/feature/:slug.:id"
		"/feature/bai-viet.1" thì ta sẽ có slug: "bai-viet", id: "1"
	#2. Lấy giá trị slug và id
		//Có thể dùng hàm console.log(this.props) để kiểm tra
		slug: this.props.match.params.slug
		id: this.props.match.params.id
	#3. Import file json tại component cần render nội dung theo ID
	#4. So sánh this.props.match.params.id với ID trong file.json để render trang
	
Lưu ý: typeof(this.props.match.params.id);// string
	   nên khi so sánh với giá trị id trong file json cần lưu ý sử dụng "===" hay "=="
	   Ngoài ra, có thể xem xét sử dụng hàm parseInt,...

Chi tiết xem ở src/component và src/Router