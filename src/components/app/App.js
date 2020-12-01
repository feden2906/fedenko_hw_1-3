import React, {Component} from 'react';
import './App.css'
import Car from "../car/car";


class App extends Component {

    arrayCars = [
        {
            carId: 1, model: 'bentli', madeYear: 2015, power: 420, color: 'black', driver:
                {name: 'Max', age: 32, gender: 'man', experience: true}
        },
        {
            carId: 2, model: 'tesla:', madeYear: 2020, power: 355, color: 'pink', driver:
                {name: 'Eduard', age: 28, gender: 'man', experience: false}
        },
        {
            carId: 3, model: 'vaz', madeYear: 2010, power: 212, color: 'red', driver:
                {name: 'Alfred', age: 35, gender: 'man', experience: true}
        },
        {
            carId: 4, model: 'audi', madeYear: 2012, power: 263, color: 'white', driver:
                {name: 'Vika', age: 18, gender: 'woman', experience: false}
        },
        {
            carId: 5, model: 'niva', madeYear: 2005, power: 200, color: 'blue', driver:
                {name: 'Alina', age: 25, gender: 'woman', experience: true}
        },
        {
            carId: 6, model: 'opel', madeYear: 2015, power: 287, color: 'yellow', driver:
                {name: 'Anton', age: 27, gender: 'man', experience: true}
        },
        {
            carId: 7, model: 'zaz', madeYear: 2010, power: 154, color: 'black', driver:
                {name: 'Dima', age: 35, gender: 'man', experience: true}
        },
        {
            carId: 8, model: 'mitsubishi', madeYear: 2015, power: 312, color: 'yellow', driver:
                {name: 'Ann', age: 18, gender: 'woman', experience: false}
        },
        {
            carId: 9, model: 'alfaRomeo', madeYear: 2018, power: 385, color: 'brown', driver:
                {name: 'Adolf', age: 20, gender: 'man', experience: true}
        },
        {
            carId: 10, model: 'toyota', madeYear: 2003, power: 208, color: 'red', driver:
                {name: 'Lisa', age: 25, gender: 'woman', experience: false}
        },
    ];

    render() {
        return (
            <div className='center'>
                <h1><b>Таксопарк</b></h1>
                {
                    this.arrayCars.map((value, index) => {
                        let nameCls = 'yellow'
                        if (index % 2) {
                            nameCls = 'blue'
                        }
                        return <Car car={value} key={value.carId} newClass={nameCls}/>
                    })
                }

            </div>
        );
    }
}

export default App;