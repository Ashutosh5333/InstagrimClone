

const token = JSON.parse(localStorage.getItem("token"));



export const likepost = (_id) => {
  fetch(`https://drab-ruby-swallow-toga.cyclic.app/likes/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((dat) => {
      console.log(dat)
      window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
  
  
};

// ----------------  Unlikepost ------------ //

export const Unlikepost = (_id) => {
    fetch(`https://drab-ruby-swallow-toga.cyclic.app/unlikes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        window.location.reload()
      }) 
      .catch((err) => {
        console.log(err);
      });
     
    
  };




// ----------- comment ---------- //
 
export  const Addcomment = (text, _id) => {
    fetch(`https://drab-ruby-swallow-toga.cyclic.app/comment/${_id}`, {
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
        console.log("comment" ,data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 