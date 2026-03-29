import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/timer",
    {
      cache: "force-cache",
      next : {revalidate: 3},
      tags : ["timer-data"]
    }
  );
  const data = await response.json();
  console.log("Timer API Response:", data);
  return (
    <>
      <h1>NextJS Response  </h1>
      <p>Current Time: {data.readable}</p>
      <p> Request Id : {data.requestId}</p>
    </>
  );
}
