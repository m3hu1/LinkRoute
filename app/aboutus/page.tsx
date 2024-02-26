import React from "react";
import Card from "@/components/card";

const features = [
  {
    title: "Mehul Pathak",
    description: "E22CSEU1253",
    large: false,
    link: "https://github.com/m3hu1",
  },
  {
    title: "Aryan Niranjan",
    description: "E22CSEU1250",
    link: "https://github.com/Aryannir",
  },
];

const aboutus = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-cover bg-center text-center">
          <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
            About Qaution
          </h1>
          <p className="text-white-800">
            Welcome to LinkRoute, your go-to solution for comprehensive and
            efficient redirect tracking! At LinkRoute, we understand the
            importance of managing and analyzing redirects for your links, and
            we're here to simplify the process.
          </p>
        </div>
        <div className="text-center">
          <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
            Our Mission
          </h1>
          <p className="text-white-800">
            Our mission is to provide website owners with the tools they need to
            manage their redirects with confidence. We believe that everyone
            should have access to easy-to-use, reliable tools that can help them
            optimize their website for success.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1 className="smXheading1 heading2 mb-6 text-gradient_blue-purple text-center">
            What does it do?
          </h1>
          <h2 className="smXheading1 heading4 text-white-800 !font-bold text-center">
            Our website, LinkRoute, is a comprehensive redirect tracking tool
            that can help you:
          </h2>
          <br></br>
          <p className="text-white-800 text-center">
            •Track all of your website's redirects, including 301, 302, 200
            redirects, and more.<br></br>
            •Allows you to directly go to the destination URL of the redirect
            after the process.
          </p>
          <br></br>
          <br></br>
          <h2 className="smXheading1 heading4 text-white-800 !font-bold text-center">
            Our future plans include:
          </h2>
          <br></br>
          <p className="text-white-800 text-center">
            •Identify broken redirects and chains of redirects.<br></br>
            •View detailed information about each redirect, including the source
            URL, destination URL, and status code.<br></br>
            •Export redirect data to a CSV file.<br></br>
            •Monitor redirect changes over time.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="hidden sm:block">
          <div>
            <h1 className="smXheading1 heading2 mb-6 text-center text-gradient_blue-purple">
              Our Team
            </h1>
          </div>
          <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-20 px-5 md:grid-cols-2 xl:px-0">
            {features.map(({ title, description, large, link }) => (
              <Card
                key={title}
                title={title}
                description={description}
                large={large}
                link={link as string}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default aboutus;