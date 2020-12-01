import React, {Component} from 'react';
import './car.css'

class Car extends Component {


    render() {
        console.log(this.props)
        let {car:{carId, model, madeYear, power, color, driver: {name, age, gender, experience}}, newClass} = this.props;
        return (
            <div className={newClass}>

                <div>
                {<h3><b>Car #{carId} - {model}</b></h3>}
                {<h3>{madeYear} - {power} - {color}</h3>}
                {<h3><b>Бомбила {name}</b></h3>}
                {<h3>{age} - {gender} - {experience.toString()}</h3>}
                </div>
            </div>
        );
    }
}

export default Car;