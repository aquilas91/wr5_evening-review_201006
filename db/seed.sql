CREATE TABLE evening_review_users (
  er_user_id SERIAL PRIMARY KEY,
  email VARCHAR(250),
  hash VARCHAR(500)
);