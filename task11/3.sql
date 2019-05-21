SELECT* FROM photo_post WHERE user_id = (SELECT user_id FROM user WHERE name = 'Dudek') and createdat = '2019-05-09';
#3