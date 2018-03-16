import react from 'react';
import ShiftForm from './ShiftForm';


class Home extends Component {
    constructor (){
        super();
        this.state ={
            employee:[{
                id: 1,
                first_name: 'Courtenay',
                last_name: 'Stankovic',
            },
            {
                id: 2,
                first_name: 'Jordan',
                last_name: 'Alessi',
            },
            {
                id: 3,
                first_name: 'Brittany',
                last_name: 'Barber',
            }],
            position: [{
                id:1,
                name: 'captain',
                maxPoints: 6,
            },
            {
                id: 2,
                name: 'sommelier',
                maxPoints: 5
            },
            {
                id: 3,
                name: 'Server Assistant',
                maxPoints: 2.5
            },
            {
                id: 4,
                name: 'JR. Captain',
                maxPoints: 3
            }],
            shift:[]
        }
    }
    render() {
      return (
        <div>
            <ShiftForm name={this.state.employee.first_name} />
          
        </div>
      );
    }
  }
  
  export default Home;