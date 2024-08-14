ALTER TABLE chat_comments
    ADD COLUMN upvotes BIGINT;
ALTER TABLE chat_comments
    ADD COLUMN downvotes BIGINT;

CREATE TABLE IF NOT EXISTS chat_comment_upvotes
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    created    DATE,
    CONSTRAINT fk_chat_comments_upvotes_comment_id FOREIGN KEY (comment_id) REFERENCES chat_comments (id)
);

CREATE TABLE IF NOT EXISTS chat_comment_downvotes
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    comment_id UUID         NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    created    DATE,
    CONSTRAINT fk_chat_comments_downvotes_comment_id FOREIGN KEY (comment_id) REFERENCES chat_comments (id)
);

ALTER TABLE chat_documents
    DROP COLUMN IF EXISTS modified;

ALTER TABLE chat_documents
    DROP COLUMN IF EXISTS modified;

ALTER TABLE chat_upvotes
    DROP COLUMN IF EXISTS modified;

ALTER TABLE chat_downvotes
    DROP COLUMN IF EXISTS modified;

ALTER TABLE chat_comments
    DROP COLUMN IF EXISTS modified;