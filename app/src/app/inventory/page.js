export default function Page() {
    return (
        <div className="container mx-auto max-w-6xl my-24">
            <h1 className="text-4xl font-bold">Inventory</h1>
            <section className="mt-8">
                <form>
                    <div className="flex gap-3">
                        <div className="grow">
                            <label className="sr-only" htmlFor="search">Search</label>
                            <input type="text" className="input" placeholder="Search for anything..." id="search" />
                        </div>
                        <button type="submit" className="button w-auto">Search</button>
                    </div>
                </form>
                <table className="table table-auto w-full border border-neutral-200 bg-white mt-3">
                    <thead className="border-b border-b-neutral-200 bg-neutral-200">
                        <tr>
                            <th className="py-2 border-r border-r-neutral-200 w-[10%]">ID</th>
                            <th className="py-2 border-r border-r-neutral-200 w-[70%]">Name</th>
                            <th className="py-2 w-[20%]">Quantity Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(10).fill().map((_, index, arr) => (
                                <tr key={index}>
                                    <td className={`text-center p-2 border-r border-r-neutral-200 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''} font-mono`}>{index + 1}</td>
                                    <td className={`p-2 border-r border-r-neutral-200 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''}`}>20m LC-UPC Fiber Patch Cable</td>
                                    <td className={`p-2 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''}`}>23</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="flex items-center justify-center gap-1 mt-5">
                    <button type="button" className="button w-auto" disabled>&lt;&lt;</button>
                    <button type="button" className="button w-auto" disabled>&lt;</button>
                    <span className="mx-3">Page 1</span>
                    <button type="button" className="button w-auto">&gt;</button>
                    <button type="button" className="button w-auto">&gt;&gt;</button>
                </div>
                <p className="mt-3 text-neutral-500 text-center text-sm">Showing 1-10 of 224 items</p>
            </section>
        </div>
    );
}