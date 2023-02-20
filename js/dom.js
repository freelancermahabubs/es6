document.getElementById("apply-bg").addEventListener("click", function(){
  const friends = document.getElementsByClassName("friend");
  for(const friend of friends){
    friend.style.backgroundColor = "lightblue";
  }
});


document.getElementById("centerthe-third").addEventListener("click", function(){
 const thirdFriends = document.getElementById("third");
 thirdFriends.style.backgroundColor = "yellow"
});

document.getElementById("addnew-friend").addEventListener("click", function(){
  const friendContainer = document.getElementById("friends");

  const friend = document.createElement("div");
  // set the bg color by this.classList use 
  friend.classList.add("friend")
  friend.innerHTML = `
  <h3 class="friend-name">New Friend</h3>
  <p>Something NEW Add</p>
  `

  friendContainer.appendChild(friend);
})