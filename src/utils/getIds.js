/* eslint-disable no-underscore-dangle */
const getIds = (list) => {
  const ids = [];

  list.forEach((item) => {
    ids.push(item._id);
  });

  return ids;
};

export default getIds;
