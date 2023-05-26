import CardBlog from "../Components/CardBlog";
import { journal } from "../utils/datas";

const Journal = () => {
  return (
    <div className='my-10 flex gap-4 flex-wrap justify-center w-full '>
      {journal.map((item) => {
        return (
          <CardBlog
            key={item.id}
            title={item.title}
            src={item.src}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Journal;
