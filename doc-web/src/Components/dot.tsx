import { BiSolidCertification } from "react-icons/bi";

export default function Dot(props: any) {
    return (
        <div className="flex items-center gap-1">
            <BiSolidCertification />
            <h1>{props.title}</h1>
        </div>
    );
}