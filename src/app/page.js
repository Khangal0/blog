"use client";

import Bg from "@/component/Hi";
import { Parents } from "@/component/Parents";
import { useEffect, useState } from "react";

const Page = () => {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);

  const dataPack = async () => {
    const fetchData = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${number}`
    );
    const jsonData = await fetchData.json();
    setData(jsonData);
  };
  useEffect(() => {
    dataPack();
  }, [number]);

  const next = () => {
    const plus = number + 1;
    setNumber(plus);
  };

  const back = () => {
    if (number == 1) {
    } else {
      const mines = number - 1;
      setNumber(mines);
    }
  };

  if (data.length == 0)
    return (
      <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
      </div>
    );

  return (
    <Parents>
      <div>
        <div className="body3">
          <div className="body">
            {data.map((post, index) => {
              return <Bg key={index} post={post} />;
            })}
            <div className="switchBTN">
              <button className="button2" onClick={() => back()}>
                back
              </button>
              <div>{number}</div>
              <button className="button2" onClick={() => next()}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Parents>
  );
};

export default Page;
