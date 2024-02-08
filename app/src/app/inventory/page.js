export default function Page() {
    return (
        <div className="container mx-auto max-w-6xl my-24">
            <h1 className="text-4xl font-bold">Inventory</h1>
            <section className="mt-8">
                <form>
                    <div className="bg-white border border-neutral-200 rounded-lg p-5">
                        <div>
                            <label className="font-semibold" htmlFor="search">Search by Name</label>
                            <input type="text" className="input mt-1" placeholder="Search for anything..." id="search" />
                        </div>
                        <div className="flex gap-5 mt-3">
                            <div className="basis-1/3">
                                <label className="font-semibold" htmlFor="status">Status</label>
                                <select className="input mt-1" id="status">
                                    <option>In Stock</option>
                                    <option>Low on Stock</option>
                                    <option>Out of Stock</option>
                                    <option>Ordered/Waiting on Delivery</option>
                                </select>
                            </div>
                            <div className="basis-1/3">
                                <label className="font-semibold" id="quantity">Quantity</label>
                                <div className="flex items-center gap-3">
                                    <select className="input mt-1">
                                        <option>More than or equal to</option>
                                        <option>Less than or equal to</option>
                                    </select>
                                    <input type="number" className="input basis-2/5" id="quantity" min="1" step="1" defaultValue="1" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button type="submit" className="button flex items-center gap-2 w-auto mt-3">
                                <span>Apply Filters</span>
                            </button>
                            <p className="mt-3 text-neutral-500 text-center text-sm">Showing 1-16 of 224 items</p>
                        </div>
                    </div>
                </form>
                <table className="table table-auto w-full border border-neutral-200 bg-white mt-3">
                    <thead className="border-b border-b-neutral-200 bg-neutral-200">
                        <tr>
                            <th className="py-2 border-r border-r-neutral-200 w-[10%]">ID</th>
                            <th className="py-2 border-r border-r-neutral-200 w-[60%]">Name</th>
                            <th className="py-2 border-r border-r-neutral-200 w-[10%]">Status</th>
                            <th className="py-2 w-[20%]">Quantity Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(16).fill().map((_, index, arr) => (
                                <tr key={index}>
                                    <td className={`text-center p-2 border-r border-r-neutral-200 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''} font-mono`}>{index + 1}</td>
                                    <td className={`p-2 border-r border-r-neutral-200 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''}`}>Example Inventory Item #{index + 1}</td>
                                    <td className={`p-2 text-center border-r border-r-neutral-200 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''}`}>
                                        {
                                            index % 5 !== 0
                                                ? <span className="px-2 py-1 rounded border border-green-400 bg-green-500/20 text-xs">In Stock</span>
                                                : index % 10 !== 0
                                                    ? <span className="px-2 py-1 rounded border border-yellow-400 bg-yellow-500/20 text-xs">Low Stock</span>
                                                    : <span className="px-2 py-1 rounded border border-red-400 bg-red-500/20 text-xs">Out of Stock</span>
                                        }
                                    </td>
                                    <td className={`p-2 ${index + 1 < arr.length ? 'border-b border-b-neutral-200' : ''}`}>{index % 10 === 0 ? '0' : index * 23 % 100}</td>
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
            </section>
        </div>
    );
}