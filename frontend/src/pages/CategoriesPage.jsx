import NewsHeader from "../components/NewsHeader";
import MissionElement from "../components/Home/MissionElement";
import ProgramCard from "../components/Programms/ProgramCard";
import { Link } from "react-router-dom";

const CategoriesPage = ({ title, headingGreen, description, categories, card }) => {
  return (
    <div className="bg-whiteGray">
      <NewsHeader Heading={title} HeadingGreen={headingGreen} text={description} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {categories.map((category, index) => (
            card === "mission" ? (
              <Link key={index} to={category.link} target="_blank">

                <MissionElement
                  key={index}
                  title={category.title}
                  text={category.text}
                  icon={category.icon}
                />
            </Link >

            ) : (
              <Link key={index} to={category.link}>
                <ProgramCard
                  key={index}
                  title={category.title}
                  description={category.text}
                  backgroundImage={category.image}
                  link={category.link}
                />
               </Link >
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
