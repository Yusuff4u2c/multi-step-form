import { useState } from "react";
import Addoncard from "./components/add-on-card";

const addons = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const Stepthree = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleChange = (data) => {
    if (selectedAddons.includes(data)) {
      const filteredAddons = selectedAddons.filter(
        (addon) => addon.name !== data.name
      );
      setSelectedAddons(filteredAddons);
    } else setSelectedAddons([...selectedAddons, data]);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl my-4 text-[#02295a]">Pick add-ons</h2>
      <p className="mb-8 text-3x1 text-[#9699ab]">
        Add-ons help to enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-4">
        {addons.map((addon, index) => (
          <Addoncard
            key={index}
            data={addon}
            onChange={handleChange}
            selected={selectedAddons.includes(addon)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepthree;
