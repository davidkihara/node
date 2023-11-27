
import {v4 as uuidv4} from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    console.log(users);
    res.send(`User with name ${user.firstName} ${user.lastName} has been added to the database`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send('Welcome');
}

export const getUser = (req, res)=>{
    const {id} = req.params.id;

    const foundUser = users.find((user)=>user.id === id);
    console.log(foundUser);
    res.send(foundUser);
}

export const deleteUser = (req, res)=>{
    const {id} = req.params.id;

    users = users.filter((user)=>user.id !== id);
    res.send(`User with id ${id} was removed`);
}

export const updateUser = (req, res) => {
    const {id} = req.params.id;
    const user = users.find((user)=>user.id === id);
    const {firstName, lastName, age} = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id ${id} was updated successfully`);
}