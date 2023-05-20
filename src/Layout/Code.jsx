import Showcase from "../Components/Showcase";
const Code = () => {
  const myProject = [
    {
      id: 1,
      title: "Website Personal",
      desc: "A modern portfolio website from me to introduce my expertise",
      img: "/website-personal.png",
      url: "https://website-five-cyan-50.vercel.app/",
      tech: ["ReactJS", "TailwindCSS", "Web Storage"],
    },
    {
      id: 2,
      title: "PUTI Online",
      desc: "PUTI Online Is a service for informatics engineering students to be able to submit complaints about matters in accordance with the categories on this website.",
      img: "/puti-online.png",
      url: "https://mallexibra.github.io/PUTIOnline/",
      tech: ["HTML", "SCSS"],
    },
    {
      id: 3,
      title: "Website Portfolio",
      desc: "Portfolio Website for my own Branding",
      img: "/mallexibra-website.png",
      url: "https://mallexibra.github.io/mallexibra-website/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Bookshelf Apps",
      desc: "Bookshelf is the final project of a Belajar Membuat Front-End Web untuk Pemula from Dicoding.com",
      img: "/bookshelf.png",
      url: "https://mallexibra.github.io/bookshelfApps/",
      tech: ["HTML", "CSS", "JavaScript", "Web Storage"],
    },
    {
      id: 5,
      title: "Todo App",
      desc: "Todo App is a website that can be used to create your todo list.",
      img: "/image.png",
      url: "https://todo-app-pearl-tau.vercel.app/",
      tech: ["ReactJS", "TailwindCSS"],
    },
  ];
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
