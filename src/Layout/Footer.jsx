import FooterLink from "../Components/FooterLink";
import Container from "./Container";
import Wrapper from "./Wrapper";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const link = [
    { id: 1, name: "Website", url: "https://website-five-cyan-50.vercel.app/" },
    { id: 2, name: "Youtube", url: "https://www.youtube.com/@mallexibra/" },
    { id: 3, name: "Github", url: "https://github.com/mallexibra/" },
    { id: 4, name: "Instagram", url: "https://www.instagram.com/mallexibra/" },
    { id: 5, name: "Tiktok", url: "https://www.tiktok.com/@mallexibra" },
    { id: 6, name: "Linkedin", url: "https://www.linkedin.com/in/mallexibra/" },
  ];
  return (
    <Wrapper className='bg-teal-600'>
      <Container className='text-white pt-10 px-10 pb-20'>
        <div className='flex justify-center flex-wrap gap-4 text-sm'>
          {link.map(({ id, url, name }) => {
            return (
              <FooterLink key={id} url={url}>
                {name}
              </FooterLink>
            );
          })}
        </div>
        <hr className='my-4 opacity-50' />
        <div className='text-xs text-center'>
          <p>
            Made using{" "}
            <a
              href='https://react.dev/'
              target='_blank'
              className='text-slate-800 font-semibold cursor-pointer'
            >
              React JS
            </a>{" "}
            &{" "}
            <a
              href='https://tailwindcss.com/'
              target='_blank'
              className='text-slate-800 font-semibold cursor-pointer'
            >
              TailwindCSS
            </a>
            . Hosted on{" "}
            <a
              href='https://vercel.com/'
              target='_blank'
              className='text-slate-800 font-semibold cursor-pointer'
            >
              Vercel
            </a>
            .
          </p>
          <p>&copy; Maulana Malik Ibrahim 2023.</p>
          <div className='text-xl flex justify-center items-center gap-2 my-3'>
            <a href='https://github.com/mallexibra/' target='_blank'>
              <FaGithubSquare />
            </a>
            <a href='https://www.linkedin.com/in/mallexibra/' target='_blank'>
              <FaLinkedin />
            </a>
            <a href='mailto:mallexibra@gmail.com' target='_blank'>
              <MdOutlineEmail />
            </a>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
