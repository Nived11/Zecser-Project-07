import loginBackgrounImg from "../../../assets/loginBackgroundImg.jpg";
const SubAdminLoginHead = () => {
    return (
        <div className="relative w-full ">
            <div className="w-full h-[450px] overflow-hidden ">
                <img
                    src={loginBackgrounImg}
                    alt="background image"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30 "></div>
            </div>

            <div className="absolute top-[50%] px-6 py-4 max-w-[400px] md:max-w-[600px] lg:max-w-[800px]">
                <h2 className="font-bold text-white text-xl md:text-2xl lg:text-3xl mb-2">
                    Welcome to student portal
                </h2>
                <p className="text-white text-justify font-semibold text-[14px] md:text-[16px] lg:text-[20px] ">
                    We're proud to support our exceptional team. This secure portal
                    provides access to important staff resources, internal communications,
                    schedules, training materials, and more. Please log in to continue.
                </p>
            </div>
        </div>
    );
};

export default SubAdminLoginHead;
