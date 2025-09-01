import AutocompleteInput from "@/features/maps/components/AutocompleteInput";
import { IoMdArrowBack } from "react-icons/io";

interface modalProps {
    onClose: () => void
}

export default function AutocompleteLayout() {
    return (
        <>
            <section className="flex justify-between items-center">
                <IoMdArrowBack color="white" fontSize={25} />
                <AutocompleteInput />
            </section>
        </>
    )
}