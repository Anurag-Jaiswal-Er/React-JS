import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Anurag-Jaiswal-Er")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl ">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="" class=" h-40 w-50 rounded-full" />
    </div>
  );
}

export default Github;
