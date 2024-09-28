import React from "react";

function Github() {
  return (
    <div className="py-20 bg-white">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img
            src="https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="github"
          />
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Access My Github Acount Click the below link
          </h2>

          <h2 className="text-center text-xl text-gray-800 font-serif py-16">
            <a href="https://github.com/Anurag-Jaiswal-Er">Anurag Jiswal</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Github;
