import kth from "../Assets/education/kth.png";
import lmu from "../Assets/education/lmu.png";
import hm from "../Assets/education/hm.png";


const Study = function ({university, subject, degree, logo}) {
    return (
        <div className="p-6 max-w-xl">
            <div className="px-5 flex items-center justify-between">
                <div>
                    <h4 className="mb-2 text-2xl font-bold text-white">{university}</h4>
                    <h5 className="mb-2 text-xl font-medium text-white">{subject}</h5>
                </div>
                <img className="m-5 h-24" src={logo} alt=""/>
            </div>
            <div className="px-5">
                <p className="mb-3 text-lg text-gray-400">{degree}</p>
            </div>
        </div>
    );
};

const Education = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb- font-medium">
                Education
            </div>
            <div className="flex  justify-center">
                <div className="flex flex-wrap align-middle justify-center">
                    <div>
                        <Study
                            university={"KTH"}
                            subject={"Computer Science"}
                            degree={"Master"}
                            logo={kth}
                        />
                    </div>
                    <div>
                        <Study
                            university={"LMU"}
                            subject={"Computer Science"}
                            degree={"Bachelor"}
                            logo={lmu}
                        />
                    </div>
                    <Study
                        university={"HM"}
                        subject={"Mechanical Engineering"}
                        degree={"Bachelor"}
                        logo={hm}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
