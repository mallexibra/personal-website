import Showcase from "../Components/Showcase";
import { myProject } from "../utils/datas";
const Code = () => {
  return (
    <div className='flex gap-3 justify-around flex-wrap'>
      {myProject.map((item) => {
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

export default Code;
