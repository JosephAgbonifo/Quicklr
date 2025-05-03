import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[70vh] w-full flex mt-16 md:mt-0">
      <div className="flex-1 h-full flex flex-col pl-10 justify-center">
        <p className="text-poppins px-10 text-5xl font-bold">
          Study Sessions That <span className="text-primary">Hit</span>{" "}
          Different
        </p>
        <p className="px-10 text-md text-secondary mt-4 text-justify">
          Join a study pod and learn with your peers. Study smarter, not harder.
          Spontaneous, collaborative, and just the right amount of quirky.
        </p>
        <Link
          href="/pod"
          className=" m-auto md:ml-10 h-16 font-bold w-[30%] my-10 bg-accent text-background rounded-b-2xl flex items-center justify-center hover:bg-primary transition duration-300 ease-in-out"
        >
          Join a Pod
        </Link>
      </div>
      <div className="absolute -right-72 md:right-0 -z-10 top-52 md:top-0 opacity-30 md:opacity-100 md:relative flex-1 h-full md:flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[70%] aspect-square object-cover pointer-events-none select-none"
        >
          <source src="/logo/loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
