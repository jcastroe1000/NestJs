import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            "id": 1,
            "marca": "Toyota",
            "modelo": "Corolla"
        },
        {
            "id": 2,
            "marca": "Honda",
            "modelo": "Civic"
        },
        {
            "id": 3,
            "marca": "Ford",
            "modelo": "Mustang"
        },
        {
            "id": 4,
            "marca": "Chevrolet",
            "modelo": "Camaro"
        },
        {
            "id": 5,
            "marca": "Nissan",
            "modelo": "Altima"
        },
        {
            "id": 6,
            "marca": "BMW",
            "modelo": "Serie 3"
        },
        {
            "id": 7,
            "marca": "Mercedes-Benz",
            "modelo": "Clase C"
        },
        {
            "id": 8,
            "marca": "Volkswagen",
            "modelo": "Golf"
        },
        {
            "id": 9,
            "marca": "Mazda",
            "modelo": "CX-5"
        },
        {
            "id": 10,
            "marca": "Hyundai",
            "modelo": "Elantra"
        },
        {
            "id": 11,
            "marca": "Hyundai",
            "modelo": "Elantra"
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        //return this.cars[id];
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not exist`);
        return car;

    }


}
