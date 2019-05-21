SELECT NAME FROM photoloverdb.photo_post INNER JOIN photoloverdb.user
ON photoloverdb.user.user_id = photoloverdb.photo_post.user_id
WHERE createdat=CURDATE()
GROUP BY photoloverdb.photo_post.user_id
HAVING COUNT(photoloverdb.photo_post.user_id) > 3;