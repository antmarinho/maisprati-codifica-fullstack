DELIMITER $$

    CREATE TRIGGER role BEFORE INSERT ON users
      FOR EACH ROW
      BEGIN

        IF (NEW.role IS NULL) THEN
            SET NEW.role = 'USER';
        END IF;

      END$$

DELIMITER ;