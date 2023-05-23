

const token = JSON.parse(localStorage.getItem("token"));




export const likepost = (_id) => {
  fetch(`https://insta-293s.onrender.com/likes/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat)
        // dispatch(getData)
      // window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
};

// ----------------  Unlikepost ------------ //

export const Unlikepost = (_id) => {
    fetch(`https://insta-293s.onrender.com/unlikes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        
        // window.location.reload()
      }) 
      .catch((err) => {
        console.log(err);
      });
     
    
  };




// ----------- comment ---------- //
 
export  const Addcomment = (text, _id) => {
    fetch(`https://insta-293s.onrender.com/comment/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        _id,
        text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("comment" ,data);
        // window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      });
  };

 
  


