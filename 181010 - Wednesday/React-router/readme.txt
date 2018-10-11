React Router

- Dùng để điều hướng các trang mà không cần load lại
- Dùng để làm SPA - Single Page App

Gồm 5 phần chính:
1. Tạo giao diện
2. Điều hướng kiểu SPA
3. Truyền tham số
4. Dựng slug cho URL
5. Router redirect

Cụ thể từng phần như sau:

1. Tạo giao diện
- Dựng giao diện sử dụng HTML, CSS, các thư viện thông thường//gọi trang này là trang giao diện
2. Điều hướng
	#1Tạo 1 project mới bằng lệnh "create-react-app" và "npm start"
	#2. Trong thư mục src, tạo thư mục component, các component chính của trang web (trang web mà ta đang xây dựng) sẽ được lưu trữ tại đây.
		Trong thư mục src, tạo thư mục CSS, chuyển các file app.css và index.css vào thư mục này, đây là nơi lưu trữ css của trang web
	#3. Copy code css của trang giao diện sang file css của trang web.
	#4. Tạo các component chính của trang ở folder component, những component mà sẽ giữ nguyên khi điều hướng, chuyển đổi HTML từ trang giao diện sang JSX cho các component,sau đấy import vào app.js như thông thường
	#5. Chuyển phần đường dẫn thư viện từ trang giao diện sang trang index.html (folder public), thêm %PUBLIC_URL% nếu là đường dẫn tương đối (tương tự khi chuyển 1 trang HTML sang Reactjs thông thường)
	#6. Tạo các component điều hướng (phần mà sẽ thay đổi khi điều hướng), có bao nhiêu trang điều hướng thì sẽ có cùng số đó component
	#7. Cài đặt react-router-dom
		npm install --save react-router-dom

Phần tiếp theo sẽ được làm theo hướng dẫn có trong document của react router tại địa chỉ:
https://reacttraining.com/react-router/web/guides/quick-start

	#8. Tạo folder router trong folder src và tạo file RouterURL.js
	#9. Trong file RouterURL.js, import BrowserRouter
		import { BrowserRouter as Router, Route, Link } from "react-router-dom";
	#10. Tạo class như component thông thường, nhưng return các thẻ Route
		class RoutingURL extends Component {
    		render() {
        		return (
                	<div>
                		<Route exact path="/" component={Header} />
                		<Route path="/download" component={Download} />
                		<Route path="/feature" component={Feature} />
                		<Route path="/contact" component={Contact} />
                	</div>
        		);
			}}
		path: đường dẫn khi điều hướng
		component: component tương ứng với đường dẫn sẽ điều hướng
		Vì có sử dụng các component nên ta phải import các component vào file này.
	#11. File app.js bây giờ đang return 1 div chứa các component chính, không thay đổi khi điều hướng. Để sử dụng điều hướng, tại đây ta sẽ import component RouterURL đã viết ở #9 #10, import BrowserRouter, đồng thời bao phần div sẽ return bằng 1 thẻ <Router>, sau đấy thêm thẻ <RoutingURL> vào vị trí mà sẽ là chỗ thay đổi mỗi lần điều hướng:
             File app.js sẽ có dạng:

		import RoutingURL from '../Router/RoutingURL';
		import { BrowserRouter as Router, Route, Link } from "react-router-dom";

		class App extends Component {
  		render() {
    		return (
      		<Router>
          	<div className="App">
          	<div id="page-top">
            	<Nav></Nav>
            	<RoutingURL></RoutingURL>{/* Đây chính là chỗ sẽ thay đổi khi điều hướng */}
            	<Footer></Footer>
          	</div>
          	</div>
        	</Router>
        	);
        	}}
		export default App;
	#12. Đến component chưa class return phần code jsx mà sẽ là nơi thao tác giao diện với điều hướng, ví dụ ở đây là Nav.js, import BrowserRouter, nơi chứa thư viện link, thư viện giúp ta mỗi lần chuyển trang sẽ không cần load lại.
		import { BrowserRouter as Router, Route, Link} from "react-router-dom";
	     sau đó thay đổi code JSX của phần thao tác giao diện điều hướng, cụ thể

	     Trước:
		<ul className="navbar-nav ml-auto">
                      <li>
                         <a href="download.html">Download</a>
                      </li>
                      <li>
                          <a href="feature.html">Feature</a>
                      </li>
                      <li>
                          <a href="contact.html">Contact</a>
                      </li>
                 </ul>

	     Thay đổi thành:
		<ul className="navbar-nav ml-auto">
                      <li>
                         <Link to="/download">Download</Link>
                      </li>
                      <li>
                          <Link to="/feature">Feature</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                 </ul>

	     *Thẻ <a> chuyển thành thẻ <Link>, thuộc tính href chuyển thành thuộc tính to, giá trị thuộc tính to là đường dẫn khi điều hướng.
Hoàn thành cơ bản phần điều hướng kiểu SPA bằng react router

Phần phụ: Có thể import thêm thư viện NavLink, nó hỗ trợ 1 số thuộc tính khi tương tác giao diện, ví dụ active, ..., tham khảo cách dùng tại https://reacttraining.com/react-router/web/api/NavLink

Lưu ý:
Khi tạo các folder trong folder src và di chuyển vị trí các file mặc định, cần lưu ý thay đổi luôn đường dẫn để import các file đấy trong các file khác.
VD: Thay đổi app.css sẽ thay đổi đường dẫn của nó trong app.js, hoặc thay đổi app.js sẽ phải import lại trong index.js

Bug:
Lỗi đường dẫn khi thay đổi vị trí các file css, cả trong src, cả từ trang giao diện sang trang web (đã fix)
Lỗi giao diện khi sử dụng thư viện NavLink, 2 phần tử cùng active 1 lúc.

Chi tiết xem ở src/component và src/Router
