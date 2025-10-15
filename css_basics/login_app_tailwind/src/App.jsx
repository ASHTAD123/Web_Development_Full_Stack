import './output.css'

function App() {

  return (
    <>
      <div class="min-h-screen flex justify-center items-center flex-col bg-gray-900 font-bold">
        <div class="bg-gray-700 max-w-sm w-full p-8 flex justify-center items-center flex-col rounded-2xl">
          <h1 class="mb-20 text-4xl text-amber-50">Login</h1>
          <form>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="w-full px-3 py-2 border-1 rounded-md p-2 bg-gray-500"
              />
            </div>
            <br />

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                class="w-full px-3 py-2 border-1 rounded-md p-2 bg-gray-500"
              />
            </div>
            <br />

            <div class="flex justify-center align-center">
              <button
                type="submit"
                class="border-1 p-2 m-5 rounded-md w-full hover:bg-blue-700 bg-blue-500 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
