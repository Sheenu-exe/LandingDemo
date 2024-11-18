import { GoArrowDownRight } from "react-icons/go";


const Footer = () => {
    return(
        <div className="w-full h-[10vh] text-gray-700 gap-x-4 jetbrains-mono-font text-sm flex justify-center ">
            <a className="hover:text-green-600  hover:shadow-green-600 transition-all flex h-fit items-center" href="">Terms & Conditions <GoArrowDownRight className="text-lg"/></a>
            <a className="hover:text-green-600  hover:shadow-green-600 transition-all flex  h-fit items-center" href="">Privacy Policy <GoArrowDownRight className="text-lg"/></a>
        </div>
    )
}
export default Footer