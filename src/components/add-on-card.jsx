/* eslint-disable react/prop-types */
// import checkmark from "/src/assets/images/icon-checkmark.svg";
const Addoncard = ({ data, selected = false, onChange }) => {
  const handleSelection = () => {
    onChange && onChange(data);
  };

  return (
    <div
      className={`cursor-pointer add-on-card card border  w-full rounded-xl flex items-center px-6 py-4 gap-4 ${
        selected ? "border-[#ac54ff] bg-[#fbf8ff]" : "border-[#9699ab]"
      } hover:border-[#ac54ff]`}
      onClick={handleSelection}
    >
      <input
        type="checkbox"
        name="addons"
        value="online service"
        id="online_addons"
        className="w-6 h-6 cursor-pointer"
        checked={selected}
        onChange={handleSelection}
      />
      <div className="flex-grow">
        <h4 className="text-blue-950 font-bold text-lg">{data.name}</h4>
        <p className="text-gray-500">{data.description}</p>
      </div>
      <span className="text-purple-400 text-lg">${data.price.monthly}/mo</span>
    </div>
  );
};

export default Addoncard;
