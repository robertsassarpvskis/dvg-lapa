import React from "react";

const TeamSection = ({ title, members }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-500 pb-2 mb-4">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member, index) => (
          <div key={index} className="bg-[#cbd4cd] p-4 rounded shadow">
            <p className="font-semibold text-xl text-green-800">{member.name}</p>
            <p className="text-sm text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamPage = ({data}) => {
  return (
    <div className="container mx-auto p-4">
      {Object.entries(data).map(([title, members]) => (
        <TeamSection key={title} title={title} members={members} />
      ))}
    </div>
  );
};

export default TeamPage;