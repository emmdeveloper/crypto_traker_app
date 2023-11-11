const HCoinItems = ({ coins }) => {
  console.log(coins);
  return (
    <div className="">
      <div className="flex items-center gap-1 p-4 rounded-md bg-[#17739e28] backdrop:blur shadow hover:scale-105 transition-all">
        <div>
          <img src={coins.image} alt="coin image" className=" w-[4.5rem]" />
        </div>
        <div>
          <h2 className="font-[mona-sans] text-white">{coins.symbol}</h2>
          <h2 className="font-[mona-sans] text-white">
            ${coins.current_price.toLocaleString()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HCoinItems;
