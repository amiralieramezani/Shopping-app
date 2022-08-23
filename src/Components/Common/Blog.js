const Blog = ({blog}) => {
  return (
    <div
      className="dark:bg-slate-800 bg-white flex flex-col  justify-between rounded-lg py-6 mr-4 px-4 snap-start sm:mr-5 min-w-[60%] max-w-[60%] w-[60%] lg:min-w-[22%] lg:max-w-[22%] lg:w-[22%] md:min-w-[25%] md:max-w-[25%] md:w-[25%] sm:min-w-[30%] sm:max-w-[30%] sm:w-[30%]"
    >
      <div className=" mb-2 sm:mb-5">
        <img src={blog.image} alt={blog.name} />
      </div>
      <div className="sm:text-sm  mb-2 sm:mb-5 text-xs w-full">
        <p className=" truncate">{blog.name}</p>
      </div>
      <div className="sm:text-xs  mb-2 sm:mb-5 text-[10px] w-full">
        <p className=" h-20 text-clip">{blog.description}</p>
      </div>
    </div>
  );
};

export default Blog;
