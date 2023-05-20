import CardBlog from "../Components/CardBlog";

const Journal = () => {
  const journal = [
    {
      id: 1,
      title: "Belajar Function Javascript",
      src: "https://www.youtube.com/embed/FNJHMzqrw_w",
      description: "Belajar function jadi mudah deh hehe",
    },

    {
      id: 2,
      title: "Roadmap Menjadi Front-end Developer",
      src: "https://www.youtube.com/embed/QT2jRsZANAU",
      description:
        "Sebelum menjadi front-end developer, kamu harus tau roadmapnya biar gak salah jalan hehe",
    },

    {
      id: 3,
      title: "Awam Dunia IT, Tapi Kuliah Jurusan IT?",
      src: "https://www.youtube.com/embed/tJ7C2Qm2veM",
      description:
        "Gapapa awam Dunia IT, yang terpenting masih ada kemauan untuk belajar hehe",
    },
    {
      id: 4,
      title: "5 Tips Untuk Programmer Pemula",
      src: "https://www.youtube.com/embed/lN2xWUn07q8",
      description: "5 Tips dari saya untuk Programmer Pemula",
    },
  ];

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
