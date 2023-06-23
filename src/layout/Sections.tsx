const Sections = () => {
  return (
    <div className="sections__wrapper w-1/5 px-5 py-5 border-l border-white flex flex-col justify-between">
      <div className="section__1">
        <div className="sections__header">
          <h1 className="text-xl text-slate-900"> 📝 Sections | In this blog</h1>
        </div>
        <div className="sections__body flex py-4">
          <div className="bar bg-red-400 ml-5 h-auto"></div>
          <div className="sections__list py-2 pl-5 ">
            {/* create fake list */}
            <div className="section__item">
              <h1 className="text-sm font-semibold "> Section 1</h1>
            </div>
            <div className="section__item">
              <h1 className="text-sm font-semibold "> Section 2</h1>
            </div>
            <div className="section__item">
              <h1 className="text-sm font-semibold "> Section 3</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section__2">
        <div className="sections__comment-header mt-32">
          <h1 className="text-xl text-slate-900"> 💬 Comments</h1>
        </div>
        <div className="sections__comment-body flex py-4">
          <div className="bar bg-pink-300 ml-5 h-auto"></div>
          <div className="sections__comment-list py-2 pl-5 ">
            {/* create fake list */}
            <div className="section__comment-item">
              <h1 className="text-sm  "> Comment 1</h1>
            </div>
            <div className="section__comment-item">
              <h1 className="text-sm  "> Comment 2</h1>
            </div>
            <div className="section__comment-item">
              <h1 className="text-sm  "> Comment 3</h1>
            </div>
          </div>
        </div>
        <div className="section__comment-input flex justify-between items-center">
          <input
            type="text"
            className=" border border-gray-300 rounded-md px-2 w-full h-9 focus:outline-none placeholder:text-sm text-sm text-gray-800 pr-10"
            placeholder="Leave a comment..."
          />

          <button className=" text-white rounded-md px-2 h-9 w-9 absolute right-5 hover:bg-opacity-80 hover:bg-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
