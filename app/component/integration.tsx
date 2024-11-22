import { useMemo, useState } from 'react';
import { useGetTypeCode } from './hooks/thirdTaskHooks';
import {Pagination} from "@nextui-org/pagination";

export default function integration() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    const { data } = useGetTypeCode();
    console.log('data', data)

    const displayData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data?.slice(start, start + itemsPerPage);
    }, [data, currentPage]);

    return (
        <>
            <div className="w-full md:w-[700px]">
                <table className="w-full border-spacing-2 border-separate border border-gray-100">
                    <thead>
                        <tr>
                        <th className='border border-gray-200'>ID</th>
                        <th className='border border-gray-200'>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {displayData?.map((res: any, idx: number) => (
                        <tr key={idx}>
                            <td className='text-center w-1/5 border border-gray-200'>{res?.id}</td>
                            <td className='border border-gray-200 capitalize'>{res?.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination 
                size='sm'
                total={(data?.length/10) || 1} 
                page={currentPage}
                onChange={setCurrentPage}
                className='mt-3 flex justify-end'
            />
        </>
    )
}
