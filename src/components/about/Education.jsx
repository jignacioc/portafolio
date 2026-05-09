import TimelineTabs from "./TimelineTabs.jsx";
import { formacion } from "../../data/educationData.js";

export default function Education() {
    return <TimelineTabs title="Mi Formación" items={formacion} />;
}
