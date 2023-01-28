const Shimmer = () => {
  return (
    <div className="">
      <h1 className="bg-dark-sand-green p-2 m-5 w-64 h-20 rounded-md"></h1>
      <div className="shimmer-cards ">
        <div className="sm:w-60 h-96 p-5 shadow-xl sm:m-5  rounded-md hover:bg-slate-100 ">
            <div className="Shimmer_card_image h-32 w-100% bg-dark-sand-green rounded-md shadow-sm mb-2"></div>
            <h1 className="Shimmer_card_heading h-8 w-100% bg-dark-sand-green rounded-md"></h1>
            <p className="Shimmer_card_para bg-dark-sand-green h-6 w-50 my-2 rounded-md">           </p>
            <p className="Shimmer_card_para shim1"></p>
            <p className="Shimmer_card_para shim2"></p>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
