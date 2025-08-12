import { useEffect, useState } from "react";

const useDistrict = () => {
    const [districts, setDistricts] = useState([])
    useEffect(() => {
        fetch('/public/districts.json')
            .then(res => res.json())
            .then(data => {
                setDistricts(data[2].data)
            })
    }, [])
    return [districts]
};

export default useDistrict;