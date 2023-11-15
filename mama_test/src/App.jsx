

import './App.css'
import { BiWorld } from 'react-icons/bi';
import { BiCoin } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { PiShareFat } from 'react-icons/pi';

function App() {
  

  return (
    <>
      <div className="top">
        <div className='left'>
          <img src="p.jpg" alt="" />

          <div className='info'>
            <h4>Rasel Ahmed</h4>
            <div className="time">
              <p>21 hours ago . </p>
              <BiWorld />
            </div>
          </div>
        </div>
        <p className='right'> <BiCoin /> <AiOutlineClose /> </p>
      </div>

      <div className="main">
        <p>বাংলাদেশের মত তুর্কিতেও ওয়াইজ বন্ধ হয়ে যাচ্ছে 😭 <br></br> পেমেন্ট রিসিভ করার জন্য অল্টারনেটিভ কি আছে?</p>
      </div>

      <div className="buttom">
        <p className="like">
        ❤️️😥 Faysal Mridha Rony, Abdul and 481 others
        </p>
        <div className='right_buttom'>
          <p className="cmnt">
            116 comments
          </p>
          <p className="share">
            3 shares
          </p>
        </div>
      </div>

      <div className="footer">
        <button><BiLike /> Like</button>
        <button><FaRegCommentAlt /> Comment</button>
        <button><PiShareFat /> Share</button>
      </div>
    </>
  )
}

export default App
