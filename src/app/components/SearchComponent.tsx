function SearchComponent() {

    return (
        <>
            <section className="order-1 p-5 w-full md:order-2 md:max-w-[700px] md:ml-[10%]">
                <form className="">
                    <div className="flex">
                        <div className="relative w-full">
                            <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-[white] rounded-[8px] dark:placeholder-gray-700 dark:text-gray-700" placeholder="Search Services Ex: Kafka, Kibana ...." required />
                        </div>
                    </div>
                </form>
            </section>

        </>
    );

}

export default SearchComponent;