
-- 1
SELECT name, createdat AS TIME, DESCRIPTION FROM photoloverdb.photo_post INNER JOIN photoloverdb.user
ON photoloverdb.user.user_id = photoloverdb.photo_post.user_id
ORDER BY createdat;
-- 2
SELECT createdat AS TIME, description FROM photoloverdb.photo_post INNER JOIN photoloverdb.user
ON photoloverdb.user.user_id = photoloverdb.photo_post.user_id
WHERE name = 'Sidorov'
ORDER BY createdat;