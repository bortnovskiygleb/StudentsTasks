SELECT* FROM photo_post WHERE user_id = (SELECT user_id FROM user WHERE name = 'Sidorov') and description LIKE '%hello%'
#4