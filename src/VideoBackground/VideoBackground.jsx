import React, {Component} from "react"
import VideoBackground from './VideoBackground.css'
import video3 from './video3.mp4'



    class VideoBackground extends Component {
        constructor (props) {
            super(props);
            this.state = {
                videoURL: 'https://youtu.be/B_la8N_AYkA'
            }

            render()

            { return <h1>122313</h1>

                return (
                    <video id="background-video" loop autoPlay>
                        <source src={this.state.videoURL} type="video/mp4"/>
                        <source src={this.state.videoURL} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                )
            }
        }

    // return (
    //     <VideoBackground className='videoBackground' autoPlay loop muted>
    //
    //         <source src={video3} type='video/mp4'/>
    //     </VideoBackground>
    // );
}

export default VideoBackground;