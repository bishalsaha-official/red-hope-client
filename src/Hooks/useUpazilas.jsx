import { useEffect, useState } from "react";

const useUpazilas = () => {
    const [upazilas, setUpazilas] = useState([])
    useEffect(() => {
        fetch('/public/upazilas.json')
            .then(res => res.json())
            .then(data => {
                setUpazilas(data[2].data)
            })
    }, [])
    return [upazilas]
};

export default useUpazilas;