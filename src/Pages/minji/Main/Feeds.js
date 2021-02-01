import React, { Component } from "react";
import share from "../../../image/kangminji/share.png";
import bubble from "../../../image/kangminji/bubble.png";
import redheart from "../../../image/kangminji/redheart.png";
import bookmark from "../../../image/kangminji/bookmark.png";
import me from "../../../image/kangminji/me.jpg";
// import { commentData } from "./commentData";
// import Comments from "./Comments"; // commentdata.js 용 

class Feeds extends Component {
  constructor() {
    super();
    this.state = { value: "", commentData: [], comment: "" };
  }
  addcomment = () => {
    if (this.state.value) {
      this.setState({
        // commentData: this.state.commentData.concat(this.state.value),
        //  commentData : this.state.commentData.push(this.state.value),
        // commentData :commentData,
        value: "",
        btncolor: "white",
      });
    }
  };

  commentbtnchange = (e) => {
    this.setState({ [e.target.name]: e.target.value, value: e.target.value });
    if (e.target.value) {
      this.setState({ btncolor: "skyblue" });
    } else {
      this.setState({ btncolor: "white" });
    }
  };

  addcommententer = (e) => {
    if (e.key === "Enter" && this.state.value) {
      this.addcomment();
    }
  };

  render() {
    const {
      profile,
      username,
      photo,
      likedpeople,
      commentone,
      comment,
      time,
      btncolor,
    } = this.props;
    return (
      <div>
        <div className="feed">
          <img alt="profile" src={profile} className="profile" />
          <div className="head">
            {username}
            <br />
            WeCode
          </div>
          <img alt="feedmain" src={photo} className="contentpicture" />

          <div className="icons">
            <div className="three">
              <img alt="heart" src={redheart} className="icon a" />
              <img alt="speech-bubble" src={bubble} className="icon a" />
              <img alt="export" src={share} className="icon" />
            </div>
            <img alt="bookmark" src={bookmark} className="icon b" />
          </div>
          <div className="like">
            <img src={me} alt="likeuser" className="likeme" />
            <h3>minji</h3>님 <h3>외 {likedpeople}</h3>이 좋아합니다
          </div>

          <div className="chat">
            <h3>arum</h3> {commentone}
            <br />
            <h3>dawn</h3> {comment}
            <br />
            <p>{time}</p>
            <div>
              {/* {commentData.map((comment) => {
                return (
                  <Comments
                    key={comment.id}
                    username={comment.username}
                    content={comment.content}
                    isLiked={comment.isLiked}
                  />
                );
              })} */}
              {/* {this.state.commentData.map((comment)=>{
                return(
                  <div>{comment}</div>
                );
              })} */}
            </div>
          </div>
          <div className="commentbody">
            <input
              type="form"
              placeholder="댓글 달기..."
              id="comment"
              name="comment"
              value={this.state.value}
              onKeyUp={this.addcommententer}
              onChange={this.commentbtnchange}
            />
            <button
              className="commentbtn"
              onClick={this.addcomment}
              style={{ background: btncolor }}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
