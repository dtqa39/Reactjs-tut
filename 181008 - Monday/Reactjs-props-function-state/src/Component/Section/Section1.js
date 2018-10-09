import React, { Component } from 'react';

class Section1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      trangThai: 0
    }
  }

    thongbao = () => {alert("This is Edit")};
    thongbao1 = (x) => {alert(x)};

    renderButton = () =>(
          <div className="row">
            <div className="btn btn-group">
              <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
              <div className="btn btn-warning">Remove</div>
            </div>
          </div>
        )

    renderForm = () => (
          <div className="row">
            <div className="btn-group">
              <input defaultValue = {this.props.title} type="text" name="ten" className="form-control" />
            </div>
            <div className="btn-group">
              <div className="btn btn-success" onClick={() => this.saveClick()}> Save</div>
            </div>
          </div>
      )

    displayCheck = () => {
      if(this.state.trangThai === 0){
        return this.renderButton();
      }
      else{
        return this,this.renderForm();
      }
    }

    editClick = () => {
      this.setState({trangThai:1});
    }
    saveClick = () => {
      this.setState({
        trangThai: 0
      });
    }

    render() {
        return (
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 " + this.props.order2}>
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={this.props.link} alt="" />
              </div>
            </div>
            <div className={"col-lg-6 " + this.props.order1}>
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                {this.displayCheck()}
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Section1;