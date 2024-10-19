// Task 3: Object Property Manipulation - Create an object, and allow the user to add, remove, and update its properties dynamically.

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let obj = {};

const showMenu = () => {
    console.log("\nChoose an option:");
    console.log("1. Add a property");
    console.log("2. Update a property");
    console.log("3. Remove a property");
    console.log("4. Display the object");
    console.log("5. Exit");
};

const handleUserInput = (choice) => {
    switch (choice) {
        case '1':
            rl.question("Enter the property name: ", (key) => {
                rl.question("Enter the property value: ", (value) => {
                    obj[key] = value;
                    console.log(`Property ${key} added with value ${value}.`);
                    showMenu();
                });
            });
            break;
        case '2':
            rl.question("Enter the property name to update: ", (key) => {
                if (obj[key] !== undefined) {
                    rl.question("Enter the new value: ", (value) => {
                        obj[key] = value;
                        console.log(`Property ${key} updated to ${value}.`);
                        showMenu();
                    });
                } else {
                    console.log("Property does not exist.");
                    showMenu();
                }
            });
            break;
        case '3':
            rl.question("Enter the property name to remove: ", (key) => {
                if (obj[key] !== undefined) {
                    delete obj[key];
                    console.log(`Property ${key} removed.`);
                } else {
                    console.log("Property does not exist.");
                }
                showMenu();
            });
            break;
        case '4':
            console.log("Current object:", obj);
            showMenu();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please select an option from the menu.");
            showMenu();
            break;
    }
};

showMenu();
rl.on('line', handleUserInput);
