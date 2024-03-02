import { DisciplineData } from "../../constants/homeConstants";

const Discipline = () => {
  return (
    <section className="w-full md:px-[5rem] px-7 py-8  grid place-items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Browse by Discipline</h1>
        <div className="discipline-grid">
          {DisciplineData.map((item, index) => (
            <div
              key={index}
              className={`w-full h-[10rem] rounded-[15px] flex flex-col justify-center items-center border-2 px-4 cursor-pointer gap-3 ${
                item.isEnd ? "bg-secondary-600" : "hover:bg-primary-600"
              }`}
            >
              <img
                src={item.src}
                alt={`discipline_${index}`}
                className="w-12 h-12 bg-none object-cover"
              />
              <p className="text-sm px-2 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discipline;
