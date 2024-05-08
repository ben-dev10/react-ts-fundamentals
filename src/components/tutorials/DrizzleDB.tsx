// import { addData } from "../../server/actions/queries";

//FIXME: fix Buffer error

export default function DrizzleDB() {
  // async function handleBtnClick() {
  //   try {
  //     //   const data2 = await getData();
  //     const data2 = await addData(1, "John", "233");
  //     console.log(data2);
  //     return data2;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <main className="h-screen w-screen grid place-items-center">
      <div className="drizzle-app min-w-[300px] max-w-[400px] bg-neutral-700 p-4 shadow-xl">
        <div className="">
          <p className="text-neutral-400 font-semibold">
            Display data from server
          </p>
        </div>
        <div className="output mt-3">
          <p className="text-[12px] font-bold">Output:</p>
          <div className="w-full p-4 bg-neutral-800 mt-1">
            {/* {data? (
              <div className="">
                {data.id}
              </div>
            ) : (
              <p className="text-center text-[12px] text-neutral-500">
                "No data"
              </p>
            )} */}
          </div>
          <button
            // onClick={handleBtnClick}
            className="p-2 mt-3 text-[12px] bg-red-500 text-white rounded-md"
          >
            Get data
          </button>
        </div>
      </div>
    </main>
  );
}
