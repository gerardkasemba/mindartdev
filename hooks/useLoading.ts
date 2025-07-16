import { useState } from "react"

const useLoading = () => {
    const [isLoading, setIsloading] = useState<boolean>(false);

    return {isLoading, setIsloading}
}

export default useLoading