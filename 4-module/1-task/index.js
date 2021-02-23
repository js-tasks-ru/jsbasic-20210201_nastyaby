function makeFriendsList(friends) {

  const ul = document.createElement('ul');

  for (let item of friends) {
    const li = document.createElement('li');

    li.innerHTML = `${item.firstName} ${item.lastName}`;

    ul.appendChild(li);
  }
  return ul;
}
