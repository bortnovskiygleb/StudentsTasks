SELECT c.`name`
FROM `user` c, `photo_post` f
WHERE c.`user_id` = f.`user_id`
GROUP BY c.`user_id`
HAVING count(f.`user_id`) > 3
#5