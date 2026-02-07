import * as userService from './userService.js';

const testCRUD = async () => {
  try {
    console.log('--- Starting CRUD Test ---');

    const newUser = await userService.createUser(
      'Ankit Kesharwani',
      'ankitk@email.com'
    );
    console.log('User Created:', newUser.name);

    const allUsers = await userService.getAllUser();
    console.log(`Total Users:`, allUsers.length);

    const singleUser = await userService.getSingleUser(1);
    console.log(`Single User:`, singleUser.name);

    const updated = await userService.updateUser('New Name', newUser.id);
    console.log(`Updated User:`, updated.name);

    const deleted = await userService.deleteUser(newUser.id);
    console.log(`Deleted User:`, deleted.id);
  } catch (error) {
    console.log('Error Occured', error.message);
  }
};

testCRUD();
