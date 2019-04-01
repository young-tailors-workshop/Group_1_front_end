import React from 'react'

const Post = () => {
  return (
    <div className="wrap-all">
      <div className="full-form">
      <form id="survey-form">
      <div className="personal-details">
        <div className="rows">
          <div className="left-labels"><label htmlFor="name" id="name-label">Title: </label></div>
          <div className="right-content"><input id="name" type="text" placeholder=" Enter your title post" className="input-box" required /></div>
        </div>
        <div className="rows">
          <div className="left-labels"><label>Content: </label></div>
          <div className="right-content"><input id="email" type="email" placeholder=" Enter your content" className="input-box" required /></div>
        </div>
        <div className="rows">
          <div className="left-labels"><label>Category: </label></div>
          <div className="right-content"><input id="category" type="text" placeholder=" Enter your category" className="input-box" required /></div>
        </div>
      </div>
      <button id="submit">Submit</button>
  </form>
</div>

      <style jsx global>{`
         
        h1{
          font-size: 2.5em;
        }
        
        .title-section {
          text-align: center;
          width: 80%;
          color: #fff;
          font-weight: 1000;
          background: transparent;
          margin: 0 auto;
        }
        
        .full-form{
          margin: 20px auto;
          width: 100%;
        }
        
        .rows {
          margin-top: 20px;
          display: flex;
          flex-direction: rows;
          width: 100%;
        }
        
        .left-labels {
          width: 33%;
          text-align: right;
          vertical-align: top;
          margin-top: 20px;
          padding: 10px;
          font-weight: 500;
        }
        
        hr {
          width: 80%;
          margin-top: 35px;
        }
        
        .question {
          font-weight: 500;
        }
        
        .right-content {
          margin-top: 20px;
          padding: 5px;
          vertical-align: top;
        }
        
        .input-box{
          width: 250px;
          height: 20px;
          padding: 5px;
          border: 1px solid #c0c0c0;
          border-radius: 2px;
        }
        
        .survey-section{
          display: flex;
          flex-direction: column;
          width: 100%;
          text-align: center;
        }
        
        .question-answer {
          margin-top: 25px;
          margin-bottom: 25px;
        }
        
        .answer {
          margin-top: 15px;
        }
        
        #applications li {
          text-align:left;
          position: relative;
          left: 30%;
          width: 80%;
          margin: 10px auto;
        }
        
        textarea {
          width: 400px;
          height: 800px;
        }
        
        form {
          text-align: center;
        }

        form#survey-form {
          position: absolute;
          right: 40%;
      }
        
        button {
          background: rgba(10, 75, 8, 0.5);
          width: 150px;
          height: 50px;
          font-size: 1.5em;
          border-radius: 20px;
          color: white;
          margin-top: 10px;
          margin-bottom: 30px;
        }
        
        button:hover {
          cursor: pointer;
        }
        
        @media (max-width:800px){
          main {
            display: flex;
            flex-direction: column;
            width: 90%;
          }
          
          textarea {
            width: 150px;
          }
          
          .left-labels {
            width: 32%;
          }
        
          .input-box{
            width: 150px;
          }      
        }   
      `}</style>
    </div>
  )
}

export default Post
