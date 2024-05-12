import { useEffect, useState } from "react";

const useFetch = (server) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(server).then(res => {
                if (!res.ok) {
                    throw Error("not connected");
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setLoading(false);
            }).catch(error => {
                console.log(error.message);
            });
        }, 200);
    }, []);
    return { data, loading }
}

export default useFetch;