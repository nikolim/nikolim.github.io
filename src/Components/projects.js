import clm from "../Assets/projects/clm.png";

const commonBadgeStyle = "text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded";

// Type of projects
const IndustryBadge = function () {
    return (<span className={`bg-purple-100 text-purple-800 ${commonBadgeStyle}`}>Industry</span>);
}
const UniversityBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`}>University</span>);
}
const PrivateBadge = function () {
    return (<span className={`bg-green-100 text-green-800 ${commonBadgeStyle}`}>Private</span>);
}

// Technologies
const PythonBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`}>Python</span>);
}
const JavascriptBadge = function () {
    return (<span className={`bg-yellow-100 text-yellow-800 ${commonBadgeStyle}`}>Javascript</span>);
}
const GolangBadge = function () {
    return (<span className={`bg-cyan-100 text-cyan-800 ${commonBadgeStyle}`}>Golang</span>);
}
const K8sBadge = function () {
    return (<span className={`bg-blue-100 text-blue-800 ${commonBadgeStyle}`}>K8s</span>);
}
const InfluxBadge = function () {
    return (<span className={`bg-purple-100 text-purple-800 ${commonBadgeStyle}`}>Influx</span>);
}
const GrafanaBadge = function () {
    return (<span className={`bg-orange-100 text-orange-800 ${commonBadgeStyle}`}>Grafana</span>);
}

const Card = function ({name, type, img, description, badges}) {
    return (
        <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <div className="flex">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name} </h5>
                    <div>
                        {type()}
                    </div>
                </div>
                <img className="rounded-t-lg" src={img} alt=""/>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className="flex flex-wrap">
                    {badges.map(badge => badge())}
                </div>
            </div>
        </div>);
}

const Projects = function () {
    return (
        <div className="flex pb-9">
            <div
                className="p-4 grid grid-cols-1 sm:grid-cols-1 sm:p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">
                <Card name={"Cooperative Lange Management"}
                      type={IndustryBadge}
                      img={clm}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      badges={[PythonBadge, JavascriptBadge, GolangBadge, K8sBadge, InfluxBadge, GrafanaBadge]}
                />
                <Card name={"Cooperative Lange Management"}
                      type={IndustryBadge}
                      img={clm}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      badges={[PythonBadge, JavascriptBadge, GolangBadge, K8sBadge, InfluxBadge, GrafanaBadge]}
                />
                <Card name={"Cooperative Lange Management"}
                      type={IndustryBadge}
                      img={clm}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      badges={[PythonBadge, JavascriptBadge, GolangBadge, K8sBadge, InfluxBadge, GrafanaBadge]}
                />
            </div>
        </div>
    );
};

export default Projects;
