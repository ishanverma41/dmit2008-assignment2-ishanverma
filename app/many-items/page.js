import Card from "@/components/card/Card";
import PageHeader from "@/components/header/PageHeader";
import { getVideos } from "@/lib/firebase/getVideos";

async function VideosPage() {
    const payload = await getVideos();




    return (
        <>
            <PageHeader title="Video Vault: Explore Our Collection" tagline="Uncover, Watch, and Experience the Stories That Matter." />
            <div className="container">
                <div className="row" style={{ marginTop: "180px" }}>
                    {
                        payload && payload.map(item =>
                            <div key={item.video_id} className="col col-md-3 mt-2">
                                <Card videoData={item} /></div>)
                    }
                </div>
            </div>
        </>
    )
}

export default VideosPage