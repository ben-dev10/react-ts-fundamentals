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


// Queries
async function makeQueries(){
  await db.insert(users).values({
    fullName: "🏁checkpoint 1: 🎉",
    phone:"0544"
  })
  const user = await db.query.users.findFirst()
  console.log(user)
}

makeQueries()