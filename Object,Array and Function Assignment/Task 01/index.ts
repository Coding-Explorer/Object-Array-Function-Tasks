
                //////////////TASK 01////////////////////
/*Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName, 
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your 
friend list.*/

//Here's defining an object named people containing an empty array called friends.

const people={
  friends:[] as
  {
      firstName:string;
      lastName:string;
      id?:number;

  }[]
}
//Now Creating the three separate objects.
const friend1 = {
  firstName:"Meerab",
   lastName:"Farooq",
   id:1890
  };

const friend2 ={
  firstName:"Humaira",
  lastName:"Khan",
  id:3478
   };

const friend3 ={
  firstName:"Saad",
  lastName:"Jamil",
  id:1234
  };

//Now adding these friend objects to the friends array within the people object.
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

//Finally proceeding to see the evaluation/Output of the entire people object. 
console.log(people);