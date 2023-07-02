import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black px-7"
    >
      <h1 className="text-primary font-semibold text-3xl mt-5 mb-10">My projects:</h1>

      <div className="flex justify-center items-center text-center"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <ProjectsCard
          title="Fluent Verse"
          des=" User management, instructor management, class management, and class feedback can all be managed by the admin
          Class can be added by instructor and my class can be viewed by instructor. If a class seat is available, the student can select all classes and pay through Stripe. However, if the student does not
          login, the student cannot access the dashboard."
          src={"https://i.ibb.co/CKdz50k/Screenshot-3.png"}
          codeLink="https://github.com/mehedi-00/fluentverse-client.git"
          liveLink="https://fluent-verse.web.app/"
        />
        <ProjectsCard
          title="toy-planet"
          des=" Toys can be viewed, added, edited, and deleted by logging in. In the event that a non-logged-in user clicks on a toy's Sdetails, they will be redirected to the login page etc. Updates users on current toy models in real time. Users can add new toys from the add to toys menu if they are logged in When the user is logged in and has added a toy, they can see just that toy in the My Toys section."
          src={"https://i.ibb.co/TL5GnjP/Screenshot-4.png"}
          codeLink="https://github.com/mehedi-00/toy-planet.git"
          liveLink="https://toys-planet.web.app/"
        />
        <ProjectsCard
          title="choosyFoody resturent"
          des="When registered users click on a cheap detail, they can view the recipe for the dish. After successfully logging in, non-registered users will be redirected to the recipe details page. After logging in, the user is directed to the recipe page when he clicks on the view recipe button. There is a rating of each recipe, a price and ingredients listed in this page There are some questions and answers on the blog page."
          src={"https://i.ibb.co/8Y75rDq/Screenshot-6.png"}
          codeLink="https://github.com/mehedi-00/choosyFoody-client-side.git"
          liveLink="https://choosfoody.web.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
