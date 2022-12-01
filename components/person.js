import Image from "next/image";

import volcano from "../public/images/person/volcano.png";

const Person = function () {
    return (

        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Person
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 p-6">
                <div className={"object-fit  max-w-[350px]"}>
                    <Image src={volcano} alt={""}/>
                </div>
                <div className="flex">
                    <div className="default-text m-auto text-lg max-w-3xl">
                        Apart from IT, I enjoy discovering the world around me and figuring out how things are
                        interconnected on a scientific and philosophical level. I am passionate about being in nature,
                        climbing mountains, and experiencing the diversity of our planet. I enjoy cooking, reading, and
                        listening to electronic music. Sustainability is a topic that is very dear to me and I am eager
                        to figure out different ways to make a positive contribution to this world.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;
