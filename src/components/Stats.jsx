import { stats } from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <>
      <section
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${styles.flexCenter} flex-1 flex justify-start items-center flex-row m-3`}
          >
            <h4 className="xs:text-[40px] text-[30px] font-poppins font-semibold xs:leading-[53px] leading-[43px] text-blue-100">
              {stat.value}
            </h4>
            <p className="xs:text-[20px] text-[15px] font-poppins font-normal xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;
