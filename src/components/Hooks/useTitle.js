import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-mobile re-seller`;
    }, [title])
}
export default useTitle;