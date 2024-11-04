import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import dpimage1 from "./assets/pic1.jpg";
import dpimage2 from "./assets/pic2.jpg";
import dpimage3 from "./assets/pic3.jpg";
import dpimage4 from "./assets/pic4.jpg";

import postimage1 from "./assets/image.jpg";
import postimage2 from "./assets/image2.jpg";
import postimage3 from "./assets/image3.jpg"
import postimage4 from "./assets/image4.jpg"



import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { RiShareForwardLine } from "react-icons/ri";
import "./style.css";

function Post () {
  return (
  <div className="main-container">
    <div className="header-container">
      <div className="user-info">
        <img src={dpimage1} alt="userdp" className="logoimage" />
        <div>
          <h3>Muhammad Usman</h3>
          <span>Saturday at 04:00 AM</span>
        </div>
      </div>
      <SlOptions />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
      debitis odio? Accusantium, nemo quae in iste facere praesentium
      cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
      omnis nesciunt sunt!
    </p>

    <img src={postimage1} alt="postimage" className="postimage" />

    <div className="react-container">
      <div className="emoji-container">
        <span>😍</span>
        <span>❤️</span>
        <span>😮</span>
        <p>Ameer ali and 256 others</p>
      </div>

      <div className="comment-section">
        <p>95 comments</p>
      </div>
    </div>

    <div className="footer-container">
      <AiOutlineLike className="likeicone" />
      <LiaCommentSolid className="likeicone" />
      <RiShareForwardLine className="likeicone" />
    </div>
  </div>
  );
}

function Post2 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={dpimage2} alt="userdp" className="logoimage" />
          <div>
            <h3>Muammad Maaz</h3>
            <span>Monday at 10:00 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage2} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>Muhammad  and 182 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post3 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={dpimage3} alt="userdp" className="logoimage" />
          <div>
            <h3>Shayan Ahmed</h3>
            <span>Wednesday at 12:59 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage3} alt="postimage3" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>Ali Aslam and 265 others</p>
        </div>
  
        <div className="comment-section">
          <p>75 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post4 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={dpimage4} alt="userdp" className="logoimage" />
          <div>
            <h3>Ameer Ali</h3>
            <span>Friday at 07:40 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage4} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>Saad Ali and 151 others</p>
        </div>
  
        <div className="comment-section">
          <p>65 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}



function App() {
  return <div>
  <Post/>
  <Post2/>
  <Post3/>
  <Post4/>
  </div>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);