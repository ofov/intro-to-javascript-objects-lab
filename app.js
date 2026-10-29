const menuItems = ['Tea', 'Coffee', 'Sandwich', 'Cookie'];
console.log(menuItems[0])
console.log(menuItems[2])
console.log(menuItems.length)
console.log(menuItems[menuItems.length - 1])
console.log('------------------exercise 2------------------')
// exercise 2 

const waitingCustomer = ['Aisha', 'Omar', 'Noor']
waitingCustomer[1] = 'Ali'
waitingCustomer.push('Dana')
console.log(waitingCustomer.length)
let removedCustomer = waitingCustomer.pop()
console.log(removedCustomer)
console.log(waitingCustomer)

console.log('------------------exercise 3------------------')
// exercise 3

const drinks = ['water', 'Tea', 'Coffee', 'Juice']
for (let i = 0; i < drinks.length; i++) {
    console.log(`${i + 1}. ${drinks[i]}`)
}
console.log('------------------exercise 4------------------')

const prices = [2, 5, 3, 6, 4];
let totalPrice = 0
let expensiveItemCount = 0
prices.forEach((price) => {
    totalPrice += price;
    if (price >= 4) {
        expensiveItemCount++;
    }
})
console.log(`Total Price: ${totalPrice}`);
console.log(`Number of expensive items (Grater than or equal 4): ${expensiveItemCount}`);
console.log('------------------exercise 5------------------')
const cafe = {
    name: 'Campus cafe',
    location: 'Building A',
    seats: 24,
    isOpen: true
}
console.log(`${cafe.name} is located in ${cafe.location}`)
console.log(`Available seats ${cafe.seats}`)
console.log('------------------exercise 6------------------')

const drink = {
    name: 'Iced Coffee',
    price: 3,
    size: 'small',
    temporaryCode: 'TEMP-01',
};
drink.size = 'Large'
drink.price = drink.price + 1
drink.IsAvailable = true
delete drink.temporaryCode
console.log(drink)

console.log('------------------exercise 7------------------')
const order = {
    customerName: 'Mariam',
    itemName: 'Sandwich',
    price: 4,
    quantity: 3,
    isPaid: false,
};
let orderTotal = order.price * order.quantity

if (order.isPaid == true) {
    console.log("Ready to prepare")
} else {
    console.log('Waiting for payment')
}
console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`)
console.log(`Order total : ${orderTotal}`)
console.log('------------------ Test 2 (change isPaid) ------------------')

order.isPaid = true
if (order.isPaid == true) {
    console.log("Ready to prepare")
} else {
    console.log('Waiting for payment')
}
console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`)
console.log(`Order total : ${orderTotal}`)
console.log('------------------exercise 8------------------')
const studySession = {
    title: 'JavaScript Practice',
    room: 'Lab 2',
    topics: ['Variables', 'Arrays'],
};
console.log(studySession.topics[0])
studySession.topics.push('Objects')
console.log(studySession.topics.length)

studySession.topics.forEach((topic) => {
    console.log(topic)
})
studySession.room = 'Lab 3'
console.log(`${studySession.title} will take place in ${studySession.room}.`)
console.log(studySession.topics)

console.log('------------------exercise 9------------------')
const products = [
    { name: 'Tea', price: 2 },
    { name: 'Sandwich', price: 4 },
    { name: 'Cookie', price: 1 },
];
console.log(products[1].name)
products[1].price = 5
products.push({ name: 'Juice', price: 3 })
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} costs ${products[i].price} BD.`)
}
console.log('------------------exercise 10------------------')
const studyGroup = {
    name: 'JavaScript Crew',
    members: [
        { name: 'Aisha', completedHomework: true },
        { name: 'Omar', completedHomework: false },
        { name: 'Noor', completedHomework: true },
    ],
};
console.log(studyGroup.name)
console.log(studyGroup.members.length)
let completedCount = 0
studyGroup.members.forEach((member) => {
    if (member.completedHomework === false) {
        console.log(`${member.name} needs to finish the homework`)
    } else {
        completedCount++
    }
})
console.log(`completed homework: ${completedCount}`)
