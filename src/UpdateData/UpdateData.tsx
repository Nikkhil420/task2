import { useState } from "react";
import styless from "./UpdateData.module.scss";

const UpdateData = () => {

    type userType = { name: string; age: number; city: string }; 

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [city, setCity] = useState<string>("");


 const userArrr:userType[] = [{ name: "test1", age: 25, city: "Nagpur" }];

 const [userArrr , setUserArrr] = useState<userType[]>(userArrr)

  

  const saveUserData = (): void => {
const newUserArr: userType[] = [...userArrr{name,age,city}];
setUserArrr(newUserArr)
  };

  const UserArrData = userArrr.map(userArrr => {
    return (
      <div>
        <p>name : {userArrr.name} </p>
        <p>Age : {userArrr.age} </p>
        <p>city : {userArrr.city} </p>
      </div>
    );
  });

  return (
    <div className={styless["mainCont"]}>
      <h1>User Details form</h1>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Age"
      />
      <br />
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <br />

      <button onClick={saveUserData}> Save </button>


{UserArrData}
      
    </div>
  );
};

export default UpdateData;
