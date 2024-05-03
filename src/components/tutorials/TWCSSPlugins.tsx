import vLogo from "../../assets/v-logo@2x.png";

export default function TWCSSPlugins() {
  return (
    <main className="font-[Lato] text-[12px] w-full h-screen flex justify-center items-center bg-[#fafafa]">
      <div className="card bg-white p-6 rounded-lg w-[340px] shadow-lg shadow-pink-200">
        <div className="header">
          <img src={vLogo} alt="" className="size-12" />
        </div>

        <div className="body">
          <h1 className="font-[800] text-xl">Sign up for free</h1>
          <p className="text-gray-400 text-[13px] mt-2">
            Livestream your matches on{" "}
            <span className="text-accent">Sentry</span>, the number one
            Streaming Platform globally.
          </p>

          <div className="inputs mt-4 space-y-2">
            <input
              type="text"
              className="w-full text-[13px] outline-none bg-gray-100 p-2 rounded-sm placeholder:text-gray-600"
              placeholder="Your email*"
            />
            <input
              type="text"
              className="w-full text-[13px] outline-none bg-gray-100 p-2 rounded-sm placeholder:text-gray-600"
              placeholder="Your password*"
            />
          </div>

          <div className="flex items-center mt-2 mb-3">
            <p className="text-gray-400">
              I have read and agreed to the{" "}
              <span className="text-accent">Terms and Conditions</span> and{" "}
              <span className="text-accent">Privacy Policy</span>{" "}
            </p>
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-1 accent-pink-500"
            />
          </div>

          <div className="btn">
            <button className="bg-accent text-[13px] text-white w-full p-2 rounded-md my-3">
              Create free account
            </button>
          </div>

          <div className="sign-in">
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-accent1 text-opacity-1">Sign In.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
