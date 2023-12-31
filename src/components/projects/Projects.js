import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, cexchange, food, player } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14" >
        <ProjectsCard
          title="PLAYER MANAGEMENT USING REST-API's"
          des="Performing various rest api operations through springboot application, Like create read update delete calls "
          src={player}
        />
        <ProjectsCard
          title="STUDENT REGISTRATION FORM USING 
          ADVANCED JAVA"
          des="Register the student and validate the user while login
          Reset the password based on email accessing the list of users present in the database"
          src={projectTwo}
        />
        <ProjectsCard
          title="FOOD COURT"
          des="The main outcome of this project is to there exists a list of items whenever user want order specific item then it is 
          added to the cart"
          src={food}
        />
        <ProjectsCard
          title="CURRENCY EXCHANGE"
          des="The project main idea is to exchange currency value from one country to another country through microservices"
          src={cexchange}
        />

        
      </div>
    </section>
  );
}

export default Projects