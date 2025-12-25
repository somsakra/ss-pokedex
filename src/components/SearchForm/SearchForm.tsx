import { generationList, typesList, sortList } from "@/utils/optionList";
import { userSearchForm } from "@/components/SearchForm";


const SearchForm = () => {
    const { fieldKeywork, fieldGeneration, fieldSort, fieldType } = userSearchForm()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[20px]">
            <div>
                <label htmlFor="generation" className="block mb-2 text-white font-medium">Select Generation</label>
                <select id="generation"
                    {...fieldGeneration}
                    className="block w-full p-2.5 capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3C5BAA] focus:border-[#3C5BAA]">
                    {generationList.map((item, index) => {
                        return <option className="capitalize" key={`generation-key-${index}`} value={index}>{item.name}</option>
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="type" className="block mb-2 text-white font-medium">Select Type</label>
                <select id="type"
                    {...fieldType}
                    className="block w-full p-2.5 capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3C5BAA] focus:border-[#3C5BAA]">
                    {typesList.map((item, index) => {
                        return <option key={`type-key-${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="sort" className="block mb-2 text-white font-medium">Sort by</label>
                <select id="sort"
                    {...fieldSort}
                    className="block w-full p-2.5 capitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3C5BAA] focus:border-[#3C5BAA]">
                    {sortList.map((item, index) => {
                        return <option key={`sort-key-${index}`} value={item}>{item}</option>
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="search" className="block mb-2 text-white font-medium">Search</label>
                <input {...fieldKeywork} id="search" className="block w-full p-2.5 bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3C5BAA] focus:border-[#3C5BAA]">
                </input>
            </div>


        </div>
    )
}
export default SearchForm