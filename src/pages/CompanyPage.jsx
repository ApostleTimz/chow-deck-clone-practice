import CompanyHero from "../components/company/CompanyHero";
import CoreValues from "../components/company/CoreValues";
import Teams from "../components/company/Teams";
import People from "../components/company/People";
import JoinUs from "../components/company/JoinUs";

export default function CompanyPage() {
    return (
        <>
            <CompanyHero />
            <CoreValues />
            <Teams />
            <People />
            <JoinUs />
        </>
    );
}