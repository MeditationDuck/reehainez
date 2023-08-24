import { About_Profile } from "../constants";

const About = () => {
  return (
    <div className=" text-white w-screen min-h-screen flex flex-col justify-center items-center p-10 space-y-6">
      {/* <Header title="about"/> */}
      <p className="text-2xl uppercase tracking-wide">Profile</p>
      <h1 className="text-4xl font-bold">{About_Profile.title}</h1>
      <h2 className="text-3xl text-red-600">{About_Profile.subtitle}</h2>
      <div className="text-xl space-y-4">
        <p>{About_Profile.dob}</p>
        <p>{About_Profile.birthplace}</p>
        <p>{About_Profile.genre}</p>
        <p>{About_Profile.debutYear}</p>
        <p className="leading-relaxed">{About_Profile.biography}</p>
      </div>
    </div>
  );
};

export default About;
