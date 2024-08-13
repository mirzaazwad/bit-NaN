ALTER TABLE forum
    ADD COLUMN IF NOT EXISTS title varchar(200);
ALTER TABLE forum
    ADD COLUMN IF NOT EXISTS description TEXT;

ALTER TABLE forum
    DROP COLUMN IF EXISTS image;
ALTER TABLE forum_reviews
    DROP COLUMN IF EXISTS image;
ALTER TABLE forum_stars
    DROP COLUMN IF EXISTS image;
ALTER TABLE chat
    DROP COLUMN IF EXISTS image;
ALTER TABLE chat_upvotes
    DROP COLUMN IF EXISTS image;
ALTER TABLE chat_downvotes
    DROP COLUMN IF EXISTS image;
ALTER TABLE chat_comments
    DROP COLUMN IF EXISTS image;
ALTER TABLE chat_documents
    DROP COLUMN IF EXISTS image;

ALTER TABLE forum
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE forum_reviews
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE forum_stars
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE chat
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE chat_upvotes
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE chat_downvotes
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE chat_comments
    DROP COLUMN IF EXISTS user_name;
ALTER TABLE chat_documents
    DROP COLUMN IF EXISTS user_name;

ALTER TABLE forum
    ADD COLUMN IF NOT EXISTS modified DATE;

ALTER TABLE forum
    ADD COLUMN IF NOT EXISTS is_removed BOOLEAN;

ALTER TABLE forum_reviews
    ADD COLUMN IF NOT EXISTS is_removed BOOLEAN;

ALTER TABLE chat
    ADD COLUMN IF NOT EXISTS is_removed BOOLEAN;

ALTER TABLE chat_comments
    ADD COLUMN IF NOT EXISTS is_removed BOOLEAN;

ALTER TABLE chat_documents
    ADD COLUMN IF NOT EXISTS is_removed BOOLEAN;
