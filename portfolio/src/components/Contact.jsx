import useInputState from "@/hooks/useInputState";
import Link from "next/link";

const Contact = () => {
//   const [name, updateName, resetName] = useInputState("");
//   const [organization, updateOrganization, resetOrganization] =
//     useInputState("");
//   const [email, updateEmail, resetEmail] = useInputState("");
//   const [message, updateMessage, resetMessage] = useInputState("");

  return (
    // id="contact"
    <div  className='lg:p-16 p-4 no-underline text-[#574ecc] dark:text-[#F0F0F0]'>
      <h1 className="text-3xl font-extrabold ml-4">Contact</h1>
      <div className="flex md:flex-row flex-col m-5">
        <div className="flex flex-col mb-8">
          <p>
            Shadi Khalil <br /> Washington DC Metro Area <br />
            smkhalil.311@gmail.com <br />
            <Link
              className="hover:decoration-auto"
              href="https://www.linkedin.com/in/shadikhalil/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/shadikhalil
            </Link>
          </p>
        </div>
        {/* Some sort of cartoon typing an email - 'Email me!' */}
        {/* <div className="flex flex-col md:w-[25%] w-[80%] ">
          <input
            className="text-[#00000095] rounded pl-2 p-1"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={updateName}
          />
          <div className="m-1" />
          <input
            className="text-[#00000095] rounded pl-2 p-1"
            type="text"
            placeholder="Company/Organization"
            value={organization}
            onChange={updateOrganization}
          />
          <div className="m-1" />
          <input
            className="text-[#00000095] rounded pl-2 p-1"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={updateEmail}
          />
          <div className="m-1" />
          <textarea
            className="flex text-[#00000095] rounded pl-2 p-1"
            type="text"
            rows={8}
            maxLength={500}
            placeholder="Message (Max. 500 characters)"
            value={message}
            onChange={updateMessage}
          />
          <div className="flex mt-2 justify-end">
            <button
              className="block rounded py-2 px-4 text-sm bg-red-500 hover:bg-red-700 hover:duration-300 mr-2"
              onClick={resetMessage}
            >
              Clear
            </button>
            <button
              className="block py-2 rounded px-4 text-sm bg-[#574ecc] hover:bg-[#574ecc95] hover:duration-300"
              onClick={() => alert("Submitted")}
            >
              Submit
            </button>
          </div>
  </div> */}
      </div> 
    </div>
  );
};

export default Contact;
