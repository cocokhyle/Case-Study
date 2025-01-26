
const content = [
   "About the Project",
    "Runbooks/Method of Procedures",
    "Disaster Recovery",
];

export default function Sidebar() {
    return (
        <div>
            <div className="justify-center items-center w-full font-semibold pt-10 pb-10">
                {content.map((item, key) => (
                    <div className="p-2 w-full hover:bg-blue-400 ">
                        <div className="flex flex-row items-center gap-1 w-full p-2">
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        <button>{item}</button>
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}