import React from 'react';
import ListDisplay from './ListDisplay';


class ShiftList extends React.Component {
    render() {
       let empListJSX = this.props.shift.map((emp, i)=>{
        return <ListDisplay key = {i}
                            name = {emp.newEmp}
                            position = {emp.position}
                            points = {emp.points}
                            tipsEarned = {emp.tipsEarned} />
        })
    

        return(
            <ul>
            {empListJSX}
            </ul>
        )
    }
}


export default ShiftList;