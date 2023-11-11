const handleDb = (id) => {
  const storedBookmark = getLocalBookmark();

  const exist = storedBookmark[id];
  if (!exist) {
    storedBookmark[id] = true;
  } else {
    console.log(storedBookmark[id]);
    delete storedBookmark[id];
  }
  localStorage.setItem(
    "cafe-knowledge-bookmark",
    JSON.stringify(storedBookmark)
  );
};

const getLocalBookmark = () => {
  let storedBookmark;
  const bookmarkExist = localStorage.getItem("cafe-knowledge-bookmark");
  if (bookmarkExist) {
    storedBookmark = JSON.parse(bookmarkExist);
  } else {
    storedBookmark = {};
  }

  return storedBookmark;
};

export { handleDb, getLocalBookmark };
