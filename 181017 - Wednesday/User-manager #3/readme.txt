User manager #3

Gồm 2 phần chính
Truyền dữ liệu trong file json xuống các row(component TableDataRow) của table (component TableData)
Truyền dữ liệu nhận được từ input search về app

1. Truyền dữ liệu trong file json xuống các row (từ app xuống component cấp 2)
app -> qua props -> component cấp 1 -> qua props-> component cấp 2
VD: Từ App xuống TableData xuống TableDataRow
//Ở app
	this.state = {
      		data: Data
    	}
	render(){
		return(
			<TableData data = {this.state.data}></TableData>
		)
	}

// Ở TableData
	mappingData = () => this.props.data.map((value, key) =>(
        	<TableDataRow name={value.name} id={value.id}></TableDataRow>
		)

	render(){
		return(
			<div>{this.mappingData()}</div>
		)
	}	
	
// Ở TableDataRow
	render(){
		return(
		<tr>
            		<td>{this.props.id}</td>
            		<td>{this.props.name}</td>
		</tr>
		)
	}

Flow:
App -> TableData: dùng props.data
TableData -> TableDataRow: props.name và props.name

Kết luận: 
	- Xử lý logic và xử lý dữ liệu đều do app.js đảm nhận
	- Các component chỉ thu thập dữ liệu để đẩy về app.js

2. Truyền dữ liệu nhận được từ input search về app (component về app)
App -> props -> component
Component -> tham số hàm -> app
//Ở FormSearch
	isChange = (event) => {console.log(event.target.value);
        	this.setState({
            	searchValue: event.target.value
        	});
    	}
	render(){
		return(
		   <input type="text" onChange = {(e) => {this.isChange(e)}} />
        	   <div className="btn" onClick = {(x) => this.props.search(this.state.searchValue)}> Search</div>
	)
	}

//Ở app
search = (v) => {
   console.log(v);
 }
render(){
return(
	 <FormSearch search = {(value) => this.search(value)}></FormSearch>
)
}

Flow:
this.state.searchValue là tham số được truyền qua hàm search(), hàm này qua props truyền ngược và thực thi tại app (hàm search khai báo cũng tại app.js)

Chi tiết xem tại src/components/(App1.js | AddUser1.js | FormSearch1.js), preview ở /image