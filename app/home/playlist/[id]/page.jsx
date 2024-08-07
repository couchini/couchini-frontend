"use client"

import { useParams } from "next/navigation";
import API from "../../../../src/api";
import { useMemo, useState } from "react";
import Loading from "../../../components/loading";

export default function Page() {
    const [playlist, setPlaylist] = useState();
    const [showLoading,setShowLoading] = useState(true);
    const params = useParams();
    const getData = async () => {
        await API.get(`/playlist/${params.id}/`).then((response) => {
            setPlaylist(response.data.playlist)
        }).catch((error) => {
            error.response && error.response.status === 401 && getData();
        }).finally(() => setTimeout(() => setShowLoading(false) , 400));
    };
    useMemo(() => getData(), []);
    return (
        <>
            <div className="bg-image"></div>
            {
                showLoading && <Loading />
            }
            {
                !showLoading && <div>hello</div>
            }
        </>
    )
};