import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import Modal from "@/components/Modal";
import MapSelector from "@/features/maps/components/MapSelector";


export default function LocationSelector() {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section onClick={() => setModalOpen(true)} className="w-full order-2 p-5 text-white border-t-white border-solid border-t text-center md:order-1 md:w-[300px] md:border-none md:grow[1]">
                <IoLocationSharp className="inline" size={"24px"} color={"#fff"} />
                <h5 className="inline pt-2">Select your location</h5>
            </section >

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <MapSelector />
            </Modal>

        </>
    );
}