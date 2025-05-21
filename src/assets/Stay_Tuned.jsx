import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const StayTuned = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen md:h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/stay_alert.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#000000BF]"></div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8 flex justify-between items-center lg:pl-[48px] relative z-10">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <img src="/logo.png" alt="Logo" className="h-16" />
                </div>
            </div>

            {/* Main Text Section */}
            <div className="container mx-auto px-8 mt-48 lg:pl-[60px] relative z-10">
                <div className="max-w-xl mb-8">
                    <h2 className="text-[48px] md:text-[64px] font-poppins font-bold text-white">
                        Stay tuned
                    </h2>
                    <p className="mt-2 text-[#FFFFFFE5] font-poppins font-semibold text-[18px] md:text-[22px]">
                        —your blindfolded adventure is on its way!
                    </p>
                </div>

                <button className="text-center px-8 py-2 bg-[#A11616E5] hover:bg-[#00474C] text-[#FCD2B1] border border-0.5 border-[#FCD2B1] rounded-full font-poppins font-bold text-[12px] sm:text-[16px] md:text-[20px]" onClick={() => navigate("/")}>
                    Home <FaArrowRightLong className="inline-block" />
                </button>
            </div>
        </section>
    );
};

export default StayTuned;
