const Sections = () => {
  return (
    <div className="sections__wrapper w-1/5 px-5 py-2 border-l border-white">
      <div className="sections__header">
        <h1 className="text-xl font-semibold"> 📝 Sections | In this blog</h1>
      </div>
      <div className="sections__body flex py-4">
        <div className="bar bg-red-400 ml-5 h-auto"></div>
        <div className="sections__list py-2 pl-5 ">
            {/* create fake list */}
            <div className="section__item">
                <h1 className="text-sm font-semibold ">  Section 1</h1>
                </div>
            <div className="section__item">
                <h1 className="text-sm font-semibold ">  Section 2</h1>
                </div>
            <div className="section__item">
                <h1 className="text-sm font-semibold ">  Section 3</h1>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
