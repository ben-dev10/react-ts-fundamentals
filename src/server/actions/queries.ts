import {db} from "../db"
import {users} from "../db/schema"

export const addData = async (id:number, fullName:string, phone:string)=>{
    await db.insert(users).values({
        id:id,
        fullName:fullName,
        phone:phone,
    })
}

export const getData = async () => {
  const data = await db.select().from(users);
  return data;
};

// addData(1,"John Doe", "0555") 