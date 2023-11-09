{


    // Problem 1
    type CheckStringOrNumber = string | number;
    const value = (value: CheckStringOrNumber) => {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * value;
        }
    };
    console.log(value("hello"));






    // Problem 2
    interface Person {
        address?: {
            city: string;
            street: string;
        };
        phone?: string;
    }

    function getAddressCity(person: Person): string | undefined {
        return person?.address?.city;
    }
    console.log(
        getAddressCity({
            address: {
                city: "Faridpur",
                street: "Bhanga",
            },
            phone: "017111111",
        })
    );











        // Problem 3
    class Cat { }

    function isCat(obj: any): obj is Cat {
        return obj instanceof Cat;
    }

    const randomObject: Cat = new Cat();

    if (isCat(randomObject)) {
        console.log("Yes, it's a cat.");
    } else {
        console.log("No, it's not a cat.");
    }








    // Problem 4
    function numberSum(mixedData: (number | string)[]): number {
        let total = 0;
        for (const item of mixedData) {
            if (typeof item === "number") {
                total += item;
            }
        }
        return total;
    }
    const result = numberSum([1, "two", 3, "four", 5]);
    console.log(result);








    // Number 5
    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver extends Car {
        name: string;
        licenseNumber: string;
    }

    function combineCarAndDriver(info: Driver): Driver {
        return { ...info };
    }

    const carInformation = {
        make: "Toyota",
        model: "Corolla",
        year: 2015,
        name: "John Doe",
        licenseNumber: "ABC123",
    };

    const carFinalData = combineCarAndDriver(carInformation);
    console.log(carFinalData);










    // Number 6
    function knowUnknown(param: unknown): void {
        if (
            Array.isArray(param) &&
            param.every((item) => typeof item === "number")
        ) {
            const sumNumber = (param as number[]).reduce((acc, num) => acc + num, 0);
            console.log(`Sum of numbers: ${ sumNumber }`);
        } else {
            console.error("Parameter is not an array of numbers");
        }
    }


    knowUnknown([1, 2, 3, 4, 5]);
    knowUnknown(["one", "two", "three"]);






    // Problem 7
    interface Product {
        name: string;
        price: number;
        quantity: number;
    }

    function TotalCost(products: Product[]): number {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    }

    const products = [
        {
            name: "Keyboard",
            price: 25,
            quantity: 1,
        },
        {
            name: "Mouse",
            price: 10,
            quantity: 2,
        },
    ];

    const totalCost = TotalCost(products);
    console.log(totalCost);

}