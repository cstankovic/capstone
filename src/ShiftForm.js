import React from 'react';


class ShiftForm extends React.Component{
    constructor (){
        super();
        this.state = {
            newEmp: '',
            position: '',
            points: 0,
            tipsEarned: 0
        }
        this.empData = this.empData.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.posUpdate = this.posUpdate.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
    }

    posUpdate(){
            if (this.state.position === 'Captain'){
                this.setState({
                    points: 6
                })
            }
            else if (this.state.position === 'Jr.Captain'){
                this.setState({
                    points:3
                })
            }
            else if (this.state.position === 'Sommelier'){
                this.setState({
                    points:5
                })
            }
            else if (this.state.position === 'Server Assistant'){
                this.setState({
                    points:2.5
                })
            }
        
    }
    empData (event){
        event.preventDefault();
        let emp = this.state;
        this.props.formSubmit(emp);
        event.target.value=''
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    changePositionHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        },()=>this.posUpdate());
    }

    render(){
        
        return(
            <div>
                <form onSubmit = {this.empData}>
                     <div className="form-group">
                        <label for="exampleFormControlSelect1">Employee Name</label>
                        <select onChange={(e)=>this.changeHandler(e)} className="form-control" id="exampleFormControlSelect1" name='newEmp'>
                            {this.props.name.map((curr, i)=>{
                                return <option>{curr.first_name}</option>
                                })};
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Position</label>
                        <select onChange={(e)=>this.changePositionHandler(e)} className="form-control" id="exampleFormControlSelect1" name='position'>
                            {this.props.position.map((curr, i)=>{
                                return <option>{curr.name}</option>
                            })};
                        </select>
                    </div>
                    <div className="input-group">
                            <input onChange={(e) =>this.changeHandler(e)} name ='tipsEarned' type="text" className="form-control" aria-label="Amount"></input>
                            <div className="input-group-append">
                                <span className="input-group-text">$</span>
                            <button type="submit" className="btn btn-primary"> Submit</button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default ShiftForm;