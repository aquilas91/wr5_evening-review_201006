INSERT INTO evening_review_users (email, hash)
VALUES ($1, $2)
RETURNING *;