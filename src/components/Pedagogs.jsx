import React from "react";

const PedagogInfo = ({ title, name, email, cabinet }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-greenDark">{title}</h2>
      <p className="mt-2 text-gray-700">
        <strong>Vārds, uzvārds:</strong> {name}
      </p>
      <p className="text-gray-700">
        <strong>E-pasts:</strong>{" "}
        <a href={`mailto:${email}`} className="text-greenDark hover:underline">
          {email}
        </a>
      </p>
      <p className="text-gray-700">
        <strong>Kabinets:</strong> {cabinet}
      </p>
    </div>
  );
};

const PedagogSection = ({ heading, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold text-greenDark mb-2">{heading}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

const SocialaisPedagogsPage = ({ data }) => {
  return (
    <div className="bg-whiteGray rounded-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 pb-10">
        <PedagogInfo {...data} />
        <PedagogSection heading="Skolēniem, ja:" items={data["Skolēniem, ja:"]} />
        <PedagogSection heading="Vecākiem, ja:" items={data["Vecākiem, ja:"]} />
        <PedagogSection heading="Sociālais pedagogs:" items={data["Sociālais pedagogs:"]} />
      </div>
    </div>
  );
};

export default SocialaisPedagogsPage;
