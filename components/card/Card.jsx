export default function Card ({videoData}){
    return(<>

        <div className="card mx-1" style={{width: "16rem"}}>
            <img src={videoData?.thumbnail}  className="card-img-top" alt="thumbnail" height={200}/>
            <div className="card-body">
                <h5 className="card-title text-min-2">{videoData?.title}</h5>
                <h6 className="text-center" style={{fontSize: "20px"}}><strong>${videoData?.price}</strong></h6>
                <p><strong>Genre:</strong> {videoData?.genre}</p>
                <p><strong>Director:</strong>{videoData?.director}</p>
                <p className="text-min-1"><strong>Actor:</strong>{videoData?.actor}</p>
                <p><strong>Release Date:</strong> {videoData?.release_date}</p>
                <p><strong>Duration:</strong> {videoData?.duration} mins</p>
                <p><strong>Rating:</strong> {videoData?.rating}</p>           
                <p><strong>Language:</strong>{videoData?.language}</p>
               <div className="text-center mt-2"><a href={`/single-item/${videoData?.video_id}`} className="btn btn-primary">View</a></div> 
            </div>
         </div>
       
    </>)
}


