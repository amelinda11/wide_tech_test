import { getTypeCode } from "@/app/services";
import { useQuery } from "react-query";

export const useGetTypeCode = () => {
    return useQuery('type_code', () => getTypeCode(), {
        staleTime: Infinity, 
        cacheTime: Infinity, 
      }
    );
};