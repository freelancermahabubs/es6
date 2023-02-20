const filterFriendsByLength = (friends) => {
const filterFriends = [];
for(let i = 0; i < friends.length; i++){
  const elements = friends[i];
  if(elements.length % 2 === 0){
    filterFriends.push(elements);
  }
}
return filterFriends
};
const friendsName = ["Kamals", "Jamal miaa", "Mahabub", "KoliomUdidin", "Bob", "Charlie", "David", "Eve", "Frank", "Babuls"];
const filterFriends = filterFriendsByLength(friendsName);
console.log(filterFriends);
