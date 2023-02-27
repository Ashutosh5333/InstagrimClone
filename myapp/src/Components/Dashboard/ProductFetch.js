
const token = JSON.parse(localStorage.getItem("token"));

export const likepost = (_id) => {
  fetch(`https://sore-cyan-llama-robe.cyclic.app/likes/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({
    //   postId:_id,
    // }),
  })
    .then((res) => res.json())
    .then((dat) => {
      console.log(dat);
    })
    .catch((err) => {
      console.log(err);
    });
  //  console.log("hello")
};

// ----------------  Unlikepost ------------ //

export const Unlikepost = (_id) => {
    fetch(`https://sore-cyan-llama-robe.cyclic.app/unlikes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    //   body: JSON.stringify({
    //     postId:_id,
    //   }),
    })
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
      }) 
      .catch((err) => {
        console.log(err);
      });
    //  console.log("hello")
  };




// ----------- comment ---------- //
 
export  const Addcomment = (text, _id) => {
    fetch(`https://sore-cyan-llama-robe.cyclic.app/likes/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

 