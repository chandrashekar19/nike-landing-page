import { useState } from "react";

const Tailwind = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log("DARK", isDarkMode);
  };
  return (
    <div>
      <main className="p-5">
        <h1 className="text-center text-lg text-green-400">Hello world</h1>

        <div className="my-4 h-10 w-full rounded-md border-violet-600 border-2 bg-violet-200 p-2">
          <p className="text-center font-mono font-extrabold">A div</p>
        </div>

        {/* <!-- Layout  --> */}

        <div className="fixed w-10 h-10 bg-red-500 top-0"></div>

        <div className="flex justify-between">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-violet-500 h-12"></div>
          <div className="bg-violet-500 h-12"></div>
          <div className="bg-violet-500 h-12"></div>
        </div>
        <div className="md:block hidden">
          <p>I will appear for the device resolution greater than 768px</p>
        </div>
        <div className="max-md:block hidden">
          <p>I will appear for the device resolution less than 768px</p>
        </div>
        <button className="special-button">Click Me</button>

        <ul className="my-2 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-100">Item 1</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            Item 2
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            Item 3
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            Item 4
          </li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">
            Item 5
          </li>
        </ul>

        {/* <!-- Theme dark  --> */}
        <div className={`card  ${isDarkMode ? "dark: bg-black" : "bg-white"}`}>
          <h3
            className={`text-base font-medium tracking-tight ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            This is a text element
          </h3>
          <p
            className={`mt-2 text-sm ${
              isDarkMode ? "text-blue-100" : "text-slate-500"
            }`}
          >
            This is a longer p tag element
          </p>

          <button
            className=" text-blue-900 py-2 px-4 text-sm font-medium mt-8 bg-blue-100 rounded-md"
            onClick={handleToggle}
          >
            ToggleDark
          </button>
        </div>
        <p className="text-[12px] text-chestnut bg-stone-100 p-[16px]">
          chestnut Color
        </p>
      </main>
    </div>
  );
};

export default Tailwind;
