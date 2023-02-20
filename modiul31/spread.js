const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const user2 ={
  ...user,
  name:"riya"
}
console.log(user2);

const friutes =["mango","apple"]
const updateFriutes = [
    ...friutes ,"banana"
]
console.log(updateFriutes);