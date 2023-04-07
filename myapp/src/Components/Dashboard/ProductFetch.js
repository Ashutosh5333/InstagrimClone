

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
    })
    .catch((err) => {
      console.log(err);
    });
     window.location.reload()
  
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
      }) 
      .catch((err) => {
        console.log(err);
      });
      window.location.reload()
    
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
      .then((dat) => {
        console.log(dat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 