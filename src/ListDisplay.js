import React from 'react';

class ListDisplay extends React.Component{
    render() {
        return(
            <div>
                <span> {this.props.name} </span>
                    <span>{this.props.position}</span>
                    <span> {this.props.points}</span>
                   <span> {this.props.tipsEarned}</span>
                
            </div>

        )
    }
};

export default ListDisplay;