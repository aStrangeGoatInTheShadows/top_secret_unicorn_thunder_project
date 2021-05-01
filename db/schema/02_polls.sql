-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS polls CASCADE;
CREATE TABLE polls (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT,
  description TEXT,
  admin_link VARCHAR(255) NOT NULL, -- ERROR CHECK ON INPUT
  survey_link VARCHAR(255) NOT NULL, 
  time_created TIMESTAMP NOT NULL,  
  time_closed TIMESTAMP  DEFAULT NULL, -- Null if survey open (FALSE BOOLEAN IF NO TIME)
  time_to_death TIMESTAMP DEFAULT NULL -- By default our surveys should never die because they unicorn thunder
);
