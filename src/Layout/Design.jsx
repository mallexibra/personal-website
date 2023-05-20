import Showcase from "../Components/Showcase";

const Design = () => {
  const myDesign = [
    {
      id: 1,
      title: "Logo 8 Forbimwangi",
      desc: "Logo tersebut merupakan logo yang saya buat untuk mengikuti perlombaan Logo Diesnatalis Forbimwangi ke - 8. Alhamdulillah saya mendapatkan Juara 2 :)",
      img: "/logoForbimwangi.png",
      url: "-",
      tech: ["Inkscape", "Citramanik"],
    },
  ];
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
