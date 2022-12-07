export default function Contact() {
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gray-400 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p className="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white md:w-2/3">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Contact me
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Nombre"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">

            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Mail"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Link to your content/channel"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Your Twitter Handle"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-gray-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Enviar
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Preguntas Frecuentes
          </span>
        </form>
      </div>
    </div>
  );
}
