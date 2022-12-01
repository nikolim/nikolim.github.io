import Image from "next/image";

import clm from "../public/images/projects/clm.png";
import iot from "../public/images/projects/iot.png";
import raa from "../public/images/projects/raa.png";
import handpan from "../public/images/projects/handpan.png";
import cabworld from "../public/images/projects/cabworld.png";
import bragi from "../public/images/projects/bragi.png";

const commonBadgeStyle = "text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded";

// Type of projects
const IndustryBadge = function () {
    return (<span className={`bg-purple-100 text-purple-800 ${commonBadgeStyle}`} key={"industry"}>Industry</span>);
}
const UniversityBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`} key={"university"}>University</span>);
}
const PrivateBadge = function () {
    return (<span className={`bg-green-100 text-green-800 ${commonBadgeStyle}`} key={"private"}>Private</span>);
}

// Technologies
const PythonBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`} key={"python"}>Python</span>);
}
const JavascriptBadge = function () {
    return (<span className={`bg-yellow-100 text-yellow-800 ${commonBadgeStyle}`} key={"javascript"}>Javascript</span>);
}
const GolangBadge = function () {
    return (<span className={`bg-cyan-100 text-cyan-800 ${commonBadgeStyle}`} key={"golang"}>Golang</span>);
}
const K8sBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`} key={"k8s"}>K8s</span>);
}
const InfluxBadge = function () {
    return (<span className={`bg-purple-100 text-purple-800 ${commonBadgeStyle}`} key={"influx"}>InfluxDB</span>);
}
const GrafanaBadge = function () {
    return (<span className={`bg-yellow-100 text-yellow-800 ${commonBadgeStyle}`} key={"grafana"}>Grafana</span>);
}
const AMQPBadge = function () {
    return (<span className={`bg-orange-100 text-orange-800 ${commonBadgeStyle}`} key={"amqp"}>AMQP</span>);
}
const GrpcBadge = function () {
    return (<span className={`bg-teal-100 text-teal-800 ${commonBadgeStyle}`} key={"grpc"}>GRPC</span>);
}
const MQTTBadge = function () {
    return (<span className={`bg-teal-100 text-teal-800 ${commonBadgeStyle}`} key={"mqtt"}>MQTT</span>);
}
const ReactBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`} key={"react"}>React</span>);
}
const FirebaseBadge = function () {
    return (<span className={`bg-orange-100 text-orange-800 ${commonBadgeStyle}`} key={"firebase"}>Firebase</span>);
}
const TailwindBadge = function () {
    return (<span className={`bg-cyan-100 text-cyan-800 ${commonBadgeStyle}`} key={"tailwind"}>TailwindCSS</span>);
}
const TorchBadge = function () {
    return (<span className={`bg-rose-100 text-rose-800 ${commonBadgeStyle}`} key={"pytorch"}>PyTorch</span>);
}
const NodeBadge = function () {
    return (<span className={`bg-green-100 text-green-800 ${commonBadgeStyle}`} key={"nodejs"}>NodeJS</span>);
}

const Card = function ({name, type, img, description, badges, key}) {
    return (
        <div
            className="max-w-sm rounded-lg bg-gray-800" key={key}>
            <div className="p-5">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                        {name} </h5>
                    <div className="">
                        {type()}
                    </div>
                </div>
                <Image src={img} alt={""} className={"my-2 rounded-lg w-full h-32 object-cover"}/>
                <p className="mb-3 font-normal text-gray-200" dangerouslySetInnerHTML={{__html: description}}/>
                <div className="flex flex-wrap">
                    {badges.map(badge => badge())}
                </div>
            </div>
        </div>);
}

const Projects = function () {
    return (
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Projects
            </div>
            <div
                className="p-4 grid grid-cols-1 sm:grid-cols-1 sm:p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">
                <Card name={"CLM Lane Management"}
                      type={IndustryBadge}
                      img={clm}
                      description={`Development of distributed backend services and onboard software to enable cooperative maneuvers like lane merging of connected vehicles. Levering 5G and Mobile-Edge-Computing to reach low latency <a href="https://www.youtube.com/watch?v=daxptHOXTI4" style="text-decoration: underline">(Promo video).</a>`}
                      badges={[PythonBadge, JavascriptBadge, GolangBadge, AMQPBadge, K8sBadge, InfluxBadge, GrafanaBadge]}
                />
                <Card name={"Right Turn Assistant"}
                      type={IndustryBadge}
                      img={raa}
                      description={"Development of a right-turn-assistant prototype for trucks. This system warns the driver of potential crashes when doing a right turn and eliminates the blind spot. Using data from multiple sensors to increase reliability."}
                      badges={[PythonBadge, JavascriptBadge, InfluxBadge, GrafanaBadge]}
                />
                <Card name={"IOT Protocols"}
                      type={IndustryBadge}
                      img={iot}
                      description={"Development and application of different IOT protocols and evaluation for automotive use-cases."}
                      badges={[PythonBadge, GrpcBadge, MQTTBadge, AMQPBadge]}
                />
                <Card name={"Workshop Booking Website"}
                      type={PrivateBadge}
                      img={handpan}
                      description={`Website to book music workshops written in React. Serverless backend which handles bookings, validates confirmations and sends update mails <a href="https://handpan-atelier.web.app" style="text-decoration: underline"> (Website) </a>.`}
                      badges={[JavascriptBadge, ReactBadge, NodeBadge, FirebaseBadge, TailwindBadge]}
                />
                <Card name={"Music Game Website"}
                      type={UniversityBadge}
                      img={bragi}
                      description={`Website using the Spotify API to play games for their song to be added to the party playlist/queue <a href="https://github.com/Bragi3000/Bragi3000" style="text-decoration: underline">(Repo)</a>.`}
                      badges={[JavascriptBadge, ReactBadge, FirebaseBadge, TailwindBadge]}
                />
                <Card name={"Cabworld and Cablab (Thesis)"}
                      type={UniversityBadge}
                      img={cabworld}
                      description={`Development, improvement and testing of various reinforcement learning algorithms, focusing on finding an effective algorithm for Cabworld. Cabworld is a custom environment, where multiple cabs have to learn how to bring passengers to their desired destination <a href="https://github.com/nikolim/cablab" style="text-decoration: underline">(Repo)</a>.`}
                      badges={[PythonBadge, TorchBadge]}
                />
            </div>
        </div>
    );
};

export default Projects;
