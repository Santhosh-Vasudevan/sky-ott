import { useState, useEffect } from "react";

export const useFetch = ({ url, options }: { url: string, options?: any }) => {
    const [loading, setLoading] = useState<null | boolean>(null);
    const [data, setData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return; // handle if there is no url
        setLoading(true); // set loading to true before request starts
        setError(null); // resetting the error state everytime
        fetch(url, options)
            .then((res) => {
                if (!res.ok) throw new Error('something went wrong');
                return res.json();
            })
            .then(json => setData(json))
            .catch((err) => { setError(err?.message || "Unexpected error") })
            .finally(() => { setLoading(false) })
    }, [url, options])

    return {data, loading, error};
}
