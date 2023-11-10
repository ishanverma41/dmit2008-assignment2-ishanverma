import { db } from './configFile'
export async function getVideos() {
    const dbRef = db.ref('/videos')
    const dataSnapshot = await dbRef.once('value')
    // console.log(dataSnapshot.val())
    return dataSnapshot.val()
}

export async function getVideoById(videoId) {
    try {
        const dbRef = db.ref('/videos');
        const dataSnapshot = await dbRef.once('value')
        const videos = dataSnapshot.val();
        if (videos) {

            let i = videos.findIndex(v => v.video_id == videoId)
            let videoData = videos[i]
            return videoData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};