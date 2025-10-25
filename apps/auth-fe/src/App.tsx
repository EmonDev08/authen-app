function App() {
  return (
    <div className="min-w-[250px] min-h-[250px] bg-white text-black w-1/2 h-1/2 flex-col flex p-3 items-center rounded-lg text-xl shadow-2xl pt-5 max-w-[400px] max-h-[400px] relative">
      <div className="font-bold text-black text-xl ">ĐĂNG KÍ</div>
      <div className="flex flex-col w-full mt-5 gap-4 ">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Email
          <input
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name=""
            id=""
          />
        </label>
      </div>
      <div className="flex flex-col w-full mt-5 gap-4 ">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Password
          <input
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name=""
            id=""
          />
        </label>
      </div>
      <div className="absolute bottom-5 w-full px-5 text-center ">
        <button className="py-1.5 hover:bg-blue-600 transition duration-200 bg-blue-500 w-full text-white rounded-md">
          Đăng kí
        </button>
      </div>
    </div>
  );
}

export default App;
