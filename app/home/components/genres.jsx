"use client"
import API from "../../../src/api"

export default function Genres({ genres }) {
    console.log(genres)
    return (
        <div className="my-4">
            <h1 className="text-white text-lg">Genres and Moods</h1>
            <div className="home-genres-slider">
                {
                    genres && genres.filter((item, index) => index < 16).map((item) => {
                        return (
                            <img
                                key={item.playlist_id}
                                src={API.defaults.baseURL + item.cover}
                                className="w-full h-24 w-full object-cover rounded-xl"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};