SELECT datediff(CURDATE(), createdat) AS DAYS_AGO
FROM photoloverdb.photo_post WHERE createdat = (SELECT createdat
FROM photoloverdb.photo_post ORDER BY createdat LIMIT 1);