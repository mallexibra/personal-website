import Image from "./Image";
import TextPerson from "./TextPerson";

const Person = ({ children }) => {
  return (
    <div className='flex justify-center items-center py-4'>
      <Image>
        <TextPerson />
        {children}
      </Image>
    </div>
  );
};

export default Person;
