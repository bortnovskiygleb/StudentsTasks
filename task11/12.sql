SELECT NAME, SUM(CASE WHEN createdat = '2019-05-09' THEN 1 ELSE 0 END) AS COUNT
FROM photoloverdb.user LEFT JOIN photoloverdb.photo_post
ON photoloverdb.photo_post.user_id = photoloverdb.user.user_id
group by user.user_id; 