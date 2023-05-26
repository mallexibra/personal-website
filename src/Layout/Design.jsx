import Showcase from "../Components/Showcase";
import { myDesign } from "../utils/datas";

const Design = () => {
  return (
    <div className='flex gap-3 justify-around flex-wrap'>
      {myDesign.map((item) => {
        return (
          <Showcase
            key={item.id}
            title={item.title}
            description={item.desc}
            img={item.img}
            url={item.url}
            tech={item.tech}
          />
        );
      })}
    </div>
  );
};

export default Design;
