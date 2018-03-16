import React from 'react';

class Totals extends React.Component{
    render(){
        let pointsArr=[];
        let tipsArr=[];
        this.props.shift.map((curr, i)=>{
            pointsArr.push(curr.points);
            
            tipsArr.push(Number(curr.tipsEarned));
        })
       
      let totalPoints = pointsArr.reduce(function(accumulator, currVal) {
          return accumulator + currVal
        }, 0);

      let totalTips = tipsArr.reduce(function(acc, currVal) {
          return acc + currVal
        }, 0);
      

    
        return(
            <div>
                <div>
                Total Points in Pool =  {totalPoints}
                </div>
                <div>
                Total Tips in Pool = {totalTips}
                </div>
            </div>

        )
    }
};

export default Totals;