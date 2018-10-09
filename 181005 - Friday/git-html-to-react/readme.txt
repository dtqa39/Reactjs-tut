Một số lưu ý khi chuyển từ file HTML sang Reactjs

1. Các file css, ảnh, thư viện bootstrap được đưa vào 1 thư mục public trong project.

2. Vì 1, khi dẫn link các tệp tin trên, nếu đường dẫn là tương đối thì phải thêm %PUBLIC_URL% vào trước đường dẫn.

3.Code HTML được chia theo Component, và phải được chuyển thành dạng JSX.

4. Return các component ở file app.js
- Nếu là Visual Code thì sẽ có cơ chế tự cập nhật import khi return, nhưng nếu không ta cần import component trước khi return

VD:
import Section1 from './Component/Section/Section1';

Sử dụng:
class App extends Component {
  render() {
    return (
      <div>
        <Section1></Section1>
      </div>
    );
  }
}

*Lưu ý:
Đoạn mã trong return() chỉ được phép có 1 block
VD:
//Đoạn mã đúng
return(
<div>
  ...
</div>
)

//Đoạn mã sai
return(
<div>...</div>
<div>...</div>
)

