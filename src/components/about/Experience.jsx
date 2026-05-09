import TimelineTabs from "./TimelineTabs.jsx";
import { jobs } from "../../data/jobsData";

export default function Experience() {
    return <TimelineTabs title="Mi Experiencia" items={jobs} />;
}
