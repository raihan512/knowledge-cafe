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

const handleMin = (min) => {
  localStorage.setItem("cafe-knowledge-time", min);
};

const getSavedMin = () => {
  let savedMin;
  const adedMin = localStorage.getItem("cafe-knowledge-time");
  if (adedMin) {
    savedMin = JSON.parse(adedMin);
  } else {
    savedMin = 0;
  }

  return savedMin;
};

export { handleDb, getLocalBookmark, handleMin, getSavedMin };
