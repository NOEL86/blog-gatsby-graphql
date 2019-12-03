import React from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import VideoOne from "../assets/video-food.mp4"
import VideoTwo from "../assets/video-slower.mp4"
import "./index.css"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video_list: [VideoOne, VideoTwo],
      selected: "",
      video_index: 0,
    }
    // this.onVideoEnded = this.onVideoEnded.bind(this)
  }

  // componentDidMount() {
  //   this.setState({
  //     selected: this.state.video_list[0],
  //   })
  // }
  // onVideoEnded = () => {
  //   console.log("video ended")
  //   let index = this.state.video_index
  //   let selected = this.state.video_list[index]
  //   if ((index = 0)) {
  //     index++
  //     this.setState({
  //       video_index: index,
  //       selected: selected,
  //     })
  //   } else {
  //     this.setState({
  //       video_index: 0,
  //       selected: VideoOne,
  //     })
  //   }
  // let index = this.state.video_index
  // let list = this.state.video_list
  // if (index < list.length - 1) {
  //   this.setState({
  //     video_index: +1,
  //   })

  //   this.setState({
  //     selected: list[index],
  //   })
  // } else {
  //   // this.state.video_index = 0
  //   this.setState({
  //     video_index: 0,
  //   })
  //   this.setState({
  //     selected: list[index],
  //   })
  // }
  // }
  render() {
    return (
      <div>
        <Layout />
        <div className="banner">
          <video
            id="idle_video"
            src={this.state.video_list[0]}
            autoPlay
            muted
            loop
            // onEnded={this.onVideoEnded()}
            type="video/mp4"
          ></video>
          <h2>Travel</h2>
        </div>
      </div>
    )
  }
}

export default IndexPage
