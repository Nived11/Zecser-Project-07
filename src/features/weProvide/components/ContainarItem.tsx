const ContainarItem = ({ item }: any) => {
  return (
    <div className="flex flex-col gap-4 border-4 border-black/50 rounded-md p-4 my-4 justify-center items-center">
      {item.icon && <span className="font-black">{item.icon} </span>}
      {item.image && (
        <span>
          <img src={item.image} alt="image" className="w-15" />
        </span>
      )}
      <h2 className="text-2xl break-words font-bold">{item.title}</h2>
      <p className="font-semibold break-words text-center">{item.description}</p>
    </div>
  );
};

export default ContainarItem;
