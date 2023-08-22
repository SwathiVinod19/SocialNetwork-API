const connection = require("../config/connection")
const { User, Thought } = require('../models/index'); 
const { faker } = require('@faker-js/faker');


connection.on('error', (err) => err);

connection.once('open', async () => {
    await seedMockUsers();

    console.info('Seeding complete! 🌱');
    process.exit(0);
})

async function seedMockUsers() {
    try {

        // generate mock data
        for (let i = 0; i < 10; i++) {
            const username = faker.internet.userName();
            const email = faker.internet.email();

            await User.create({username,email});
           
        }
        const users = await User.find();
        const thoughtCount = 5;
        for (let i = 0; i < thoughtCount; i++) {
            const thoughtText = faker.lorem.sentence();
            const user = users[Math.floor(Math.random() * users.length)]; // Pick a random user

            await Thought.create({thoughtText,username: user.username });
        } 
    
            // save mock user data to the database
            console.log(`data created`);
        } catch (err) {
            console.error('Error seeding mock users', err);
        } 
};
