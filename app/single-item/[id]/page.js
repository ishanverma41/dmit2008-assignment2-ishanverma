import PageHeader from "@/components/header/PageHeader"
import { getVideoById, getVideos } from "@/lib/firebase/getVideos"


export default async function SingleItem({ params }) {
    const { id } = params
    const videoData = await getVideoById(id)

    return (
        <>
            <PageHeader></PageHeader>
            <div className="container">
                <div className="container-fluid">
                    <div className="card mx-1" style={{ marginTop: "120px" }}>
                        <img src={videoData?.thumbnail} className="card-img-top" alt="thumbnail" height={300} />
                        <div className="card-body">
                            <h5 className="card-title">{videoData?.title}</h5>
                            <h6 className="text-center" style={{ fontSize: "35px" }}><strong>${videoData?.price}</strong></h6>
                            <p><strong>Genre:</strong> {videoData?.genre}</p>
                            <p><strong>Director:</strong>{videoData?.director}</p>
                            <p className=""><strong>Actor:</strong>{videoData?.actor}</p>
                            <p><strong>Release Date:</strong> {videoData?.release_date}</p>
                            <p><strong>Duration:</strong> {videoData?.duration} mins</p>
                            <p><strong>Rating:</strong> {videoData?.rating}</p>
                            <p><strong>Language:</strong>{videoData?.language}</p>
                            <div className="text-center mt-2"><a href={`/single-item/${videoData?.video_id}`} className="btn btn-primary btn-lg">Buy Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export async function generateStaticParams() {
    // console.log("params: ", params)
    const videos = await getVideos()

    return videos.map((video) => ({
        id: video.video_id.toString()
    }))

    // return singleData
}
