import API from "../../../src/api";

export default function TopArtists({ artists }) {
    return (
        <div className="my-4">
            <h1 className="text-white text-lg">Top Artists</h1>
            <div className="top-artists-slider">
                {
                    artists && artists.filter((item, index) => index < 6).map((item) => {
                        return (
                            <div key={item.artist_id} className="top-artists-slide">
                                <img
                                    src={API.defaults.baseURL + item.avatar}
                                    className="object-cover rounded-full"
                                />
                                <h4 className="text-xs md:text-md text-center my-2 h-5 overflow-x-hidden w-full  text-white">
                                    {item.first_name} {item.last_name}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};