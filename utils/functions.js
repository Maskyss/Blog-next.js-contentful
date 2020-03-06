const convertPost = rawData => {
  const rawPost = rawData.fields;

  const { description, title, seoTitle, image,href, subtitle, date, category, timeToRead,positionAuthor,nameAuthor, photoAuthor  } = rawPost || null;
  var str = image.fields.file.url||null;

  while (str.indexOf("/") == 0) {
    str = str.substring(1);
  }
  const newImage = "http://" + str;
  const newBody = rawPost.body || null;


  var str1 = photoAuthor.fields.file.url ||null
  while (str1.indexOf("/") == 0) {
    str1 = str1.substring(1);
  }
  const newImage2= "http://" + str1;
  return {
    description,
    title,
    bodyArticle: newBody,
    seoTitle,
    image: newImage,
    href, subtitle, date, category,timeToRead,positionAuthor,nameAuthor, 
    photoAuthor:newImage2
  };
};
 export {
     convertPost
 }
