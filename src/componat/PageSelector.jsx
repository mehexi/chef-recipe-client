import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const PageSelector = () => {
  return (
    <div className="col-span-3 justify-center items-center align-middle">
      <div className="flex justify-center gap-9 mt-6">
        <button>
          <IoIosArrowDown className="rotate-90"></IoIosArrowDown>
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          <IoIosArrowDown className="-rotate-90"></IoIosArrowDown>
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
