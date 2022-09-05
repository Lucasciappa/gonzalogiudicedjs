import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-full w-full bg-primary-black py-5">
      <h4 className="text-primary-gray2 text-center text-3xl py-2">¡Seguinos!</h4>

      <div className="flex justify-center items-center gap-6 py-2">
        <a href="https://www.instagram.com/gonzalogiudicedjs/?hl=es" target="_blank" rel="noopener noreferrer">
          <span>
            <Image src="/logo/instagram2.svg" alt="Instagram Logo" width={30} height={30} />
          </span>
        </a>
        <a href="https://www.youtube.com/channel/UCIbjn8l7s-go4R4_8bO3upw" target="_blank" rel="noopener noreferrer">
          <span>
            <Image src="/logo/youtube2.svg" alt="Youtube Logo" width={35} height={40} />
          </span>
        </a>
        <a href="https://open.spotify.com/user/gonzalogiudicedjs" target="_blank" rel="noopener noreferrer">
          <span>
            <Image src="/logo/spotify2.svg" alt="Spotify Logo" width={30} height={30} />
          </span>
        </a>

      </div>
      <a href="https://www.instagram.com/gonzalogiudicedjs/?hl=es" target="_blank" rel="noopener noreferrer" className="text-primary-gray text-lg">@gonzalogiudicedjs</a>

      {/* <div className="flex mx-auto py-4">
        <a href="tel:+541154291574" target="_blank" rel="noopener noreferrer"
          className="uppercase bg-primary-black hover:bg-primary-blue tracking-widest border-2 border-primary-blue w-44 active:bg-primary-blue focus-visible:ring ring-primary-blue-hover text-primary-gray2 text-base rounded-md outline-none transition duration-100 px-10 py-3">
          Llamanos
        </a>
      </div> */}

      <a href="mailto:info@gonzalogiudice.com.ar" target="_blank" rel="noopener noreferrer" className="text-primary-white text-lg">info@gonzalogiudice.com.ar</a>

    </footer>
  );
}

export default Footer;
