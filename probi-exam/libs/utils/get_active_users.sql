CREATE PROCEDURE getActiveUsers()
BEGIN
 SELECT id, first_name, last_name, email
 FROM users
 WHERE status='active'
END

DELIMITER