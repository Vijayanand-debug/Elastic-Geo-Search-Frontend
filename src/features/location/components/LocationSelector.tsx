import { IoLocationSharp } from "react-icons/io5";

export default function LocationSelector() {
    return (
        <>
            <section className="w-full order-2 p-5 text-white border-t-white border-solid border-t text-center md:order-1 md:w-[300px] md:border-none md:grow[1]">
                <IoLocationSharp className="inline" size={"24px"} color={"#fff"} />
                <h5 className="inline pt-2">Select your location</h5>
            </section >
        </>
    );
}