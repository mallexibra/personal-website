import FooterLink from "../Components/FooterLink";
import Title from "../Components/Title";
import Container from "./Container";
import Wrapper from "./Wrapper";

const Footer = () => {
  const link = [
    {
      id: 1,
      title: "Hello World",
      children: [
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
      ],
    },
    {
      id: 1,
      title: "Hello World",
      children: [
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
        { name: "Google", url: "www.google.com" },
      ],
    },
  ];
  return (
    <Wrapper className='bg-teal-600'>
      <Container className='text-white p-10'>
        <div className='flex justify-between items-start flex-wrap gap-4 sm:gap-0'>
          {link.map((item) => {
            const child = item.children;
            return (
              <div className=' w-full text-center sm:text-left sm:w-1/2'>
                <div className=' sm:w-full w-max mx-auto'>
                  <Title key={item.id} text={item.title} className='my-2' />
                  <div className='grid grid-cols-2 gap-x-12'>
                    {child.map((it) => {
                      return (
                        <FooterLink
                          url={it.url}
                          className='hover:font-semibold hover:text-teal-100 transition-all duration-300'
                        >
                          {it.name}
                        </FooterLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className='my-4 opacity-50' />
        <h1>
          Copyright &copy; by{" "}
          <span className='text-lg font-bold'>MAULANA MALIK IBRAHIM</span>
        </h1>
      </Container>
    </Wrapper>
  );
};

export default Footer;
