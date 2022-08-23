import kth from "../Assets/education/kth.png";
import lmu from "../Assets/education/lmu.png";
import hm from "../Assets/education/hm.png";


const Study = function ({university, subject, degree, logo, graduation}) {
    return (
        <div className="max-w-md py-3 transition duration-500 hover:scale-105 rounded-lg">
            <div className="px-5 flex items-center justify-between">
                <div>
                    <h4 className="mb-2 text-2xl font-bold text-white">{university}</h4>
                    <h5 className="mb-2 text-xl font-medium text-white">{subject}</h5>
                    <p className="mb-2 text-xl font-medium text-white">({degree})</p>
                    <h5 className="mb-3 text-lg text-gray-400">Graduation {graduation}</h5>
                </div>
                <img className="m-5 h-20" src={logo} alt=""/>
            </div>
        </div>
    );
};

const Education = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Education
            </div>
            <div
                className="p-6 grid grid-cols-1 sm:grid-cols-1 sm:p-6 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">
                <Study
                    university={"KTH"}
                    subject={"Computer Science"}
                    degree={"Master"}
                    graduation={2023}
                    logo={kth}
                />
                <Study
                    university={"LMU"}
                    subject={"Computer Science"}
                    degree={"Bachelor"}
                    graduation={2021}
                    logo={lmu}
                />
            <Study
                university={"HM"}
                subject={"Mechanical Engineering"}
                degree={"Bachelor"}
                graduation={2018}
                logo={hm}
            />
        </div>
        </div>
    );
};

export default Education;
