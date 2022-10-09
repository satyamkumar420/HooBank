import { apple, google, bill } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* Gradient */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
          {/* Gradient */}
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Easily Control your <br className="sm:block hidden" /> billing &
            invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            There is no such thing as enim or massa etiam. Platea fusce neque
            aeneanipsum orci rhoncus aliporttitor integer placerat Ametodio
            mauris eu adipiscing ultrices platea fusce neque aeneanipsum orci
            rhoncus aliporttitor integer placerat
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img
              src={apple}
              alt="Apple-Store"
              className="w-[128px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="Google-Store"
              className="w-[128px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
