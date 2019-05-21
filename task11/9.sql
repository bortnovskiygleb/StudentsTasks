SELECT 
    post_id,
    photolink,
    description,
    createdat,
    name
FROM
    photoloverdb.photo_post
        INNER JOIN
    photoloverdb.user ON photoloverdb.user.user_id = photoloverdb.photo_post.user_id
GROUP BY photoloverdb.photo_post.description
HAVING LENGTH(photoloverdb.photo_post.DESCRIPTION) > 100;